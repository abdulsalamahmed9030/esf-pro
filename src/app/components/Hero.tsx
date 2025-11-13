"use client";

import { useEffect, useState, memo } from "react";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Move particlesInit outside component
const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

// Memoized Particles to prevent re-rendering
const MemoizedParticles = memo(() => (
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.3,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          value: 180,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 0.5, max: 2 } },
      },
      detectRetina: true,
    }}
    className="absolute inset-0 z-0"
  />
));
MemoizedParticles.displayName = "MemoizedParticles";

export default function Hero() {
  const headlines = [
    "SECURITY SYSTEMS",
    "ELECTRICAL SERVICES",
    "FIRE PROTECTION",
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Particles */}
      <MemoizedParticles />

      {/* Background Image */}
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-44.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-40 z-[-1]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={headlines[headlineIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-dosis text-[40px] md:text-[72px] font-extralight md:font-light tracking-widest mb-4 transition-all duration-500 select-none"
          >
            {headlines[headlineIndex]}
          </motion.h1>
        </AnimatePresence>
<div className="flex flex-col sm:flex-row gap-4">
  <div className="min-w-[48px] min-h-[48px] flex items-center justify-center">
    <Link href="/contact" passHref>
      <button className="font-dosis text-sm tracking-widest px-6 py-2 border border-white hover:border-[#0ab0ff] hover:text-[#0ab0ff] transition-all select-none">
        CONTACT US
      </button>
    </Link>
  </div>

  <div className="min-w-[48px] min-h-[48px] flex items-center justify-center">
    <Link href="/contact" passHref>
      <button className="font-dosis text-sm tracking-widest px-6 py-2 border border-white hover:border-[#0ab0ff] hover:text-[#0ab0ff] transition-all select-none">
        REQUEST A CALL
      </button>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}
