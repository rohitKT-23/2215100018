const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentId: { type: String, required: true, unique: true },
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);