# CLAUDE.md — Portfolio Project

## Project Overview

A premium animated personal portfolio website for a Fullstack Developer based in Utrecht, Netherlands. Built with Next.js 16 (App Router) + React 19, heavy use of GSAP, Framer Motion, Three.js, and glassmorphism design. Deployed on Vercel.

---

## Package Manager

**Use `pnpm` exclusively.** Never use `npm` or `yarn`.

```bash
pnpm install          # install dependencies
pnpm dev              # start dev server (port 3000)
pnpm build            # production build
pnpm start            # start production server
pnpm lint             # run ESLint
```

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4, PostCSS, CSS variables (OKLCH) |
| Component Library | shadcn/ui (new-york style), Radix UI primitives |
| Animation | GSAP 3 + @gsap/react, Framer Motion (motion v12) |
| 3D / Canvas | Three.js, @react-three/fiber, @react-three/drei, Cobe (globe) |
| Forms | React Hook Form + Zod + @hookform/resolvers |
| Icons | lucide-react, react-icons, lineicons |
| Theme | next-themes (dark/light) |
| Email | Resend |
| Monitoring | @vercel/speed-insights |
| Charts | Recharts |
| Date | date-fns |
| Live Clock | react-live-clock |
| Carousel | embla-carousel-react |
| Toasts | sonner |
| Drawer | vaul |
| Command Palette | cmdk |
| Glass Effects | liquid-glass-react |

---

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, theme provider
│   ├── page.tsx            # Home page — dynamic imports for all sections
│   ├── globals.css         # Tailwind v4, CSS variables, typography system, animations
│   ├── error.tsx           # Custom error boundary page
│   └── not-found.tsx       # Custom 404 page
├── features/

├── modules/                # Domain-driven feature modules (each has view/ subfolder)
│   ├── hero/
│   ├── experience/
│   ├── projects/
│   ├── stack/
│   ├── testimonials/
│   ├── brand/
│   └── footer/
│
├── components/
│   ├── ui/                 # 47 shadcn/ui primitives — DO NOT edit manually
│   └── navigation/         # ScrollDock (static + client wrapper)
│
├── hooks/
│   └── use-mobile.ts       # Mobile viewport detection
│
├── lib/
│   └── utils.ts            # cn() — clsx + tailwind-merge
│
└── types/
    └── portfolio.types.ts  # Shared TypeScript interfaces
```

### Key Architectural Patterns

- **Dynamic imports** with `dynamic()` on all section modules — each section has a `SectionSkeleton` fallback
- **Domain modules** live in `src/modules/` and contain their own `view/` and `components/` subfolders
- **Client/Server boundary**: RSC by default; interactive components have `"use client"` at the top
- **Path alias**: `@/*` maps to `src/*`

---

## Installed Dependencies (Full List)

### Production

```json
"@gsap/react": "2.1.2"
"@hookform/resolvers": "4.1.3"
"@radix-ui/react-accordion": "^1.2.3"
"@radix-ui/react-alert-dialog": "^1.1.6"
"@radix-ui/react-avatar": "^1.1.3"
"@radix-ui/react-checkbox": "^1.1.4"
"@radix-ui/react-context-menu": "^2.2.6"
"@radix-ui/react-dialog": "^1.1.6"
"@radix-ui/react-dropdown-menu": "^2.1.6"
"@radix-ui/react-hover-card": "^1.1.6"
"@radix-ui/react-label": "^2.1.2"
"@radix-ui/react-menubar": "^1.1.6"
"@radix-ui/react-navigation-menu": "^1.2.5"
"@radix-ui/react-popover": "^1.1.6"
"@radix-ui/react-progress": "^1.1.2"
"@radix-ui/react-radio-group": "^1.2.3"
"@radix-ui/react-scroll-area": "^1.2.3"
"@radix-ui/react-select": "^2.1.6"
"@radix-ui/react-separator": "^1.1.2"
"@radix-ui/react-slider": "^1.2.3"
"@radix-ui/react-slot": "^1.1.2"
"@radix-ui/react-switch": "^1.1.3"
"@radix-ui/react-tabs": "^1.1.3"
"@radix-ui/react-toggle": "^1.1.2"
"@radix-ui/react-toggle-group": "^1.1.2"
"@radix-ui/react-tooltip": "^1.2.0"
"@react-three/drei": "10.1.2"
"@react-three/fiber": "9.1.2"
"@vercel/speed-insights": "1.2.0"
"class-variance-authority": "0.7.1"
"clsx": "2.1.1"
"cmdk": "1.0.0"
"cobe": "0.6.4"
"date-fns": "4.1.0"
"embla-carousel-react": "8.5.2"
"gsap": "3.13.0"
"input-otp": "1.4.2"
"lineicons": "1.3.2"
"liquid-glass-react": "1.1.1"
"lucide-react": "0.479.0"
"motion": "12.6.2"
"next": "16.1.1"
"next-themes": "0.4.6"
"postprocessing": "6.37.7"
"react": "19.2.3"
"react-day-picker": "8.10.1"
"react-dom": "19.2.3"
"react-hook-form": "7.54.2"
"react-icons": "5.5.0"
"react-live-clock": "6.1.25"
"react-resizable-panels": "2.1.7"
"recharts": "2.15.1"
"resend": "4.5.2"
"sonner": "2.0.1"
"tailwind-merge": "3.0.2"
"tailwindcss-animate": "1.0.7"
"three": "0.180.0"
"vaul": "1.1.2"
"zod": "3.24.2"
```

### Dev Dependencies

```json
"@eslint/eslintrc": "^3"
"@tailwindcss/postcss": "^4"
"@types/node": "^20"
"@types/react": "^19"
"@types/react-dom": "^19"
"@types/three": "^0.177.0"
"eslint": "^9"
"eslint-config-next": "15.2.1"
"tailwindcss": "^4"
"typescript": "^5"
```

---

## shadcn/ui Configuration

- **Style**: `new-york`
- **Base color**: `neutral`
- **CSS variables**: enabled
- **Icon library**: `lucide`
- **CSS file**: `src/app/globals.css`

Add components via:
```bash
pnpm dlx shadcn@latest add <component-name>
```

Custom registries configured:
- `@react-bits` → `https://reactbits.dev/r/{name}.json`
- `@aceternity` → `https://ui.aceternity.com/registry/{name}.json`

Never manually edit files inside `src/components/ui/` — always regenerate via shadcn CLI.

---

## TypeScript

- **Strict mode** is enabled (`"strict": true`)
- `@typescript-eslint/no-explicit-any` is turned **off** (ESLint config)
- Path alias: `@/*` → `./src/*`
- Target: ES2017, module resolution: bundler

---

## Styling Conventions

- **Tailwind CSS v4** — utility-first, configured in `globals.css` (no `tailwind.config.js`)
- Use `cn()` from `@/lib/utils` to conditionally merge Tailwind classes
- Color tokens are in **OKLCH** format as CSS variables
- Custom typography scale (Apple-style): `text-large-title`, `text-title-1/2/3`, `text-headline`, `text-body`, `text-callout`, `text-subhead`, `text-footnote`, `text-caption-1/2`
- Custom utility classes: `liquid-glass`, `liquid-capsule`, `liquid-well`, `glass-surface`, `glass-filter`
- Never use raw hex/rgb colors — always use CSS variables or Tailwind tokens
- Glassmorphism uses `backdrop-blur` + semi-transparent backgrounds

---

## Component Patterns

### Custom Components

| Component | Location | Purpose |
|---|---|---|
| `StarBorder` | `src/components/StarBorder.tsx` | Animated conic-gradient glowing border |
| `LogoLoop` | `src/components/LogoLoop.tsx` | Infinite marquee scroller (RAF-based) |
| `SplitText` | `src/components/SplitText.tsx` | GSAP character-level scroll animation |
| `Dock` | `src/components/Dock.tsx` | macOS-style floating dock (Framer Motion) |
| `WorkCard` | `src/components/WorkCard.tsx` | GSAP 3D scroll-animated project card |
| `MusicCard` | `src/components/MusicCard.tsx` | Spotify-style widget |
| `AboutCard` | `src/components/AboutCard.tsx` | Bio card |
| `Container` | `src/components/section/Container.tsx` | Responsive max-width wrapper |
| `Header` | `src/components/section/Header.tsx` | Sticky nav with scroll progress + live clock |
| `Globe` | `src/components/section/globe.tsx` | Cobe 3D globe |
| `SectionSkeleton` | `src/components/section/section-skeleton.tsx` | Loading placeholder |

### Module Pages

Each module in `src/modules/` follows this structure:
```
modules/<name>/
  view/
    <name>-view.tsx     # Main section component
  components/           # (optional) section-specific sub-components
```

---

## Animation Guidelines

- **GSAP**: use `useGSAP()` from `@gsap/react` for proper cleanup; never use raw `useEffect` for GSAP
- **ScrollTrigger**: always pair with `useGSAP`; scrub and pin values preferred for scroll-linked animations
- **Framer Motion**: use `motion` package (not `framer-motion`) — it's the same library, just the newer import path
- **Reduced motion**: respect `prefers-reduced-motion` — `LogoLoop` already handles this; follow the same pattern elsewhere
- Avoid janky layout shifts — prefer `transform` and `opacity` for animations, not layout properties

---

## Image Optimization

- Preferred format: **AVIF** (highest compression), fallback: **WebP**
- Next.js Image component (`next/image`) is required for all images — never use `<img>` tags
- Remote images from `gravatar.com` (and subdomains) are whitelisted in `next.config.ts`
- To add a new remote hostname, edit `next.config.ts` → `images.remotePatterns`

---

## Public Assets

```
public/
├── fonts/                  # Degular font family (WOFF/WOFF2) — loaded in layout.tsx
├── images/                 # Project screenshots (AVIF optimized)
├── icons/                  # SVG icons
├── sound/                  # Audio assets
├── Fullstack_developer.pdf # Resume — linked in hero and header
├── manifest.json           # PWA manifest
└── myself.webp             # Portrait image
```

Fonts are self-hosted and declared in `globals.css` via `@font-face`. Do not add Google Fonts imports.

---

## SEO & Metadata

Configured in `src/app/layout.tsx`:
- Open Graph tags, Twitter cards
- Favicon, PWA manifest
- Viewport and color scheme meta tags

When updating personal info (name, title, location), update `layout.tsx` metadata AND the relevant section module view file.

---

## Environment Variables

No `.env` files currently used. If adding environment variables:
- Create `.env.local` for secrets (Resend API key, etc.)
- Never commit `.env.local` — it's in `.gitignore`
- Prefix public variables with `NEXT_PUBLIC_`

---

## Sections & Content

| Section | Module Path | Description |
|---|---|---|
| Hero | `src/modules/hero/view/hero.tsx` | Aurora BG, portrait, stats, CV download, social links |
| Experience | `src/modules/experience/view/experience-view.tsx` | 5 work roles with StarBorder cards |
| Projects | `src/modules/projects/view/projects-view.tsx` | 5 personal projects grid |
| Stack | `src/modules/stack/view/stack-view.tsx` | 25 hard skills + 8 soft skills |
| Testimonials | `src/modules/testimonials/view/testimonials-view.tsx` | Reviews + 3D globe |
| Brand | `src/modules/brand/view/brand-view.tsx` | Company logo marquee |
| Footer | `src/modules/footer/view/footer-view.tsx` | CTA, contact, social links |

---

## Personal Info (Reference)

- **Name**: Amirreza Jalali Motlagh
- **Title**: Fullstack Developer
- **Location**: Utrecht, Netherlands (CET timezone)
- **Experience**: 6+ years
- **Primary Stack**: React / Next.js · Vue 3 / Nuxt 3
- **Resume**: `/public/Fullstack_developer.pdf`
- **Socials**: LinkedIn, GitHub, Telegram, WhatsApp

---

## ESLint

- Extends `next/core-web-vitals` and `next/typescript`
- `@typescript-eslint/no-explicit-any` is disabled
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

Run: `pnpm lint`

---

## Deployment

- Platform: **Vercel**
- Speed Insights are enabled via `@vercel/speed-insights`
- No special build configuration needed — `pnpm build` works out of the box
