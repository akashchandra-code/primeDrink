import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useNavigate } from "react-router-dom";
import blueImg from "../assets/productImages/blue.png";
import redImg from "../assets/productImages/red.png";
import green from "../assets/productImages/green.png";
import iceImg from "../assets/productImages/ice.png";
import moonImg from "../assets/productImages/moon.png";
const flavors = [
  {  image: redImg },
  {  image: iceImg },
  {  image: green },
  {  image: blueImg },
  {  image: moonImg },
];

gsap.registerPlugin(ScrollTrigger);

const FlavorsSection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;

    const totalScroll = scroll.scrollWidth - section.offsetWidth;

    gsap.to(scroll, {
      x: () => `-${totalScroll}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scroll.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
   <section
  ref={sectionRef}
  className="w-screen h-screen overflow-hidden relative bg-black"
>
 <div className="relative w-full flex justify-center items-start mt-10">
  <h2 className="text-white text-xl sm:text-5xl font-[neu] text-center z-10 tracking-wide px-4">
    Our Flavours
  </h2>
</div>


  {/* Scrolling Cards */}
  <div
    ref={scrollRef}
    className="flex w-max h-full mt-10   items-center gap-6 px-[4vw]"
  >
    {flavors.map((flavor, index) => (
      <div
        key={index}
        className="w-[20rem] sm:w-[24rem] h-[30rem] sm:h-[36rem] rounded-3xl flex items-end justify-center  p-4 bg-cover bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: `url(${flavor.image})`,
        }}
      >
       
      </div>
    ))}

    {/* View All Products Button */}
    <div className="flex items-center justify-center w-[20rem] sm:w-[24rem] h-[30rem] sm:h-[36rem]">
      <button
        onClick={() => navigate("/products")}
        className="bg-white text-black text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-zinc-200 transition duration-300"
      >
        View All Products
      </button>
    </div>
  </div>
</section>

  );
};

export default FlavorsSection;
