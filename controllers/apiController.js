const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const _ = require('lodash');

const Course = mongoose.model('Course');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
  // TODO allow user to change limit
  const limit = Number.parseInt(data.limit, 10);
  q.populate('school', 'slug').limit(limit).then((courses) => {
    _.map(courses, (c) => {
      c.image = cloudinary.url(`${c.image}.jpg`);
      return c;
    });
    res.json(courses);
  }).catch(() => {
    res.json({
      error: true,
    });
  });
};
