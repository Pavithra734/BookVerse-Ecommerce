import { useState } from "react";
import { books, categories } from "../data/booksData";

function AdminContent({ tab }) {
  const [bookData, setBookData] = useState([...books]);
  const [categoryData, setCategoryData] = useState([...categories]);

  const [userData, setUserData] = useState([
    "Pavithra",
    "Aarav Kumar",
    "Priya Sharma",
    "Rahul Reddy",
  ]);

  const [orderData, setOrderData] = useState([
    "#BV1024 — Processing",
    "#BV1025 — Shipped",
    "#BV1026 — Delivered",
    "#BV1027 — Processing",
  ]);

  // ---------------------------------------
  // SINGULAR NAMES
  // ---------------------------------------

  const singularNames = {
    Books: "Book",
    Categories: "Category",
    Users: "User",
    Orders: "Order",
  };

  const singularName = singularNames[tab] || tab;

  // ---------------------------------------
  // ADD
  // ---------------------------------------

  const handleAdd = () => {
    if (tab === "Books") {
      const title = window.prompt("Enter book title:");

      if (!title || !title.trim()) return;

      const author = window.prompt("Enter author name:");

      if (!author || !author.trim()) return;

      const priceInput = window.prompt("Enter price:");

      if (!priceInput) return;

      const price = Number(priceInput);

      if (Number.isNaN(price)) {
        window.alert("Please enter a valid price.");
        return;
      }

      const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        price,
        oldPrice: price + 200,
        rating: 4.5,
        category: "Programming",
        cover:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
      };

      setBookData((previousBooks) => [
        ...previousBooks,
        newBook,
      ]);

      window.alert("Book added successfully!");
      return;
    }

    if (tab === "Categories") {
      const category = window.prompt("Enter category name:");

      if (!category || !category.trim()) return;

      const exists = categoryData.some(
        (item) =>
          item.toLowerCase() === category.trim().toLowerCase()
      );

      if (exists) {
        window.alert("This category already exists.");
        return;
      }

      setCategoryData((previousCategories) => [
        ...previousCategories,
        category.trim(),
      ]);

      window.alert("Category added successfully!");
      return;
    }

    if (tab === "Users") {
      const name = window.prompt("Enter user name:");

      if (!name || !name.trim()) return;

      setUserData((previousUsers) => [
        ...previousUsers,
        name.trim(),
      ]);

      window.alert("User added successfully!");
      return;
    }

    if (tab === "Orders") {
      const order = window.prompt(
        "Enter order details:"
      );

      if (!order || !order.trim()) return;

      setOrderData((previousOrders) => [
        ...previousOrders,
        order.trim(),
      ]);

      window.alert("Order added successfully!");
    }
  };

  // ---------------------------------------
  // EDIT
  // ---------------------------------------

  const handleEdit = (item, index) => {
    if (tab === "Books") {
      const newTitle = window.prompt(
        "Edit book title:",
        item.title
      );

      if (!newTitle || !newTitle.trim()) return;

      const newAuthor = window.prompt(
        "Edit author:",
        item.author
      );

      if (!newAuthor || !newAuthor.trim()) return;

      const newPriceInput = window.prompt(
        "Edit price:",
        item.price
      );

      if (!newPriceInput) return;

      const newPrice = Number(newPriceInput);

      if (Number.isNaN(newPrice)) {
        window.alert("Please enter a valid price.");
        return;
      }

      setBookData((previousBooks) =>
        previousBooks.map((book, bookIndex) =>
          bookIndex === index
            ? {
                ...book,
                title: newTitle.trim(),
                author: newAuthor.trim(),
                price: newPrice,
              }
            : book
        )
      );

      window.alert("Book updated successfully!");
      return;
    }

    if (tab === "Categories") {
      const newCategory = window.prompt(
        "Edit category:",
        item
      );

      if (!newCategory || !newCategory.trim()) return;

      setCategoryData((previousCategories) =>
        previousCategories.map(
          (category, categoryIndex) =>
            categoryIndex === index
              ? newCategory.trim()
              : category
        )
      );

      window.alert("Category updated successfully!");
      return;
    }

    if (tab === "Users") {
      const newName = window.prompt(
        "Edit user name:",
        item
      );

      if (!newName || !newName.trim()) return;

      setUserData((previousUsers) =>
        previousUsers.map((user, userIndex) =>
          userIndex === index
            ? newName.trim()
            : user
        )
      );

      window.alert("User updated successfully!");
      return;
    }

    if (tab === "Orders") {
      const newOrder = window.prompt(
        "Edit order:",
        item
      );

      if (!newOrder || !newOrder.trim()) return;

      setOrderData((previousOrders) =>
        previousOrders.map((order, orderIndex) =>
          orderIndex === index
            ? newOrder.trim()
            : order
        )
      );

      window.alert("Order updated successfully!");
    }
  };

  // ---------------------------------------
  // DELETE
  // ---------------------------------------

  const handleDelete = (index) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete this ${singularName.toLowerCase()}?`
    );

    if (!confirmed) return;

    if (tab === "Books") {
      setBookData((previousBooks) =>
        previousBooks.filter(
          (_, bookIndex) => bookIndex !== index
        )
      );
    }

    if (tab === "Categories") {
      setCategoryData((previousCategories) =>
        previousCategories.filter(
          (_, categoryIndex) =>
            categoryIndex !== index
        )
      );
    }

    if (tab === "Users") {
      setUserData((previousUsers) =>
        previousUsers.filter(
          (_, userIndex) => userIndex !== index
        )
      );
    }

    if (tab === "Orders") {
      setOrderData((previousOrders) =>
        previousOrders.filter(
          (_, orderIndex) => orderIndex !== index
        )
      );
    }

    window.alert(
      `${singularName} deleted successfully!`
    );
  };

  // ---------------------------------------
  // SELECT DATA
  // ---------------------------------------

  let data = [];

  if (tab === "Books") {
    data = bookData;
  }

  if (tab === "Categories") {
    data = categoryData;
  }

  if (tab === "Users") {
    data = userData;
  }

  if (tab === "Orders") {
    data = orderData;
  }

  // ---------------------------------------
  // UI
  // ---------------------------------------

  return (
    <div className="panel full">
      <div className="panel-title">
        <h3>Manage {tab}</h3>

        <button
          className="primary"
          onClick={handleAdd}
        >
          + Add {singularName}
        </button>
      </div>

      {data.length === 0 ? (
        <div className="empty-state">
          <p>No {tab.toLowerCase()} available.</p>
        </div>
      ) : (
        data.map((item, index) => (
          <div
            className="admin-row"
            key={item.id || `${tab}-${index}`}
          >
            {typeof item === "string" ? (
              <b>{item}</b>
            ) : (
              <>
                <img
                  src={item.cover}
                  alt={item.title}
                />

                <b>{item.title}</b>

                <span>{item.author}</span>

                <span>₹{item.price}</span>
              </>
            )}

            <div className="admin-actions">
              <button
                onClick={() =>
                  handleEdit(item, index)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(index)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminContent;