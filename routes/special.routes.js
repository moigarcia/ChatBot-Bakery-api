const express = require('express');
const router = express.Router();
const specialController = require('../controllers/special.controller');

router.get('/', specialController.get);

module.exports = router;
