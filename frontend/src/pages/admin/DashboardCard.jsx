import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DashboardCard from "../../components/admin/AdminDashboardCard";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h2>Dashboard</h2>
      <div style={{ display: "flex" }}>
        <DashboardCard title="Total Sales" value="₱150,000" />
        <DashboardCard title="Orders" value="320" />
        <DashboardCard title="Users" value="120" />
      </div>
    </AdminLayout>
  );
}
