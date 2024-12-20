// =============
//   User Conselling page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const uploadingFAQs_by_member_Schema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const FrequentlyAskedQuestion = mongoose.model(
  "FrequentlyAskedQuestion",
  uploadingFAQs_by_member_Schema
);

module.exports = FrequentlyAskedQuestion;