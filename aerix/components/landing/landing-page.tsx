"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { BentoShowcase } from "./bento-showcase";
import { CtaSection } from "./cta-section";
import { HeroSection } from "./hero-section";
import { LandingFooter } from "./landing-footer";
import { LandingHeader } from "./landing-header";
import { SocialSection } from "./social-section";

export const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.3,
  });

  return (
    <main className="overflow-hidden bg-canvas text-ink">
      {/* Top scroll progress bar */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: smoothProgress }}
      />

      <LandingHeader />

      {/* Hero — full viewport height */}
      <HeroSection />

      {/* Divider line */}
      <div className="mx-auto max-w-[1180px] border-t border-border px-5 sm:px-8" />

      {/* Bento Showcase Grid */}
      <div className="py-12 bg-canvas">
        <BentoShowcase />
      </div>

      {/* Social marquee */}
      <SocialSection />

      {/* CTA */}
      <CtaSection />

      <LandingFooter />
    </main>
  );
};
