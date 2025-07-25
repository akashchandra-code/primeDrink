import React, { useState } from "react";
import Hero from "../components/Hero";
import FlavorsSection from "../components/Flavour";
import AboutUs from "../components/AboutUs";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


const Home = () => {

  return (
    <div className="relative">
      <Hero />
      <FlavorsSection />
      <AboutUs />
         <ContactUs />
         <Footer/>
    </div>
  );
};

export default Home;
