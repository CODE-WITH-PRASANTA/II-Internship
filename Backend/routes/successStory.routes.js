const express = require("express");
const router = express.Router();

const {
  createStory,
  getAllStories,
  deleteStory,
  updateStory, // ✅ added
} = require("../controllers/successStory.controller");

const { upload, convertToWebp } = require("../middleware/upload");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createStory
);

/* ================= GET ALL ================= */
router.get("/", getAllStories);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  updateStory
);

/* ================= DELETE ================= */
router.delete("/:id", deleteStory);

module.exports = router;