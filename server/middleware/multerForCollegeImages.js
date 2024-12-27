const multer = require("multer");

// Storage for Cover Image
const storageForCoverImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/collegeCoverImages");
  },

  // filename: function (req, file, cb) {
  //   const name = Date.now() + " - " + file.originalname;
  //   cb(null, name);
  // },

  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpeg": ".jpeg",
      "image/jpg": ".jpg",
      "image/png": ".png",
    };
    const extension = mimeExtension[file.mimetype];
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

// File filter to validate file types
const fileFilterForCoverImage = function (req, file, cb) {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
  }
};

// Define limits for file uploads
const limitsForCoverImage = {
  fileSize: 1024 * 1024 * 0.5, // 0.5 MB
};

// Initialize multer with storage, file filter, and limits
const multerUploadForCollegeCoverImage = multer({
  storage: storageForCoverImage,
  fileFilter: fileFilterForCoverImage,
  limits: limitsForCoverImage,
}).single("cover_image");

// Middleware to handle file upload errors
const multerForCollegeCoverImageErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    // console.log("1. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else if (err) {
    // An unknown error occurred when uploading
    // console.log("2. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else {
    // Everything went fine
    next();
  }
};

// const multerForCollegeCoverImage = multer({
//   storage: storageForCoverImage,
// });

// Storage for Profile Image
const storageForProfileImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/collegeProfileImages");
  },

  // filename: function (req, file, cb) {
  //   const name = Date.now() + " - " + file.originalname;
  //   cb(null, name);
  // },
  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpeg": ".jpeg",
      "image/jpg": ".jpg",
      "image/png": ".png",
    };
    const extension = mimeExtension[file.mimetype];
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

// File filter to validate file types
const fileFilterForProfileImage = function (req, file, cb) {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
  }
};

// Define limits for file uploads
const limitsForProfileImage = {
  fileSize: 1024 * 1024 * 0.5, // 0.5 MB
};

// Initialize multer with storage, file filter, and limits
const multerUploadForCollegeProfileImage = multer({
  storage: storageForProfileImage,
  fileFilter: fileFilterForProfileImage,
  limits: limitsForProfileImage,
}).single("cover_image");

// const multerForCollegeProfileImage = multer({
//   storage: storageForProfileImage,
// });

// Middleware to handle file upload errors
const multerForCollegeProfileImageErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    // console.log("1. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else if (err) {
    // An unknown error occurred when uploading
    // console.log("2. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else {
    // Everything went fine
    next();
  }
};

// Storage for College Details Brochure
const storageForCollegeDetailsBrochure = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/collegeDetailsBrochure");
  },

  // filename: function (req, file, cb) {
  //   const name = Date.now() + " - " + file.originalname;
  //   cb(null, name);
  // },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// File filter to accept only zip files
const fileFilterForCollegeBrochure = function (req, file, cb) {
  const allowedMimeTypes = ['application/zip', 'application/x-zip-compressed', 'multipart/x-zip'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only zip files are allowed.'));
  }
};

// Define limits for file uploads
const limitsForCollegeBrochure = {
  fileSize: 1024 * 1024 * 1, // 1 MB
};

// Initialize multer with storage, file filter, and limits
const multerUploadForCollegeBrochure = multer({
  storage: storageForCollegeDetailsBrochure,
  fileFilter: fileFilterForCollegeBrochure,
  limits: limitsForCollegeBrochure,
}).single("college_details_brochure");

// Middleware to handle file upload errors
const multerForCollegeBrochureErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    // console.log("1. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else if (err) {
    // An unknown error occurred when uploading
    // console.log("2. Multer error: ", err);
    res.status(400).json({ error: err.message });
  } else {
    // Everything went fine
    next();
  }
};

// const multerForCollegeDetailsBrochure = multer({
//   storage: storageForCollegeDetailsBrochure,
// });



module.exports = {
  // multerForCollegeCoverImage,
  multerUploadForCollegeCoverImage,
  multerForCollegeCoverImageErrorHandler,
  // multerForCollegeProfileImage,
  multerUploadForCollegeProfileImage,
  multerForCollegeProfileImageErrorHandler,
  // multerForCollegeDetailsBrochure,
  multerUploadForCollegeBrochure,
  multerForCollegeBrochureErrorHandler
};
