const Notice = require("../models/notice.model");
const fs = require("fs");
const path = require("path");

/* ================= CREATE ================= */
exports.createNotice = async (req, res) => {
  try {
    const { title, description, category, postedBy, date } = req.body;

    if (!title || !description || !category || !postedBy) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const newNotice = await Notice.create({
      title,
      description,
      category,
      postedBy,
      date: date ? new Date(date) : new Date(),
      image: req.file ? req.file.path : null,
    });

    res.status(201).json({
      success: true,
      message: "Notice Created Successfully",
      data: newNotice,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


/* ================= GET ALL ================= */
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: notices.length,
      data: notices,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


/* ================= UPDATE ================= */
exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    const updateData = {
      ...req.body,
      date: req.body.date ? new Date(req.body.date) : notice.date,
    };

    /* ===== If new image uploaded ===== */
    if (req.file) {
      // delete old image
      if (notice.image && fs.existsSync(notice.image)) {
        fs.unlinkSync(notice.image);
      }

      updateData.image = req.file.path;
    }

    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Notice Updated Successfully",
      data: updatedNotice,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


/* ================= DELETE ================= */
exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    // delete image from folder
    if (notice.image && fs.existsSync(notice.image)) {
      fs.unlinkSync(notice.image);
    }

    await Notice.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Notice Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};