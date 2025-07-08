"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: [
       { name: "Residential", href: "/services/residential" },
{ name: "Commercial", href: "/services/commercial" },

      ],
    },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black bg-opacity-80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="font-dosis flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-72 py-4 text-white uppercase text-md">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="relative h-28 w-28 block">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain select-none"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
         <ul className="max-[700px]:hidden flex gap-6 items-center tracking-widest relative select-none">

            {navItems.map((item, i, arr) => (
              <li key={i} className="group relative flex items-center gap-2">
                {item.dropdown ? (
                  <span className="hover:text-yellow-400 cursor-pointer">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href!} className="hover:text-yellow-400">
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 bg-[#1e1e1e] mt-2 w-48 flex flex-col border border-gray-700 shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                    {item.dropdown.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className="px-4 py-2 text-white text-xs tracking-widest uppercase hover:bg-yellow-400 hover:text-black border-b border-gray-700 last:border-b-0"
                      >
                        {subItem.name}
                      </Link>
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

          {/* Hamburger Icon */}
          <button
            className="hidden max-[700px]:block z-[60] text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
  className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl tracking-widest transition-transform duration-300 z-40 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } max-[700px]:flex hidden`}
>
  {[
    { name: "Home", href: "/" },
    { name: "Residential", href: "/services/residential" },
    { name: "Commercial", href: "/services/commercial" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ].map((item, i) => (
    <Link
      key={i}
      href={item.href}
      className="hover:text-yellow-400"
      onClick={() => setMenuOpen(false)}
    >
      {item.name}
    </Link>
  ))}
</div>

    </>
  );
}
