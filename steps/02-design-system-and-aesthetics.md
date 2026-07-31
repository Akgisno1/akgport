# Step 2: Design System & Visual Aesthetics Guide

## 1. Aesthetic Concept & Inspiration Sync

### Inspiration 1: k72.ca (Creative Agency Energy)
- **Kinetic Typography**: Large display headers using tight line-height fonts that scale with viewport width (`clamp()`).
- **High-Impact Transitions**: Page changes feel continuous, with full-screen shutter sweeps or curtain wipes.
- **Editorial Grid**: Unconventional contrast, heavy borders, crisp monochrome tones paired with vibrant accent pops.

### Inspiration 2: nexlevr.app (Modern Tech & Product SaaS Aesthetics)
- **Glassmorphism & Neon Accents**: Dark background (`#09090b` obsidian) with ultra-thin glass borders (`border-white/10`) and subtle neon glows (`teal-500`, `emerald-400`, `cyan-500`).
- **Metric Cards & Stat Displays**: Highlighting impact metrics prominently (e.g. `60% API Latency Reduction`, `85% Test Coverage`, `75% Faster Deployment`, `400+ DSA Solved`).
- **Micro-Interactions**: Hover magnetic buttons, glowing aura trails around cards, interactive skill radar, live status pingers.

---

## 2. Color Palette & Token Hierarchy

| Token Name | Hex / Class | Application |
|---|---|---|
| `bg-primary` | `#09090b` / `zinc-950` | Primary app background (Dark mode default) |
| `bg-surface` | `#18181b` / `zinc-900` | Card background, modal surfaces |
| `bg-glass` | `rgba(24, 24, 27, 0.6)` | Glassmorphic floating headers and cards |
| `accent-teal` | `#14b8a6` / `teal-500` | Primary glow, interactive focus, active states |
| `accent-cyan` | `#06b6d4` / `cyan-500` | Secondary gradient accent |
| `accent-emerald`| `#10b981` / `emerald-500`| Success pinger, live availability status |
| `text-primary` | `#fafafa` / `zinc-50` | Headings, high emphasis text |
| `text-muted` | `#a1a1aa` / `zinc-400` | Body copy, secondary metadata, subtext |
| `border-subtle`| `rgba(255,255,255,0.08)`| Delicate card outlines and table dividers |

---

## 3. Typography Hierarchy

- **Display Header Font**: `Syne` or `Outfit` (Google Font) - Bold, futuristic, geometric display weight for section titles and hero statements.
- **Body & Subtitles Font**: `Inter` or `Plus Jakarta Sans` - Clean readability for project breakdowns, experience descriptions, and bullet points.
- **Code & Tech Specs Font**: `JetBrains Mono` or `Fira Code` - Monospaced display for tech stacks, API responses, terminal view mode, and metric values.

---

## 4. Animation & Interaction Design Principles

- **Scroll-Driven Storytelling**: Use GSAP ScrollTrigger or Framer Motion `useScroll` to trigger subtle element reveals as the user scrolls.
- **Hover Micro-Effects**: Cards tilt on 3D axes (Perspective hover effect), buttons expand glowing borders on hover.
- **Interactive Cursor**: Custom pointer with dual ring effect: inner dot follows exact position, outer ring lags smoothly behind and expands over project media.
- **Page Transitions**: Seamless layout animations when switching pages (e.g. from `/projects` to `/projects/queue-overflow`).
