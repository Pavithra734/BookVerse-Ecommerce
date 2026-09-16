import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import books, {
  categories,
} from "../data/booksData";

function Books() {
  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [priceFilter, setPriceFilter] =
    useState("all");

  const [ratingFilter, setRatingFilter] =
    useState("all");

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  // Category from URL
  const selectedCategory =
    searchParams.get("category") || "All";

  // Sorting from URL
  const sortType =
    searchParams.get("sort") || "featured";

  // =====================================================
  // FILTER + SEARCH + SORT
  // =====================================================

  const filteredBooks = useMemo(() => {
    let result = books.filter((book) => {

      // ---------------- SEARCH ----------------

      const searchText = `
        ${book.title}
        ${book.author}
        ${book.category}
      `.toLowerCase();

      const searchValue =
        search.trim().toLowerCase();

      const matchesSearch =
        searchText.includes(searchValue);

      // ---------------- CATEGORY ----------------

      const matchesCategory =
        selectedCategory === "All" ||
        book.category === selectedCategory;

      // ---------------- PRICE ----------------

      const matchesPrice =
        priceFilter === "all" ||

        (
          priceFilter === "under500" &&
          book.price < 500
        ) ||

        (
          priceFilter === "500-800" &&
          book.price >= 500 &&
          book.price <= 800
        ) ||

        (
          priceFilter === "above800" &&
          book.price > 800
        );

      // ---------------- RATING ----------------

      const matchesRating =
        ratingFilter === "all" ||
        book.rating >=
          Number(ratingFilter);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating
      );
    });

    // ===================================================
    // SORTING
    // ===================================================

    if (sortType === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortType === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortType === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [
    search,
    selectedCategory,
    priceFilter,
    ratingFilter,
    sortType,
  ]);

  // =====================================================
  // CATEGORY
  // =====================================================

  const handleCategoryChange = (
    category
  ) => {
    const params =
      new URLSearchParams(searchParams);

    if (category === "All") {
      params.delete("category");
    } else {
      params.set(
        "category",
        category
      );
    }

    setSearchParams(params);
  };

  // =====================================================
  // SORT
  // =====================================================

  const handleSortChange = (
    event
  ) => {
    const value =
      event.target.value;

    const params =
      new URLSearchParams(searchParams);

    if (value === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    setSearchParams(params);
  };

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setPriceFilter("all");
    setRatingFilter("all");
    setSearch("");
  };

  return (
    <>
      <Navbar />

      <main className="page container">

        {/* HEADER */}
        <span className="eyebrow">
          THE LIBRARY
        </span>

        <h1 className="page-title">
          {selectedCategory === "All"
            ? "Discover your next great read"
            : `${selectedCategory} Books`}
        </h1>

        {/* =================================================
            SEARCH
        ================================================= */}

        <div className="search">

          <Search />

          <input
            type="text"
            placeholder="Search books, authors, categories..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />

        </div>

        {/* =================================================
            SORT
        ================================================= */}

        <div className="sort-row">

          <label htmlFor="book-sort">
            Sort by:
          </label>

          <select
            id="book-sort"
            value={sortType}
            onChange={
              handleSortChange
            }
          >
            <option value="featured">
              Featured
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Rating: High to Low
            </option>
          </select>

        </div>

        {/* =================================================
            PRICE + RATING FILTERS
        ================================================= */}

        <div className="advanced-filters">

          {/* PRICE */}
          <select
            aria-label="Filter by price"
            value={priceFilter}
            onChange={(event) =>
              setPriceFilter(
                event.target.value
              )
            }
          >
            <option value="all">
              All Prices
            </option>

            <option value="under500">
              Under ₹500
            </option>

            <option value="500-800">
              ₹500 - ₹800
            </option>

            <option value="above800">
              Above ₹800
            </option>
          </select>

          {/* RATING */}
          <select
            aria-label="Filter by rating"
            value={ratingFilter}
            onChange={(event) =>
              setRatingFilter(
                event.target.value
              )
            }
          >
            <option value="all">
              All Ratings
            </option>

            <option value="4.5">
              4.5+ ⭐
            </option>

            <option value="4">
              4.0+ ⭐
            </option>

            <option value="3">
              3.0+ ⭐
            </option>
          </select>

          {/* CLEAR */}
          {(priceFilter !== "all" ||
            ratingFilter !== "all" ||
            search !== "") && (
            <button
              type="button"
              className="clear-filter"
              onClick={
                clearFilters
              }
            >
              Clear Filters
            </button>
          )}

        </div>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="filters">

          <button
            type="button"
            className={
              selectedCategory === "All"
                ? "active"
                : ""
            }
            onClick={() =>
              handleCategoryChange(
                "All"
              )
            }
          >
            All
          </button>

          {categories
            .slice(0, 6)
            .map((category) => (
              <button
                type="button"
                key={category}
                className={
                  selectedCategory ===
                  category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleCategoryChange(
                    category
                  )
                }
              >
                {category}
              </button>
            ))}

        </div>

        {/* =================================================
            RESULT COUNT
        ================================================= */}

        <div className="section-head">

          <div>
            <span className="eyebrow">
              BOOKS
            </span>

            <h2>
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1
                ? "Book"
                : "Books"}
            </h2>
          </div>

        </div>

        {/* =================================================
            BOOKS
        ================================================= */}

        {filteredBooks.length > 0 ? (

          <div className="book-grid all-books">

            {filteredBooks.map(
              (book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              )
            )}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="empty-state">

            <h2>
              No books found
            </h2>

            <p>
              Try changing your search
              or filters.
            </p>

            <button
              type="button"
              className="primary"
              onClick={() => {
                clearFilters();
                handleCategoryChange(
                  "All"
                );
              }}
            >
              View All Books
            </button>

          </div>
        )}

      </main>
    </>
  );
}

export default Books;