const express = require('express');
const router = express.Router();
const passport = require('passport');
const linksController = require('../controllers/links_controller');

router.patch('/edit/:id', passport.checkAuthentication, linksController.edit);
router.get('/', passport.checkAuthentication, linksController.getAllLinksofUser);
router.get('/details/:id', passport.checkAuthentication, linksController.getLinkDetailsById);
router.post('/create-link', passport.checkAuthentication , linksController.createLink);
router.delete('/delete/:id', passport.checkAuthentication, linksController.delete);

module.exports = router;