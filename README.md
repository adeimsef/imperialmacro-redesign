# Imperial Macro — Redesigned (Static / GitHub Pages Ready)

A fresh, Framer/Figma-level redesign of https://imperialmacro.com — keeping the exact brand and links of the original site.

## Brand preserved
- **Wine:** `#6C162B` (primary) · **Deep wine:** `#2E0E18` · **Terracotta accent:** `#C75B45` / `#D99582`
- **Cream background:** `#F4EFE6` · **Gold touch:** `#B9975B`
- **Type:** Instrument Serif (display, italic accents) · DM Sans (body) · Space Mono (labels) — same families as the original
- **Tagline / copy:** All original headlines and copy retained: “Think Macro.”, “Money moves. Markets move. The world moves.”, coverage, dispatches, manifesto and newsletter copy.

## Links preserved (exactly as live site)
- Subscribe / publication: https://imperialmacro.substack.com/subscribe and https://imperialmacro.substack.com (form uses the same GET action)
- X: https://x.com/imperialmacro
- Instagram: https://instagram.com/imperialmacro
- Telegram: https://t.me/imperialmacro
- Facebook: https://facebook.com/imperialmacro
- LinkedIn: https://www.linkedin.com/company/imperialmacro
- YouTube: https://youtube.com/@imperialmacro
- Market pulse figures kept as on the live site: DXY 104.72 +0.38% · BTC 67,481 +1.14% · 10Y 4.23 −0.06 · Risk appetite ↑ 4.7 / Building

## What's new in the design
- Floating glass pill navigation (sticky, blur) + mobile menu
- Hero with animated SVG market chart, glass dashboard card, floating mini-cards, grid + glow background, subtle 3D tilt
- Infinite wine ticker marquee
- Bento grid for “What we follow” (Pinterest/Framer style cards)
- Editorial dispatch cards on deep-wine section with hover bar
- Manifesto + principles, 3-step framework (Observe → Interpret → Position)
- Gradient newsletter panel, full social footer, scroll-reveal animations, grain texture
- Fully responsive, accessible labels, `prefers-reduced-motion` support. No build step, no framework.

## Deploy to GitHub Pages (2 minutes)
1. Copy **all files in this folder** to the root of your GitHub Pages repo (the one serving imperialmacro.com):
   - `index.html`, `style.css`, `script.js`, `public/favicon.svg`, `CNAME`, `.nojekyll`
2. Commit & push to the branch GitHub Pages is publishing from (usually `main`).
3. In repo **Settings → Pages**, confirm the custom domain is `imperialmacro.com` (the included `CNAME` file handles this).
4. Hard-refresh the site. No build settings needed — it is plain static HTML/CSS/JS.

> Tip: Keep the file names exactly as-is (`index.html` at repo root). If you previously had a different structure, replace `index.html` / `style.css` rather than nesting this folder inside another folder.
