# 📓 Nyaboke Grace — Tactile Portfolio & Field Notes

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Go](https://img.shields.io/badge/Go-1.22-00ADD8?style=flat-square&logo=go&logoColor=white)](https://golang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> *"Digital design is like painting, except the paint never dries."* — Neville Brody

An editorial, tactile paper-and-ink digital portfolio and field notebook built for **Nyaboke Grace** — Brand Strategist, UI/UX Designer, and Front-End Developer based in Nairobi, Kenya.

The application discards generic template aesthetics in favor of an authentic sketchbook experience: featuring hand-drawn asymmetrical card borders, fibrous paper grain overlays, translucent washi tape pins, binder punch-hole margins, kinetic typography, ink stamp badges, and physics-eased scrollytelling animations powered by **GSAP**.

---

## 📑 Table of Contents

- [✨ Design Philosophy & Aesthetics](#-design-philosophy--aesthetics)
- [🚀 Architecture & How It Works](#-architecture--how-it-works)
  - [Section 01 — Index & Brand Strategy Fold](#1-section-01--index--brand-strategy-fold)
  - [Section 02 — Flagship Case Studies & Technical Blueprints](#2-section-02--flagship-case-studies--technical-blueprints)
  - [Section 03 — Outside the IDE (Music, Cooking, Travel)](#3-section-03--outside-the-ide-music-cooking-travel)
  - [Section 04 — Technical Stack & Design Craft](#4-section-04--technical-stack--design-craft)
  - [Section 05 — Field Dispatch (Contact System)](#5-section-05--field-dispatch-contact-system)
  - [Global Layout — Navigation & Margin Socials](#6-global-layout--navigation--margin-socials)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🛠️ Tech Stack & Dependencies](#️-tech-stack--dependencies)
- [⚙️ Prerequisites](#️-prerequisites)
- [🖥️ How Exactly to Run This to View It](#️-how-exactly-to-run-this-to-view-it)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Quick Start — View the Portfolio (Frontend)](#step-2-quick-start--view-the-portfolio-frontend)
  - [Step 3: Full Stack — Run with Go Contact Dispatch Server](#step-3-full-stack--run-with-go-contact-dispatch-server)
  - [Step 4: View Production Build Locally](#step-4-view-production-build-locally)
- [🔌 API & Backend Dispatch Service](#-api--backend-dispatch-service)
- [🚢 Production Build & Deployment](#-production-build--deployment)
- [🎨 Customization Guide](#-customization-guide)
- [📬 Contact & Socials](#-contact--socials)

---

## ✨ Design Philosophy & Aesthetics

This portfolio is engineered around the physical metaphors of an architect's field sketchbook and tactile laboratory:

| Metaphor / Element | Implementation Detail |
| :--- | :--- |
| **Paper Grain & Tooth** | Multi-layered SVG fractal turbulence (`feTurbulence`) and radial vignette overlays blended with `mix-blend-mode: multiply` create an authentic fibrous sketchbook paper texture. |
| **Organic Asymmetrical Borders** | Custom CSS irregular border-radii (`255px 15px 225px 15px/15px 225px 15px 255px`) evoke hand-cut paper and ink card contours with hard-edge charcoal drop shadows. |
| **Washi Tape & Pins** | Semi-transparent frosted-glass masking tape strips (`.washi-tape`) with jagged dashed ends pin cards, photographs, and dossiers to the desk. |
| **Notebook Spine & Binder Holes** | A desktop left-margin crimson rule line (`.sketchbook-spine`) punctured with realistic 3D punched binder holes down the viewport edge. |
| **Charcoal & Ink Stamps** | Stamped status chips (`.ink-stamp`, `.ink-stamp-coral`, `.ink-stamp-cyan`) tilted slightly with monospace labels like field specimen tags. |
| **Technical Blueprint Grids** | Precise orthogonal CAD/drafting millimeter grids for technical schematics and hardware diagnostics. |
| **Handcrafted Typography** | Expressive font pairing: *Architects Daughter* (headlines & titles), *Patrick Hand* (body prose), *Caveat* (handwritten marginalia notes), and *Space Mono* (technical data & metadata). |

---

## 🚀 Architecture & How It Works

The project is architected with a decoupled frontend and backend:
- **Frontend (`frontend/`):** React 19 single-page application bundled with Vite 8, styled with Tailwind CSS, animated with GSAP ScrollTrigger.
- **Backend (`backend/`):** Lightweight Go microservice providing sanitized HTTP dispatch for field inquiries.
- **Vite Proxy:** In development, Vite seamlessly proxies API calls from `/api/*` to the Go service on `:8080`, allowing zero-CORS development.

```text
┌─────────────────────────────────────────────────────────────┐
│                 Browser Client (React 19 SPA)               │
│   Tailwind CSS · GSAP ScrollTrigger · Responsive Sketchbook  │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       Static Assets & UI              POST /api/contact
       (Vite Dev Server :5173)         (JSON dispatch)
               │                               │
               ▼                               ▼
       Vite Hot-Reload                ┌──────────────────────┐
       Build Pipeline                 │ Go Dispatch Server   │
                                      │ Port 8080            │
                                      │ - Input Sanitization │
                                      │ - Logging / Routing  │
                                      └──────────────────────┘
```

### 1. Section 01 — Index & Brand Strategy Fold
- **Component:** `frontend/src/sections/Home.jsx`
- **Headline Animation:** Staggered charcoal ink reveal fading into *"Strategize. Design. Develop."* with an animated dynamic pencil underline.
- **Scrollytelling Quote:** Parallax drifting banner featuring Neville Brody's design quote.
- **Hand-Drawn Portrait Frame:** Slanted Polaroid-style card featuring Nyaboke Grace with washi tape pinning and active field status badge.
- **Core Specialties Grid:** Interactive cards breaking down **Brand Strategy**, **UI/UX Design**, and **Front-End Development**.

### 2. Section 02 — Flagship Case Studies & Technical Blueprints
- **Component:** `frontend/src/sections/Works.jsx`
- **Interactive Dossier Tabs:** Hand-drawn tabbed navigation switching between three production case studies with zero page reloads:
  1. **NEMO (IoT Aquaculture & Copernicus Satellite Telemetry):**
     - Subsurface ultrasonic transducer monitoring for fish pond water levels and biomass.
     - Integration with European Space Agency Copernicus Sentinel-2 / Sentinel-3 Earth Observation APIs for algae bloom detection.
     - Offline GSM SMS failover daemon for zero-internet rural farmer alerts.
     - Real-time interactive simulated telemetry data stream (Dissolved O₂, Depth, Bloom Risk).
  2. **Siwolo Law Advocates (Commercial Legal Practice Modernization):**
     - Complete brand identity architecture, monogram logo, and corporate stationery design.
     - Automated client consultation booking engine with conflict-of-interest screening triage.
     - Quantified commercial impact metrics (+180% consultations, -65% onboarding latency, 40+ hrs saved/mo).
  3. **ShieldHer (Rapid Response Women Safety & Emergency Beacon):**
     - Disguised emergency panic trigger UI for high-stress situations.
     - Live geolocation GPS streaming mesh to trusted emergency circles.
     - Crowdsourced directory of verified safe havens, pharmacies, and clinics.
- **Technical Schematics Box:** Blueprint grid rendering live architectural specifications for the active project.
- **Ethos Quote:** Steve Jobs quote on functional design with technical crosshair watermarks.

### 3. Section 03 — Outside the IDE (Music, Cooking, Travel)
- **Component:** `frontend/src/sections/OutsideTheIde.jsx`
- **Interactive Music Player:**
  - Dedicated to **Amapiano & Neo-Soul** grooves.
  - Hand-drawn retro cassette deck with dual spools rotating via CSS `@keyframes` while playing.
  - Interactive multi-bar rhythmic equalizer responding to volume slider adjustments.
  - Track switching between Amapiano, Neo-Soul vinyl grooves, and acoustic vocal jazz.
- **Culinary Arts & Kitchen Craft:**
  - Interactive dish selector cards (*Swahili Coconut Curry*, *Cast Iron Sizzles*, *Aromatic Pilau & Biryani*, *Artisan Oven Baking*).
  - Ingredient breakdowns, spice alchemy, and aromatic profiles.
- **Kenyan Expeditions & Panoramic Road Trips:**
  - Interactive winding road trip vector canvas rendered in SVG.
  - **GSAP ScrollTrigger** dynamically draws the charcoal path line (`stroke-dashoffset`) as the user scrolls through the section.
  - Rotating magnetic compass widget tracking scroll velocity.
  - Interactive waypoints with photographic and geographical notes:
    - *Diani Kongo River* (mangroves, golden hour canoes)
    - *Lamu Old Town* (ancient Swahili dhow sailing)
    - *Maasai Mara* (savanna dawn safaris)
    - *Museums & Contemporary Art Galleries* (visual storytelling)
    - *Road Trips to Nakuru* (Rift Valley lake drives & craters)
    - *Kisumu on the Lake* (Lake Victoria sunsets)

### 4. Section 04 — Technical Stack & Design Craft
- **Component:** `frontend/src/sections/TechStack.jsx`
- **Kinetic Cycling Headline:** Infinite GSAP text timeline cycling through *"Strategize. Architect. Implement. Optimize."*
- **Animated Skill Meters:** Charcoal-bordered percentage bars filling smoothly when scrolled into view:
  - *Creative Front-End:* React, GSAP & ScrollTrigger, Tailwind CSS, TypeScript.
  - *Systems, Hardware & IoT:* Go (Golang), ESP32 Sensors, Copernicus APIs, Offline GSM Daemons.
  - *Brand Strategy & UI/UX:* Visual Identity, Design Systems, Funnels & SEO, Legal Intake Portals.
- **Design Philosophy Quote:** Dieter Rams minimalist axiom (*"Less, but better"*).

### 5. Section 05 — Field Dispatch (Contact System)
- **Component:** `frontend/src/sections/Contact.jsx`
- **Envelope Postmark Aesthetic:** Hand-addressed letter motif with authentic "Nairobi Airmail" circular postal cancellation stamp.
- **Interactive Inputs:** Custom input underlines that draw across when fields are focused.
- **Form Submission Engine:**
  - Dispatches JSON payload to `/api/contact` on the Go backend server.
  - Real-time transmission status banner (`submitting`, `success`, `error`).
  - Graceful fallback: captures message in field notes even if the local Go backend is not running, ensuring visitors never encounter a broken form.
- **Desk Location Card:** Nairobi, Kenya (GMT+3) with direct email link.

### 6. Global Layout — Navigation & Margin Socials
- **Navigation (`frontend/src/components/Nav.jsx`):** Glassmorphic floating island with washi tape accents, responsive mobile hamburger drawer, and smooth section scrolling.
- **Margin Index (`frontend/src/components/Socials.jsx`):** Fixed vertical bookmark links pinned to the left margin, animated into view using GSAP ScrollTrigger as the user leaves the hero fold.
- **Notebook Spine (`frontend/src/App.jsx`):** Red notebook rule with realistic punch holes down the side.

---

## 📂 Project Directory Structure

```text
grxce/
├── backend/                             # Go HTTP microservice
│   ├── go.mod                           # Go module definition (Go 1.22.2)
│   └── main.go                          # HTTP server & /api/contact handler with CORS
├── frontend/                            # React 19 + Vite frontend application
│   ├── index.html                       # HTML entry point with Google Fonts preconnects
│   ├── package.json                     # Frontend dependencies & scripts
│   ├── package-lock.json                # Deterministic dependency tree lock
│   ├── postcss.config.cjs               # PostCSS configuration for Tailwind & Autoprefixer
│   ├── tailwind.config.cjs              # Custom theme: paper colors, fonts, charcoal strokes
│   ├── vite.config.js                   # Vite 8 configuration with React plugin & /api proxy
│   └── src/
│       ├── App.jsx                      # Main sketchbook wrapper & notebook margin spine
│       ├── main.jsx                     # React 19 root bootstrap
│       ├── assets/                      # Brand assets, portrait, and case study visuals
│       │   ├── grace.png                # Nyaboke Grace portrait photograph
│       │   ├── nemo.jpeg                # NEMO IoT & Aquaculture telemetry visual
│       │   ├── siwolo.jpg               # Siwolo Law Advocates corporate identity
│       │   ├── shieldher.jpeg           # ShieldHer emergency beacon screenshot
│       │   ├── quote.jpeg               # Editorial quote graphic
│       │   └── placeholder.txt          # Asset guide notes
│       ├── components/                  # Layout and shared UI components
│       │   ├── Nav.jsx                  # Floating header & mobile drawer
│       │   └── Socials.jsx              # Pinned margin bookmark index
│       ├── sections/                    # Portfolio sections
│       │   ├── Home.jsx                 # Hero fold, portrait, specialties
│       │   ├── Works.jsx                # Case study dossiers & blueprint grid
│       │   ├── OutsideTheIde.jsx        # Cassette deck, culinary cards, GSAP road trip
│       │   ├── TechStack.jsx            # Kinetic headline, animated skill meters
│       │   └── Contact.jsx              # Nairobi airmail dispatch form
│       └── styles/
│           └── index.css                # CSS directives, SVG paper grain, washi tape
├── .gitignore                           # Git ignore rules (node_modules, dist, .gocache)
└── README.md                            # Comprehensive project documentation
```

---

## 🛠️ Tech Stack & Dependencies

### Frontend Core
- **[React 19](https://react.dev/)** — Next-generation declarative UI runtime.
- **[Vite 8](https://vitejs.dev/)** — Blazing fast dev server and build tool.
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utility-first styling with custom paper/ink tokens.
- **[GSAP 3.12](https://greensock.com/gsap/)** — High-performance animation engine with the **ScrollTrigger** plugin for physics-eased scrollytelling.
- **[React Router DOM](https://reactrouter.com/)** — Client-side navigation routing.
- **[PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)** — CSS preprocessing and vendor prefixing.

### Backend Microservice
- **[Go (Golang 1.22)](https://golang.org/)** — High-performance backend microservice.
- **Standard Library:**
  - `net/http` — Native HTTP routing, CORS preflight handling, and server.
  - `encoding/json` — JSON payload decoding and serialization.
  - `regexp` — HTML/script tag stripping and input sanitization.

### Custom Typography (Loaded via Google Fonts)
- **Architects Daughter** — Hand-drawn uppercase headings and blueprint titles.
- **Patrick Hand** — Warm, natural cursive body copy.
- **Caveat** — Organic handwritten notes and marginalia scribbles.
- **Space Mono** — Monospaced technical telemetry, tags, and timestamps.

---

## ⚙️ Prerequisites

Before running the application, ensure the following are installed on your workstation:

1. **Node.js**: `v18.0.0` or higher (`v20+` LTS recommended). Check with:
   ```bash
   node -v
   ```
2. **npm**: `v9.0.0` or higher (comes bundled with Node.js). Check with:
   ```bash
   npm -v
   ```
3. **Go (Golang)**: `v1.22` or higher (optional, only needed if you want to run the local Go contact dispatch service). Check with:
   ```bash
   go version
   ```

---

## 🖥️ How Exactly to Run This to View It

Follow these exact steps to run and view the portfolio in your browser:

### Step 1: Clone the Repository

```bash
git clone https://github.com/nyabokegrace/grxce.git
cd grxce
```

---

### Step 2: Quick Start — View the Portfolio (Frontend)

To run the frontend and explore all sections, animations, music cassette player, and case studies:

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

> **Note:** The entire portfolio (visuals, scrollytelling animations, music player, culinary cards, interactive road trip, and case studies) is fully functional immediately! If the Go backend is not running, the contact form includes a graceful fallback that acknowledges submissions cleanly.

---

### Step 3: Full Stack — Run with Go Contact Dispatch Server

If you also want the Go contact dispatch backend running to process form submissions live:

#### Option A: Single Command Concurrently (Recommended)
From within the `frontend/` directory, run:
```bash
npm run start
```
This automatically boots both:
- **Vite Frontend Server** on `http://localhost:5173`
- **Go Backend Service** on `http://localhost:8080`

#### Option B: In Separate Terminals

**Terminal 1 (Frontend):**
```bash
cd frontend
npm run dev
```
> Runs the Vite development server at `http://localhost:5173` with Hot Module Replacement (HMR).

**Terminal 2 (Backend):**
```bash
cd backend
go run .
```
> Starts the Go microservice on `http://localhost:8080`.

Vite is preconfigured to proxy `/api/*` requests from `http://localhost:5173` directly to `http://localhost:8080`, so the contact form works seamlessly without CORS issues.

---

### Step 4: View Production Build Locally

To test the compiled, minified production build locally:

```bash
cd frontend
npm run build
npm run preview
```

Vite will serve the production bundle at:
```
http://localhost:4173
```

---

## 🔌 API & Backend Dispatch Service

The Go microservice in `backend/main.go` exposes the contact dispatch endpoint:

### Endpoint: `POST /api/contact`

#### Headers:
```http
Content-Type: application/json
```

#### Request Body:
```json
{
  "name": "Grace Hopper",
  "email": "grace@example.com",
  "message": "Interested in collaborating on an IoT telemetry dashboard."
}
```

#### Sanitization & Validation:
- Rejects missing or empty fields with HTTP `400 Bad Request`.
- Strips any HTML tags or script injection attempts using regex (`<[^>]*>`).
- Configured with CORS headers allowing cross-origin requests from `http://localhost:5173`.

#### Response:
```json
{
  "message": "Thanks — message received."
}
```

#### Environment Variables:
- `PORT`: Custom port for the Go server (defaults to `8080` if unset). Example:
  ```bash
  PORT=9000 go run .
  ```

---

## 🚢 Production Build & Deployment

### 1. Frontend Static Deployment (Vercel, Netlify, Cloudflare Pages, GitHub Pages)
- **Root Directory / Base Directory:** `frontend`
- **Build Command:** `npm run build`
- **Publish Directory / Output Directory:** `dist`

### 2. Backend Deployment (Render, Fly.io, Railway, DigitalOcean)
- **Root Directory:** `backend`
- **Build Command:** `go build -o server .`
- **Start Command:** `./server`
- **Environment Variables:** `PORT=8080`

---

## 🎨 Customization Guide

### Adding or Updating Case Studies
Open `frontend/src/sections/Works.jsx` and edit the `CASE_STUDIES` array:
```javascript
{
  id: 'my-project',
  title: 'Project Name',
  subtitle: 'One-line description',
  role: 'Your Role',
  context: 'Hackathon / Client Work',
  tagColor: 'ink-stamp-coral',
  badge: 'PRODUCTION',
  img: myProjectImg,
  summary: 'Full executive summary...',
  bulletPoints: [
    { title: 'Feature 1', desc: 'Description of feature 1' }
  ],
  techStack: ['React', 'Go', 'TailwindCSS']
}
```

### Modifying the Tactile Color Palette
Open `frontend/tailwind.config.cjs` to customize the sketchbook palette:
```javascript
colors: {
  paper: '#F4F1EA',          // Authentic warm sketchbook background
  'paper-light': '#FCFBF7',  // Card background
  'paper-dark': '#EDE7D9',   // Darker paper tint for recessed wells
  charcoal: '#1C1C1C',       // 3px hand-drawn ink border stroke
  cyan: '#D4F1F9',           // Technical cyan highlighter accent
  coral: '#FF6B6B',          // Vibrant red-orange highlighter / CTA
  pencil: '#52525B',         // Graphite pencil notation text
  highlighter: '#FEF08A',     // Fluorescent yellow highlight
  margin: '#E05D5D'          // Crimson margin spine rule
}
```

### Adding Music Tracks or Road Trip Stops
- **Music Tracks:** Update the `tracks` array in `frontend/src/sections/OutsideTheIde.jsx`.
- **Road Trip Stops:** Update the `destinations` array in `frontend/src/sections/OutsideTheIde.jsx`.

---

## 📬 Contact & Socials

**Nyaboke Grace**  
*Brand Strategist · UI/UX Designer · Front-End Developer*  
📍 Nairobi, Kenya (GMT+3) · Available for Remote Engagements Worldwide

- **Email:** [nyabokegrace007@gmail.com](mailto:nyabokegrace007@gmail.com)
- **GitHub:** [@nyabokegrace](https://github.com/nyabokegrace)
- **LinkedIn:** [nyabokegrace](https://www.linkedin.com/in/nyabokegrace)
- **Twitter / X:** [@nyaboke_grace](https://twitter.com/nyaboke_grace)

---

<div align="center">
  <sub>Crafted with paper, ink, React 19, GSAP, and Go. © 2026 Nyaboke Grace. All rights reserved.</sub>
</div>
