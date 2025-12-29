import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticles(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter((article) => article.type === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-8">
          BeyondChats Articles
        </h1>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "original", "generated"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                filter === type
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading articles...
          </p>
        )}

        {/* Articles Grid */}
        {!loading && filteredArticles.length === 0 && (
          <p className="text-center text-gray-500">
            No articles found.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article._id}
              article={article}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
