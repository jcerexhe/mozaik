const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const _ = require('lodash');

const Course = mongoose.model('Course');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.courses = async (req, res) => {
  const data = req.query;
  const limit = Number.parseInt(data.limit, 10);
  let q;
  let courses;
  switch (data.searchCategory) {
    case 'discipline':
      const disc = JSON.parse(data.discipline);
      const area = disc.interestAreas[0];
      const { interestDisciplines, interestCountries } = disc;
      const targets = [];
      if (area !== 'all areas') {
        targets.push({ disciplines: { $all: [area] } });
      }
      if (!interestDisciplines.includes('all areas')) {
        targets.push({ disciplines: { $all: interestDisciplines } });
      }
      switch (targets.length) {
        case 0:
          q = Course.find();
          break;
        case 1:
          q = Course.find(targets[0]);
          break;
        default:
          q = Course.find({ $and: targets });
      }
      const foundCourses = await q.populate('school', ['slug', 'locations']);
      if (interestCountries.includes('all areas')) {
        courses = foundCourses;
      } else {
        courses = _.filter(foundCourses, (course) => {
          const courseCountries = _.reduce(course.school.locations, (loc) => {
            return loc.country;
          }, []);
          return _.intersection(interestCountries, courseCountries).length > 0;
        });
      }
      break;
    case 'categories':
      const categories = data.categories;
      if (categories) {
        q = Course.find({ disciplines: { $in: categories } });
      } else {
        q = Course.find();
      }
      courses = await q.populate('school', 'slug');
      break;
    case 'search': {
      const regex = new RegExp(`.*${data.search}.*`, 'i');
      const split = data.search.split(' ');
      q = Course.find({
        $or: [
          { name: regex },
          { description: regex },
          { disciplines: { $in: split } },
          { specialisations: { $in: split } },
        ],
      });
      courses = await q.populate('school', 'slug');
      break;
    }
    default:
      q = Course.find();
  }
  // TODO allow user to change limit
  res.json(courses.slice(0, limit));
  // q.populate('school', 'slug').limit(limit).then((courses) => {
    // res.json(courses);
  // }).catch(() => {
    // res.json({
      // error: true,
    // });
  // });
};
