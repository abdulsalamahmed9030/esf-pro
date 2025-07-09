"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "ELECTRICAL SERVICES",
    subtitle: "DESIGN",
    description:
      "Expert electrical solutions for homes and businesses. We handle installations, upgrades, repairs, and maintenance with a focus on safety, efficiency, and full code compliance.",
    image: "/pic_1.jpg",
    link: "/services/electrical",
  },
  {
    title: "SECURITY",
    subtitle: "SYSTEMS",
    description:
      "Custom-designed security solutions including CCTV, smart access, and alarm systems. Our services help protect your property 24/7, combining advanced technology with reliable installation.",
    image: "/pic_2.jpg",
    link: "/services/security",
  },
  {
    title: "FIRE",
    subtitle: "PROTECTION",
    description:
      "Code-compliant fire alarm system design and installation for residential and commercial spaces. From detection to alert systems, we ensure you’re prepared and protected.",
    image: "/pic_3.jpg",
    link: "/services/fire",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#18191b] text-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-dosis text-3xl md:text-4xl tracking-widest font-light select-none">
            WHAT WE DO
          </h2>
          <div className="relative flex items-center justify-center mt-4 mb-1">
            <div className="w-1 h-1 bg-[#0ab0ff] z-10" />
            <div className="absolute inset-0 flex items-center justify-between gap-2 w-full max-w-[200px] mx-auto">
              <span className="h-px bg-white w-[45%] opacity-60" />
              <span className="h-px bg-white w-[45%] opacity-60" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <h3 className="font-dosis text-[#0ab0ff] tracking-widest text-xl m-0">
                    {service.title}
                  </h3>
                  <h4 className="font-dosis uppercase tracking-wide text-xl text-white m-0">
                    {service.subtitle}
                  </h4>
                </div>
                <p className="text-l text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More Button */}
                <Link href={service.link}>
                  <button className="mt-4 font-dosis text-sm text-[#0ab0ff] underline hover:text-yellow-500 transition duration-200">
                    Read More →
                  </button>
                </Link>
              </div>

              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={260}
                className="w-full object-cover rounded select-none"
              />
            </motion.div>
          ))}
        </div>

        {/* ALL SERVICES Button */}
       
      </div>
    </section>
  );
}
