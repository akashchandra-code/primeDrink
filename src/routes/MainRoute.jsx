import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading"; 

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const Cart = lazy(() => import("../pages/Cart"));
const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
