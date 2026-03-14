# 🚀 Amirreza Jolani's Portfolio – Built with Next.js

![Next.js](https://img.shields.io/badge/Next.js_16-black?logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-20232a?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?logo=three.js&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radix-ui&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068b7?logo=zod&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Active-success)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

---

## 🌐 Overview

A **beautifully animated, single-page portfolio** built with the **Next.js 16 App Router** and **React 19**, designed to showcase professional experience, personal projects, technical skills, testimonials, and contact information through a premium dark-themed UI with fluid motion and immersive visual effects.

Built by **Amirreza Jolani Mameghani** — Fullstack Developer based in Utrecht, Netherlands.

---

## 📐 Architecture & Project Structure

```
src/
├── app/                      # Next.js App Router (layout, page, error, not-found, globals.css)
├── assets/                   # Static assets (images, portrait photo)
├── components/               # Shared, reusable UI components
│   ├── ui/                   # shadcn/ui primitives (Button, Accordion, Dialog, Tabs, etc.)
│   ├── navigation/           # Scroll-aware floating dock navigation
│   ├── section/              # Container, SectionSkeleton, Globe (Cobe)
│   ├── AboutCard.tsx         # Glassmorphic about-me card
│   ├── Dock.tsx              # macOS-style floating dock
│   ├── LogoLoop.tsx          # Infinite horizontal logo marquee
│   ├── MusicCard.tsx         # Decorative music widget
│   ├── SplitText.tsx         # Character-level text splitting for animations
│   ├── StarBorder.tsx        # Animated star-trail glowing border effect
│   └── WorkCard.tsx          # Project showcase card
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions (cn, tailwind-merge helpers)
├── modules/                  # Feature modules (domain-driven)
│   ├── hero/                 # Hero section with aurora background
│   ├── experience/           # Work experience timeline
│   ├── projects/             # Personal project showcases
│   ├── stack/                # Hard & soft skills grid
│   ├── testimonials/         # Review carousel + 3D globe
│   ├── brand/                # Animated company logo marquee
│   └── footer/               # Contact form & social links
└── types/                    # Shared TypeScript type definitions
```

The codebase follows a **modular, domain-driven architecture**: each section of the page is an independent module under `src/modules/`, with its own `view/`, `components/`, and data definitions. Shared primitives live under `src/components/` and are built on top of **Radix UI** via **shadcn/ui**.

---

## 🧩 Component Reference — Every Feature in Detail

Below is a detailed reference for **every custom component** in the project. Each component is a standalone, reusable feature.

---

### 🌟 `StarBorder` — Animated Glowing Border

> **File:** `src/components/StarBorder.tsx`

A polymorphic wrapper that wraps any content with a **rotating conic-gradient border** and two floating **radial spark orbs** that drift along the edges.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `React.ElementType` | `"div"` | Render as any HTML element or React component |
| `color` | `string` | `"#22d3ee"` | Primary glow colour for sparks and border |
| `speed` | `string \| number` | `"6s"` | Animation loop duration |
| `thickness` | `number` | `2` | Border thickness in pixels |
| `contentClassName` | `string` | — | Extra classes for the inner content container |
| `contentStyle` | `CSSProperties` | — | Inline styles for the inner content container |

**How it works:**
- A `conic-gradient` (cyan → blue → pink → cyan) is rendered as a pseudo-border using CSS `mask-composite: exclude` so only the border ring shows.
- A blurred copy (`.sb-border--glow`) creates an outer glow halo.
- Two `.sb-spark` elements use `radial-gradient` with `mix-blend-mode: screen` and `translate3d` keyframes to simulate light particles orbiting the border.
- The inner content sits on a `backdrop-blur-xl` glassmorphic surface.

**Used in:** Experience cards — each card gets a unique `color` to create themed glowing borders.

---

### 🔄 `LogoLoop` — Infinite Marquee Scroller

> **File:** `src/components/LogoLoop.tsx` · ~500 lines

A **high-performance infinite horizontal/vertical marquee** built entirely with `requestAnimationFrame` (no CSS animation). Supports images, React nodes, links, and custom renderers.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logos` | `LogoItem[]` | — | Array of logo items (image or React node) |
| `speed` | `number` | `120` | Scroll velocity in px/sec |
| `direction` | `'left' \| 'right' \| 'up' \| 'down'` | `'left'` | Scroll direction |
| `logoHeight` | `number` | `28` | Height of each logo in pixels |
| `gap` | `number` | `32` | Gap between logos in pixels |
| `pauseOnHover` | `boolean` | `false` | Pause scrolling on mouse hover |
| `hoverSpeed` | `number` | — | Custom speed while hovered (overrides pause) |
| `fadeOut` | `boolean` | `false` | Show gradient fade masks on edges |
| `fadeOutColor` | `string` | — | Custom fade gradient colour |
| `scaleOnHover` | `boolean` | `false` | Scale up individual logos on hover |
| `renderItem` | `function` | — | Custom render function for each item |

**Key internals:**
- Uses `ResizeObserver` (with `window.resize` fallback) to dynamically calculate how many copies of the list are needed to fill the viewport.
- Smooth velocity easing via exponential decay (`1 - e^(-dt/τ)`) for buttery hover transitions.
- Respects `prefers-reduced-motion` — disables animation entirely for accessibility.
- Lazy-loads images with `loading="lazy"` and `decoding="async"`.
- Wrapped in `React.memo` for performance.

**Used in:** Brand/company logo section — scrolls company names infinitely with fade-out edges.

---

### ✂️ `SplitText` — GSAP Character Animation

> **File:** `src/components/SplitText.tsx`

Decomposes text into **individual characters, words, or lines** using GSAP's `SplitText` plugin, then animates each fragment in with staggered scroll-triggered entrance effects.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | The text content to animate |
| `splitType` | `'chars' \| 'words' \| 'lines' \| 'words, chars'` | `'chars'` | Granularity of the split |
| `delay` | `number` | `100` | Stagger delay between fragments (ms) |
| `duration` | `number` | `0.6` | Animation duration per fragment (seconds) |
| `ease` | `string` | `'power3.out'` | GSAP easing function |
| `from` | `TweenVars` | `{ opacity: 0, y: 40 }` | Initial state of each fragment |
| `to` | `TweenVars` | `{ opacity: 1, y: 0 }` | Final state of each fragment |
| `threshold` | `number` | `0.1` | Intersection threshold for scroll trigger |
| `tag` | `string` | `'p'` | HTML tag to render (`h1`–`h6`, `p`, `span`) |
| `onLetterAnimationComplete` | `function` | — | Callback fired when all fragments land |

**Key internals:**
- Waits for `document.fonts.ready` before splitting to ensure accurate character measurements.
- Uses GSAP `ScrollTrigger` with `once: true` so the animation only plays once.
- Cleans up split instances and scroll triggers on unmount to prevent memory leaks.
- Uses `force3D: true` and `will-change: transform, opacity` for GPU-accelerated rendering.

---

### 🖥️ `Dock` — macOS-Style Floating Dock

> **File:** `src/components/Dock.tsx`

A **macOS Dock-inspired** navigation bar with Framer Motion hover/tap micro-animations and Radix UI tooltips.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `DockItemData[]` | — | Array of `{ icon, label, onClick }` items |
| `className` | `string` | — | Extra classes for the root container |
| `panelClassName` | `string` | — | Classes for the glassmorphic panel |
| `itemClassName` | `string` | — | Classes applied to each dock button |

**Behaviour:**
- Each button lifts up (`y: -6`) and scales (`1.05×`) on hover via Framer Motion's `whileHover`.
- Pressing a button scales down (`0.95×`) via `whileTap`.
- Tooltips appear instantly (`delayDuration={0}`) above each icon.
- The panel uses `backdrop-blur-2xl` for a frosted glass effect.

**Used in:** `ScrollDock` — the fixed bottom navigation that scrolls to portfolio sections.

---

### 🧭 `ScrollDock` — Section Navigation

> **File:** `src/components/navigation/scroll-dock.tsx`

Wraps the `Dock` component and provides **smooth-scroll navigation** to each major section of the portfolio.

**Sections linked:**
| Icon | Label | Target |
|------|-------|--------|
| ✨ `LuSparkles` | Hero | `#hero` |
| 💼 `LuBriefcase` | Experience | `#experience` |
| 💻 `LuCode` | Personal Projects | `#projects` |
| 🔧 `LuWrench` | Hard Skill | `#hard-skill` |
| 🤝 `LuHandshake` | Soft Skill | `#soft-skill` |

**Responsive behaviour:**
- **Mobile (≤640px):** Compact icons (`h-4 w-4`), `h-12 w-12` buttons, wrapping layout
- **Tablet (641–1024px):** Medium icons (`h-5 w-5`), `h-[3.25rem] w-[3.25rem]` buttons
- **Desktop (>1024px):** Full-size icons (`h-6 w-6`), `h-14 w-14` buttons

---

### 🌍 `Earth` — Interactive 3D Globe

> **File:** `src/components/section/globe.tsx`

A **rotating 3D globe** rendered on a `<canvas>` element using the [Cobe](https://github.com/shuding/cobe) library.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theta` | `number` | `0.25` | Tilt angle of the globe |
| `dark` | `number` | `1` | Dark mode intensity |
| `scale` | `number` | `1.1` | Globe scale factor |
| `diffuse` | `number` | `1.2` | Light diffusion amount |
| `mapSamples` | `number` | `40000` | Resolution of the map texture |
| `mapBrightness` | `number` | `6` | Brightness of the map surface |
| `baseColor` | `[r, g, b]` | `[0.4, 0.65, 1]` | Base globe colour |
| `markerColor` | `[r, g, b]` | `[1, 0, 0]` | Marker dot colour |
| `glowColor` | `[r, g, b]` | `[0.27, 0.58, 0.9]` | Atmospheric glow colour |

**Behaviour:**
- Auto-rotates continuously (`phi += 0.003` per frame).
- Renders at `2× devicePixelRatio` for crisp display on Retina screens.
- Resizes responsively via `window.resize` listener.
- Properly destroys the globe instance on component unmount.

**Used in:** Testimonials section — displayed with a gradient mask for a fade-into-background effect.

---

### 📦 `Container` — Responsive Layout Wrapper

> **File:** `src/components/section/Container.tsx`

A centred, max-width container with **responsive side padding** that scales from mobile through **4K displays** (up to 3840px wide).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `wide` | `boolean` | `false` | Use wider max-widths for full-bleed layouts |
| `className` | `string` | — | Additional classes |

**Breakpoint widths:**

| Breakpoint | Standard | Wide |
|------------|----------|------|
| `lg` | 1120px | 1240px |
| `xl` | 1280px | 1440px |
| `2xl` | 1440px | 1680px |
| `1920px` | 1600px | 1880px |
| `2560px` | 1760px | 2200px |
| `3840px` | 1920px | 2600px |

**Used in:** Every section of the portfolio as the outermost layout wrapper.

---

### 🔝 `Header` — Sticky Navigation Bar

> **File:** `src/components/section/Header.tsx`

A **sticky top header** with a hover-expandable navigation capsule, scroll progress circle, and live clock.

**Features:**
- **Logo** — Links back to homepage via `next/image`.
- **Expandable nav capsule** — On hover, the pill expands to reveal links: Project, About, Connection, Get CV (download).
- **Scroll progress circle** — An SVG `<circle>` with `strokeDashoffset` that fills as the user scrolls down the page (0%–100%).
- **Live clock** — Real-time clock (HH:mm AM/PM) rendered via `react-live-clock`.
- `backdrop-blur-xl` for a frosted glass effect on the sticky bar.

---

### ⏳ `SectionSkeleton` — Loading Placeholder

> **File:** `src/components/section/section-skeleton.tsx`

A glassmorphic **skeleton loader** shown while dynamically imported sections are loading.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section title to display during loading |
| `lines` | `number` | `3` | Number of pulsing placeholder lines |

**Features:**
- Animated `pulse` effect on placeholder bars (`animate-pulse`).
- Glassmorphic card with `backdrop-blur` and subtle border.
- Title is rendered as real text (not a skeleton) for immediate context.

**Used in:** `page.tsx` — every `dynamic()` import specifies a `SectionSkeleton` as its `loading` fallback.

---

### 🃏 `WorkCard` — GSAP Scroll-Animated Project Card

> **File:** `src/components/WorkCard.tsx`

A project showcase card with a **GSAP-powered 3D scroll entrance animation**.

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Category label |
| `image` | `StaticImageData` | Project screenshot |
| `icon` | `ReactNode` | Category icon |
| `heading` | `string` | Project name |
| `description` | `string` | Project description |

**Animation:**
- Starts at `opacity: 0.4`, `scale: 0.5`, `rotateX: 60°` (tilted away).
- Scrubs to `opacity: 1`, `scale: 1`, `rotateX: 0°` as the card enters the viewport.
- Uses `ScrollTrigger` with `scrub: true` for scroll-linked animation (not time-based).
- On hover: slight scale-up (`1.015×`) and a subtle white glow shadow.

---

### 🎵 `MusicCard` — Spotify-Style Music Widget

> **File:** `src/components/MusicCard.tsx`

A decorative card showing a **currently playing** track with a Spotify icon, artist name, and album art background.

| Prop | Type | Description |
|------|------|-------------|
| `category` | `string` | Music category label (e.g. "Now Playing") |
| `title` | `string` | Track title |
| `artist` | `string` | Artist name |
| `image` | `StaticImageData` | Album cover image |
| `color` | `string` | Background colour accent |

**Design:**
- Album art fills the background at 30% opacity.
- A `backdrop-blur-lg` frosted glass info bar sits at the bottom.
- Green Spotify icon (`FaSpotify`) on the right.

---

### 📝 `AboutCard` — Personal Bio Card

> **File:** `src/components/AboutCard.tsx`

A dark-themed card built with shadcn `Card`/`CardContent`/`CardHeader` primitives, presenting the developer's personal story in three sections:

| Section | Content |
|---------|---------|
| **Today** | Professional summary — 4+ years, React/Vue/Nuxt, company highlights |
| **Childhood** | Origin story — gaming curiosity → C#/Unity self-teaching |
| **Growth** | Career evolution — Web3, full-stack deepening, collaboration values |

---

### ✨ `HoverEffect` / `CardHoverEffect` — Animated Card Grid

> **File:** `src/components/ui/card-hover-effect.tsx`

A **Framer Motion-powered card grid** where a shared `layoutId` background smoothly follows the mouse across cards.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `HoverItem[]` | — | Array of card data (title, description, link, or custom content) |
| `gridClassName` | `string` | 3-column grid | CSS classes for the grid layout |
| `hoverBackgroundClassName` | `string` | `bg-neutral-200` | Class for the animated hover spotlight |
| `itemClassName` | `string` | — | Extra classes for each card wrapper |

**Behaviour:**
- Uses `AnimatePresence` + `layoutId="hoverBackground"` so the background blob **animates between cards** as you hover.
- Cards with a `link` prop are clickable and keyboard-accessible (`Enter`/`Space` to open).
- Supports both title/description mode and fully custom `content` mode.

**Used in:** Experience section — wraps ExperienceCards with the hover effect.

---

### 🎨 `ThemeProvider` — Dark/Light Theme Support

> **File:** `src/components/theme-provider.tsx`

A thin wrapper around `next-themes`' `ThemeProvider`, enabling system-aware dark/light theme switching throughout the app.

---

### 📚 shadcn/ui Primitives (47 Components)

> **Directory:** `src/components/ui/`

The project includes a full set of **47 shadcn/ui components** built on Radix UI primitives, all styled with Tailwind CSS:

| Component | Component | Component |
|-----------|-----------|-----------|
| Accordion | Alert | Alert Dialog |
| Aspect Ratio | Avatar | Badge |
| Breadcrumb | Button | Calendar |
| Card | Carousel | Chart |
| Checkbox | Collapsible | Command |
| Context Menu | Dialog | Drawer |
| Dropdown Menu | Form | Hover Card |
| Input | Input OTP | Label |
| Menubar | Navigation Menu | Pagination |
| Popover | Progress | Radio Group |
| Resizable | Scroll Area | Select |
| Separator | Sheet | Sidebar |
| Skeleton | Slider | Sonner |
| Switch | Table | Tabs |
| Textarea | Toggle | Toggle Group |
| Tooltip | | |

---

## ✨ Full Feature List

### 🎬 Hero Section
- **Aurora background animation** — a multi-color radial gradient that slowly scales and breathes with a 30-second CSS keyframe loop, creating a living nebula effect behind the hero content.
- **Professional portrait** with a glassmorphic frame, double rounded borders, and a violet-to-cyan gradient glow behind it. Served as an optimised `next/image` with `priority` loading and blur placeholder.
- **Stat highlights** — three key-figure cards ("6+ years shipping", "Utrecht, NL", "React/Next.js · Vue 3/Nuxt 3") rendered in a responsive 3-column grid with glassmorphic styling.
- **Download CV** button linking to a hosted PDF.
- **Social links** (LinkedIn, GitHub) as rounded icon buttons with hover transitions.

---

### 💼 Experience Section
- **5 professional roles** displayed as rich, themed cards — each company gets a unique colour palette (cyan, purple, slate, sky, emerald) applied consistently to borders, surfaces, chips, and box-shadows.
- **StarBorder component** wraps each card with an animated glowing star-trail border (customisable colour, speed, and thickness).
- **HoverEffect** (from `card-hover-effect.tsx`) provides smooth scale and focus transitions on card interaction.
- Each card contains:
  - Timeframe & location
  - Role & company name
  - **Company snapshot** — an expandable bio describing the company's mission
  - Summary paragraph
  - Achievement bullet list with colour-coded dots
  - Tech tag chips with themed borders and backgrounds
  - **Project sub-cards** linking to live websites (e.g. Welbewust.Life, karhuno.ai, AryakTravel, ShabavizTour, BarsamSeyr, Zharfa Academy, IHMS for Nikan Hospital)

---

### 🛠 Personal Projects Section
- **5 project cards** rendered in a responsive 2-column grid, each linking to its GitHub repository.
- Each card includes:
  - Tech stack label
  - Title, summary, and impact description
  - Tag chips
  - Hover scale effect with a gradient overlay (cyan → purple)
  - Large drop-shadow that brightens on hover for a "lift" effect
- **Projects showcased:**
  | Project | Stack | Description |
  |---------|-------|-------------|
  | **Prompter** | Next.js, TypeScript, Prisma, PostgreSQL, Docker | Full-stack prompt management app with Zod validation and Sonner notifications |
  | **Nodebase** | Next.js, React Flow, tRPC, Prisma, Inngest | Visual workflow editor with node-based UI for automation flows |
  | **Pokemon Clone** | Nuxt 3, Pinia, @nuxt/ui | Pokedex-style app with dark/light theme switching and persisted stores |
  | **Threads Clone** | Nuxt 3, Supabase, Prisma | Social feed clone with Supabase authentication and storage |
  | **E-Commerce Marketplace** | Next.js, MongoDB, tRPC, Payload CMS | Marketplace with product filtering and CMS-backed data |

---

### 🧠 Skills Section

#### Hard Skills (25 technologies)
Displayed as a 2-column responsive grid of interactive cards. Each card links to the technology's official website and includes:
- A colour-coded icon (via `react-icons`)
- Technology name and description
- Hover colour accent unique to each technology

| Category | Technologies |
|----------|-------------|
| **Frameworks** | React.js, Next.js, Vue 3, Nuxt 3 |
| **Languages** | TypeScript, JavaScript (ES6+), PHP (Laravel) |
| **Markup & Styling** | HTML5, CSS3 & Layout, SCSS/Sass, Tailwind CSS, Styled Components, Bootstrap |
| **UI Libraries** | shadcn/ui & Radix, Figma & Design Systems |
| **Animation** | GSAP & Framer Motion |
| **State Management** | Redux & State Machines |
| **Backend** | Node.js, PostgreSQL, Docker |
| **Tooling** | Git, VS Code, WebStorm, Webpack, VitePress & docs |
| **Performance** | Performance & SEO, DevTools, Lighthouse, Core Web Vitals |
| **Legacy** | jQuery |

#### Soft Skills (8 competencies)
Displayed as a 2-column grid of glassmorphic cards:
- Caring & motivated
- Out-of-the-box thinking
- Problem-solving
- Reliability & ownership
- Teamwork
- Mentorship & teaching
- Communication & feedback
- Ownership mindset

---

### 💬 Testimonials & Globe Section
- **Review carousel** with 3 testimonials from colleagues and managers, animated with smooth transitions.
- **Interactive 3D globe** (powered by [Cobe](https://github.com/shuding/cobe)) rendered on the right side of the section with a gradient mask fade-out, giving a "floating in space" feel.
- **Company logo marquee** — an infinite horizontal scroll of company logos (OFoundation, Karhuno AI, Almas Teb Rayan, PAP Group, Zharfa Academy) with:
  - Configurable scroll speed
  - Pause-on-hover behaviour
  - Fade-out edges for seamless looping

---

### 📬 Contact / Footer Section
- **CTA card** — "Do you need a hand with your next web project?" with Email Me and Book a Call buttons.
- **Contact method cards** — Email and Schedule links with descriptive icons.
- **Social link icons** — LinkedIn, GitHub, Telegram, WhatsApp, each as rounded icon buttons.
- **Location badge** — Utrecht, Netherlands · CET timezone.
- **Availability status** — "Available for freelance" and "Remote-friendly" indicators.

---

### 🧭 Scroll Dock Navigation
- A **macOS-style floating dock** that appears as you scroll, providing quick navigation to each section:
  - Hero · Experience · Projects · Skills · Testimonials · Contact
- Built as a client-side component (`ScrollDockClient`) with intersection-observer-based active state highlighting.

---

### 🎨 Design System & Visual Effects

| Feature | Implementation |
|---------|----------------|
| **Dark theme** | Deep navy/black palette (`#03030a`, `#0D0D14`) with white/opacity text layers |
| **Custom typography** | Degular font family (Thin → Bold + Display variants) loaded via `next/font/local` with `display: swap` |
| **Glassmorphism** | `backdrop-blur`, translucent `bg-white/5` backgrounds, and `border-white/10` borders throughout |
| **Aurora effect** | Multi-point radial gradients with animated scaling in the hero section |
| **StarBorder** | Rotating conic-gradient border animation with customisable colour, speed, and thickness |
| **Grid overlay** | Subtle orthogonal grid lines (`opacity-[0.04]`) on the main page background |
| **Radial glows** | Blue and pink radial gradients positioned absolute for ambient lighting effects |
| **Dynamic shadows** | Box-shadows that brighten and expand on hover (e.g. `group-hover:shadow-[0_45px_120px_...]`) |
| **SplitText** | Character-level text decomposition for staggered entrance animations |
| **LogoLoop** | Performant infinite marquee with CSS transform animations and configurable speed/gap |

---

### ⚡ Performance & SEO

- **Dynamic imports** with `next/dynamic` and skeleton loaders for every section below the fold, reducing initial bundle size.
- **SSR enabled** (`ssr: true`) on all dynamically imported modules so content is present in the initial HTML for SEO crawlers.
- **Image optimisation** via `next/image` with `priority`, `placeholder="blur"`, responsive `sizes`, and WebP format.
- **Vercel Speed Insights** integrated (`@vercel/speed-insights`) for real-user monitoring.
- **Comprehensive SEO metadata** in `layout.tsx`:
  - Open Graph tags (title, description, image, site name)
  - Twitter Card tags (summary_large_image)
  - Robots directives (index, follow, max-image-preview: large)
  - Web App Manifest (`/manifest.json`)
  - Favicon (multi-size WebP)
  - Viewport configuration (responsive, user-scalable)
  - Keywords meta tag

---

### 🛡 Error Handling
- **Custom error page** (`error.tsx`) — a styled error boundary with a retry button.
- **Custom 404 page** (`not-found.tsx`) — a branded "page not found" experience consistent with the portfolio design.

---

## 🧰 Tech Stack

| Category | Tools |
|----------|-------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Runtime** | [React 19](https://react.dev/) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, PostCSS, `tailwind-merge`, `tailwindcss-animate` |
| **UI Components** | shadcn/ui (Radix UI primitives), `cmdk`, `vaul`, `embla-carousel-react` |
| **Animations** | GSAP 3, Framer Motion (`motion`), Three.js + React Three Fiber/Drei |
| **3D Globe** | [Cobe](https://github.com/shuding/cobe) |
| **Forms** | React Hook Form + Zod validation |
| **Icons** | Lucide React, React Icons, Lineicons |
| **Typography** | Degular (self-hosted via `next/font/local`) |
| **Email** | Resend |
| **Charts** | Recharts |
| **Utilities** | `clsx`, `class-variance-authority`, `date-fns`, `react-live-clock`, `react-resizable-panels` |
| **Notifications** | Sonner |
| **Monitoring** | Vercel Speed Insights |
| **Deployment** | [Vercel](https://vercel.com) |
| **Linting** | ESLint 9 + eslint-config-next |

---

## 🛠 Local Development

### Prerequisites

- **Node.js** ≥ 18 (recommended: 20+)
- **pnpm**, **npm**, **yarn**, or **bun**

### Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

### Start the development server

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

The app will start on [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
pnpm run build
# or
npm run build
```

### Start the production server

```bash
pnpm start
# or
npm start
```

### Lint the codebase

```bash
pnpm lint
# or
npm run lint
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout with Degular font, SEO metadata, Open Graph, and viewport config |
| `src/app/page.tsx` | Main page composing all sections with dynamic imports |
| `src/app/globals.css` | Global styles, Tailwind directives, custom properties, and animations |
| `src/app/error.tsx` | Custom error boundary UI |
| `src/app/not-found.tsx` | Custom 404 page |
| `src/modules/hero/view/hero.tsx` | Hero section with aurora animation, portrait, and stat highlights |
| `src/modules/experience/view/experience-view.tsx` | Experience timeline with themed cards |
| `src/modules/projects/view/projects-view.tsx` | Personal project grid |
| `src/modules/stack/view/stack-view.tsx` | Hard skills grid + soft skills grid |
| `src/modules/testimonials/view/review-view.tsx` | Testimonial carousel + 3D globe |
| `src/modules/brand/view/brand-view.tsx` | Infinite company logo marquee |
| `src/modules/footer/view/footer-view.tsx` | Contact section with CTA and social links |
| `src/components/StarBorder.tsx` | Animated rotating star-border component |
| `src/components/LogoLoop.tsx` | Performant infinite marquee component |
| `src/components/SplitText.tsx` | Character-level text animation utility |
| `src/components/Dock.tsx` | macOS-style floating dock component |

---

## ✅ TODO Roadmap

> Future development goals and improvements

### 🎯 Functional Enhancements
- [ ] Add **light/dark mode toggle**
- [ ] Implement **language switcher (FA / EN)**
- [ ] Connect form submissions to email or webhook via Resend
- [ ] Add **blog section** with MDX support

### 🧠 UX / UI Improvements
- [ ] Replace placeholder sections with **interactive 3D models** (Three.js / R3F)
- [ ] Make `WorkCard` support filtering, scroll-triggered animation, and CTA buttons
- [ ] Add **progress bar** transitions between route navigations
- [ ] Improve **keyboard navigation and accessibility (a11y)**
- [ ] Add page transition animations

---

## 🧑‍💻 Developer

**Amirreza Jolani Mameghani**  
Fullstack Developer · Frontend Specialist · UI/UX Enthusiast  
📍 Utrecht, Netherlands

- 🔗 [LinkedIn](https://www.linkedin.com/in/amirjm/)
- 💻 [GitHub](https://github.com/AmirrezaJM)
- 💬 [Telegram](https://t.me/AmirrezaJMM)
- 📱 [WhatsApp](https://wa.me/+31634997564)
- ✉️ Email: `amirreza.jolani1998@gmail.com`

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <em>Shipping thoughtful web products since 2020.</em>
</p>