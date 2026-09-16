import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useState } from "react";

import { useApp } from "../context/AppContext";

function Cart() {
  const {
    cart,
    buyNowItem,

    removeFromCart,
    increaseQuantity,
    decreaseQuantity,

    clearBuyNow,

    cartItemCount,
    cartSubtotal,
    cartSavings,
    cartShipping,
    cartTotal,
  } = useApp();

  const location = useLocation();
  const navigate = useNavigate();

  // Quantity for Buy Now
  const [buyNowQuantity, setBuyNowQuantity] =
    useState(1);

  // Check Buy Now URL
  const isBuyNow =
    new URLSearchParams(
      location.search
    ).get("buyNow") === "true";

  // =====================================================
  // DISPLAYED ITEMS
  // =====================================================

  const displayedItems = isBuyNow
    ? buyNowItem
      ? [
          {
            ...buyNowItem,
            quantity:
              buyNowQuantity,
          },
        ]
      : []
    : cart;

  // =====================================================
  // TOTALS
  // =====================================================

  const subtotal = isBuyNow
    ? displayedItems.reduce(
        (total, item) =>
          total +
          item.price *
            (item.quantity || 1),
        0
      )
    : cartSubtotal;

  const savings = isBuyNow
    ? displayedItems.reduce(
        (total, item) =>
          total +
          Math.max(
            0,
            (item.oldPrice ||
              item.price) -
              item.price
          ) *
            (item.quantity || 1),
        0
      )
    : cartSavings;

  const shipping = isBuyNow
    ? subtotal >= 999 ||
      subtotal === 0
      ? 0
      : 49
    : cartShipping;

  const total =
    subtotal + shipping;

  const itemCount = isBuyNow
    ? displayedItems.reduce(
        (count, item) =>
          count +
          (item.quantity || 1),
        0
      )
    : cartItemCount;

  // =====================================================
  // REMOVE
  // =====================================================

  const handleRemove = (item) => {
    if (isBuyNow) {
      clearBuyNow();
      navigate("/cart");
    } else {
      removeFromCart(item.id);
    }
  };

  // =====================================================
  // INCREASE
  // =====================================================

  const handleIncrease = (
    item
  ) => {
    if (isBuyNow) {
      setBuyNowQuantity(
        (previous) =>
          previous + 1
      );
    } else {
      increaseQuantity(
        item.id
      );
    }
  };

  // =====================================================
  // DECREASE
  // =====================================================

  const handleDecrease = (
    item
  ) => {
    if (isBuyNow) {
      setBuyNowQuantity(
        (previous) =>
          Math.max(
            previous - 1,
            1
          )
      );
    } else {
      decreaseQuantity(
        item.id
      );
    }
  };

  // =====================================================
  // EMPTY CART
  // =====================================================

  if (
    displayedItems.length === 0
  ) {
    return (
      <div className="cart-page">

        <div className="cart-empty">

          <ShoppingBag
            size={64}
          />

          <h1>
            {isBuyNow
              ? "No book selected"
              : "Your cart is empty"}
          </h1>

          <p>
            {isBuyNow
              ? "Choose a book and click Buy Now."
              : "Looks like you haven't added any books yet."}
          </p>

          <Link
            to="/books"
            className="primary"
          >
            Explore Books
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-header">

        <Link
          to="/books"
          className="back-link"
        >
          <ArrowLeft
            size={18}
          />

          Continue Shopping
        </Link>

        <div>

          <span className="eyebrow">
            {isBuyNow
              ? "BUY NOW"
              : "YOUR CART"}
          </span>

          <h1>
            {isBuyNow
              ? "Buy This Book"
              : "Shopping Cart"}
          </h1>

        </div>

      </div>

      {/* CONTENT */}
      <div className="cart-layout">

        {/* =================================================
            CART ITEMS
        ================================================= */}

        <div className="cart-items">

          {displayedItems.map(
            (item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}
                <img
                  src={item.cover}
                  alt={item.title}
                  className="cart-book-cover"
                />

                {/* INFORMATION */}
                <div className="cart-book-info">

                  <span className="cart-category">
                    {item.category}
                  </span>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.author}
                  </p>

                  <div className="cart-price">

                    ₹{item.price}

                    {item.oldPrice && (
                      <span>
                        ₹
                        {item.oldPrice}
                      </span>
                    )}

                  </div>

                  {/* QUANTITY */}
                  <div className="quantity-controls">

                    <button
                      type="button"
                      onClick={() =>
                        handleDecrease(
                          item
                        )
                      }
                      aria-label="Decrease quantity"
                    >
                      <Minus
                        size={16}
                      />
                    </button>

                    <strong>
                      {item.quantity ||
                        1}
                    </strong>

                    <button
                      type="button"
                      onClick={() =>
                        handleIncrease(
                          item
                        )
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus
                        size={16}
                      />
                    </button>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="cart-item-right">

                  <strong>
                    ₹
                    {item.price *
                      (item.quantity ||
                        1)}
                  </strong>

                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() =>
                      handleRemove(
                        item
                      )
                    }
                    title="Remove from cart"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <Trash2
                      size={18}
                    />
                  </button>

                </div>

              </div>
            )
          )}

        </div>

        {/* =================================================
            SUMMARY
        ================================================= */}

        <div className="cart-summary">

          <h2>
            {isBuyNow
              ? "Order Summary"
              : "Cart Summary"}
          </h2>

          <div className="summary-row">

            <span>
              Items
            </span>

            <strong>
              {itemCount}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <strong>
              ₹{subtotal}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Savings
            </span>

            <strong>
              ₹{savings}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Shipping
            </span>

            <strong>
              {shipping === 0
                ? "FREE"
                : `₹${shipping}`}
            </strong>

          </div>

          <div className="summary-divider" />

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total}
            </strong>

          </div>

          {/* CHECKOUT */}
          <button
            className="checkout-btn"
            type="button"
            onClick={() =>
              navigate(
                "/checkout"
              )
            }
          >
            {isBuyNow
              ? "Buy Now"
              : "Proceed to Checkout"}
          </button>

          <p className="secure-text">
            🔒 Secure simulated
            checkout
          </p>

        </div>

      </div>

    </div>
  );
}

export default Cart;