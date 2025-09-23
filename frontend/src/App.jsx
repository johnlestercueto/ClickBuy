import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <Routes>
      {/* User side */}
      <Route path="/user/*" element={<UserRoutes />} />

      {/* Admin side */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
