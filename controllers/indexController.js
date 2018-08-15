const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');
const Course = mongoose.model('Course');
const StudyArea = mongoose.model('StudyArea');

exports.findSchoolsAndStudyAreas = async (req, res, next) => {
  res.locals.allSchools = await School.find();
  res.locals.allStudyAreas = await StudyArea.find();
  next();
};


exports.home = (req, res) => {
  let allSchools = res.locals.allSchools
  let allStudyAreas = res.locals.allStudyAreas
  let allArt = [];
  let schoolNames = [];

   // Get device used to view
  let viewDevice = req.device.type

  allSchools.forEach(school =>{
    allArt = allArt.concat(school.artworks);
    schoolNames = schoolNames.concat({full: school.name, acronym:  school.short_name}); // This will serve as index for finding school acronym
  });

  if (viewDevice == 'desktop') {
    const Hero = reactHelper.renderComponent('HeroApp');
    let homeLightbox = reactHelper.renderComponent('HomeArtworkApp', { search: true, artworks: allArt});
  res.render('home', { Hero, homeLightbox });
  } else {
    const HeroMob = reactHelper.renderComponent('MobileHomeHero');
    const Artworks = reactHelper.renderComponent('MobileHomeArtworks', {artworks: allArt, schoolNames: schoolNames});
    const StudyAreas = reactHelper.renderComponent('MobileHomeStudyAreas', {studyAreas: allStudyAreas});
    res.render('mobile/home', {HeroMob, Artworks, StudyAreas});
  };
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


exports.getSchool = async (req, res, next) => {
  const school = await School.findOne({ slug: req.params.schoolSlug });
  if (!school) {
    res.redirect('/');
  } else {
    res.locals.school = school;
    next();
  }
};

exports.schoolDetails = (req, res) => {
  const school = res.locals.school;
  const displayedArt = school.displayedArt;
  const artworks = school.artworks;
  const schoolLightBox = reactHelper.renderComponent('ArtworkApp', { search: false, artworks: artworks, displayedArt: displayedArt });
  const CampusMaps = reactHelper.renderComponent('CampusApp', { campuses: school.locations });
  const Facilities = reactHelper.renderComponent('FacilitiesApp', { images: school.facilitiesImages });
  const Alumni = eactHelper.renderComponent('AlumniApp', { alumni: school.alumni });
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

  let viewDevice = req.device.type

  if (viewDevice == 'desktop') {
    const About = reactHelper.renderComponent('AboutApp');
    res.render('about', { About });
  } else {
    const AboutMobile = reactHelper.renderComponent('MobileAbout');
    res.render('mobile/about', { AboutMobile });
  };
};


exports.partner = (req, res) => {
  const Partner = reactHelper.renderComponent('PartnerApp');
  res.render('partner', { Partner });

};

exports.agency = (req, res) => {
  
  let viewDevice = req.device.type
  
  if (viewDevice == 'desktop') {
    const Agency = reactHelper.renderComponent('AgencyApp');
    res.render('agency', { Agency });
  } else {
    const AgencyMobile = reactHelper.renderComponent('MobileAgency');
    res.render('mobile/agency', { AgencyMobile });
  };
};

exports.individualArea = (req, res) => {

  let viewDevice = req.device.type

  if (viewDevice == 'desktop') {
    const area = res.locals.area;
    const IndividualArea = reactHelper.renderComponent('IndividualStudyAreaApp', {studyarea: area});
    res.render('individualArea', { IndividualArea });
  } else {
    const area = res.locals.area;
    const IndividualStudyAreaMobile = reactHelper.renderComponent('MobileIndividualStudyArea', {studyarea: area});
    res.render('mobile/individualArea', { IndividualStudyAreaMobile });
  };
};


exports.schoolCourses = (req, res) => {
  const school = res.locals.school;
  const Courses = reactHelper.renderComponent('CoursesApp', { courses: school.courses, schoolDisciplines: school.disciplines, school: school });
  res.render('schoolCourses', { school, Courses });
};


exports.studyAreas= (req, res) => {
  let viewDevice = req.device.type

  if (viewDevice == 'desktop') {
  const Search = reactHelper.renderComponent('SearchApp');
  res.render('studyArea', {Search });
  } else {
    const SearchMob = reactHelper.renderComponent('MobileDiscover');
    res.render('mobile/searchDiscover', { SearchMob });
  };
};



exports.selectArea = (req, res) => {
  const SelectArea = reactHelper.renderComponent('SelectAreaApp');
  res.render('selectArea', { SelectArea });

};
