const express = require('express');
const router = express.Router();
const passport = require('passport');
const qrController = require('../controllers/qr_controller');

router.get('/', passport.checkAuthentication, qrController.getAllQrofUser);
router.post('/create-qr', qrController.createQr);
module.exports = router;
