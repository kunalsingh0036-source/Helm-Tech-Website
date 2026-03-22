"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { TEAM } from "@/lib/constants";
import { Anchor } from "lucide-react";

export function Team() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Built by Operators, Not Just Designers
          </h2>
          <p className="text-black/50 text-lg">
            A founding team with naval discipline and systems-level thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-black rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Emerald accent */}
              <div className="h-1 bg-emerald" />

              <div className="p-8 md:p-10">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-smoke flex items-center justify-center mb-6">
                  <span
                    className="text-2xl font-extrabold text-emerald"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.initials}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-sand mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {member.name}
                </h3>
                <p className="text-emerald text-sm font-medium mb-4">{member.role}</p>

                {/* Navy badge */}
                <div className="inline-flex items-center gap-2 bg-emerald/8 border border-emerald/20 rounded-full px-3 py-1 mb-5">
                  <Anchor className="text-emerald" size={12} />
                  <span className="text-emerald text-xs font-medium">{member.background}</span>
                </div>

                <p className="text-sand/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
