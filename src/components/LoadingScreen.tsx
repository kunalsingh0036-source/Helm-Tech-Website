"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const LETTERS = "HELM TECH".split("");

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10001] bg-black flex flex-col items-center justify-center gap-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo mark */}
          <motion.img
            src="/logo.svg"
            alt="Helm Tech"
            className="w-16 h-16 md:w-20 md:h-20"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="flex gap-[2px] md:gap-1">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="text-3xl md:text-6xl font-extrabold tracking-[0.2em] text-sand"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-emerald"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
