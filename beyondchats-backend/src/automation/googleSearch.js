import axios from "axios";

const SERPER_API_URL = "https://google.serper.dev/search";

const googleSearch = async (query) => {
  try {
    const response = await axios.post(
      SERPER_API_URL,
      {
        q: query,
        num: 5, // fetch few results, we will filter
      },
      {
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const results = response.data.organic || [];

    // filter only blog/article links (exclude beyondchats & junk)
    const links = results
      .map((item) => item.link)
      .filter(
        (link) =>
          link &&
          !link.includes("beyondchats.com") &&
          !link.includes("youtube.com") &&
          !link.includes("pdf")
      )
      .slice(0, 2);

    console.log(` Found ${links.length} competitor articles`);

    return links;
  } catch (error) {
    console.error("Google search failed:", error.message);
    return [];
  }
};

export default googleSearch;
