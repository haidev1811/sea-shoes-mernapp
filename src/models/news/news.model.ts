import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const NewsSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    imgTitle: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, slug: "title", unique: true },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
