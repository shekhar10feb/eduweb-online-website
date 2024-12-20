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

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload_Ads = multer({
  storage: storage,
})

module.exports = upload_Ads;
