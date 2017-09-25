const express = require('express');
const indexController = require('../controllers/indexController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

router.get('/', indexController.home);
router.get('/school/:schoolSlug',
  catchErrors(indexController.getSchool),
  indexController.school,
);
router.get('/school/:schoolSlug/details',
  catchErrors(indexController.getSchool),
  indexController.schoolDetails,
);
router.get('/school/:schoolSlug/courses',
  catchErrors(indexController.getSchool),
  indexController.schoolCourses,
);
router.get('/discover', indexController.discover);

module.exports = router;
