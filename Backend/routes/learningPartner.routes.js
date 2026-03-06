const express = require("express");
const {
  createPartner,
  getPartners,
  updatePartner,
  deletePartner,
} = require("../controllers/learningPartner.controller");

const { upload, convertToWebp } = require("../middleware/upload");

const router = express.Router();

/* ================= ROUTES ================= */

router.post("/", upload.single("image"), convertToWebp, createPartner);

router.get("/", getPartners);

router.put("/:id", upload.single("image"), convertToWebp, updatePartner);

router.delete("/:id", deletePartner);

module.exports = router;