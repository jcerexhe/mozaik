const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const _ = require('lodash');

mongoose.Promise = global.Promise;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
  image: {
    type: String,
    required: 'Please provide an image of the artwork.',
  },
  name: {
    type: String,
    trim: true,
    required: "Please provide the artwork's name.",
  },
  artist: {
    type: String,
    trim: true,
    required: "Plese provide the artist's name.",
  },
  course: {
    type: String,
    trim: true,
  },
  views: Number,
  likes: Number,
  // ^^TODO research preventing race conditions:
  // https://docs.mongodb.com/manual/tutorial/perform-two-phase-commits/
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!',
  },
});

// Load artworks after find
artworkSchema.post('find', (artworks) => {
  return _.map(artworks, (artwork) => {
    artwork.image = cloudinary.url(`${artwork.image}.jpg`);
    return artwork;
  });
});

module.exports = mongoose.model('Artwork', artworkSchema);
