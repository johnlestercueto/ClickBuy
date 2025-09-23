import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/DashboardCard";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";
import Orders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";
import Reports from "../pages/admin/Reports";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Dashboard as default when visiting /admin */}
      <Route index element={<Dashboard />} />

      <Route path="products" element={<Products />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="orders" element={<Orders />} />
      <Route path="users" element={<Users />} />
      <Route path="reports" element={<Reports />} />
    </Routes>
  );
}
