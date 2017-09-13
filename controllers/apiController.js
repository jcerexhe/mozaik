const mongoose = require('mongoose');

const Course = mongoose.model('Course');

exports.courses = (req, res) => {
  const data = req.query;
  let q;
  switch (data.searchCategory) {
    case 'discipline':
      q = Course.find();
      break;
    case 'categories':
      q = Course.find();
      break;
    case 'search': {
      const regex = new RegExp(`.*${data.search}.*`, 'i');
      q = Course.find({
        $or: [{ name: regex }, { description: regex }],
      });
      break;
    }
    default:
      q = Course.find();
  }
  q.limit(6).then((courses) => {
    res.json(courses);
  }).catch(() => {
    res.json({
      error: true,
    });
  });
};
