const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const indexController = require('../controllers/indexController');

router.get('/', authController.isLoggedIn, indexController.dashboard);

module.exports = router;
