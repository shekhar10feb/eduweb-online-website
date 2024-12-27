// =============
//   User Conselling page
// =============

const mongoose = require("mongoose");

// Setting up the schema
const userConsellingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      require: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const consellingOfUser = mongoose.model(
  "consellingOfUser",
  userConsellingSchema
);

module.exports = consellingOfUser;
