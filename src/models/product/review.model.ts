import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    rating: { type: Number },
    comment: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
