const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload");
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  togglePublish,
} = require("../controllers/category.controller");

/* ================= ROUTES ================= */

router.post(
  "/",
  upload.single("icon"),
  convertToWebp,
  createCategory
);

router.get("/", getCategories);

router.put(
  "/:id",
  upload.single("icon"),
  convertToWebp,
  updateCategory
);

router.delete("/:id", deleteCategory);

router.patch("/toggle/:id", togglePublish);

module.exports = router;