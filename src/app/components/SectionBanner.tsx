"use client";

import { memo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // ✅ Import your Navbar here

const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

const MemoizedParticles = memo(() => (
  <Particles
    id="section-particles"
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
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          outModes: { default: "bounce" },
        },
        number: {
          value: 100,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }}
    className="absolute inset-0 z-0"
  />
));
MemoizedParticles.displayName = "MemoizedParticles";

interface Props {
  title: string;
  backgroundImage: string;
}

export default function SectionBanner({ title, backgroundImage }: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Section with particles and title */}
      <div className="relative h-[300px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-2] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

        {/* Particles */}
        <MemoizedParticles />

        {/* Title */}
       <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
  <motion.h1
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-5xl font-dosis tracking-widest font-light uppercase select-none"
  >
    {title}
  </motion.h1>
</div>

      </div>
    </div>
  );
}
