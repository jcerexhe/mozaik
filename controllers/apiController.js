const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const _ = require('lodash');

const Course = mongoose.model('Course');
const School = mongoose.model('School');
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
  let schools;
  let foundSchools;
  switch (data.searchCategory) {
    case 'discipline':
      const disc = JSON.parse(data.discipline);
      const areas = disc.interestAreas;
      const { interestDisciplines, interestCountries } = disc;
      const targets = [];
      const schoollist = [];

      if (areas[0] !== 'all areas') {
        // areas is an array of selected areas
        // $all finds a document with all of the els in array
        targets.push({ disciplines: { $elemMatch:{$in: areas} } });
      }
      if (!interestDisciplines.includes('all areas')) {
        targets.push({ disciplines: { $elemMatch:{$in: interestDisciplines }} });
      }

      switch (targets.length) {
        case 0:
          q = Course.find()
          // schoollist.push();
          break;
        case 1:
          q = Course.find(targets[0]);
          break;
        default:
          q = Course.find(targets[1]);
      }

      const foundCourses = await q.populate('school', ['slug', 'locations', 'logo', 'facilitiesImages']);

      if (interestCountries.includes('all areas')) {
        courses = foundCourses;
        if(courses.length > 0){
          courses.map(course => {
            if(!schoollist.includes(course.school.slug)){
              schoollist.push(course.school.slug);
            }
          });
          schools = School.find({ slug: { $in: schoollist } });
          foundSchools = await schools.populate('school');
        }else{
          foundSchools =[];
        }

      } else {
        courses = _.filter(foundCourses, (course) => {
          let locationsArray = course.school.locations.filter((location) => interestCountries.includes(location.country))
          // if there are locations for this school that match the filters selected then put them in an array
          if (locationsArray.length > 0) { return true }
          // if any locations were put into the array for this course then add the course to the returned courses array
          return false;
        });
      
      
        if (courses.length > 0){
          courses.map(course => {
            if(!schoollist.includes(course.school.slug)){
              schoollist.push(course.school.slug);
            }
          });

          schools = School.find({ slug: { $in: schoollist } });
          foundSchools = await schools.populate('school');
        }else{
          foundSchools = [];
        } 

      }
      break;
    case 'categories':
      const categories = data.categories;
      if (categories) {
        q = Course.find({ disciplines: { $in: categories } });
      } else {
        q = Course.find();
      }
      courses = await q.populate('school', ['slug', 'locations', 'logo']);
      break;
    case 'search': {
      console.log(data.search);
      const regex = new RegExp(`.*${data.search}.*`, 'i');
      const schoollist = [];
      // Split - Capitalize then split into array by comma-separated values
      // e.g. 'media, games design' => ['Media', 'Games Design']
      const split = data.search.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}).split(', ');
      q = Course.find({
        $or: [
          { name: regex },
          { school_name: regex },
          { disciplines: { $in: split } },
          { specialisations: { $in: split } },
          { campus: { $in: split }}
        ],
      }).collation({locale: "en", strength: 2});
      courses = await q.populate('school', ['slug', 'locations', 'logo']);
      if(courses.length > 0){
          courses.map(course => {
            if(!schoollist.includes(course.school.slug)){
              schoollist.push(course.school.slug);
            }
          });
          schools = School.find({ slug: { $in: schoollist } });
          foundSchools = await schools.populate('school');
        }else{
          foundSchools =[];
        }

      console.log(courses.length);
      console.log(foundSchools.length);
      break;
    }
    default:
      q = Course.find();
  }
  // TODO allow user to change limit
  res.json({results: foundSchools.slice(0, limit), resultsAmount: foundSchools.length});
  // q.populate('school', 'slug').limit(limit).then((courses) => {
    // res.json(courses);
  // }).catch(() => {
    // res.json({
      // error: true,
    // });
  // });
};
