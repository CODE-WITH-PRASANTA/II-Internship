const Testimonial = require("../models/testimonial.model");
const fs = require("fs");

/* ================= CREATE TESTIMONIAL ================= */

exports.createTestimonial = async (req, res) => {
  try {
    const { name, designation, rating, message } = req.body;

    if (!name || !designation || !rating || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newTestimonial = await Testimonial.create({
      name,
      designation,
      rating: Number(rating),
      message,
      image: req.file ? req.file.path : "",
      published: false,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: newTestimonial,
    });
  } catch (error) {
    console.error("CREATE TESTIMONIAL ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/* ================= GET ALL TESTIMONIALS ================= */
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error("GET TESTIMONIAL ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET SINGLE TESTIMONIAL ================= */
exports.getSingleTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error("GET SINGLE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= TOGGLE PUBLISH ================= */
exports.togglePublish = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    testimonial.published = !testimonial.published;
    await testimonial.save();

    res.json({
      success: true,
      message: "Publish status updated",
      data: testimonial,
    });
  } catch (error) {
    console.error("TOGGLE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE TESTIMONIAL ================= */

exports.updateTestimonial = async (req, res) => {
  try {
    const { name, designation, rating, message } = req.body;

    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    if (name !== undefined) testimonial.name = name;
    if (designation !== undefined) testimonial.designation = designation;
    if (rating !== undefined) testimonial.rating = Number(rating);
    if (message !== undefined) testimonial.message = message;

    if (req.file) {
      if (testimonial.image && fs.existsSync(testimonial.image)) {
        fs.unlinkSync(testimonial.image);
      }
      testimonial.image = req.file.path;
    }

    await testimonial.save();

    res.json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/* ================= DELETE TESTIMONIAL ================= */
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    // Delete image file from server
    if (testimonial.image && fs.existsSync(testimonial.image)) {
      fs.unlinkSync(testimonial.image);
    }

    await testimonial.deleteOne();

    res.json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
