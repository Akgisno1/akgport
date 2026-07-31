# Step 1: Overall Architecture & Routing Specification

## 1. Executive Summary
This document outlines the architectural transformation of `akgport` from a single-page scroll layout into a modern, multi-page, high-performance web portfolio built on Next.js 14 App Router. 

The aesthetic identity combines:
- **k72.ca**: Kinetic typography, oversized headers, dark/light contrast modes, smooth fluid page transitions, fluid mouse interactions, and agency-level visual impact.
- **nexlevr.app**: Sleek glassmorphism, precise data-driven metric cards, dark futuristic UI panels, glowing badge indicators, and interactive product-grade UX.

---

## 2. Multi-Page Route Hierarchy

```
app/
├── layout.tsx                # Root layout (Theme provider, Smooth Scroll, Global Navbar, Footer)
├── page.tsx                  # Home Page (Hero, Kinetic Headline, Featured Work, Metric Counter)
├── (routes)/
│   ├── projects/
│   │   ├── page.tsx          # All Projects Grid with Filter & Tagging
│   │   └── [id]/
│   │       └── page.tsx      # Deep-dive Case Study (Metrics, Screenshots, Tech Stack, Architecture)
│   ├── experience/
│   │   └── page.tsx          # Career Journey Timeline & Engineering Philosophy (SideHusslr, Aadi Foundation)
│   ├── about/
│   │   └── page.tsx          # About Me, AWS Certification Badges, DSA Stats (400+ solved), Terminal Mode
│   └── contact/
│       └── page.tsx          # Interactive Contact Form, Live Status Indicator, Cal.com integration option
```

---

## 3. Data Integration Architecture
- **Static Pre-rendering & Dynamic Hydration**: Core pages pre-rendered via Next.js SSG / ISR, with interactive components fetching live data from the Java Spring Boot backend (`akgport_backend`).
- **SWR / React Query Integration**: Client-side data fetching for live metrics (e.g. project view counts, message submissions, live system health, GitHub commit activity).
- **Fallback State**: Graceful degradation to local static JSON fallback data if the Java backend is unreachable during deployment maintenance.

---

## 4. Global Navigation & Layout Strategy
- **Floating Kinetic Header**: Modern glassmorphic navigation bar with active route highlighting, smooth transition backdrop, theme switcher, and sound toggle (optional ambient sound).
- **Full-screen Overlay Menu (k72.ca style)**: Mobile & desktop trigger for an immersive navigation overlay featuring bold typographic page titles and live timezone clock (IST / UTC).
- **Custom Cursor Follower**: Subtle dot/ring cursor that expands over interactive project cards and clickable elements.
- **Global Footer**: Kinetic ticker showing availability status ("Open for Full-time Backend / Full Stack roles"), quick social links, live backend API status badge, and email copy widget.
