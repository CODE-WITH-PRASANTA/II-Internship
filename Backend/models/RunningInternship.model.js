const mongoose = require("mongoose");

const RunningInternshipSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    department: String,
    modules: String,
    project: String,
    tools: String,
    internshipType: String,
    credits: String,
    location: String,
    duration: String,
    qualification: String,
    skills: String,
    internshipCostType: String,
    timePeriod: String,
    facilities: String,
    career: String,
    startDate: String,
    fee: String,
    lastDate: String,
    mentor: String,
    contact: String,
    organizer: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "RunningInternship",
  RunningInternshipSchema
);