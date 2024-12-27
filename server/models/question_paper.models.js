// =============
//   Question Paper page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const question_paperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    board_name: {
      type: String,
      required: true,
    },
    states_or_uts: {
      type: String,
      required: true,
    },
    board_or_university: {
      type: String,
      required: true,
    },
    question_paper: {
      type: String, // cloudinary url
      required: true,
    },
    question_paper_public_id: {
      type: String, // cloudinary url
      required: true,
    },
  },
  { timestamps: true }
);

const QuestionPaper = mongoose.model("QuestionPaper", question_paperSchema);

module.exports = QuestionPaper;
