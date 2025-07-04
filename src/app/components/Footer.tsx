"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaSkype,
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
        src="/logo.jpg"
        alt="Logo"
        width={100}
        height={100}
        className="mb-4"
      />
      <p className="text-l text-white">
        At ESF PROS INC., we specialize in expert electrical installations,
        advanced security systems, and fire alarm solutions. Serving homes and
        businesses with trusted, code-compliant, and innovative services.
      </p>
    </div>

    {/* Latest News */}
    <div>
      <h3 className="uppercase tracking-widest text-2xl mb-4">Latest News</h3>
      <ul className="text-l text-white space-y-2">
        <li className="hover:text-yellow-400 cursor-pointer border-b border-gray-700 pb-1">
          Top Benefits of Smart Home Upgrades
        </li>
        <li className="hover:text-yellow-400 cursor-pointer border-b border-gray-700 pb-1">
          How to Choose the Right CCTV System
        </li>
        <li className="hover:text-yellow-400 cursor-pointer border-b border-gray-700 pb-1">
          Fire Safety: Are You Prepared?
        </li>
        <li className="hover:text-yellow-400 cursor-pointer border-b border-gray-700 pb-1">
          Wiring Tips for New Constructions
        </li>
        <li className="hover:text-yellow-400 cursor-pointer border-b border-gray-700 pb-1">
          Why Electrical Code Compliance Matters
        </li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="uppercase tracking-widest text-2xl mb-4">Contact Us</h3>
      <ul className="text-l text-white space-y-2">
        <li>California</li>
        <li>
          <span className="text-yellow-400">Phone:</span> 650-770-4101
        </li>
        <li>
          <span className="text-yellow-400">Email:</span> info@esfpros.com
        </li>
        <li>
          <span className="text-yellow-400">Web:</span>{" "}
          https://www.esfpros.com
        </li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="uppercase tracking-widest text-2xl mb-4">Our Services</h3>
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
  <div className="bg-black text-xl text-gray-400 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    <p>
      &copy; Copyright 2025 {" "}
      <span className="text-yellow-400">ESFPROS</span>
    </p>

    <div className="flex gap-4 items-center">
      <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
      <FaXTwitter className="hover:text-yellow-400 cursor-pointer" />
      <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
      <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
      <FaSkype className="hover:text-yellow-400 cursor-pointer" />
      <FaDribbble className="hover:text-yellow-400 cursor-pointer" />
    </div>
  </div>
</footer>


      {/* Back to Top Button (floating) */}
      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="w-10 h-10 bg-yellow-400 group-hover:bg-black text-black group-hover:text-white flex items-center justify-center transition-all duration-300 rounded">
            ↑
          </div>
        </button>
      )}
    </>
  );
}
