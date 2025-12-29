import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/articles";

const fetchArticles = async () => {
  try {
    const response = await axios.get(API_BASE_URL);

    // take only original articles
    const originalArticles = response.data.filter(
      (article) => article.type === "original"
    );

    console.log(
      ` Fetched ${originalArticles.length} original articles`
    );

    return originalArticles;
  } catch (error) {
    console.error("Failed to fetch articles:", error.message);
    return [];
  }
};

export default fetchArticles;
