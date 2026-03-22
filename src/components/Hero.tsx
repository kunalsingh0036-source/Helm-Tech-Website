"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { TERMINAL_LINES } from "@/lib/constants";

const WORDMARK = "HELM TECH".split("");

function TerminalWidget() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const lineIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const line = TERMINAL_LINES[lineIndex.current];
      if (!line) {
        lineIndex.current = 0;
        setLines([]);
        return;
      }

      const fullText = `${line.prefix} ${line.text}`;

      if (charIndex.current < fullText.length) {
        setCurrentText(fullText.slice(0, charIndex.current + 1));
        charIndex.current++;
      } else {
        setLines((prev) => [...prev.slice(-4), fullText]);
        setCurrentText("");
        charIndex.current = 0;
        lineIndex.current++;

        if (lineIndex.current >= TERMINAL_LINES.length) {
          setTimeout(() => {
            lineIndex.current = 0;
            setLines([]);
          }, 3000);
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute bottom-12 right-8 w-80 md:w-96 bg-smoke/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 font-mono text-xs hidden lg:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
        <span className="text-sand/40 text-[10px] ml-2">helm-terminal</span>
      </div>
      <div className="space-y-1 min-h-[120px]">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith("✓") ? "text-emerald" : "text-sand/70"}
          >
            {line}
          </div>
        ))}
        {currentText && (
          <div className={currentText.startsWith("✓") ? "text-emerald" : "text-sand/70"}>
            {currentText}
            <span className="animate-pulse-cursor inline-block w-1.5 h-3 bg-emerald ml-0.5 align-middle" />
          </div>
        )}
        {!currentText && lines.length === 0 && (
          <div className="text-sand/40">
            <span className="animate-pulse-cursor inline-block w-1.5 h-3 bg-emerald align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const circle1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const circle3Y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating circles */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-emerald/8"
        style={{ y: circle1Y }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full border border-emerald/5"
        style={{ y: circle2Y }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full border border-smoke/30"
        style={{ y: circle3Y }}
      />

      {/* Emerald radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(46,204,113,0.06),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative z-10">
        {/* Small label */}
        <motion.div
          className="inline-flex items-center gap-2 bg-emerald/8 border border-emerald/20 rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
          <span className="text-emerald text-xs font-medium tracking-widest uppercase">
            Websites & AI Agents
          </span>
        </motion.div>

        {/* Wordmark */}
        <h1 className="mb-6">
          <span className="flex whitespace-nowrap">
            {WORDMARK.map((letter, i) => (
              <motion.span
                key={i}
                className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold tracking-[0.08em] text-sand"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.3 + i * 0.05,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-sand/60 max-w-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          We build growth engines — not just websites. Custom AI agents that
          respond to every customer, instantly, 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <MagneticButton href="#portfolio" variant="filled">
            See Our Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Terminal */}
      <TerminalWidget />
    </section>
  );
}
