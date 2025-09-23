import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import Shop from "../pages/user/Shop";
import ProductDetails from "../pages/user/ProductDeatils";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout"; // ayusin ang case dito
import Profile from "../pages/user/Profile";
import Order from "../pages/user/Order";

export default function UserRoutes() {
  return (
    <Routes>
      {/* Home as index route (default when visiting "/") */}
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="order" element={<Order />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
