const mongoose = require("mongoose");
const SuccessStory = require("../models/successStory.model");
const Category = require("../models/category.model");

/* =====================================================
   CREATE STORY
===================================================== */
exports.createStory = async (req, res) => {
  try {
    let blogTags = [];
    let features = [];

    // Parse Arrays Safely
    if (req.body.blogTags) {
      try {
        blogTags = JSON.parse(req.body.blogTags);
      } catch {
        blogTags = [];
      }
    }

    if (req.body.features) {
      try {
        features = JSON.parse(req.body.features);
      } catch {
        features = [];
      }
    }

    // Validate Required Fields
    if (!req.body.title || !req.body.description || !req.body.category) {
      return res.status(400).json({
        success: false,
        message: "Title, Description and Category are required",
      });
    }

    // Validate Category ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.body.category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }

    const categoryExists = await Category.findById(req.body.category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const newStory = new SuccessStory({
      title: req.body.title.trim(),
      description: req.body.description,
      category: req.body.category,
      author: req.body.author || "",
      authorEmail: req.body.authorEmail || "",
      designation: req.body.designation || "",
      quotes: req.body.quotes || "",
      tags: req.body.tags || "",
      blogTags,
      features,
      address: req.body.address || "",
      publishDate: req.body.publishDate
        ? new Date(req.body.publishDate)
        : null,
      publishStatus: req.body.publishStatus || "Draft",
      image: req.file ? req.file.path : null,
    });

    await newStory.save();

    res.status(201).json({
      success: true,
      message: "Success Story Created Successfully",
      data: newStory,
    });
  } catch (error) {
    console.error("CREATE STORY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



/* =====================================================
   GET SINGLE STORY
===================================================== */
exports.getSingleStory = async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id)
      .populate("category", "name type");

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    res.status(200).json(story);
  } catch (error) {
    console.error("GET SINGLE STORY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =====================================================
   GET ALL STORIES (Admin)
===================================================== */
exports.getAllStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find()
      .populate("category", "name type")
      .sort({ createdAt: -1 });

    res.status(200).json(stories);
  } catch (error) {
    console.error("GET STORIES ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =====================================================
   GET ONLY PUBLISHED STORIES (Public)
===================================================== */
exports.getPublishedStories = async (req, res) => {
  try {
    const stories = await SuccessStory.find({
      publishStatus: "Published",
    })
      .populate("category", "name type")
      .sort({ publishDate: -1 });

    res.status(200).json(stories);
  } catch (error) {
    console.error("GET PUBLISHED ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =====================================================
   UPDATE STORY
===================================================== */
exports.updateStory = async (req, res) => {
  try {
    const updateData = {};

    const allowedFields = [
      "title",
      "description",
      "author",
      "authorEmail",
      "designation",
      "quotes",
      "tags",
      "address",
      "publishStatus",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    // Update Category
    if (req.body.category) {
      if (!mongoose.Types.ObjectId.isValid(req.body.category)) {
        return res.status(400).json({
          success: false,
          message: "Invalid category ID",
        });
      }

      const categoryExists = await Category.findById(req.body.category);
      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }

      updateData.category = req.body.category;
    }

    // Update blogTags
    if (req.body.blogTags !== undefined) {
      try {
        updateData.blogTags = JSON.parse(req.body.blogTags);
      } catch {
        updateData.blogTags = [];
      }
    }

    // Update features
    if (req.body.features !== undefined) {
      try {
        updateData.features = JSON.parse(req.body.features);
      } catch {
        updateData.features = [];
      }
    }

    // Update publishDate
    if (req.body.publishDate) {
      updateData.publishDate = new Date(req.body.publishDate);
    }

    // Update Image
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedStory = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    ).populate("category", "name type");

    if (!updatedStory) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Story Updated Successfully",
      data: updatedStory,
    });
  } catch (error) {
    console.error("UPDATE STORY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =====================================================
   DELETE STORY
===================================================== */
exports.deleteStory = async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found",
      });
    }

    await story.deleteOne();

    res.status(200).json({
      success: true,
      message: "Story Deleted Successfully",
    });
  } catch (error) {
    console.error("DELETE STORY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};