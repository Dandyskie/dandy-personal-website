# Task: Improve Hero Lanyard Component

## Objective

Improve the current Hero Lanyard component to achieve a premium, modern, interactive, and production-ready appearance similar to high-quality UI components found in shadcn/ui, Magic UI, Aceternity UI, React Bits, and other modern design systems.

The goal is **not** to replace the component entirely, but to enhance every visual and interaction aspect while keeping the original concept.

---

# Current Situation

The current Lanyard component already works.

However, visually it still feels:

- too plain
- lacks depth
- lacks premium feeling
- animation is still basic
- lighting is flat
- interaction feels mechanical
- doesn't feel like a modern portfolio hero

The final result should feel like a component that could be featured on:

- shadcn/ui
- React Bits
- Aceternity UI
- Magic UI
- Framer Showcase
- Awwwards portfolio

---

# Design Direction

Style:

- Premium
- Elegant
- Minimal
- Modern
- Interactive
- Apple-like
- Linear.app
- Vercel
- Stripe
- Framer

Avoid:

- childish
- excessive gradients
- colorful neon effects
- game-like appearance
- unnecessary decorations

Everything should feel intentional.

---

# Visual Improvements

Improve every part of the component.

## Card

Improve:

- border radius
- shadow
- glassmorphism effect (if suitable)
- border
- subtle inner highlight
- layered depth
- premium spacing
- responsive scaling

The card should feel like a real physical object.

---

## Lanyard String

Current rope animation feels static.

Improve by:

- smoother physics
- natural swinging
- realistic movement
- subtle inertia
- softer easing
- believable pendulum effect

Movement should never look robotic.

---

## Lighting

Add realistic lighting.

Ideas:

- soft highlight
- subtle reflection
- ambient shadow
- vignette
- light bloom
- edge lighting

Avoid strong glow.

---

## Hover Interaction

When user hovers:

Card should:

- slightly rotate
- slightly lift
- react to cursor position
- preserve realistic physics

Hover animation should be smooth.

No sudden movement.

---

## Mouse Interaction

Implement premium mouse tracking.

Ideas:

- parallax
- perspective
- subtle tilt
- dynamic shadow
- dynamic highlight

Movement should feel responsive but restrained.

---

## Animation

Review every animation.

Improve:

- easing
- duration
- spring physics
- transition consistency

Avoid:

- linear animations
- abrupt stops
- jitter

---

## Entrance Animation

When Hero loads:

Card should appear elegantly.

Ideas:

- fade
- slight upward motion
- subtle scale
- gentle swing
- opacity transition

Animation should feel cinematic.

---

## Background Integration

Make sure component blends naturally with Hero section.

Possible additions:

- subtle radial gradient
- soft light spot
- depth blur
- atmospheric lighting

Component should never feel detached.

---

## Shadows

Improve shadow system.

Use layered shadows instead of one large shadow.

Example:

- ambient shadow
- contact shadow
- soft floating shadow

---

## Typography

Review typography.

Improve:

- hierarchy
- spacing
- readability
- alignment
- weight consistency

---

## Avatar

Improve avatar presentation.

Possible improvements:

- better masking
- cleaner border
- subtle highlight
- realistic depth

---

## Performance

Animation must remain smooth.

Requirements:

- 60 FPS
- minimal re-render
- GPU accelerated transforms
- avoid layout thrashing
- optimize requestAnimationFrame usage
- avoid unnecessary React state updates

---

# Responsiveness

Component must work perfectly on:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

No clipping.

No overflow.

---

# Accessibility

Maintain accessibility.

Ensure:

- semantic HTML
- reduced motion support
- keyboard friendly if interactive
- good contrast
- proper aria labels when necessary

---

# Code Quality

Maintain:

- reusable architecture
- clean code
- readable variables
- modular functions
- minimal duplication

Avoid hacky fixes.

---

# Constraints

DO NOT:

- rewrite the component from scratch
- remove existing functionality
- introduce unnecessary dependencies
- overcomplicate the implementation

Prefer incremental improvements.

---

# Success Criteria

The component should feel comparable to premium interactive UI components from modern design systems.

A successful implementation should achieve:

- premium first impression
- realistic motion
- elegant interaction
- polished animations
- excellent responsiveness
- clean architecture
- production-ready quality

If any animation or visual detail feels unfinished, continue refining until the component reaches a showcase-level quality suitable for a professional developer portfolio.

# Example Component

import Lanyard from './Lanyard'

<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

// Pass custom images for the card's front/back faces and/or the lanyard band.
// frontImage and backImage render independently; imageFit keeps aspect ratio.
// lanyardWidth widens the band so a custom band image has more room.
<Lanyard
  position={[0,0,24]}
  gravity={[0,-40,0]}
  frontImage="/my-front.png"
  backImage="/my-back.png"
  imageFit="cover"
  lanyardImage="/my-band.png"
  lanyardWidth={1}
/>

/* IMPORTANT INFO BELOW

1. You MUST have the card.glb and lanyard.png files in your project and import them
- these can be downloaded from the repo's files, under src/assets/lanyard

2. You can edit your card.glb file in this online .glb editor and change the texture:
- https://modelviewer.dev/editor/
- alternatively, pass the "frontImage" / "backImage" props to swap the card's faces at runtime

4. The png file is the texture for the lanyard's band and can be edited in any image editor

5. Your Vite configuration must be updated to include the following in vite.config.js:
assetsInclude: ['**/*.glb']

6. For TS users, you might need these changes:

- src/global.d.ts
export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';
*/