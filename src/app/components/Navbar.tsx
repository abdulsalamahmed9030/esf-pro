"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black bg-opacity-80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-72 py-4 text-white uppercase text-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative h-28 w-28">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu - Hide below 700px */}
          <ul className="max-[700px]:hidden flex gap-6 items-center tracking-widest relative">
  {[
    { name: "Home" },
    {
      name: "Services",
      dropdown: ["Residential", "Commercial"], // <- dropdown content
    },
    { name: "About" },
    { name: "Careers" },
    { name: "Blogs" },
    { name: "Contact Us" },
  ].map((item, i, arr) => (
    <li key={i} className="group relative flex items-center gap-2">
      <span className="hover:text-yellow-400 cursor-pointer">
        {item.name}
      </span>

      {/* Dropdown */}
      {item.dropdown && (
        <div className="absolute top-full left-0 bg-[#1e1e1e] mt-2 w-48 flex flex-col border border-gray-700 shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
          {item.dropdown.map((subItem, idx) => (
            <a
              key={idx}
              href="#"
              className="px-4 py-2 text-white text-xs tracking-widest uppercase hover:bg-yellow-400 hover:text-black border-b border-gray-700 last:border-b-0"
            >
              {subItem}
            </a>
          ))}
        </div>
      )}

      {/* Dot Separator */}
      {i < arr.length - 1 && (
        <span className="w-1 h-1 bg-yellow-400 rounded-full inline-block" />
      )}
    </li>
  ))}
</ul>


          {/* Hamburger Icon - Show only below 700px */}
          <button
            className="hidden max-[700px]:block z-[60] text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </nav>
      </header>

      {/* Mobile Menu (outside nav) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl tracking-widest transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } max-[700px]:flex max-[700px]:flex-col max-[700px]:justify-center max-[700px]:items-center max-[700px]:text-xl hidden`}
      >
        {["Home", "Services", "About", "Careers", "Blogs", "Contact Us"].map(
          (item, i) => (
            <button
              key={i}
              className="hover:text-yellow-400"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          )
        )}
      </div>
    </>
  );
}
