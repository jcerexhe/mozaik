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
router.get('/about-us',indexController.about);
router.get('/study-areas',indexController.studyAreas);
router.get('/partner-with-mozaik',indexController.partner);
router.get('/agency-mozaik',indexController.agency);
router.get('/study-areas/performing-arts',indexController.performingArts);

module.exports = router;
