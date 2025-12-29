import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/articles";

export const fetchArticles = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};
