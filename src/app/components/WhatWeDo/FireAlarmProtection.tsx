"use client";

import { useEffect, useState } from "react";

export default function FireAlarmProtection() {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shortText =
    "At ESF PROS INC, we understand that when it comes to fire protection, there is no room for compromise. We provide full-scope fire alarm system design, installation, testing, and maintenance tailored to the unique requirements of commercial construction projects throughout California.";

  const fullText =
    "At ESF PROS INC, we understand that when it comes to fire protection, there is no room for compromise. We provide full-scope fire alarm system design, installation, testing, and maintenance tailored to the unique requirements of commercial construction projects throughout California. From early detection to mass notification, our systems are engineered to save lives, minimize property damage, and ensure full compliance with all state and local fire codes. We work directly with general contractors, developers, and AHJs to deliver seamless and approved fire alarm systems from day one.";

  return (
    <section className="bg-[#141414] text-white pt-5 pb-16">
      <div className="flex flex-col items-center px-4 md:px-20">
        <div className="w-full md:w-2/3">
          {/* Header Image */}
          {/* <div className="relative w-full h-[300px] md:h-[400px] mb-8">
            <Image
              src="/electrical.jpg" // Update with your actual image
              alt="Fire Alarm Protection"
              fill
              className="object-cover rounded"
            />
          </div> */}

          

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {isMobile && !showFull ? shortText : fullText}
          </p>

          {isMobile && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-4 text-yellow-400 underline hover:text-yellow-500 transition"
            >
              {showFull ? "Read Less" : "Read More"}
            </button>
          )}

          {/* Additional Sections: Only Show on Desktop or when showFull is true */}
          {(showFull || !isMobile) && (
            <>
              {/* Comprehensive Fire Alarm Solutions */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Comprehensive Fire Alarm Solutions
                </h3>
                <p className="text-gray-300 mb-4">
                  Every building has a legal and ethical obligation to protect
                  its occupants. At <span className="italic">ESF PROS INC</span>,
                  we take that responsibility seriously. We provide end-to-end
                  fire alarm services that meet the strictest safety standards—
                  without compromising efficiency or build timelines.
                </p>

                {/* 🔥 Fire Alarm System Design */}
                <h4 className="text-lg font-semibold text-yellow-400">
                  🔥 Fire Alarm System Design
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Site surveys and risk assessments</li>
                  <li>CAD drawings and engineered layouts</li>
                  <li>Device calculations and zoning maps</li>
                  <li>Code review and AHJ coordination</li>
                  <li>UL- and NFPA-compliant engineering packages</li>
                </ul>

                {/* 🔔 System Installation */}
                <h4 className="mt-6 text-lg font-semibold text-yellow-400">
                  🔔 System Installation
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Smoke, heat, and beam detectors</li>
                  <li>Pull stations, horns, strobes, annunciators</li>
                  <li>Fire alarm control panels (FACP)</li>
                  <li>Emergency power and backup systems</li>
                  <li>Conduit, cabling, and device labeling</li>
                </ul>

                {/* 🛠 Testing & Commissioning */}
                <h4 className="mt-6 text-lg font-semibold text-yellow-400">
                  🛠 Testing, Inspection & Commissioning
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Pre-functional testing and inspection</li>
                  <li>Acceptance testing with fire department/AHJ</li>
                  <li>Final walkthrough and as-built documentation</li>
                  <li>Certification and permit sign-off</li>
                  <li>End-user training</li>
                </ul>

                {/* 🔗 Integration with Other Systems */}
                <h4 className="mt-6 text-lg font-semibold text-yellow-400">
                  🔗 Integration with Other Systems
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Sprinkler and suppression system monitoring</li>
                  <li>HVAC and elevator shutdown interfaces</li>
                  <li>Mass notification and paging</li>
                  <li>Security and access control integration</li>
                </ul>
              </div>

              {/* Built for Commercial Applications */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Built for Commercial Applications
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Office Complexes & Corporate Buildings</li>
                  <li>Warehouses & Industrial Sites</li>
                  <li>Retail Chains & Shopping Centers</li>
                  <li>Schools, Colleges & Institutions</li>
                  <li>Healthcare Facilities & Labs</li>
                  <li>Multi-Tenant Residential & Hospitality Buildings</li>
                </ul>
              </div>

              {/* Code Compliance */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Code Compliance & Peace of Mind
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>NFPA 72 and NFPA 70 (NEC)</li>
                  <li>California Building & Fire Codes (CBC, CFC)</li>
                  <li>UL-listed equipment</li>
                  <li>Local fire marshal approval</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Why Choose ESF PROS INC for Fire Alarm Protection?
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>✔ Commercial Fire Alarm Specialists</li>
                  <li>✔ NICET-Certified Designers and Technicians</li>
                  <li>✔ Full Code Compliance Guaranteed</li>
                  <li>✔ Trusted Manufacturer Partnerships</li>
                  <li>✔ Coordinated Trade Installations</li>
                  <li>✔ Emergency & Maintenance Services</li>
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="mt-10 border-t border-gray-700 pt-6">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-2">
                  Get Protected Today
                </h3>
                <div className="text-gray-300 text-sm mb-2">
  📞 Phone: 650-770-4101 <br />
  📧 Email: info@esfpros.com <br />
  🌐 Website: <a href="https://esfpros.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">esfpros.com</a>
</div>

                <p className="italic text-gray-500 mt-2">
                  ESF PROS INC – Electrical, Security, Fire. Life Safety Systems That Work When It Matters Most.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
