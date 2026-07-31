# Step 4: Projects Directory (`/projects`) & Case Study (`/projects/[id]`) Structure

## 1. Projects Index Page (`/projects`)

### A. Filter Bar & View Options
- **Filter Tabs**: `All`, `Full Stack / Next.js`, `Java & Backend`, `AI & GenAI`, `Distributed Systems & Cloud`.
- **Search Bar**: Live search by project name, tech tag, or database used.
- **Toggle Layout**: Grid View vs. Compact Editorial List View.

### B. Project Showcase Cards
- Card layout inspired by k72.ca large visual blocks:
  - High-resolution thumbnail image / loop video preview.
  - Hover state: Zoom effect on thumbnail, floating tag badge, metric highlight overlay.
  - Quick action buttons: GitHub repository link, Live production link, "Read Case Study" pill button.

---

## 2. Dynamic Case Study Detail Page (`/projects/[id]`)

### A. Header & Key Stats
- Oversized Project Title.
- Tagline & Project Role (e.g. Lead Developer, Full Stack Intern).
- Quick Stats Grid (nexlevr.app style):
  - Tech Stack Pill Badges.
  - Production Status (Live / Open Source / Demo).
  - Main Performance Impact Metric (e.g. "+70% Answer Availability", "50% Reduction in roll call time").

### B. Project Deep-Dive Sections
1. **The Challenge / Problem Statement**: What was missing or inefficient in existing solutions.
2. **System Architecture & Design**: Interactive block diagram showing frontend, backend (Java / Express / Next.js), database (PostgreSQL / Supabase / MongoDB), and AWS Cloud infrastructure.
3. **Key Engineering Contributions**:
   - Highlighting optimization stories (e.g. JWT security, SSR setup, latency reductions, test suite creation).
   - Code snippet gallery (Syntax highlighted code block displaying critical algorithms or API contracts).
4. **Key Features Carousel**: Screenshots, screen recordings, or interactive demos.
5. **Results & Learnings**: Quantitative outcomes, test coverage statistics, unit testing discipline.

---

## 3. Next/Previous Project Navigation
- Bottom footer transition linking seamlessly to the next project with an animated thumbnail teaser, encouraging continuous browsing across the portfolio.
