const crypto = require('crypto');
// README.MD -> https://datatracker.ietf.org/doc/html/rfc8018#appendix-A.2
module.exports.generateSalt = function(){
    return crypto.randomBytes(32).toString('hex');
}

module.exports.generateHashedPassword = function(salt, password){
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

module.exports.validatePassword = function(password, hash, salt){
    let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}