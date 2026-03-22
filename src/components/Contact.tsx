"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { MagneticButton } from "./MagneticButton";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, ArrowRight } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_rgba(46,204,113,0.06),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - CTA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sand mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Dominate
              <br />
              <span className="text-emerald">Your Market?</span>
            </h2>
            <p className="text-sand/50 text-lg mb-10 max-w-md leading-relaxed">
              Get a website and AI agent built for your business. Let&apos;s create the system your business deserves.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center gap-3 text-sand/60 hover:text-emerald transition-colors group"
              >
                <Mail size={18} className="text-emerald" />
                <span className="text-sm">{BRAND.contact.email}</span>
              </a>
              <a
                href={`tel:${BRAND.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sand/60 hover:text-emerald transition-colors group"
              >
                <Phone size={18} className="text-emerald" />
                <span className="text-sm">{BRAND.contact.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-smoke/30 rounded-2xl border border-emerald/20 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="text-emerald" size={24} />
                </div>
                <h3
                  className="text-2xl font-bold text-sand mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Received
                </h3>
                <p className="text-sand/50">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { name: "name", label: "Your Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "business", label: "Business Name", type: "text" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      placeholder={field.label}
                      className="w-full bg-transparent border-b border-smoke/60 pb-3 text-sand placeholder:text-sand/30 focus:border-emerald focus:outline-none transition-colors text-sm"
                    />
                  </div>
                ))}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-smoke/60 pb-3 text-sand placeholder:text-sand/30 focus:border-emerald focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <MagneticButton variant="filled">
                  Send Message
                  <ArrowRight size={16} />
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
