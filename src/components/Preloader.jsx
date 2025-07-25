import React, { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onFinish();
      },
    });

    tl.to(".preloader-logo", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    }).to(".preloader", {
      y: "-100%",
      duration: 1.2,
      delay: 0.5,
      ease: "power2.inOut",
    });
  }, [onFinish]);

  return (
    <div className="preloader fixed inset-0 z-[9999] bg-[#0c0c0c] flex items-center justify-center">
      <img
        src={logo}
        alt="Prime Logo"
        className="preloader-logo opacity-0 scale-50 w-40 md:w-52 transition-transform duration-1000"
      />
    </div>
  );
};

export default Preloader;
