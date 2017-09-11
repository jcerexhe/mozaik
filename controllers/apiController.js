const mongoose = require('mongoose');
const Course = mongoose.model('Course');

exports.courses = (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  }).catch((err) => {
    res.json({
      error: true
    });
  });
}
