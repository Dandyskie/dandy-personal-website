# Spec Design: Portfolio Multipage & Interactive Tech Upgrade

This document outlines the design specification for upgrading the personal portfolio website. The goal is to migrate from a single-page structure to a routed multipage website, integrate modern interactive styling, add fluid transitions using Framer Motion, and populate the portfolio with updated educational and internship data.

## 1. Product & Theme Identity
*   **Product Type**: Personal Portfolio Website
*   **Theme Concept**: Creative, Modern Technology
*   **Color Theme**: 
    *   **Light Mode**: Clean minimalist tech theme (light background `#fafafa`, deep dark text, vibrant blue accent `#1d4ed8`, subtle grid patterns).
    *   **Dark Mode (Cyber-Dark)**: Deep dark space-like theme (dark background `#020617`, off-white text, neon blue accents `#3b82f6` with glow effects, subtle transparent grid lines).
*   **Typography**:
    *   **Headings**: `Space Grotesk` (Google Font) - geometric, tech-focused, and highly modern.
    *   **Body**: `Archivo` (Google Font) - clean, readable, sans-serif.
    *   **Interactive Effects**: Dynamic character hover-shift, glowing headers, and interactive text scaling.

## 2. Architecture & Routing
The website will be converted to an SPA utilizing `react-router-dom` for route control and navigation:
*   `/` (Home): Contains Hero section with interactive text effects, main profile summary, and quick skills preview.
*   `/projects` (Projects): Grid layout showcasing projects. Clicking on cards reveals a narrative-based problem/solution detail panel.
*   `/experience` (Experience & Education): Timeline showcasing work experience and academic background.
*   `/contact` (Contact): A styled form and social media links.

### Page Transitions
*   Routes will be wrapped inside `<AnimatePresence mode="wait">` to handle exit animations.
*   Each route component will be wrapped in a Framer Motion container to transition using smooth fades and subtle directional slides:
    ```jsx
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* Page Content */}
    </motion.div>
    ```

## 3. Detailed Page Designs

### A. Navigation & Theme Toggle
*   A responsive sticky Navbar with active link indicators.
*   A theme toggle button that triggers state change from light to dark.
*   Navbar and toggle remain visible across all pages.
*   Transitions between themes will be smooth (using Tailwind utility class transition states).

### B. Home Page (`/`)
*   **Hero Section**: Text effect rendering name and profession.
*   **Summary Section**: Displays the user's primary summary text with micro-animations.
*   **Quick Links**: Bento Grid-like layout with interactive card lift leading to different sections of the website.

### C. Projects Page (`/projects`)
*   Grid of project cards with filtering options by category (e.g., Frontend, Backend, Fullstack).
*   Each project card features an interactive hover lift, border-glow, and a "Case Study" button.
*   **Narrative Flow (Problem & Solution)**:
    *   When the "Case Study" button is clicked, an overlay/modal opens.
    *   It lists:
        *   **The Challenge (Problem)**: Context on why it was built and what issues it addressed.
        *   **The Solution (Solution)**: How technology was applied to solve it.
        *   **Tech Stack**: Vector icons or modern badges listing key tools used.

### D. Experience & Education Page (`/experience`)
*   A vertical timeline with connected nodes.
*   **Internship Node**: Pt Edutech Digital Solution (Jun 2025 - Apr 2026), detailing contribution to Hospital and Library Information Systems.
*   **Education Node**: SMK Muhammadiyah 1 Sukoharjo (Jul 2023 - May 2026), focusing on PPLG, displaying the final grade (84.36/100) and focus areas.
*   Hovering over timeline nodes activates subtle glowing borders.

### E. Contact Page (`/contact`)
*   Modern input fields with label floating animation on focus.
*   Interactive submit button with click feedback.
*   Links to Git/GitHub, GitLab, and LinkedIn represented using crisp SVG/Lucide icons.

## 4. Design System Tokens (CSS Variables in index.css)
The following Tailwind config v4 variables will be updated:
```css
@theme {
  --color-base-dark: #020617;
  --color-base-light: #fafafa;
  --color-text-dark: #f8fafc;
  --color-text-light: #09090b;
  --color-accent-dark: #3b82f6;
  --color-accent-light: #1d4ed8;
  --font-space: "Space Grotesk", sans-serif;
  --font-archivo: "Archivo", sans-serif;
}
```

## 5. Verification Plan
*   **Navigation & Routing Test**: Confirm routes transition correctly and no broken routes exist.
*   **Responsive Test**: Validate layout at 375px (mobile), 768px (tablet), 1024px (desktop).
*   **Theme Switcher Test**: Toggle modes and verify background/text contrast meets WCAG 4.5:1 ratio.
*   **Framer Motion Test**: Ensure animations respect `prefers-reduced-motion` settings.
