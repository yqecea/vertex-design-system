# Vertex Industrial Design System

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yqecea/vertex-design-system)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CSS](https://img.shields.io/badge/css-408KB-orange.svg)](dist/vertex-industrial.css)

**Real Geist + Industrial Design + Frosted Glass**

A production-ready design system combining Vercel's official Geist Design System with industrial-design-frontend architecture and Oysana-level frosted glass effects.

[Live Showcase](examples/showcase.html) · [Documentation](docs/DESIGN_SYSTEM.md) · [Component Catalog](docs/GEIST_COMPONENT_CATALOG.md)

---

## What's Inside

```
vertex-design-system/
├── README.md                          # This file
├── build.js                           # Zero-dependency build script
├── package.json                       # Package manifest
├── dist/                              # Built files
│   ├── vertex-industrial.css          # Complete design system (408KB)
│   └── dev-imports.html               # Development import snippet
├── src/                               # Source code
│   ├── tokens/                        # 12 design token files
│   │   ├── colors.css                 # Geist color system (light + dark)
│   │   ├── typography.css             # Geist Sans/Mono/Pixel
│   │   ├── spacing.css                # 4px base scale
│   │   ├── glass.css                  # Frosted glass tokens
│   │   └── ...                        # 8 more token files
│   ├── components/                    # 69 CSS components
│   │   ├── button.css                 # Primary & ghost variants
│   │   ├── panel.css                  # Base container with glass
│   │   ├── gauge.css                  # Circular progress indicator
│   │   ├── glass.css                  # Glass overlay system
│   │   └── ...                        # 65 more components
│   ├── layouts/                       # 4 layout systems
│   │   ├── boxed.css                  # Contained chassis
│   │   ├── full-bleed.css             # Edge-to-edge
│   │   ├── split.css                  # Message + evidence
│   │   └── document.css               # Print-grid composition
│   ├── materials/                     # 6 material themes
│   │   ├── machining.css              # Default: dev tools, AI/ML
│   │   ├── plating.css                # PCB routing: data platforms
│   │   ├── welding.css                # Steel frame: open-source
│   │   ├── casting.css                # Foundry: hardware, robotics
│   │   ├── calibrating.css            # Mission control: monitoring
│   │   └── printing.css               # Light mode: docs, research
│   └── patterns/                      # Best practices & guides
│       ├── ANTI_PATTERNS.md           # 7 deadly sins
│       ├── SIGNATURE_MOVES.md         # 24 industrial moves
│       └── ...                        # 6 more guides
├── docs/                              # Documentation
│   ├── DESIGN_SYSTEM.md               # Complete design system reference
│   ├── GEIST_COMPONENT_CATALOG.md     # 80+ component catalog
│   ├── TESTING.md                     # Testing strategy
│   └── SKILL.md                       # Agent integration guide
├── examples/                          # Demo pages
│   ├── showcase.html                  # Interactive design system showcase
│   ├── preview.html                   # Live component preview
│   ├── landing.html                   # Premium landing page
│   ├── dashboard.html                 # Dark mission control
│   ├── docs.html                      # Light mode documentation
│   ├── landing.css                    # Landing page styles
│   ├── dashboard.css                  # Dashboard styles
│   └── docs.css                       # Docs styles
└── assets/                            # Static assets (526MB)
    ├── svg/                           # 15 industrial SVG elements
    ├── wallpapers/
    │   ├── desktop/                   # 33 PPLX wallpapers (16:9)
    │   ├── mobile/                    # 39 PPLX wallpapers (9:16)
    │   └── brand_design/              # 200 brand design assets
    │       ├── mizan/                 # 19 assets
    │       ├── optimal/               # 22 assets
    │       ├── black-perfect/         # 17 assets
    │       └── ...                    # 37 more brands
    └── README.md                      # Asset integration guide
```

---

## Quick Start

### Option 1: Use the Built CSS (Recommended)

```html
<link rel="stylesheet" href="dist/vertex-industrial.css">
```

### Option 2: Include Individual Files (Development)

```html
<!-- Tokens -->
<link rel="stylesheet" href="src/tokens/colors.css">
<link rel="stylesheet" href="src/tokens/typography.css">
<link rel="stylesheet" href="src/tokens/spacing.css">

<!-- Material Theme -->
<link rel="stylesheet" href="src/materials/machining.css">

<!-- Layout -->
<link rel="stylesheet" href="src/layouts/boxed.css">

<!-- Components -->
<link rel="stylesheet" href="src/components/button.css">
<link rel="stylesheet" href="src/components/panel.css">
```

### Build from Source

```bash
npm run build          # Build dist/vertex-industrial.css
npm run build:minify   # Build minified version
```

---

## Material Themes

Change the entire color scheme by setting `data-material` on `<html>`:

| Theme | Color | Use Case |
|-------|-------|----------|
| **machining** | Blue `#0072f5` | Dev tools, AI/ML, infrastructure |
| **plating** | Teal `#12a594` | Data platforms, API, integration |
| **welding** | Amber `#ffb224` | Open-source, frameworks, platforms |
| **casting** | Red `#e5484d` | Hardware, robotics, manufacturing |
| **calibrating** | Amber `#ffb224` | Monitoring, trading, real-time ops |
| **printing** | Blue `#0072f5` | Light mode: docs, research, finance |

```html
<html data-material="machining" data-theme="dark">
```

---

## Key Features

- **69 Components** — 19 Geist-native + 50 industrial additions
- **6 Material Themes** — Brand-specific color systems
- **4 Layout Modes** — Boxed, full-bleed, split, document
- **Glass Overlay System** — Base, advanced, liquid, and performance variants
- **509 Embedded Assets** — Wallpapers, brand designs, SVG elements
- **Zero Dependencies** — Pure CSS, no JS framework required
- **Mobile Optimized** — Performance budget for glass on phones

---

## Examples

Open `examples/` folder in a browser:

- **[showcase.html](examples/showcase.html)** — Interactive showcase with theme switcher
- **[preview.html](examples/preview.html)** — Live preview of all components
- **[landing.html](examples/landing.html)** — Premium landing with glass cards, grain, corner caps
- **[dashboard.html](examples/dashboard.html)** — Dark mission control with GO/NO-GO matrix
- **[docs.html](examples/docs.html)** — Light mode documentation

---

## Documentation

- **[DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** — Complete design system reference (20 sections)
- **[GEIST_COMPONENT_CATALOG.md](docs/GEIST_COMPONENT_CATALOG.md)** — 80+ component catalog
- **[TESTING.md](docs/TESTING.md)** — Comprehensive testing strategy
- **[SKILL.md](docs/SKILL.md)** — AI agent integration guide
- **[ASSET_INVENTORY.md](assets/ASSET_INVENTORY.md)** — Full asset catalog

---

## Philosophy

**Real Geist, not reconstruction.**
All tokens extracted from [vercel.com/geist](https://vercel.com/geist). No PPLX guesses.

**Industrial architecture.**
3-phase build protocol: Layout → Illustration → Motion. Every section contains evidence, not decoration.

**Glass as lens.**
Frosted glass is an overlay, not a base material. The grid IS the design.

---

## Resources Used

| Resource | Usage | Notes |
|---|---|---|
| Real Geist (vercel.com/geist) | 85% | All tokens, components, grid |
| Geist Pixel/Fonts | 90% | All 5 variants, npm package |
| Industrial-design-frontend | 75% | 3-phase protocol, materials, recipes |
| Oysana Landing | 40% | Glass values, grain overlay concept |
| PPLX Wallpapers | 60% | 72 inventoried, categorized |
| Brand Design Assets | 100% | 200 curated assets, 40 collections |

---

## Roadmap

### v1.1 (Next)
- [ ] HTML examples using real wallpapers as backgrounds
- [ ] Complete signature moves catalog (24 moves)
- [ ] Performance budget for glass on mobile
- [ ] Cyrillic fallback strategy
- [ ] Visual regression tests
- [ ] Figma variables export

### v2.0 (Future)
- [ ] React/Vue component wrappers
- [ ] Storybook integration
- [ ] Design tokens JSON export
- [ ] Dark/light mode toggle component
- [ ] Animation library

---

## License

- **Design System:** MIT
- **Geist Fonts:** SIL Open Font License
- **Wallpapers:** Personal use (PPLX branded)
- **Brand Assets:** Curated from public sources

---

**v1.0.0** — 2026-06-07

*Vertex Industrial — Engineered, not decorated.*
