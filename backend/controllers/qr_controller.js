const QRCode=require('qrcode')
const LINK = require('../models/links');
const USER = require('../models/user');
const QR =require('../models/qr')

module.exports.getAllLinksofUser = function(req, res){
    // get all the links of user who is logged in..
    return res.status(200).json({
        message : 'Gotcha'
    });
};

module.exports.createLink = async function(req, res){
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
