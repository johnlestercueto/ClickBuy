import { Navigate } from "react-router-dom";
import useAuthStore from "../features/auth/authStore";

export default function PrivateRoute({ children, role }) {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Navigate to="/" />; // Not logged in
  if (role && user.role !== role) return <Navigate to="/" />; // Wrong role

  return children;
}
