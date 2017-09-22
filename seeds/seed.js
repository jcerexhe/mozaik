// const fs = require('fs');
const faker = require('faker');
const async = require('async');
const fs = require('fs');
const _ = require('lodash');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const School = require('../models/school');
const Course = require('../models/course');
const Artwork = require('../models/artwork');
const Alumni = require('../models/alumni');

const ait = JSON.parse(fs.readFileSync(__dirname + '/ait.json', 'utf-8'));

const _ait = new School(ait.school);
const _aitAlumni = _.map(ait.alumni, (alum) => {
  let _alum = new Alumni(alum);
  _alum.school = _ait._id;
  return _alum;
});
const _aitCourses = _.map(ait.courses, (course) => {
  let _course = new Course(course);
  _course.school = _ait._id;
  return _course;
});
const _aitArtwork = _.map(ait.artworks, (artwork) => {
  let _artwork = new Artwork(artwork);
  _artwork.school = _ait._id;
  return _artwork;
});

async.series([
  function(callback) {
    console.log('deleting data');
    const models = [School, Course, Artwork, Alumni];
    async.eachSeries(models, (model, modelCb) => {
      model.remove().then(() => {
        modelCb();
      }).catch((err) => {
        console.log(err);
        modelCb();
      })
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCESS - FINISHED DELETING DATA');
    });
  },
  function(callback) {
    // save schools
    console.log('saving ait course');
    async.eachSeries([_ait].concat(_aitAlumni).concat(_aitCourses).concat(_aitArtwork), (aitItem, aitItemSavedCb) => {
      aitItem.save().then(() => {
        aitItemSavedCb();
      }).catch((err) => {
        console.log(err);
        aitItemSavedCb();
      });
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING AIT DATA');
    });
  },
], function(err, results) {
  if (err) console.log(err);
  else console.log(results);
  console.log("finishing up");
  process.exit(0);
});
