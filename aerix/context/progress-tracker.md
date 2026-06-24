# Progress Tracker

## 2026-06-23

### Completed

- Re-read `AGENTS.md` and confirmed it remains the project source of truth.
- Checked the local Next.js App Router docs under `node_modules/next/dist/docs/` before editing app files.
- Set Aerix product metadata in `app/layout.tsx`, including title template, description, Open Graph, Twitter card, and metadata base.
- Wired the root body to Aerix light theme classes.
- Added Tailwind v4 theme tokens in `app/globals.css` for Aerix colors, fonts, radii, shadows, and focus styling.
- Added global base styles for light mode, typography, selection, media, links, and accessible focus states.
- Replaced the blank home page with a small Aerix first screen that uses the canonical profile design preview and Lucide feature icons.
- Updated `next.config.ts` from deprecated `images.domains` to `images.remotePatterns` for external image safety.
- Rebuilt the home page into a full landing page matching `context/design/landing.png` with the supplied logo, hero, builder/profile, and analytics assets.
- Split the landing page into focused components under `components/landing/`.
- Added shadcn-style local UI primitives with `components/ui/button.tsx`, `lib/utils.ts`, and `components.json` mapped to the Aerix Tailwind theme.
- Added local SVG brand icons for Instagram, YouTube, X, Discord, LinkedIn, and More.
- Added Motion-based reveal, hover, progress, hero parallax, and animated curve effects.
- Removed the placeholder trusted-by strip, builder tab row, TikTok item, footer theme toggles, and dead nav links.

## 2026-06-23 (Polish Pass)

### Completed

- Installed `gsap` and `ScrollTrigger` plugin.
- **Hero section**: GSAP path-draw animation on decorative SVG curves, animated floating stat chips (Profile Views + Link Clicks), highlighted headline word with underline accent, parallax Y/scale/opacity exit on scroll, and animated badge pill.
- **Features section**: Hover-lift cards with radial gradient reveal, GSAP scroll-triggered animated counters in a stats bar (profile views, creators, uptime, setup time).
- **Builder section**: GSAP scroll-triggered slide-in entrance on the product image, Framer Motion Y/scale parallax on scroll, filled-circle checkmarks, section label pill.
- **Workflow section**: GSAP-animated vertical progress bar that fills as the user scrolls past it, GSAP staggered entrance for each step card, step number labels.
- **Analytics section**: GSAP scroll-triggered fade/scale entrance on the analytics dashboard image, Framer Motion Y parallax, mini stat row cards (CTR, Avg. Session, Top Country).
- **Social section**: CSS-driven infinite platform marquee (animated via Framer Motion), edge gradient fades, hover-lift/scale on each platform icon, centered pill + heading layout.
- **CTA section**: Dark ink background, animated purple/indigo radial gradient blobs driven by scroll parallax, subtle grid texture overlay, white CTA button with glow hover.
- **Header**: Scroll-aware glass effect (transparent on top, white/blur when scrolled), animated underline on nav links, smooth mobile drawer menu.
- **Footer**: Three-column layout, top border, Privacy/Terms/Status links added.
- Updated `motion.ts` with expanded variants (fadeDown, fadeLeft, fadeRight, staggerFast).
- All unused imports cleaned up. Lint: 0 errors, 0 warnings. TypeScript: 0 errors. Build: ✓ Compiled successfully.

### Notes

- The initial setup follows the light-first, clean whitespace, hairline border, minimal shadow, Lucide-only direction from `AGENTS.md`.
- `profile.png` remains the visual source of truth for profile-related UI direction.
- Landing page verification passed with `npm run lint` and `npm run build`.

## 2026-06-24

### Completed

- Reworked the auth experience into an App Router route group at `app/(auth)` with dedicated `/login`, `/signup`, and `/onboarding` pages.
- Reused a shared auth screen component for the three UI states and kept the implementation UI-only for now.
- Updated the landing page CTAs to route into the auth flow instead of anchor links.
- Kept the auth design mobile-friendly with stacked layouts, compact cards, and readable spacing on small screens.
- Updated `context/project-overview..md` and `context/edge-cases.md` to reflect the auth routes and CTA behavior.
- Verified the changes with `npm run lint` and `npm run build`.
