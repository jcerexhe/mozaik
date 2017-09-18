const mongoose = require('mongoose');
const slug = require('slugs');
const _ = require('lodash');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const School = mongoose.model('School');

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please provide a name for the course.',
  },
  description: {
    type: String,
    trim: true,
    required: 'Please provide a short description of the course.',
  },
  campus: [String],
  disciplines: [String],
  length: {
    type: String,
    trim: true,
  },
  price: Number,
  price: [{
    type: {
      type: String,
    },
    fees: Number,
  }],
  image: {
    type: String,
    required: 'Please provide an image for the course.',
  },
  school: {
    type: mongoose.Schema.ObjectId,
    ref: 'School',
    required: 'You must supply a school!',
  },
  slug: String,
});

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

module.exports = mongoose.model('Course', courseSchema);
