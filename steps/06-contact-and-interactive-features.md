# Step 6: Contact Page (`/contact`) & Interactive Features Structure

## 1. Contact Page Layout & Components

### A. High-Impact Header
- Large bold typography: `"LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER."`
- Live Location & Timezone Indicator: `"Bhopal / Remote | IST (UTC+5:30) | Local Time: HH:MM AM/PM"`.

### B. Interactive Contact Form
- Form fields:
  - `Name` (Text input with floating label)
  - `Email` (Email validation with regex)
  - `Subject` (Dropdown or text input: Project Inquiry, Job Opportunity, Collaboration, General)
  - `Message` (Rich textarea with word counter)
- Submission state:
  - Form posts asynchronously via `fetch()` to `POST /api/v1/contact` on Java Spring Boot backend (`akgport_backend`).
  - Animated submission spinner and success toast message ("Message delivered! I will reply within 24 hours.").
  - Form reset upon successful delivery.

---

## 2. Quick Connect & Social Hub
- **Direct Email Copy Widget**: One-click button to copy `anshulkumargodiwar2001@gmail.com` to clipboard with toast feedback.
- **Social Media Quick Links**:
  - LinkedIn: `https://linkedin.com`
  - Portfolio / GitHub profile links.
- **Schedule Call Option (Optional Integration)**: Embed or button launcher for Cal.com / Calendly popup for instant meeting scheduling.

---

## 3. Real-Time System Health & Backend Status Widget
- Footer element displaying live status of the connected Java Spring Boot API:
  - Green indicator light: `Backend Operational | Spring Boot 3.3 | PostgreSQL / Supabase Connected`.
  - Latency ticker (e.g. `Response time: 42ms`).
