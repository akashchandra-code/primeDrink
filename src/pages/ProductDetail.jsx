import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/product";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen mt-20 flex flex-col items-center justify-center p-4 bg-[#0f172a]">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Product Not Found!</h1>
        <p className="text-lg text-gray-300 mb-8">
          The product you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-[#00b2ff] text-white px-6 py-3 rounded-lg hover:bg-[#0094da] transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen mt-10 py-12 px-4 sm:px-8  text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden ">
        {/* Image Section */}
        <div className="p-6 flex items-center justify-center ">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold  mb-2">
              {product.name}
            </h1>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-1">
              Category: <span className="text-gray-300">{product.category}</span>
            </p>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
              Flavor: <span className="text-gray-300">{product.flavor}</span>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold ">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-[#00b2ff] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-[#0094da] transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-800 text-gray-200 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
