"use client";

import { useState, useEffect } from "react";

export default function OurProcess() {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shortText =
    "At ESF PROS INC, we know that every successful project—whether it’s powering a new office, securing a retail store, or upgrading home electrical—starts with a clear plan and ends with quality execution.";

  return (
    <section className="bg-[#141414] text-white pt-5 pb-16">
      <div className="flex flex-col items-center px-4 md:px-20">
        <div className="w-full md:w-2/3">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {shortText}
          </p>

          {isMobile && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-4 text-yellow-400 underline hover:text-yellow-500 transition"
            >
              {showFull ? "Read Less" : "Read More"}
            </button>
          )}

          {(!isMobile || showFull) && (
            <div className="mt-8 space-y-10 text-gray-300">
              {/* 1. Meet & Agree */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 tracking-wider">
                  🤝 1. MEET & AGREE
                </h3>

                <p className="italic text-base md:text-lg mb-2">
                  Understanding Your Vision & Setting Expectations
                </p>

                <p className="text-base md:text-lg mb-4">
                  We begin every project with a{" "}
                  <span className="font-semibold">
                    comprehensive consultation
                  </span>{" "}
                  to understand your goals, building requirements, and timeline.
                  This could include a site visit, blueprint review, or
                  walkthrough with your architect or GC.
                </p>

                <ul className="list-disc list-inside space-y-1 text-base md:text-lg mb-4">
                  <li>We listen closely to your needs</li>
                  <li>
                    Discuss electrical, security, and fire system objectives
                  </li>
                  <li>Establish project scope and budget</li>
                  <li>Present a transparent quote with zero hidden costs</li>
                </ul>

                <p className="text-base md:text-lg">
                  Once we’re aligned, we move forward with confidence and
                  clarity.
                </p>
              </div>

              {/* 2. Idea & Concept */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 tracking-wider">
                  💡 2. IDEA & CONCEPT
                </h3>

                <p className="italic text-base md:text-lg mb-2">
                  Designing the Right Solution for Your Space
                </p>

                <p className="text-base md:text-lg mb-4">
                  In this phase, our experts begin shaping a practical,
                  compliant, and scalable system—based on your property layout,
                  power needs, and usage expectations.
                </p>

                <ul className="list-disc list-inside space-y-1 text-base md:text-lg mb-4">
                  <li>Load calculations and circuit planning</li>
                  <li>Security camera placement and fire detection strategy</li>
                  <li>
                    Code review for NEC, Title 24, ADA, and NFPA compliance
                  </li>
                  <li>
                    Suggestions for future-proofing (EV readiness, smart tech,
                    etc.)
                  </li>
                </ul>

                <p className="text-base md:text-lg">
                  We work with engineers, project managers, and decision-makers
                  to ensure the concept is safe, efficient, and technically
                  sound.
                </p>
              </div>

              {/* 3. Design & Create */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 tracking-wider">
                  ✏ 3. DESIGN & CREATE
                </h3>

                <p className="italic text-base md:text-lg mb-2">
                  Engineering Excellence Meets Real-World Planning
                </p>

                <p className="text-base md:text-lg mb-4">
                  Now it’s time to get into the technical detail. Our team
                  produces clear, build-ready electrical or low-voltage designs
                  that are ready for approval and implementation.
                </p>

                <ul className="list-disc list-inside space-y-1 text-base md:text-lg mb-4">
                  <li>Full layout drawings and documentation</li>
                  <li>Equipment/material sourcing</li>
                  <li>Permit submission and utility coordination</li>
                  <li>Scheduling and project phasing</li>
                </ul>

                <p className="text-base md:text-lg">
                  We ensure every design meets the latest safety standards, city
                  codes, and insurance requirements—keeping your project on
                  track and inspection-ready.
                </p>
              </div>

              {/* 4. Build & Install */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2 tracking-wider">
                  🧰 4. BUILD & INSTALL
                </h3>

                <p className="italic text-base md:text-lg mb-2">
                  Safe, Efficient, Professional Execution
                </p>

                <p className="text-base md:text-lg mb-4">
                  Our licensed technicians take over and bring the plan to
                  life—whether it’s wiring, panel installation, security system
                  setup, or fire alarm configuration.
                </p>

                <ul className="list-disc list-inside space-y-1 text-base md:text-lg mb-4">
                  <li>On-time material delivery and workforce deployment</li>
                  <li>Clean, code-compliant installations</li>
                  <li>
                    Coordination with other trades (HVAC, plumbing, drywall)
                  </li>
                  <li>Real-time problem-solving with site supervisors</li>
                  <li>
                    Final walkthrough, system testing, and client sign-off
                  </li>
                </ul>

                <p className="text-base md:text-lg">
                  Your system won’t just work—it will work smart, safely, and
                  sustainably.
                </p>
              </div>

              {/* Closing */}
              <div className="mt-10 border-t border-gray-700 pt-6">
                <p className="italic text-gray-400">
                  From the first conversation to the final inspection, ESF PROS
                  INC delivers professionalism, accountability, and top-tier
                  craftsmanship—every step of the way.
                </p>
                <p className="mt-4 text-yellow-400 font-semibold">
                  📞 Let’s Talk About Your Project
                </p>
                <p className="text-sm">
                  Phone: [ 650-770-4101] <br />
                  Email: [info@esfpros.com] <br />
                  Website: [esfpros.com]
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
