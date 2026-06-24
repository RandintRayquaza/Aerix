# code-standards.md

## Core Rules

These rules apply across the entire codebase.

---

# React

Default:

Server Components

Only use:

```tsx
"use client"
```

when necessary.

Examples:

* Framer Motion
* Zustand
* Browser APIs
* File Uploads

---

# TypeScript

Avoid:

```ts
any
```

Always create proper types.

Use:

```ts
type
```

by default.

Use:

```ts
interface
```

only when extension is required.

---

# Components

One component per file.

Example:

```text
ProfileCard.tsx
ThemeCard.tsx
LinkCard.tsx
```

---

# Naming

Components:

```text
PascalCase
```

Variables:

```text
camelCase
```

Constants:

```text
UPPER_SNAKE_CASE
```

---

# Styling

Use:

Tailwind CSS v4

Avoid:

* Inline styles
* Custom CSS files

Unless absolutely necessary.

---

# Icons

Only:

Lucide React

Do not mix icon libraries.

---

# Forms

Use:

* React Hook Form
* Zod

for all forms.

---

# State Management

Global State:

Zustand

Server State:

TanStack Query

Do not use Context API for application state.

---

# Database

Use:

Drizzle ORM

All schema definitions belong in:

```text
src/lib/db
```

---

# Validation

Every:

* Form
* Upload
* API Route

must have validation.

---

# Upload Rules

Images:

Validate before upload.

Videos:

Validate:

* Type
* Duration
* File Size

before upload.

---

# Design Consistency

Follow:

```text
context/ui-tokens.md
context/ui-rules.md
```

Reference Designs:

```text
context/designs/*
```

If design conflicts occur:

Reference image wins.

---

# Documentation Rule

After implementing any feature:

Update:

* project-overview.md
* edge-cases.md
* relevant documentation

Documentation is part of development.

Not a separate task.
