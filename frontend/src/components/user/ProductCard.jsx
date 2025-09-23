import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/user/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid #ddd",
          padding: "15px",
          margin: "10px",
          width: "200px",
          background: "#f9f9f9",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
        <p style={{ color: "#555" }}>₱{product.price}</p>
      </div>
    </Link>
  );
}
