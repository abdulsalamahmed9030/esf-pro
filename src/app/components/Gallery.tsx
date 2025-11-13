"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = [
  "ALL PROJECTS",
  "RESIDENTIAL",
  "HOSPITALY",
  "OFFICE",
  "COMMERCIAL",
];

const images = [
  { src: "/1.png", title: "CCTV Surveillance", category: "RESIDENTIAL" },
  {
    src: "/2.png",
    title: "Professional Camera Installation",
    category: "RESIDENTIAL",
  },
  {
    src: "/3.png",
    title: "Commercial Electrical Panel Setup",
    category: "HOSPITALY",
  },
  { src: "/4.png", title: "Precision Circuit Testing", category: "OFFICE" },
  {
    src: "/5.png",
    title: "Fire Alarm Activation System",
    category: "COMMERCIAL",
  },
  { src: "/6.png", title: "Emergency Strobe Lighting", category: "OFFICE" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [isMobile, setIsMobile] = useState(false);

  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle ESC key to close fullscreen image
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const filteredImages =
    activeCategory === "ALL PROJECTS"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const displayedImages = isMobile
    ? filteredImages.slice(0, 2)
    : filteredImages;

  return (
    <section className="w-screen overflow-hidden bg-[#1f1f1f] text-white">
      {/* Fullscreen Viewer */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <Image
            src={selected}
            alt="Full Image"
            className="max-w-[90%] max-h-[90%] object-contain"
            width={1200}
            height={800}
          />
          {isMobile && (
            <p className="mt-4 text-[#0ab0ff] text-xs tracking-widest uppercase text-center">
              {images.find((img) => img.src === selected)?.title || "Untitled"}
            </p>
          )}
        </div>
      )}

      {/* Filter Buttons */}
      <div className="font-dosis flex justify-start sm:justify-center gap-4 sm:gap-6 py-6 bg-[#1d1c1c] text-sm tracking-widest font-light overflow-x-auto px-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            ref={(el) => {
              categoryRefs.current[category] = el;
            }}
            onClick={() => {
              setActiveCategory(category);
              categoryRefs.current[category]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }}
            className={`px-4 py-2 uppercase whitespace-nowrap transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#0ab0ff] text-black font-medium"
                : "text-white hover:text-[#0ab0ff]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {/* Image Grid */}
      <div className="font-dosis grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-4 pb-10">
        {displayedImages.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item.src)}
            className="relative aspect-[4/2] cursor-pointer overflow-hidden group"
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={`Gallery ${idx}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm select-none"
              />
              {/* Blackish Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 pointer-events-none" />
            </div>

            {/* Title */}
            <p className="absolute inset-0 flex items-center justify-center text-yellow-400 text-sm tracking-widest font-medium uppercase opacity-0 group-hover:opacity-100 transition duration-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
