import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/article/${article._id}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {article.title}
      </h2>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {article.content?.slice(0, 200)}...
      </p>

      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            article.type === "generated"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {article.type.toUpperCase()}
        </span>

        <span className="text-sm text-indigo-600">
          Read more →
        </span>
      </div>
    </Link>
  );
}
