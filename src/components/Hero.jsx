import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../assets/videos/hero-video.mp4";

const Hero = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -40,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 40,
      delay: 0.4,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="relative font-[sans-serif] w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-[helvetica] text-white drop-shadow-md"
        >
          Prime Picks for Real People
        </h1>
        <p
          ref={textRef}
          className="text-lg md:text-xl text-zinc-200 mt-4 max-w-xl drop-shadow-sm"
        >
          From daily essentials to lifestyle upgrades — we bring you products
          that make adulting easier.
        </p>
      </div>
    </div>
  );
};

export default Hero;
