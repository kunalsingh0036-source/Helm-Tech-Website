"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { SERVICES, CHAT_MESSAGES } from "@/lib/constants";
import { Globe, Bot, Check } from "lucide-react";

function WebsiteBuilder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const footerOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Browser mockup */}
      <div className="bg-smoke/50 rounded-xl border border-white/10 overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-smoke/80 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald/60" />
          <div className="ml-3 flex-1 bg-black/40 rounded-md px-3 py-1 text-[10px] text-sand/40">
            yourbusiness.com
          </div>
        </div>

        {/* Website layers */}
        <div className="p-4 space-y-3 h-[320px]">
          <motion.div
            style={{ opacity: headerOpacity }}
            className="h-8 bg-smoke/80 rounded-md flex items-center px-3 gap-4"
          >
            <div className="w-16 h-3 bg-emerald/40 rounded" />
            <div className="flex gap-3 ml-auto">
              <div className="w-8 h-2 bg-sand/20 rounded" />
              <div className="w-8 h-2 bg-sand/20 rounded" />
              <div className="w-8 h-2 bg-sand/20 rounded" />
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: heroOpacity }}
            className="h-28 bg-black/40 rounded-lg p-4 flex flex-col justify-center"
          >
            <div className="w-3/4 h-4 bg-sand/20 rounded mb-2" />
            <div className="w-1/2 h-3 bg-sand/10 rounded mb-4" />
            <div className="w-24 h-6 bg-emerald/30 rounded-full" />
          </motion.div>

          <motion.div style={{ opacity: cardsOpacity }} className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-20 bg-smoke/60 rounded-lg p-2">
                <div className="w-6 h-6 bg-emerald/20 rounded mb-2" />
                <div className="w-full h-2 bg-sand/10 rounded mb-1" />
                <div className="w-3/4 h-2 bg-sand/10 rounded" />
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{ opacity: footerOpacity }}
            className="h-8 bg-smoke/40 rounded-md flex items-center justify-center"
          >
            <div className="w-20 h-2 bg-sand/10 rounded" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ChatDemo() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="bg-smoke/50 rounded-xl border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-smoke/80 border-b border-white/5">
        <Bot className="text-emerald" size={16} />
        <span className="text-xs text-sand/60 font-medium">AI Agent</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-emerald animate-pulse" />
      </div>
      <div className="p-4 space-y-3 h-[320px]">
        {CHAT_MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.sender === "agent" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.5, duration: 0.4 }}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                msg.sender === "agent"
                  ? "bg-emerald/20 text-sand border border-emerald/20 rounded-br-sm"
                  : "bg-smoke/80 text-sand/80 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            Two Products. One Growth Engine.
          </h2>
          <p className="text-sand/50 text-lg max-w-2xl">
            Your website attracts. Your AI agent converts. Together, they run your business on autopilot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Websites */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                <Globe className="text-emerald" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sand">{SERVICES.websites.title}</h3>
                <p className="text-sand/50 text-sm">{SERVICES.websites.subtitle}</p>
              </div>
            </div>
            <WebsiteBuilder />
            <ul className="mt-6 space-y-2">
              {SERVICES.websites.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-sand/60">
                  <Check className="text-emerald flex-shrink-0" size={14} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Agents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                <Bot className="text-emerald" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sand">{SERVICES.aiAgents.title}</h3>
                <p className="text-sand/50 text-sm">{SERVICES.aiAgents.subtitle}</p>
              </div>
            </div>
            <ChatDemo />
            <ul className="mt-6 space-y-2">
              {SERVICES.aiAgents.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-sand/60">
                  <Check className="text-emerald flex-shrink-0" size={14} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
