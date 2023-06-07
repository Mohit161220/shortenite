const bcrypt = require('bcrypt');
const saltRounds = 10;
const LINK = require('../models/links');
const USER = require('../models/user');

module.exports.getAllLinksofUser = function(req, res){
    // get all the links of user who is logged in..
    console.log('getAllLinksofUser');
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
}
// have to work on this
module.exports.delete = async function(req, res){
    let link = await LINK.deleteOne({
        _id : req.params.id
    })
    return res.status(200).json({
        data : link
    })
}

// generates random 7 character string
async function generateRandomString(destinationUrl){
    let salt = await bcrypt.genSalt(saltRounds);
    shortUrl = await bcrypt.hash(destinationUrl, salt);
    return shortUrl;
}