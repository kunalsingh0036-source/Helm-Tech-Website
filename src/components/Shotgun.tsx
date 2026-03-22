"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { SHOTGUN_TOOLS, SHOTGUN_WORKFLOW } from "@/lib/constants";
import { Zap, CheckCircle2 } from "lucide-react";

function ToolCounter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SHOTGUN_TOOLS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-baseline gap-3 mb-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="text-5xl md:text-6xl font-extrabold text-emerald"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {SHOTGUN_TOOLS[index].count}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="text-xl text-sand/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {SHOTGUN_TOOLS[index].category} Tools
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function WorkflowTerminal() {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    setVisibleSteps(0);

    const timers: NodeJS.Timeout[] = [];
    SHOTGUN_WORKFLOW.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleSteps(i + 1), 800 + i * 900));
    });
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div ref={ref} className="bg-black/80 border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald/60" />
        <span className="text-sand/40 text-[10px] ml-2">shotgun</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2">
        <div className="text-sand/50">
          <span className="text-emerald">$</span> shotgun run &quot;Send weekly report&quot;
        </div>
        <div className="h-px bg-white/5 my-3" />
        {SHOTGUN_WORKFLOW.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleSteps ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            {i < visibleSteps ? (
              <CheckCircle2 className="text-emerald flex-shrink-0" size={14} />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full border border-sand/20 flex-shrink-0" />
            )}
            <span className="text-sand/60">
              [{step.step}/{step.total}] {step.text}
            </span>
            {i < visibleSteps && (
              <span className="text-emerald ml-auto text-xs">{step.status}</span>
            )}
          </motion.div>
        ))}
        {visibleSteps >= SHOTGUN_WORKFLOW.length && (
          <motion.div
            className="mt-4 pt-3 border-t border-white/5 text-emerald font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Workflow completed in 12s
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function Shotgun() {
  const { ref, isInView } = useInView();

  return (
    <section id="shotgun" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(46,204,113,0.08),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald/8 border border-emerald/20 rounded-full px-4 py-1.5 mb-6">
            <Zap className="text-emerald" size={14} />
            <span className="text-emerald text-xs font-medium tracking-widest uppercase">
              Flagship Product
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-sand mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Shotgun
          </h2>
          <p className="text-sand/50 text-lg max-w-xl mx-auto mb-8">
            The AI execution engine. 522+ tools. One platform. Execute complex workflows across your entire digital workspace.
          </p>
          <ToolCounter />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <WorkflowTerminal />
        </div>
      </div>
    </section>
  );
}
