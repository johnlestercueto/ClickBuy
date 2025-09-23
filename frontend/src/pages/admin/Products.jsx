import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import ProductTable from "../../components/admin/ProductTable";

const products = [
  { id: 1, name: "Nike Shoes", price: 2500, stock: 10 },
  { id: 2, name: "Adidas Hoodie", price: 1500, stock: 5 },
  { id: 3, name: "Puma Cap", price: 500, stock: 20 },
];

export default function Products() {
  return (
    <AdminLayout>
      <h2>Manage Products</h2>
      <ProductTable products={products} />
    </AdminLayout>
  );
}
