const SuccessStory = require("../models/successStory.model");

/* ================= CREATE ================= */
exports.createStory = async (req, res) => {
  try {
    let blogTags = [];

    if (req.body.blogTags) {
      try {
        blogTags = JSON.parse(req.body.blogTags);
      } catch {
        blogTags = [];
      }
    }

    const newStory = new SuccessStory({
      ...req.body,
      blogTags,
      publishDate: req.body.publishDate
        ? new Date(req.body.publishDate)
        : null,
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

/* ================= UPDATE ================= */
exports.updateStory = async (req, res) => {
  try {
    const updateData = {};

    // ✅ Only update fields if they exist
    if (req.body.title) updateData.title = req.body.title;
    if (req.body.description) updateData.description = req.body.description;
    if (req.body.category) updateData.category = req.body.category;
    if (req.body.author) updateData.author = req.body.author;
    if (req.body.designation) updateData.designation = req.body.designation;
    if (req.body.quotes) updateData.quotes = req.body.quotes;
    if (req.body.address) updateData.address = req.body.address;
    if (req.body.contact) updateData.contact = req.body.contact;
    if (req.body.publishStatus)
      updateData.publishStatus = req.body.publishStatus;

    // ✅ Handle blogTags safely
    if (req.body.blogTags) {
      try {
        updateData.blogTags = JSON.parse(req.body.blogTags);
      } catch {
        updateData.blogTags = [];
      }
    }

    // ✅ Handle publishDate safely
    if (req.body.publishDate) {
      updateData.publishDate = new Date(req.body.publishDate);
    }

    // ✅ Handle image update
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedStory = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },   // 🔥 IMPORTANT
      { new: true }
    );

    res.json({
      success: true,
      message: "Story Updated Successfully",
      data: updatedStory,
    });
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