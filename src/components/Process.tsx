"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Progress line fill
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Step activation
      const steps = section.querySelectorAll("[data-step]");
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          onEnter: () => setActiveStep(i),
          onLeaveBack: () => setActiveStep(Math.max(0, i - 1)),
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            From Zero to Digital Dominance
          </h2>
          <p className="text-sand/50 text-lg">
            Our simple 4-step process — from zero to a fully operational digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          {/* Timeline sidebar - sticky on desktop */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <div className="relative pl-8">
                {/* Background line */}
                <div className="absolute left-[11px] top-0 w-[2px] h-full bg-smoke" />
                {/* Active line */}
                <div
                  ref={progressRef}
                  className="absolute left-[11px] top-0 w-[2px] bg-emerald origin-top"
                  style={{ transform: "scaleY(0)", height: "100%" }}
                />

                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.number} className="mb-10 relative">
                    {/* Dot */}
                    <div
                      className={`absolute -left-8 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        i <= activeStep
                          ? "border-emerald bg-emerald/20"
                          : "border-smoke bg-black"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          i <= activeStep ? "bg-emerald" : "bg-smoke"
                        }`}
                      />
                    </div>
                    <div
                      className={`text-sm font-bold transition-colors duration-500 ${
                        i <= activeStep ? "text-emerald" : "text-sand/30"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`text-xs transition-colors duration-500 ${
                        i <= activeStep ? "text-sand" : "text-sand/20"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps content */}
          <div className="space-y-20 md:space-y-32">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                data-step={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Mobile dot */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-emerald bg-emerald/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald" />
                  </div>
                  <span className="text-emerald text-sm font-bold">{step.number}</span>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-bold text-sand mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sand/50 text-lg max-w-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
