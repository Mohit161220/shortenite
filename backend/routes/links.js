const express = require('express');
const router = express.Router();
const passport = require('passport');
const linksController = require('../controllers/links_controller');

// link status route and controller to be added..

router.get('/', passport.checkAuthentication, linksController.getAllLinksofUser);
router.post('/create-link', passport.checkAuthentication , linksController.createLink);
router.patch('/edit/:id', passport.checkAuthentication, linksController.edit);
router.delete('/delete/:id', passport.checkAuthentication, linksController.delete);

module.exports = router;