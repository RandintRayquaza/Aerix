"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonVariants } from "@/components/ui/button";
import heroPreview from "@/context/assest/hero.png";
import { proofItems } from "./data";
import { fadeScale, fadeUp, stagger } from "./motion";
import { Magnetic } from "@/components/ui/magnetic";

gsap.registerPlugin(ScrollTrigger);

const BadgeAnim = () => (
  <motion.div
    className="inline-flex items-center gap-2 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1.5 text-xs font-semibold text-accent"
    initial={{ opacity: 0, y: 12, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
  >
    <Sparkles className="size-3.5" />
    Creator Identity Platform
  </motion.div>
);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const curveRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const imgY = useTransform(smoothProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Curve animation
      if (curveRef.current) {
        const paths = curveRef.current.querySelectorAll("path");
        paths.forEach((path, i) => {
          const length = (path as SVGPathElement).getTotalLength?.() ?? 1200;
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.8,
            delay: i * 0.08,
            ease: "power3.out",
          });
        });
      }

      // 2. Premium title reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".anim-word");
        gsap.fromTo(
          words,
          { y: 55, rotate: 1 },
          {
            y: 0,
            rotate: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-[1280px] items-center gap-12 overflow-hidden px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1fr_1.1fr]"
    >
      {/* Background curves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-10 hidden h-[700px] w-[900px] lg:block"
      >
        <svg ref={curveRef} viewBox="0 0 900 700" className="h-full w-full fill-none">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <path
              key={i}
              d={`M 0 ${320 + i * 22} C 160 ${160 + i * 20}, 320 ${480 - i * 16}, 540 ${300 + i * 14} S 760 ${130 + i * 18}, 900 ${200 + i * 12}`}
              stroke={i % 2 ? "#c4b5fd" : "#a5b4fc"}
              strokeOpacity={0.35 - i * 0.02}
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.08)_0%,_transparent_70%)]"
      />

      {/* Left column — copy */}
      <motion.div
        className="relative z-10 flex max-w-xl flex-col gap-7"
        style={{ y: heroY, opacity: heroOpacity }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <BadgeAnim />

        <motion.div variants={fadeUp} className="space-y-5">
          <h1
            ref={titleRef}
            className="max-w-[560px] text-[3.6rem] font-bold leading-[1.03] tracking-[-0.02em] text-ink max-sm:text-[2.6rem]"
          >
            <span className="inline-flex overflow-hidden pb-1">
              <span className="anim-word inline-block mr-2.5">One</span>
            </span>
            <span className="inline-flex overflow-hidden pb-1">
              <span className="anim-word inline-block mr-2.5">link</span>
            </span>
            <span className="inline-flex overflow-hidden pb-1">
              <span className="anim-word inline-block mr-2.5">for</span>
            </span>{" "}
            <span className="relative inline-flex overflow-hidden pb-1">
              <span className="anim-word relative z-10 mr-2.5 inline-block text-accent font-extrabold">
                everything
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 h-2.5 w-full rounded-full bg-[#e8dfff]"
                style={{ zIndex: 0 }}
              />
            </span>{" "}
            <span className="inline-flex overflow-hidden pb-1">
              <span className="anim-word inline-block mr-2.5">you</span>
            </span>
            <span className="inline-flex overflow-hidden pb-1">
              <span className="anim-word inline-block">create.</span>
            </span>
          </h1>
          <p className="max-w-[500px] text-[1.05rem] leading-[1.75] text-body">
            Build a beautiful profile, share your links, grow your audience, and track your impact — all in one place.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
          <Magnetic range={35} action={0.35}>
            <Link
              href="/signup"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Get Started Free
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Magnetic>

          <Magnetic range={25} action={0.25}>
            <Link
              href="/login"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              See How It Works
            </Link>
          </Magnetic>
        </motion.div>

        <motion.ul
          variants={stagger}
          className="flex flex-col gap-2.5 text-sm font-medium text-body sm:flex-row sm:gap-5"
        >
          {proofItems.map((item) => (
            <motion.li key={item} variants={fadeUp} className="flex items-center gap-2">
              <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-accent text-white">
                <Check aria-hidden="true" className="size-2.5 stroke-[2.5]" />
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right column — product preview */}
      <motion.div
        className="relative z-10 flex justify-center lg:justify-end"
        style={{ y: imgY, scale: heroScale }}
        variants={fadeScale}
        initial="hidden"
        animate="visible"
      >
        {/* Glow behind image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-90 rounded-[40px] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.14)_0%,_transparent_70%)] blur-2xl"
        />
        <div className="relative">
          <Image
            src={heroPreview}
            alt="Aerix profile page with analytics and theme controls"
            className="w-full max-w-[820px] transition-transform duration-700 hover:scale-[1.02] drop-shadow-2xl lg:translate-x-6"
            priority
          />
          {/* Floating stat chip 1 */}
          <motion.div
            className="absolute -left-6 bottom-20 hidden rounded-large-card border border-border bg-white/95 px-4 py-3 shadow-floating backdrop-blur-sm lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-medium text-muted">Profile Views</p>
            <p className="text-xl font-bold text-ink">48.2K</p>
            <p className="mt-0.5 text-[10px] font-semibold text-[#22c55e]">+24% this week</p>
          </motion.div>
          {/* Floating stat chip 2 */}
          <motion.div
            className="absolute -right-4 top-16 hidden rounded-large-card border border-border bg-white/95 px-4 py-3 shadow-floating backdrop-blur-sm lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-medium text-muted">Link Clicks</p>
            <p className="text-xl font-bold text-ink">12.8K</p>
            <p className="mt-0.5 text-[10px] font-semibold text-accent">+18% vs last week</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
