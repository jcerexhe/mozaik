const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/courses', apiController.courses);

module.exports = router;
