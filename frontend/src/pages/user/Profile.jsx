import React from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import BackButton from "../../components/user/BackButton";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // dito pwede ka mag-clear ng token/session kung meron
    navigate("/login"); // redirect to login page
  };

  return (
    <UserLayout>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        {/* Back button sa kaliwa */}
        <div style={{ position: "absolute", left: 0 }}>
          <BackButton />
        </div>

        {/* Title */}
        <h2 style={{ margin: 0 }}>My Profile</h2>

        {/* Logout button sa kanan */}
        <div style={{ position: "absolute", right: 0 }}>
          <button
            onClick={handleLogout}
            style={{
              background: "#333",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Profile details */}
      <div style={{ padding: "10px" }}>
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Email:</strong> johndoe@example.com
        </p>
        <p>
          <strong>Member Since:</strong> January 2024
        </p>
      </div>
    </UserLayout>
  );
}
