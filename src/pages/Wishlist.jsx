import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

import { useApp } from "../context/AppContext";

function Wishlist() {
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />

        <main className="empty container">
          <div>❤️</div>

          <h1>Your wishlist is waiting</h1>

          <p>
            Save books that spark your curiosity.
          </p>

          <Link to="/books" className="primary">
            Explore Books
            <ArrowRight />
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page container">
        <h1 className="page-title">
          Your Wishlist
        </h1>

        <div className="book-grid all-books">
          {wishlist.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Wishlist;