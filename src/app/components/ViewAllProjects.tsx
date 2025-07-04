"use client";

import { ArrowRight } from "lucide-react";

export default function ViewAllProjectsBanner() {
  return (
    <section className="bg-[#f8b600] py-12 flex justify-center">
      <button className="flex items-center gap-2 border border-black px-6 py-2 text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase font-dosis">
        VIEW ALL PROJECTS
        <ArrowRight size={16} strokeWidth={2.5} />
      </button>
    </section>
  );
}
