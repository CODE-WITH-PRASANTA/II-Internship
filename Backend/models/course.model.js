const mongoose = require("mongoose");

/* ================= VIDEO SCHEMA ================= */
const videoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

/* ================= CHAPTER SCHEMA ================= */
const chapterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videos: [videoSchema],
  },
  { _id: false }
);

/* ================= INSTRUCTOR SCHEMA ================= */
const instructorSchema = new mongoose.Schema(
  {
    name: String,
    designation: String,
    instagram: String,
    linkedin: String,
    twitter: String,
    about: String,
    email: String,
    website: String,
  },
  { _id: false }
);

/* ================= MAIN COURSE SCHEMA ================= */
const courseSchema = new mongoose.Schema(
  {
    /* Phase 1 */
    thumbnail: String,
    title: { type: String, required: true },
    shortQuote: String,
    author: String,
    authorDesignation: String,
    pricing: Number,
    timeline: String,
    rating: Number,
    category: String,
    tags: [String],

    /* Phase 2 */
    description: String,
    whatYouLearn: [String],
    otherInfo: String,

    /* Phase 3 */
    chapters: [chapterSchema],

    /* Phase 4 */
    discount: Number,
    priceIncreaseDate: Date,
    certificate: Boolean,
    language: String,
    skillLevel: String,
    duration: String,
    totalLectures: Number,
    demoVideoUrl: String,

    /* Phase 5 */
    instructor: instructorSchema,

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);