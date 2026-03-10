const express = require("express");

const router = express.Router();

const {
  createInternship,
  getInternships,
  updateInternship,
  deleteInternship,
  getInternshipById
} = require("../controllers/runningInternship.controller");
const { upload, convertToWebp } = require("../middleware/upload");

router.post("/create", upload.single("image"), convertToWebp, createInternship);

router.get("/all", getInternships);

router.get("/:id", getInternshipById);

router.put("/update/:id", upload.single("image"), convertToWebp, updateInternship);

router.delete("/delete/:id", deleteInternship);

module.exports = router;