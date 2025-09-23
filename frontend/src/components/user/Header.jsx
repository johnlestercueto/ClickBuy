import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "white",
        padding: "10px 20px",
        color: "#333",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Store Name */}
      <h2 style={{ margin: 0, fontWeight: "bold", color: "red" }}>E-Shop</h2>

      {/* Search Bar */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search product..."
          style={{
            width: "60%",
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Icons */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/user/cart"
          style={{ margin: "0 10px", fontSize: "20px", textDecoration: "none" }}
        >
          🛒
        </Link>
        <Link
          to="/user/order"
          style={{ margin: "0 10px", fontSize: "20px", textDecoration: "none" }}
        >
          📦
        </Link>
        <Link
          to="/user/profile"
          style={{ margin: "0 10px", fontSize: "20px", textDecoration: "none" }}
        >
          👤
        </Link>
      </nav>
    </header>
  );
}
