import React from "react";

// ProductTableContent → display lang ng table, walang alam sa Zustand.
export default function ProductTableContent({ products, onEdit, onDelete }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", borderCollapse: "collapse" }}
    >
      <thead style={{ background: "#333", color: "white" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price (₱)</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((p) => (
            <tr key={p._id}>
              <td>{p._id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              <td>
                {p.image ? (
                  <span style={{ fontSize: "12px" }}>
                    {p.image.split("/").pop()} {/* filename lang */}
                  </span>
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                <button
                  onClick={() => onEdit(p)}
                  style={{
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(p._id)}
                  style={{
                    background: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
              No products found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
