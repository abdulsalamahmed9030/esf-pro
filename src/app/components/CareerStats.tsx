"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { label: "Career Promotions", value: 85 },
  { label: "Training Hours", value: 1200 },
  { label: "Employee Satisfaction %", value: 97 },
  { label: "Certifications Offered", value: 42 },
];

export default function CareerStats() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="bg-[#1a1a1a] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <motion.h3
              className="text-4xl md:text-5xl font-light font-dosis"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <AnimatedCount target={stat.value} trigger={inView} />
            </motion.h3>
            <p className="mt-2 text-[#0ab0ff] font-medium text-sm md:text-base font-dosis tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Animated Count Component
function AnimatedCount({ target, trigger }: { target: number; trigger: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (trigger) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [trigger, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span>{display}</span>;
}
