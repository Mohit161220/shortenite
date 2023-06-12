const validator = require('validator');
const QRCode = require('qrcode');
const QR = require('../models/qr')
const LINK = require('../models/links');
const USER = require('../models/user');
const generateKey = require('../lib/keyGenerater');

module.exports.getAllQrofUser = async function(req, res){
    try {
        let user = await USER.findById(req.user._id).populate({
            path : 'qrcode',
            Model : 'QRCode',
            select : 'key url title',
            populate : {
                path : 'link', 
                Model : 'Link',
                select : 'key hitcount'
            }
        });
        return res.status(200).json({
            success : true,
            data : user.qrcode
        });
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message,
            data : null
        });
    }
};

module.exports.getQRDetailsById = async function(req, res){
    try {
        let user = await USER.findById(req.user._id);
        let qr = await QR.findById(req.params.id);
        if(user.id !== qr.user.valueOf()){
            throw new Error('Unauthorized Access to get a QR Details');
        }
        qr = await QR.findById(req.params.id).populate({
            path : 'link',
            Model : 'Link',
            select : 'key url title hitCount'
        });
        let returnObj = {
            id : qr._id,
            key : qr.key,
            url : qr.url,
            title : qr.title,
            qrcode : qr.link,
            hitCount : qr.hitCount
        }
        return res.status(200).json({
            success : true,
            data : returnObj
        })
    } catch(error) {
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
}

module.exports.createQr = async function(req, res){
    try {
        let createQrForm = req.body;
        let validationResult = validateOne(createQrForm);
        if(!(await validationResult).success){
            throw new Error('Create Qr Form validation failed');
        }
        let title = req.body.title;
        let destinationUrl = req.body.url;
        let qr = await QRCode.toDataURL(destinationUrl);
        
        let ans = await QR.create({
            key : qr,
            url : destinationUrl,
            title : title,
            user : req.user.id
        });

        let shortKeyForLink = await generateKey();

        let linkForThisQr = await LINK.create({
            key : shortKeyForLink,
            url : destinationUrl,
            title : title,
            user : req.user.id,
            qrcode : ans._id
        })

        const newQr = await QR.findById(ans._id);
        newQr.link = linkForThisQr._id;
        newQr.save();

        const newUser = await USER.findById(req.user.id);
        newUser.qrcode.push(ans);
        newUser.links.push(linkForThisQr);
        newUser.save();

        let data = await QR.findById(ans._id);

        return res.status(200).json({
            success : true,
            message : 'qr created',
            data : data
        });
    } catch(error){
        return res.status(200).json({
            success : false,
            message : error.message
        });
    }
};

module.exports.edit = async function(req, res){
    try {
        let editFormBody = req.body;
        let validationResult = await validateOne(editFormBody);
        if(!validationResult.success){
            throw new Error('Edit form validation failed');
        }
        let qr = QR.findById(req.params.id);
        if(!qr) {
            throw new Error('QR not found!');
        }
        let ans = await QR.findByIdAndUpdate(req.params.id, {
            title : req.body.title,
            url : req.body.url
        });
        return res.status(200).json({
            success : true,
            data : ans
        })
    } catch(error){
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
        let newQR = await QR.findById(req.params.id);
        let linkId = newQR.link.valueOf();
        if(userID.valueOf() !== newQR.user._id.valueOf()){
            throw new Error('Unauthorized Access to delete a QR');
        }
        let updatedUser = await USER.findByIdAndUpdate(req.user._id, {
            $pull : {
                qrcode : req.params.id,
                links : linkId
            }
        });
        await LINK.findByIdAndDelete(linkId);
        let qr = await QR.deleteOne({
            _id : req.params.id
        });
        return res.status(200).json({
            success : true,
            message : 'QR Deleted',
            user : updatedUser,
            qr : qr
        })
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message
        })
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

    if(!payload || validator.isURL(payload.url, { require_tld : false }) == false || validator.isEmpty(payload.url)){
        isFormValid = false;
        errors.url = 'URL Empty or it is not a url';
    }

    return {
        success : isFormValid,
        errors
    }
}