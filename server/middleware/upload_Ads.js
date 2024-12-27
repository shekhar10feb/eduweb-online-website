const multer = require("multer");

const storage = multer.diskStorage({
  // destination: "./public/questionPapers", // Storage location
  // destination: function (req, file, cb) {
  //   cb(null, path.join(__dirname, "./public/uploadedAds"));
  // },

  destination: function (req, res, cb) {
    cb(null, "./server/public/uploadedAds");
  },

  // filename: function (req, file, cb) {
  //   const name = Date.now() + " - " + file.originalname;
  //   cb(null, name);
  // },

  // filename: function (req, file, cb) {
  //   cb(null, file.originalname);
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
const fileFilterForUpload_Ads = function (req, file, cb) {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
  }
};

// Define limits for file uploads
const limitsForUpload_Ads = {
  fileSize: 1024 * 1024 * 0.5, // 0.5 MB
};

// Initialize multer with storage, file filter, and limits
const upload_Ads = multer({
  storage: storage,
  fileFilter: fileFilterForUpload_Ads,
  limits: limitsForUpload_Ads,
}).single("filename");

// Middleware to handle file upload errors
const multerForUpload_AdsErrorHandler = (err, req, res, next) => {
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

// const upload_Ads = multer({
//   storage: storage,
// })

module.exports = {
  upload_Ads,
  multerForUpload_AdsErrorHandler,
};
