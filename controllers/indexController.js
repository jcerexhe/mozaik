const mongoose = require('mongoose');

const School = mongoose.model('School');

exports.home = (req, res) => {
  res.render('home');
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
