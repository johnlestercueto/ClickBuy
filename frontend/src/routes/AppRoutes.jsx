import { Route, Routes } from "react-router-dom";
import { authRoutes } from "../features/auth/authRoute";
import { homeRoutes } from "../features/home/homeRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {authRoutes}
      {homeRoutes}
    </Routes>
  );
};

export default AppRoutes;
