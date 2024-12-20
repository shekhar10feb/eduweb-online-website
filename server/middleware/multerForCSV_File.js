const multer = require("multer");
const path = require("path");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/csvFile");
    },
  
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const multerForCSV_File = multer({
    storage: storage,
  });

  module.exports = multerForCSV_File;