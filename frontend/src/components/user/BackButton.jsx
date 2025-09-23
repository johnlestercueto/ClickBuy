import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: "#f5f5f5",
        color: "#333",
        border: "1px solid #ddd",
        padding: "8px 12px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "18px",
        lineHeight: "1",
      }}
    >
      ←
    </button>
  );
}
