import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png"; 
const Navbar = ({ isSignedIn }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } bg-transparent text-white px-[4vw] py-5 backdrop-blur`}
    >
      <div className="flex justify-between font-sans items-center">
        {/* Logo  */}
        <Link
          to="/"
          className=""
        >
           <img src={logo} alt="PRIME Logo" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-zinc-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-zinc-300">
            Products
          </Link>
          <Link to="/cart" className="hover:text-zinc-300">
            Cart
          </Link>
          {isSignedIn ? (
            <Link to="/profile" className="text-xl hover:text-zinc-300">
              <FaUserCircle />
            </Link>
          ) : (
            <Link to="/signup" className="hover:text-zinc-300">
              Signin
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white">
            <FaBars size="1.4rem" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-zinc-900 text-white transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-[4vw] py-5 border-b border-white/10">
          <span className="font-[normal] text-2xl">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white">
            <FaTimes size="1.4rem" />
          </button>
        </div>
        <div className="flex flex-col gap-6 pl-[4vw] pt-[4vh] text-lg">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-300">
            Home
          </Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-300">
            Products
          </Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-300">
            Cart
          </Link>
          {isSignedIn ? (
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-300">
              <FaUserCircle className="inline-block mr-2" />
              Profile
            </Link>
          ) : (
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-300">
              Signin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
