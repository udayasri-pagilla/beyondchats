import dotenv from "dotenv";
dotenv.config();

import fetchArticles from "./fetchArticles.js";
import googleSearch from "./googleSearch.js";
import scrapeExternal from "./scrapeExternal.js";
import llmRewrite from "./llmRewrite.js";
import publishArticle from "./publishArticle.js";

export default async function runAutomation() {
  console.log(" Phase 2 automation started");

  // 1. Fetch original articles
  const articles = await fetchArticles();

  for (const article of articles) {
    console.log(`\n Processing: ${article.title}`);

    // 2. Google search
    const links = await googleSearch(article.title);

    // 3. Scrape competitor articles
    const externalContents = await scrapeExternal(links);

    // 4. Rewrite using LLM (or fallback)
    const newContent = await llmRewrite(
      article.content,
      externalContents
    );

    // 5. Publish generated article
    await publishArticle(article, newContent, links);
  }

  console.log("\n Phase 2 automation completed");
}

