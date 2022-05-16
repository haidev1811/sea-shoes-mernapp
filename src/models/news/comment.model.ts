import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    news: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "News",
    },
    comment: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
