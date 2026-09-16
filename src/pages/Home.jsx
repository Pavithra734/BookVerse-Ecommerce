import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ShieldCheck, Truck } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

import books, { categories } from "../data/booksData";

function Home() {
  const categoryIcons = [
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

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-bg"></div>

          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                ✦ YOUR NEXT FAVOURITE STORY
              </span>

              <h1>
                A universe of <em>stories</em> awaits.
              </h1>

              <p>
                Discover timeless classics, life-changing ideas,
                and worlds you never knew existed.
              </p>

              <div className="hero-buttons">
                <Link to="/books" className="primary">
                  Explore Collection
                  <ArrowRight />
                </Link>

                <Link to="/books?sort=bestseller" className="secondary">
                  View Best Sellers
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <b>10K+</b>
                  <span>Books</span>
                </div>

                <div>
                  <b>500+</b>
                  <span>Authors</span>
                </div>

                <div>
                  <b>4.9/5</b>
                  <span>Reader Love</span>
                </div>
              </div>
            </div>

            <div className="hero-books">
              {books.slice(0, 3).map((book, index) => (
                <img
                  key={book.id}
                  src={book.cover}
                  alt={book.title}
                  className={`float-book b${index}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="container section">
          <div className="section-head">
            <div>
              <span className="eyebrow">EXPLORE</span>

              <h2>Find your next obsession</h2>
            </div>

            <Link to="/categories">
              All Categories
              <ArrowRight />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/books?category=${encodeURIComponent(category)}`}
                className="category-card"
              >
                <span>{categoryIcons[index]}</span>

                <b>{category}</b>

                <small>Explore books</small>
              </Link>
            ))}
          </div>
        </section>

        {/* TRENDING BOOKS */}
        <section className="container section">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                CURATED FOR YOU
              </span>

              <h2>Trending this week 🔥</h2>
            </div>

            <Link to="/books">
              View All
              <ArrowRight />
            </Link>
          </div>

          <div className="book-grid">
            {books.slice(0, 4).map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        </section>

        {/* SALE */}
        <section className="deal container">
          <div>
            <span>⚡ LIMITED TIME</span>

            <h2>
              Stories worth staying up for.
            </h2>

            <p>
              Get up to 50% off on selected books.
            </p>

            <Link to="/books" className="primary">
              Shop the Sale
              <ArrowRight />
            </Link>
          </div>

          <div className="timer">
            <b>02</b>:
            <b>14</b>:
            <b>35</b>

            <small>
              HOURS &nbsp;&nbsp; MINUTES &nbsp;&nbsp; SECONDS
            </small>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features container">
          <div>
            <Truck />

            <div>
              <b>Free Shipping</b>
              <p>On orders over ₹999</p>
            </div>
          </div>

          <div>
            <ShieldCheck />

            <div>
              <b>Secure Payment</b>
              <p>Safe simulated checkout</p>
            </div>
          </div>

          <div>
            <BookOpen />

            <div>
              <b>Curated Collection</b>
              <p>Books you'll love</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;