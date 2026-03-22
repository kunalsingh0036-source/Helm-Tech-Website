"use client";

import { useEffect, useState } from "react";

export function useCounter(target: number, isActive: boolean, duration = 2000, decimal = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(decimal ? Math.round(current * 10) / 10 : Math.round(current));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isActive, target, duration, decimal]);

  return value;
}
