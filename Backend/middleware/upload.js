const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const crypto = require("crypto");

/* ================= HELPERS ================= */
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

/* ================= ROUTE → FOLDER MAP ================= */
const routeFolderMap = {
  //   "/blogs": "uploads/blogs",
  //   "/team": "uploads/team",
  //   "/client-logos": "uploads/client-logos",
  //   "/photo-gallery": "uploads/gallery",
  //   "/teachers": "uploads/teachers",
  //   "/notices": "uploads/notices",
  //   "/awards": "uploads/awards",
  "/learning-partners": "uploads/learning-partners",
  "/testimonials": "uploads/testimonials",
  "/notices": "uploads/notices",
  "/event-pics": "uploads/event-pics", // ✅ added
  "/success-stories": "uploads/success-stories", // ✅ added
};

/* ================= MULTER CONFIG ================= */
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (jpeg, jpg, png, webp) are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

/* ================= SHARP CONVERTER ================= */
const convertToWebp = async (req, res, next) => {
  try {
    if (!req.file && !req.files) return next();

    /* ================= DETECT FOLDER ================= */
    let uploadPath = "uploads/common";

    for (const route in routeFolderMap) {
      if (req.originalUrl.includes(route)) {
        uploadPath = routeFolderMap[route];
        break;
      }
    }

    ensureDir(uploadPath);

    const generateFileName = () => {
      return `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.webp`;
    };

    /* ================= SINGLE FILE ================= */
    if (req.file) {
      const filename = generateFileName();
      const outputPath = path.join(uploadPath, filename);

      await sharp(req.file.buffer)
        .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      req.file.filename = filename;
      req.file.path = outputPath.replace(/\\/g, "/");
    }

    /* ================= MULTIPLE FILES ================= */
    if (req.files) {
      const filesArray = Array.isArray(req.files)
        ? req.files
        : Object.values(req.files).flat();

      for (const file of filesArray) {
        const filename = generateFileName();
        const outputPath = path.join(uploadPath, filename);

        await sharp(file.buffer)
          .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        file.filename = filename;
        file.path = outputPath.replace(/\\/g, "/");
      }
    }

    next();
  } catch (err) {
    console.error("SHARP ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { upload, convertToWebp };
