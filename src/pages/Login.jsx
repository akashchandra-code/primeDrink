import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    setFormData({
      email: "",
      password: "",
    });
    navigate("/products");
    toast.success("Login successful!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row border border-[#1e293b] rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden ">

        {/* Left Side */}
        <div className="hidden md:flex w-1/2  text-white flex-col justify-center items-center p-10 border-r border-[#334155]">
          <FaBolt className="text-[#38bdf8] text-6xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Welcome Back to Prime 💧</h2>
          <p className="text-center text-gray-400 text-sm max-w-sm">
            Bold flavor. Zero sugar. Maximum hydration. Prime isn’t just a drink — 
            it’s a lifestyle. Stay refreshed and energized every day.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2  p-8">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#334155] rounded-md bg-[#1b1b1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#334155] rounded-md bg-[#1b1b1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-semibold rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#38bdf8] cursor-pointer hover:underline"
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
