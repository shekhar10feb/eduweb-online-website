// =============
//   Member page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    tel: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
    },
    country_code: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String, // cloudinary url
      required: true,
    },
    cloudinary_image_public_id: {
      type: String,
    },
    terms_conditions_and_privacy_policy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
