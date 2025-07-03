"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  { label: "MEET & AGREE" },
  { label: "IDEA & CONCEPT" },
  { label: "DESIGN & CREATE" },
  { label: "BUILD & INSTALL" },
];

export default function OurProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#1d1f24] text-white py-20">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="/bg-process.jpg" // replace with actual background image path
          alt="Our Process Background"
          fill
          className="object-cover object-center opacity-40"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 text-center relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-dosis text-3xl md:text-4xl tracking-widest font-light">
            OUR PROCESS
          </h2>
          <div className="relative flex items-center justify-center mt-4 mb-1">
            <div className="w-1 h-1 bg-yellow-400 z-10" />
            <div className="absolute inset-0 flex items-center justify-between gap-2 w-full max-w-[200px] mx-auto">
              <span className="h-px bg-white w-[45%] opacity-60" />
              <span className="h-px bg-white w-[45%] opacity-60" />
            </div>
          </div>
        </div>

        
        <div className="flex flex-wrap justify-center gap-8 md:gap-28">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className="relative group focus:outline-none"
              >
                <div
  className={`w-44 h-44 rounded-full flex items-center justify-center transition-all duration-300
  ${isActive ? "bg-transparent border border-white" : "bg-yellow-500 hover:bg-yellow-600"}`}
>

                  <span
                    className={`text-sm font-semibold tracking-widest px-4 text-center
                    ${isActive ? "text-white" : "text-black"}`}
                  >
                    {step.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
