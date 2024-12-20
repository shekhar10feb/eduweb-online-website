// =============
//   User page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const userSchema = new mongoose.Schema(
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
      unique: true,
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
    profile_image: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    cloudinary_image_public_id: {
      type: String,
    },
    interest: {
      type: String,
      required: true,
    },
    terms_conditions_and_privacy_policy: {
      type: String,
      required: true,
    },
    articles: [
      {
        articleTitle: {
          type: String,
          trim: true,
        },
        articleContent: {
          type: String,
          trim: true,
        },
        articleLink: {
          type: String,
          trim: true,
        },
        articlePublishedDate: {
          type: String,
        },
      },
    ],
    college_rating_related: [
      {
        college_id: {
          type: String,
          trim: true,
        },
        college_rating: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
