import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ksi from "../assets/owners/ksi.jpg";
import logan from "../assets/owners/logan.jpg";
import about from "../assets/productImages/about.png";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const creatorsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    
      gsap.from(creatorsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: creatorsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen px-6 md:px-20 py-24 "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div ref={imgRef} className=".img w-full md:w-1/2">
          <img
            src={about}
            alt="Prime Drink"
            className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300 rounded-3xl shadow-2xl"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight ">
            About <span className="text-[#00b2ff]">Prime</span>
          </h2>
          <p className="text-lg  leading-relaxed">
            Prime was created to redefine hydration and energy. With bold
            flavors, essential electrolytes, and a vision to fuel greatness —
            Prime isn't just a drink, it's a movement.
          </p>
          <p className="text-md ">
            Whether you're in the gym, grinding your goals, or chasing your
            dreams — Prime is designed to keep you performing at your peak.
          </p>
        </div>
      </div>

      {/* Creators Section */}
      <div
        ref={creatorsRef}
        className="mt-24 max-w-6xl mx-auto text-center space-y-14"
      >
        <h3 className="text-3xl md:text-4xl font-bold ">
          Meet the Creators
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
          {/* Logan Paul */}
          <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
            <img
              src={logan}
              alt="Logan Paul"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
            <h4 className="text-xl font-semibold">Logan Paul</h4>
            <p className="text-sm  max-w-xs">
              American YouTuber, boxer, and entrepreneur. Logan brings energy
              and vision to the Prime brand.
            </p>
          </div>

          {/* KSI */}
          <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
            <img
              src={ksi}
              alt="KSI"
              className="w-40 h-40 rounded-full object-cover border-4 border-red-500 shadow-md"
            />
            <h4 className="text-xl font-semibold">KSI</h4>
            <p className="text-sm  max-w-xs">
              UK-based entertainer, rapper, and boxer. KSI adds authenticity and
              passion to Prime’s purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
