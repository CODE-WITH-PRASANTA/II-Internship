const mongoose = require("mongoose");

const learningPartnerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "LearningPartner",
  learningPartnerSchema
);