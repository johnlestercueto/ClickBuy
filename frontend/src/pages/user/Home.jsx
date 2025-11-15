// Home.jsx
import React, { useEffect } from "react";
import UserLayout from "../../layouts/UserLayout";
import ProductCard from "../../components/user/ProductCard";
import useProductStore from "../../features/product/productStore";

export default function Home() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <UserLayout>
      {/* LOADING */}
      {loading && <p className="text-center mt-3">Loading products...</p>}

      {/* ERROR */}
      {error && <p className="text-red-500 text-center mt-3">{error}</p>}

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-3">
        {products.length === 0 && !loading && (
          <p className="col-span-full text-center">No products available.</p>
        )}

        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </UserLayout>
  );
}
