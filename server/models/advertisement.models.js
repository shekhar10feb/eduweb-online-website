// =============
//   Advertisement page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const advertisementSchema = new mongoose.Schema(
  {
    filename: {
      type: String, // cloudinary url
      required: true,
    },
    image_resolution_value: {
      type: String,
      require: true,
    },

    filename_public_id: {
      type: String,
      require: true,
    },
    // publishedDate: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

const Advertisement = mongoose.model("Advertisement", advertisementSchema);

module.exports = Advertisement;
