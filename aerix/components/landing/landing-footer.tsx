import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { navItems } from "./data";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Status", href: "#" },
];

export const LandingFooter = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 py-10 text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label="Aerix home">
        <Image src={logo} alt="" className="size-9 object-contain" />
        <span className="text-[15px] font-bold tracking-tight">Aerix</span>
      </Link>

      <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 font-medium">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="transition-colors hover:text-ink"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <span className="text-border">·</span>
        <span>&copy; 2026 Aerix</span>
      </div>
    </div>
  </footer>
);
