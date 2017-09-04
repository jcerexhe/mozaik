const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const alumniSchema = new Schema({
  photo: {
    type: String,
    required: 'Please provide a photo of the alumni.'
  },
  name: {
    type: String,
    trim: true,
    required: 'Please provide the name of the alumni.'
  },
  blurb: {
    type: String,
    trim: true,
    required: 'Please provide a short blurb about the alumni.'
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!'
  }
});

module.exports = mongoose.model('Alumni', alumniSchema);
