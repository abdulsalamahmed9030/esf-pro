"use client";

import {
  Briefcase,
  Trophy,
  MessageCircle,
  Wallet,
  RefreshCw,
  Mail,
} from "lucide-react";

const highlights = [
  {
    title: "Career Growth",
    description:
      "We offer clear promotion paths and professional development opportunities to help you advance in your electrical, security or fire safety career.",
    icon: Briefcase,
  },
  {
    title: "Certification Support",
    description:
      "Get sponsored for industry certifications and specialized training to enhance your skills and qualifications.",
    icon: Trophy,
  },
  {
    title: "Mentorship Program",
    description:
      "Learn from experienced professionals through our structured mentorship and on-the-job training programs.",
    icon: MessageCircle,
  },
  {
    title: "Competitive Benefits",
    description:
      "Enjoy comprehensive benefits including health insurance, retirement plans, and performance bonuses.",
    icon: Wallet,
  },
  {
    title: "Safety First",
    description:
      "Work with top-quality equipment and follow industry-leading safety protocols in all our projects.",
    icon: RefreshCw,
  },
  {
    title: "Team Culture",
    description:
      "Join a supportive team environment that values collaboration, innovation, and work-life balance.",
    icon: Mail,
  },
];

export default function CareerHighlights() {
  return (
    <section className="bg-[#222222] text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="font-dosis max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-8">
           <item.icon className="text-[#0ab0ff] w-12 h-12 shrink-0 mt-1 stroke-[#0ab0ff] stroke-[1] fill-none" />

            <div>
              <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
