const QRCode=require('qrcode')
const validator = require('validator')
const QR =require('../models/qr')


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

module.exports.getAllQrsofUser = function(req, res){
    // get all the links of user who is logged in..
    return res.status(200).json({
        message : 'Gotcha'
    });
};

module.exports.createQr = async function(req, res){
    let title = req.body.title;
    let destinationUrl = req.body.url;
    let qr = await QRCode.toDataURL(destinationUrl);
     
    // console.log(shortUrl);
    let ans = await QR.create({
        key : qr,
        url : destinationUrl,
        title : title
    })
    return res.status(200).json({
        message : 'qr created',
        data : ans
    });
};

module.exports.delete = async function(req, res){
    let qr = await QR.deleteOne({
        _id : req.params.id
    })
    return res.status(200).json({
        message : 'Qr Deleted',
        data : qr
    })
}
