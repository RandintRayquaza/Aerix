"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonVariants } from "@/components/ui/button";
import builderPreview from "@/context/assest/landig-profile.png";
import { builderNotes } from "./data";
import { fadeUp, stagger } from "./motion";
import { Magnetic } from "@/components/ui/magnetic";

gsap.registerPlugin(ScrollTrigger);

export const BuilderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const imgY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const imgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8"
    >
      {/* Section label */}
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
          Build your profile
        </span>
      </motion.div>

      <div className="grid items-center gap-14 lg:grid-cols-[0.48fr_1.52fr]">
        {/* Copy */}
        <motion.div
          className="space-y-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="max-w-[320px] text-4xl font-bold leading-[1.1] tracking-tight text-ink">
              Make your profile uniquely yours.
            </h2>
            <p className="max-w-[360px] text-[15px] leading-[1.75] text-body">
              Drag, drop, and customize every section. Preview changes in real time and craft a profile that represents your work.
            </p>
          </motion.div>

          <motion.ul variants={stagger} className="space-y-3.5">
            {builderNotes.map((item) => (
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

          <Magnetic range={30} action={0.3}>
            <Link href="/signup" className={buttonVariants({ variant: "default", size: "lg" })}>
              Start Building
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Magnetic>
        </motion.div>

        {/* Image with scroll parallax */}
        <motion.div
          ref={imgRef}
          className="relative"
          style={{ y: imgY, scale: imgScale }}
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(ellipse,_rgba(139,92,246,0.1)_0%,_transparent_70%)] blur-xl"
          />
          <Image
            src={builderPreview}
            alt="Aerix builder profile editor preview"
            className="w-full rounded-large-card border border-border shadow-floating"
          />
        </motion.div>
      </div>
    </section>
  );
};
