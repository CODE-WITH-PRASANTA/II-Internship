const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    duration: {
      type: String,
    },

    department: {
      type: String,
    },

    modules: {
      type: String,
    },

    project: {
      type: String,
    },

    tools: {
      type: String,
    },

    type: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Internship", internshipSchema);
