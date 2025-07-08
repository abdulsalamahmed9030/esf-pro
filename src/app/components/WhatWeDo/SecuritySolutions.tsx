"use client";

import { useEffect, useState } from "react";

export default function SecuritySolutions() {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shortText = `At ESF PROS INC, we provide integrated security systems that safeguard commercial properties across California.`;

  const fullText = `At ESF PROS INC, we provide integrated security systems that safeguard commercial properties across California. Our custom-designed solutions include CCTV surveillance, intrusion alarms, and access control systems—all engineered with the latest smart technology and installed by certified security professionals who understand the demands of commercial construction environments.

Whether you're securing a high-rise office, a retail chain, a healthcare facility, or an industrial complex, ESF PROS INC ensures your property is monitored, protected, and compliant from day one.`;

  const shouldShowAll = !isMobile || showFull;

  return (
    <section className="bg-[#141414] text-white pt-5 pb-16">
      <div className="flex flex-col items-center px-4 md:px-20">
        <div className="w-full md:w-2/3">
          {/* <div className="relative w-full h-[300px] md:h-[400px] mb-8">
            <Image
              src="/electrical.jpg"
              alt="Security Solutions"
              fill
              className="object-cover rounded"
            />
          </div> */}

         
          <h3 className="text-lg md:text-xl font-light italic text-yellow-400 mb-3">
            Smart Protection, Expertly Delivered by ESF PROS INC
          </h3>

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

          {shouldShowAll && (
            <>
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Complete Security System Design & Installation
                </h3>
                <p className="text-gray-300 mb-6">
                  We don’t believe in one-size-fits-all. Every commercial site has different risks, traffic flows, and compliance requirements. That’s why we offer fully customized security packages—designed, engineered, and installed specifically for your facility.
                </p>

                <ServiceSection title="🎥 CCTV Surveillance Systems" items={[
                  "HD/4K indoor & outdoor camera coverage",
                  "IP camera systems with remote access",
                  "24/7 real-time monitoring and cloud video storage",
                  "PTZ, night vision, license plate, and thermal cameras",
                  "Centralized NVR/DVR setup with live feed integration",
                ]} />

                <ServiceSection title="🚨 Intrusion Alarm Systems" items={[
                  "Burglar and perimeter alarms with motion, glass break, and door sensors",
                  "UL-listed control panels and wired/wireless configurations",
                  "Remote arming/disarming via mobile app",
                  "Integration with fire, access, and building management systems",
                  "Instant alerts to on-site security or emergency response teams",
                ]} />

                <ServiceSection title="🔐 Access Control Systems" items={[
                  "Key card, keypad, mobile, and biometric entry systems",
                  "Gate, elevator, and restricted area controls",
                  "Centralized access logs and audit trails",
                  "Role-based permissions and visitor management",
                  "Integration with time-tracking and HR systems",
                ]} />

                <ServiceSection title="☁ Smart Integration & Remote Access" items={[
                  "Seamless control via secure mobile and web-based platforms",
                  "Cloud-based storage, access logs, and real-time alerts",
                  "AI-assisted video analytics for motion detection and anomaly alerts",
                  "System health monitoring and remote diagnostics",
                ]} />
              </div>

              {/* Designed for Commercial Construction */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Designed for Commercial Construction
                </h3>
                <p className="text-gray-300 mb-2">
                  We coordinate closely with your general contractors, developers, and IT teams to ensure seamless integration into your building’s electrical and data infrastructure. Our solutions are built to scale and adapt to various commercial settings, including:
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Corporate Campuses & Offices</li>
                  <li>Retail Stores & Malls</li>
                  <li>Warehouses & Distribution Centers</li>
                  <li>Hospitals, Labs & Clinics</li>
                  <li>Schools & Institutions</li>
                  <li>Hospitality & Multi-Use Buildings</li>
                </ul>
              </div>

              {/* Compliance & Quality */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Compliance, Quality, and Confidence
                </h3>
                <p className="text-gray-300 mb-2">
                  Our systems meet all applicable building and safety codes (UL, NFPA, ADA, NEC) and are installed to manufacturer-certified standards. We use only top-tier brands like <strong>Hikvision, Axis, Honeywell, DSC, Bosch, and Ubiquiti</strong> to ensure reliability and long-term performance.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Clear as-built documentation</li>
                  <li>Device tagging and labeling</li>
                  <li>End-user training and onboarding</li>
                  <li>Ongoing maintenance and upgrade support</li>
                </ul>
              </div>

              {/* Why Choose */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Why Choose ESF PROS INC for Security Systems?
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>✔ Commercial-Only Expertise</li>
                  <li>✔ Licensed & Certified Technicians</li>
                  <li>✔ Scalable Smart Technology</li>
                  <li>✔ Fast, Clean, and Coordinated Installations</li>
                  <li>✔ 24/7 Client Support and Monitoring Options</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 border-t border-gray-700 pt-6">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-2">
                  Let’s Secure Your Next Project
                </h3>
                <div className="text-gray-300 text-sm mb-2">
  📞 Phone: 650-770-4101 <br />
  📧 Email: info@esfpros.com <br />
  🌐 Website: <a href="https://esfpros.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">esfpros.com</a>
</div>

                <p className="italic text-gray-500">
                  ESF PROS INC – Electrical, Security, Fire. Commercial Protection That Never Sleeps.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Reusable service section
function ServiceSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-yellow-400">{title}</h4>
      <ul className="list-disc list-inside text-gray-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
