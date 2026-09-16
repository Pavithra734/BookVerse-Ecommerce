import {
  Heart,
  Plus,
  Star,
  ShoppingBag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

function BookCard({ book }) {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
    buyNow,
  } = useApp();

  const navigate = useNavigate();

  // Check whether this book is in wishlist
  const isWishlisted = wishlist.some(
    (item) => item.id === book.id
  );

  // Calculate discount
  const discount = book.oldPrice
    ? Math.round(
        (1 - book.price / book.oldPrice) * 100
      )
    : 0;

  // =====================================================
  // ADD TO CART
  // =====================================================

  const handleAddToCart = () => {
    // Add book to cart
    addToCart(book);

    // If book is in wishlist,
    // remove it from wishlist
    if (isWishlisted) {
      toggleWishlist(book);
    }
  };

  // =====================================================
  // BUY NOW
  // =====================================================

  const handleBuyNow = () => {
    buyNow(book);
    navigate("/cart?buyNow=true");
  };

  return (
    <article className="book-card">

      {/* BOOK IMAGE */}
      <div className="cover-wrap">

        <img
          src={book.cover}
          alt={book.title}
        />

        {/* WISHLIST BUTTON */}
        <button
          className="heart"
          type="button"
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          onClick={() =>
            toggleWishlist(book)
          }
        >
          <Heart
            size={20}
            fill={
              isWishlisted
                ? "currentColor"
                : "none"
            }
          />
        </button>

        {/* DISCOUNT */}
        {discount > 0 && (
          <span className="discount">
            -{discount}%
          </span>
        )}
      </div>

      {/* BOOK INFORMATION */}
      <div className="book-info">

        <span className="category">
          {book.category}
        </span>

        <h3>{book.title}</h3>

        <p>{book.author}</p>

        {/* RATING */}
        <div className="rating">
          <Star
            size={14}
            fill="currentColor"
          />

          {book.rating}
        </div>

        {/* PRICE */}
        <div className="price">
          ₹{book.price}

          {book.oldPrice && (
            <del>
              ₹{book.oldPrice}
            </del>
          )}
        </div>

        {/* BUTTONS */}
        <div className="book-actions">

          {/* ADD TO CART */}
          <button
            className="add-btn"
            type="button"
            onClick={handleAddToCart}
          >
            <span>Add to Cart</span>
            <Plus size={17} />
          </button>

          {/* BUY NOW */}
          <button
            className="buy-now-btn"
            type="button"
            onClick={handleBuyNow}
          >
            <span>Buy Now</span>
            <ShoppingBag size={17} />
          </button>

        </div>
      </div>
    </article>
  );
}

export default BookCard;