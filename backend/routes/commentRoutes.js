// backend/routes/commentRoutes.js
const express = require("express");
const {
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Ensure the protect middleware is applied to the createComment route
router.post("/", protect, createComment); // Create a comment
router.put("/:commentId", protect, editComment); // Edit a comment
router.delete("/:commentId", protect, deleteComment); // Delete a comment

module.exports = router;
