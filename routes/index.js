const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.home);
router.get('/school/:schoolSlug', indexController.school);
router.get('/school/:schoolSlug/details', indexController.schoolDetails);
router.get('/school/:schoolSlug/courses', indexController.schoolCourses);

module.exports = router;
