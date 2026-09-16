import {
  Navigate,
  Link,
} from "react-router-dom";

import {
  Heart,
  Package,
  Truck,
  ShoppingBag,
  User,
  ArrowRight,
  LogOut,
  BookOpen,
} from "lucide-react";

import Navbar from "../components/Navbar";

import { useApp } from "../context/AppContext";

function Profile() {
  const {
    user,
    wishlist,
    cart,
    setUser,
  } = useApp();

  // If user is not logged in
  if (!user) {
    return (
      <Navigate to="/login" replace />
    );
  }

  // Cart item count
  const cartCount = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  // Logout
  const handleLogout = () => {
    setUser(null);
  };

  // First letter for avatar
  const firstLetter =
    user.name?.charAt(0).toUpperCase() ||
    "U";

  return (
    <>
      <Navbar />

      <main className="profile-page">

        {/* =================================================
            PROFILE HERO
        ================================================= */}

        <section className="profile-hero container">

          <div className="profile-user">

            {/* Avatar */}
            <div className="profile-avatar">
              {firstLetter}
            </div>

            {/* User details */}
            <div className="profile-user-info">

              <span className="eyebrow">
                MY ACCOUNT
              </span>

              <h1>
                Welcome, {user.name}
              </h1>

              <p>
                {user.email}
              </p>

            </div>

          </div>

          {/* Logout */}
          <button
            type="button"
            className="profile-logout"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Logout
          </button>

        </section>


        {/* =================================================
            ACCOUNT STATS
        ================================================= */}

        <section className="profile-stats container">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="profile-stat-card"
          >

            <div className="profile-stat-icon">
              <Heart size={22} />
            </div>

            <div>
              <strong>
                {wishlist.length}
              </strong>

              <span>
                Wishlist
              </span>
            </div>

          </Link>


          {/* Cart */}
          <Link
            to="/cart"
            className="profile-stat-card"
          >

            <div className="profile-stat-icon">
              <ShoppingBag size={22} />
            </div>

            <div>
              <strong>
                {cartCount}
              </strong>

              <span>
                Cart Items
              </span>
            </div>

          </Link>


          {/* Orders */}
          <div className="profile-stat-card">

            <div className="profile-stat-icon">
              <Package size={22} />
            </div>

            <div>
              <strong>0</strong>

              <span>
                Orders
              </span>
            </div>

          </div>


          {/* Addresses */}
          <div className="profile-stat-card">

            <div className="profile-stat-icon">
              <Truck size={22} />
            </div>

            <div>
              <strong>0</strong>

              <span>
                Addresses
              </span>
            </div>

          </div>

        </section>


        {/* =================================================
            ACCOUNT INFORMATION
        ================================================= */}

        <section className="profile-content container">

          <div className="profile-section">

            <div className="profile-section-heading">

              <div>
                <span className="eyebrow">
                  PERSONAL INFORMATION
                </span>

                <h2>
                  Account Details
                </h2>
              </div>

              <User size={24} />

            </div>


            <div className="profile-details">

              <div className="profile-detail">

                <span>
                  Full Name
                </span>

                <strong>
                  {user.name}
                </strong>

              </div>


              <div className="profile-detail">

                <span>
                  Email Address
                </span>

                <strong>
                  {user.email}
                </strong>

              </div>


              <div className="profile-detail">

                <span>
                  Account Type
                </span>

                <strong>
                  {user.role === "admin"
                    ? "Administrator"
                    : "BookVerse Reader"}
                </strong>

              </div>

            </div>

          </div>


          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <div className="profile-section">

            <div className="profile-section-heading">

              <div>
                <span className="eyebrow">
                  QUICK ACCESS
                </span>

                <h2>
                  Your BookVerse
                </h2>
              </div>

              <BookOpen size={24} />

            </div>


            <div className="profile-actions">

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="profile-action"
              >

                <div className="profile-action-icon">
                  <Heart />
                </div>

                <div>
                  <h3>
                    My Wishlist
                  </h3>

                  <p>
                    View your saved books
                  </p>
                </div>

                <ArrowRight size={19} />

              </Link>


              {/* Cart */}
              <Link
                to="/cart"
                className="profile-action"
              >

                <div className="profile-action-icon">
                  <ShoppingBag />
                </div>

                <div>
                  <h3>
                    My Cart
                  </h3>

                  <p>
                    Review books in your cart
                  </p>
                </div>

                <ArrowRight size={19} />

              </Link>


              {/* Books */}
              <Link
                to="/books"
                className="profile-action"
              >

                <div className="profile-action-icon">
                  <BookOpen />
                </div>

                <div>
                  <h3>
                    Explore Books
                  </h3>

                  <p>
                    Discover your next read
                  </p>
                </div>

                <ArrowRight size={19} />

              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Profile;