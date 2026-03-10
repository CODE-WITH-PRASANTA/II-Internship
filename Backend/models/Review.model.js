const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
{
  name: String,
  email: String,
  review: String,

  internshipId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Internship"
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);