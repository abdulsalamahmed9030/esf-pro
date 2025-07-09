"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function ViewAllProjectsBanner({ title, href }: Props) {
  return (
    <section className="bg-[#0ab0ff] py-12 flex justify-center text-black">
      <Link
        href={href}
        className="flex items-center gap-2 border border-black px-6 py-2 text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase font-dosis"
      >
        {title}
        <ArrowRight size={16} strokeWidth={2.5} />
      </Link>
    </section>
  );
}
