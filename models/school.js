const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const slug = require('slugs');

const schoolSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply a name for your school.'
  },
  slug: String,
  website: {
    type: String,
    trim: true,
    validate: [validator.isURL, 'Invalid website URL.']
  },
  disciplines: [String],
  courseGuide: String,
  overview: {
    type: String,
    trim: true,
    required: 'Please supply an overview of your school.'
  },
  price: {
    lower: Number,
    upper: Number
  },
  scholarship: {
    type: String,
    trim: true
  },
  locations: [{
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'You must supply coordinates!'
    }],
    address: {
      type: String,
      required: 'You must supply an address!'
    }
  }],
  delivery: [String],
  logo: {
    type: String,
    required: 'Please provide a logo of your school.'
  },
  video: String
});

schoolSchema.pre('save', async function(next) {
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
  foreignField: 'school'
});

schoolSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'school'
});

schoolSchema.virtual('artworks', {
  ref: 'Artwork',
  localField: '_id',
  foreignField: 'school'
});

function autopopulate(next) {
  this.populate('alumni');
  this.populate('courses');
  this.populate('artworks');
  next();
}

schoolSchema.pre('find', autopopulate);
schoolSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('School', schoolSchema);
