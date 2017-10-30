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
      const areas = disc.interestAreas;
      const { interestDisciplines, interestCountries } = disc;
      const targets = [];
      if (areas[0] !== 'all areas') {
        // areas is an array of selected areas
        // $all finds a document with all of the els in array
        targets.push({ disciplines: { $elemMatch:{$in: areas} } });
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
          q = Course.find(targets[1]);
      }
      const foundCourses = await q.populate('school', ['slug', 'locations', 'logo']);
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
      courses = await q.populate('school', ['slug', 'logo']);
      break;
    case 'search': {
      const regex = new RegExp(`.*${data.search}.*`, 'i');
      // Split - Capitalize then split into array by comma-separated values
      // e.g. 'media, games design' => ['Media', 'Games Design']
      const split = data.search.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}).split(', ');
      q = Course.find({
        $or: [
          { name: regex },
          { disciplines: { $in: split } },
          { specialisations: { $in: split } },
        ],
      }).collation({locale: "en", strength: 2});
      courses = await q.populate('school', ['slug', 'logo']);
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
