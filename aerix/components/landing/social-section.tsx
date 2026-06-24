"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { socialItems } from "./data";
import { fadeUp, stagger } from "./motion";

// Double the array for a seamless marquee
const marqueeItems = [...socialItems, ...socialItems, ...socialItems];

export const SocialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  // Horizontal marquee offset driven by scroll (complementing CSS animation)
  const x = useTransform(smoothProgress, [0, 1], [0, -40]);

  return (
    <section
      id="examples"
      ref={sectionRef}
      className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8"
    >
      <div className="overflow-hidden rounded-large-card border border-border bg-elevated py-14 shadow-whisper">
        {/* Header */}
        <motion.div
          className="mb-12 space-y-4 px-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent"
          >
            Share anywhere
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-ink"
          >
            One link. Every platform.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[440px] text-[15px] leading-[1.75] text-body"
          >
            Use the same Aerix profile across every place where people already find your work.
          </motion.p>
        </motion.div>

        {/* Marquee row */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,_#ffffff,_transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,_#ffffff,_transparent)]" />

          <motion.div
            className="flex gap-5 px-6"
            style={{ x }}
            animate={{ x: [0, -1 * (socialItems.length * 96)] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {marqueeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${item.label}-${idx}`}
                  className="flex shrink-0 flex-col items-center gap-2.5 text-xs font-medium text-body"
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={cn(
                      "flex size-14 items-center justify-center rounded-large-card border border-border/60 shadow-whisper transition-shadow duration-200 hover:shadow-floating",
                      item.tone,
                    )}
                  >
                    <Icon className="size-6" />
                  </div>
                  {item.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom stat */}
        <motion.p
          className="mt-10 text-center text-sm font-medium text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Works with every social platform and content channel
        </motion.p>
      </div>
    </section>
  );
};
