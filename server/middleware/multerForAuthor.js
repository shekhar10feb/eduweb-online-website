const multer = require("multer");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./server/public/authorImages");
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
const multerUploadForAuthor = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
}).fields([
  {
    name: "profile_image",
    maxCount: 1,
  },
  {
    name: "cover_image",
    maxCount: 1,
  },
]);

// Middleware to handle file upload errors
const multerForAuthorErrorHandler = (err, req, res, next) => {
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

  // const multerForAuthor = multer({
  //   storage: storage,
  // });

  // module.exports = multerForAuthor;

  module.exports = {
    multerUploadForAuthor,
    // multerForUser,
    multerForAuthorErrorHandler,
  };