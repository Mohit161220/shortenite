const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const passport = require('passport');

router.post('/sign-up', usersController.signUp); 
router.post('/sign-in', passport.authenticate('local', {
    failureRedirect : '/users/login-fail'
}) , usersController.signIn);
router.get('/login-fail', usersController.loginFail);
router.get('/unauthorized', usersController.unauthorized);  
router.get('/auth', passport.checkAuthentication, usersController.isAuth);
router.post('/update-username', passport.checkAuthentication, usersController.updateUserName);
router.post('/update-password', passport.checkAuthentication, usersController.updatePassword);
router.get('/sign-out', passport.checkAuthentication, usersController.signOut); 
router.get('/me', passport.checkAuthentication, usersController.getAccountDetailsOfCurrentUser);
router.delete('/me', passport.checkAuthentication, usersController.deleteProfileOfCurrentUser);

module.exports = router;