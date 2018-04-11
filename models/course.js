const mongoose = require('mongoose');
const slug = require('slugs');
const _ = require('lodash');
const cloudinary = require('cloudinary');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const School = mongoose.model('School');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please provide a name for the course.',
  },
  school_name: String,
  description: {
    type: String,
    trim: true,
    required: 'Please provide a short description of the course.',
  },
  campus: [String],
  specialisations: [String],
  qualifications: [String],
  disciplines: [String],
  length: {
    type: String,
    trim: true,
  },
  duration: String, 
  prices: [{
    type: {
      type: String,
    },
    fees: Number,
  }],
  image: {
    type: String,
    //required: 'Please provide an image for the course.',//
  },
  intakes: String,
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!',
  },
  slug: String,
});

courseSchema.index({course: 1}, {collation: {locale: "en", strength: 2}});

courseSchema.pre('save', async function (next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  const school = await School.findOne({ _id: this.school });
  const slugs = _.map(school.courses, (c) => {
    return c.slug;
  });
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  _.remove(slugs, (s) => { return !s.match(slugRegEx) });
  if (slugs.length) {
    this.slug = `${this.slug}-${slugs.length + 1}`;
  }
  next();
});

courseSchema.post('find', (courses) => {
  return _.map(courses, (course) => {
    course.image = cloudinary.url(`${course.image}.jpg`, { gravity: 'auto', crop: 'fill', height: 310, width: 470 })
    return course;
  });
});

module.exports = mongoose.model('Course', courseSchema);
