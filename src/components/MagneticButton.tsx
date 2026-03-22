"use client";

import { motion } from "motion/react";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "filled" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function MagneticButton({
  children,
  variant = "filled",
  onClick,
  href,
  className = "",
}: MagneticButtonProps) {
  const { ref, position } = useMagnetic(0.25);

  const baseClasses =
    "relative px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 inline-flex items-center gap-2";

  const variantClasses =
    variant === "filled"
      ? "bg-emerald text-black hover:bg-emerald-dark hover:shadow-[0_0_40px_rgba(46,204,113,0.3)]"
      : "border border-emerald/40 text-emerald hover:border-emerald hover:shadow-[0_0_40px_rgba(46,204,113,0.15)]";

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        data-cursor
      >
        {children}
      </Tag>
    </motion.div>
  );
}
