const express = require("express");
const router = express.Router();

const {
  createStory,
  getAllStories,
  getPublishedStories,
  updateStory,
  deleteStory,
  getSingleStory
} = require("../controllers/successStory.controller");

const { upload, convertToWebp } = require("../middleware/upload");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createStory
);

/* ================= GET ALL (Admin) ================= */
router.get("/", getAllStories);

router.get("/:id", getSingleStory);
/* ================= GET PUBLISHED (Public) ================= */
router.get("/published", getPublishedStories);

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