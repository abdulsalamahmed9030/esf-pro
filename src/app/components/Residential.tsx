"use client";

import Image from "next/image";
import { PlugZap, Settings, Shield, AlarmSmoke, BatteryCharging } from "lucide-react";
import SolutionsWeProvide from "@/app/components/SolutionsWeProvide";

const solutions = [
  { title: "Home Electrical Installations", icon: PlugZap, href: "/services/electrical-installations" },
  { title: "Panel Upgrades & Circuit Repairs", icon: Settings, href: "/services/residential/panel-upgrades" },
  { title: "Home Security Systems", icon: Shield, href: "/services/residential/security-systems" },
  { title: "Fire Alarm & Sprinkler Systems", icon: AlarmSmoke, href: "/services/residential/fire-alarm" },
  { title: "EV Charger Installation", icon: BatteryCharging, href: "/services/residential/ev-charger" },
];


export default function ResidentialPage() {
  return (
    <div className="bg-[#111214] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image src="/rec2.jpg" alt="Residential Services" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Residential Services</h1>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Your home deserves complete protection and flawless functionality...
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
