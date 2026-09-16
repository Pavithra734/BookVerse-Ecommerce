import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }) {
  // ---------------- USER ----------------

  const [user, setUser] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("bookverseUser")) || null
    );
  });

  // ---------------- CART ----------------

  const [cart, setCart] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("bookverseCart")) || []
    );
  });

  // ---------------- WISHLIST ----------------

  const [wishlist, setWishlist] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("bookverseWishlist")
      ) || []
    );
  });

  // ---------------- BUY NOW ----------------

  const [buyNowItem, setBuyNowItem] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("bookverseBuyNow")
      ) || null
    );
  });

  const [darkMode, setDarkMode] = useState(false);

  // ---------------- LOCAL STORAGE ----------------

  useEffect(() => {
    localStorage.setItem(
      "bookverseUser",
      JSON.stringify(user)
    );
  }, [user]);

  useEffect(() => {
    localStorage.setItem(
      "bookverseCart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "bookverseWishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  useEffect(() => {
    if (buyNowItem) {
      localStorage.setItem(
        "bookverseBuyNow",
        JSON.stringify(buyNowItem)
      );
    } else {
      localStorage.removeItem("bookverseBuyNow");
    }
  }, [buyNowItem]);

  // ---------------- DARK MODE ----------------

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // =====================================================
  // CART
  // =====================================================

  // ADD TO CART
  const addToCart = (book) => {
    setCart((currentCart) => {
      const existingBook = currentCart.find(
        (item) => item.id === book.id
      );

      // If book already exists, increase quantity
      if (existingBook) {
        return currentCart.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      // New book
      return [
        ...currentCart,
        {
          ...book,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // =====================================================
  // CART CALCULATIONS
  // =====================================================

  // Total number of books
  const cartItemCount = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  // Subtotal
  const cartSubtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * (item.quantity || 1),
    0
  );

  // Total savings
  const cartSavings = cart.reduce(
    (total, item) =>
      total +
      Math.max(
        0,
        (item.oldPrice || item.price) -
          item.price
      ) *
        (item.quantity || 1),
    0
  );

  // Free shipping above ₹999
  const cartShipping =
    cartSubtotal === 0 || cartSubtotal >= 999
      ? 0
      : 49;

  // Final total
  const cartTotal =
    cartSubtotal + cartShipping;

  // =====================================================
  // WISHLIST
  // =====================================================

  const toggleWishlist = (book) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === book.id
      );

      if (exists) {
        return currentWishlist.filter(
          (item) => item.id !== book.id
        );
      }

      return [
        ...currentWishlist,
        book,
      ];
    });
  };

  // =====================================================
  // BUY NOW
  // =====================================================

  const buyNow = (book) => {
    setBuyNowItem({
      ...book,
      quantity: 1,
    });
  };

  const clearBuyNow = () => {
    setBuyNowItem(null);
  };

  // =====================================================
  // PROVIDER
  // =====================================================

  return (
    <AppContext.Provider
      value={{
        // User
        user,
        setUser,

        // Cart
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        // Cart calculations
        cartItemCount,
        cartSubtotal,
        cartSavings,
        cartShipping,
        cartTotal,

        // Wishlist
        wishlist,
        toggleWishlist,

        // Buy Now
        buyNow,
        buyNowItem,
        clearBuyNow,

        // Theme
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}