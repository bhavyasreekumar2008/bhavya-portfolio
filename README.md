# Bhavya Sreekumar — Swiss Editorial Monograph Portfolio

A modern, high-end personal portfolio website designed in an architectural **Swiss Minimalist / Magazine Monograph** aesthetic for **Bhavya Sreekumar**, first-year B.Tech Computer Science & Engineering (Artificial Intelligence) student at **Thejus Engineering College, Thrissur, Kerala**.

---

## 🏛 Design Architecture & References

This portfolio translates physical luxury art and architecture exhibition monographs into an interactive digital experience:
- **Atmosphere**: Calm, architectural, gallery-like, generous negative space, zero clutter.
- **Palette**:
  - **Canvas Background**: `#EDEDED` (Neutral exhibition gallery light grey)
  - **Paper Surface**: `#F6F6F4` (Warm uncoated fine art paper)
  - **Primary Ink**: `#111111` (Dense near-black)
  - **Secondary Pencil**: `#6B6B6B` (Muted caption grey)
  - **Hairline Rules**: `#D9D9D6` (1px structural grid & spine dividers)
  - **Warm Accent**: `#C8B79E` (Raw canvas taupe/beige extracted from reference paintings)
  - **Dark Gallery Mode**: `#0E0E0E` / `#161616` with `#F2F2F0` text and `#2A2A28` hairlines
- **Signature Book Spreads**:
  - **Vertical Split Cover (Hero)**: Left crisp spine with giant 90° rotated bottom-aligned `PORTFOLIO` typography and vertical author attribution, paired with an architectural sculptural visual and tagline reveal.
  - **Double-Page Book Spreads**: Open magazine spreads featuring center spine fold lines with subtle inset drop shadows.
  - **Table of Contents (Index)**: Architectural index grid with project plates and jump anchors.
  - **Curated Project Spreads**: Alternating two-page spreads with high-contrast framed plates (grayscale by default, revealing full color and subtle zoom on hover) and Swiss specification metadata blocks (*DATE AND LOCATION*, *MATERIAL / STACK*, *DESCRIPTION*).
  - **Technical Repertoire Matrix**: Clean typographic tabular rows without tacky progress meters.
  - **Academic Chronology**: Hairline timeline documenting studies at Thejus Engineering College.
  - **Correspondence Terminal**: Underlined minimalist input fields with real-time validation and instant confirmation.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Swiss architectural design tokens
- **Kinetic Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) for momentum-based print catalog feel
- **Animation & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── hero-sculpture.svg      # Architectural 3D cover visual
│   │   ├── portrait-bhavya.svg     # Monograph portrait plate
│   │   ├── project-1-sculpture.svg # Vision classifier exhibition plate
│   │   ├── project-2-geometric.svg # Constructivism triptych plate
│   │   ├── project-3-knot.svg      # Chrome continuous knot plate
│   │   └── abstract-painting.svg   # Warm taupe abstract expressionist plate
├── src/
│   ├── app/
│   │   ├── globals.css             # Architectural tokens, spine shadows & Swiss utilities
│   │   ├── layout.tsx              # Root layout with SEO meta tags & Open Graph configs
│   │   └── page.tsx                # Monograph sequence composing all spreads
│   ├── components/
│   │   ├── AboutSection.tsx        # 2-page spread matching reference "About Me"
│   │   ├── ContactSection.tsx      # Architectural underlined input form & social links
│   │   ├── ContentsSection.tsx     # Table of contents index grid
│   │   ├── CustomCursor.tsx        # Minimal magnetic dot cursor with "VIEW" badge
│   │   ├── EducationTimeline.tsx   # Hairline academic chronology timeline
│   │   ├── Footer.tsx              # Colophon, monolith name wordmark & back-to-top
│   │   ├── HeroCover.tsx           # Vertical split spine + 90° rotated PORTFOLIO text
│   │   ├── Navbar.tsx              # Sticky running header with numbered chapter links
│   │   ├── ProjectSpread.tsx       # Alternating exhibition project spreads
│   │   ├── ScrollProgress.tsx      # Top 1.5px warm taupe scroll indicator
│   │   ├── SkillsSection.tsx       # Typographic skills matrix
│   │   ├── SmoothScroll.tsx        # Lenis momentum smooth scrolling provider
│   │   └── ThemeToggle.tsx         # Dark / Light gallery theme switcher
│   └── data/
│       └── portfolio.ts            # SINGLE SOURCE OF TRUTH (All content lives here!)
```

---

## ✏️ How to Customize Your Content

All text, bio, college credentials, social media URLs, project descriptions, and skills are centralized in:

👉 `src/data/portfolio.ts`

To personalize your portfolio:
1. Open `src/data/portfolio.ts`.
2. Update your bio, social links (GitHub, LinkedIn, Email), or add new projects to the `projects` array.
3. To replace placeholder images, place your images in `public/images/` and update the `image` path in `portfolio.ts`.

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 One-Click Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Swiss Minimalist Editorial Portfolio for Bhavya Sreekumar"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Keep the default settings (Next.js preset) and click **Deploy**.
5. Your portfolio is live with automatic global CDN caching, high-speed image optimization, and full SEO metadata!
