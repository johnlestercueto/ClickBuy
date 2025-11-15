import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import SignUpPage from "../pages/signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AuthRoutes;
