const express = require("express");

const router = express.Router();

const {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship
} = require("../controllers/internship.controller");


router.post("/create", createInternship);

router.get("/all", getInternships);

router.get("/:id", getInternshipById);

router.put("/update/:id", updateInternship);

router.delete("/delete/:id", deleteInternship);

module.exports = router;