"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

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
        <nav className="font-dosis flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 text-white uppercase text-md max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 h-20 w-20 sm:h-24 sm:w-24 relative">
            <Link href="/" className="block h-full w-full relative">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain select-none"
              />
            </Link>
          </div>

          {/* Desktop Menu: visible on lg+ screens */}
          <ul className="hidden lg:flex flex-wrap items-center gap-6 tracking-widest relative select-none">
            {navItems.map((item, i, arr) => (
              <li key={i} className="group relative flex items-center gap-2">
                {item.dropdown ? (
                  <span className="hover:text-[#0ab0ff] cursor-pointer">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href!} className="hover:text-[#0ab0ff]">
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
                        className="px-4 py-2 text-white text-xs tracking-widest uppercase hover:bg-[#0ab0ff] hover:text-black border-b border-gray-700 last:border-b-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Dot Separator */}
                {i < arr.length - 1 && (
                  <span className="w-1 h-1 bg-[#0ab0ff] rounded-full inline-block" />
                )}
              </li>
            ))}

            {/* GET A QUOTE Button */}
            <li>
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 border border-white hover:border-[#0ab0ff] hover:text-[#0ab0ff] transition-all text-sm tracking-widest"
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon: show on screens below lg (1024px) */}
          <button
  className="block lg:hidden z-[60] text-3xl"
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
  } lg:hidden`}
>
  {/* Navigation Links */}
  {[
    { name: "Home", href: "/" },
    { name: "Residential", href: "/services/residential" },
    { name: "Commercial", href: "/services/commercial" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get A Quote", href: "/contact" },
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

  {/* Social Icons */}
  <div className="flex gap-6 mt-10">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF className="text-[#1877F2] text-2xl hover:scale-110 transition" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <FaXTwitter className="text-white text-2xl hover:scale-110 transition" />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram className="text-[#E1306C] text-2xl hover:scale-110 transition" />
    </a>
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <FaYoutube className="text-[#FF0000] text-2xl hover:scale-110 transition" />
    </a>
  </div>
</div>

    </>
  );
}
