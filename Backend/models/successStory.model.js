const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    category: { type: String },

    author: { type: String },
    authorEmail: { type: String }, // ✅ added

    designation: { type: String },
    quotes: { type: String },

    tags: { type: String },

    blogTags: { type: [String], default: [] }, // ✅ array

    address: { type: String },
    contact: { type: String },

    publishDate: { type: Date }, // ✅ added
    publishStatus: {
      type: String,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    }, // ✅ added

    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", successStorySchema);