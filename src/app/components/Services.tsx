"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SolutionsWeProvide from "./SolutionsWeProvide";

import {
  PlugZap,
  Settings,
  Shield,
  AlarmSmoke,
  BatteryCharging,
  Building2,
  ServerCog,
  Lightbulb,
  Power,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") as "residential" | "commercial";
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    initialType || "residential"
  );

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "residential" || type === "commercial") {
      setActiveTab(type);
    }
  }, [searchParams]);

  const residentialSolutions = [
    { title: "Home Electrical Installations", icon: PlugZap },
    { title: "Panel Upgrades & Circuit Repairs", icon: Settings },
    { title: "Home Security Systems", icon: Shield },
    { title: "Fire Alarm & Sprinkler Systems", icon: AlarmSmoke },
    { title: "EV Charger Installation", icon: BatteryCharging },
  ];

  const commercialSolutions = [
    { title: "Commercial Electrical Installations", icon: Building2 },
    { title: "Panel Replacements & Maintenance", icon: ServerCog },
    { title: "Retail Lighting Systems", icon: Lightbulb },
    { title: "Backup Generators & Power Systems", icon: Power },
    { title: "Commercial Security Systems", icon: ShieldCheck },
  ];

  const currentSolutions =
    activeTab === "residential" ? residentialSolutions : commercialSolutions;

  return (
    <div className="bg-[#111214] text-white">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-1 pt-10 font-dosis">
        <button
          type="button"
          onClick={() => setActiveTab("residential")}
          className={`px-6 py-3 font-semibold text-sm ${
            activeTab === "residential"
              ? "bg-[#f8b600] text-black"
              : "bg-transparent border border-white"
          }`}
        >
          Residential Service
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("commercial")}
          className={`px-6 py-3 font-semibold text-sm ${
            activeTab === "commercial"
              ? "bg-[#f8b600] text-black"
              : "bg-transparent border border-white"
          }`}
        >
          Commercial Service
        </button>
      </div>

      {/* Residential Section */}
      {activeTab === "residential" && (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-12 px-4 gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/residential1.jpg"
              alt="Residential Services"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">Residential Services</h1>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Your home deserves complete protection and flawless functionality.
              At ESF Pros, we provide comprehensive residential solutions that
              integrate electrical safety, advanced security systems, and reliable
              fire protection into one seamless service. Our certified technicians
              bring decades of combined experience to every project, ensuring your
              family’s safety while enhancing your home’s efficiency. From emergency
              electrical repairs to smart home security installations, we deliver
              peace of mind through precision workmanship, cutting-edge technology,
              and 24/7 responsive service. Trust ESF Pros to be your single point of
              contact for all your home’s safety and operational needs—because your
              peace of mind is our priority.
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-300">
              <li>Home Electrical Installations</li>
              <li>Panel Upgrades & Circuit Repairs</li>
              <li>Home Security Systems</li>
              <li>Fire Alarm & Sprinkler Systems</li>
              <li>EV Charger Installation</li>
            </ul>
          </div>
        </div>
      )}

      {/* Commercial Section */}
      {activeTab === "commercial" && (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-12 px-4 gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/commercial.jpg"
              alt="Commercial Services"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4">Commercial Services</h1>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Protecting your business infrastructure requires industrial-grade
              solutions. ESF Pros delivers enterprise-level electrical, security,
              and fire protection services tailored for commercial facilities, retail
              spaces, and industrial complexes. Our certified specialists understand
              the critical importance of compliance, uptime, and risk mitigation in
              commercial environments.
            </p>
            <h2 className="text-xl font-semibold text-white mb-2">Services</h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-300">
              <li>Commercial Electrical Installations & Upgrades</li>
              <li>Office Building Wiring & Panel Replacements</li>
              <li>Retail Space Lighting Solutions</li>
              <li>Backup Power & Generator Systems</li>
              <li>Commercial Security System Installation</li>
            </ul>
          </div>
        </div>
      )}

      {/* 🔥 Dynamic Solutions Section */}
      <SolutionsWeProvide solutions={currentSolutions} />
    </div>
  );
}
