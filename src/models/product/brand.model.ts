import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const BrandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
