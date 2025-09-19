import { Route } from "react-router-dom";
import Login from "../../page/LoginPage";
import Signup from "../../page/RegisterPage";

export const authRoutes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </>
);
