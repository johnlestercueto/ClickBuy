import React from "react";
import UserLayout from "../../layouts/UserLayout";
import CartItem from "../../components/user/CartItem";
import BackButton from "../../components/user/BackButton";

const cartItems = [
  { id: 1, name: "Nike Shoes", quantity: 1, price: 2500 },
  { id: 2, name: "Puma Cap", quantity: 2, price: 1000 },
];

export default function Cart() {
  return (
    <UserLayout>
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
        <h2 style={{ textAlign: "center", margin: 0 }}>My Cart</h2>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </UserLayout>
  );
}
