import React from "react";
import UserLayout from "../../layouts/UserLayout";
import ProductCard from "../../components/user/ProductCard";

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 2500,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Adidas Hoodie",
    price: 1500,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Puma Cap",
    price: 500,
    image: "https://via.placeholder.com/200",
  },
];

export default function Home() {
  return (
    <UserLayout>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </UserLayout>
  );
}
