const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/courses', apiController.courses);

router.get('/mobile/schools/search/index', apiController.mobileSchoolsSearchIndex);

module.exports = router;
router.get('/mobile/schools/search/index', apiController.mobileSchoolsSearchIndex);