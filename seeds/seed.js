// const fs = require('fs');
const faker = require('faker');
const async = require('async');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const School = require('../models/school');
const Course = require('../models/course');
const Artwork = require('../models/artwork');
const Alumni = require('../models/alumni');

var schools = [];
var courses = [];
var artworks = [];
var alumni = [];

for (var i = 0; i < 5; i++) {
  // populate schools
  schools.push(new School({
    "name": faker.company.companyName(),
    "website": faker.internet.url(),
    "disciplines": [
      "Graphic Design",
      "Animation"
    ],
    "overview": faker.lorem.paragraph(),
    "price": {
      "upper": faker.random.number(),
      "lower": faker.random.number()
    },
    "scholarship": faker.lorem.sentence(),
    "locations": [
      {
        "address": faker.address.streetAddress,
        "coordinates":[
          faker.address.latitude(),
          faker.address.longitude()
        ],
        "type":"Point"
      }
    ],
    "logo": "rxhzswv9zxzwsuwe25hb"
  }));
}
schools.forEach((school) => {
  // populate courses
  for (var i = 0; i < 7; i++) {
    courses.push(new Course({
      "name": faker.commerce.productName,
      "description": faker.lorem.paragraph(),
      "price": faker.random.number(),
      "length": "1 year",
      "image": "rxhzswv9zxzwsuwe25hb",
      "school": school._id
    }));
  }
  // populate artworks
  for (var i = 0; i < 13; i++) {
    artworks.push(new Artwork({
      "image": "rxhzswv9zxzwsuwe25hb",
      "name": faker.finance.accountName(),
      "artist": faker.name.findName(),
      "course": "Bachelor of Awesome",
      "school": school._id
    }));
  }
  // populate alumni
  for (var i = 0; i < 3; i++) {
    alumni.push(new Alumni({
      "photo": "rxhzswv9zxzwsuwe25hb",
      "name": faker.name.findName(),
      "blurb": faker.lorem.sentences(),
      "school": school._id
    }));
  }
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
    console.log('populating schools');
    async.eachSeries(schools, (school, schoolSavedCb) => {
      school.save().then(() => {
        schoolSavedCb();
      }).catch((err) => {
        console.log(err);
        schoolSavedCb();
      });
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING SCHOOLS');
    });
  },
  function(callback) {
    // save courses
    console.log('populating courses');
    async.eachSeries(courses, (course, courseCb) => {
      course.save().then(() => {
        courseCb();
      }).catch((err) => {
        console.log(err);
        courseCb();
      });
    }, (err) => {
      if (err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING COURSES');
    });
  },
  function(callback) {
    // save artwork
    console.log('populating artworks');
    async.eachSeries(artworks, (artwork, artworkCb) => {
      artwork.save().then(() => {
        artworkCb();
      }).catch((err) => {
        console.log(err);
        artworkCb();
      });
    }, (err) => {
      if (err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING ARTWORKS');
    });
  },
  function(callback) {
    // save alumni
    console.log('populating alumni');
    async.eachSeries(alumni, (alumni, alumniCb) => {
      alumni.save().then(() => {
        alumniCb();
      }).catch((err) => {
        console.log(err);
        alumniCb();
      });
    }, (err) => {
      if (err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING ALUMNI');
    });
  }
], function(err, results) {
  if (err) console.log(err);
  else console.log(results);
  console.log("finishing up");
  process.exit(0);
});


// var courses = [];
// schools.forEach(function(school) {
  // for (var i = 0; i < 7; i++) {
    // courses.push({
      // "name": faker.commerce.productName,
      // "description": faker.lorem.paragraph(),
      // "price": faker.random.number(),
      // "length": "1 year",
      // "image": "rxhzswv9zxzwsuwe25hb.jpg",
      // "school": school._id
    // });
  // }
// });
// // const schools = JSON.parse(fs.readFileSync(__dirname + '/schools.json', 'utf-8'));
// // const courses = JSON.parse(fs.readFileSync(__dirname + '/courses.json', 'utf-8'));
// // const artworks = JSON.parse(fs.readFileSync(__dirname + '/artworks.json', 'utf-8'));
// // const alumni = JSON.parse(fs.readFileSync(__dirname + '/alumni.json', 'utf-8'));

// try {
  // School.insertMany(schools);
  // // await Course.insertMany(courses);
  // // await Artwork.insertMany(artworks);
  // // await Alumni.insertMany(alumni);
  // console.log('👍👍👍👍👍👍👍👍 Done!');
  // process.exit();
// } catch(e) {
  // console.log('\n👎👎👎👎👎👎👎👎 Error!');
  // console.log(e);
  // process.exit();
// }
