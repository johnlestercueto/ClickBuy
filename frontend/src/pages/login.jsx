import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/auth/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const loginUser = useAuthStore((state) => state.loginUser);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const loggedInUser = await loginUser({ email, password });

      if (!loggedInUser) return;

      // redirect based on role
      if (loggedInUser.role === "admin") {
        navigate("/admin");
      } else if (loggedInUser.role === "user") {
        navigate("/user");
      }
    } catch (err) {
      setMessage(err.message || "Login failed");

      // auto-hide after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-80">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login
        </h2>

        {/* Display error message ABOVE the form */}
        {message && (
          <p className="text-red-500 text-sm text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-200 text-gray-800 font-semibold py-2 rounded hover:bg-green-300 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-300 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
