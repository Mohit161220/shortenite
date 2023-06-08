const express = require('express');
const router = express.Router();
const QrController = require('../controllers/qr_controller');

router.get('/', QrController.getAllQrsofUser);
// router.post('/create-link', linksController.createLink);

module.exports = router;
