import React from "react";

export default function CartItem({ item }) {
  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
      <h4>{item.name}</h4>
      <p>Qty: {item.quantity}</p>
      <p>₱{item.price}</p>
    </div>
  );
}
