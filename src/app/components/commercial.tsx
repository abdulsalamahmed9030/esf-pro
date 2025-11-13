"use client";

import Image from "next/image";
import { Building2, ServerCog, Lightbulb, Power, ShieldCheck } from "lucide-react";
import SolutionsWeProvide from "@/app/components/SolutionsWeProvide";

const solutions = [
  { title: "Commercial Electrical Installations", icon: Building2, href: "/commercial/electrical-installations" },
  { title: "Panel Replacements & Maintenance", icon: ServerCog, href: "/commercial/panel-replacements" },
  { title: "Retail Lighting Systems", icon: Lightbulb, href: "/commercial/retail-lighting" },
  { title: "Backup Generators & Power Systems", icon: Power, href: "/commercial/backup-generators" },
  { title: "Commercial Security Systems", icon: ShieldCheck, href: "/commercial/security-systems" },
];

export default function Commercial() {
  return (
    <div className="bg-[#111214] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image src="/comm2.jpg" alt="Commercial Services" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Commercial Services</h1>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Protecting your business infrastructure requires industrial-grade solutions...
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-300">
            {solutions.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <SolutionsWeProvide solutions={solutions} />
    </div>
  );
}
