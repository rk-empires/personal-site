# RK Empires Intelligent Automations — Design System

**Version:** 1.0  
**GitHub repo:** https://github.com/rk-empires/rk-empires-app *(source was empty at time of authoring; check for updates)*  
**Brand Guidelines:** `assets/brand-guidelines.png`  
**Logo:** `assets/logo-full.jpeg`

---

## Company Overview

**RK Empires Intelligent Automations** is a Philippines-based technology company focused on making AI and automation accessible to everyone — from seasoned IT professionals to complete beginners. Their flagship product is an AI learning app inspired by Duolingo's gamified approach, designed to take zero-knowledge individuals and guide them step-by-step through understanding AI, automation, and tech fundamentals.

**Tagline:** AUTOMATE • INNOVATE • ELEVATE  
**Mission:** *We help businesses eliminate repetitive tasks and unlock growth through intelligent automation, innovative solutions, and seamless integrations.*

### Core Products
1. **RK Empires AI Learning App** — Duolingo-inspired mobile/desktop app teaching AI from the ground up, with Tagalog↔English bilingual support, gamification (XP, streaks, hearts, leagues), and adaptive skill-level assessment (Rookie → Beginner → Intermediate → Advanced → Expert → Master)
2. **RK Empires Business Automation** — B2B workflow automation consultancy and tooling

### Sources Used
- `uploads/RK Empires Brand Guidelines.png` — official brand color, type, icon, logo, tone guidelines
- `uploads/RK Empires.jpeg` — high-resolution logo
- https://github.com/rk-empires/rk-empires-app — app codebase (empty at time of authoring)
- https://www.duolingo.com/ — UX/gamification reference (do NOT copy colors, fonts, or branding)

---

## Content Fundamentals

### Tone of Voice
| Trait | What it means |
|---|---|
| **Professional** | Clear, confident, trustworthy — no slang, no hype |
| **Helpful** | We listen, we understand, we guide — never condescending |
| **Innovative** | Forward-looking; "smarter ways," "next level," "intelligent" |
| **Result-Driven** | Measurable impact: "automate X," "save Y hours," "unlock Z" |

### Writing Principles
- **Casing:** Headlines in **Title Case** or **ALL CAPS** for impact words. Body in sentence case. Labels in UPPERCASE + tracking.
- **Person:** Second-person "you" for learner-facing copy. First-person "we" for brand statements.
- **Emoji:** Not used in UI chrome or headings. May appear in achievement/celebration moments only.
- **Language:** Support both English and Tagalog. Use simple, plain English — avoid jargon. When a tech term is introduced, always define it.
- **Punctuation:** Oxford comma. No exclamation marks in formal copy. Ellipsis (…) for loading or continuation states.
- **Numbers:** Spell out one through nine in body copy; use numerals for 10+, metrics, and scores.
- **Tagline pattern:** Three-word cadence: "AUTOMATE • INNOVATE • ELEVATE" — bullet-separated, all caps.

### App Copy Examples
- *"Let's see where you're starting from."* (assessment intro)
- *"You've earned 50 Intelligence Points!"* (XP reward)
- *"Keep your streak alive — 5 days and counting!"* (streak nudge)
- *"Rookie unlocked. Your journey begins."* (level reveal)
- *"Hindi pa huli — bumalik na tayo!"* (Tagalog streak recovery)

---

## Visual Foundations

### Colors
**Primary palette:** Deep black background with gold accents.  
- **Black** `#0D0D0D` — primary background; conveys premium, authority, and depth  
- **Primary Gold** `#D4AF37` — the hero accent; signals excellence, innovation, and reward  
- **Deep Gold** `#B8860B` — pressed/hover state, darker variant  
- **Light Gold** `#ECC84A` — hover highlight, softer glow  
- **White** `#FFFFFF` — primary text on dark  
- **Light Gray** `#E6E6E6` — secondary text  
- **Dark Gray** `#1A1A1A` — card surfaces, elevated areas  

Gold represents excellence and premium quality. Black conveys authority and modernity. Never use light-mode palettes for this brand.

### Typography
- **Display:** Playfair Display Bold/SemiBold — used for hero headings, score reveals, logo type, and high-impact moments
- **Body:** Montserrat Regular/Medium/SemiBold — used for all UI chrome: labels, buttons, body copy, navigation
- No monospace use in app UI; reserved for code snippets in lesson content only
- Label text: UPPERCASE + wide tracking (`letter-spacing: 0.2em`) for section headers and status tags

### Backgrounds
- Always dark: `#0D0D0D` base, `#1A1A1A` for cards, `#252525` for elevated sheets
- Subtle radial gold glow on hero areas (e.g., `radial-gradient` from `rgba(212,175,55,0.08)`)
- No photography for UI backgrounds — tech-pattern SVGs or pure dark surfaces only
- Light inner border (`rgba(255,255,255,0.06)`) separates card layers subtly

### Cards
- Background: `#1A1A1A` surface
- Border: `1px solid rgba(255,255,255,0.07)` — very subtle
- Border-radius: `16px` default, `24px` for hero cards
- Shadow: `0 2px 12px rgba(0,0,0,0.5)`
- Gold-highlighted cards add `1px solid rgba(212,175,55,0.3)` border + `0 0 16px rgba(212,175,55,0.35)` glow
- Card inner shine: subtle `linear-gradient(135deg, rgba(255,255,255,0.06), transparent)` top-left

### Elevation
| Level | Use | Background | Shadow |
|---|---|---|---|
| Base | App background | `#0D0D0D` | none |
| Raised | Section areas | `#141414` | xs |
| Card | Content cards | `#1A1A1A` | md |
| Elevated | Modals, sheets | `#252525` | lg |
| Overlay | Drawers, menus | `#252525` + blur | xl |

### Borders & Dividers
- Dividers: `1px solid rgba(255,255,255,0.06)` — nearly invisible hairlines
- Input borders: `1px solid rgba(255,255,255,0.12)` rest, `1px solid #D4AF37` focused
- Gold accent border: `1px solid rgba(212,175,55,0.4)` for highlighted elements

### Animation & Motion
- **Entry animations:** slide-up + fade (`rk-slide-up`) for cards; scale-in (`rk-scale-in`) for modals
- **Achievement moments:** bounce-in (`rk-bounce-in`) for level reveals, XP burst
- **Micro-interactions:** spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for button press/release
- **Gold pulse:** `rk-pulse-gold` for active elements, current lesson node
- **Streak fire:** subtle `rk-streak-fire` wobble on streak counter
- **Duration:** 150ms for hover, 250ms for state changes, 400ms for page transitions
- **Reduced motion:** all decorative animations wrap in `@media (prefers-reduced-motion: no-preference)`

### Hover & Press States
- Buttons: lighten gold slightly (`#ECC84A`) on hover; scale down `0.97` + darken on press
- Cards: box-shadow expands + faint gold glow on hover
- Answer cards: border transitions to gold on hover; success/error color on selection
- Icons: opacity `1.0 → 0.7` on inactive; fully gold when active/selected

### Corner Radii
- Small chips/badges: `var(--radius-full)` (pill)
- Buttons: `var(--radius-full)` (pill) for CTA, `var(--radius-lg)` for secondary
- Cards: `var(--radius-xl)` (16px) standard, `var(--radius-3xl)` (24px) hero
- Inputs: `var(--radius-lg)` (12px)
- Bottom sheets: `var(--radius-3xl)` top corners only

### Shadows & Glow
- Standard shadow system: xs → xl (increasingly diffuse)
- Gold glow system: xs → lg (0 0 8px → 0 0 60px), used only for active/highlighted states
- Inner border highlight: `0 1px 0 rgba(255,255,255,0.08) inset` on buttons for depth

### Imagery
- Color vibe: warm, dark, high-contrast — black-dominant with gold/amber highlights
- Tech-inspired: circuit patterns, gears, glowing nodes, arrows/charts
- No stock photography of people in UI chrome; avatar placeholders only
- Illustrations: golden outlined icons on dark background

---

## Iconography

Icons follow a **line-style** approach: consistent 2px stroke weight, rounded line caps, matching corner radius to UI radii. Gold (`#D4AF37`) when active, gray (`#888888`) when inactive.

### Icon Categories
| Category | Examples |
|---|---|
| Automation | gears, circuit nodes, link-chain, workflow arrows |
| Growth | bar chart, upward arrow, trophy |
| Intelligence | lightbulb, brain, sparkle/star |
| Reliability | shield, checkmark, lock |
| Learning | book, graduation cap, graduation path node |
| Gamification | fire (streak), heart, gem/crystal, crown, star |

### Icon Usage
- Size: 20px standard, 16px inline, 24px for tab bar, 32px for feature icons
- CDN: Lucide Icons (`https://unpkg.com/lucide@latest`) — matches the line-style spec
- Brand-specific icons (gear+circuit, crown, chart arrow) come from the logo mark — not reproduced as standalone SVGs

### Flag: Icon Substitution
The codebase was empty at time of authoring. Lucide Icons (CDN) was selected as the icon library because it matches the described line-style, consistent-stroke spec. **Please confirm this is acceptable or provide a custom icon set.**

---

## Gamification System (App-Specific)

The RK Empires AI Learning App adapts Duolingo mechanics with brand-original naming:

| Duolingo Term | RK Empires Term | Description |
|---|---|---|
| XP | **Intelligence Points (IP)** | Earned per lesson completed |
| Hearts | **Focus Points** | Lost on wrong answers; refill over time |
| Gems | **Circuits** | In-app currency; buy Focus refills, streak freezes |
| Streak | **Learning Streak** | Consecutive days of practice |
| Leagues | **Circuits League** | Bronze → Silver → Gold → Sapphire → Ruby → Diamond |
| Duo the Owl | **Cir** (circuit robot mascot) | TBD — user to provide mascot asset |

### Skill Levels (Post-Assessment)
1. **Rookie** — Absolute beginner; no prior knowledge
2. **Beginner** — Knows what AI is; no hands-on experience
3. **Intermediate** — Has used AI tools; wants to go deeper
4. **Advanced** — Builds with AI; learning automation
5. **Expert** — Deploys automation pipelines
6. **Master** — Trains models, architects AI systems

---

## File Index

```
/
├── styles.css                        ← Root stylesheet (import-only)
├── readme.md                         ← This file
├── SKILL.md                          ← Agent skill descriptor
│
├── tokens/
│   ├── colors.css                    ← Color custom properties
│   ├── typography.css                ← Font families, sizes, weights (+ Google Fonts import)
│   ├── spacing.css                   ← Spacing, radius, touch targets
│   ├── effects.css                   ← Shadows, glows, gradients, blur
│   └── animation.css                 ← Durations, easings, keyframes
│
├── assets/
│   ├── logo-full.jpeg                ← Full-color brand logo (high-res)
│   └── brand-guidelines.png          ← Official brand guidelines doc
│
├── components/
│   ├── core/                         ← Button, Input, Card, Badge
│   ├── gamification/                 ← XPBar, HeartIndicator, StreakBadge, LevelBadge
│   └── learning/                     ← AnswerCard, PathNode
│
├── guidelines/
│   └── *.card.html                   ← Specimen cards (Colors, Type, Spacing, Brand, Effects)
│
└── ui_kits/
    └── app/                          ← Mobile AI learning app screens
        ├── index.html                ← Interactive prototype entry
        └── *.jsx                     ← Screen components
```
