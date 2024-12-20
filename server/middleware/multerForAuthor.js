const multer = require("multer");
const path = require("path");

// const storage1 = multer.diskStorage({
//     destination: function (req, file, cb) {
//       // cb(null, path.join(__dirname, "../public/authorImages"));
//     },
//     filename: function (req, file, cb) {
//       const name = Date.now() + " - " + file.originalname;
//       cb(null, name);
//     },
//   });

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./server/public/authorImages");
    },
  
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const multerForAuthor = multer({
    storage: storage,
  });

  module.exports = multerForAuthor;