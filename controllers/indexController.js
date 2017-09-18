const mongoose = require('mongoose');
const reactHelper = require('react-helper');

const School = mongoose.model('School');
const Search = reactHelper.renderComponent('SearchApp');

exports.home = (req, res) => {
  res.render('home', { Search });
};

exports.school = (req, res) => {
  School.findOne({ slug: req.params.schoolSlug }).then((school) => {
    if (school) {
      res.render('school', { school });
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
