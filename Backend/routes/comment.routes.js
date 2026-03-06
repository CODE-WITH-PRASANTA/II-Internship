const express = require("express");
const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/comment.controller");

const router = express.Router();

router.post("/", createComment);
router.get("/:storyId", getComments);
router.delete("/:id", deleteComment);

module.exports = router;