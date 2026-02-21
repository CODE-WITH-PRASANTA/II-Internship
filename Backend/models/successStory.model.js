const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    author: { type: String },
    authorEmail: { type: String },
    designation: { type: String },
    quotes: { type: String },
    tags: { type: String },

    blogTags: { type: [String], default: [] },
    features: { type: [String], default: [] },

    address: { type: String },

    publishDate: { type: Date },

    publishStatus: {
      type: String,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    },

    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", successStorySchema);