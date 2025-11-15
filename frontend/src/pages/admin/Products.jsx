import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import ProductTable from "../../components/admin/ProductTable";

export default function Products() {
  return (
    <AdminLayout>
      <h2>Manage Products</h2>
      <ProductTable /> {/* ✅ wala nang props */}
    </AdminLayout>
  );
}
