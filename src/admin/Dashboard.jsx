import { useApp } from "../context/AppContext";
import { books, categories } from "../data/booksData";

function Dashboard() {
  const {
    cart,
    wishlist,
    cartItemCount,
    cartTotal,
  } = useApp();

  // -----------------------------
  // DYNAMIC COUNTS
  // -----------------------------

  const totalBooks = books.length;

  const totalCategories = categories.length;

  const wishlistCount = wishlist.length;

  const cartBooks = cart.length;

  // -----------------------------
  // CATEGORY COUNTS
  // -----------------------------

  const categoryCounts = categories.map((category) => {
    const count = books.filter(
      (book) =>
        book.category?.toLowerCase() === category.toLowerCase()
    ).length;

    return {
      name: category,
      count,
    };
  });

  const maxCategoryCount = Math.max(
    ...categoryCounts.map((item) => item.count),
    1
  );

  // -----------------------------
  // DEMO ORDER DATA
  // -----------------------------

  const recentOrders = [
    {
      id: "#BV1024",
      book: "The Midnight Library",
      status: "Processing",
      amount: 499,
    },
    {
      id: "#BV1025",
      book: "Atomic Habits",
      status: "Shipped",
      amount: 599,
    },
    {
      id: "#BV1026",
      book: "Clean Code",
      status: "Delivered",
      amount: 699,
    },
    {
      id: "#BV1027",
      book: "Dune",
      status: "Processing",
      amount: 799,
    },
  ];

  // -----------------------------
  // DASHBOARD STATS
  // -----------------------------

  const stats = [
    {
      title: "Books Available",
      value: totalBooks,
      description: "Books in store",
    },
    {
      title: "Categories",
      value: totalCategories,
      description: "Book categories",
    },
    {
      title: "Wishlist Items",
      value: wishlistCount,
      description: "Saved books",
    },
    {
      title: "Cart Items",
      value: cartItemCount,
      description: "Items in cart",
    },
  ];

  return (
    <>
      {/* ============================= */}
      {/* STATISTICS */}
      {/* ============================= */}

      <div className="stat-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.title}>
            <span>{stat.title}</span>

            <h2>{stat.value}</h2>

            <small>{stat.description}</small>
          </div>
        ))}
      </div>

      {/* ============================= */}
      {/* DASHBOARD PANELS */}
      {/* ============================= */}

      <div className="admin-panels">

        {/* ============================= */}
        {/* RECENT ORDERS */}
        {/* ============================= */}

        <div className="panel">
          <h3>Recent Orders</h3>

          {recentOrders.map((order) => (
            <div className="row" key={order.id}>
              <b>{order.id}</b>

              <span>{order.book}</span>

              <span>₹{order.amount}</span>
            </div>
          ))}
        </div>

        {/* ============================= */}
        {/* POPULAR CATEGORIES */}
        {/* ============================= */}

        <div className="panel">
          <h3>Book Categories</h3>

          {categoryCounts.slice(0, 5).map((category) => {
            const percentage = Math.round(
              (category.count / maxCategoryCount) * 100
            );

            return (
              <div
                className="progress"
                key={category.name}
              >
                <p>
                  <span>{category.name}</span>

                  <b>{category.count} books</b>
                </p>

                <i
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================= */}
      {/* CART SUMMARY */}
      {/* ============================= */}

      <div className="admin-panels">

        <div className="panel">
          <h3>Cart Summary</h3>

          <div className="row">
            <span>Different Books</span>
            <b>{cartBooks}</b>
          </div>

          <div className="row">
            <span>Total Quantity</span>
            <b>{cartItemCount}</b>
          </div>

          <div className="row">
            <span>Current Cart Total</span>
            <b>₹{cartTotal}</b>
          </div>
        </div>

        <div className="panel">
          <h3>Store Overview</h3>

          <div className="row">
            <span>Total Books</span>
            <b>{totalBooks}</b>
          </div>

          <div className="row">
            <span>Total Categories</span>
            <b>{totalCategories}</b>
          </div>

          <div className="row">
            <span>Wishlist Items</span>
            <b>{wishlistCount}</b>
          </div>
        </div>

      </div>
    </>
  );
}

export default Dashboard;