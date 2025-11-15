import React from "react";
import useProductStore from "../../features/product/productStore"; // adjust path kung iba

export default function ProductForm({ editingProduct, onClose }) {
  const { addNewProduct, updateExistingProduct, fetchProducts } =
    useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      if (editingProduct) {
        await updateExistingProduct(editingProduct._id, formData); // update
      } else {
        await addNewProduct(formData); // add
      }

      // Refresh products from backend
      await fetchProducts();

      onClose(); // close modal after save
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
        }}
        encType="multipart/form-data"
      >
        <h3 style={{ marginTop: 0 }}>
          {editingProduct ? "Edit Product" : "Add Product"}
        </h3>

        {/* Product Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          defaultValue={editingProduct?.name || ""}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={editingProduct?.price || ""}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          defaultValue={editingProduct?.description || ""}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            resize: "none",
          }}
          rows="3"
        />

        {/* Image Upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
        />

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "#aaa",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              background: "#333",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
