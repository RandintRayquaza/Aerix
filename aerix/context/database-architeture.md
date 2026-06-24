# database-architecture.md

## Database

PostgreSQL

Provider:

Neon

ORM:

Drizzle

---

## Core Tables

### users

Stores account information.

Fields:

* id
* email
* username
* name
* image
* createdAt
* updatedAt

---

### profiles

Stores public profile data.

Fields:

* userId
* bio
* bannerImage
* profileImage
* slug
* themeId

---

### blocks

Stores builder configuration.

Fields:

* id
* userId
* type
* position
* enabled
* data

Block types:

* profile
* contact
* intro-video
* youtube
* instagram
* links
* gallery
* spotify
* text
* divider

---

### media

Stores media references.

Fields:

* id
* userId
* type
* sourceType
* url
* size
* duration

Source Types:

* upload
* external

Media Types:

* image
* video

---

### links

Stores user links.

Fields:

* id
* userId
* title
* url
* icon
* position

---

### analytics

Stores tracking events.

Fields:

* id
* userId
* eventType
* visitorId
* country
* device
* referrer
* createdAt

---

### themes

Stores theme configuration.

Fields:

* id
* userId
* backgroundColor
* backgroundImage
* accentColor
* textColor
* preset

---

## Builder Strategy

Use block-based architecture.

Blocks are rendered according to position.

Example:

[
Profile,
Contact,
Intro Video,
YouTube,
Instagram,
Links,
Gallery,
Spotify
]

This structure enables:

* Drag and Drop
* Reordering
* Easy Expansion
* Simpler Rendering

without database redesign.

---

## Media Storage Strategy

All uploaded media is stored in  ImageKit.

Images are served through Imagekit Images.

Duplicate media should reuse the same URL whenever possible.

Avoid storing identical assets multiple times.

---

## Limits

Total Account Storage:

500 MB

Intro Video:

* 30 seconds
* 25 MB

Gallery Video:

* 30 seconds
* 25 MB

Storage limits must be enforced at upload time.
