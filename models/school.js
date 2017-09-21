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

const schoolSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply a name for your school.',
  },
  slug: String,
  website: {
    type: String,
    trim: true,
    validate: [validator.isURL, 'Invalid website URL.'],
  },
  disciplines: [String],
  courseGuide: String,
  overview: {
    type: String,
    trim: true,
    required: 'Please supply an overview of your school.',
  },
  prices: [{
    type: {
      type: String,
    },
    lower: Number,
    upper: Number,
  }],
  scholarships: [{
    type: String,
    trim: true,
  }],
  locationDescription: String,
  locations: [{
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      lat: {
        type: Number,
        required: 'Please supply a latitude.',
      },
      lng: {
        type: Number,
        required: 'Please supply a longitude.',
      },
    },
    address: {
      type: String,
      required: 'Please supply the address of your school.',
    },
    country: {
      type: String,
      required: 'Please supply the country your school is in.',
    },
    campus: {
      type: String,
      required: 'Please supply a name for this campus.'
    }
  }],
  facilitiesDescription: String,
  facilitiesImages: [String],
  delivery: [String],
  logo: {
    type: String,
    required: 'Please provide a logo of your school.',
  },
  video: String,
});

schoolSchema.pre('save', async function (next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

schoolSchema.virtual('alumni', {
  ref: 'Alumni',
  localField: '_id',
  foreignField: 'school',
});

schoolSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'school',
});

schoolSchema.virtual('artworks', {
  ref: 'Artwork',
  localField: '_id',
  foreignField: 'school',
});

function autopopulate(next) {
  this.populate('alumni');
  this.populate('courses');
  this.populate('artworks');
  next();
}

schoolSchema.pre('find', autopopulate);
schoolSchema.pre('findOne', autopopulate);

schoolSchema.post('findOne', async function (school) {
  school.logo = cloudinary.url(`${school.logo}.jpg`);
  school.facilitiesImages = _.map(school.facilitiesImages, (img) => {
    return cloudinary.url(`${img}.jpg`);
  });
  return school;
});

module.exports = mongoose.model('School', schoolSchema);
