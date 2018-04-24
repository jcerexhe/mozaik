// const fs = require('fs');
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
const StudyArea = require('../models/studyarea');

const ait = JSON.parse(fs.readFileSync(__dirname + '/ait.json', 'utf-8'));
const nida = JSON.parse(fs.readFileSync(__dirname + '/nida.json', 'utf-8'));
const aftrs = JSON.parse(fs.readFileSync(__dirname + '/aftrs.json', 'utf-8'));
const vfs = JSON.parse(fs.readFileSync(__dirname + '/vfs.json', 'utf-8'));
const fsu = JSON.parse(fs.readFileSync(__dirname + '/fsu.json', 'utf-8'));
const sa = JSON.parse(fs.readFileSync(__dirname + '/studyarea.json', 'utf-8'));


const _sa = _.map(sa.studyarea, (area) => {
  let _newsa = new StudyArea(area);
  return _newsa;
});


// const _ait = new School(ait.school);
// const _aitAlumni = _.map(ait.alumni, (alum) => {
//   let _alum = new Alumni(alum);
//   _alum.school = _ait._id;
//   return _alum;
// });
// const _aitCourses = _.map(ait.courses, (course) => {
//   let _course = new Course(course);
//   _course.school = _ait._id;
//   return _course;
// });
// const _aitArtwork = _.map(ait.artworks, (artwork) => {
//   let _artwork = new Artwork(artwork);
//   _artwork.school = _ait._id;
//   return _artwork;
// });

const _nida = new School(nida.school);
const _nidaAlumni = _.map(nida.alumni, (alum) => {
  let _alum = new Alumni(alum);
  _alum.school = _nida._id;
  return _alum;
});
const _nidaCourses = _.map(nida.courses, (course) => {
  let _course = new Course(course);
  _course.school = _nida._id;
  return _course;
});
const _nidaArtwork = _.map(nida.artworks, (artwork) => {
  let _artwork = new Artwork(artwork);
  _artwork.school = _nida._id;
  return _artwork;
});

const _aftrs = new School(aftrs.school);
const _aftrsAlumni = _.map(aftrs.alumni, (alum) => {
  let _alum = new Alumni(alum);
  _alum.school = _aftrs._id;
  return _alum;
});
const _aftrsCourses = _.map(aftrs.courses, (course) => {
  let _course = new Course(course);
  _course.school = _aftrs._id;
  return _course;
});
const _aftrsArtwork = _.map(aftrs.artworks, (artwork) => {
  let _artwork = new Artwork(artwork);
  _artwork.school = _aftrs._id;
  return _artwork;
});

const _vfs = new School(vfs.school);
const _vfsAlumni = _.map(vfs.alumni, (alum) => {
  let _alum = new Alumni(alum);
  _alum.school = _vfs._id;
  return _alum;
});
const _vfsCourses = _.map(vfs.courses, (course) => {
  let _course = new Course(course);
  _course.school = _vfs._id;
  return _course;
});
const _vfsArtwork = _.map(vfs.artworks, (artwork) => {
  let _artwork = new Artwork(artwork);
  _artwork.school = _vfs._id;
  return _artwork;
});


const _fsu = new School(fsu.school);
const _fsuAlumni = _.map(fsu.alumni, (alum) => {
  let _alum = new Alumni(alum);
  _alum.school = _fsu._id;
  return _alum;
});
const _fsuCourses = _.map(fsu.courses, (course) => {
  let _course = new Course(course);
  _course.school = _fsu._id;
  return _course;
});
const _fsuArtwork = _.map(fsu.artworks, (artwork) => {
  let _artwork = new Artwork(artwork);
  _artwork.school = _fsu._id;
  return _artwork;
});


async.series([
  function(callback) {
    console.log('deleting data');
    const models = [School, Course, Artwork, Alumni, StudyArea];
    async.eachSeries(models, (model, modelCb) => {
      model.remove().then(() => {
        modelCb();
      }).catch((err) => {
        console.log(err);
        modelCb();
      })
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCCESS - FINISHED DELETING DATA');
    });
  },
  // function(callback) {
  //   // save schools
  //   console.log('saving ait course');
  //   async.eachSeries([_ait].concat(_aitAlumni).concat(_aitCourses).concat(_aitArtwork), (aitItem, aitItemSavedCb) => {
  //     aitItem.save().then(() => {
  //       aitItemSavedCb();
  //     }).catch((err) => {
  //       console.log(err);
  //       aitItemSavedCb();
  //     });
  //   }, (err) => {
  //     if(err) console.log(err);
  //     callback(null, 'SUCCESS - FINISHED SEEDING AIT DATA');
  //   });
  // },
  function(callback) {
    // save schools
    console.log('saving nida course');
    async.eachSeries([_nida].concat(_nidaAlumni).concat(_nidaCourses).concat(_nidaArtwork), (nidaItem, nidaItemSavedCb) => {
      nidaItem.save().then(() => {
        nidaItemSavedCb();
      }).catch((err) => {
        console.log(err);
        nidaItemSavedCb();
      });
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING NIDA DATA');
    });
  },
  function(callback) {
    // save schools
    console.log('saving aftrs course');
    async.eachSeries([_aftrs].concat(_aftrsAlumni).concat(_aftrsCourses).concat(_aftrsArtwork), (aftrsItem, aftrsItemSavedCb) => {
      aftrsItem.save().then(() => {
        aftrsItemSavedCb();
      }).catch((err) => {
        console.log(err);
        aftrsItemSavedCb();
      });
    }, (err) => {
      if(err) console.log(err);
      callback(null, 'SUCCESS - FINISHED SEEDING AFTRS DATA');
    });
  },
  function(callback) {
    // save schools
    console.log('saving vfs course');
    async.eachSeries([_vfs].concat(_vfsAlumni).concat(_vfsCourses).concat(_vfsArtwork), (vfsItem, vfsItemSavedCb) =>  {
      vfsItem.save().then(() => {
        vfsItemSavedCb();
      }).catch((err) => {
        console.log(err);
        vfsItemSavedCb(); 
      });
   }, (err) => {
     if(err) console.log(err);
     callback(null, 'SUCCESS - FINISHED SEEDING VFS DATA');
   });
  },
  function(callback) {
    // save schools
    console.log('saving fsu course');
    async.eachSeries([_fsu].concat(_fsuAlumni).concat(_fsuCourses).concat(_fsuArtwork), (fsuItem, fsuItemSavedCb) =>  {
      fsuItem.save().then(() => {
        fsuItemSavedCb();
      }).catch((err) => {
        console.log(err);
        fsuItemSavedCb(); 
      });
   }, (err) => {
     if(err) console.log(err);
     callback(null, 'SUCCESS - FINISHED SEEDING FSU DATA');
   });
  },
  function(callback) {
    // save schools
    console.log('saving studyareas');
    async.eachSeries(_sa, (saItem, saItemSavedCb) =>  {
      saItem.save().then(() => {
        saItemSavedCb();
      }).catch((err) => {
        console.log(err);
        saItemSavedCb(); 
      });
   }, (err) => {
     if(err) console.log(err);
     callback(null, 'SUCCESS - FINISHED SEEDING STUDY AREA DATA');
   });
  },
], function(err, results) {
  if (err) console.log(err);
  else console.log(results);
  console.log("finishing up");
  process.exit(0);
});
