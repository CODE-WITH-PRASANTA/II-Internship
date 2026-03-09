const express = require("express");

const router = express.Router();

const {
  createInternship,
  getInternships,
  updateInternship,
  deleteInternship,
  getInternshipById
} = require("../controllers/runningInternship.controller");


router.post("/create", createInternship);

router.get("/all", getInternships);

router.get("/:id", getInternshipById);   // ⭐ ADD THIS

router.put("/update/:id", updateInternship);

router.delete("/delete/:id", deleteInternship);

module.exports = router;