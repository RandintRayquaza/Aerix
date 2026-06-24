"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, Sparkles, TrendingUp, MonitorSmartphone } from "lucide-react";
import heroPreview from "@/context/assest/hero.png";
import builderPreview from "@/context/assest/landig-profile.png";
import analyticsPreview from "@/context/assest/analytics.png";
import { builderNotes, analyticsNotes, proofItems, socialItems } from "./data";
import { Magnetic } from "@/components/ui/magnetic";

gsap.registerPlugin(ScrollTrigger);

// Custom tilt hook / helper function
function useBentoHover(cardRef: React.RefObject<HTMLDivElement | null>, glowRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = -((y - height / 2) / height) * 8;
      const rotateY = ((x - width / 2) / width) * 8;

      gsap.to(el, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.3,
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

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cardRef, glowRef]);
}

export const BentoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for each card
  const c1 = useRef<HTMLDivElement>(null); const g1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null); const g2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null); const g3 = useRef<HTMLDivElement>(null);
  const c4 = useRef<HTMLDivElement>(null); const g4 = useRef<HTMLDivElement>(null);
  const c5 = useRef<HTMLDivElement>(null); const g5 = useRef<HTMLDivElement>(null);
  const c6 = useRef<HTMLDivElement>(null); const g6 = useRef<HTMLDivElement>(null);

  useBentoHover(c1, g1);
  useBentoHover(c2, g2);
  useBentoHover(c3, g3);
  useBentoHover(c4, g4);
  useBentoHover(c5, g5);
  useBentoHover(c6, g6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance sequence trigger
      gsap.from(".bento-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* Tile 1: Profile Editor (2x2 Column on Left) */}
        <div
          ref={c1}
          className="bento-card group relative md:col-span-2 overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g1} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[300px] h-[300px]" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3 py-1 text-xs font-semibold text-accent">
                <Sparkles className="size-3.5" />
                Live Editor
              </span>
              <h3 className="text-2xl font-bold text-ink tracking-tight">Make your profile uniquely yours</h3>
              <p className="text-sm leading-relaxed text-body">
                Drag, drop, and style blocks instantly. Preview changes in real time and hit publish.
              </p>
              <ul className="space-y-2">
                {builderNotes.map((note) => (
                  <li key={note} className="flex items-center gap-2.5 text-xs text-body font-medium">
                    <span className="flex size-[18px] items-center justify-center rounded-full bg-accent text-white">
                      <Check className="size-2.5 stroke-[3]" />
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Magnetic range={25} action={0.25}>
                  <Link href="/signup" className="inline-flex items-center gap-2 rounded-card bg-ink !text-white px-5 py-2.5 text-xs font-bold shadow-whisper transition-transform active:scale-[0.98]">
                    Start Customizing
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-card border border-border shadow-whisper relative max-h-[220px] lg:max-h-[300px]">
              <Image src={builderPreview} alt="Live Profile Editor" className="w-full object-cover transition-transform duration-700 group-hover:scale-102" />
            </div>
          </div>
        </div>

        {/* Tile 2: Live Analytics (1x2 Column on Right) */}
        <div
          ref={c2}
          className="bento-card group relative overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g2} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[300px] h-[300px]" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3 py-1 text-xs font-semibold text-accent">
              <TrendingUp className="size-3.5" />
              Real-time Analytics
            </span>
            <h3 className="text-xl font-bold text-ink tracking-tight">Understand your audience</h3>
            <p className="text-xs leading-relaxed text-body">
              Track views, unique clicks, CTR metrics, and browser devices natively.
            </p>
            <div className="overflow-hidden rounded-card border border-border shadow-whisper my-3">
              <Image src={analyticsPreview} alt="Audience Insights Overview" className="w-full object-cover" />
            </div>
            <ul className="space-y-1.5">
              {analyticsNotes.slice(0, 2).map((note) => (
                <li key={note} className="flex items-start gap-2 text-xs text-body font-medium">
                  <span className="mt-0.5 flex size-4 items-center justify-center rounded-full bg-accent text-white shrink-0">
                    <Check className="size-2.5 stroke-[3]" />
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tile 3: Audience Outreach & Integration (1x1 Row 2) */}
        <div
          ref={c3}
          className="bento-card group relative overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g3} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[240px] h-[240px]" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Outreach</span>
            <h3 className="text-lg font-bold text-ink">Connect everything</h3>
            <p className="text-xs text-body leading-relaxed">
              Integrate all your social platform channels in one click to funnel your traffic.
            </p>
            
            {/* Minimal Grid of social channels */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {socialItems.slice(0, 8).map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.label} className={`flex size-11 items-center justify-center rounded-card ${social.tone} border border-border shadow-whisper hover:scale-108 transition-transform cursor-pointer`}>
                    <Icon className="size-5 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tile 4: Identity Platform Hook (2x2 Column on Right) */}
        <div
          ref={c4}
          className="bento-card group relative md:col-span-2 overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g4} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[300px] h-[300px]" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 overflow-hidden rounded-card border border-border shadow-whisper">
              <Image src={heroPreview} alt="Identity Landing Template" className="w-full object-cover transition-transform duration-700 group-hover:scale-102" />
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3 py-1 text-xs font-semibold text-accent">
                <MonitorSmartphone className="size-3.5" />
                Adaptive Layout
              </span>
              <h3 className="text-xl font-bold text-ink tracking-tight">Optimized for every device</h3>
              <p className="text-xs leading-relaxed text-body">
                Fast, reliable, and beautifully scaled template modules configured to match consumer preferences.
              </p>
              <ul className="space-y-2">
                {proofItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-body font-medium">
                    <span className="flex size-[18px] items-center justify-center rounded-full bg-accent text-white">
                      <Check className="size-2.5 stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tile 5: Setup Workflow steps (1x1 Row 3) */}
        <div
          ref={c5}
          className="bento-card group relative overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g5} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[240px] h-[240px]" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Workflow</span>
            <h3 className="text-lg font-bold text-ink">Zero code required</h3>
            <p className="text-xs text-body leading-relaxed">
              Launch your profile page and connect with fans globally in under 2 minutes.
            </p>
            <div className="space-y-2.5 pt-1.5">
              {[
                { step: "1", title: "Create profile", color: "bg-[#e8dfff] text-accent" },
                { step: "2", title: "Add links & media", color: "bg-[#e2f0fd] text-[#0070f3]" },
                { step: "3", title: "Share and measure", color: "bg-[#eefcf2] text-[#22c55e]" }
              ].map((w) => (
                <div key={w.step} className="flex items-center gap-3">
                  <span className={`flex size-6 shrink-0 items-center justify-center rounded-full ${w.color} text-xs font-bold`}>
                    {w.step}
                  </span>
                  <span className="text-xs font-semibold text-ink">{w.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tile 6: Platform Stats overview (1x1 Row 3) */}
        <div
          ref={c6}
          className="bento-card group relative overflow-hidden rounded-large-card border border-border bg-white p-8 shadow-whisper hover:shadow-floating transition-shadow duration-300 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div ref={g6} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.12)_0%,_transparent_65%)] opacity-0 w-[240px] h-[240px]" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Performance</span>
            <h3 className="text-lg font-bold text-ink">Built for scale</h3>
            <p className="text-xs text-body leading-relaxed">
              Lightweight, fast, and optimized for sub-100ms loading speeds globally.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="rounded-card border border-border bg-canvas/30 p-2.5 text-center">
                <p className="text-lg font-extrabold text-ink">99.9%</p>
                <p className="text-[10px] font-medium text-muted">Uptime</p>
              </div>
              <div className="rounded-card border border-border bg-canvas/30 p-2.5 text-center">
                <p className="text-lg font-extrabold text-ink">{"< 2s"}</p>
                <p className="text-[10px] font-medium text-muted">Page load</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
