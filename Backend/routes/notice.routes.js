const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload");

const {
  createNotice,
  getAllNotices,
  updateNotice,
  deleteNotice,
} = require("../controllers/notice.controller");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,        // ✅ ADD THIS
  createNotice
);

/* ================= GET ================= */
router.get("/", getAllNotices);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,        // ✅ ADD THIS
  updateNotice
);

/* ================= DELETE ================= */
router.delete("/:id", deleteNotice);

module.exports = router;