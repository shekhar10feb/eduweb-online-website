// =============
//   User page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const authorSchema = new mongoose.Schema(
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
    // onlyFilenameFromDatabase: {
    //   type: String,
    //   required: true,
    // },
    coverImage: {
      type: String, // cloudinary url
    },
    cloudinary_image_public_id: {
      type: String,
    },
    terms_conditions_and_privacy_policy: {
      type: String,
      required: true,
    },
    writtenBlogsByAuthor: [
      {
        blogTitle: {
          type: String,
          required: true,
        },
        blogCategory: {
          type: String,
          required: true,
        },
        blogSubCategory: {
          type: String,
          required: true,
        },
        blogContent: {
          type: String,
          required: true,
        },
        blogPublishedDate: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
