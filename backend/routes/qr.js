const express = require('express');
const router = express.Router();
const passport = require('passport');
const qrController = require('../controllers/qr_controller');

router.get('/', passport.checkAuthentication, qrController.getAllQrofUser);
router.post('/create-qr', passport.checkAuthentication, qrController.createQr);
router.delete('/delete/:id', passport.checkAuthentication, qrController.delete);

module.exports = router;