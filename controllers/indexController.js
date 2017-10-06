const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');
const Course = mongoose.model('Course');

exports.home = (req, res) => {
  const Hero = reactHelper.renderComponent('HeroApp');
  const Search = reactHelper.renderComponent('SearchApp');
  res.render('home', { Hero, Search });
};

exports.getSchool = async (req, res, next) => {
  const school = await School.findOne({ slug: req.params.schoolSlug });
  if (!school) {
    // set flash messages
    res.redirect('/');
  } else {
    res.locals.school = school;
    next();
  }
};

exports.getCourse = async (req, res, next) => {
  const course = await Course.findOne({ slug: req.params.courseSlug });
  if (!course) {
    // set flash messages
    res.redirect('/');
  } else {
    res.locals.course = course;
    next();
  }
};

exports.schoolArtwork = (req, res) => {
  const school = res.locals.school;
  const course = res.locals.course;
  // TODO only pass valid information as props: pass id -> api call get data
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { search: true, artworks: school.artworks, course });
  res.render('schoolArtwork', { school, Lightbox });
};

exports.schoolDetails = (req, res) => {
  const school = res.locals.school;
  // choose number of images to show: 20
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { search: false, artworks: school.artworks.slice(0, 20) });
  const CampusMaps = reactHelper.renderComponent('CampusApp', { campuses: school.locations });
  const Facilities = reactHelper.renderComponent('FacilitiesApp', { images: school.facilitiesImages });
  const Alumni = reactHelper.renderComponent('AlumniApp', { alumni: school.alumni });
  res.render('schoolDetails', { school, Lightbox, CampusMaps, Facilities, Alumni });
};

exports.schoolCourses = (req, res) => {
  const school = res.locals.school;
  const Courses = reactHelper.renderComponent('CoursesApp', { courses: school.courses });
  res.render('schoolCourses', { school, Courses });
};

exports.discover = (req, res) => {
  const Discover = reactHelper.renderComponent('DiscoverApp');
  res.render('discover', { Discover });
}
