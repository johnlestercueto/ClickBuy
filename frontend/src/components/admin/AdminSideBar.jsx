import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const links = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/products", label: "Products" },
    { path: "/admin/orders", label: "Orders" },
    { path: "/admin/users", label: "Users" },
    { path: "/admin/reports", label: "Reports" },
  ];

  return (
    <aside
      style={{
        width: "220px",
        background: "#2c3e50",
        color: "white",
        minHeight: "100vh",
        padding: "20px 15px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Admin</h2>
      <nav>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: "block",
              padding: "12px 15px",
              marginBottom: "10px",
              borderRadius: "8px",
              textDecoration: "none",
              color: location.pathname === link.path ? "#2c3e50" : "white",
              background:
                location.pathname === link.path ? "white" : "transparent",
              fontWeight: location.pathname === link.path ? "bold" : "normal",
              transition: "0.3s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
