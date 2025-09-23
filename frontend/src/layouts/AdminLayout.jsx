import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
  background: "#f9f9f9",
};

export default function AdminLayout({ children }) {
  return (
    <div style={layoutStyle}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminHeader />
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}
