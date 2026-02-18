const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    author: { type: String },
    designation: { type: String },
    quotes: { type: String },
    tags: { type: String },
    address: { type: String },
    contact: { type: String },
    image: { type: String }, // store image filename
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", successStorySchema);