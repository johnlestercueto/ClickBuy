import { Routes, Route } from "react-router-dom";
import Login from "../page/LoginPage";
import Signup from "../page/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
