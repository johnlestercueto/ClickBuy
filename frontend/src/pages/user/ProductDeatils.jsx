import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import BackButton from "../../components/user/BackButton";

// static products data muna
const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 2500,
    image: "https://via.placeholder.com/250",
    description: "Comfortable running shoes for everyday use.",
  },
  {
    id: 2,
    name: "Adidas Hoodie",
    price: 1800,
    image: "https://via.placeholder.com/250",
    description: "Warm and stylish hoodie for casual wear.",
  },
  {
    id: 3,
    name: "Apple Watch",
    price: 12000,
    image: "https://via.placeholder.com/250",
    description: "Smartwatch with fitness tracking and notifications.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  return (
    <UserLayout>
      <div style={{ padding: "20px" }}>
        <BackButton />

        {/* Product Layout */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          {/* Left: Image */}
          <div style={{ flex: 1 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          {/* Right: Details */}
          <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <h2>{product.name}</h2>
            <p style={{ fontSize: "18px", color: "#555" }}>₱{product.price}</p>
            <p style={{ marginTop: "10px" }}>{product.description}</p>

            {/* Buttons */}
            <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
              <button
                style={{
                  background: "#333",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
              <button
                style={{
                  background: "gray",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
