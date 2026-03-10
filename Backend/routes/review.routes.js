const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviews,
  getReviewsByInternship
} = require("../controllers/review.controller");

router.post("/create", createReview);

router.get("/all", getReviews);
router.get("/internship/:id", getReviewsByInternship);

module.exports = router;