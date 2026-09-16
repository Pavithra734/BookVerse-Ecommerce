import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";

import { useApp } from "../context/AppContext";

function PaymentSuccess() {
  const { setCart } = useApp();

  const navigate = useNavigate();

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <>
      <Navbar />

      <main className="success container">
        <CheckCircle />

        <span className="eyebrow">
          PAYMENT COMPLETE
        </span>

        <h1>
          Order placed successfully!
        </h1>

        <p>
          Your books are ready to begin
          their journey to you. 📚✨
        </p>

        <div className="order-id">
          Order #BV
          {Date.now()
            .toString()
            .slice(-6)}
        </div>

        <button
          className="primary"
          onClick={() =>
            navigate("/books")
          }
        >
          Continue Shopping
          <ArrowRight />
        </button>
      </main>
    </>
  );
}

export default PaymentSuccess;