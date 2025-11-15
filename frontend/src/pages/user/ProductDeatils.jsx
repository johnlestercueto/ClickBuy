// src/pages/user/ProductDetails.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import BackButton from "../../components/user/BackButton";
import useProductStore from "../../features/product/productStore";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const product = products.find((p) => p._id === id);

  if (loading) return <h2 className="p-6">Loading product...</h2>;
  if (error) return <h2 className="p-6 text-red-500">Error: {error}</h2>;
  if (!product) return <h2 className="p-6">Product not found</h2>;

  const backendUrl = "http://localhost:5000"; // palitan kung iba ang port

  return (
    <UserLayout>
      <div className="p-6">
        <BackButton />

        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-md">
          {/* Left: Image */}
          <div className="md:flex-1">
            <img
              src={`${backendUrl}/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/250?text=No+Image";
              }}
            />
          </div>

          {/* Right: Details */}
          <div className="md:flex-2 flex flex-col">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xl text-gray-700 mt-2">₱{product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-auto flex gap-4">
              <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                Add to Cart
              </button>
              <button className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
