const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please provide a name for the course.'
  },
  description: {
    type: String,
    trim: true,
    required: 'Please provide a short description of the course.'
  },
  price: Number,
  length: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: 'Please provide an image for the course.'
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!'
  }
});

module.exports = mongoose.model('Course', courseSchema);
