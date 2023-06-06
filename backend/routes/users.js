const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
// localhost:5000/users/sign-up
router.post('/sign-up', usersController.signUp); 
// localhost:5000/users/sign-in
router.post('/sign-in', usersController.signIn);
// localhost:5000/users/sign-out 
router.get('/sign-out', usersController.signOut); 
// localhost:5000/users/me
router.get('/me', usersController.getAccountDetailsOfCurrentUser);
// localhost:5000/users/me
router.delete('/me', usersController.deleteProfileOfCurrentUser);

module.exports = router;