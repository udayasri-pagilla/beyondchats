import axios from "axios";

const API_BASE_URL ="https://beyondchats-backend-ys8y.onrender.com/api/articles";

import Article from "../models/Article.js";

const publishArticle = async (originalArticle, newContent, links) => {
  await Article.create({
    title: `Updated: ${originalArticle.title}`,
    content: newContent,
    sourceUrl: originalArticle.sourceUrl,
    type: "generated",
    references: links,
  });

  console.log(" Generated article saved:", originalArticle.title);
};

export default publishArticle;
