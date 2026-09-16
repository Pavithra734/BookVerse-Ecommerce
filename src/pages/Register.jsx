import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

import { useApp } from "../context/AppContext";

function Register() {
  const { setUser } = useApp();

  const navigate = useNavigate();

  // =====================================================
  // FORM STATE
  // =====================================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");


  // =====================================================
  // REGISTER
  // =====================================================

  const register = (event) => {
    event.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();


    // =================================================
    // PASSWORD CHECK
    // =================================================

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );

      return;
    }


    // =================================================
    // GET EXISTING USERS
    // =================================================

    const registeredUsers =
      JSON.parse(
        localStorage.getItem("bookverseUsers")
      ) || [];


    // =================================================
    // CHECK DUPLICATE EMAIL
    // =================================================

    const userAlreadyExists =
      registeredUsers.some(
        (user) =>
          user.email.toLowerCase() === cleanEmail
      );


    if (userAlreadyExists) {
      setError(
        "An account with this email already exists."
      );

      return;
    }


    // =================================================
    // CREATE USER
    // =================================================

    const newUser = {
      name: cleanName,
      email: cleanEmail,
      password: password,
      role: "user",
    };


    // =================================================
    // SAVE USER
    // =================================================

    const updatedUsers = [
      ...registeredUsers,
      newUser,
    ];

    localStorage.setItem(
      "bookverseUsers",
      JSON.stringify(updatedUsers)
    );


    // =================================================
    // LOGIN USER AUTOMATICALLY
    // =================================================

    setUser({
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });


    // =================================================
    // GO HOME
    // =================================================

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
          Begin your story.
        </h1>

        <p>
          Create your personal
          reading space.
        </p>

      </div>


      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <div className="auth-form">

        <div className="form-box">

          <span className="eyebrow">
            JOIN BOOKVERSE
          </span>

          <h1>
            Create Account
          </h1>

          <p>
            Start discovering amazing books.
          </p>


          <form onSubmit={register}>

            {/* FULL NAME */}

            <label>
              Full Name

              <input
                required
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />
            </label>


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
                placeholder="Create a password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />
            </label>


            {/* CONFIRM PASSWORD */}

            <label>
              Confirm Password

              <input
                required
                type="password"
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
              />
            </label>


            {/* ERROR */}

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}


            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="primary wide"
            >
              Create Account

              <ArrowRight />
            </button>


            {/* LOGIN */}

            <p className="center">
              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;