"use client";

import React from "react";

interface SolutionItem {
  title: string;
  icon: React.ElementType;
}

export default function SolutionsWeProvide({ solutions }: { solutions: SolutionItem[] }) {
  return (
    <section className="bg-[#111214] text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="text-center font-dosis mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-widest">
          SOLUTIONS WE PROVIDE
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          Our pride is to be the leader in the fire protection, fire suppression,
          nurse call and electronic security industries. Our formula for success is
          simple: Provide high-quality work and superior service at competitive
          prices while exceeding our customers’ expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto font-dosis">
        {solutions.map((item, index) => (
          <SolutionCard key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

function SolutionCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-[#1a1a1a] p-10 rounded shadow-md flex flex-col items-center text-center hover:bg-[#222] transition-all">
      <Icon className="text-[#0ab0ff] w-12 h-12 mb-4 stroke-[1.5]" />
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}
