"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { STATS } from "@/lib/constants";
import { Search, Shield, Globe } from "lucide-react";

const ICONS = [Search, Shield, Globe];

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCounter(stat.value, isInView);
  const Icon = ICONS[index];

  return (
    <motion.div
      ref={ref}
      className="bg-black rounded-2xl border-l-4 border-emerald p-8 md:p-10 flex flex-col justify-between min-h-[260px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Icon className="text-emerald mb-6" size={28} />
      <div>
        <div
          className="text-5xl md:text-6xl font-extrabold text-emerald mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {count}
          {stat.suffix}
        </div>
        <p className="text-sand/70 text-base">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
            The Problem
          </h2>
          <p className="text-black/60 text-lg max-w-2xl">
            Businesses without a digital presence are invisible to modern consumers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-10 bg-black rounded-2xl p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p
            className="text-xl md:text-2xl font-bold text-emerald leading-relaxed"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            If your business isn&apos;t online, your competitors are winning your customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
