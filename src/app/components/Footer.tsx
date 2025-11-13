"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#000000] text-white font-dosis">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16 border-b border-gray-800">
          {/* Logo and About */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mb-4 select-none"
            />
            <p className="text-l text-white">
              At ESF PROS INC., we specialize in expert electrical
              installations, advanced security systems, and fire alarm
              solutions. Serving homes and businesses with trusted,
              code-compliant, and innovative services.
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="uppercase tracking-widest text-2xl mb-4">
              Quick Links
            </h3>
            <ul className="text-l text-white space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Residential", href: "/services/residential" },
                { name: "Commercial", href: "/services/commercial" },
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <li key={index} className="border-b border-gray-700 pb-1">
                  <a
                    href={item.href}
                    className="hover:text-[#0ab0ff] cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          {/* Contact Us */}
<div>
  <h3 className="uppercase tracking-widest text-2xl mb-4">Contact Us</h3>
  <ul className="text-l text-white space-y-2 mb-4">
    <li>California</li>
    <li>
      <span className="text-[#0ab0ff]">Phone:</span> 650-770-4101
    </li>
    <li>
      <span className="text-[#0ab0ff]">Email:</span> info@esfpros.com
    </li>
    <li>
      <span className="text-[#0ab0ff]">Web:</span> esfpros.com
    </li>
  </ul>

  {/* Social Icons in Brand Colors */}
  <div className="flex gap-4 mt-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-[#1877F2] text-xl hover:scale-110 transition" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaXTwitter className="text-white text-xl hover:scale-110 transition" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-[#E1306C] text-xl hover:scale-110 transition" />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="text-[#FF0000] text-xl hover:scale-110 transition" />
    </a>
  </div>
</div>


          {/* Services */}
          <div>
            <h3 className="uppercase tracking-widest text-2xl mb-4">
              Our Services
            </h3>
            <ul className="text-l text-white space-y-2">
              <li>Electrical Installations</li>
              <li>Security Systems</li>
              <li>Fire Alarm Solutions</li>
              <li>Smart Home Upgrades</li>
              <li>Emergency Systems</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
       <div className="bg-black text-xl text-gray-400 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-4 text-center">
  <p>
    &copy; Copyright 2025{" "}
    <span className="text-[#0ab0ff]">ESFPROS</span>
  </p>
</div>

      </footer>

      {/* Back to Top Button (floating) */}
      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="w-10 h-10 bg-[#0ab0ff] group-hover:bg-black text-black group-hover:text-white flex items-center justify-center transition-all duration-300 rounded">
            ↑
          </div>
        </button>
      )}
    </>
  );
}
