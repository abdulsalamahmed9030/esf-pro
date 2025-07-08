"use client";

import Image from "next/image";

export default function ServiceIntro() {
  return (
    <section className="bg-[#141414] text-white pt-5">
      <div className="flex flex-col md:flex-row items-center">
        {/* Full-bleed Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/electrical.jpg" // Replace with actual image
              alt="Electrical Service"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content with Padding */}
        <div className="w-full md:w-1/2 px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-dosis font-semibold mb-4 mt-6 md:mt-0">
            Electrical , Safety , Fire Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
            At <span className="font-bold text-white">ESF Pros</span>, we
            provide comprehensive electrical, security, and fire protection
            services to keep your home or business safe and fully operational.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Our team of licensed professionals delivers reliable installations,
            maintenance, and emergency repairs—ensuring your electrical systems
            run smoothly, your security measures are robust, and your fire
            safety is never compromised. With cutting-edge technology and a
            commitment to excellence, we protect what matters most.
          </p>
        </div>
      </div>
    </section>
  );
}
