import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

import books from "../data/booksData";
import { useApp } from "../context/AppContext";

function Login() {
  const { setUser } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const login = (event) => {
    event.preventDefault();

    setError("");

    const enteredEmail = email.trim().toLowerCase();

    // =====================================================
    // ADMIN LOGIN
    // =====================================================

    const isAdmin = enteredEmail.includes("admin");

    if (isAdmin) {
      setUser({
        name: "Admin",
        email: enteredEmail,
        role: "admin",
      });

      navigate("/admin");
      return;
    }

    // =====================================================
    // GET REGISTERED USERS
    // =====================================================

    const registeredUsers =
      JSON.parse(
        localStorage.getItem("bookverseUsers")
      ) || [];

    // =====================================================
    // FIND USER
    // =====================================================

    const existingUser = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === enteredEmail &&
        user.password === password
    );

    // =====================================================
    // INVALID LOGIN
    // =====================================================

    if (!existingUser) {
      setError(
        "Invalid email or password. Please register first."
      );

      return;
    }

    // =====================================================
    // LOGIN SUCCESS
    // =====================================================

    setUser({
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    });

    navigate("/");
  };

  return (
    <div className="auth">

      {/* =================================================
          LEFT SIDE
      ================================================= */}

      <div className="auth-art">

        <Link
          to="/"
          className="logo"
        >
          <span>
            <BookOpen />
          </span>

          BookVerse
        </Link>

        <h1>
          Every page is a new beginning.
        </h1>

        <p>
          Join a community built around
          the joy of reading.
        </p>

        <div className="auth-books">

          {books
            .slice(0, 3)
            .map((book) => (
              <img
                key={book.id}
                src={book.cover}
                alt={book.title}
              />
            ))}

        </div>

      </div>


      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <div className="auth-form">

        <div className="form-box">

          <span className="eyebrow">
            BOOKVERSE ACCOUNT
          </span>

          <h1>
            Welcome back
          </h1>

          <p>
            Your next chapter is waiting.
          </p>


          <form onSubmit={login}>

            {/* EMAIL */}

            <label>
              Email

              <input
                required
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </label>


            {/* PASSWORD */}

            <label>
              Password

              <input
                required
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />
            </label>


            {/* ERROR */}

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}


            {/* ADMIN INFO */}

            <p className="hint">
              Tip: use an email containing
              <b> admin </b>
              to open the Admin Dashboard.
            </p>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="primary wide"
            >
              Login

              <ArrowRight />
            </button>


            {/* REGISTER */}

            <p className="center">
              New here?{" "}

              <Link to="/register">
                Create an account
              </Link>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;