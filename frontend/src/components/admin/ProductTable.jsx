import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTableContent from "./ProductTableContent";
import ProductForm from "./ProductForm";
import useProductStore from "../../features/product/productStore"; // ✅ import

//ProductTable → kumukuha ng products sa Zustand at ina-handle ang logic (add, edit, delete).
export default function ProductTable() {
  const {
    products,
    fetchProducts,
    addNewProduct,
    updateExistingProduct,
    deleteExistingProduct,
    loading,
    error,
  } = useProductStore();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products by search
  const filteredProducts = products.filter((p) =>
    (p.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteExistingProduct(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      if (editingProduct) {
        // update existing
        await updateExistingProduct(editingProduct._id, data);
      } else {
        // add new
        await addNewProduct(data);
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      console.error("Error submitting product:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar search={search} setSearch={setSearch} onAdd={handleAdd} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ProductTableContent
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <ProductForm
          editingProduct={editingProduct}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
