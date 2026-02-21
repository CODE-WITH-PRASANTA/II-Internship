const Category = require("../models/category.model");
const fs = require("fs");

/* ================= CREATE ================= */
exports.createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name required" });
    }

    // 🔥 Prevent duplicate
    const existing = await Category.findOne({ name: name.trim() });
    if (existing) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = new Category({
      name: name.trim(),
      type,
      icon: req.file ? req.file.path : null,
    });

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error("CREATE CATEGORY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    console.error("GET CATEGORY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, published } = req.body;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // 🔥 Prevent duplicate (except self)
    if (name && name !== category.name) {
      const existing = await Category.findOne({ name });
      if (existing) {
        return res.status(400).json({ message: "Category already exists" });
      }
    }

    // 🔥 Delete old image if new uploaded
    if (req.file && category.icon) {
      if (fs.existsSync(category.icon)) {
        fs.unlinkSync(category.icon);
      }
      category.icon = req.file.path;
    }

    if (name) category.name = name.trim();
    if (type) category.type = type;
    if (published !== undefined) category.published = published === "true";
    await category.save();

    res.json(category);
  } catch (error) {
    console.error("UPDATE CATEGORY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // 🔥 Delete image from folder
    if (category.icon && fs.existsSync(category.icon)) {
      fs.unlinkSync(category.icon);
    }

    await category.deleteOne();

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("DELETE CATEGORY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= TOGGLE PUBLISH ================= */
/* ================= TOGGLE PUBLISH ================= */
exports.togglePublish = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.published = !category.published;

    await category.save();

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("TOGGLE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
