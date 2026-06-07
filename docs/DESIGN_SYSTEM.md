# Vertex Design System v1.0

## Philosophy

Vertex is a precision-engineered design system that merges Vercel's Geist design language with industrial frontend architecture. It treats every interface as a machine: engineered, not decorated. Every pixel serves a purpose. Every animation confirms state change. Every component proves something.

**Core Principles:**
1. **Real Geist, not reconstruction** — All tokens extracted from vercel.com/geist
2. **Industrial structure** — 3-phase build protocol (Layout → Illustration → Motion)
3. **Exposed grid** — The grid IS the design, not scaffolding
4. **Glass as lens** — Frosted glass is an overlay, not a base material
5. **Evidence, not decoration** — Every section contains a real artifact

---

## 1. Color System

### 1.1 Foundation Tokens

**Backgrounds:**
```css
--ds-background-100: #ffffff (light) / #0a0a0a (dark)
--ds-background-200: #fafafa (light) / #000000 (dark)
```

**Gray Scale (Light):**
| Token | Value | Usage |
|---|---|---|
| --ds-gray-100 | #f2f2f2 | Hover backgrounds |
| --ds-gray-200 | #ebebeb | Active backgrounds |
| --ds-gray-300 | #e6e6e6 | Component backgrounds |
| --ds-gray-400 | #ebebeb | Borders |
| --ds-gray-500 | #c9c9c9 | Hover borders |
| --ds-gray-600 | #a8a8a8 | Active borders |
| --ds-gray-700 | #8f8f8f | Secondary text |
| --ds-gray-800 | #7d7d7d | Muted text |
| --ds-gray-900 | #4c4c4c | Primary text |
| --ds-gray-1000 | #171717 | High-contrast text |

**Gray Scale (Dark):**
| Token | Value | Usage |
|---|---|---|
| --ds-gray-100 | #1a1a1a | Hover backgrounds |
| --ds-gray-200 | #1f1f1f | Active backgrounds |
| --ds-gray-300 | #292929 | Component backgrounds |
| --ds-gray-400 | #2e2e2e | Borders |
| --ds-gray-500 | #454545 | Hover borders |
| --ds-gray-600 | #878787 | Active borders |
| --ds-gray-700 | #8f8f8f | Secondary text |
| --ds-gray-800 | #7d7d7d | Muted text |
| --ds-gray-900 | #a1a1a1 | Primary text |
| --ds-gray-1000 | #ededed | High-contrast text |

### 1.2 Semantic Colors

| Purpose | Light | Dark |
|---|---|---|
| Primary (accent) | #0072f5 | #0072f5 |
| Success (ok) | #45a557 | #45a557 |
| Warning (warn) | #ffb224 | #ffb224 |
| Error (alarm) | #e5484d | #e5484d |
| Info | #0072f5 | #0072f5 |

### 1.3 Three-Tier Rule

- **Neutral (80%)** — Gray scales for backgrounds, text, borders
- **Accent (≤10%)** — Primary action color only
- **Semantic (≤5%)** — OK, Warn, Alarm for status indicators

### 1.4 Color Usage Rules

- Colors 1-3: Component backgrounds (default, hover, active)
- Colors 4-6: Borders (default, hover, active)
- Colors 7-8: High-contrast backgrounds
- Colors 9-10: Text and icons

---

## 2. Typography System

### 2.1 Font Families

```css
--font-sans: "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "Geist Mono", Menlo, Monaco, "Lucida Console", "Liberation Mono", monospace;
--font-pixel: "Geist Pixel Square", "Geist Mono", monospace;
```

### 2.2 Type Scale

| Role | Size | Weight | Tracking | Line Height | Voice |
|---|---|---|---|---|---|
| Hero Display | clamp(48px, 8vw, 88px) | 500 | -0.04em | 1.05 | Structure |
| Section Headline | clamp(28px, 3.5vw, 48px) | 600 | -0.02em | 1.15 | Structure |
| Body | 16px | 400 | 0 | 1.55 | Structure |
| Label | 11-12px | 500 | 0.08em | 1.2 | Instrument |
| Data/Metric | clamp(24px, 2.5vw, 40px) | 500 | -0.01em | 1.1 | Instrument |
| Code/Terminal | 14px | 400 | 0 | 1.5 | Instrument |

### 2.3 Typography Rules

- **Two voices only:** Structure (Geist Sans) + Instrument (Geist Mono)
- **Tabular figures:** `font-variant-numeric: tabular-nums` on ALL numbers
- **Labels:** Uppercase, `letter-spacing: 0.08em`
- **Body never in mono:** Long-form text in sans-serif only
- **Display line-height tight:** Hero 1.05, headlines 1.15

### 2.4 Geist Pixel Usage

- Banners and hero headlines
- Dashboard titles
- Decorative labels
- NOT for body text or long copy
- Weight: 500 (static, no variable axes)

---

## 3. Spacing System

### 3.1 Base Scale (4px)

| Token | Value | Usage |
|---|---|---|
| --geist-space | 4px | Micro spacing |
| --geist-space-2x | 8px | Tight gaps |
| --geist-space-4x | 16px | Default gaps |
| --geist-space-6x | 24px | Section padding |
| --geist-space-8x | 32px | Large gaps |
| --geist-space-16x | 64px | Section spacing |
| --geist-space-24x | 96px | Major sections |

### 3.2 Layout Tokens

| Token | Value |
|---|---|
| --geist-gap | 24px |
| --geist-gap-half | 12px |
| --geist-gap-double | 48px |
| --ds-page-width | 1400px |
| --geist-page-width | 1200px |
| --geist-page-margin | 24px |

---

## 4. Motion System

### 4.1 Philosophy

Motion is **feedback**, not decoration. Every animation answers: "What just changed?"

### 4.2 Easing Tokens

```css
--ds-motion-timing-swift: cubic-bezier(.175, .885, .32, 1.1);
--ease-in: cubic-bezier(.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
```

### 4.3 Duration Tokens

| Interaction | Duration |
|---|---|
| Button hover | 150ms |
| Button press | 80ms |
| Panel hover | 150ms |
| Data update | 300ms |
| Section reveal | 150ms |
| Expansion/collapse | 200-300ms |
| Popover | 200ms |
| Overlay | 300ms |

### 4.4 Allowed Animations

- **Opacity transitions** (0 → 1) for reveals
- **Border-color transitions** for hover states
- **Transform: scale(0.98)** for button presses
- **Color flashes** for data updates
- **Pulse** for live indicators (2s loop)

### 4.5 Banned Animations

- Scroll-linked parallax
- Fade + slide on scroll
- Infinite spinning/rotating
- Hover scale/lift on cards
- Bouncy/spring transitions
- Ambient drift/particles
- Typewriter text (except terminals)

---

## 5. Shape System

### 5.1 Radius Tokens

```css
--geist-radius: 6px;           /* Interactive elements */
--geist-marketing-radius: 8px; /* Modals, overlays */
--radius-none: 0px;            /* Structural elements */
--radius-pill: 999px;          /* Badges, pills */
```

### 5.2 Usage Rules

| Element | Radius |
|---|---|
| Grid sections | 0px |
| Cards/panels | 0px |
| Buttons | 6px |
| Inputs | 6px |
| Modals | 8px |
| Badges/pills | 999px |

---

## 6. Grid System

### 6.1 Geist Grid Components

```tsx
import { Grid, GridCell, GridSystem } from '@vercel/geistcn/components';

<GridSystem debug guideWidth={1}>
  <Grid columns={12} rows={3}>
    <GridCell column="1/4">A</GridCell>
    <GridCell column="4/7">B</GridCell>
    <GridCell column="7/10">C</GridCell>
    <GridCell column="10/13">D</GridCell>
  </Grid>
</GridSystem>
```

### 6.2 Grid Props

| Prop | Type | Description |
|---|---|---|
| columns | number/object | Column count or responsive map |
| rows | number/object | Row count or responsive map |
| height | string | "preserve-aspect-ratio" or custom |
| hideGuides | string | "row" or "column" |
| dashedGuides | boolean | Dashed guide lines |
| solid | boolean | Solid cell background |

### 6.3 Exposed Grid (Industrial Overlay)

```css
/* Section frame with visible borders */
.section-frame {
  border-left: 1px solid var(--line);
  border-right: 1px solid var(--line);
  border-top: 1px solid var(--line);
  position: relative;
}

/* Corner caps at intersections */
.corner-cap {
  position: absolute;
  width: 5px; height: 5px;
  background: var(--accent);
}
.corner-cap--tl { top: -2px; left: -2px; }
.corner-cap--tr { top: -2px; right: -2px; }
.corner-cap--bl { bottom: -2px; left: -2px; }
.corner-cap--br { bottom: -2px; right: -2px; }
```

### 6.4 Grid Rules

- Guides are decorative: `aria-hidden="true"`
- Tappable cells need their own focus ring
- Tab order matches reading order
- Confirm guide contrast in both themes
- Do not nest Grids more than one level

---

## 7. Glass / Frosted Glass

### 7.1 Philosophy

Glass is an **optional overlay layer**, not a base material. It adds depth without obscuring the grid beneath. Think of it as a lens over the industrial substrate.

### 7.2 Tokens

```css
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-bg-hover: rgba(255, 255, 255, 0.06);
--glass-border: rgba(255, 255, 255, 0.06);
--glass-border-hover: rgba(255, 255, 255, 0.12);
--glass-blur: blur(16px) saturate(180%);
--glass-shine: inset 0 1px 0 rgba(255,255,255,0.08);
```

### 7.3 Usage Rules

**Apply glass to:**
- Fixed navbars (top overlay)
- Modal overlays (depth separation)
- Floating cards (hero CTAs, panels)
- Tooltips (subtle depth)

**Do NOT apply glass to:**
- Base page background
- Content panels (use solid surfaces)
- Form inputs (use solid backgrounds)
- Primary action buttons

### 7.4 Glass + Grid Interaction

When glass sits over exposed grid:
- Grid lines remain visible THROUGH the glass
- Use lighter blur (`blur(8px)`) for grid readability
- Glass adds depth, grid provides structure

### 7.5 Recipe

```css
.glass {
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
}

.glass::before {
  /* Specular shine */
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.06) 0%,
    rgba(255,255,255,0.01) 100%
  );
  pointer-events: none;
}
```

---

## 8. Materials

### 8.1 Material Selection

Choose ONE material per page. Derive everything from it.

| Material | Best For | Accent | Texture |
|---|---|---|---|
| **MACHINING** (default) | Dev tools, AI/ML, infra | #0072f5 (blue) | 8px plotting grid |
| **PLATING** | Data platforms, APIs | #12a594 (teal) | Trace lines |
| **WELDING** | Open-source, platforms | #ffb224 (amber) | Structural grid |
| **CASTING** | Hardware, robotics | #e5484d (red) | Hazard hatching |
| **CALIBRATING** | Monitoring, trading | #ffb224 (amber) | Instrument grid |
| **PRINTING** | Docs, research (light) | #0072f5 (blue) | Hairline rules |

### 8.2 Material Tokens

Each material defines:
- Surface elevation (--bg-000 through --bg-300)
- Text hierarchy (--text-hi, --text-md, --text-lo)
- Border system (--line, --line-2)
- Accent color
- Semantic colors (ok, warn, alarm)
- Surface texture pattern

### 8.3 Cross-Material Contamination

- Never mix hazard stripes (CASTING) with MACHINING
- Never use PRINTING on dark backgrounds
- Never use CASTING borders < 2px
- Never hide grid on WELDING pages
- Never use multiple accent colors per page

---

## 9. Layout Modes

### 9.1 BOXED (Default)

Centered max-width chassis with visible page-ground gutters.

```css
.chassis {
  max-width: 1280px;
  margin: 0 auto;
  border-left: 1px solid var(--line-2);
  border-right: 1px solid var(--line-2);
}
```

**Best for:** Most pages, dashboards, docs, B2B premium

### 9.2 FULL-BLEED

Content reaches every edge.

```css
.full-bleed-section {
  width: 100%;
  border-bottom: 1px solid var(--line-2);
  padding: var(--geist-gap-double) clamp(24px, 5vw, 96px);
}
```

**Best for:** Infrastructure platforms, full dashboards

### 9.3 SPLIT

Message column + live-evidence column.

```css
.split-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1fr;
  border-bottom: 1px solid var(--line-2);
}
```

**Best for:** API products, SDKs, AI demos

### 9.4 DOCUMENT

Print-grid composition with wide margins.

```css
body {
  padding: var(--geist-gap-double) clamp(48px, 8vw, 144px);
}
```

**Best for:** Research, documentation, B2B premium

---

## 10. Components

### 10.1 Panel

Base container. Every module lives in a panel.

```css
.panel {
  background: var(--bg-100);
  border: 1px solid var(--line-2);
  padding: var(--geist-gap);
  transition: border-color 150ms linear, background-color 150ms linear;
}
.panel:hover {
  border-color: var(--accent);
  background: var(--bg-200);
}
```

### 10.2 Bento Grid

Feature sections with 1px seams.

```css
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
```

### 10.3 Metric Card

Key performance numbers.

```css
.metric-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.metric-number {
  font-family: var(--font-mono);
  font-size: clamp(28px, 3vw, 40px);
  font-variant-numeric: tabular-nums;
}
```

### 10.4 Button

Primary and ghost variants.

```css
.btn-primary {
  background: var(--accent);
  color: var(--bg-000);
  border: 1px solid var(--accent);
}
.btn-ghost {
  background: transparent;
  color: var(--text-hi);
  border: 1px solid var(--line-2);
}
```

### 10.5 Terminal

CLI interaction evidence slot.

```css
.terminal {
  background: var(--bg-000);
  border: 1px solid var(--line-2);
  border-radius: var(--geist-radius);
  font-family: var(--font-mono);
  font-size: 13px;
}
```

### 10.6 Navigation

Utility-style header with glass option.

```css
.nav {
  border-bottom: 1px solid var(--line);
  background: var(--bg-000);
  position: sticky;
  top: 0;
}
.nav--glass {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px) saturate(150%);
}
```

---

## 11. Signature Moves

Every page commits to exactly **three** signature moves from **three different categories**.

### Categories

1. **DIAGRAMS** — Isometric maps, PCB schematics, wireframe cubes, annotated cutaways
2. **DATA DISPLAY** — GO/NO-GO matrices, gauge clusters, log streams, benchmark tables
3. **STRUCTURAL ELEMENTS** — Edge-strip branding, registration marks, blueprint grids, weld seams
4. **SURFACE TREATMENTS** — Halftone hero, ASCII logo, hazard hatching, plotting grid
5. **COPY PATTERNS** — Terminal headers, component designators, status console strips

### Example Triplet

- **DIAGRAMS:** PCB schematic with labeled pins (API endpoints = pins)
- **DATA:** Log stream tile in hero (request/response visibility)
- **COPY:** Component designators on panels (R1, U7, BUS-A)

---

## 12. Evidence Rules

Every section must answer: "What does this prove?"

- **Hero:** Live proof artifact (terminal, dashboard, schematic)
- **Feature panels:** Small functional artifact (diagram, code snippet, status row)
- **Numbers:** Plausible (e.g., `< 4ms p99`, NOT "Lightning-fast")
- **Code:** Must compile. Fake code is instantly spotted.

---

## 13. Brand Voice

The user is an **OPERATOR**, not a visitor.

**Translation Table:**
| Marketing | Vertex |
|---|---|
| Get Started | Initialize |
| Sign Up | Create Operator Account |
| Try It Free | Run Trial |
| Learn More | Read Spec |
| Submit | Execute |
| Cancel | Abort |

**Status Patterns:**
- `ALL SYSTEMS NOMINAL`
- `NODE-7A · UTC 02:47:33`
- `BUILD v3.2.1`
- `STATUS: OPERATIONAL`

---

## 14. Accessibility

### 14.1 Contrast

- Body text (16px): 4.5:1 minimum
- Large text (≥24px): 3:1 minimum
- UI components: 3:1 minimum
- Labels (11-12px): 4.5:1 minimum

### 14.2 Focus

```css
--ds-focus-ring: 0 0 0 2px #fff, 0 0 0 4px #0072f5;
```

All interactive elements must have visible focus rings.

### 14.3 Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 14.4 ARIA

- Decorative elements: `aria-hidden="true"`
- Tab order matches reading order
- Live regions for status updates
- Semantic HTML elements preferred

---

## 15. Responsive Breakpoints

| Name | Width | Behavior |
|---|---|---|
| sm | 640px | Single column, stacked layouts |
| md | 768px | 2-column grids |
| lg | 961px | Full chassis frame, 3-4 columns |
| xl | 1280px | Maximum content width |

### Responsive Rules

- **BOXED:** Drop chassis borders < 800px
- **SPLIT:** Stack columns < 900px
- **Grid:** 4-col → 2-col → 1-col
- **Nav:** Collapse to hamburger < 768px
- **Glass:** Maintain blur on all breakpoints (performance-optimized)

---

## 16. Asset Usage

### 16.1 PPLX Wallpapers

**Collection:** 72 wallpapers (33 desktop, 39 mobile)
**Categories:**
- Cosmic/Space (10)
- Cinematic/Surreal (16)
- Nature/Landscapes (12)
- Books/Knowledge (10)
- People/Characters (14)
- Abstract/Digital (10)

### 16.2 Usage Guidelines

- **Hero sections:** Cosmic wallpapers (dark, dramatic)
- **Features:** Cinematic wallpapers (engaging)
- **Stats:** Abstract wallpapers (clean, data-friendly)
- **CTA:** Nature wallpapers (calming, trustworthy)

### 16.3 Glass Overlay Compatibility

- Dark wallpapers work best with frosted glass
- Use `backdrop-filter: blur(8px)` over busy images
- Add dark gradient overlay for text readability
- Mobile: Use 9:16 wallpapers with `object-fit: cover`

---

## 17. Verification & Testing

### 17.1 Automated Checks

- Contrast ratio validation (WCAG 2.1 AA)
- Token consistency (no undefined --ds-* references)
- Font loading verification (Geist Sans/Mono/Pixel)
- Responsive breakpoint testing

### 17.2 Manual QA Gates

- [ ] All sections have visible borders (exposed grid)
- [ ] Corner caps at every intersection
- [ ] Glass panels show grid through blur
- [ ] All numbers use tabular figures
- [ ] Labels are uppercase with tracking
- [ ] No drop shadows except modal overlays
- [ ] Motion respects reduced-motion preference
- [ ] Focus rings visible on all interactive elements

### 17.3 Build Verification

- [ ] All CSS variables resolve
- [ ] No font fallback triggered (Geist loaded)
- [ ] Grid guides have aria-hidden
- [ ] Images have alt text or aria-hidden
- [ ] Color contrast passes in both themes

---

## 18. File Structure

```
vertex-design-system/
├── DESIGN_SYSTEM.md          # This document
├── tokens/
│   ├── colors.css            # All --ds-* color tokens
│   ├── typography.css        # Geist font stacks + type scale
│   ├── spacing.css           # --geist-space-* tokens
│   ├── motion.css            # --ds-motion-* + easing
│   ├── shape.css             # --geist-radius
│   └── glass.css             # Glass overlay tokens
├── materials/
│   ├── machining.css         # Default material
│   ├── plating.css           # PCB/routing
│   ├── welding.css           # Steel frame
│   ├── casting.css           # Forge
│   ├── calibrating.css       # Mission control
│   └── printing.css          # Light mode docs
├── layouts/
│   ├── boxed.css             # Contained chassis
│   ├── full-bleed.css        # Edge-to-edge
│   ├── split.css             # Message + evidence
│   └── document.css          # Print-grid
├── components/
│   ├── panel.css             # Base panel
│   ├── bento.css             # Bento grid
│   ├── metric.css            # Metric cards
│   ├── button.css            # Button variants
│   ├── terminal.css          # Terminal window
│   └── nav.css               # Navigation
├── assets/
│   ├── svg/                  # 15 starter SVGs
│   └── wallpapers/           # 72 PPLX wallpapers
├── examples/
│   ├── dashboard.html        # Dark dashboard
│   ├── landing.html          # Premium landing
│   └── docs.html             # Documentation page
└── preview.html              # Live HTML preview
```

---

## 19. Versioning

**Current Version:** 1.0.0
**Geist Version:** 1.7.2 (npm package)
**Last Updated:** 2026-06-06
**Source:** vercel.com/geist

---

## 20. Quick Start

1. Include tokens: `<link rel="stylesheet" href="tokens/colors.css">`
2. Choose material: `<html data-material="machining">`
3. Choose layout: `<body class="chassis">`
4. Add components: `<div class="panel">...</div>`
5. Apply glass: `<nav class="nav nav--glass">...</nav>`

---

*Vertex Design System v1.0 — Real Geist tokens + Industrial architecture + Frosted glass overlay*