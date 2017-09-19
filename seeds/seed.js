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

let _ait = new School({
  "name": "Academy of Information Technology (AIT)",
  "website": "http://www.ait.edu.au",
  "disciplines": [
    "Digital Media",
    "Animation",
    "2D Animation",
    "3D Design",
    "Games Design",
    "Game Development",
    "Design",
    "Film / TV / Audio",
    "Digital Design",
    "Graphic Design"
  ],
  "overview": "Founded in 1999, AIT is locaeted in a lively converted warehouse in the heart of Sydney's design precinct and in cosmopolitan Melbourne CBD. AIT offers a range of courses that prepare students for careers in the creative digital and design industries.",
  "price": [{
    "type": "Domestic students",
    "upper": 50400,
    "lower": 16800
  }, {
    "type": "International students",
    "upper": 52800,
    "lower": 17600
  }],
  "scholarship": "initiAIT Scholarship (new students): AUD 8,000<br>Creative Minds Scholarship (continuing students): 50% off a term",
  "locationDescription": "AIT is located in Sydney and Melbourne - city centre areas. AIT also offers online delivery of selected courses.",
  "locations": [
    {
      "address": "7 Kelly St, Ultimo, NSW 2007",
      "coordinates": {
        "lat": -33.8819586,
        "lng": 151.19523779999997
      },
      "type":"Point",
      "country": "Australia",
      "campus": "Sydney"
    },
    {
      "address": "13/120 Spencer St, Melbourne VIC 3000",
      "coordinates": {
        "lat": -37.8182122,
        "lng": 144.95430220000003
      },
      "type": "Point",
      "country": "Australia",
      "campus": "Melbourne"
    }
  ],
  "facilitiesDescription": "AIT has premium facilities including green screen room, voice over room, student lounge, mac and pc labs with latest SW (animation, 3D design, editing), makerspace, library, digital media, photography, film and sound equipment.",
  "facilities": [
    "Entrance_hall_Melb_pqy418",
    "File_000_mpbswu",
    "Library_Melb_yjr2x5",
    "Orange_Agora_Sydney_p7em6v",
    "Stduent_Lounge1_Melb_oz7pgu"
  ],
  "delivery": [
    "On Campus",
    "Online"
  ],
  "logo": "AIT_logo_f4lg8p",
  // TODO file size was too large
  // "video": ""
  // TODO error uploading pdf
  // "courseGuide": ""
});
let _aitAlumni = [
  new Alumni({
    // TODO get alumni photos
    "photo": "",
    "name": "PJ SVOBODA",
    "blurb": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "school": _ait._id
  }),
  new Alumni({
    // TODO get alumni photos
    "photo": "",
    "name": "ALEX HOLDER",
    "blurb": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "school": _ait._id
  }),
  new Alumni({
    // TODO get alumni photos
    "photo": "",
    "name": "TOMAS CURDA",
    "blurb": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "school": _ait._id
  })
];
let _aitCourses = [
  new Course({
    "name": "Bachelor of Interactive Media",
    "description": "In this degree you will gain multi-disciplined and hands-on experience that is underpinned by theoretical knowledge. Whether you want to merge animation with traditional film making or give smooth motion to immersive games, this course will give you a solid grounding and broad skill sets designed to increase options in industry employment.",
    "campus": [
      "Sydney",
      "Melbourne"
    ],
    "disciplines": [
      "2D Animation",
      "3D Design",
      "Film",
      "Game Design"
    ],
    "length": "3 years | 2 years accelerated",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 50400
      },
      {
        "type": "International students",
        "fees": 52800
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  }),
  new Course({
    "name": "Diploma of Interactive Media",
    "description": "This higher education Diploma offers a solid grounding in a balanced set of digital media subjects designed to kick start your career. With a focus on hands-on and practical subjects, you will learn the fundamentals of digital media.",
    "campus": [
      "Sydney",
      "Melbourne"
    ],
    "length": "1 year",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 16800
      },
      {
        "type": "International students",
        "fees": 17600
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  }),
  new Course({
    "name": "Bachelor of Digital Design",
    "description": "This course will teach you how to visually communicate your ideas across multiple digital platforms. From product packaging and brand design to interactive app design, data visualization and title design for film, your design career starts now.",
    "campus": [
      "Sydney",
      "Melbourne"
    ],
    "disciplines": [
      "Design Principles",
      "Digital Images",
      "Web Interface",
      "Motion Graphics",
      "Branding for Products"
    ],
    "length": "3 years | 2 years accelerated",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 50400
      },
      {
        "type": "International students",
        "fees": 52800
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  }),
  new Course({
    "name": "Diploma of Interactive Media",
    "description": "This higher education Diploma teaches the basic principles of design, combining hands on education with design thinking. This course is also offered online.",
    "campus": [
      "Sydney",
      "Melbourne",
      "Online"
    ],
    "disciplines": [
    ],
    "length": "1 year",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 16800
      },
      {
        "type": "International students",
        "fees": 17600
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  }),
  new Course({
    "name": "Bachelor of Information Technology",
    "description": "Learn the skills required to design, build and publish iOS and Android mobile apps or your own sites and graduate with a portfolio of work.",
    "campus": [
      "Sydney",
      "Melbourne"
    ],
    "disciplines": [
      "Mobile Apps Development",
      "Game Programming",
      "AR",
      "UX / UI",
      "Artificial Intelligence"
    ],
    "length": "3 years | 2 years accelerated | Bootcamp 6 months",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 50400
      },
      {
        "type": "International students",
        "fees": 52800
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  }),
  new Course({
    "name": "Diploma of Information Technology",
    "description": "This Diploma gives you a solid grounding in the basics of developing content for mobile platforms and the web. Design, build and publish iOS and Android mobile apps and graduate with a portfolio of work.",
    "campus": [
      "Sydney",
      "Melbourne",
      "Online"
    ],
    "disciplines": [
    ],
    "length": "1 year",
    "price": [
      {
        "type": "Domestic students (FEE-HELP approved)",
        "fees": 16800
      },
      {
        "type": "International students",
        "fees": 17600
      }
    ],
    // TODO get course photos
    "image": "",
    "school": _ait._id
  })
]
let _aitArtwork = [
  new Artwork({
    "image": "Zombie1_kekb6z",
    "name": "Zombie",
    "artist": "Peejay Svoboda",
    "school": _ait._id
  }),
  new Artwork({
    "image": "New_dimensions_pandora_5625_km28wx",
    "name": "New Dimensions",
    "artist": "Alfredo Vallejo",
    "school": _ait._id
  }),
  new Artwork({
    "image": "Mobile_game1_yqofud",
    "name": "Mobile Game",
    "artist": "Effendy Setiady",
    "school": _ait._id
  }),
  new Artwork({
    "image": "Gnomon_in_Forest_a7oery",
    "name": "Gnomon in Forest",
    "artist": "Glen Reiner",
    "school": _ait._id
  }),
  new Artwork({
    "image": "Elephant_rwr5dh",
    "name": "Elephant",
    "artist": "Marine Lucinne Daniele Ecuyer",
    "school": _ait._id
  }),
  new Artwork({
    "image": "Bulldog_ibzm8c",
    "name": "Bulldog",
    "artist": "Nardo Conforti",
    "school": _ait._id
  }),
  new Artwork({
    "image": "Broken_wq5yve",
    "name": "Broken",
    "artist": "Duc Viet Dang",
    "school": _ait._id
  }),
  new Artwork({
    "image": "AIT_Pandora_Room-Berat_Akdemir_iy91td",
    "name": "AIT Pandorra Room",
    "artist": "Berat Akdemir",
    "school": _ait._id
  })
];
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
