import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import books from "../data/booksData";

function NewReleases() {
  // Show the latest 8 books
  const newBooks = books.slice(-8).reverse();

  return (
    <>
      <Navbar />

      <main className="page container">
        <span className="eyebrow">FRESH ARRIVALS</span>

        <h1 className="page-title">
          New Releases
        </h1>

        <p className="page-subtitle">
          Discover the latest books added to BookVerse.
        </p>

        {newBooks.length > 0 ? (
          <div className="book-grid all-books">
            {newBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No new releases found</h2>
            <p>
              New books will appear here soon.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default NewReleases;