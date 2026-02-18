const express = require("express");
const router = express.Router();

const {
  createStory,
  getAllStories,
  deleteStory,
} = require("../controllers/successStory.controller");

const { upload, convertToWebp } = require("../middleware/upload");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createStory
);

/* ================= GET ================= */
router.get("/", getAllStories);

/* ================= DELETE ================= */
router.delete("/:id", deleteStory);

module.exports = router;