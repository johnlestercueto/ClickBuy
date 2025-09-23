import React from "react";

export default function AdminHeader() {
  return (
    <header
      style={{
        background: "#1E3A8A", // dark blue (soft sa mata)
        padding: "12px 24px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Left: Title */}
      <h2 style={{ margin: 0 }}>Admin Panel</h2>

      {/* Right: Logout Button */}
      <button
        style={{
          background: "white",
          color: "#1E3A8A",
          border: "none",
          padding: "6px 14px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Logout
      </button>
    </header>
  );
}
