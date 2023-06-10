const bcrypt = require('bcrypt');
const saltRounds = 10;
const QRCode = require('qrcode');
const QR = require('../models/qr')
const LINK = require('../models/links');
const USER = require('../models/user');
const generateKey = require('../lib/keyGenerater');

async function generateRandomString(destinationUrl){
    let salt = await bcrypt.genSalt(saltRounds);
    shortUrl = await bcrypt.hash(destinationUrl, salt);
    return shortUrl;
}

//                      TODO
module.exports.getAllQrofUser = function(req, res){
    // get all the QRCODE of user who is logged in..
    return res.status(200).json({
        message : 'Gotcha... QRCODE...'
    });
};

/*
** ----   Everytime user Create QR CODE, LINK will be created automatically, with system Gen KEY
*/

module.exports.createQr = async function(req, res){
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
    // also need to check whether this link exists in database or not.
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
        message : 'qr created',
        data : data
    });
};

// NEED SAME WORK AS LINK DELETE
module.exports.delete = async function(req, res){
    let qr = await QR.deleteOne({
        _id : req.params.id
    })
    return res.status(200).json({
        message : 'Qr Deleted',
        data : qr
    })
}