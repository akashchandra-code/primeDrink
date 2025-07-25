import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef();
  const formRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

   

    toast.success("Thanks for reaching out! We'll get back to you soon.", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });

    
    e.target.reset();
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-20 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4"
        >
          Contact Us
        </h2>
        <p className="text-zinc-400 text-lg">
          We'd love to hear from you. Fill out the form and we’ll get back to
          you soon.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="bg-zinc-800 p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="bg-zinc-800 p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          required
          className="bg-zinc-800 p-4 w-full rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          required
          className="bg-zinc-800 p-4 w-full rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full text-white font-semibold transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
