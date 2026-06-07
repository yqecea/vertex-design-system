# Vertex Industrial Design System v1.0

## What's Inside

```
vertex-industrial-geist/
├── README.md                    # This file
├── DESIGN_SYSTEM.md             # Comprehensive design system reference
├── SKILL.md                     # Integration skill for agents
├── preview.html                 # Live preview of all components
├── tokens/
│   ├── colors.css              # Geist color tokens (light + dark)
│   ├── typography.css          # Geist Sans/Mono/Pixel stacks
│   ├── spacing.css             # 4px base scale
│   ├── motion.css              # Easing + animation tokens
│   ├── shape.css               # Radius tokens
│   └── glass.css               # Frosted glass overlay tokens
├── materials/
│   ├── machining.css           # Default: dev tools, AI/ML
│   ├── plating.css             # PCB routing: data platforms
│   ├── welding.css             # Steel frame: open-source
│   ├── casting.css             # Foundry: hardware, robotics
│   ├── calibrating.css         # Mission control: monitoring
│   └── printing.css            # Light mode: docs, research
├── layouts/
│   ├── boxed.css               # Contained chassis (default)
│   ├── full-bleed.css          # Edge-to-edge
│   ├── split.css               # Message + evidence
│   └── document.css            # Print-grid composition
├── components/
│   ├── panel.css               # Base container
│   ├── bento.css               # Bento grid
│   ├── metric.css              # Metric cards
│   ├── button.css              # Primary + ghost buttons
│   ├── terminal.css            # CLI window
│   └── nav.css                 # Navigation (with glass)
├── assets/
│   ├── svg/                    # 15 starter SVGs
│   │   ├── isometric-module-map.svg
│   │   ├── pcb-trace-pattern.svg
│   │   ├── gauge-arc-cluster.svg
│   │   ├── terminal-window.svg
│   │   └── ... (11 more)
│   └── wallpapers/             # 72 PPLX wallpapers
│       ├── desktop/            # 33 wallpapers (16:9)
│       │   ├── PPLX-Glowing-Helix-Garden-16x9.png
│       │   ├── PPLX-Cinematic-Masterpiece-Glass-16x9.png
│       │   └── ... (31 more)
│       └── mobile/             # 39 wallpapers (9:16)
│           ├── PPLX-Cosmic-Curiosity-9x16.png
│           ├── PPLX-Cinematic-3D-Scene-9x16.png
│           └── ... (37 more)
├── examples/
│   ├── landing.html            # Premium landing page
│   ├── dashboard.html          # Dark mission control
│   └── docs.html               # Documentation (light mode)
└── patterns/
    └── ASSET_INVENTORY.md      # Wallpaper categorization
```

## Quick Start

### 1. Include Tokens
```html
<link rel="stylesheet" href="tokens/colors.css">
<link rel="stylesheet" href="tokens/typography.css">
<link rel="stylesheet" href="tokens/spacing.css">
```

### 2. Choose Material
```html
<html data-material="machining" data-theme="dark">
```

Available materials:
- `machining` — Default. Dev tools, AI/ML. Blue accent (#0072f5)
- `plating` — PCB routing. Data platforms. Teal accent (#12a594)
- `welding` — Steel frame. Open-source. Amber accent (#ffb224)
- `casting` — Foundry. Hardware, robotics. Red accent (#e5484d)
- `calibrating` — Mission control. Monitoring. Amber accent (#ffb224)
- `printing` — Documentation. Light mode. Blue accent (#0072f5)

### 3. Choose Layout
```html
<body class="chassis"> <!-- BOXED (default) -->
<!-- OR -->
<body class="full-bleed"> <!-- Edge-to-edge -->
```

### 4. Add Components
```html
<div class="panel">
  <span class="panel-label">MODULE 3A</span>
  <h3>Edge Compute</h3>
  <p>Sub-100ms inference at the network edge.</p>
</div>
```

### 5. Apply Glass
```html
<nav class="nav nav--glass">
  <!-- Fixed glass navbar -->
</nav>
```

## Philosophy

**Real Geist, not reconstruction.**
All tokens extracted from vercel.com/geist. No PPLX guesses.

**Industrial architecture.**
3-phase build protocol: Layout → Illustration → Motion. Every section contains evidence, not decoration.

**Glass as lens.**
Frosted glass is an overlay, not a base material. The grid IS the design.

## Examples

Open `examples/` folder:
- **landing.html** — Premium landing with glass cards, corner caps, grain overlay
- **dashboard.html** — Dark mission control with GO/NO-GO matrix, metrics
- **docs.html** — Light mode documentation with registration marks

Open `preview.html` for a live showcase of all tokens, materials, and components.

## Assets

### Wallpapers
72 PPLX wallpapers (Midjourney-style) categorized by theme:
- Cosmic/Space (10)
- Cinematic/Surreal (16)
- Nature/Landscapes (12)
- Books/Knowledge (10)
- People/Characters (14)
- Abstract/Digital (10)

### SVG Starters
15 industrial SVG assets for evidence slots:
- Isometric module maps
- PCB trace patterns
- Gauge arc clusters
- Terminal windows
- Wireframe cubes
- And more...

## Resources Used

| Resource | Usage % | Notes |
|---|---|---|
| Real Geist (vercel.com/geist) | 85% | All tokens, components, grid |
| Geist Pixel/Fonts | 90% | All 5 variants, npm package |
| Industrial-design-frontend | 75% | 3-phase protocol, materials, recipes |
| Oysana Landing | 40% | Glass values, grain overlay concept |
| PPLX Wallpapers | 60% | All 72 inventoried, categorized |

## What's Missing (for v1.1)

- [ ] HTML examples using real wallpapers (currently placeholders)
- [ ] Complete signature moves catalog (24 moves, only categories)
- [ ] Performance budget for glass on mobile
- [ ] Cyrillic fallback strategy
- [ ] Visual regression tests
- [ ] Figma variables export

## License

Geist fonts: SIL Open Font License
Design system: MIT
Wallpapers: Personal use (PPLX branded)

## Version

**v1.0.0** — 2026-06-06
- Real Geist tokens
- 6 industrial materials
- 4 layout modes
- 6 components
- Glass overlay system
- 72 wallpapers
- 15 SVGs

---

*Vertex Industrial — Engineered, not decorated.*