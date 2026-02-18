    const mongoose = require("mongoose");

const eventPicSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EventPic", eventPicSchema);