import React from "react";

const orders = [
  {
    id: 1,
    product: "Nike Shoes",
    date: "2025-09-15",
    status: "Shipped",
    price: 2500,
  },
  {
    id: 2,
    product: "Adidas Hoodie",
    date: "2025-09-18",
    status: "Processing",
    price: 1800,
  },
  {
    id: 3,
    product: "Apple Watch",
    date: "2025-09-20",
    status: "Delivered",
    price: 12000,
  },
];

export default function OrderList() {
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "15px" }}>My Orders</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ background: "red", color: "white" }}>
          <tr>
            <th style={{ padding: "10px" }}>Order ID</th>
            <th style={{ padding: "10px" }}>Product</th>
            <th style={{ padding: "10px" }}>Date</th>
            <th style={{ padding: "10px" }}>Status</th>
            <th style={{ padding: "10px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}
            >
              <td style={{ padding: "10px" }}>{order.id}</td>
              <td style={{ padding: "10px" }}>{order.product}</td>
              <td style={{ padding: "10px" }}>{order.date}</td>
              <td style={{ padding: "10px" }}>{order.status}</td>
              <td style={{ padding: "10px" }}>₱{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
