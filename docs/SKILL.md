---
name: vertex-industrial-geist
version: 1.0.0
description: |
  A specialized variant of the industrial-design-frontend skill, adapted for the Vertex Design System.
  Merges the rigorous 3-phase industrial build protocol with official Vercel Geist design tokens,
  typography (Geist Sans/Mono/Pixel), and frosted glass overlays. Preserves all industrial
  materials, signature moves, layout modes, and evidence rules while grounding everything in
  real Geist tokens extracted from vercel.com/geist.
  
  Use this skill whenever building premium developer-tool landing pages, dashboards, or docs
  that need to feel both engineered (industrial) and refined (Geist).
  
  Triggers: "vertex design system", "geist industrial", "precision engineering frontend",
  "exposed grid + glass", "developer tool landing", "infrastructure product page".
---

# Vertex Industrial — Geist Edition (v1.0.0)

This skill merges two world-class systems:
1. **Industrial Design Frontend** (3-phase protocol, materials, signature moves, evidence rules)
2. **Vercel Geist Design System** (official tokens, Geist Sans/Mono/Pixel, real components)

The result is a design system that feels like a **precision instrument** — engineered, not decorated.

---

## §0 — DESIGN DECISION LOG (Non-Negotiable)

These decisions were made once and held everywhere:

```
VERTEX INDUSTRIAL — DESIGN DECISIONS
- Base material: MACHINING (precision, developer-tool DNA)
- Layout mode: BOXED (Vercel docs, Linear blog pattern)
- Fonts: Geist Sans (STRUCTURE) + Geist Mono (INSTRUMENT) + Geist Pixel (display moments)
- Color: Real Geist --ds-* tokens, NOT custom industrial palettes
- Grid: Exposed grid with visible hairlines (1px), corner caps (5px accent squares)
- Glass: Optional overlay layer (navbar, modals, cards), NOT base material
- Motion: Geist --ds-motion-* tokens (swift popover, overlay easing)
- Accent: Geist blue (#0072f5) — technical precision, not generic cyan
- Dark mode: Default. Light mode: Available via --ds-background-100/200 swap.
```

---

## §1 — THE 3-PHASE BUILD PROTOCOL (Preserved from Industrial)

Every meaningful Vertex Industrial output needs three phases. The phases are sequential and gated.

### Phase 1 — STRUCTURE & LAYOUT

**Output:** Complete HTML/CSS skeleton with:
- The Machine Question answered (one sentence: "this page is a ___ for ___")
- Material declared (MACHINING default; others available per §2)
- Layout mode declared (BOXED default; others per §3)
- Three Signature Moves declared with justification (see §4)
- All sections laid out with **named evidence slots** marked as labeled placeholders
- Typography, colors, borders, spacing, and chassis frame all finalized
- Real copy in headlines and body, real labels in mono — **no lorem ipsum**

**Hard rule:** Do NOT draw illustrations yet. Leave evidence slots as labeled boxes.

**End-of-phase prompt:**
> Phase 1 (Layout) is ready. The structure is set: [Material], [Layout Mode], Signature Moves are [X, Y, Z], and the evidence slots are stubbed at [list]. Review the structural skeleton and let me know if anything should change before I move to Phase 2 (Illustration).

**Wait for explicit approval.**

### Phase 2 — ILLUSTRATION & EVIDENCE

**Output:** Phase 1 skeleton with every evidence slot filled with real, scoped artifacts:
- Isometric module maps (SVG, real labels, real connections)
- Terminal windows with real-looking command output
- Architecture diagrams with named components
- Benchmark charts with axes, units, takeaway labels
- Gauge clusters / GO/NO-GO matrices
- Status console strips with realistic build/region/uptime data

Pull starter SVGs from `assets/svg/` and **edit labels to fit the product**.

**Hard rule:** Do NOT add hover transitions, scroll animations, or motion. Phase 3 only.

**End-of-phase prompt:**
> Phase 2 (Illustration) is ready. Every evidence slot has been filled with [list]. Review and let me know if any artifact should be redrawn before Phase 3 (Motion).

**Wait for explicit approval.**

### Phase 3 — MOTION & POLISH

**Output:** Phase 2 page with motion using Geist tokens:
- Hover-state border brightening on panels (150ms, --ds-motion-timing-swift)
- Status dot pulses on live indicators (2s loop)
- Number-flash on data updates (300ms)
- Button press scale 0.98 (80ms)
- Scroll-reveal opacity-only (150ms)

**Geist-specific motion tokens:**
```css
--ds-motion-timing-swift: cubic-bezier(.175, .885, .32, 1.1);
--ds-motion-popover-duration: .2s;
--ds-motion-overlay-duration: .3s;
--ds-motion-overlay-scale: .96;
--default-transition-duration: .15s;
--ease-in: cubic-bezier(.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, .2, 1);
```

**Accessibility pass:** contrast, focus rings, reduced-motion, ARIA labels.

---

## §2 — MATERIAL SELECTION (Adapted for Geist)

Each material maps to a Geist-native palette. Choose ONE per page.

### MACHINING — CNC Precision (Default)
**Best for:** Developer tools, AI/ML platforms, analytics, infrastructure

```css
/* MACHINING — Geist Dark */
--bg-000: #0a0a0a;        /* --ds-background-100 dark */
--bg-100: #171717;        /* --ds-gray-1000 dark */
--bg-200: #1a1a1a;        /* --ds-gray-900 dark */
--bg-300: #1f1f1f;        /* --ds-gray-800 dark */
--text-hi: #ededed;       /* --ds-gray-1000 light = primary text */
--text-md: #a1a1a1;       /* --ds-gray-900 light = secondary */
--text-lo: #6a6a6a;       /* --ds-gray-800 light = muted */
--line:    rgba(255,255,255,0.07);
--line-2:  rgba(255,255,255,0.13);
--accent:  #0072f5;       /* --ds-blue-700 */
--accent-hover: #52a8ff;  /* --ds-blue-900 dark */
--ok:      #45a557;       /* --ds-green-700 */
--warn:    #ffb224;       /* --ds-amber-700 */
--alarm:   #e5484d;       /* --ds-red-700 */
```

**Typography:** Geist Sans (display/ui) + Geist Mono (instrument/data)
**Texture:** 8px plotting grid at very low opacity
**Signature detail:** dimension lines with arrowheads

### PLATING — PCB Routing
**Best for:** Data platforms, API infrastructure, integration tools

```css
/* PLATING — Geist Dark */
--bg-000: #0a0a0a;
--bg-100: #0f1a10;        /* --ds-green-1000 dark */
--bg-200: #162214;        /* --ds-green-900 dark */
--accent:  #12a594;       /* --ds-teal-700 */
--accent-2:#a1a1a1;       /* copper trace: gray-900 light */
--ok:      #12a594;       /* --ds-teal-700 */
--warn:    #ffb224;       /* --ds-amber-700 */
--alarm:   #e5484d;       /* --ds-red-700 */
```

**Signature detail:** trace lines connecting panels, component designators (R1, U7)

### WELDING — Steel Frame Assembly
**Best for:** Open-source tools, platforms, frameworks

```css
/* WELDING — Geist Dark */
--bg-000: #0a0a0a;
--bg-100: #1a1a1a;
--accent:  #ffb224;       /* --ds-amber-700 (weld glow) */
```

**Signature detail:** weld-seam dividers (2-3px with highlight), exposed grid-intersection labels (A3, B7)

### CASTING — Foundry/Forge
**Best for:** Hardware, manufacturing, energy, robotics

```css
/* CASTING — Geist Dark */
--bg-000: #0a0a0a;
--bg-100: #171717;
--accent:  #e5484d;       /* --ds-red-700 (safety) */
```

**Signature detail:** corner wedge markings, hazard hatching on ONE element

### CALIBRATING — Mission Control
**Best for:** Monitoring, trading terminals, real-time ops

```css
/* CALIBRATING — Geist Dark */
--bg-000: #0a0a0a;
--bg-100: #131B22;
--accent:  #ffb224;       /* --ds-amber-700 (instrument amber) */
--seg:     #45a557;       /* --ds-green-700 (segment green) */
```

**Signature detail:** GO/NO-GO status matrix, mission-elapsed-time clock

### PRINTING — Documentation/Research (Light Mode)
**Best for:** Research, B2B premium, legal, finance, docs

```css
/* PRINTING — Geist Light */
--bg-000: #ffffff;        /* --ds-background-100 light */
--bg-100: #fafafa;        /* --ds-background-200 light */
--bg-200: #f2f2f2;        /* --ds-gray-100 light */
--text-hi: #171717;       /* --ds-gray-1000 light */
--text-md: #4c4c4c;       /* --ds-gray-900 light */
--text-lo: #8f8f8f;       /* --ds-gray-700 light */
--line:    rgba(0,0,0,0.08);
--line-2:  rgba(0,0,0,0.16);
--accent:  #0072f5;       /* --ds-blue-700 */
```

**Layout:** DOCUMENT mode (see §3)
**Signature detail:** registration marks, section numbers (§ 01), figure captions

---

## §3 — LAYOUT MODES (Preserved, Geist-Native)

### BOXED — Default (Vercel Docs, Linear Blog Pattern)
Centered max-width chassis with visible page-ground gutters.

```css
.chassis {
  max-width: 1280px;
  margin: 0 auto;
  border-left: 1px solid var(--line-2);
  border-right: 1px solid var(--line-2);
  background: var(--bg-000);
}
```

**Use for:** Most pages. Hardware, B2B premium, dashboards, docs.

### FULL-BLEED — Edge-to-Edge
Content reaches every edge. Navigation spans full width.

```css
.full-bleed-section {
  width: 100%;
  border-bottom: 1px solid var(--line-2);
  padding: var(--geist-gap-double) clamp(24px, 5vw, 96px);
}
```

**Use for:** Infrastructure platforms, full dashboards, SRE tools.

### SPLIT — Message + Evidence
Left column carries language; right column carries live artifact (terminal, dashboard).

```css
.split-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1fr;
  border-bottom: 1px solid var(--line-2);
}
```

**Use for:** API products, SDKs, AI products with demo loops.

### DOCUMENT — Print-Grid
Wide margins, multi-column body, registration marks.

```css
body {
  background: var(--bg-000);
  padding: var(--geist-gap-double) clamp(48px, 8vw, 144px);
}
```

**Use for:** Research, B2B premium, documentation-as-product.

---

## §4 — SIGNATURE MOVE TRIPLET (Preserved)

Every render commits to exactly **three** signature moves from **three different categories**.

**Categories:**
1. **DIAGRAMS** — isometric module map, PCB schematic, wireframe cube, annotated cutaway, dimension lines
2. **DATA DISPLAY** — GO/NO-GO matrix, gauge arc cluster, log stream, benchmark table, segment display
3. **STRUCTURAL ELEMENTS** — edge-strip branding, registration marks, blueprint grid, weld seams, grid labels
4. **SURFACE TREATMENTS** — halftone hero, ASCII logo, hazard hatching, plotting grid
5. **COPY PATTERNS** — terminal header, component designators, status console strip, figure captions

**Example triplet for a developer API platform:**
- DIAGRAMS: PCB schematic with labeled pins (API endpoints = pins)
- DATA: Log stream tile in hero (request/response visibility)
- COPY: Component designators on panels (R1, U7, BUS-A)

---

## §5 — EVIDENCE RULES (Preserved)

Every section must answer "what does this prove?"

- **Hero:** Live proof artifact (terminal, dashboard, schematic). Not illustration.
- **Feature panels:** Small functional artifact — diagram fragment, code snippet, status row.
- **Numbers:** Plausible. `< 4ms p99` is industrial. `Lightning-fast` is marketing.
- **Code:** Must compile. Fake code is instantly spotted.

---

## §6 — TYPOGRAPHY SYSTEM (Geist-Native)

### The Two-Voice System

1. **STRUCTURE** — Geist Sans (headlines, body, navigation)
2. **INSTRUMENT** — Geist Mono (labels, data, timestamps, code)

### Font Stack

```css
/* Geist Sans — primary voice */
--font-sans: "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Geist Mono — instrument voice */
--font-mono: "Geist Mono", Menlo, Monaco, "Lucida Console", "Liberation Mono", monospace;

/* Geist Pixel — display moments (banners, headlines, decorative) */
--font-pixel: "Geist Pixel Square", "Geist Mono", monospace;
```

### Type Scale (Geist-Native)

| Role | Size | Weight | Spacing | Line Height | Voice |
|---|---|---|---|---|---|
| Hero Display | clamp(48px, 8vw, 88px) | 500 | -0.04em | 1.05 | STRUCTURE |
| Section Headline | clamp(28px, 3.5vw, 48px) | 600 | -0.02em | 1.15 | STRUCTURE |
| Body | 16px | 400 | 0 | 1.55 | STRUCTURE |
| Label / Annotation | 11-12px | 500 | 0.08em | 1.2 | INSTRUMENT |
| Data / Metric | clamp(24px, 2.5vw, 40px) | 500 | -0.01em | 1.1 | INSTRUMENT |
| Code / Terminal | 14px | 400 | 0 | 1.5 | INSTRUMENT |

### Critical Rules
- **Tabular figures:** `font-variant-numeric: tabular-nums` on ALL numbers
- **Labels are uppercase:** `text-transform: uppercase` + `letter-spacing: 0.08em`
- **Body never in mono:** Long-form text in sans-serif only
- **Display line-height tight:** Hero 1.05, headlines 1.15

---

## §7 — COLOR SYSTEM (Geist-Native)

### Three-Tier Rule (Preserved from Industrial)

**Tier 1: Neutral (80%)**
Geist gray scale: `--ds-gray-100` through `--ds-gray-1000`
- Backgrounds: `--ds-background-100`, `--ds-background-200`
- Text: `--ds-gray-1000` (primary), `--ds-gray-900` (secondary)
- Borders: `--ds-gray-alpha-400` through `--ds-gray-alpha-600`

**Tier 2: Accent (≤10%)**
ONE accent: `--ds-blue-700` (#0072f5)
- Primary buttons, active states, key metrics, focus rings
- NOT used for: backgrounds, body text, decorative fills

**Tier 3: Semantic (≤5%)**
- `--ds-green-700` (#45a557) = OK / success
- `--ds-amber-700` (#ffb224) = warn / caution
- `--ds-red-700` (#e5484d) = alarm / error

### Anti-Patterns
- No gradients except ≤8% luminosity directional lighting
- No drop shadows — depth comes from luminosity + 1px borders
- No pure #000 — use `--ds-background-100` (#0a0a0a dark, #ffffff light)

---

## §8 — GRID SYSTEM (Geist-Native + Exposed)

### Geist Grid Component

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

### Exposed Grid Rules (Industrial Overlay)

```css
/* Every section is framed */
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

/* Grid cells with hairlines */
.grid-cell {
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
```

### Responsive
```css
@media (max-width: 961px) {
  .chassis { border-left: none; border-right: none; }
  .grid-4, .grid-3 { grid-template-columns: 1fr; }
}
```

---

## §9 — GLASS / FROSTED GLASS (Overlay Layer)

Glass is an **optional overlay**, not a base material. Apply selectively to:
- Navbars (fixed, top)
- Modals / overlays
- Floating cards (hero CTA, floating panels)
- Tooltips (NOT popovers — Geist popovers use solid surfaces)

### Glass Tokens

```css
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-bg-hover: rgba(255, 255, 255, 0.06);
--glass-border: rgba(255, 255, 255, 0.06);
--glass-border-strong: rgba(255, 255, 255, 0.12);
--glass-blur: blur(16px) saturate(180%);
--glass-shine: inset 0 1px 0 rgba(255,255,255,0.08);
```

### Glass Recipe

```css
.glass {
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  overflow: hidden;
}

/* Specular shine overlay */
.glass::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.06) 0%,
    rgba(255,255,255,0.01) 100%
  );
  pointer-events: none;
  z-index: 0;
}

/* Diagonal highlight */
.glass::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.08) 0%,
    transparent 40%,
    transparent 60%,
    rgba(255,255,255,0.03) 100%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

### Glass + Grid Interaction

When glass sits over an exposed grid:
- Grid lines remain visible THROUGH the glass
- Glass adds depth without obscuring structure
- The grid IS the design; glass is a lens over it

```css
.glass-over-grid {
  backdrop-filter: blur(8px) saturate(140%);
  background: rgba(255,255,255,0.02);
  /* Lighter blur so grid stays readable */
}
```

---

## §10 — MOTION SYSTEM (Geist-Native)

### Core Philosophy
Motion is FEEDBACK, not decoration. Every animation answers "What just changed?"

### Easing
Use Geist's native easing:
```css
--ds-motion-timing-swift: cubic-bezier(.175, .885, .32, 1.1);
--ease-in: cubic-bezier(.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, .2, 1);
```

### Durations
- Button hover: 150ms
- Panel hover: 150ms
- Data update flash: 300ms
- Section reveal: 150ms
- Expansion/collapse: 200-300ms
- Max: 400ms (popover open)

### Allowed Animations
```css
/* Button hover */
.btn { transition: all 150ms linear; }
.btn:hover { border-color: var(--accent); }
.btn:active { transform: scale(0.98); }

/* Panel hover */
.panel { transition: border-color 150ms linear, background 150ms linear; }
.panel:hover { border-color: var(--line-2); background: var(--bg-200); }

/* Data flash */
.value-changed { animation: data-flash 300ms linear; }
@keyframes data-flash {
  0% { color: var(--accent); }
  100% { color: var(--text-hi); }
}

/* Live pulse */
.live-dot { animation: pulse 2s ease-in-out infinite; }

/* Scroll reveal */
.reveal { opacity: 0; transition: opacity 150ms linear; }
.reveal.visible { opacity: 1; }
```

### Banned (Industrial Rule)
- Scroll-linked parallax
- Fade + slide on scroll
- Infinite spinning
- Hover scale/lift
- Bouncy transitions
- Ambient drift
- Typewriter text (except terminal contexts)

---

## §11 — COMPONENT RECIPES (Geist-Native)

### Panel
```css
.panel {
  background: var(--bg-100);
  border: 1px solid var(--line-2);
  padding: var(--geist-gap);
  position: relative;
  transition: border-color 150ms linear, background-color 150ms linear;
}
.panel:hover { border-color: var(--accent); background: var(--bg-200); }
```

### Bento Grid
```css
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
.bento > * { background: var(--bg-100); padding: var(--geist-gap); }
```

### Metric Card
```css
.metric-card {
  background: var(--bg-100);
  border: 1px solid var(--line-2);
  padding: var(--geist-gap);
}
.metric-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-lo);
}
.metric-number {
  font-family: var(--font-mono);
  font-size: clamp(28px, 3vw, 40px);
  font-variant-numeric: tabular-nums;
}
```

### Navigation
```css
.nav-bar {
  border-bottom: 1px solid var(--line);
  background: var(--bg-000);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--geist-gap);
  height: 64px;
  max-width: 1280px;
  margin: 0 auto;
}
```

### Terminal Window
```css
.terminal {
  background: var(--bg-000);
  border: 1px solid var(--line-2);
  border-radius: var(--geist-radius);
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 13px;
}
```

---

## §12 — GEIST COMPONENT INVENTORY (Reference)

Geist has 80+ components. The most commonly used in Vertex Industrial pages:

**Layout:** Grid, GridCell, GridSystem, GridPage
**Typography:** Text (with size/weight/tracking variants)
**Navigation:** Tabs, Breadcrumbs, Menu
**Data Display:** Table, Gauge, Progress, StatusDot, Skeleton
**Feedback:** Toast, Note, Banner, Error, EmptyState
**Overlay:** Modal, Drawer, Sheet, Tooltip, Popover
**Input:** Button, Input, Textarea, Select, Checkbox, Radio, Switch, Slider
**Media:** Video, Avatar, Image

**Key props to know:**
- Grid: `columns`, `rows`, `hideGuides`, `dashedGuides`, `height="preserve-aspect-ratio"`
- GridCell: `column="1/3"`, `row="1/-1"`, `solid`
- Button: `variant` (primary/secondary/tertiary), `size` (small/medium/large)
- StatusDot: `color` (green/red/amber/blue), `pulse`

---

## §13 — SPACING SYSTEM (Geist-Native)

```css
--geist-space: 4px;
--geist-space-2x: 8px;
--geist-space-3x: 12px;
--geist-space-4x: 16px;
--geist-space-6x: 24px;
--geist-space-8x: 32px;
--geist-space-10x: 40px;
--geist-space-16x: 64px;
--geist-space-24x: 96px;
--geist-space-32x: 128px;
--geist-space-48x: 192px;
--geist-space-64x: 256px;

--geist-gap: 24px;
--geist-gap-half: 12px;
--geist-gap-quarter: 8px;
--geist-gap-double: 48px;
```

---

## §14 — SHAPE SYSTEM (Geist-Native)

```css
--geist-radius: 6px;
--geist-marketing-radius: 8px;
```

**Industrial adaptation:**
- Structural elements (grid, sections): 0px radius
- Interactive elements (buttons, inputs): 6px radius
- Pills/badges: 999px radius
- Cards/panels: 0px (sharp corners for industrial feel)

---

## §15 — SHADOW SYSTEM (Geist-Native)

Geist shadows (NO drop shadows in industrial layout):
```css
--ds-shadow-2xs: 0px 1px 1px rgba(0,0,0,0.04);
--ds-shadow-xs: 0px 1px 2px rgba(0,0,0,0.04);
--ds-shadow-small: 0px 2px 2px rgba(0,0,0,0.04);
--ds-shadow-medium: 0px 2px 2px rgba(0,0,0,0.04), 0px 8px 8px -8px rgba(0,0,0,0.04);
--ds-shadow-large: 0px 2px 2px rgba(0,0,0,0.04), 0px 8px 16px -4px rgba(0,0,0,0.04);
--ds-shadow-xl: 0px 1px 1px rgba(0,0,0,0.02), 0px 4px 8px -4px rgba(0,0,0,0.04), 0px 16px 24px -8px rgba(0,0,0,0.06);
--ds-shadow-2xl: 0px 1px 1px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.04), 0px 24px 32px -8px rgba(0,0,0,0.06);
```

**Industrial rule:** Use borders + luminosity steps for depth. Shadows only on:
- Modals/overlays (elevation needed)
- Floating elements (dropdowns, tooltips)
- Glass panels (subtle shadow for depth separation)

---

## §16 — FOCUS & ACCESSIBILITY

```css
--ds-focus-color: #0072f5;
--ds-focus-ring: 0 0 0 2px #fff, 0 0 0 4px #0072f5;
--ds-focus-ring-outline: 2px solid #0072f5;
```

**Rules:**
- All interactive elements have visible focus rings
- Tab order matches reading order
- `aria-hidden` on decorative elements (grid guides)
- Respect `prefers-reduced-motion`
- Minimum contrast: 4.5:1 for body, 3:1 for large text

---

## §17 — BRAND VOICE (Industrial-Geist Hybrid)

The user is an **OPERATOR**, not a visitor.

**Industrial voice + Geist precision:**
- CTAs: `Initialize`, `Deploy`, `Configure`, `View Telemetry`
- Status: `ALL SYSTEMS NOMINAL`, `NODE-7A · UTC 02:47:33`
- Labels: `[ MODULE 3A ]`, `// SYSTEM STATUS`, `01 / ARCHITECTURE`
- Footer: `© 2026 · BUILD v3.2.1 · NODE: US-EAST-1 · STATUS: OPERATIONAL`

**Translation table:**
| Marketing | Vertex Industrial |
|---|---|
| Get Started | Initialize |
| Sign Up | Create Operator Account |
| Try It Free | Run Trial |
| Learn More | Read Spec |
| Submit | Execute |
| Cancel | Abort |

---

## §18 — QUALITY GATES

### Phase 1 Gate
- [ ] Machine Question, Material, Layout Mode, 3 Signature Moves declared?
- [ ] Chassis frame correctly drawn for layout mode?
- [ ] Evidence slots present and labeled but not filled?
- [ ] Convergence trap avoided (MACHINING + FULL-BLEED + cyan + crosshairs)?
- [ ] No drop shadows, gradients (except ≤8%), emojis?

### Phase 2 Gate
- [ ] Every evidence slot filled with real artifact?
- [ ] All numbers, IDs, hashes, coordinates plausible?
- [ ] Illustrations use material's color/border discipline?
- [ ] Leader lines, dimension lines accurate and labeled?

### Phase 3 Gate
- [ ] All transitions ≤400ms with Geist easing?
- [ ] Every animation confirms state change or is in allowed-loop list?
- [ ] Page respects `prefers-reduced-motion`?
- [ ] All stray hex codes replaced with CSS variables?

---

## §19 — PORTABLE DELIVERABLE STRUCTURE

```
vertex-design-system/
├── README.md
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
│   ├── nav.css               # Navigation
│   └── status-dot.css        # Status indicators
├── patterns/
│   ├── signature-moves.md    # 24 moves catalog
│   ├── evidence-rules.md     # What proves what
│   └── glass-patterns.md     # Glass usage guidelines
├── assets/
│   └── svg/                  # Starter SVGs (15 files)
├── examples/
│   ├── dashboard.html        # Dark dashboard
│   ├── landing.html          # Premium landing
│   └── docs.html             # Documentation page
└── preview.html              # Live HTML preview
```

---

## §20 — DISTINGUISHING FEATURES

What makes Vertex Industrial different from:
- **Generic dark SaaS:** Real engineering artifacts, not marketing copy
- **Industrial cosplay:** Real Geist tokens + 3-phase protocol = structural integrity
- **PPLX reconstruction:** Official Vercel tokens, not Perplexity-inspired guesses
- **Standard Geist:** Industrial materials + signature moves + evidence rules = distinctive output

---

Run the 3-phase protocol. Pick a non-default material × layout × triplet. Fill every evidence slot with real artifacts. Use real Geist tokens. Audit. Ship.