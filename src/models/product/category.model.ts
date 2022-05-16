import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
