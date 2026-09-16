import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { categories } from "../data/booksData";

function Categories() {
  const icons = [
    "💻",
    "⚡",
    "🧠",
    "💰",
    "❤️",
    "🔍",
    "🪄",
    "👤",
    "🏛️",
    "🎓",
  ];

  return (
    <>
      <Navbar />

      <main className="page container">
        <span className="eyebrow">EXPLORE BY INTEREST</span>

        <h1 className="page-title">Book Categories</h1>

        <div className="category-grid large">
          {categories.map((category, index) => (
            <Link
              key={category}
              to={`/books?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <span>{icons[index]}</span>

              <b>{category}</b>

              <small>Discover the collection</small>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Categories;