"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "After a power issue, ESF PROS responded quickly and safely rewired our commercial unit. Their expertise is unmatched.",
    author: "John, Customer",
  },
  {
    quote:
      "ESF PROS INC. upgraded our home with a complete smart system—CCTV, lighting, and alarms. Professional and very efficient!",
    author: "Michael, Customer",
  },
  {
    quote: "They installed a great home automation system. Highly recommended!",
    author: "Sarah, Customer",
  },
  {
    quote: "Very responsive team and affordable services!",
    author: "David, Customer",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bgImage = "/testimonials-bg.png"; // Make sure this exists in your /public folder

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20 lg:py-40 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center mb-12">
        <h2 className="font-dosis text-white tracking-widest text-3xl md:text-4xl uppercase">
          CUSTOMER SAYS
        </h2>
        <div className="relative flex items-center justify-center mt-4 mb-1">
          <div className="w-1 h-1 bg-[#0ab0ff] z-10" />
          <div className="absolute inset-0 flex items-center justify-between gap-2 w-full max-w-[200px] mx-auto">
            <span className="h-px bg-white w-[45%] opacity-60" />
            <span className="h-px bg-white w-[45%] opacity-60" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 transition-all duration-500">
        {visibleTestimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/70 text-white p-8 relative transition-all duration-500 shadow-lg flex flex-col gap-4"
          >
            <div className="absolute -left-4 top-4 bg-[#0ab0ff] w-10 h-10 flex items-center justify-center">
              <FaQuoteLeft className="text-black text-lg" />
            </div>
            <p className="text-sm md:text-base">{item.quote}</p>
            <p className="text-[#0ab0ff] text-sm mt-2">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
