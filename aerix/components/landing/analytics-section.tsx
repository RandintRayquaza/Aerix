"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonVariants } from "@/components/ui/button";
import analyticsPreview from "@/context/assest/analytics.png";
import { analyticsNotes } from "./data";
import { fadeUp, stagger } from "./motion";
import { Magnetic } from "@/components/ui/magnetic";

gsap.registerPlugin(ScrollTrigger);

const miniStats = [
  { label: "CTR", value: "4.7%", delta: "+1.2%" },
  { label: "Avg. Session", value: "1m 42s", delta: "+9s" },
  { label: "Top Country", value: "🇺🇸 US", delta: "38% of traffic" },
];

export const AnalyticsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const imgY = useTransform(smoothProgress, [0, 1], [-20, 30]);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.95,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="analytics"
      ref={sectionRef}
      className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.43fr_1.57fr]">
        {/* Copy */}
        <motion.div
          className="space-y-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
              <TrendingUp className="size-3.5" />
              Powerful insights
            </span>
            <h2 className="max-w-[360px] text-4xl font-bold leading-[1.1] tracking-tight text-ink">
              Understand your audience. Grow faster.
            </h2>
            <p className="max-w-[360px] text-[15px] leading-[1.75] text-body">
              See what is working, where your audience is from, and how they engage with your links and content.
            </p>
          </motion.div>

          <motion.ul variants={stagger} className="space-y-3.5">
            {analyticsNotes.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 text-[14px] text-body"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check aria-hidden="true" className="size-3 stroke-[2.5]" />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Mini stat cards */}
          <motion.div variants={stagger} className="grid gap-3">
            {miniStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="flex items-center justify-between rounded-card border border-border bg-elevated px-4 py-3 shadow-whisper"
              >
                <span className="text-xs font-medium text-muted">{s.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-ink">{s.value}</span>
                  <span className="text-[11px] font-semibold text-[#22c55e]">{s.delta}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Magnetic range={30} action={0.3}>
            <Link href="/signup" className={buttonVariants({ variant: "default", size: "lg" })}>
              Explore Analytics
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Magnetic>
        </motion.div>

        {/* Image */}
        <motion.div ref={imgRef} style={{ y: imgY }} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(ellipse,_rgba(139,92,246,0.08)_0%,_transparent_70%)] blur-xl"
          />
          <Image
            src={analyticsPreview}
            alt="Aerix analytics overview with views, clicks, devices, and top links"
            className="w-full rounded-large-card border border-border shadow-floating"
          />
        </motion.div>
      </div>
    </section>
  );
};
