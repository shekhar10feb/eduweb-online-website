const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/memberImages");
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
const fileFilter = function (req, file, cb) {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."));
  }
};

// Define limits for file uploads
const limits = {
  fileSize: 1024 * 1024 * 0.5, // 0.5 MB
};

// Initialize multer with storage, file filter, and limits
const multer_for_member_for_registration = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
}).single("profile_image")

// Middleware to handle file upload errors
const multerForMemberForRegistrationErrorHandler = (err, req, res, next) => {
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

// module.exports = multer_for_member_for_registration;
module.exports = {
  multer_for_member_for_registration,
  // multerForUser,
  multerForMemberForRegistrationErrorHandler,
};
