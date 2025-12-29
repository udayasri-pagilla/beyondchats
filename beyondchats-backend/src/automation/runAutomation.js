import dotenv from "dotenv";
dotenv.config();


import fetchArticles from "./fetchArticles.js";
import googleSearch from "./googleSearch.js";
import scrapeExternal from "./scrapeExternal.js";
import llmRewrite from "./llmRewrite.js";
import publishArticle from "./publishArticle.js";

const runAutomation = async () => {
  console.log("Phase 2 automation started");

  // 1. fetch original articles
  const articles = await fetchArticles();

  for (const article of articles) {
    console.log(`\nProcessing: ${article.title}`);

    // 2. google search
    const links = await googleSearch(article.title);

    // 3. scrape competitor articles
    const externalContents = await scrapeExternal(links);

    // 4. rewrite using LLM
    const newContent = await llmRewrite(
      article.content,
      externalContents
    );

    // 5. publish generated article
    await publishArticle(article, newContent, links);
  }

  console.log("\n Phase 2 automation completed");
};

runAutomation();
