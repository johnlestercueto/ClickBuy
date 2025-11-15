import React from "react";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: "#fff",
  color: "#333",
};

export default function UserLayout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
