const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload");

const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("thumbnail"),
  convertToWebp,
  createCourse
);

/* ================= GET ALL ================= */
router.get("/", getCourses);

/* ================= GET ONE ================= */
router.get("/:id", getCourseById);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.single("thumbnail"),   // allow thumbnail update
  convertToWebp,
  updateCourse
);

/* ================= DELETE ================= */
router.delete("/:id", deleteCourse);

module.exports = router;