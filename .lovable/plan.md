# Panarea Retreat 2026 — Page + Homepage Banner

Add a new retreat subpage at `/panarea` modeled on the reference at thepath.com/panarea, styled to match The Path's design system (soft navy, warm white, sage, gold; Playfair Display + Source Sans 3). Add a homepage banner promoting it.

## What gets built

### 1. New page: `/panarea` — "Panarea Retreat 2026"
Mirror the structure already used for `/costarica` (CostaRica.tsx) so the design language is consistent. Sections, top to bottom:

1. **Hero banner** — full-width Mediterranean image of Panarea with title overlay
2. **Intro block** — "Panarea Retreat 2026", subtitle "July 2026 | Panarea, Italy", retreat description (joy-focused, dinners under the stars, Mediterranean fairytale)
3. **Price + RSVP** — $1,800.00, primary RSVP button (mailto sit@thepath.com), "Limited spots available"
4. **What's included note** — meditations, breakfasts, dinners, mindful joy exercises, private boat tour, hiking, snorkeling. Guests handle travel/lunches/lodging; staff stays at Hotel La Piazza
5. **Photo gallery row** — 3 Panarea images (sea, group meditating, island views)
6. **Location & Schedule** — about Panarea (Aeolian island, sparkling Mediterranean), daily structure (morning + afternoon meditations, free time for swimming/snorkeling/exploring)
7. **Community** — The Path retreat ethos, life-long friendships
8. **Meditations** — Day 1–4 progression (calm → non-judgement → kindness → joy/non-duality)
9. **About The Path** — standard blurb (reused from CostaRica)
10. **About Dina Kaplan** — standard bio (Wesleyan, not Yale — per project memory)
11. **Refund policy** — small italic footer note
12. SEO meta tags via `<SEO>`

### 2. Routing & Navigation
- Add `<Route path="/panarea">` in `src/App.tsx` (above the catch-all), with `PageTransition` wrapper
- Page is **not added to the main navbar** — keeps the retreat page hidden/intentional like Costa Rica (per existing "Hidden Retreat Pages" memory pattern). Discoverable via the homepage banner and direct link.

### 3. Homepage banner
Add a new component `src/components/home/PanareaBanner.tsx` and slot it into `src/pages/Index.tsx` between `HeroSection` and `SocialProofBar`. Design:
- Slim full-width banner with a Mediterranean photo background + soft navy gradient overlay
- Left side: small label "Featured Retreat", headline "Panarea, Italy — July 2026", one-line description
- Right side: gold/sage "Learn More" button → `/panarea`
- Subtle motion fade-in on scroll
- Dismissible? No — keeps it always visible since it's a featured offering

### 4. Images
The reference page hosts Squarespace-CDN images we cannot redistribute. Two options for the new page (we'll pick during build):
- (a) Generate Mediterranean / Aeolian-island / meditation imagery via the AI image tool to match the brand palette
- (b) Use existing assets as placeholders and let the user drop in real Panarea photos later

Default to **(a)**: generate ~5 brand-fitting images (hero seascape, group meditation, island cliffs, boat/snorkel scene, dinner-under-stars) saved to `src/assets/panarea/`.

## Technical details

- New file: `src/pages/Panarea.tsx` — clone of `CostaRica.tsx` with Panarea copy and assets
- New file: `src/components/home/PanareaBanner.tsx`
- Edit: `src/App.tsx` — import + new `/panarea` route
- Edit: `src/pages/Index.tsx` — render `<PanareaBanner />` after `<HeroSection />`
- New assets in `src/assets/panarea/` (generated)
- All styling via existing Tailwind tokens (`bg-warm`, `text-sage`, `font-serif`, etc.) — no new CSS variables
- Animations via existing `framer-motion` `fadeUp` pattern
- RSVP buttons → `mailto:sit@thepath.com?subject=Panarea Retreat 2026 RSVP` (matches existing contact convention from project memory)

## Open question
The reference page says **June 2026** but your message says **July 2026**. I'll use **July 2026** per your instruction. If you want June, say the word and I'll swap it.
