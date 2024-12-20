// =============
//   College List page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const collegeSchema = new mongoose.Schema(
  {
    // College Details
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
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
      trim: true,
    },
    cover_image: {
      type: String,
      // required: true,
    },
    cloudinary_cover_image_public_id: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    cloudinary_profile_image_public_id: {
      type: String,
    },
    city: {
      type: String,
      // required: true,
      trim: true,
    },
    state_or_ut_name: {
      type: String,
      // required: true,
      trim: true,
    },
    district_name: {
      type: String,
      trim: true,
    },
    terms_conditions_and_privacy_policy: {
      type: String,
      required: true,
      trim: true,
    },

    // Particulars
    college_short_name: {
      type: String,
      trim: true,
    },
    institute_type: {
      type: String,
      trim: true,
    },
    ownership: {
      type: String,
      // required: true,
      trim: true,
    },
    approvals: {
      type: String,
      // required: true,
      trim: true,
    },
    courses_offered: {
      type: String,
      trim: true,
    },
    college_campus: {
      type: String,
      trim: true,
    },
    college_admission: {
      type: String,
      trim: true,
    },
    university_name: {
      type: String,
      // required: true,
      trim: true,
    },
    entrance_exam: {
      type: String,
      // required: true,
      trim: true,
    },
    college_description: {
      type: String,
      trim: true,
    },
    college_website: {
      type: String,
      trim: true,
    },

    // College Rank according to NIRF
    engineering_rank: {
      type: String,
      trim: true,
    },
    medical_rank: {
      type: String,
      trim: true,
    },
    law_rank: {
      type: String,
      trim: true,
    },
    management_rank: {
      type: String,
      trim: true,
    },
    fashion_design_rank: {
      type: String,
      trim: true,
    },
    pharmacy_rank: {
      type: String,
      trim: true,
    },
    overall_rank: {
      type: String,
      trim: true,
    },

    // College fees
    engineering_fees: {
      type: String,
      trim: true,
    },
    management_fees: {
      type: String,
      trim: true,
    },
    medical_fees: {
      type: String,
      trim: true,
    },
    law_fees: {
      type: String,
      trim: true,
    },
    fashion_design_fees: {
      type: String,
      trim: true,
    },
    pharmacy_fees: {
      type: String,
      trim: true,
    },

    // Files
    college_details_brochure: {
      type: String,
    },
    cloudinary_college_details_brochure_public_id: {
      type: String,
    },

    // Others
    college_rating: {
      type: String,
      trim: true,
    },
    latest_news_and_events: {
      type: String,
      trim: true,
    },
    verification_process: {
      type: String,
      trim: true,
    },
    total_star_rating: {
      type: Number,
      trim: true,
    },
    number_people_who_rated: {
      type: Number,
      trim: true,
    },
    college_comment_related: [
      {
        username: {
          type: String,
          trim: true,
        },
        college_rating: {
          type: String,
          trim: true,
        },
        comment_about_college: {
          type: String,
          trim: true,
        },
        date_created: { 
          type: Date, 
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const College = mongoose.model("CollegeList", collegeSchema);

module.exports = College;
