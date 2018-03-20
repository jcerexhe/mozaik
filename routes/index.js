const express = require('express');
const indexController = require('../controllers/indexController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

router.get('/', indexController.home);
router.get('/school/:schoolSlug/artwork',
  catchErrors(indexController.getSchool),
  indexController.schoolArtwork,
);
router.get('/school/:schoolSlug/:courseSlug/artwork',
  catchErrors(indexController.getSchool),
  catchErrors(indexController.getCourse),
  indexController.schoolArtwork,
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
router.get('/about',indexController.about);
module.exports = router;
