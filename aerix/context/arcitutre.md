# architecture.md

## Overview

Aerix is a personal identity platform built using Next.js App Router.

The platform consists of:

* Marketing Website
* Authentication System
* Dashboard Application
* Public Profile Pages

Architecture follows a modern server-first approach using React Server Components wherever possible.

---

# Application Areas

## Marketing

Purpose:

Convert visitors into users.

Routes:

```text
/
```

Contains:

* Landing Page
* Features
* CTA
* Authentication Links

Reference:

```text
context/designs/landing.png
```

---

## Authentication

Purpose:

User registration and login.

Routes:

```text
/sign-in
/sign-up
/onboarding
```

Authentication Methods:

* Email + Password
* Google OAuth

Provider:

* Better Auth

Reference:

```text
context/designs/auth.png
context/designs/onboarding.png
```

---

## Dashboard

Purpose:

Manage creator profile.

Routes:

```text
/dashboard
/dashboard/builder
/dashboard/themes
/dashboard/analytics
/dashboard/library
/dashboard/domains
/dashboard/settings
```

Reference Designs:

```text
builder.png
analytics.png
media.png
domain.png
settings.png
```

---

## Public Profiles

Purpose:

Display creator identity pages.

Routes:

```text
/[slug]
```

Examples:

```text
aerix.live/aryan
aerix.live/design
```

Reference:

```text
profile.png
```

---

# Folder Structure

src/

app/

(marketing)

(auth)

dashboard

[slug]

api

components

lib

hooks

store

types

constants

---

# Data Flow

Visitor

↓

Public Profile

↓

Analytics Event

↓

Database

---

User

↓

Dashboard

↓

Database

↓

Storage

↓

Public Profile

---

# Storage Flow

Upload

↓

Cloudflare R2

↓

Cloudflare Images

↓

Database URL

↓

Profile Rendering

---

# Theme Flow

Theme Selection

↓

Database

↓

Public Page

↓

Live Preview

---

# Analytics Flow

Profile View

↓

Event Capture

↓

Database

↓

Analytics Dashboard

---

# Mobile First Rule

All functionality must work on mobile.

Desktop is an enhancement.

Mobile users must be able to:

* Build Pages
* Upload Media
* Edit Themes
* Manage Domain
* Publish Profile

without requiring desktop access.
