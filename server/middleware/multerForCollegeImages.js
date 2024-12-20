const multer = require("multer");
const path = require("path");

// const multerForMember = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "../public/memberImages"));
//     },
//     filename: function (req, file, cb) {
//       const name = Date.now() + " - " + file.originalname;
//       cb(null, name);
//     },
//   });

// Storage for Cover Image 
const storageForCoverImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/collegeCoverImages");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerForCollegeCoverImage = multer({
  storage: storageForCoverImage,
});

// Storage for Profile Image 
const storageForProfileImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/collegeProfileImages");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerForCollegeProfileImage = multer({
  storage: storageForProfileImage,
});

// Storage for College Details Brochure 
const storageForCollegeDetailsBrochure = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/collegeDetailsBrochure");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerForCollegeDetailsBrochure = multer({
  storage: storageForCollegeDetailsBrochure,
});


module.exports = {
  multerForCollegeCoverImage,
  multerForCollegeProfileImage,
  multerForCollegeDetailsBrochure
}
