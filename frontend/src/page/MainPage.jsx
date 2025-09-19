import { useAuthStore } from "../features/auth/authStore";

export default function MainPage() {
  const { user, logout } = useAuthStore();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username || "Guest"}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
