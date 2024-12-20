const multer = require("multer");
const path = require("path");

// const multerForMember = multer.diskStorage({
// destination: function (req, file, cb) {
// cb(null, path.join(__dirname, "../public/memberImages"));
// },
// filename: function (req, file, cb) {
// const name = Date.now() + " - " + file.originalname;
// cb(null, name);
// },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/memberImages");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multer_for_member_for_registration = multer({
  storage: storage,
});

module.exports = multer_for_member_for_registration;
