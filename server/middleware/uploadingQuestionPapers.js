const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // destination: "./public/questionPapers", // Storage location
  destination: function (req, res, cb) {
    cb(null, "./server/public/questionPapers");
  },

  // filename: function (req, file, cb) {
  //   cb(null, file.originalname);
  // },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// File filter to accept only zip files
const fileFilterForUploadQuestionPapers = function (req, file, cb) {
  const allowedMimeTypes = ['application/zip', 'application/x-zip-compressed', 'multipart/x-zip'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only zip files are allowed.'));
  }
};

// Define limits for file uploads
const limitsForUploadQuestionPapers = {
  fileSize: 1024 * 1024 * 1, // 1 MB
};

// Initialize multer with storage, file filter, and limits
const multerUploadForUploadQuestionPapers = multer({
  storage: storage,
  fileFilter: fileFilterForUploadQuestionPapers,
  limits: limitsForUploadQuestionPapers,
}).single("question_paper");

// Middleware to handle file upload errors
const multerForUploadQuestionPapersErrorHandler = (err, req, res, next) => {
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

// const uploadQuestionPapers = multer({
//   storage: storage,
// })

// module.exports = uploadQuestionPapers;

module.exports = {
  multerUploadForUploadQuestionPapers,
  multerForUploadQuestionPapersErrorHandler,
};
