const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const School = require('../models/school');
const Course = require('../models/course');
const Artwork = require('../models/artwork');
const Alumni = require('../models/alumni');

const schools = JSON.parse(fs.readFileSync(__dirname + '/schools.json', 'utf-8'));
const courses = JSON.parse(fs.readFileSync(__dirname + '/courses.json', 'utf-8'));
const artworks = JSON.parse(fs.readFileSync(__dirname + '/artworks.json', 'utf-8'));
const alumni = JSON.parse(fs.readFileSync(__dirname + '/alumni.json', 'utf-8'));

try {
  await School.insertMany(schools);
  await Course.insertMany(courses);
  await Artwork.insertMany(artworks);
  await Alumni.insertMany(alumni);
  console.log('👍👍👍👍👍👍👍👍 Done!');
  process.exit();
} catch(e) {
  console.log('\n👎👎👎👎👎👎👎👎 Error!');
  console.log(e);
  process.exit();
}
