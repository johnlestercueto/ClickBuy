import React from "react";
import { Link } from "react-router-dom";

export default function UserSidebar() {
  return (
    <aside style={{ padding: "20px", borderRight: "1px solid #ddd" }}>
      <h3>User Menu</h3>
      <Link to="/profile" style={{ display: "block", margin: "10px 0" }}>
        Profile
      </Link>
      <Link to="/orders" style={{ display: "block", margin: "10px 0" }}>
        My Orders
      </Link>
    </aside>
  );
}
