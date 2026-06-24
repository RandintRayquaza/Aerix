# edge-cases.md

## Purpose

This document defines all known edge cases and expected behavior.

If implementation decisions are unclear, this file should be consulted before creating new behavior.

---

# Navigation

## Sidebar Source of Truth

Official navigation:

- Dashboard
- Builder
- Themes
- Analytics
- Library
- Domains
- Settings

No additional navigation items should appear.

Examples of invalid items:

- Upgrade
- Billing
- Pro Features
- Link Manager
- Integrations

Unless officially added later.

## Auth Routes

Auth-related screens live in the App Router `app/(auth)` group.

Landing page primary CTAs should navigate to `/login` or `/signup`.

Onboarding is a separate route and should stay UI-only until product logic exists.

---

# Profile

## Missing Banner

If user does not upload a banner:

Show default system placeholder.

Do not leave empty white space.

---

## Missing Profile Image

Show generated avatar fallback.

Use initials when available.

---

## Missing Bio

Hide bio section completely.

Do not render empty containers.

---

## Missing Name

Use username only.

---

## Missing Username

Publishing is blocked.

Username is required.

---

# Intro Video

## Intro Video Not Added

Hide intro video section.

Do not show empty cards.

Do not show placeholders publicly.

---

## Invalid Video Format

Convert to MP4.

---

## Video Exceeds 30 Seconds

Reject upload.

Show validation message.

---

## Video Exceeds 25 MB

Reject upload.

Show validation message.

---

## Deleted Intro Video

Remove block automatically.

---

# YouTube

## No YouTube Videos

Hide YouTube section.

---

## One Video

Display single card.

No carousel controls.

---

## Multiple Videos

Display carousel.

Enable navigation.

---

## Invalid YouTube URL

Reject save action.

---

## Deleted YouTube Video

Remove from carousel.

Recalculate positions.

---

# Instagram

## No Reels

Hide Instagram section.

---

## One Reel

Display single card.

---

## Multiple Reels

Display horizontal scrolling layout.

---

## Invalid Reel URL

Reject save action.

---

# Links

## No Links

Show empty state inside Builder.

Hide section publicly.

---

## Deleted Link

Reorder remaining links automatically.

---

## Invalid URL

Prevent saving.

---

## Duplicate URLs

Allowed.

Many creators may intentionally reuse links.

---

# Gallery

## Empty Gallery

Hide gallery section.

---

## One Image

Display single item.

---

## Multiple Images

Display horizontal scroll.

---

## One Video

Display single media item.

---

## Mixed Content

Maintain upload order.

---

## Deleted Media

Remove instantly.

Update preview.

---

# Spotify

## Spotify Not Added

Hide Spotify block.

---

## Invalid Spotify URL

Reject save.

---

# Analytics

## New User

Display empty state.

Do not display fake numbers.

---

## No Visitors

Display zero values.

---

## No Link Clicks

Display zero CTR.

---

## Analytics Loading Failure

Show retry action.

---

# Domains

## Username Already Taken

Block creation.

---

## Slug Already Taken

Block creation.

---

## Reserved Slugs

Prevent usage.

Examples:

- admin
- api
- dashboard
- settings
- login
- signup

---

## Empty Slug

Generate from username.

---

# Themes

## No Theme Selected

Apply default Aerix theme.

---

## Custom Background Missing

Use selected color.

---

## Invalid Image

Reject upload.

---

## Theme Deleted

Fallback to default theme.

---

# Storage

## User Exceeds 500 MB

Block uploads.

Show storage warning.

---

## Media Deleted

Storage recalculated immediately.

---

## Same File Used Multiple Times

Reuse existing Cloudflare URL.

Do not duplicate storage usage.

---

# Mobile

## Mobile Users

Every feature must work.

No desktop-only functionality.

---

## Small Screens

Preview becomes tab-based.

Editor and Preview separated.

---

# Publishing

## No Username

Cannot publish.

---

## No Content

Allow publishing.

Profile can contain only links.

---

## No Social Links

Allow publishing.

---

## No Media

Allow publishing.

---

## No Videos

Allow publishing.

---

# Principle

Never show empty blocks publicly.

If content does not exist:

Hide the section completely.

The public page should always feel intentional.
