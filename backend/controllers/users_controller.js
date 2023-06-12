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

module.exports.updateUserName = async function(req, res){
    try {
        let updateUserNameForm = req.body;
        let validationResult = await validateUpdateUserName(updateUserNameForm);
        if(!(await validationResult).success){
            throw new Error('Update UserName form validation failed');
        }
        let userNameToUpdate = req.body.username;
        let user = await USER.findById(req.user._id);
        user.username = userNameToUpdate;
        user.save();
        return res.status(200).json({
            success : true,
            data : req.user.username
        })
    } catch(error){
        return res.status(200).json({
            success : false,
            message : error.message
        })
    }
}

module.exports.updatePassword = async function(req, res){
    try {
        let updateUserPasswordForm = req.body;
        let validationResult = await validateUpdatePassword(updateUserPasswordForm);
        if(!(await validationResult).success){
            throw new Error('Update password form validation failed');
        }
        if(req.body.newPassword !== req.body.confirmPassword){
            throw new Error('New Password and Confirm Password do not match');
        }
        let user = await USER.findById(req.user._id);
        let hash = Encryption.generateHashedPassword(user.salt, req.body.OldPassword);
        if(hash !== user.password) {
            throw new Error('Old Password is not correct');
        }
        let salt = await Encryption.generateSalt();
        let hashedPassword = await Encryption.generateHashedPassword(salt, req.body.newPassword);
        await USER.findByIdAndUpdate(req.user._id, {
            password : hashedPassword
        })
        return res.status(200).json({
            success : true,
            message : 'Password updated'
        });
    } catch(error){
        return res.status(200).json({
            success : false,
            message : error.message
        });
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

module.exports.deleteProfileOfCurrentUser = async function(req, res){
    await LINK.deleteMany({user : req.user.id});
    await QR.deleteMany({user : req.user.id});
    let use = await USER.findByIdAndDelete(req.user.id);
    return res.status(200).json({
        success : true,
        data : use
    });
};

async function validateUpdateUserName(payload) {
    let errors = {};
    let isFormValid = true;

    if(!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
        isFormValid = false;
        errors.title = 'Username Empty or typeof Username is not String';
    }
    
    return {
        success : isFormValid,
        errors
    }
}

async function validateUpdatePassword(payload) {
    let errors = {};
    let isFormValid = true;

    if(!payload || typeof payload.newPassword !== 'string' || payload.newPassword.trim().length === 0) {
        console.log(1);
        isFormValid = false;
        errors.title = 'newPassword Empty or typeof newPassword is not String';
    }

    if(!payload || typeof payload.confirmPassword !== 'string' || payload.confirmPassword.trim().length === 0) {
        console.log(2);
        isFormValid = false;
        errors.title = 'confirmPassword Empty or typeof confirmPassword is not String';
    }

    if(!payload || typeof payload.OldPassword !== 'string' || payload.OldPassword.trim().length === 0) {
        console.log(3);
        isFormValid = false;
        errors.title = 'oldPassword Empty or typeof oldPassword is not String';
    }

    return {
        success : isFormValid,
        errors
    }
}

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