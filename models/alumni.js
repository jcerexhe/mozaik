const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const cloudinary = require('cloudinary');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const alumniSchema = new Schema({
  photo: {
    type: String,
    required: 'Please provide a photo of the alumni.',
  },
  name: {
    type: String,
    trim: true,
    required: 'Please provide the name of the alumni.',
  },
  blurb: {
    type: String,
    trim: true,
    required: 'Please provide a short blurb about the alumni.',
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!',
  },
});

alumniSchema.post('find', async function(alumni) {
  return _.map(alumni, (alum) => {
    alum.photo = cloudinary.url(`${alum.photo}.jpg`, { gravity: 'auto', crop: 'fill', height: 400, width: 400 });
    return alum;
  });
});

module.exports = mongoose.model('Alumni', alumniSchema);
