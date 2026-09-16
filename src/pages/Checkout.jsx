import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";

import { useApp } from "../context/AppContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    buyNowItem,
  } = useApp();

  const [form, setForm] =
    useState({
      fullName: "",
      address: "",
      city: "",
      pincode: "",
    });

  const [errors, setErrors] =
    useState({});

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (
    event
  ) => {
    const {
      name,
      value,
    } = event.target;

    setForm(
      (current) => ({
        ...current,
        [name]: value,
      })
    );

    // Remove error while typing
    if (errors[name]) {
      setErrors(
        (current) => ({
          ...current,
          [name]: "",
        })
      );
    }
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validate = () => {
    const nextErrors = {};

    // Full name
    if (
      form.fullName.trim()
        .length < 3
    ) {
      nextErrors.fullName =
        "Please enter your full name.";
    }

    // Address
    if (
      form.address.trim()
        .length < 10
    ) {
      nextErrors.address =
        "Please enter a complete delivery address.";
    }

    // City
    if (
      form.city.trim()
        .length < 2
    ) {
      nextErrors.city =
        "Please enter your city.";
    }

    // Pincode
    if (
      !/^\d{6}$/.test(
        form.pincode.trim()
      )
    ) {
      nextErrors.pincode =
        "Pincode must contain exactly 6 digits.";
    }

    setErrors(
      nextErrors
    );

    return (
      Object.keys(
        nextErrors
      ).length === 0
    );
  };

  // =====================================================
  // PAYMENT
  // =====================================================

  const payNow = (
    event
  ) => {
    event.preventDefault();

    const isValid =
      validate();

    if (!isValid) {
      return;
    }

    // Frontend-only simulated payment
    navigate(
      "/payment-success"
    );
  };

  // =====================================================
  // CHECK CART
  // =====================================================

  const hasItems =
    cart.length > 0 ||
    Boolean(buyNowItem);

  if (!hasItems) {
    return (
      <>
        <Navbar />

        <main className="page container">

          <div className="empty-state">

            <h2>
              Your cart is empty
            </h2>

            <p>
              Add a book before
              going to checkout.
            </p>

            <button
              className="primary"
              type="button"
              onClick={() =>
                navigate(
                  "/books"
                )
              }
            >
              Explore Books
            </button>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page container">

        <div className="checkout-box">

          <span className="eyebrow">
            FINAL STEP
          </span>

          <h1 className="page-title">
            Checkout
          </h1>

          <form
            onSubmit={payNow}
            noValidate
          >

            <div className="checkout-options">

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <section>

                <h3>
                  Delivery Address
                </h3>

                {/* FULL NAME */}
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={
                    form.fullName
                  }
                  onChange={
                    handleChange
                  }
                  aria-invalid={
                    Boolean(
                      errors.fullName
                    )
                  }
                />

                {errors.fullName && (
                  <small className="form-error">
                    {errors.fullName}
                  </small>
                )}

                {/* ADDRESS */}
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={
                    form.address
                  }
                  onChange={
                    handleChange
                  }
                  aria-invalid={
                    Boolean(
                      errors.address
                    )
                  }
                />

                {errors.address && (
                  <small className="form-error">
                    {errors.address}
                  </small>
                )}

                {/* CITY + PINCODE */}
                <div>

                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={
                      form.city
                    }
                    onChange={
                      handleChange
                    }
                    aria-invalid={
                      Boolean(
                        errors.city
                      )
                    }
                  />

                  <input
                    name="pincode"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Pincode"
                    value={
                      form.pincode
                    }
                    onChange={
                      handleChange
                    }
                    aria-invalid={
                      Boolean(
                        errors.pincode
                      )
                    }
                  />

                </div>

                <div className="checkout-field-errors">

                  {errors.city && (
                    <small className="form-error">
                      {errors.city}
                    </small>
                  )}

                  {errors.pincode && (
                    <small className="form-error">
                      {errors.pincode}
                    </small>
                  )}

                </div>

              </section>

              {/* =================================================
                  PAYMENT
              ================================================= */}

              <section>

                <h3>
                  Payment Method
                </h3>

                <label className="radio">

                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    defaultChecked
                  />

                  UPI Payment

                </label>

                <label className="radio">

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                  />

                  Credit / Debit Card

                </label>

                <label className="radio">

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                  />

                  Cash on Delivery

                </label>

              </section>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="primary wide"
            >
              Pay Now

              <ArrowRight
                size={20}
              />
            </button>

          </form>

        </div>

      </main>
    </>
  );
}

export default Checkout;