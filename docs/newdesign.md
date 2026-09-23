# Portfolio Redesign --- Design Specification

## 1. Project Direction

This document defines the UI/UX redesign direction for Dandy's personal
portfolio.

The existing content and functionality are retained. The redesign
focuses on visual hierarchy, layout, responsive behavior, typography,
motion, and consistency.

### Goals

-   Clean, friendly, personal, professional.
-   Preserve the white, blue, and gray identity.
-   Reduce visual clutter and unnecessary cards.
-   Make projects and experience easier to scan.
-   Make the website feel like one cohesive product.
-   Use animation as supporting interaction, not decoration.
-   Keep existing React content and business logic where possible.

### Visual Direction

**Soft Minimalist + Editorial + Modern Tech + Personal**

The visual language should feel calm, creative, modern, human, and
slightly futuristic without becoming cyberpunk.

Avoid excessive glassmorphism, neon, gradients, glow, rounded cards,
dashboard-like layouts, floating decorations, or animation on every
element.

------------------------------------------------------------------------

## 2. Information Architecture

The portfolio is a single-page application with anchor-based section
navigation.

1.  Home
2.  About
3.  Experience
4.  Projects
5.  Gallery
6.  Moments
7.  Services
8.  Contact

Services is a shortcut to the separate company-profile website
containing website-development services and pricing.

Recommended structure:

-   `/` --- portfolio SPA
-   External service website --- linked from Services CTA

No Blog or custom portfolio 404 page is required unless the application
architecture needs one.

------------------------------------------------------------------------

## 3. Color System

``` text
Background:      #F7F8F6
Surface:         #FFFFFF
Primary Text:    #111318
Secondary Text:  #6B7280
Muted Text:      #9CA3AF
Border:          #E5E7EB
Blue Accent:     #1683FF
Soft Blue:       #EAF5FF
Dark Surface:    #111318
```

Recommended visual ratio:

``` text
70–80%  Off-white / white
10–15%  Neutral gray
5–10%   Blue
Small amount of dark surface
```

Rules:

-   Off-white is the primary page background.
-   White is used for surfaces.
-   Gray is used for supporting information and borders.
-   Blue is an accent, not the dominant color.
-   Use blue for links, selected states, availability indicators, subtle
    decoration, and important CTAs.
-   Do not introduce additional accent colors without a clear reason.

------------------------------------------------------------------------

## 4. Typography

Use one clean sans-serif as the primary UI font. An optional
serif/italic font may be used only as a small editorial accent.

### Desktop

``` text
Hero / Display:   72–112px, weight 500–700, line-height 0.95–1.05
Section heading:  48–72px,  weight 500–650, line-height 1.0–1.1
Subheading:       20–28px,   weight 400–500
Body:             16–18px,   line-height 1.6–1.75
Metadata:         12–14px,   weight 400–500
```

### Mobile

``` text
Hero / Display:   42–64px
Section heading:  34–44px
Subheading:       18–22px
Body:             15–17px
Metadata:         12–14px
```

Do not use many font families. Typography should provide most of the
visual hierarchy.

------------------------------------------------------------------------

## 5. Layout System

### Desktop

``` text
max-width: 1200–1280px
horizontal padding: 24–64px
section spacing: 120–180px
12-column grid
```

Use content-driven heights rather than making every section full-screen.

### Tablet

``` text
padding: 24–40px
section spacing: 96–128px
```

Collapse columns when content becomes cramped.

### Mobile

``` text
padding: 20px
section spacing: 72–104px
single-column by default
```

Mobile is a separate composition, not merely a scaled desktop version.

------------------------------------------------------------------------

# 6. Navigation

### Desktop

``` text
DANDY / BRAND     Home About Experience Projects Gallery Moments Contact     [Let's Talk]
```

Rules:

-   Keep the navbar visually quiet.
-   Use a subtle surface or blur over the hero if necessary.
-   Active navigation may use blue or a small indicator.
-   Keep CTA compact.

### Mobile

``` text
DANDY                                      [Menu]
```

Use a Sheet-style navigation.

Items:

``` text
Home
About
Experience
Projects
Gallery
Moments
Services
Contact
```

Close the menu after navigation.

------------------------------------------------------------------------

# 7. Home / Hero

### Purpose

Communicate:

1.  Who Dandy is.
2.  What Dandy does.
3.  What the visitor should do next.

### Desktop

Recommended composition:

``` text
Available for work

Hi, I'm Dandy.

FRONTEND
DEVELOPER

I build clean, responsive and thoughtful
digital experiences for the web.

[View My Work]   [Let's Talk ↗]

                  [Portrait]
```

The portrait is the visual anchor.

Use one subtle blue radial glow behind it. Avoid multiple floating
cards.

### Mobile

``` text
Available for work

Hi, I'm Dandy.

Frontend
Developer

Short description

[View My Work]
[Let's Talk]

Portrait
```

Keep the portrait and CTA readable without excessive vertical height.

### React Bits

Preferred options:

-   `BlurText`
-   `SplitText`
-   `Staggered Text`

Use only one primary hero text animation.

------------------------------------------------------------------------

# 8. About

### Desktop

Use an editorial two-column composition:

``` text
/ABOUT

I build for the web,
with curiosity
and intention.

                         Personal story
                         and professional
                         introduction.

                         Selected stack
                         React
                         Next.js
                         TypeScript
                         Tailwind
```

Avoid a large grid of skill cards.

### Mobile

Stack the content:

``` text
/ABOUT

I build for the web,
with curiosity
and intention.

Personal introduction

Selected technologies
```

Keep the reading width comfortable.

------------------------------------------------------------------------

# 9. Experience

Do not make every experience a card.

### Desktop

Use an editorial list:

``` text
2026 — NOW       Freelance Web Developer
                 Description
                 Technologies

────────────────────────────────────────

2025 — 2026      Frontend Developer Intern
                 PT Edutech Digital Solution
                 Description
                 Technologies
```

### Mobile

``` text
2026 — NOW

Freelance Web Developer

Description

Technologies
```

### Animation

Use simple scroll reveal:

-   opacity
-   translateY
-   small stagger

Avoid aggressive timeline animation.

------------------------------------------------------------------------

# 10. Projects

Projects are the main proof of technical ability and should be one of
the strongest sections.

### Desktop

Use editorial hierarchy rather than a uniform card grid.

``` text
/SELECTED WORK

Selected projects I've built.

[Large Project Image]

Project Name
Category / Role

Short description

Next.js · React · Tailwind · etc.

[View Project ↗]
```

Supporting projects may use two columns.

Recommended visual rhythm:

``` text
Large
Large
Small + Small
Large
```

### Mobile

Every project becomes a vertical sequence:

``` text
Image
Project name
Category
Description
Tech stack
CTA
```

Prioritize image quality and metadata readability.

### Animation

Use:

-   image reveal
-   subtle scale
-   subtle translate
-   text reveal
-   desktop hover interaction

Avoid heavy 3D effects.

------------------------------------------------------------------------

# 11. Gallery

Gallery represents creative work outside normal software projects.

### Desktop

Use an asymmetric or masonry composition.

Do not turn every image into a card.

Example:

``` text
Large image       Small image
Large image       Small image

       Wide image
```

### Mobile

Use a simple single-column or controlled staggered grid.

### React Bits

Potential component:

-   `Masonry`

For entrance animation, prefer simple reveal/fade behavior.

------------------------------------------------------------------------

# 12. Moments

Moments makes the portfolio feel human.

Possible content:

-   Work setup
-   Learning
-   Events
-   Creative activities
-   Photography
-   Behind-the-scenes
-   Personal milestones

### Desktop

Use a visual-journal composition with photos, short captions, dates, and
notes.

### Mobile

Use a chronological or simple masonry-style feed.

Avoid heavy card styling.

------------------------------------------------------------------------

# 13. Services Shortcut

Do not duplicate the full pricing page inside the portfolio.

The portfolio only needs a clear shortcut.

### Desktop

``` text
NEED A WEBSITE?

I also build websites for
businesses and personal brands.

[Explore My Services ↗]
```

Use a soft blue background.

### Mobile

Center the content and use one prominent full-width CTA.

------------------------------------------------------------------------

# 14. Contact

### Desktop

``` text
/CONTACT

Let's build
something meaningful.

Have a project, idea,
or just want to say hello?

[Let's Talk ↗]

Email
WhatsApp
LinkedIn
GitHub
```

A contact form may appear beside or below the CTA if it already exists.

### Mobile

Priority:

1.  Heading
2.  Short message
3.  Primary CTA
4.  Contact channels
5.  Form if needed

Do not let the form dominate the page.

------------------------------------------------------------------------

# 15. Footer

Keep it minimal:

``` text
DANDY.RW

Frontend Developer

Home
About
Projects
Experience
Contact

GitHub
LinkedIn
WhatsApp

© 2026 Dandy Rama Wiguna
```

A subtle dark footer is acceptable.

Do not introduce another large dark section elsewhere.

------------------------------------------------------------------------

# 16. Animation System

Animation communicates hierarchy and interaction.

The website must still look good with animation disabled.

### Essential

-   Hero text reveal
-   Section reveal
-   Image reveal
-   Button hover
-   Navigation active state

### Supporting

-   Project image hover
-   Gallery reveal
-   Experience stagger
-   CTA reveal

### Decorative

-   Subtle parallax
-   Soft blue background movement
-   Small floating elements

Decorative animation must never compete with content.

------------------------------------------------------------------------

# 17. React Bits Usage

React Bits is an enhancement library, not the visual foundation.

Recommended current catalog choices for this design direction include:

### Hero

Use one:

``` text
BlurText
SplitText
Staggered Text
```

### Section headings

Use:

``` text
Scroll Reveal
```

only when a normal Framer Motion reveal is not enough.

### Gallery

Possible:

``` text
Masonry
```

when the image collection benefits from masonry.

### Avoid

Do not use decorative effects such as:

-   Glitch Text
-   Particle-heavy text
-   strong chromatic effects
-   excessive 3D
-   aggressive cursor effects

unless a section has a specific reason for them.

React Bits should enhance the design, not define the design.

------------------------------------------------------------------------

# 18. Framer Motion

Use Framer Motion for:

-   section entrance
-   project image movement
-   subtle parallax
-   hover interactions
-   CTA transitions
-   navigation transitions

Useful primitives include:

``` text
initial
animate
whileInView
transition
useScroll
useTransform
```

Do not create unnecessary global animation wrappers.

------------------------------------------------------------------------

# 19. Parallax

Parallax must be subtle.

### Desktop

Use approximately three visual depth layers:

``` text
Background layer     0.10x
Decorative layer     0.20x
Image layer          0.30x
Content              0x
```

Suggested locations:

### Hero

-   Blue glow
-   Portrait
-   Optional decorative element

### About

-   Large background typography
-   Small decorative element

### Projects

-   Image translate/scale

### Gallery

-   Different reveal timing

### Services

-   Soft blue background movement

Do not apply parallax to every element.

### Mobile

Reduce parallax heavily:

``` text
Background: disabled or very subtle
Images: subtle
Text: no parallax
Decorative elements: disabled
```

------------------------------------------------------------------------

# 20. Responsive Rules

## Desktop: 1024px+

-   12-column grid
-   Large typography
-   Two-column editorial layouts
-   Large project imagery
-   Horizontal navigation
-   Subtle parallax
-   Hover interactions
-   Custom cursor may be enabled

## Tablet: 768--1023px

-   Reduced typography
-   Simplified grid
-   Collapse cramped two-column sections
-   Reduce animation
-   Reduce image movement

## Mobile: \<768px

-   Single-column layouts
-   Sheet navigation
-   Controlled typography
-   Full-width CTAs
-   Minimal cards
-   Mostly disabled parallax
-   No custom cursor
-   Reduced decorative elements
-   Touch-friendly controls

------------------------------------------------------------------------

# 21. Accessibility

Support:

-   keyboard navigation
-   visible focus states
-   semantic headings
-   semantic buttons and links
-   meaningful alt text
-   sufficient contrast
-   reduced-motion preference

When `prefers-reduced-motion: reduce` is enabled:

-   disable parallax
-   reduce text animation
-   remove unnecessary transforms
-   keep content immediately readable

------------------------------------------------------------------------

# 22. Component Philosophy

Use components based on responsibility.

Recommended:

``` text
Navbar
SectionHeading
Hero
About
ExperienceTimeline
ProjectShowcase
Gallery
Moments
ServicesCTA
Contact
Footer
```

Avoid creating many visually similar components such as:

``` text
FancyCard
GlowCard
MagicCard
PremiumCard
AnimatedCard
```

unless they have genuinely different responsibilities.

------------------------------------------------------------------------

# 23. UI Library Rules

### shadcn/ui

Use for functional primitives:

-   Button
-   Sheet
-   Dialog
-   Tooltip
-   Badge
-   Separator
-   Input
-   Textarea
-   Form

Do not use a shadcn component simply because it exists. It must serve
the information architecture.

### React Bits

Use for selected visual and motion components.

### Framer Motion

Use for custom interaction and motion orchestration.

------------------------------------------------------------------------

# 24. Desktop vs Mobile Summary

  Area            Desktop                 Mobile
  --------------- ----------------------- -------------------------
  Navigation      Horizontal              Sheet menu
  Hero            Editorial composition   Stacked
  Typography      Large display type      Controlled scale
  About           Two-column              Single-column
  Experience      Editorial timeline      Stacked list
  Projects        Editorial grid          Single column
  Gallery         Masonry/asymmetric      Single/staggered grid
  Moments         Visual journal          Vertical feed
  Services        Centered CTA            Full-width CTA
  Contact         Optional two-column     Stacked
  Parallax        Subtle                  Mostly reduced/disabled
  Custom cursor   Optional                Disabled
  Hover effects   Enabled                 Tap states
  Animation       Moderate                Minimal
  Cards           Limited                 Minimal

------------------------------------------------------------------------

# 25. Final Design Principle

Follow this hierarchy:

``` text
CONTENT
   ↓
TYPOGRAPHY
   ↓
LAYOUT
   ↓
IMAGE
   ↓
INTERACTION
   ↓
DECORATION
```

Never reverse this hierarchy.

The portfolio should remain visually strong even when animation is
disabled.

The final experience should feel like:

**Dandy's personal portfolio --- clean, friendly, modern, creative,
technically capable, and intentionally designed.**
