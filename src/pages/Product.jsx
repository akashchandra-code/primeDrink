import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productsData from "../data/product";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    setProducts(productsData);
  }, [location.pathname]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen mt-15  pt-16 pb-20 px-4 sm:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 drop-shadow text-[#00b2ff]">
        Explore Our Prime Products
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-5 py-3 rounded-xl border bg-[#1b1b1b] border-zinc-100  text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b2ff] shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1b1b1b] border border-[#334155] hover:border-[#00b2ff] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 flex flex-col"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-4 transition-transform group-hover:scale-105"
                />
              </Link>
              <h2 className="text-2xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-400 mb-3 text-sm">{product.description}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-xl font-bold text-[#00b2ff]">
                  ₹{product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#00b2ff] hover:bg-[#0284c7] text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
