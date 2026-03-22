"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { RESULTS } from "@/lib/constants";

function ResultStat({ item }: { item: (typeof RESULTS)[number] }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCounter(
    item.value,
    isInView && !("isStatic" in item && item.isStatic),
    2000,
    "decimal" in item && item.decimal === true
  );

  const displayValue = "isStatic" in item && item.isStatic ? item.value : count;

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald mb-3"
        style={{
          fontFamily: "var(--font-heading)",
          textShadow: "0 0 60px rgba(46, 204, 113, 0.2)",
        }}
      >
        {displayValue}
        {item.suffix}
      </div>
      <p className="text-sand/50 text-sm md:text-base">{item.label}</p>
    </div>
  );
}

export function Results() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            The ROI Speaks for Itself
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {RESULTS.map((item) => (
            <ResultStat key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
