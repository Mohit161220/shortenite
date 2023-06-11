const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const USER = require('../models/user');
const validatePassword = require('../lib/encryption').validatePassword;

passport.use(new localStrategy({
        usernameField : 'email',
        passReqToCallback : true
    }, async function(req, email, password, done){
        try {
            let user = await USER.findOne({
                email : email
            });
            if(!user) {
                console.log('=====================');
                return done(null, false);
            } else if(user && validatePassword(password, user.password, user.salt) == false){
                console.log('*********************');
                return done(null, false);
            } else {
                console.log('++++++++++++++++++++++');
                console.log(`${user.email} signed in`);
                return done(null, user);
            }
        } catch(error) {
            return done(error);
        }
    }
));

passport.serializeUser(function(user, done){
    return done(null, user.id);
})

passport.deserializeUser(async function(id, done){
    console.log("got here");
    try {
        let user = await USER.findById(id);
        // console.log('user ====> ', user);
        return done(null, user);
    } catch (error) {
        console.log('Error in finding user --> passport');
        return done(error);
    }
})

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/unauthorized');
}

passport.setAuthenticatedUser = function(req, res, next){
    console.log('setAuthenticatedUser run');
    if(req.isAuthenticated()){
        // console.log('req.user : ' + req.user);
    }
    next();
}

module.exports = passport;