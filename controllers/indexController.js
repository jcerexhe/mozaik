const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');

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

exports.school = (req, res) => {
  const school = res.locals.school;
  // TODO only pass valid information as props: pass id -> api call get data
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { artworks: school.artworks });
  res.render('school', { school, Lightbox });
};

exports.schoolDetails = (req, res) => {
  const school = res.locals.school;
  // choose number of images to show: 20
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { artworks: school.artworks.slice(0, 20) });
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
