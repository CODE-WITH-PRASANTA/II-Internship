const SuccessStory = require("../models/successStory.model");

/* ================= CREATE ================= */
exports.createStory = async (req, res) => {
  try {
    const newStory = new SuccessStory({
      ...req.body,
      image: req.file ? req.file.path : null,
    });

    await newStory.save();

    res.status(201).json({
      success: true,
      message: "Success Story Created",
      data: newStory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= GET ALL ================= */
exports.getAllStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });

    res.json(stories);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteStory = async (req, res) => {
  try {
    await SuccessStory.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Story Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};