"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workflowItems } from "./data";
import { fadeUp, stagger } from "./motion";

gsap.registerPlugin(ScrollTrigger);

export const WorkflowSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bar = progressRef.current;
    if (!section || !bar) return;

    const ctx = gsap.context(() => {
      // Animate the vertical progress bar as user scrolls through the section
      gsap.to(bar, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 0.4,
        },
      });

      // Stagger in each card
      const cards = section.querySelectorAll(".workflow-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: -30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
          delay: i * 0.04,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8"
    >
      <motion.div
        className="mb-14 grid gap-6 lg:grid-cols-[0.55fr_1.45fr]"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="space-y-5">
          <span className="inline-block rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
            Creator workflow
          </span>
          <h2 className="max-w-[360px] text-4xl font-bold leading-[1.1] tracking-tight text-ink">
            One place to shape your public page.
          </h2>
          <p className="max-w-[360px] text-[15px] leading-[1.75] text-body">
            Aerix keeps the profile workflow focused on what a creator needs: content, presentation, publishing, and analytics.
          </p>
        </motion.div>

        {/* Cards with animated progress line */}
        <div className="relative flex gap-8">
          {/* Vertical progress bar */}
          <div className="relative hidden flex-col items-center sm:flex">
            <div className="w-px flex-1 bg-border" />
            <div
              ref={progressRef}
              className="absolute inset-0 w-px origin-top scale-y-0 bg-accent"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-1 flex-col gap-5">
            {workflowItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="workflow-card group relative overflow-hidden rounded-large-card border border-border bg-elevated p-6 shadow-whisper transition-all duration-300 hover:-translate-y-1 hover:shadow-floating"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.05),_transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-card bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-muted">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-[1.65] text-body">{item.copy}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
