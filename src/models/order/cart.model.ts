import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    name: { type: String },
    slug: { type: String, slug: "name", unique: true },
    image: { type: String },
    price: { type: Number },
    discount: { type: Number },
    inStock: { type: Number },
    quantity: { type: Number, default: 1 },
    colour: { type: String },
    size: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
