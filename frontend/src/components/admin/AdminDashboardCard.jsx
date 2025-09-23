import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
        padding: "20px",
        margin: "10px",
        boxShadow: "0px 0px 5px #ccc",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
