import React from "react";
import OrderList from "../../components/user/OrderList";
import UserLayout from "../../layouts/UserLayout";
import BackButton from "../../components/user/BackButton";

export default function Orders() {
  return (
    <UserLayout>
      {/* Header section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        {/* Back button sa kaliwa */}
        <div style={{ position: "absolute", left: 0 }}>
          <BackButton />
        </div>

        {/* Title nasa gitna */}
        <h2 style={{ textAlign: "center", margin: 0 }}>My Orders</h2>
      </div>

      {/* Orders list */}
      <OrderList />
    </UserLayout>
  );
}
