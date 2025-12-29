import axios from "axios";
import * as cheerio from "cheerio";
import Article from "../models/Article.js";

const BLOG_URL = "https://beyondchats.com/blogs/";

export const scrapeBlogs = async () => {
  console.log("Scraping started...");

  const { data } = await axios.get(BLOG_URL);
  const $ = cheerio.load(data);

  const blogLinks = [];

  $("a").each((_, el) => {
    const href = $(el).attr("href");

    if (
      href &&
      href.includes("/blogs/") &&
      !href.endsWith("/blogs/")
    ) {
      blogLinks.push(href.startsWith("http") ? href : `https://beyondchats.com${href}`);
    }
  });

  const uniqueLinks = [...new Set(blogLinks)];
  const oldestFive = uniqueLinks.slice(-5);

  console.log("Found blog links:", oldestFive.length);

  for (const link of oldestFive) {
    const exists = await Article.findOne({ sourceUrl: link });
    if (exists) continue;

    const res = await axios.get(link);
    const $$ = cheerio.load(res.data);

    const title = $$("h1").first().text().trim();
    const content = $$("article")
  .text()
  .replace(/\s+/g, " ")
  .trim();


    if (!title || !content) continue;

    await Article.create({
      title,
      content,
      sourceUrl: link,
      type: "original",
    });
  }

  console.log("Scraping completed successfully");
};

