const validator = require('validator');
const USER = require('../models/user');
const Encryption = require('../lib/encryption');
const LINK = require('../models/links');
const QR = require('../models/qr');

module.exports.isAuth = async function(req, res){
    try {
        return res.status(200).json({
            success : true,
            message : 'You are Authorized'
        })
    } catch(error){
        return res.status(200).json({
            success : false,
            message : 'You are UnAuthorized'
        })
    }
}

module.exports.signUp = async function(req, res){
    try {
        let SignUpForm = req.body;
        let validationResult = validateSignUp(SignUpForm);
        if(!(await validationResult).success){
            throw new Error('Sign up form validation failed');
        }
        let user = await USER.findOne({email : req.body.email});
        if(user) {
            throw new Error('Email Already Exist');
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
                success : true,
                message : 'user signed up successfully',
                data : newUser
            })
        }
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
};

module.exports.signIn = async function(req, res){
    try {
        let data = {
            username : req.user.username,
            email : req.user.email
        }
        return res.status(200).json({
            success : true,
            message : 'sign-in succesfull',
            data : data
        })
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
};

module.exports.loginFail = async function(req, res){
    return res.status(200).json({
        success : false,
        message : 'Login failed',
        data : null
    });
};

module.exports.unauthorized = async function(req, res){
    return res.status(200).json({
        success : false,
        message : 'You are Unauthorized',
        data : null
    });
};

module.exports.signOut = async function(req, res){
    try {
        await req.logout(function(err){
            if(err){
                throw new Error('Error in logging out');
            }
            return res.status(200).json({
                success : true,
                message : 'Logged out',
                data : req.user
            });
        });
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
};

module.exports.getAccountDetailsOfCurrentUser = async function(req, res){
    try {
        let user = await USER.findById(req.user.id);
        if(!user) {
            throw new Error('Unauthorized Login')
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
        return res.status(401).json({
            success : false,
            message : 'Unauthorized',
            data : null
        });
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

async function validateSignUp(payload) {
    let errors = {};
    let isFormValid = true;

    if(!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
        isFormValid = false;
        errors.title = 'Username Empty or typeof Username is not String';
    }

    if(!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.title = 'password Empty or typeof password is not String';
    }

    if(!payload || validator.isEmail(payload.email) == false || validator.isEmpty(payload.email)){
        isFormValid = false;
        errors.title = 'email Empty or it is not a email';
    }
    
    return {
        success : isFormValid,
        errors
    }
}