"use client";


import { useState, useEffect } from "react";

export default function ElectricalDesign() {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shortText = `At ESF PROS INC, we specialize in comprehensive electrical services design tailored specifically for commercial construction projects throughout California.`;

  const fullText = `At ESF PROS INC, we specialize in comprehensive electrical services design tailored specifically for commercial construction projects throughout California. With years of industry experience and a reputation for excellence, our team of certified electricians and designers collaborates closely with general contractors, developers, architects, and facility managers to deliver fully integrated electrical solutions that are safe, efficient, and code-compliant from start to finish.`;

  const shouldShowAll = !isMobile || showFull;

  return (
    <section className="bg-[#141414] text-white pt-5 pb-16">
      <div className="flex flex-col items-center px-4 md:px-20">
        <div className="w-full md:w-2/3">
          {/* <div className="relative w-full h-[300px] md:h-[400px] mb-8">
            <Image
              src="/electrical.jpg"
              alt="Electrical Service"
              fill
              className="object-cover rounded"
            />
          </div> */}

         

          <h3 className="text-lg md:text-xl font-light italic text-yellow-400 mb-3">
            Powered by Precision – Delivered by ESF PROS INC
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
              {/* Why Electrical Design Matters */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Why Electrical Design Matters in Commercial Construction
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  In commercial construction,{" "}
                  <span className="italic">electrical design is more than just wiring</span>
                  —it&apos;s the backbone of your building’s infrastructure. A well-designed electrical system ensures uninterrupted power distribution, supports modern building technologies, enhances safety, and accommodates future scalability.
                </p>
                <p className="text-gray-300 mt-2">
                  At <span className="italic">ESF PROS INC</span>, we believe in designing systems that not only meet today’s demands but are also engineered for tomorrow’s growth.
                </p>
              </div>

              {/* Service Categories */}
              <div className="mt-10 space-y-8 text-gray-300">
                <ServiceSection title="🔧 Power Distribution Planning" items={[
                  "Load calculations for current and future usage",
                  "Main service and subpanel layouts",
                  "Transformer, switchgear, and breaker coordination",
                  "Efficient circuit distribution to minimize energy loss",
                ]} />

                <ServiceSection title="💡 Lighting Systems Design" items={[
                  "Interior and exterior lighting layouts",
                  "Energy-efficient LED solutions",
                  "Motion sensor and automated lighting control systems",
                  "Emergency and exit lighting compliance (Title 24, NEC)",
                ]} />

                <ServiceSection title="📐 Code-Compliant Design & Documentation" items={[
                  "Full NEC, NFPA 70, and Title 24 compliance",
                  "Detailed electrical CAD drawings, riser diagrams & one-line schematics",
                  "Panel schedules, conduit/cable tray routing, and equipment schedules",
                  "Coordination with civil, mechanical, and architectural plans",
                ]} />

                <ServiceSection title="⚙ Critical Systems Integration" items={[
                  "Backup generators and UPS systems",
                  "Electrical infrastructure for HVAC systems",
                  "Fire alarm interface wiring",
                  "Security system prewiring (CCTV, access control, intrusion detection)",
                ]} />

                <ServiceSection title="📈 Energy Management & Efficiency" items={[
                  "Energy modeling and load balancing",
                  "Integration of solar and renewable energy systems",
                  "Smart metering and submetering options",
                  "Recommendations for rebates and energy incentives",
                ]} />
              </div>

              {/* Commercial Projects */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Tailored for Commercial Projects
                </h3>
                <p className="text-gray-300 mb-2">
                  We cater exclusively to <span className="italic">commercial environments</span>, including:
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Office Buildings</li>
                  <li>Retail Spaces & Shopping Centers</li>
                  <li>Industrial Facilities</li>
                  <li>Educational Institutions</li>
                  <li>Healthcare & Labs</li>
                  <li>Hospitality & Restaurants</li>
                </ul>
                <p className="mt-2 text-gray-300">
                  From small tenant improvements to ground-up developments and multi-level commercial complexes—<span className="italic">ESF PROS INC</span> is your trusted electrical design partner at every construction phase.
                </p>
              </div>

              {/* Safety & Performance */}
              <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-3">
                  Built on Safety, Designed for Performance
                </h3>
                <p className="text-gray-300">
                  Our team uses the latest design software (AutoCAD, Revit MEP, Bluebeam, etc.) and follows rigorous quality assurance procedures. Every system we design is carefully evaluated for:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Safety and risk mitigation</li>
                  <li>Cost-efficiency and budget alignment</li>
                  <li>Ease of installation and constructability</li>
                  <li>Longevity and minimal maintenance needs</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 border-t border-gray-700 pt-6">
                <h3 className="text-xl md:text-2xl font-semibold font-dosis mb-2">
                  Partner With ESF PROS INC
                </h3>
                <p className="text-gray-300 mb-4">
                  When you choose <span className="italic">ESF PROS INC</span>, you’re choosing a partner who understands the complexity of commercial construction and delivers electrical design services that <strong>streamline the build process</strong>, <strong>minimize rework</strong>, and <strong>meet inspection the first time</strong>.
                </p>
                <p className="text-yellow-400 font-semibold">
                  Let us help you power your next project—on time, on budget, and beyond expectations.
                </p>
                <div className="text-gray-300 text-sm mb-2">
  📞 Phone: 650-770-4101 <br />
  📧 Email: info@esfpros.com <br />
  🌐 Website: <a href="https://esfpros.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">esfpros.com</a>
</div>

                <p className="mt-2 italic text-gray-500">
                  ESF PROS INC – Electrical, Security, Fire. Built for California’s Commercial Future.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper sub-component
function ServiceSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-yellow-400">{title}</h4>
      <ul className="list-disc list-inside text-gray-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
