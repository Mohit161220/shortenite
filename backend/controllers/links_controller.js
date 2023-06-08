const bcrypt = require('bcrypt');
const saltRounds = 10;
const validator = require('validator');
const LINK = require('../models/links');
const USER = require('../models/user');

function validateOne(payload) {
    let errors = {};
    let isFormValid = true;

    if(!payload || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
        isFormValid = false;
        errors.title = 'Title Empty or typeof title is not String';
    }

    if(!payload || typeof payload.url !== 'string' || payload.url.trim().length === 0){
        isFormValid = false;
        errors.url = 'URL Empty or typeof URL is not String';
    }

    if(!payload || typeof payload.key !== 'string') {
        isFormValid = false;
        errors.key = 'typeof KEY is not String'
    }

    return {
        success : isFormValid,
        errors
    }
}

module.exports.getAllLinksofUser = function(req, res){
    // get all the links of user who is logged in..
    console.log(req.user.links);
    return res.status(200).json({
        message : 'Gotcha'
    });
};

module.exports.createLink = async function(req, res){
    try {
        console.log('GOT INSIDE CREATE LINK');
        let title = req.body.title;
        let destinationUrl = req.body.url;
        let shortUrl = req.body.key;
        if(!shortUrl){
            shortUrl = await generateRandomString(destinationUrl);
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
            message : 'link created',
            data : ans
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Something went wrong, please try again.'
        });
    }
};

module.exports.handleRedirect = async function(req, res){
    console.log('coming here');
    const keyFromReq = req.params.id;
    const link = await LINK.find({
        key : keyFromReq
    });
    if(link.length == 0){
        return res.status(404).json({
            message : 'Link not found'
        });
    }
    return res.status(200).json({
        message : 'Link Found',
        data : link[0].url
    })
};

module.exports.edit = async function(req, res){
    // edit the link
    try {
        let editFormBody = req.body;
        let validationResult = validateOne(editFormBody);
        if(!validationResult.success){
            throw new Error('Edit form validation failed');
            // return res.status(400).json({
            //     message : 'Edit form validation failed',
            //     errors : validationResult.errors
            // })
        }
        let link  = await LINK.findById(req.params.id);
        if(!link) {
            throw new Error('link not found');
            // console.log('link not found');
            // return res.status(404).json({
            //     message : 'link not found',
            //     data : link
            // });
        }
        // console.log(req.body.key);
        let linkKey = await LINK.findOne({key : req.body.key});
        if(linkKey && link.id !== linkKey.id){
            throw new Error('KEY Already in use');
            // console.log('KEY Already in use');
            // return res.status(404).json({
            //     message : 'key Already in use',
            //     data : req.body.key
            // });
        }
        link.key = req.body.key;
        link.title = req.body.title;
        link.url = req.body.url;
        await link.save();
        return res.status(200).json({
            message : 'Link updated',
            data : link
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message
        });
    }
}
// have to work on this
// as this link is getting deleted,, we have to go to the user and need to remove this link for users link array
module.exports.delete = async function(req, res){
    let link = await LINK.deleteOne({
        _id : req.params.id
    })
    return res.status(200).json({
        message : 'Link Deleted',
        data : link
    })
}

// generates random 7 character string
async function generateRandomString(destinationUrl){
    let salt = await bcrypt.genSalt(saltRounds);
    shortUrl = await bcrypt.hash(destinationUrl, salt);
    return shortUrl;
}