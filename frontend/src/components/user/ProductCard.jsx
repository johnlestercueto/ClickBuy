import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/user/product/${product._id}`}
      className="no-underline text-inherit"
    >
      <div className="rounded-lg border border-gray-300 p-4 h-80 bg-gray-100 cursor-pointer hover:shadow-lg transition duration-300 flex flex-col justify-between">
        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="mt-2 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 font-medium mt-2">₱{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
