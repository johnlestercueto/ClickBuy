import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <Routes>
      {/* Auth routes - public */}
      <Route path="/*" element={<AuthRoutes />} />
      {/* User side */}
      <Route path="/user/*" element={<UserRoutes />} />

      {/* Admin side */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
