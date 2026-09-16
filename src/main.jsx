import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import { AppProvider } from "./context/AppContext";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Admin from "./admin/Admin";
import NewReleases from "./pages/NewReleases";
import BestSellers from "./pages/BestSellers";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Store Pages */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/books"
          element={<Books />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/new-releases"
          element={<NewReleases />}
        />

        <Route
          path="/best-sellers"
          element={<BestSellers />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* User Pages */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/admin/books"
          element={<Admin />}
        />

        <Route
          path="/admin/categories"
          element={<Admin />}
        />

        <Route
          path="/admin/users"
          element={<Admin />}
        />

        <Route
          path="/admin/orders"
          element={<Admin />}
        />

      </Routes>
    </BrowserRouter>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <AppProvider>
    <App />
  </AppProvider>
);