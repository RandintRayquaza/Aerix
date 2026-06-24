"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export const AnimatedCurves = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });
  const y = useTransform(smoothProgress, [0, 1], [0, 150]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -right-44 top-24 hidden h-[620px] w-[900px] lg:block"
      style={{ y, rotate }}
    >
      <svg viewBox="0 0 900 620" className="h-full w-full fill-none">
        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
          <motion.path
            key={line}
            d={`M 8 ${286 + line * 28} C 188 ${118 + line * 24}, 338 ${412 - line * 18}, 548 ${268 + line * 18} S 752 ${116 + line * 24}, 892 ${190 + line * 16}`}
            stroke={line % 2 ? "#f1b6d8" : "#9ca7ff"}
            strokeOpacity="0.5"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.55,
              delay: line * 0.07,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};
