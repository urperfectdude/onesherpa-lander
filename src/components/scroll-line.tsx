"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * A thin curved line that draws itself in as the page scrolls past the
 * hero, inspired by gojiberry.ai's scroll-synced SVG trace. Path length is
 * measured at runtime so the dash offset always matches exactly.
 */
export function ScrollLine({ className }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 600], [length, 0]);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <svg aria-hidden className={className} viewBox="0 0 800 500" fill="none" preserveAspectRatio="none">
      <motion.path
        ref={pathRef}
        d="M 30 60 C 220 10, 360 230, 560 180 S 760 120, 770 430"
        stroke="var(--accent)"
        strokeOpacity={0.35}
        strokeWidth={1.5}
        strokeLinecap="round"
        style={
          length === 0
            ? { opacity: 0 }
            : reduce
              ? undefined
              : { strokeDasharray: length, strokeDashoffset: offset }
        }
      />
    </svg>
  );
}
