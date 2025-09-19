import { useState } from "react";
import { useAuthStore } from "../features/auth/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const { loginUser, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(form);
    navigate("/");
  };

  return (
    <div
      //inline css
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
