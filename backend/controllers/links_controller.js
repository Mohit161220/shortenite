const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const LINK = require('../models/links');
const USER = require('../models/user');
const QR = require('../models/qr');
const insertHit = require('../utils/hitInsert');
const generateKey = require('../lib/keyGenerater');

module.exports.getAllLinksofUser = async function(req, res){
    let user = await USER.findById(req.user._id).populate({
        path : 'links',
        Model : 'Link',
        select : 'key url title hitCount qrcode',
        populate : {
            path : 'qrcode',
            Model : 'QRCode',
            select : 'key url title'
        }
    });
    return res.status(200).json({
        success : true,
        message : 'Gotcha',
        data : user.links
    });
};

module.exports.getLinkDetailsById = async function(req, res){
    try {
        let user = await USER.findById(req.user._id);
        let links = await LINK.findById(req.params.id);
        if(user.id !== links.user.valueOf()) {
            throw new Error('Unauthorized Access to get a Link Details');
        }
        links = await LINK.findById(req.params.id).populate({
            path : 'qrcode',
            Model : 'QRCode',
            select : 'key url title'
        })
        let returnObj = {
            id : links._id,
            key : links.key,
            url : links.url,
            title : links.title,
            hitCount : links.hitCount,
            qrcode : links.qrcode
        }
        return res.status(200).json({
            success : true,
            data : returnObj
        });
    } catch(error){
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
}

module.exports.handleRedirect = async function(req, res){
    try {
        const keyFromReq = req.params.id;
        const link = await LINK.find({
            key : keyFromReq
        });
        if(link.length == 0){
            return res.redirect('http://localhost:3000');
        }
        let ip = req.socket.remoteAddress;
        let userAgent = req.headers['user-agent'];
        await insertHit(ip, userAgent, link[0]._id);
        return res.redirect(link[0].url);
    } catch(error) {
        return res.redirect('http://localhost:3000');
    }
};

module.exports.createLink = async function(req, res){
    try {
        let createLinkForm = req.body;
        let validationResult = validateOne(createLinkForm);
        if(!(await validationResult).success){
            throw new Error('Create Link form validation failed');
        }
        let title = req.body.title;
        let destinationUrl = req.body.url;
        let shortUrl = req.body.key;
        if(!shortUrl){
            shortUrl = await generateKey();
        }
        let ans = await LINK.create({
            key : shortUrl,
            url : destinationUrl,
            title : title,
            user : req.user.id
        });

        const newUser = await USER.findById(req.user.id);
        newUser.links.push(ans);
        newUser.save();
        
        return res.status(200).json({
            success : true,
            message : 'link created',
            data : ans
        });
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success : false,
            message: error.message
        });
    }
};

module.exports.edit = async function(req, res){
    console.log("trying to edit")
    try {
        let editFormBody = req.body;
        let validationResult =await validateOne(editFormBody);
        if(!validationResult.success){
            throw new Error('Edit form validation failed');
        }
        let link  = await LINK.findById(req.params.id);
        if(!link) {
            throw new Error('link not found');
        }
        link.key = req.body.key;
        link.title = req.body.title;
        link.url = req.body.url;
        await link.save();
        return res.status(200).json({
            success : true,
            message : 'Link updated',
            data : link
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success : false,
            message: error.message
        });
    }
}

module.exports.delete = async function(req, res){
    try {
        let userID = req.user._id;
        let newLink = await LINK.findById(req.params.id);
        let QRid;
        if(newLink.qrcode) {
            QRid = newLink.qrcode.valueOf();
        }
        if(userID.valueOf() !== newLink.user._id.valueOf()){
            throw new Error('Unauthorized Access to delete a Link');
        }
        let updatedUser = await USER.findByIdAndUpdate(req.user._id, {
            $pull : {
                links : req.params.id,
                qrcode : QRid
            }
        });
        await QR.findByIdAndDelete(QRid);
        let link = await LINK.deleteOne({
            _id : req.params.id
        });
        return res.status(200).json({
            success : true,
            message : 'Link Deleted',
            user : updatedUser,
            link : link
        })
    } catch(error){
        console.log(error);
        return res.status(400).json({
            success : false,
            message: error.message
        });
    }
}

async function generateRandomString(destinationUrl){
    let salt = await bcrypt.genSalt(saltRounds);
    shortUrl = await bcrypt.hash(destinationUrl, salt);
    return shortUrl;
}

async function validateOne(payload) {
    let errors = {};
    let isFormValid = true;

    if(!payload || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
        console.log(1);
        isFormValid = false;
        errors.title = 'Title Empty or typeof title is not String';
    }

    // validator.isURL(payload.url, { require_tld : false }) == false || 
    if(!payload || validator.isEmpty(payload.url)){
        console.log(2)
        isFormValid = false;
        errors.url = 'URL Empty or it is not a url';
    }

    if(!payload || payload.key && typeof payload.key !== 'string' && payload.key.length() != 10) {
        console.log(3);
        isFormValid = false;
        errors.key = 'Key is not of a valid type'
    }

    return {
        success : isFormValid,
        errors
    }
}