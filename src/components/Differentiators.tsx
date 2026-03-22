"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { DIFFERENTIATORS } from "@/lib/constants";
import { Target, Bot, TrendingUp, Briefcase } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  Bot,
  TrendingUp,
  Briefcase,
};

export function Differentiators() {
  const { ref, isInView } = useInView();

  return (
    <section id="differentiators" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            What Makes Us Different
          </h2>
          <p className="text-sand/50 text-lg">
            Most agencies stop at design. We optimize for revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                className={`group bg-smoke/30 rounded-2xl border border-white/5 p-8 transition-all duration-500 hover:border-emerald/30 hover:shadow-[0_0_40px_rgba(46,204,113,0.08)] ${
                  item.span === 2 ? "md:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center mb-5 group-hover:bg-emerald/20 transition-colors">
                  {Icon && <Icon className="text-emerald" size={20} />}
                </div>
                <h3 className="text-lg font-bold text-sand mb-2">{item.title}</h3>
                <p className="text-sand/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
