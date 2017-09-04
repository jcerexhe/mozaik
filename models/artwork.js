const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const artworkSchema = new Schema({
  image: {
    type: String,
    required: 'Please provide an iamge of the artwork.'
  },
  name: {
    type: String,
    trim: true,
    required: "Please provide the artwork's name."
  },
  artist: {
    type: String,
    trim: true,
    required: "Plese provide the artist's name."
  },
  course: {
    type: String,
    trim: true
  },
  views: Number,
  likes: Number,
  // TODO research preventing race conditions:
  // https://docs.mongodb.com/manual/tutorial/perform-two-phase-commits/
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!'
  }
});

module.exports = mongoose.model('Artwork', artworkSchema);
