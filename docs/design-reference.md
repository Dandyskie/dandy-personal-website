# 🎨 Design Reference — Portfolio Website

> Dokumen ini berisi analisis desain lengkap dari website portfolio referensi (Elian Ross — Product Designer) beserta mapping ke implementasi saat ini (Dandy.dev). Gunakan sebagai panduan prompt, color palette, tipografi, dan detail desain saat membangun atau merevisi website.

---

## 1. Overview & Design Philosophy

### 🔗 Website Referensi: Elian Ross — Product Designer Portfolio

**Gaya Desain:** Modern Editorial / Clean Corporate dengan sentuhan organic
**Mood:** Professional, warm, approachable, high-end agency feel
**Pendekatan:** Content-first layout, tipografi besar yang dominan, whitespace luas, dan elemen visual yang terstruktur rapi dalam grid/section-based layout

**Karakter Utama:**
- Layout berbasis **section-by-section** dengan separasi visual yang jelas
- Menggunakan **large typography** sebagai elemen desain utama (bukan dekorasi)
- **Foto portrait** sebagai hero visual — bukan ilustrasi/3D
- Kombinasi **rounded cards** dengan **sharp grid structure**
- **Lime/chartreuse green** sebagai warna aksen yang energetik dan unik
- **Black & white** sebagai fondasi netral
- Penggunaan **numbered steps** (01, 02, 03) untuk visual storytelling

---

## 2. Color Palette

### 🎯 Referensi (Elian Ross)

| Nama | Hex | Penggunaan |
|------|-----|------------|
| **Background Utama** | `#F5F5F0` | Warm off-white/cream, seluruh page background |
| **Background Sekunder** | `#FFFFFF` | Card backgrounds, content containers |
| **Background Dark Section** | `#1A1A1A` / `#0D0D0D` | Footer section "Let's Make It Happen", statistik area |
| **Teks Utama** | `#1A1A1A` / `#0D0D0D` | Headings, body text utama |
| **Teks Sekunder** | `#6B6B6B` / `#8A8A8A` | Subheadings, deskripsi, label |
| **Aksen Utama (Lime/Chartreuse)** | `#C8E64A` / `#D4F34A` | Accent badges, highlight areas, gradient bands, CTA background |
| **Aksen Gradient Start** | `#B8D93A` | Gradient band kiri |
| **Aksen Gradient End** | `#E8F87A` | Gradient band kanan |
| **CTA Button** | `#1A1A1A` (dark) | "Let's Talk" button — dark on light, simple |
| **Card Border** | `#E5E5E5` / `#D4D4D4` | Subtle borders pada cards |
| **Divider Lines** | `#E0E0E0` | Section separators |

#### Gradient Aksen (Lime Band)

```css
/* Gradient band horizontal yang muncul di hero dan section headers */
background: linear-gradient(90deg, #B8D93A 0%, #C8E64A 40%, #E8F87A 100%);
```

#### Skema Warna Keseluruhan

```
┌─────────────────────────────────────────────┐
│  Warm Cream (#F5F5F0)     ← Page BG        │
│  ┌───────────────────────────────────────┐  │
│  │  White (#FFFFFF)       ← Cards       │  │
│  │  Lime (#C8E64A)        ← Accents     │  │
│  │  Black (#1A1A1A)       ← Text/CTA    │  │
│  └───────────────────────────────────────┘  │
│  Dark (#0D0D0D)           ← Footer Section  │
└─────────────────────────────────────────────┘
```

### 🏗️ Implementasi Saat Ini (Dandy.dev)

| Token | Light | Dark | Catatan |
|-------|-------|------|---------|
| `--bg-app` | `#fafafa` | `#020617` | Cool gray vs warm cream referensi |
| `--text-main` | `#09090b` | `#f8fafc` | Hampir pure black / pure white |
| `--text-muted` | `#71717a` | `#94a3b8` | Zinc / Slate muted |
| `--border-custom` | `rgba(9,9,11,0.08)` | `rgba(255,255,255,0.08)` | Very subtle |
| `--card-bg` | `rgba(255,255,255,0.7)` | `rgba(15,23,42,0.4)` | Glassmorphism translucent |
| `--color-primary` | `#3b82f6` | `#3b82f6` | Blue-500 (Tailwind) |
| `--color-primary-hover` | `#2563eb` | `#2563eb` | Blue-600 |
| `--color-accent` | `#38bdf8` | `#38bdf8` | Sky-400 |

> **Perbedaan Kunci:** Referensi memakai warm cream + lime green. Implementasi saat ini memakai cool dark + electric blue. Pendekatan berbeda tapi keduanya valid — referensi lebih editorial/warm, implementasi lebih tech/cyber.

---

## 3. Typography

### 🎯 Referensi (Elian Ross)

| Elemen | Font Family | Weight | Size (est.) | Style |
|--------|-------------|--------|-------------|-------|
| **Hero Heading** | Serif (Playfair Display / DM Serif) | Bold/Black | 64–80px | Italic pada "Product Designer" |
| **Section Headings** | Serif | Bold | 40–56px | Normal case |
| **Subheadings** | Sans-serif (Inter / DM Sans) | Medium | 18–24px | Uppercase tracking, muted color |
| **Body Text** | Sans-serif (Inter / DM Sans) | Regular | 16–18px | 1.6 line-height, muted color |
| **Labels / Badges** | Sans-serif | Semibold | 12–14px | Uppercase, wide letter-spacing |
| **Step Numbers** | Serif | Bold | 48–72px | "01", "02", "03" — besar, dekoratif |
| **Nav Links** | Sans-serif | Medium | 14–16px | Subtle, clean |
| **Footer Giant Text** | Serif | Black | 100–200px+ | Ultra-large decorative name "Elian Ross" |
| **Stats Numbers** | Sans-serif / Mono | Bold | 24–32px | Tabular figures |

#### Karakteristik Tipografi Referensi
- **Serif + Sans-serif pairing**: Serif untuk headings (editorial feel), sans-serif untuk body/UI
- **Italic sebagai emphasis**: "Product Designer" ditulis italic untuk diferensiasi visual
- **Numbered steps sangat besar**: 01, 02, 03 dengan ukuran display sebagai visual anchor
- **Footer name ultra-besar**: Nama "Elian Ross" sebagai typographic statement/brand mark
- **Consistent hierarchy**: Clear size jumps antara heading levels

### 🏗️ Implementasi Saat Ini (Dandy.dev)

| Elemen | Font Family | Weight | Size | Notes |
|--------|-------------|--------|------|-------|
| **Headings (h1–h6)** | Space Grotesk | Bold/Black | `text-4xl` – `text-6xl` | `letter-spacing: -0.02em` |
| **Body Text** | Archivo | Regular | `text-base` – `text-lg` | Line-height: relaxed |
| **Labels / Badges** | Space Grotesk | Bold | `text-xs` | Uppercase, tracking-wider |
| **Mono / Code** | System mono | Semibold | `text-[10px]` – `text-xs` | Badge IDs, tech info |
| **Nav Links** | Space Grotesk | Medium/Semibold | `text-sm` – `text-lg` | Clean, minimal |

#### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

| Font | Role | Character |
|------|------|-----------|
| **Space Grotesk** | Headings, nav, labels | Geometric sans-serif, techy |
| **Archivo** | Body, paragraf | Grotesque, highly readable |

> **Perbedaan Kunci:** Referensi pakai **serif heading** (editorial/luxury). Implementasi pakai **geometric sans-serif** (tech/modern). Jika ingin mendekati referensi, pertimbangkan serif seperti Playfair Display, DM Serif Display, atau Lora untuk headings.

---

## 4. Layout & Structure

### 🎯 Referensi — Section Breakdown

```
┌──────────────────────────────────────────────────────┐
│ NAVBAR                                                │
│ [Logo: "Elian Ross"]  [Home] [Projects] [About] [☰]  │
├──────────────────────────────────────────────────────┤
│                                                       │
│ HERO SECTION                                          │
│ ┌─────────────────────────────────────────────────┐  │
│ │  [Badge: UX/UI / Imagination of Perfection]     │  │
│ │                                                  │  │
│ │  Hi I'm Elian                                    │  │
│ │  Product Designer                                │  │
│ │                                                  │  │
│ │  [▶ Let Me Introduce MySelf]   [Tagline kanan]  │  │
│ │                                                  │  │
│ │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │  │
│ │  │Stats│ │Stats│ │Stats│ │Stats│               │  │
│ │  └─────┘ └─────┘ └─────┘ └─────┘               │  │
│ │                                                  │  │
│ │  ╔═══════════════════════════════════════════╗   │  │
│ │  ║  LIME GRADIENT BAND                      ║   │  │
│ │  ║  [Portrait Photo]  [Screenshot cards]    ║   │  │
│ │  ╚═══════════════════════════════════════════╝   │  │
│ └─────────────────────────────────────────────────┘  │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ ABOUT / FOCUS SECTION                                 │
│ ┌──────────────────┬──────────────────────────────┐  │
│ │  [Small photo]   │  "...focus is on blending    │  │
│ │                  │   clear strategy, thoughtful  │  │
│ │                  │   design, and user empathy    │  │
│ │                  │   to craft experiences        │  │
│ │                  │   that solve real problems"   │  │
│ └──────────────────┴──────────────────────────────┘  │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ "HOW IT WORKS" SECTION                                │
│                                                       │
│        01              02              03             │
│     Discover         Design          Deliver          │
│  [Description]    [Description]   [Description]       │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ SELECTED WORKS SECTION                                │
│ ┌───────────────┐  ┌───────────────┐                 │
│ │  Project Card │  │  Project Card │                 │
│ │  [Screenshot] │  │  [Screenshot] │                 │
│ │  [Title]      │  │  [Title]      │                 │
│ └───────────────┘  └───────────────┘                 │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ STATS / PUSHING BOUNDARIES SECTION                    │
│ ┌─────────────────────────────────────────────────┐  │
│ │  "Pushing Boundaries since 2011"                │  │
│ │                                                  │  │
│ │  ┌──────────────┐  [Stats Grid]                 │  │
│ │  │ Phone mockup │  Happy Clients: 200+          │  │
│ │  │              │  Project Success: 500+         │  │
│ │  │              │  Total Portfolio: 1,400+       │  │
│ │  └──────────────┘  Total Review: 800+           │  │
│ └─────────────────────────────────────────────────┘  │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│ CTA / FOOTER SECTION (Dark Background)                │
│ ┌─────────────────────────────────────────────────┐  │
│ │  "Let's Make It Happen"                          │  │
│ │  [Hire Me button]                                │  │
│ │                                                  │  │
│ │  [Nav links]  [Social links]                     │  │
│ │                                                  │  │
│ │  ╔═══════════════════════════════════════════╗   │  │
│ │  ║     E l i a n   R o s s                  ║   │  │
│ │  ║     (ultra-large serif footer branding)  ║   │  │
│ │  ╚═══════════════════════════════════════════╝   │  │
│ └─────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

### 🏗️ Implementasi Saat Ini (Dandy.dev) — Page Structure

| Page | Route | Sections |
|------|-------|----------|
| **Home** | `/` | Navbar → Loading Screen → Hero (Lanyard Card) → Summary Card → GitHub Grid → Bento Links |
| **Projects** | `/projects` | Navbar → Page Header → Tab Filter → Project Cards Grid → Case Study Modal |
| **Experience** | `/experience` | Navbar → Page Header → Timeline (Work + Edu) → Skills Sidebar |
| **Contact** | `/contact` | Navbar → Page Header → Info Column → Form Column |

---

## 5. Component Design Details

### 5.1 Navbar

| Aspek | Referensi | Implementasi |
|-------|-----------|--------------|
| **Posisi** | Fixed top, transparent | Fixed top, glassmorphism on scroll |
| **Logo** | "Elian Ross" — serif, simple | "Dandy.dev" — Space Grotesk, `.dev` di-highlight primary |
| **Nav Items** | Home, Projects, About, Contact | Home, Projects, Experience, Contact |
| **Fitur Khusus** | Hamburger menu | Smart hide/reveal on scroll, scroll progress bar, Cmd+K palette, theme toggle |
| **Style** | Minimal, blends with background | Glassmorphism dengan blur 12px |

### 5.2 Hero Section

| Aspek | Referensi | Implementasi |
|-------|-----------|--------------|
| **Layout** | Full-width, foto portrait besar + teks | 2-column: teks kiri + Lanyard Card kanan |
| **Visual Utama** | Portrait photo natural pose, tidak cropped | 3D interactive Lanyard ID Card (draggable, flippable) |
| **Heading Style** | Serif italic, 64–80px | Sans-serif bold, `text-4xl` – `text-6xl` |
| **Subheading** | "Product Designer" italic serif | "Junior Frontend Developer" bold muted |
| **CTA** | Video play button "Let Me Introduce MySelf" | "View Projects" pill + "Contact Me" outlined pill |
| **Accent** | Lime gradient band melintang horizontal | Radial blue gradient lighting |
| **Stats Row** | 4 stat badges inline di hero | GitHub/LinkedIn/Email icon links |
| **Unique Element** | Lime gradient band + screenshot carousel | Lanyard string SVG physics simulation |

### 5.3 Cards

| Aspek | Referensi | Implementasi |
|-------|-----------|--------------|
| **Border Radius** | `16–24px` rounded | `rounded-xl` / `rounded-2xl` (12–16px) |
| **Border** | Subtle `1px solid #E5E5E5` | `1px solid var(--border-custom)` transparent |
| **Shadow** | Soft, subtle drop shadow | Minimal, hover glow `rgba(59,130,246,0.08)` |
| **Background** | Solid white `#FFFFFF` | Glassmorphism translucent `rgba(255,255,255,0.7)` |
| **Hover Effect** | Subtle lift | `y: -5`, `scale: 1.01`, glow shadow, border highlight |
| **Inner Grid** | Clean sections with separators | Stats rows with border separators |

### 5.4 Project Cards

| Aspek | Referensi | Implementasi |
|-------|-----------|--------------|
| **Layout** | Full-width screenshot + title below | Aspect-video screenshot + metadata below |
| **Image Treatment** | Clean screenshot, minimal overlay | Screenshot + gradient overlay `from-slate-950/40` |
| **Label** | Minimal category label | "CASE STUDY" mono label dengan icon |
| **Tags** | Simple text labels | Pill badges `bg-primary/10 text-primary` |
| **Action** | Click to view case study | "Read Case Study →" + GitHub/Demo links |

### 5.5 Process Steps (Referensi Only)

Referensi punya section "Here's How It Works" dengan 3 langkah bernomor besar:

| Step | Number | Title | Style |
|------|--------|-------|-------|
| 01 | Display serif 48–72px | Discover | Large number + description card |
| 02 | Display serif 48–72px | Design | Elevated/featured (slightly larger) |
| 03 | Display serif 48–72px | Deliver | Large number + description card |

> **Catatan:** Implementasi saat ini tidak punya section ini. Bisa ditambahkan sebagai section "How I Work" atau "My Process".

### 5.6 Footer / CTA

| Aspek | Referensi | Implementasi |
|-------|-----------|--------------|
| **Background** | Dark `#0D0D0D` / `#1A1A1A` | Tidak ada dedicated footer |
| **Headline** | "Let's Make It Happen" serif besar | N/A (ada di ContactPage sebagai "Let's Connect") |
| **CTA Button** | "Hire Me" centered button | Form-based contact |
| **Brand Mark** | "Elian Ross" ultra-large serif (100–200px+) | N/A |
| **Nav Links** | Home, Blog, Skills, etc. di footer | N/A |

---

## 6. Spacing & Grid System

### 🎯 Referensi

| Aspek | Value |
|-------|-------|
| **Max Content Width** | ~1200–1440px |
| **Section Padding** | `80–120px` vertikal, `40–80px` horizontal |
| **Card Gap** | `24–32px` |
| **Internal Card Padding** | `24–40px` |
| **Grid Columns** | 2-column untuk projects, 3-column untuk steps |
| **Spacing Scale** | Konsisten 8px base: 8, 16, 24, 32, 40, 48, 64, 80, 120 |

### 🏗️ Implementasi

| Aspek | Value |
|-------|-------|
| **Max Content Width** | `max-w-6xl` (1152px) untuk main, `max-w-7xl` (1280px) untuk nav |
| **Main Padding** | `pt-28 pb-16 px-6` |
| **Section Gap** | `gap-12` / `gap-8` / `gap-6` |
| **Card Gap** | `gap-6` |
| **Internal Card Padding** | `p-6` / `p-8` |
| **Grid Columns** | `grid-cols-1 md:grid-cols-2` responsive |

---

## 7. Effects & Visual Treatments

### 🎯 Referensi

| Effect | Deskripsi |
|--------|-----------|
| **Lime Gradient Band** | Horizontal band melintasi hero section, gradient dari hijau tua ke kuning-hijau terang |
| **Photo Treatment** | Foto portrait natural, kadang sedikit desaturated, tepi membulat |
| **Screenshot Cards** | Multiple device/screen screenshots bertumpuk dalam hero |
| **Subtle Shadows** | Box shadow sangat halus pada cards |
| **Section Transitions** | Smooth scroll antar section, content reveal |
| **Number Decoration** | Angka besar 01, 02, 03 sebagai elemen dekoratif |
| **Dark Footer Contrast** | Transisi tegas dari light sections ke dark footer |

### 🏗️ Implementasi

| Effect | Deskripsi |
|--------|-----------|
| **Glassmorphism** | `backdrop-filter: blur(12px)` + translucent bg + subtle border |
| **Grid Pattern** | 40×40px grid lines sebagai background pattern |
| **Radial Lighting** | Blue radial gradient from top center |
| **Wave Animation** | SVG wave lines yang beranimasi pelan |
| **3D Lanyard Card** | Drag-interactive card dengan physics spring, flip, tilt |
| **Mobile Neon Card** | Conic gradient spinning border + glow |
| **Scroll Reveal** | 8 variant: fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out, flip-up, spring-up |
| **Hover Interactions** | y-lift, scale, glow shadow, border color change |
| **Text Glow** | `text-shadow: 0 0 15px rgba(59,130,246,0.4)` |
| **Progress Bar** | 1px blue bar di top saat scroll |

---

## 8. Animation & Motion System

### 🎯 Referensi — Implied Animations

| Element | Motion |
|---------|--------|
| Page scroll | Smooth scroll-behavior |
| Content sections | Scroll-triggered reveal |
| Cards | Subtle hover lift |
| Numbers | Possible counter animation |
| Overall | Restrained, professional motion |

### 🏗️ Implementasi — Framer Motion System

#### Spring Configurations

| Context | Stiffness | Damping | Mass | Purpose |
|---------|-----------|---------|------|---------|
| **Hero Entry** | 70 | 14 | 0.7 | Smooth content slide-in |
| **Card Entry** | 50 | 12 | 0.8 | Gentle card appearance |
| **Hover Feedback** | 300 | 20 | — | Snappy interactive response |
| **Card Tilt** | 120 | 20 | 1.1 | Natural lanyard physics |
| **Scroll Reveal** | 85 | 13 | 0.7 | Balanced reveal animation |
| **Mobile Menu** | 200 | 25 | — | Quick drawer slide |
| **Lanyard Pendulum** | 75 | 10 | 1.3 | Heavy pendulum swing on load |

#### Animation Durations

| Type | Duration | Notes |
|------|----------|-------|
| Page transition | 300ms | Fade + translate |
| Theme transition | 300ms | BG + color ease |
| Hover transitions | 300ms | Color, border, shadow |
| Wave background | 15–25s | Ultra-slow ambient |
| Mobile card float | 4s | Gentle y-axis bob |
| Card pulse | 3s | Subtle scale pulse |
| Spinner rotation | 1–1.5s | Loading screen |
| Neon border spin | 4s | Conic gradient rotation |

---

## 9. Responsive Breakpoints

### Implementasi

| Breakpoint | Tailwind Class | Behavior |
|------------|---------------|----------|
| **Mobile** | default (<768px) | Single column, mobile card, hamburger menu, drawer nav |
| **Tablet** | `md:` (≥768px) | 2-column grids, desktop nav visible |
| **Desktop** | `lg:` (≥1024px) | Full 2-column hero, lanyard card visible, 3-column experience grid |

---

## 10. Icon System

### 🏗️ Implementasi

| Library | Icons Used |
|---------|-----------|
| **Lucide React** | ArrowRight, Sparkles, Mail, Sun, Moon, Search, Menu, X, ExternalLink, GitBranch, FolderOpen, Calendar, Briefcase, GraduationCap, Send, Compass, Clipboard |
| **Custom SVG** | GitHub icon, LinkedIn icon (inline SVGs) |
| **Style** | Stroke icons, `strokeWidth: 2.2`, sizes `w-3.5 h-3.5` to `w-6 h-6` |

---

## 11. Design Tokens Summary

### Semantic Token Map

```css
/* === FOUNDATIONS === */
--font-heading:    "Space Grotesk", sans-serif;
--font-body:       "Archivo", sans-serif;

/* === LIGHT MODE === */
--bg-app:          #fafafa;
--text-main:       #09090b;
--text-muted:      #71717a;
--border-custom:   rgba(9, 9, 11, 0.08);
--card-bg:         rgba(255, 255, 255, 0.7);

/* === DARK MODE === */
--bg-app:          #020617;     /* slate-950 */
--text-main:       #f8fafc;     /* slate-50 */
--text-muted:      #94a3b8;     /* slate-400 */
--border-custom:   rgba(255, 255, 255, 0.08);
--card-bg:         rgba(15, 23, 42, 0.4);

/* === BRAND === */
--color-primary:       #3b82f6;  /* blue-500 */
--color-primary-hover: #2563eb;  /* blue-600 */
--color-accent:        #38bdf8;  /* sky-400 */

/* === EFFECTS === */
--grid-color-light:    rgba(9, 9, 11, 0.03);
--grid-color-dark:     rgba(255, 255, 255, 0.02);
--grid-size:           40px;
--blur-glassmorphism:  12px;
--glow-primary:        rgba(59, 130, 246, 0.4);
--glow-status:         rgba(16, 185, 129, 0.6);  /* emerald pulse */
```

---

## 12. Tech Stack

### 🏗️ Implementasi

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.2.0 |
| **Bundler** | Vite | 7.3.1 |
| **Styling** | Tailwind CSS (v4) | 4.2.1 |
| **Animation** | Framer Motion | 12.42.2 |
| **Routing** | React Router DOM | 7.18.1 |
| **Icons** | Lucide React | 1.25.0 |
| **Fonts** | Google Fonts (Space Grotesk + Archivo) | — |

---

## 13. Key Design Differences: Referensi vs Implementasi

| Aspek | Referensi (Elian Ross) | Implementasi (Dandy.dev) |
|-------|------------------------|--------------------------|
| **Tone** | Warm, editorial, agency | Cool, techy, cyber |
| **Color Scheme** | Cream + lime green | Dark blue + electric blue |
| **Typography** | Serif + sans-serif pairing | Dual sans-serif (geometric) |
| **Hero Visual** | Portrait photo + screenshot gallery | 3D Interactive lanyard card |
| **Card Style** | Solid white, subtle shadow | Glassmorphism, translucent |
| **Background** | Clean, warm off-white | Grid pattern + wave SVG + radial glow |
| **Dark Mode** | Only footer section | Full dark mode (default) |
| **Process Section** | 3-step numbered flow | Not implemented |
| **Footer** | Giant typographic name + dark CTA | Not implemented (pages end naturally) |
| **Interaction** | Minimal, professional | Heavy physics (drag, tilt, spring) |
| **Stats Display** | Counters in hero | GitHub contribution grid |
| **Mobile Hero** | Same photo scaled | Dedicated neon glow card component |

---

## 14. Prompt untuk Mereproduksi Design Referensi

Jika ingin membuat website serupa dari nol, gunakan prompt berikut:

```
Buatkan website portfolio personal satu halaman (single page) untuk seorang 
Product Designer / Web Developer dengan gaya desain berikut:

GAYA VISUAL:
- Modern editorial / clean corporate
- Warm color palette: cream/off-white background (#F5F5F0), 
  lime/chartreuse green aksen (#C8E64A), teks gelap (#1A1A1A)
- Tipografi: Serif untuk headings (Playfair Display atau DM Serif Display), 
  sans-serif untuk body (Inter atau DM Sans)
- Whitespace luas, layout section-based
- Cards putih bersih dengan rounded corners 16-24px dan subtle shadow
- Footer gelap (#0D0D0D) dengan tipografi nama ultra-besar sebagai branding

SECTIONS (urut dari atas):
1. Navbar fixed — logo teks + nav links (Home, Projects, About, Contact)
2. Hero — heading besar "Hi I'm [Nama], Product Designer" (serif italic), 
   foto portrait natural, video play CTA, 4 stat badges, lime gradient band 
   horizontal dengan screenshot gallery
3. About/Focus — foto kecil + quote text tentang design philosophy
4. Process — "Here's How It Works": 3 steps (01 Discover, 02 Design, 03 Deliver) 
   dengan angka besar dekoratif dan card deskripsi
5. Selected Works — grid 2 kolom project cards dengan screenshot + judul
6. Stats — "Pushing Boundaries since [year]", phone mockup + stats grid 
   (Happy Clients, Project Success, Total Portfolio, Total Review)
7. CTA/Footer — background gelap, "Let's Make It Happen" heading, 
   CTA button, nav links, nama ultra-besar sebagai typographic footer

INTERAKSI:
- Smooth scroll behavior
- Scroll-triggered content reveal (fade-up)
- Subtle card hover lift
- Professional, restrained motion — tidak berlebihan

RESPONSIF:
- Mobile-first, single column di mobile
- 2-column grid untuk projects di desktop
- Max-width ~1200-1440px
```

---

## 15. Prompt untuk Design Saat Ini (Dandy.dev)

```
Buatkan website portfolio developer dengan gaya cyber-tech, glassmorphism 
dan dark-mode first. Stack: React 19 + Vite + Tailwind CSS v4 + Framer Motion.

VISUAL:
- Dark mode default (slate-950 background #020617)
- Electric blue primary (#3b82f6) dengan sky-blue aksen (#38bdf8)
- Glassmorphism cards: backdrop-blur 12px, translucent background, 
  subtle border rgba
- Background: grid pattern 40px + animated SVG wave lines + radial blue glow
- Font pairing: Space Grotesk (headings, geometric) + Archivo (body, readable)
- Icons: Lucide React, stroke style

FITUR UNIK:
- 3D Interactive Lanyard ID Card di hero (draggable, physics spring, 
  flip animation, perspective tilt, dynamic string SVG, holographic glare)
- Mobile: Neon glow card (conic gradient spinning border) sebagai pengganti
- Command Palette (Ctrl+K) — search & navigate
- Scroll progress bar di top
- Smart navbar hide/reveal on scroll
- GitHub contribution grid (seeded random)
- Scroll Reveal animations: 8 varian (fade-up/down/left/right, 
  zoom-in/out, flip-up, spring-up) dengan spring physics
- Loading screen tech-styled dengan concentric spinning rings
- Page transitions AnimatePresence (fade + translate)

PAGES:
1. Home — Hero + Summary Card + GitHub Grid + Bento Link Cards
2. Projects — Tab filter (All/Frontend/Fullstack) + Card grid + 
   Case Study Modal (Problem → Solution → Tech)
3. Experience — Timeline (Work + Education) dengan dot indicators + 
   Skills Categories sidebar
4. Contact — Info column + Contact form (Name, Email, Message)

INTERAKSI:
- Spring physics hover: y-lift + scale + glow shadow + border highlight
- Text glow effect pada active nav state
- Theme toggle (dark/light) dengan smooth CSS variable transition
- Mobile side drawer dengan backdrop blur
```

---

*Dokumen ini terakhir diperbarui: September 2026*
*Berdasarkan analisis visual screenshot referensi dan source code aktual*
