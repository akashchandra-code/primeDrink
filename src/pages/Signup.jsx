import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/products");
    toast.success("Signup successful!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-16 py-12 bg-black">
      <div className="flex flex-col md:border-2 border-[#00b2ff] rounded-xl py-6 md:flex-row w-full max-w-6xl gap-12 shadow-xl ">
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center text-center px-6 py-10">
          <div>
            <FaBolt className="text-[#00b2ff] text-6xl mb-6 mx-auto" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
              Fuel Your Day with Prime 💧
            </h2>
            <p className="text-zinc-400 max-w-md text-sm md:text-base">
              Bold flavor. Zero sugar. Maximum hydration. Prime isn’t just a
              drink — it’s a lifestyle. Refresh your energy and stay at your
              peak.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 rounded-lg w-full max-w-md mx-auto border border-zinc-500 bg-[#0f0f0f]">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-[#00b2ff] bg-black text-white placeholder:text-zinc-500"
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-[#00b2ff] bg-black text-white placeholder:text-zinc-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-[#00b2ff] bg-black text-white placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="w-full bg-[#00b2ff] hover:bg-[#0090cc] text-white font-semibold py-3 rounded transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-zinc-400 mt-4">
              Already have an account?{" "}
              <span
                className="text-[#00b2ff] hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
