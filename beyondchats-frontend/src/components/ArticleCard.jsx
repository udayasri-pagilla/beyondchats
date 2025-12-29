export default function ArticleCard({ article }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">
        {article.title}
      </h2>

      <span
        className={`inline-block text-xs px-2 py-1 rounded ${
          article.type === "generated"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {article.type.toUpperCase()}
      </span>
    </div>
  );
}
