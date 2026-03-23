"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { PORTFOLIO } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof PORTFOLIO)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { ref, isInView } = useInView();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="block group bg-black rounded-2xl border border-white/5 p-8 md:p-10 transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(46,204,113,0.1)] hover:border-emerald/20"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.3s ease-out, box-shadow 0.5s, border-color 0.5s",
        }}
        data-cursor
      >
        {/* Green accent bar */}
        <div className="h-1 w-16 bg-emerald rounded-full mb-8 group-hover:w-24 transition-all duration-500" />

        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-2xl md:text-3xl font-bold text-sand"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.name}
          </h3>
          <ExternalLink className="text-sand/30 group-hover:text-emerald transition-colors" size={20} />
        </div>

        <p className="text-emerald text-sm font-medium mb-4">{project.url}</p>
        <p className="text-sand/50 leading-relaxed">{project.description}</p>
      </a>
    </motion.div>
  );
}

export function Portfolio() {
  const { ref, isInView } = useInView();

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-black/50 text-lg">
            Real businesses. Real results. Visit these live projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO.map((project, i) => (
            <PortfolioCard key={project.url} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
