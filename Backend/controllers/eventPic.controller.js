const EventPic = require("../models/eventPic.model");
const fs = require("fs");
const path = require("path");

/* ================= CREATE ================= */
exports.createPic = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const newPic = await EventPic.create({
      image: req.file.path.replace(/\\/g, "/"),  // ✅ store full relative path
    });

    res.status(201).json(newPic);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ message: "Error uploading image" });
  }
};

/* ================= GET ================= */
exports.getAllPics = async (req, res) => {
  try {
    const pics = await EventPic.find().sort({ createdAt: -1 });
    res.status(200).json(pics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images" });
  }
};

/* ================= UPDATE ================= */
exports.updatePic = async (req, res) => {
  try {
    const pic = await EventPic.findById(req.params.id);
    if (!pic) return res.status(404).json({ message: "Not found" });

    if (req.file) {
      // delete old image
      if (fs.existsSync(pic.image)) {
        fs.unlinkSync(pic.image);
      }

      pic.image = req.file.path.replace(/\\/g, "/");  // ✅ full path
    }

    await pic.save();
    res.status(200).json(pic);

  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: "Error updating image" });
  }
};

/* ================= DELETE ================= */
exports.deletePic = async (req, res) => {
  try {
    const pic = await EventPic.findById(req.params.id);
    if (!pic) return res.status(404).json({ message: "Not found" });

    if (fs.existsSync(pic.image)) {
      fs.unlinkSync(pic.image);
    }

    await pic.deleteOne();
    res.status(200).json({ message: "Deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting image" });
  }
};