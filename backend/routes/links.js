const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links_controller');

console.log('links router');
router.get('/', linksController.getAllLinksofUser);
router.post('/create-link', linksController.createLink);
router.patch('/edit', linksController.edit);
router.delete('/delete/:id', linksController.delete);
module.exports = router;
