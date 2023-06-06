const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links_controller');


router.get('/', linksController.getAllLinksofUser);
router.post('/create-link', linksController.createLink);

module.exports = router;
