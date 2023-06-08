const express = require('express');
const router = express.Router();
const passport = require('passport');
const QrController = require('../controllers/qr_controller');

router.get('/', passport.checkAuthentication, QrController.getAllQrsofUser);
router.post('/create-qr', QrController.createQr);
router.delete('/delete/:id', passport.checkAuthentication, QrController.delete);

module.exports = router;
