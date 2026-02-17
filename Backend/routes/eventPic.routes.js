const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload"); // ✅ FIXED

const {
  createPic,
  getAllPics,
  updatePic,
  deletePic,
} = require("../controllers/eventPic.controller");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,          // ✅ ADD THIS (Sharp)
  createPic
);

/* ================= GET ================= */
router.get("/", getAllPics);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,          // ✅ ADD THIS
  updatePic
);

/* ================= DELETE ================= */
router.delete("/:id", deletePic);

module.exports = router;