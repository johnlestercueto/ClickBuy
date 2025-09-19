import { useState } from "react";
import { useAuthStore } from "../features/auth/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { registerUser, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            placeholder="userName"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {error && (
          <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {error}
          </p>
        )}
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "red",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
