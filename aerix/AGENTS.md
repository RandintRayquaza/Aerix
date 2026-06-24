<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->



# AGENTS.md

## Project Name

Aerix

Aerix is a personal identity platform that allows creators, developers, founders, students, artists, and professionals to create a customizable public profile page that combines social links, featured content, media, videos, and personal branding into a single shareable page.

This file is the single source of truth for the entire project.

If any documentation conflicts with this file, AGENTS.md always wins.

---

# Project Goal

Build a modern creator identity platform that feels like a mix of:

* Linktree
* Bento
* Carrd
* Creator Hub

while maintaining a clean and professional experience.

Users should be able to:

* Share social links
* Upload images
* Upload videos
* Showcase YouTube content
* Showcase Instagram content
* Customize appearance
* Track analytics
* Manage domains

without requiring technical knowledge.

---

# Tech Stack

## Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS v4
* Framer Motion

## Authentication

* Better Auth
* Email / Password
* Google OAuth

## Database

* PostgreSQL
* Neon
* Drizzle ORM

## Storage

* ImageKit
* imagekit.io

## Deployment

* Vercel

## Icons

* Lucide React

---

# Design System

Primary design reference:

context/designs/profile.png

All previews, builders, themes, media views, and public pages must follow this file.

If any design files conflict:

profile.png is the source of truth.

---

# Typography

* Geist Sans
* Geist Mono

Fallbacks:

* Inter
* JetBrains Mono

---

# Design Principles

* Light mode first
* Clean whitespace
* Hairline borders
* Minimal shadows
* No unnecessary gradients
* No emoji usage
* Lucide icons only
* Mobile-first functionality
* Creator-focused experience

---

# Navigation Structure

Dashboard

Builder

Themes

Analytics

Library

Domains

Settings

No additional navigation items should be added without updating documentation.

---

# Builder Blocks

Supported blocks:

* Profile
* Social Icons
* Contact Button
* Intro Video
* YouTube Videos
* Instagram Reels
* Links
* Gallery
* Spotify Player
* Text
* Divider

---

# Default Blocks

New accounts start with:

* Profile
* Contact Button
* Links

Everything else is optional.

---

# Public Page Layout

Profile

↓

Social Icons

↓

Contact Button

↓

Intro Video (optional)

↓

Featured YouTube Videos (optional)

↓

Instagram Reels (optional)

↓

Links

↓

Gallery (optional)

↓

Spotify Player (optional)

---

# Intro Video Rules

Optional block.

Supports:

* Upload
* External URL

Maximum duration:

30 seconds

Maximum file size:

25 MB

Allowed formats:

* MP4
* MOV
* WEBM

Non-MP4 videos should automatically be converted to MP4.

---

# Gallery Rules

Supports:

Images

* Upload
* External URL

Videos

* Upload
* External URL

Video Limits:

* 30 seconds
* 25 MB

Gallery appears as a horizontal scrolling section.

---

# Media Handling

Whenever identical media is reused:

* Profile
* Gallery
* Preview
* Sidebar

The same Cloudflare URL should be reused.

Duplicate storage should be avoided.

---

# Analytics

Track:

* Profile Views
* Unique Visitors
* Link Clicks
* Video Clicks
* Gallery Clicks
* CTR
* Traffic Sources
* Referrers
* Devices
* Countries

Analytics are informational only.

No advertising features.

---

# Domain System

Official domain structure:

aerix.live/username

or

aerix.live/custom-slug

Custom domains are not supported.

Domain renewals are not supported.

External domain connection is not supported.

Only slug management is available.

---

# Theme System

Users can customize:

* Background Color
* Background Image
* Theme Presets
* Button Style
* Text Color
* Accent Color

Theme changes are global.

Per-block color customization is not supported.

This prevents users from creating visually inconsistent pages.

---

# Mobile Support

Every feature must function on mobile.

Users should be able to:

* Edit Profile
* Build Pages
* Upload Media
* Manage Themes
* View Analytics
* Manage Domains
* Publish Changes

without requiring a desktop device.

---

# Documentation Rules

After implementing any feature:

Update:

* project-overview.md
* edge-cases.md
* relevant documentation

If implementation changes system behavior:

Update AGENTS.md first.

AGENTS.md remains the highest authority document.


# Documentation Hierarchy

Documentation should be followed in this order:

AGENTS.md
and evertime before making any chnages read all these files to understand the project and its requirements.

1. 
2. context/designs/profile.png
3. architecture.md
4. build-plan.md
5. code-standards.md
6. database-architecture.md
7. ui-rules.md
8. ui-tokens.md
9. ui-registry.md
10. project-overview.md
11. edge-cases.md
12. empty-states.md
13. library-docs.md

If conflicts occur:

AGENTS.md wins.

If AGENTS.md does not define behavior:

profile.png becomes the source of truth.

---

# Build Order

Development should follow this order:

1. Landing Page
2. Authentication
3. Dashboard Shell
4. Builder
5. Themes
6. Analytics
7. Media Library
8. Domains
9. Settings
10. Public Profile
11. Final Polish

Do not skip dependencies between phases.

---

# State Management

Global State:

* Zustand

Server State:

* TanStack Query

Forms:

* React Hook Form
* Zod

UI Components:

* shadcn/ui

---

# Media Handling

Storage Provider:

* ImageKit

Whenever identical media is reused:

* Profile
* Gallery
* Preview
* Builder

The same ImageKit URL should be reused.

Duplicate storage should be avoided.


update 
`progress.md` after each phase is completed.
and use lint checkers to ensure code quality and consistency across the project.

push code to git only after passing all lint checks and ensuring that all tests pass.