// import { useEffect, useState } from "react";
// import { fetchArticles } from "../api/articles";

// import ArticleCard from "../components/ArticleCard";

// export default function Home() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchArticles().then((res) => setArticles(res.data));
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//       {articles.map((a) => (
//         <ArticleCard key={a._id} article={a} />
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";
import ArticleCardComponent from "../components/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]); // ✅ EMPTY ARRAY

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data || []); // ✅ SAFETY
    });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCardComponent
          key={article._id}
          article={article}
        />
      ))}
    </div>
  );
}
