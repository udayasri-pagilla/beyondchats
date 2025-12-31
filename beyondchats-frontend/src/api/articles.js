import axios from "axios";

const API_BASE_URL = "https://beyondchats-backend-ys8y.onrender.com/api/articles";

export const fetchArticles = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};
