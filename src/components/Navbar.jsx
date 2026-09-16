import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import { useApp } from "../context/AppContext";

function Navbar() {
  const {
    user,
    setUser,
    cart,
    wishlist,
    darkMode,
    setDarkMode,
  } = useApp();

  const [menuOpen, setMenuOpen] = useState(false);

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const logout = () => {
    setUser(null);
  };

  return (
    <header>
      <nav className="nav container">

        {/* Logo */}
        <Link to="/" className="logo">
          <span>
            <BookOpen />
          </span>
          BookVerse
        </Link>

        {/* Navigation Links */}
        <div className={menuOpen ? "links open" : "links"}>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/new-releases">New Releases</Link>
          <Link to="/best-sellers">Best Sellers</Link>
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">

          {/* Dark Mode */}
          <button
            className="icon-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* Wishlist + Cart
              Only visible for normal users */}
          {user?.role !== "admin" && (
            <>
              <Link
                to="/wishlist"
                className="icon-btn badge"
              >
                <Heart />
                <i>{wishlist.length}</i>
              </Link>

              <Link
                to="/cart"
                className="icon-btn badge"
              >
                <ShoppingBag />
                <i>{totalCartItems}</i>
              </Link>
            </>
          )}

          {/* User / Admin */}
          {user ? (
            <>
              <Link
                to={
                  user.role === "admin"
                    ? "/admin"
                    : "/profile"
                }
                className="profile"
              >
                <User />
                {user.name.split(" ")[0]}
              </Link>

              {/* Logout */}
              <button
                className="logout"
                onClick={logout}
              >
                <LogOut />
              </button>
            </>
          ) : (
            /* Login */
            <Link
              to="/login"
              className="login-link"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu */}
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;