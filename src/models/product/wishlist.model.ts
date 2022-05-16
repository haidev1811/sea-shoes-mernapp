import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: "Product",
  },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
