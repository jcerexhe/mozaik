const mongoose = require('mongoose');
const validator = require('validator');
const slug = require('slugs');
const cloudinary = require('cloudinary');
const _ = require('lodash');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const studyAreaSchema = new Schema({
  image: String,
  title: String,
  disciplines1: [String],
  disciplines2: [String],
  description: String,
  keywords: [String],
  alumni_photo: String,
  alumni_name: String,
  alumni_degree: String,
  alumni_description: String,
  alumni_qoute: String,
  slug: String
});

studyAreaSchema.pre('save', async function (next) {
  if (!this.isModified('title')) {
    next();
    return;
  }
  this.slug = slug(this.title);
  next();
});

// schoolSchema.pre('find', autopopulate);
// studyAreaSchema.pre('findOne', autopopulate);

// schoolSchema.post('find', function (schools) {
//   return _.map(schools, (school) => {
//     school.logo = cloudinary.url(`${school.logo}`);
//     school.header_image_1 = cloudinary.url(`${school.header_image_1}`);
//     school.header_image_2 = cloudinary.url(`${school.header_image_2}`);
//     return school;
//   });
// });
studyAreaSchema.post('findOne', async function (area) {
  area.image = cloudinary.url(`${area.image}.jpg`);
  area.alumni_photo = cloudinary.url(`${area.alumni_photo}.jpg`);
  return area;
});

module.exports = mongoose.model('StudyArea', studyAreaSchema);
