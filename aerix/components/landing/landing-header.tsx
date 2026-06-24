"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import { navItems } from "./data";
import { Magnetic } from "@/components/ui/magnetic";

export const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-[0_1px_0_#ebebeb] backdrop-blur-xl"
            : "bg-canvas/0 backdrop-blur-none"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-102" aria-label="Aerix home">
            <Image src={logo} alt="" className="size-12 object-contain" priority />
            <span className="text-[20px] font-extrabold tracking-tight text-ink">Aerix</span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-body md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic range={25} action={0.25}>
              <Link
                href="/login"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden sm:flex text-body")}
              >
                Log in
              </Link>
            </Magnetic>
            <Magnetic range={30} action={0.3}>
              <Link
                href="/signup"
                className={buttonVariants({ variant: "default", size: "sm" })}
              >
                Get Started
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
            </Magnetic>
            <button
              className="ml-1 flex size-9 items-center justify-center rounded-small text-body md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-x-0 top-[68px] z-30 border-b border-border bg-white/95 backdrop-blur-xl md:hidden"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-small px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-elevated hover:text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="mt-3 flex gap-2 border-t border-border pt-3">
            <Link href="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "flex-1 justify-center")}>
              Log in
            </Link>
            <Link href="/signup" className={cn(buttonVariants({ variant: "default", size: "sm" }), "flex-1 justify-center")}>
              Get Started
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
};
