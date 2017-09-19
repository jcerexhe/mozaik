const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');

exports.home = (req, res) => {
  const Search = reactHelper.renderComponent('SearchApp');
  res.render('home', { Search });
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
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { artworks: school.artworks });
  res.render('school', { school, Lightbox });
};

exports.schoolDetails = (req, res) => {
  const school = res.locals.school;
  // choose number of images to show: 20
  const Lightbox = reactHelper.renderComponent('ArtworkApp', { artworks: school.artworks.slice(0, 20) });
  const CampusMaps = reactHelper.renderComponent('CampusApp', { campuses: school.locations });
  res.render('schoolDetails', { school, Lightbox, CampusMaps });
};

exports.schoolCourses = (req, res) => {
  res.redirect('/');
};

