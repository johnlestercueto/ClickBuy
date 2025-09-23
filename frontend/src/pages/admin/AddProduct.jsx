import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddProduct() {
  return (
    <AdminLayout>
      <h2>Add New Product</h2>
      <form>
        <input
          type="text"
          placeholder="Product Name"
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="number"
          placeholder="Price"
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="number"
          placeholder="Stock"
          style={{ display: "block", margin: "10px 0" }}
        />
        <button
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Save
        </button>
      </form>
    </AdminLayout>
  );
}
