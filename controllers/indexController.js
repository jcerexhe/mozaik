const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');
const Course = mongoose.model('Course');
const StudyArea = mongoose.model('StudyArea');

exports.home = (req, res) => {
  // Get device used to view
  let viewDevice = req.device.type
  
  let allArt = [];

  School.find().then(schools => {
    if (schools) {
      schools.forEach(school =>{
        allArt = allArt.concat(school.artworks);
      });

      if (viewDevice == 'desktop') {
        const Hero = reactHelper.renderComponent('HeroApp');
        let homeLightbox = reactHelper.renderComponent('HomeArtworkApp', { search: true, artworks: allArt});
        res.render('home', { Hero, homeLightbox });
      } else {
        const HeroMob = reactHelper.renderComponent('MobileHomeHero');
        const Artworks = reactHelper.renderComponent('MobileHomeArtworks', {artworks: allArt});
        res.render('mobile/home', {HeroMob, Artworks});
      };

    }
  })


};

exports.getSchool = async (req, res, next) => {
  const school = await School.findOne({ slug: req.params.schoolSlug });
  if (!school) {
    res.redirect('/');
  } else {
    res.locals.school = school;
    next();
  }
};

exports.getStudyArea = async (req, res, next) => {
  const area = await StudyArea.findOne({ slug: req.params.areaSlug });
  if (!area) {
    res.redirect('/');
  } else {
    res.locals.area = area;
    next();
  }
};

exports.getCourse = async (req, res, next) => {
  const course = await Course.findOne({ slug: req.params.courseSlug });
  if (!course) {
    res.redirect('/');
  } else {
    res.locals.course = course;
    next();
  }
};

exports.schoolArtwork = (req, res) => {
  const school = res.locals.school;
  const course = res.locals.course;
 };


exports.schoolDetails = (req, res) => {
  const school = res.locals.school;
  const displayedArt = school.displayedArt;
  const artworks = school.artworks;
  const schoolLightBox = reactHelper.renderComponent('ArtworkApp', { search: false, artworks: artworks, displayedArt: displayedArt });
  const CampusMaps = reactHelper.renderComponent('CampusApp', { campuses: school.locations });
  const Facilities = reactHelper.renderComponent('FacilitiesApp', { images: school.facilitiesImages });
  const Alumni = reactHelper.renderComponent('AlumniApp', { alumni: school.alumni });
  const Courses = reactHelper.renderComponent('CoursesApp', { courses: school.courses, schoolDisciplines: school.disciplines, school: school });

  res.render('schoolDetails', { school, schoolLightBox, CampusMaps, Facilities, Alumni, Courses });
};

exports.schoolCourses = (req, res) => {
  const school = res.locals.school;
  const Courses = reactHelper.renderComponent('CoursesApp', { courses: school.courses, schoolDisciplines: school.disciplines, school: school });
  res.render('schoolCourses', { school, Courses });
};

exports.discover = (req, res) => {
  School.find().then(schools => {
    const Discover = reactHelper.renderComponent('DiscoverApp', { schoolsInfo: schools });
  res.render('discover', { Discover });
  });
};

exports.about = (req, res) => {
  const About = reactHelper.renderComponent('AboutApp');
  res.render('about', { About });
};


exports.studyAreas= (req, res) => {
  const Search = reactHelper.renderComponent('SearchApp');
  res.render('studyArea', {Search });
};

exports.partner = (req, res) => {
  const Partner = reactHelper.renderComponent('PartnerApp');
  res.render('partner', { Partner });

};

exports.agency = (req, res) => {
  const Agency = reactHelper.renderComponent('AgencyApp');
  res.render('agency', { Agency });

};

exports.performingArts = (req, res) => {
  const area = res.locals.area;
  const PerformingArts = reactHelper.renderComponent('PerformingArtsApp', {studyarea: area});
  res.render('performingArts', { PerformingArts });

};

exports.selectArea = (req, res) => {
  const SelectArea = reactHelper.renderComponent('SelectAreaApp');
  res.render('selectArea', { SelectArea });

};