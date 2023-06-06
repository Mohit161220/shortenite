const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links_controller');

console.log('Routes -> Index.js');

router.use('/users', require('./users'));
router.use('/links', require('./links'));
router.get('/:id', linksController.handleRedirect);

module.exports = router;