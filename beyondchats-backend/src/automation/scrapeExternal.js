import axios from "axios";
import * as cheerio from "cheerio";

const scrapeExternal = async (links = []) => {
  const contents = [];

  for (const link of links) {
    try {
      console.log(`Scraping external article: ${link}`);

      const { data } = await axios.get(link, {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
      });

      const $ = cheerio.load(data);

      // extract meaningful content
      const text = $(
        "article p, article h1, article h2, article h3, article li"
      )
        .map((_, el) => $(el).text())
        .get()
        .join("\n\n")
        .replace(/\s+/g, " ")
        .trim();

      if (text.length > 300) {
        contents.push(text);
      } else {
        console.log(" Content too short, skipping");
      }
    } catch (error) {
      console.error(` Failed to scrape ${link}`);
    }
  }

  console.log(` Scraped ${contents.length} external articles`);
  return contents;
};

export default scrapeExternal;
