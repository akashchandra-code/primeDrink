import React, { useState } from "react";
import Nav from "./components/Navbar.jsx";
import MainRoutes from "./routes/MainRoute.jsx";
import { ToastContainer } from "react-toastify";
import Preloader from "./components/Preloader.jsx";
import useLenis from "./hooks/useLenis.js"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setLoading(false);
  };

  
  useLenis(!loading);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-[#f5f5f5]">
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <>
          <Nav />
          <MainRoutes />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default App;
