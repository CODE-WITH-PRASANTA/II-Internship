const Comment = require("../models/comment.model");

/* ================= CREATE COMMENT (NORMAL + REPLY) ================= */
exports.createComment = async (req, res) => {
  try {
    const { storyId, parentId, comment, name, email, website } = req.body;

    if (!storyId || !comment || !name || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newComment = await Comment.create({
      storyId,
      parentId: parentId || null, // null = main comment
      comment,
      name,
      email,
      website,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET COMMENTS BY STORY ================= */
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      storyId: req.params.storyId,
    }).sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/* ================= SOFT DELETE COMMENT ================= */
exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;

    await Comment.findByIdAndUpdate(commentId, {
      isDeleted: true,
    });

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};