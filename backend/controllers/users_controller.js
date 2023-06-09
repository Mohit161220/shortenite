const USER = require('../models/user');
const Encryption = require('../lib/encryption');

module.exports.signUp = async function(req, res){
    try {
        let user = await USER.findOne({email : req.body.email});
        if(user) {
            console.log('User Already Exist');
            return res.status(200).json({
                message : 'User Already Exist'
            });
        } else if(!user){
            let user = {
                username : req.body.username,
                email : req.body.email,
                password : req.body.password
            }
            let salt = Encryption.generateSalt();
            let hashedPassword = Encryption.generateHashedPassword(salt, req.body.password);
            
            user.password = hashedPassword;
            user.salt = salt;

            let newUser = await USER.create(user);
            if(newUser) {
                console.log('Sign up completed');
            }
            return res.status(200).json({
                message : 'user signed up successfully',
                data : newUser
            })
        }
    } catch (error) {
        console.log('Error in Sign-Up : ', error);
        return;
    }
};

module.exports.signIn = function(req, res){
    return res.status(200).json({
        message : 'sign-in succesfull',
        data : req.user
    })
};

module.exports.loginFail = function(req, res){
    return res.status(401).json({
        message : 'Login failed',
        data : null
    });
};

module.exports.unauthorized = function(req, res){
    return res.status(401).json({
        message : 'You are Unauthorized',
        data : null
    });
};

module.exports.signOut = function(req, res){
    console.log(req.user.id);
    console.log(`${req.user.email} signed out!`);
    req.logout(function(err){
        if(err){
            console.log(err);
            return res.status(200).json({
                message : 'failure'
            })
        }
        return res.status(200).json({
            message : 'Logged out',
            data : req.user
        });
    });
};

module.exports.getAccountDetailsOfCurrentUser = async function(req, res){
    try {
        let user = await USER.findById(req.user.id);
        if(!user) {
            return res.status(401).json({
                message : 'Unauthorized',
                data : null
            });
        }
        let newUser = {
            id : user.id,
            username : user.username,
            email : user.email,
            links : user.links,
            qrcode : user.qrcode
        }
        return res.status(200).json({
            success : true,
            data : newUser
        });
    } catch (error) {
        console.log('*****error in getAccountDetailsOfCurrentUsers', error);
        return;
    }
};

/**
 * 
 * - Before DELETING user profile, Delete ALL LINKS AND QR created by USER
 * - Delete EMAIL, USERNAME, PASSWORD of that USER
 *  
 */

module.exports.deleteProfileOfCurrentUser = async function(req, res){
    let use = await USER.findByIdAndDelete(req.user.id);
    return res.status(200).json({
        success : true,
        data : use
    });
};