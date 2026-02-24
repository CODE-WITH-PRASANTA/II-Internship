const express = require("express");
const {
  createTestimonial,
  getTestimonials,
  getSingleTestimonial,   // ✅ ADD THIS
  updateTestimonial,
  togglePublish,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");

const { upload, convertToWebp } = require("../middleware/upload");

const router = express.Router();

/* ================= ROUTES ================= */

// Create testimonial with image
router.post("/", upload.single("image"), convertToWebp, createTestimonial);

router.get("/", getTestimonials);
router.get("/:id", getSingleTestimonial);

router.put("/toggle/:id", togglePublish); // ✅ BEFORE :id
router.put("/:id", upload.single("image"), convertToWebp, updateTestimonial);

router.delete("/:id", deleteTestimonial);

module.exports = router;