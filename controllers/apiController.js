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
  const limit = Number.parseInt(data.limit, 10);
  let q;
  switch (data.searchCategory) {
    case 'discipline':
      // const area = data.discipline.interestAreas[0];
      // const { interestDisciplines, interestCountries } = data.discipline;
      // q = Course.find(({
        // $and: [
          // { disciplines: area },
          // { disciplines: interestDisciplines },
        // ],
      // }));
      // q.populate('school').then((foundCourses1) => {
        // foundCourses1.find({
          // school: {
            // locations: {
              // $elemMatch: { country: interestCountries },
            // },
          // },
        // }).then((foundCourses2) => {
          // courses = foundCourses2;
        // });
      // });
      q = Course.find();
      break;
    case 'categories':
      q = Course.find();
      break;
    case 'search': {
      const regex = new RegExp(`.*${data.search}.*`, 'i');
      const split = data.search.split(' ');
      q = Course.find({
        $or: [
          { name: regex },
          { description: regex },
          { disciplines: split },
          { specialisations: split },
        ],
      });
      break;
    }
    default:
      q = Course.find();
  }
  // TODO allow user to change limit
  q.populate('school', 'slug').limit(limit).then((courses) => {
    res.json(courses);
  }).catch(() => {
    res.json({
      error: true,
    });
  });
};
