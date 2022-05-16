import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
    image1: { type: String, required: true },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    image5: { type: String },
    price: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    inStock: { type: Number, default: 0 },
    discount: { type: Number },
    description: { type: String },
    size: { type: Array },
    colour: { type: Array },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, default: "", enum: ["", "men", "women", "kid"] },
    isLiked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
