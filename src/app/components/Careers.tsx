"use client";

import Image from "next/image";

export default function Careers() {
  return (
    <section className="bg-[#141414] text-white pt-5">
      <div className="flex flex-col md:flex-row items-center">
        {/* Full-bleed Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/electrical.jpg" // Replace with your actual image path
              alt="Careers at ESF Pros"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content with Padding */}
        <div className="w-full md:w-1/2 px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-dosis font-semibold mb-4 mt-6 md:mt-0">
            Power Your Career with ESF Pros
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
            At <span className="font-bold text-white">ESF Pros</span>, we&apos;re looking for skilled electricians, security technicians, and fire safety professionals to join our growing team. We offer competitive compensation, ongoing training, and opportunities to work with cutting-edge technology in the electrical, security and fire protection industry.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Whether you&apos;re an experienced professional or just starting your career, we provide the support and resources to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
