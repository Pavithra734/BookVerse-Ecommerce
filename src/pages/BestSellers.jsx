import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import books from "../data/booksData";

function BestSellers() {
  // Highest-rated books first
  const bestBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <>
      <Navbar />

      <main className="page container">
        <span className="eyebrow">TOP PICKS</span>

        <h1 className="page-title">
          Best Sellers 🔥
        </h1>

        <p className="page-subtitle">
          Explore the books loved by BookVerse readers.
        </p>

        {bestBooks.length > 0 ? (
          <div className="book-grid all-books">
            {bestBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No best sellers found</h2>
            <p>
              Best-selling books will appear here soon.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default BestSellers;