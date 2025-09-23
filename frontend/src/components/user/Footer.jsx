import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f5f5", // light gray background
        color: "#555", // dark gray text
        textAlign: "center",
        padding: "15px",
        borderTop: "1px solid #ddd", // subtle separator
        marginTop: "30px",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © 2025 <strong>E-Shop</strong>. All rights reserved.
      </p>
    </footer>
  );
}
