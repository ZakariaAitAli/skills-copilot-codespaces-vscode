// Create web server
// 1. GET /comments - Get all comments
// 2. GET /comments/:id - Get a comment by id
// 3. POST /comments - Create a new comment
// 4. PUT /comments/:id - Update a comment by id
// 5. DELETE /comments/:id - Delete a comment by id

// Import express
const express = require("express");

// Import comments controller
const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");

// Create router
const router = express.Router();

// Create routes
router.route("/").get(getComments).post(createComment);
router.route("/:id").get(getComment).put(updateComment).delete(deleteComment);

// Export module
module.exports = router;