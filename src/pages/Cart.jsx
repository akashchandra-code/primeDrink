
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"; 
import { toast } from "react-toastify";
const Cart = () => {
  const { cartItems, removeFromCart,clearCart } = useCart();

  const handleSubmit = ()=>{
    toast.success("Order placed successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
    clearCart(); 
  }
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen mt-20 p-4 sm:p-8 ">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-[#00b2ff] drop-shadow-sm">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <p className="text-gray-600 text-xl mb-6">Your cart is empty.</p>
          <Link
            to="/products" // Link to your products page
            className="bg-[#00b2ff]  px-6 py-3 rounded-lg hover:bg-[#0094da] focus:outline-none focus:ring-2 focus:ring-[#00b2ff] focus:ring-opacity-50 transition-all duration-200 text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div
                key={item.id} 
                className=" border border-gray-100 rounded-xl shadow-md p-4 flex flex-col sm:flex-row justify-between items-center transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                  
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-md mr-4"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold ">{item.name}</h3>
                    <p className="text-gray-100 text-sm line-clamp-1">{item.description}</p>
                    <p className="text-gray-200 mt-1 text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-600 hover:text-red-800 font-medium py-2 px-4 rounded-md transition duration-200 border border-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className=" border border-zinc-100 rounded-xl shadow-md p-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-100">Total:</span>
              <span className="text-3xl font-bold text-[#00b2ff]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
            onClick={handleSubmit}
              className="w-full bg-[#00b2ff] text-white px-6 py-3 rounded-lg hover:bg-[#0094da] focus:outline-none focus:ring-2 focus:ring-[#00b2ff] focus:ring-opacity-50 transition-all duration-200 text-lg font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;