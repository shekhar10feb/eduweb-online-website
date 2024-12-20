const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // destination: "./public/questionPapers", // Storage location
  destination: function (req, res, cb) {
    cb(null, "./server/public/questionPapers");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadQuestionPapers = multer({
  storage: storage,
})

module.exports = uploadQuestionPapers;
