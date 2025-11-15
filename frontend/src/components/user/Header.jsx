import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Function para sa Product button
  const goToProducts = () => {
    navigate("/user"); // dito tayo nag-redirect sa /user
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <h2 className="text-xl font-semibold text-gray-800">E-Shop</h2>

      {/* Search (hidden on small screen) */}
      <div className="flex-1 text-center hidden md:block">
        <input
          type="text"
          placeholder="Search product..."
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        <button
          onClick={goToProducts}
          className="text-gray-700 hover:text-black"
        >
          Products
        </button>
        <Link className="text-gray-700 hover:text-black" to="/user/cart">
          Cart
        </Link>
        <Link className="text-gray-700 hover:text-black" to="/user/order">
          Order
        </Link>
        <Link className="text-gray-700 hover:text-black" to="/user/profile">
          Profile
        </Link>
      </nav>

      {/* Burger / X button for mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden border border-gray-300 px-3 py-1 rounded text-lg"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 right-5 bg-white border border-gray-200 shadow-lg rounded-lg w-40 py-2 flex flex-col md:hidden">
          <button
            onClick={() => {
              goToProducts();
              setOpen(false); // para magsara yung menu pagkatapos pindutin
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
          >
            Products
          </button>
          <Link
            to="/user/cart"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/user/order"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Order
          </Link>
          <Link
            to="/user/profile"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}
