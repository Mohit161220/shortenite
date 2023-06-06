const bcrypt = require('bcrypt');
const saltRounds = 10;
const LINK = require('../models/links');
const USER = require('../models/user');
module.exports.getAllLinksofUser = function(req, res){
    // get all the links of user who is logged in..
    return res.status(200).json({
        message : 'Gotcha'
    });
};

module.exports.createLink = async function(req, res){
    let title = req.body.title;
    let destinationUrl = req.body.url;
    let shortUrl = req.body.key;
    if(!shortUrl){
        shortUrl = await generateRandomString(destinationUrl);
    } 
    // console.log(shortUrl);
    let ans = await LINK.create({
        key : shortUrl,
        url : destinationUrl,
        title : title
    })
    return res.status(200).json({
        message : 'link created',
        data : ans
    });
};

module.exports.handleRedirect = async function(req, res){
    const keyFromReq = req.params.id;
    const url = await LINK.find({
        key : keyFromReq
    });
    if(!url) {
        return res.status(302).json({
            data : 'Not Available'
        })
    }
    return res.status(200).json({
        message : 'Gotcha1',
        url : url.url
    });
};

// generates random 7 character string
async function generateRandomString(destinationUrl){
    let salt = await bcrypt.genSalt(saltRounds);
    shortUrl = await bcrypt.hash(destinationUrl, salt);
    return shortUrl;
}