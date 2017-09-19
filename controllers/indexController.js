const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');

exports.home = (req, res) => {
  const Search = reactHelper.renderComponent('SearchApp');
  res.render('home', { Search });
};

exports.school = (req, res) => {
  School.findOne({ slug: req.params.schoolSlug }).then((school) => {
    if (school) {
      const Lightbox = reactHelper.renderComponent('ArtworkApp', { artworks: school.artworks });
      res.render('school', { school, Lightbox });
    } else {
      res.redirect('/');
    }
  }).catch((_err) => {
    res.redirect('/');
  });
};

exports.schoolDetails = (req, res) => {
  res.redirect('/');
};

exports.schoolCourses = (req, res) => {
  res.redirect('/');
};
