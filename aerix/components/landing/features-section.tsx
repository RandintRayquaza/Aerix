"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "./data";
import { fadeUp, stagger } from "./motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 48200, suffix: "+", label: "Profile views served" },
  { value: 12000, suffix: "+", label: "Creators building" },
  { value: 99.9, suffix: "%", label: "Uptime reliability", decimals: 1 },
  { value: 2, suffix: "min", label: "Average setup time", prefix: "<" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const obj = useRef({ val: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(obj.current, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          el.textContent = obj.current.val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      });
    });
    return () => ctx.revert();
  }, [value, decimals]);

  return (
    <span className="tabular-nums">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

function TiltCard({ title, copy, icon: Icon }: { title: string; copy: string; icon: React.ComponentType<{ className?: string }> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -((y - height / 2) / height) * 12;
    const rotateY = ((x - width / 2) / width) * 12;

    gsap.to(el, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(glow, {
      opacity: 1,
      left: x,
      top: y,
      duration: 0.15,
    });
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(glow, {
      opacity: 0,
      duration: 0.35,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative overflow-hidden rounded-large-card border border-border bg-elevated p-6 shadow-whisper transition-shadow duration-300 hover:shadow-floating cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Radial Hover Glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.15)_0%,_transparent_65%)] opacity-0 transition-opacity duration-300"
        style={{ width: "240px", height: "240px" }}
      />
      
      <div className="relative space-y-4" style={{ transform: "translateZ(20px)" }}>
        <div className="flex size-11 items-center justify-center rounded-card bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div className="space-y-2">
          <h2 className="text-[15px] font-semibold text-ink">{title}</h2>
          <p className="text-sm leading-[1.65] text-body">{copy}</p>
        </div>
      </div>
    </div>
  );
}

export const FeaturesSection = () => {
  return (
    <section id="features" className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
      {/* Feature cards */}
      <motion.div
        className="grid gap-4 md:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={fadeUp}>
            <TiltCard title={feature.title} copy={feature.copy} icon={feature.icon} />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats bar */}
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-large-card border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 bg-elevated px-6 py-7 text-center"
          >
            <span className="text-3xl font-bold tracking-tight text-ink">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
              />
            </span>
            <span className="text-xs font-medium text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
