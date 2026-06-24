"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";

export const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const bgY = useTransform(smooth, [0, 1], [-20, 20]);
  const bgY2 = useTransform(smooth, [0, 1], [20, -20]);

  return (
    <section
      id="start"
      ref={sectionRef}
      className="mx-auto w-full max-w-[1180px] px-5 pb-20 pt-4 sm:px-8"
    >
      <motion.div
        className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-14 sm:px-16 sm:py-20"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated background blobs */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_transparent_70%)] blur-3xl"
          style={{ y: bgY }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.25)_0%,_transparent_70%)] blur-3xl"
          style={{ y: bgY2 }}
        />
        {/* Grid texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[500px] space-y-5">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Ready to build your digital identity?
            </h2>
            <p className="text-[15px] leading-[1.75] text-white/60">
              Create a public profile for your links, media, and creator brand. No code required.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-4 sm:items-center">
            <Magnetic range={35} action={0.35}>
              <Link
                href="/signup"
                className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-card bg-white px-8 text-sm font-bold text-ink shadow-floating transition-shadow hover:shadow-[0_8px_32px_rgba(255,255,255,0.18)]"
              >
                Create Your Profile
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Magnetic>
            <span className="text-xs font-medium text-white/40">
              Free forever · No credit card required
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
