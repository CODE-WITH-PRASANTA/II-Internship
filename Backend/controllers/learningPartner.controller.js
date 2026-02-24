const LearningPartner = require("../models/learningPartner.model");
const fs = require("fs");

/* ================= CREATE ================= */
exports.createPartner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const partner = await LearningPartner.create({
      image: req.file.path,
    });

    res.status(201).json({
      success: true,
      message: "Partner created successfully",
      data: partner,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL ================= */
exports.getPartners = async (req, res) => {
  try {
    const partners = await LearningPartner.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: partners.length,
      data: partners,
    });
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE ================= */
exports.updatePartner = async (req, res) => {
  try {
    const partner = await LearningPartner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    if (req.file) {
      // Delete old image
      if (partner.image && fs.existsSync(partner.image)) {
        fs.unlinkSync(partner.image);
      }

      partner.image = req.file.path;
    }

    await partner.save();

    res.json({
      success: true,
      message: "Partner updated successfully",
      data: partner,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE ================= */
exports.deletePartner = async (req, res) => {
  try {
    const partner = await LearningPartner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    // Delete image file
    if (partner.image && fs.existsSync(partner.image)) {
      fs.unlinkSync(partner.image);
    }

    await partner.deleteOne();

    res.json({
      success: true,
      message: "Partner deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};