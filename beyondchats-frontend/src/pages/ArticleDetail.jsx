import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticles().then((data) => {
      const found = data.find((a) => a._id === id);
      setArticle(found);
    });
  }, [id]);

  if (!article) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <span
        className={`inline-block mb-6 text-xs px-3 py-1 rounded-full ${
          article.type === "generated"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {article.type.toUpperCase()}
      </span>

      <article className="prose max-w-none">
        {article.content}
      </article>

      {/* References */}
      {article.type === "generated" &&
        article.references?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">
              References
            </h3>
            <ul className="list-disc ml-6">
              {article.references.map((ref, idx) => (
                <li key={idx}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 underline"
                  >
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}
