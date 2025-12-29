import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    content: String,
    author: String,
    publishedDate: Date,
    sourceUrl: String,
    type: {
      type: String,
      enum: ["original", "generated"],
      default: "original",
    },
    references: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
