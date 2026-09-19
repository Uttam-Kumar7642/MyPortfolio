# Uttam Kumar — Portfolio (React + Tailwind CSS)

A full-stack developer portfolio built with **React 19**, **Vite**, and **Tailwind CSS v4**, recreating the provided design mockup with your own illustration assets.

## What's inside

- `src/components/Navbar.jsx` — sticky nav with mobile menu
- `src/components/Hero.jsx` — headline, stats, quote, hero illustration
- `src/components/About.jsx` — bio, quick facts, "What I Bring"
- `src/components/TechStack.jsx` — tech stack grid with icons
- `src/components/Experience.jsx` — internship/experience timeline
- `src/components/Projects.jsx` — featured projects grid
- `src/components/Contact.jsx` — call-to-action band
- `src/components/Footer.jsx` — footer with links & socials
- `src/data/content.js` — **all text content lives here** (edit this file to update copy, stats, projects, experience, etc. without touching components)
- `src/assets/` — your uploaded illustrations, used directly in Hero and About

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/`.

## Customizing

- **Text & data**: edit `src/data/content.js`.
- **Colors**: edit the `@theme` block at the top of `src/index.css` (brand color scale).
- **Fonts**: Poppins (display) + Inter (body), loaded via Google Fonts in `index.html`.
- **Links**: social icons currently point to `#contact`; update the `href` values in `Navbar.jsx`, `Hero.jsx`, and `Footer.jsx` with your real LinkedIn/GitHub/email links.
- **Resume**: the "Download CV" button in `Hero.jsx` currently links nowhere — drop a PDF into `public/` (e.g. `public/resume.pdf`) and point the button's `href` at it.

## Tech

React 19 · Vite · Tailwind CSS v4 · react-icons
