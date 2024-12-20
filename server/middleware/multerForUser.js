const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./public/userImages");
    cb(null, "./server/public/userImages");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Upload File for User
// router.post("/register", upload_for_user.single("filename"), userController.insertUser);

// let storage_for_user = multer.diskStorage({
//   destination: function (req, file, callBack) {
//     callBack(null, path.join(__dirname, '../public/userImages'));
//   },
//   filename: function(req, file, callBack) {
//     const mimeExtension = {
//       'image/jpeg': '.jpeg',
//       'image/jpg': '.jpg',
//       'image/png': '.png',
//     }
//     callBack(null, file.originalname);
//   }
//  })

//  let upload_for_user = multer({
//   storage: storage_for_user,
//   fileFilter: function(req, file, callBack) {
//     console.log("Image file type is: ", file.mimetype);
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//       callBack(null, true);
//     } else {
//       callBack(null, false);
//       req.fileError = "File format is not valid!!";
//     }
//   }
//   })

const multerForUser = multer({
  storage: storage,
});

module.exports = multerForUser;
