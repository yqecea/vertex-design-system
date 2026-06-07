# Industrial SVG Library

Complete catalog of all SVG assets in the industrial design system. Each file includes: filename, description, usage example, CSS class reference, and editing notes.

---

## Asset Inventory

| # | Filename | Category | Signature Move | Purpose |
|---|---|---|---|---|
| 1 | `ascii-logo-block.svg` | SURFACE | Su2 | ASCII art wordmark template |
| 2 | `blueprint-grid.svg` | STRUCTURAL | S3 | 8px + 80px dual-scale plotting grid |
| 3 | `dimension-line.svg` | DIAGRAMS | D5 | Engineering dimension line with arrows |
| 4 | `gauge-arc-cluster.svg` | DATA | Dt2 | Three instrument gauges with values |
| 5 | `go-nogo-matrix.svg` | DATA | Dt1 | 3×2 GO/CAUTION/NO-GO status grid |
| 6 | `halftone-dither.svg` | SURFACE | Su1 | Halftone filter + sample pattern |
| 7 | `isometric-module-map.svg` | DIAGRAMS | D1 | Labeled isometric architecture diagram |
| 8 | `isometric-server-rack.svg` | DIAGRAMS | D1 | Server rack with 4 units + status dots |
| 9 | `leader-line-annotation.svg` | DIAGRAMS | D4 | 4 leader-line callouts with labels |
| 10 | `pcb-trace-pattern.svg` | DIAGRAMS | D3 | PCB with traces, vias, labeled components |
| 11 | `registration-marks.svg` | STRUCTURAL | S2 | Corner registration marks for DOCUMENT layout |
| 12 | `status-dot-cluster.svg` | COPY | C3 companion | 4-service status row with uptime |
| 13 | `terminal-window.svg` | DATA | Dt3 companion | Terminal window chrome + sample content |
| 14 | `waveform-sparkline.svg` | DATA | Dt2 companion | Time-series sparkline with peak label |
| 15 | `wireframe-cube.svg` | DIAGRAMS | D2 | Exploded wireframe cube with callout |

---

## Asset Details

### 1. `ascii-logo-block.svg`

**Category:** SURFACE — Signature Move Su2

**Description:** A sample ASCII art wordmark rendered as SVG `<text>`. Used as a footer element, hero accent, or 404 page brand mark. The ASCII block communicates "this product is built by engineers, for engineers."

**CSS Class:**
```css
.ascii-logo {
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.2;
  color: var(--text-md);
  white-space: pre;
}
```

**Usage Example:**
```html
<!-- Inline SVG -->
<svg class="ascii-logo" viewBox="0 0 360 72" width="100%" aria-labelledby="ascii-title">
  <title id="ascii-title">ASCII logo: FORGE</title>
  <text class="ascii" x="0" y="12">  ███████╗  ██████╗  ██████╗   ██████╗ ███████╗</text>
  <text class="ascii" x="0" y="22">  ██╔════╝ ██╔═══██╗ ██╔══██╗ ██╔════╝ ██╔════╝</text>
  <text class="ascii" x="0" y="32">  █████╗   ██║   ██║ ██████╔╝ ██║  ███╗█████╗  </text>
  <text class="ascii" x="0" y="42">  ██╔══╝   ██║   ██║ ██╔══██╗ ██║   ██║██╔══╝  </text>
  <text class="ascii" x="0" y="52">  ██║      ╚██████╔╝ ██║  ██║ ╚██████╔╝███████╗</text>
  <text class="ascii" x="0" y="62">  ╚═╝       ╚═════╝  ╚═╝  ╚═╝  ╚═════╝ ╚══════╝</text>
</svg>

<!-- Or as HTML <pre> (recommended for accessibility) -->
<pre class="ascii-logo" aria-label="FORGE">
  ███████╗  ██████╗  ██████╗   ██████╗ ███████╗
  ██╔════╝ ██╔═══██╗ ██╔══██╗ ██╔════╝ ██╔════╝
  █████╗   ██║   ██║ ██████╔╝ ██║  ███╗█████╗  
  ██╔══╝   ██║   ██║ ██╔══██╗ ██║   ██║██╔══╝  
  ██║      ╚██████╔╝ ██║  ██║ ╚██████╔╝███████╗
  ╚═╝       ╚═════╝  ╚═╝  ╚═╝  ╚═════╝ ╚══════╝
</pre>
```

**Editing Notes:**
- Replace the ASCII art entirely with your brand name using an ASCII art generator
- Keep the `viewBox="0 0 360 72"` or adjust to match your wordmark width
- Colors inherit from `--text-md` via CSS variable

---

### 2. `blueprint-grid.svg`

**Category:** STRUCTURAL — Signature Move S3

**Description:** An 8px (minor) + 80px (major) dual-scale plotting grid pattern. Used as a background layer behind hero content or as a section texture. The grid implies "this surface was calibrated."

**CSS Class:**
```css
.blueprint-grid {
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line) 1px, transparent 1px),
    linear-gradient(to right, var(--line-2) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line-2) 1px, transparent 1px);
  background-size: 8px 8px, 8px 8px, 80px 80px, 80px 80px;
}
```

**Usage Example:**
```html
<!-- As CSS background (recommended) -->
<section class="blueprint-grid" style="position: relative; padding: var(--s-8) var(--s-6);">
  <div style="position: relative; z-index: 1;">
    <!-- hero content -->
  </div>
</section>

<!-- As inline SVG -->
<svg class="blueprint-grid-svg" viewBox="0 0 80 80" width="100%" height="100%" preserveAspectRatio="none"
     style="position: absolute; inset: 0; pointer-events: none;">
  <defs>
    <pattern id="blueprint-minor" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="var(--line, rgba(255,255,255,0.04))" stroke-width="0.5"/>
    </pattern>
    <pattern id="blueprint-major" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <rect width="80" height="80" fill="url(#blueprint-minor)"/>
      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--line-2, rgba(255,255,255,0.10))" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#blueprint-major)"/>
</svg>
```

**Editing Notes:**
- The SVG version uses `preserveAspectRatio="none"` to stretch to any container
- The CSS version is more performant for large areas
- Tune opacity via `--line` and `--line-2` tokens

---

### 3. `dimension-line.svg`

**Category:** DIAGRAMS — Signature Move D5

**Description:** An engineering-drawing style dimension line with arrowheads at both ends and a centered measurement label. Used as a section divider or to call out chassis width in BOXED layouts.

**CSS Class:**
```css
.dimension-line {
  width: 100%;
  max-width: 400px;
}
```

**Usage Example:**
```html
<svg class="dimension-line" viewBox="0 0 400 60" width="100%" aria-labelledby="dim-title">
  <title id="dim-title">Dimension line: 1280px</title>
  <style>
    .dim-stroke { stroke: var(--text-md, #9DA6AB); stroke-width: 1; }
    .dim-arrow  { fill: var(--text-md, #9DA6AB); }
    .dim-label  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.04em; fill: var(--text-md, #9DA6AB); font-variant-numeric: tabular-nums; }
    .dim-bg     { fill: var(--bg-000, #0B0D0F); }
  </style>
  <line class="dim-stroke" x1="10"  y1="20" x2="10"  y2="40"/>
  <line class="dim-stroke" x1="390" y1="20" x2="390" y2="40"/>
  <line class="dim-stroke" x1="10" y1="30" x2="390" y2="30"/>
  <polygon class="dim-arrow" points="10,30 22,25 22,35"/>
  <polygon class="dim-arrow" points="390,30 378,25 378,35"/>
  <rect class="dim-bg" x="172" y="22" width="56" height="16"/>
  <text class="dim-label" x="200" y="33" text-anchor="middle">1280 px</text>
</svg>
```

**Editing Notes:**
- Change the measurement label text to match your actual container width
- Adjust `viewBox` width if you need a longer dimension line
- The `dim-bg` rect covers the dimension line behind the label for readability

---

### 4. `gauge-arc-cluster.svg`

**Category:** DATA — Signature Move Dt2

**Description:** Three partial gauge arcs (270° sweep) with current values, units, and labels. Pulled directly from instrument-panel vocabulary. Each gauge shows a metric with a threshold arc.

**CSS Class:**
```css
.gauge-cluster {
  width: 100%;
  max-width: 540px;
}
.gauge-cluster svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="gauge-cluster" viewBox="0 0 540 200" width="100%" aria-labelledby="gauge-title">
  <title id="gauge-title">Gauge arc cluster</title>
  <style>
    .gauge-track { fill: none; stroke: var(--line, rgba(255,255,255,0.08)); stroke-width: 6; }
    .gauge-fill  { fill: none; stroke: var(--accent, #FFB000); stroke-width: 6; stroke-linecap: butt; }
    .gauge-tick  { stroke: var(--text-lo, #6A665E); stroke-width: 1; }
    .gauge-value { font-family: var(--font-mono, ui-monospace, monospace); font-size: 24px; font-weight: 500; fill: var(--text-hi, #E8E4DC); font-variant-numeric: tabular-nums; }
    .gauge-unit  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; fill: var(--text-lo, #6A665E); }
    .gauge-label { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; letter-spacing: 0.08em; fill: var(--text-md, #9A968E); text-transform: uppercase; text-anchor: middle; }
  </style>

  <!-- Gauge 1: CPU LOAD -->
  <g transform="translate(90, 90)">
    <path class="gauge-track" d="M -50 35 A 60 60 0 1 1 50 35"/>
    <path class="gauge-fill"  d="M -50 35 A 60 60 0 1 1 56 -20"/>
    <line class="gauge-tick" x1="-50" y1="35" x2="-58" y2="42"/>
    <line class="gauge-tick" x1="0"   y1="-60" x2="0"   y2="-70"/>
    <line class="gauge-tick" x1="50"  y1="35" x2="58"  y2="42"/>
    <text class="gauge-value" x="0" y="0" text-anchor="middle">67</text>
    <text class="gauge-unit"  x="0" y="14" text-anchor="middle">%</text>
    <text class="gauge-label" x="0" y="65">CPU LOAD</text>
  </g>

  <!-- Gauge 2: MEMORY -->
  <g transform="translate(270, 90)">
    <path class="gauge-track" d="M -50 35 A 60 60 0 1 1 50 35"/>
    <path class="gauge-fill"  d="M -50 35 A 60 60 0 1 1 -23 -55" style="stroke: var(--ok, #46E37B);"/>
    <text class="gauge-value" x="0" y="0" text-anchor="middle">43</text>
    <text class="gauge-unit"  x="0" y="14" text-anchor="middle">%</text>
    <text class="gauge-label" x="0" y="65">MEMORY</text>
  </g>

  <!-- Gauge 3: P99 LATENCY -->
  <g transform="translate(450, 90)">
    <path class="gauge-track" d="M -50 35 A 60 60 0 1 1 50 35"/>
    <path class="gauge-fill"  d="M -50 35 A 60 60 0 0 1 -57 -10"/>
    <text class="gauge-value" x="0" y="0" text-anchor="middle">12</text>
    <text class="gauge-unit"  x="0" y="14" text-anchor="middle">ms</text>
    <text class="gauge-label" x="0" y="65">P99 LATENCY</text>
  </g>
</svg>
```

**Editing Notes:**
- Edit the gauge labels, values, and units to match your product metrics
- Adjust the `d` path of `.gauge-fill` to change the arc fill percentage
- The second gauge shows how to override the stroke color with `var(--ok)`

---

### 5. `go-nogo-matrix.svg`

**Category:** DATA — Signature Move Dt1

**Description:** A 3×2 grid of subsystem status cells, each colored green (GO), amber (CAUTION), or red (NO-GO). Directly from mission control vocabulary. Each cell shows a subsystem name and its current status.

**CSS Class:**
```css
.go-nogo {
  width: 100%;
  max-width: 480px;
}
.go-nogo svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="go-nogo" viewBox="0 0 480 180" width="100%" aria-labelledby="gng-title">
  <title id="gng-title">GO / NO-GO status matrix</title>
  <style>
    .gng-cell    { fill: var(--bg-100, #131B22); stroke: var(--line-2, rgba(255,255,255,0.13)); stroke-width: 1; }
    .gng-bar-ok  { fill: var(--ok, #46E37B); }
    .gng-bar-wn  { fill: var(--warn, #FFB000); }
    .gng-bar-no  { fill: var(--alarm, #FF453A); }
    .gng-label   { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--text-md, #869099); text-transform: uppercase; }
    .gng-state-ok  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--ok, #46E37B); font-weight: 500; }
    .gng-state-wn  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--warn, #FFB000); font-weight: 500; }
    .gng-state-no  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--alarm, #FF453A); font-weight: 500; }
  </style>

  <!-- Row 1 -->
  <g transform="translate(0, 0)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-ok" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">PROP</text>
    <text class="gng-state-ok" x="16" y="56">GO</text>
  </g>
  <g transform="translate(160, 0)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-ok" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">GNC</text>
    <text class="gng-state-ok" x="16" y="56">GO</text>
  </g>
  <g transform="translate(320, 0)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-wn" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">COMM</text>
    <text class="gng-state-wn" x="16" y="56">CAUTION</text>
  </g>

  <!-- Row 2 -->
  <g transform="translate(0, 80)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-ok" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">EPS</text>
    <text class="gng-state-ok" x="16" y="56">GO</text>
  </g>
  <g transform="translate(160, 80)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-ok" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">ECLSS</text>
    <text class="gng-state-ok" x="16" y="56">GO</text>
  </g>
  <g transform="translate(320, 80)">
    <rect class="gng-cell" x="0"   y="0" width="160" height="80"/>
    <rect class="gng-bar-no" x="0" y="0" width="2"   height="80"/>
    <text class="gng-label" x="16" y="32">TLM</text>
    <text class="gng-state-no" x="16" y="56">NO-GO</text>
  </g>
</svg>
```

**Editing Notes:**
- Replace subsystem names (PROP, GNC, COMM, etc.) with your product's subsystems
- Change status colors by swapping `.gng-bar-*` classes
- Adjust `viewBox` width if you need more/fewer columns

---

### 6. `halftone-dither.svg`

**Category:** SURFACE — Signature Move Su1

**Description:** An SVG filter that applies a halftone/dither effect to any image, plus a sample dot-screen pattern. Used for hero imagery on PRINTING material pages.

**CSS Class:**
```css
.halftone-img {
  filter: url(#halftone);
  width: 100%;
  display: block;
}
```

**Usage Example:**
```html
<!-- Define the filter once -->
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <filter id="halftone" x="0" y="0" width="100%" height="100%">
      <feGaussianBlur stdDeviation="0.3" in="SourceGraphic"/>
      <feColorMatrix type="matrix"
        values="0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0    0    0    1 0"/>
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0 0 0.2 0.4 0.6 0.8 1"/>
      </feComponentTransfer>
    </filter>
  </defs>
</svg>

<!-- Apply to any image -->
<img src="hero.jpg" class="halftone-img" alt="">

<!-- Or use the sample pattern directly -->
<svg viewBox="0 0 320 200" width="100%">
  <rect x="0" y="0" width="320" height="200" fill="var(--bg-000, #F7F5F0)"/>
  <rect x="0"   y="0" width="106" height="200" fill="url(#dot-screen)" opacity="0.25"/>
  <rect x="106" y="0" width="106" height="200" fill="url(#dot-screen)" opacity="0.55"/>
  <rect x="212" y="0" width="108" height="200" fill="url(#dot-screen-dense)" opacity="0.85"/>
</svg>
```

**Editing Notes:**
- The `stdDeviation` controls blur amount; lower = sharper dots
- The `tableValues` in `feFuncA` controls the threshold levels
- The sample pattern uses dot density to simulate grayscale

---

### 7. `isometric-module-map.svg`

**Category:** DIAGRAMS — Signature Move D1

**Description:** Five labeled modules in 3D isometric, with data-flow connections. The primary diagram for proving architecture. Each module is a labeled cube; dashed lines between cubes are labeled data paths.

**CSS Class:**
```css
.iso-module-map {
  width: 100%;
  max-width: 720px;
}
.iso-module-map svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="iso-module-map" viewBox="0 0 720 480" width="100%" aria-labelledby="iso-title">
  <title id="iso-title">Isometric module map</title>
  <style>
    .iso-stroke { stroke: var(--iso-stroke, var(--line-2, #333)); stroke-width: 1; fill: var(--iso-fill, var(--bg-100, #181818)); }
    .iso-top    { stroke: var(--iso-stroke, var(--line-2, #333)); stroke-width: 1; fill: var(--iso-top, var(--bg-200, #222222)); }
    .iso-side   { stroke: var(--iso-stroke, var(--line-2, #333)); stroke-width: 1; fill: var(--iso-fill, var(--bg-100, #181818)); opacity: 0.85; }
    .iso-accent .iso-stroke,
    .iso-accent .iso-top,
    .iso-accent .iso-side { stroke: var(--iso-accent, var(--accent, #4AA8FF)); }
    .iso-accent .iso-top  { fill: color-mix(in srgb, var(--iso-accent, var(--accent, #4AA8FF)) 18%, var(--iso-top, var(--bg-200, #222))); }
    .iso-line   { stroke: var(--iso-line, var(--line-2, #333)); stroke-width: 1; fill: none; stroke-dasharray: 4 3; }
    .iso-label  { font-family: var(--font-mono, ui-monospace, Menlo, monospace); font-size: 11px; letter-spacing: 0.06em; fill: var(--iso-label, var(--text-md, #9DA6AB)); text-transform: uppercase; }
    .iso-label-conn { font-family: var(--font-mono, ui-monospace, monospace); font-size: 9px; letter-spacing: 0.06em; fill: var(--iso-label, var(--text-md, #9DA6AB)); text-transform: uppercase; }
  </style>

  <!-- Module A — INGEST -->
  <g transform="translate(80, 100)">
    <polygon class="iso-top" points="40,0 100,30 60,60 0,30"/>
    <polygon class="iso-side" points="0,30 60,60 60,110 0,80"/>
    <polygon class="iso-stroke" points="100,30 100,80 60,110 60,60"/>
    <text class="iso-label" x="120" y="65" text-anchor="start">INGEST</text>
  </g>

  <!-- Module B — NORMALIZE -->
  <g transform="translate(440, 100)">
    <polygon class="iso-top" points="40,0 100,30 60,60 0,30"/>
    <polygon class="iso-side" points="0,30 60,60 60,110 0,80"/>
    <polygon class="iso-stroke" points="100,30 100,80 60,110 60,60"/>
    <text class="iso-label" x="120" y="65" text-anchor="start">NORMALIZE</text>
  </g>

  <!-- Module C — INFERENCE (ACCENT) -->
  <g transform="translate(280, 200)" class="iso-accent">
    <polygon class="iso-top" points="50,0 120,35 70,70 0,35"/>
    <polygon class="iso-side" points="0,35 70,70 70,130 0,95"/>
    <polygon class="iso-stroke" points="120,35 120,95 70,130 70,70"/>
    <text class="iso-label" x="60" y="160" text-anchor="middle" style="fill: var(--iso-accent, var(--accent, #4AA8FF));">INFERENCE</text>
  </g>

  <!-- Module D — STORAGE -->
  <g transform="translate(100, 320)">
    <polygon class="iso-top" points="40,0 100,30 60,60 0,30"/>
    <polygon class="iso-side" points="0,30 60,60 60,110 0,80"/>
    <polygon class="iso-stroke" points="100,30 100,80 60,110 60,60"/>
    <text class="iso-label" x="120" y="65" text-anchor="start">STORAGE</text>
  </g>

  <!-- Module E — EDGE -->
  <g transform="translate(460, 320)">
    <polygon class="iso-top" points="40,0 100,30 60,60 0,30"/>
    <polygon class="iso-side" points="0,30 60,60 60,110 0,80"/>
    <polygon class="iso-stroke" points="100,30 100,80 60,110 60,60"/>
    <text class="iso-label" x="120" y="65" text-anchor="start">EDGE</text>
  </g>

  <!-- Connection lines -->
  <path class="iso-line" d="M 180 160 Q 240 200 320 240"/>
  <text class="iso-label-conn" x="240" y="195">grpc :9092</text>
  <path class="iso-line" d="M 500 160 Q 460 200 400 240"/>
  <text class="iso-label-conn" x="455" y="195">tcp :7000</text>
  <path class="iso-line" d="M 320 320 Q 240 340 180 360"/>
  <text class="iso-label-conn" x="220" y="355">wal stream</text>
  <path class="iso-line" d="M 400 320 Q 460 340 520 360"/>
  <text class="iso-label-conn" x="455" y="355">wss</text>
</svg>
```

**Editing Notes:**
- Replace module names with your product's components
- Replace connection labels with your actual protocols/endpoints
- The accent module (class `iso-accent`) should be your core value component
- Adjust positions by changing `translate()` values

---

### 8. `isometric-server-rack.svg`

**Category:** DIAGRAMS — Signature Move D1 (variant)

**Description:** A server rack with 4 labeled units and per-unit status dots. An alternative to the module map for infrastructure products.

**CSS Class:**
```css
.server-rack {
  width: 100%;
  max-width: 360px;
}
.server-rack svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="server-rack" viewBox="0 0 360 400" width="100%" aria-labelledby="rack-title">
  <title id="rack-title">Isometric server rack</title>
  <style>
    .rk-frame  { fill: var(--bg-100, #181818); stroke: var(--line-2, #333); stroke-width: 1; }
    .rk-frame-top { fill: var(--bg-200, #222); stroke: var(--line-2, #333); stroke-width: 1; }
    .rk-frame-side { fill: var(--bg-100, #181818); stroke: var(--line-2, #333); stroke-width: 1; opacity: 0.85; }
    .rk-unit   { fill: var(--bg-200, #222); stroke: var(--line-2, #333); stroke-width: 1; }
    .rk-vent   { fill: var(--bg-000, #0B0D0F); }
    .rk-dot-ok { fill: var(--ok, #46E37B); }
    .rk-dot-wn { fill: var(--warn, #FFB000); }
    .rk-label  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 9px; letter-spacing: 0.04em; fill: var(--text-md, #9DA6AB); text-transform: uppercase; }
    .rk-name   { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; letter-spacing: 0.08em; fill: var(--text-md, #9DA6AB); text-transform: uppercase; }
  </style>
  <!-- Rack frame and units -->
  <polygon class="rk-frame-top" points="60,40 220,40 280,80 120,80"/>
  <polygon class="rk-frame-side" points="220,40 280,80 280,340 220,300"/>
  <polygon class="rk-frame" points="60,40 220,40 220,300 60,300"/>
  <!-- Unit 01 -->
  <rect class="rk-unit" x="70" y="50"  width="140" height="56"/>
  <rect class="rk-vent" x="78" y="58"  width="50" height="6"/>
  <rect class="rk-vent" x="78" y="68"  width="50" height="6"/>
  <circle class="rk-dot-ok" cx="195" cy="64" r="3"/>
  <text class="rk-name" x="140" y="98" text-anchor="middle">UNIT-01 · COMPUTE</text>
  <!-- ... more units ... -->
  <text class="rk-label" x="20" y="170" transform="rotate(-90 20 170)">RACK A · ROW 03 · DATACENTER US-EAST-1</text>
</svg>
```

**Editing Notes:**
- Replace unit labels with your product's service names
- Change status dot colors (`rk-dot-ok` → `rk-dot-wn` / `rk-dot-no`) per unit
- The side label is rotated 90° and appears on the left edge

---

### 9. `leader-line-annotation.svg`

**Category:** DIAGRAMS — Signature Move D4

**Description:** Four leader-line callouts (anchor dot → line → label box) overlaid on a product visualization. Each callout has a numbered label, title, and description.

**CSS Class:**
```css
.leader-annotation {
  width: 100%;
  max-width: 800px;
}
.leader-annotation svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<figure class="cutaway">
  <img src="product.png" alt="" class="cutaway-image"/>
  <svg class="leader-annotation" viewBox="0 0 800 500" style="position: absolute; top: 0; left: 0;">
    <style>
      .ld-anchor { fill: var(--accent, #4AA8FF); }
      .ld-line   { stroke: var(--line-2, rgba(255,255,255,0.18)); stroke-width: 1; fill: none; }
      .ld-box    { fill: var(--bg-100, #121619); stroke: var(--line-2, rgba(255,255,255,0.18)); stroke-width: 1; }
      .ld-num    { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; letter-spacing: 0.08em; fill: var(--accent, #4AA8FF); }
      .ld-title  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--text-hi, #E4E7E9); text-transform: uppercase; }
      .ld-body   { font-family: var(--font-ui, system-ui, sans-serif); font-size: 11px; fill: var(--text-md, #9DA6AB); }
    </style>
    <!-- Callout 1 -->
    <circle class="ld-anchor" cx="240" cy="180" r="3"/>
    <path class="ld-line" d="M 240 180 L 540 100 L 560 100"/>
    <rect class="ld-box" x="560" y="76" width="220" height="48"/>
    <text class="ld-num"   x="572" y="92">01</text>
    <text class="ld-title" x="596" y="92">LIVE REQUEST PANEL</text>
    <text class="ld-body"  x="572" y="112">Inbound calls, 100ms refresh</text>
  </svg>
</figure>
```

**Editing Notes:**
- Adjust anchor positions (`cx`, `cy`) to match your product image
- Change callout text to describe your actual features
- Add/remove callouts by duplicating/removing `<g>` blocks

---

### 10. `pcb-trace-pattern.svg`

**Category:** DIAGRAMS — Signature Move D3

**Description:** A PCB board outline with copper traces, via dots, and labeled components. The board has horizontal buses, vertical traces, vias at intersections, and components with pins.

**CSS Class:**
```css
.pcb-diagram {
  width: 100%;
  max-width: 600px;
}
.pcb-diagram svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="pcb-diagram" viewBox="0 0 600 360" width="100%" aria-labelledby="pcb-title">
  <title id="pcb-title">PCB schematic with labeled pins</title>
  <style>
    .pcb-board    { fill: var(--bg-100, #0F1A10); stroke: var(--line-2, #2A4030); stroke-width: 1; }
    .pcb-trace    { fill: none; stroke: var(--accent, #33FF99); stroke-width: 1; opacity: 0.6; }
    .pcb-trace-2  { fill: none; stroke: color-mix(in srgb, var(--accent, #33FF99) 50%, transparent); stroke-width: 1; opacity: 0.5; }
    .pcb-via      { fill: var(--bg-000, #0A1208); stroke: var(--accent, #33FF99); stroke-width: 0.8; }
    .pcb-pad      { fill: var(--accent, #33FF99); opacity: 0.7; }
    .pcb-comp     { fill: var(--bg-200, #162214); stroke: var(--line-2, #3A5040); stroke-width: 1; }
    .pcb-label    { font-family: var(--font-mono, ui-monospace, monospace); font-size: 9px; letter-spacing: 0.04em; fill: var(--text-md, #8AAA7C); text-transform: uppercase; }
    .pcb-pin-label { font-family: var(--font-mono, ui-monospace, monospace); font-size: 7px; fill: var(--text-lo, #5A7A4E); }
  </style>
  <!-- Board outline -->
  <rect class="pcb-board" x="20" y="20" width="560" height="320" rx="4"/>
  <text class="pcb-label" x="32" y="40">BOARD REV C · 12-LAYER · ALL PATHS VERIFIED</text>
  <!-- Traces and components... -->
</svg>
```

**Editing Notes:**
- Replace component designators (`R1`, `U7`, `C4`) with your service names
- Change bus labels (`BUS-A`, `BUS-B`) to your API endpoint categories
- The edge connector on the right can represent external API consumers

---

### 11. `registration-marks.svg`

**Category:** STRUCTURAL — Signature Move S2

**Description:** Single corner registration mark (`[+]` shape) for DOCUMENT layout. Position four of them at viewport corners.

**CSS Class:**
```css
.reg-mark {
  position: fixed;
  width: 16px; height: 16px;
  pointer-events: none;
}
.reg-mark::before, .reg-mark::after {
  content: ''; position: absolute; background: var(--text-lo);
}
.reg-mark::before { left: 0; right: 0; top: 50%; height: 1px; }
.reg-mark::after  { top: 0; bottom: 0; left: 50%; width: 1px; }

.reg-mark.tl { top: 16px; left: 16px; }
.reg-mark.tr { top: 16px; right: 16px; }
.reg-mark.bl { bottom: 16px; left: 16px; }
.reg-mark.br { bottom: 16px; right: 16px; }
```

**Usage Example:**
```html
<!-- CSS approach (recommended) -->
<div class="reg-mark tl"></div>
<div class="reg-mark tr"></div>
<div class="reg-mark bl"></div>
<div class="reg-mark br"></div>

<!-- SVG approach -->
<svg class="reg-mark" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
  <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1"/>
  <line x1="8" y1="0" x2="8"  y2="16" stroke="currentColor" stroke-width="1"/>
  <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1"/>
</svg>
```

**Editing Notes:**
- The CSS approach is more performant and easier to position
- Use `currentColor` to inherit from parent text color
- On light mode (PRINTING), marks should be dark; on dark mode, light

---

### 12. `status-dot-cluster.svg`

**Category:** COPY — Signature Move C3 companion

**Description:** A row of 4 services with colored status dots and uptime numbers. Used alongside the status console strip for a complete status display.

**CSS Class:**
```css
.status-cluster {
  width: 100%;
  max-width: 540px;
}
.status-cluster svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="status-cluster" viewBox="0 0 540 64" width="100%" aria-labelledby="status-title">
  <title id="status-title">Service status cluster</title>
  <style>
    .sc-frame  { fill: var(--bg-100, #131B22); stroke: var(--line-2, rgba(255,255,255,0.13)); stroke-width: 1; }
    .sc-div    { stroke: var(--line-2, rgba(255,255,255,0.13)); stroke-width: 1; }
    .sc-dot-ok { fill: var(--ok, #46E37B); }
    .sc-dot-wn { fill: var(--warn, #FFB000); }
    .sc-dot-no { fill: var(--alarm, #FF453A); }
    .sc-name   { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.08em; fill: var(--text-md, #869099); text-transform: uppercase; }
    .sc-uptime { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; fill: var(--text-lo, #5A6470); font-variant-numeric: tabular-nums; }
  </style>
  <rect class="sc-frame" x="0.5" y="0.5" width="539" height="63"/>
  <!-- Service 1: API -->
  <g>
    <circle class="sc-dot-ok" cx="20" cy="32" r="4"/>
    <text class="sc-name"   x="36" y="28">API</text>
    <text class="sc-uptime" x="36" y="46">99.99% / 30d</text>
  </g>
  <line class="sc-div" x1="135" y1="12" x2="135" y2="52"/>
  <!-- ... more services ... -->
</svg>
```

**Editing Notes:**
- Replace service names with your actual services
- Change dot classes (`sc-dot-ok` → `sc-dot-wn` / `sc-dot-no`) per service health
- Adjust divider positions if adding/removing services

---

### 13. `terminal-window.svg`

**Category:** DATA — Signature Move Dt3 companion

**Description:** A clean terminal window chrome with sample command output. Use as a frame; replace content text with your product's actual CLI commands.

**CSS Class:**
```css
.terminal-window {
  width: 100%;
  max-width: 640px;
}
.terminal-window svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="terminal-window" viewBox="0 0 640 360" width="100%" aria-labelledby="term-title">
  <title id="term-title">Terminal window frame</title>
  <style>
    .tm-frame  { fill: var(--bg-100, #121619); stroke: var(--line-2, rgba(255,255,255,0.13)); stroke-width: 1; }
    .tm-titleb { fill: var(--bg-200, #1A2024); stroke: var(--line-2, rgba(255,255,255,0.13)); stroke-width: 1; }
    .tm-dot    { fill: var(--text-lo, #6B7378); }
    .tm-title  { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; letter-spacing: 0.06em; fill: var(--text-md, #9DA6AB); }
    .tm-prompt { font-family: var(--font-mono, ui-monospace, monospace); font-size: 13px; fill: var(--text-md, #9DA6AB); }
    .tm-cmd    { font-family: var(--font-mono, ui-monospace, monospace); font-size: 13px; fill: var(--accent, #4AA8FF); }
    .tm-out    { font-family: var(--font-mono, ui-monospace, monospace); font-size: 13px; fill: var(--text-hi, #E4E7E9); }
    .tm-dim    { font-family: var(--font-mono, ui-monospace, monospace); font-size: 13px; fill: var(--text-lo, #6B7378); }
    .tm-ok     { font-family: var(--font-mono, ui-monospace, monospace); font-size: 13px; fill: var(--ok, #3DF07A); }
  </style>
  <rect class="tm-frame" x="0.5" y="0.5" width="639" height="359"/>
  <rect class="tm-titleb" x="0.5" y="0.5" width="639" height="32"/>
  <circle class="tm-dot" cx="18" cy="16" r="4"/>
  <circle class="tm-dot" cx="34" cy="16" r="4"/>
  <circle class="tm-dot" cx="50" cy="16" r="4"/>
  <text class="tm-title" x="320" y="20" text-anchor="middle">forge@console:~/ops</text>
  <text x="16" y="60">
    <tspan class="tm-prompt">$</tspan>
    <tspan class="tm-cmd" dx="6">forge deploy --env=prod --region=us-east-1</tspan>
  </text>
  <text class="tm-dim" x="16" y="84">→ build  v4.1.2-rc1   ok   2.1s</text>
  <text class="tm-ok"  x="16" y="172">✓ deployed in 47.3s   (latency p99: 12ms)</text>
</svg>
```

**Editing Notes:**
- Replace the title bar text with your product's console name
- Replace commands and output with your actual CLI
- The three dots in the title bar are the "window controls" (decorative)

---

### 14. `waveform-sparkline.svg`

**Category:** DATA — Signature Move Dt2 companion

**Description:** A small time-series sparkline with peak labels and a 1-line summary. Used in metric cards or status panels.

**CSS Class:**
```css
.sparkline {
  width: 100%;
  max-width: 320px;
}
.sparkline svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="sparkline" viewBox="0 0 320 96" width="100%" aria-labelledby="spark-title">
  <title id="spark-title">Request throughput sparkline</title>
  <style>
    .sp-grid  { stroke: var(--line, rgba(255,255,255,0.06)); stroke-width: 1; }
    .sp-line  { stroke: var(--accent, #4AA8FF); stroke-width: 1.5; fill: none; }
    .sp-area  { fill: var(--accent, #4AA8FF); opacity: 0.10; }
    .sp-peak  { fill: var(--accent, #4AA8FF); }
    .sp-label { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; letter-spacing: 0.06em; fill: var(--text-md, #9DA6AB); text-transform: uppercase; }
    .sp-value { font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; fill: var(--text-hi, #E4E7E9); font-variant-numeric: tabular-nums; }
  </style>
  <text class="sp-label" x="8" y="14">REQ / SEC</text>
  <text class="sp-value" x="312" y="14" text-anchor="end">4.2k peak</text>
  <line class="sp-grid" x1="0" y1="40" x2="320" y2="40"/>
  <line class="sp-grid" x1="0" y1="64" x2="320" y2="64"/>
  <path class="sp-area" d="M 0 70 L 16 60 ... L 320 38 L 320 84 L 0 84 Z"/>
  <path class="sp-line" d="M 0 70 L 16 60 ... L 320 38"/>
  <circle class="sp-peak" cx="176" cy="20" r="2.5"/>
  <text class="sp-label" x="8" y="93">-24h</text>
  <text class="sp-label" x="160" y="93" text-anchor="middle">-12h</text>
  <text class="sp-label" x="312" y="93" text-anchor="end">now</text>
</svg>
```

**Editing Notes:**
- Edit the path `d` attribute to match your actual data points
- Update the peak label and circle position to match the highest point
- Change the label from "REQ / SEC" to your metric name

---

### 15. `wireframe-cube.svg`

**Category:** DIAGRAMS — Signature Move D2

**Description:** An exploded view of a cube with one face floating above, connected by a callout line. Suggests "here's what's inside the box."

**CSS Class:**
```css
.wireframe-cube {
  width: 100%;
  max-width: 320px;
}
.wireframe-cube svg {
  width: 100%;
  height: auto;
}
```

**Usage Example:**
```html
<svg class="wireframe-cube" viewBox="0 0 320 280" width="100%" aria-labelledby="cube-title">
  <title id="cube-title">Exploded wireframe cube</title>
  <style>
    .cube-edge { stroke: var(--line-2, #333); stroke-width: 1; fill: none; }
    .cube-face { stroke: var(--line-2, #333); stroke-width: 1; fill: var(--bg-100, #181818); }
    .cube-accent { stroke: var(--accent, #4AA8FF); stroke-width: 1.5; fill: none; }
    .cube-float { stroke: var(--line-2, #333); stroke-width: 1; fill: var(--bg-200, #222); stroke-dasharray: 3 2; }
    .cube-label { font-family: var(--font-mono, ui-monospace, monospace); font-size: 10px; letter-spacing: 0.08em; fill: var(--text-md, #9DA6AB); text-transform: uppercase; }
  </style>
  <!-- Back face -->
  <polygon class="cube-edge" points="100,60 220,60 220,180 100,180"/>
  <!-- Depth edges -->
  <line class="cube-edge" x1="100" y1="60"  x2="60"  y2="100"/>
  <line class="cube-edge" x1="220" y1="60"  x2="180" y2="100"/>
  <line class="cube-edge" x1="220" y1="180" x2="180" y2="220"/>
  <line class="cube-edge" x1="100" y1="180" x2="60"  y2="220"/>
  <!-- Front face -->
  <polygon class="cube-face" points="60,100 180,100 180,220 60,220"/>
  <polygon class="cube-accent" points="60,100 180,100 180,220 60,220"/>
  <!-- Top face exploded -->
  <polygon class="cube-float" points="80,30 200,30 180,55 60,55"/>
  <text class="cube-label" x="130" y="46" text-anchor="middle">FACE 01</text>
  <!-- Callout -->
  <line x1="200" y1="40" x2="280" y2="20" stroke="var(--text-lo, #6B7378)" stroke-width="1"/>
  <circle cx="200" cy="40" r="2" fill="var(--accent, #4AA8FF)"/>
  <text class="cube-label" x="284" y="18">ACCESS LAYER</text>
  <text class="cube-label" x="284" y="32" style="opacity: 0.7;">cap: 1024 keys</text>
  <!-- Center label -->
  <text class="cube-label" x="120" y="165" text-anchor="middle" style="fill: var(--accent, #4AA8FF);">CORE</text>
</svg>
```

**Editing Notes:**
- Replace face labels with your product's layer names
- Update the callout text to describe the exploded face
- The accent stroke on the front face draws attention to the "active" layer

---

## Pattern Guides

### Grid Lines Pattern

**When to use:** MACHINING heroes, empty states, calibration surfaces.

**CSS:**
```css
.plotting-grid {
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size: 8px 8px;
}
```

---

### Crosshatches Pattern

**When to use:** CASTING hazard elements (ONE element only), warning banners.

**CSS:**
```css
.hazard-hatch {
  background-image: repeating-linear-gradient(
    -45deg,
    var(--bg-000) 0 12px,
    var(--accent) 12px 24px
  );
}
```

---

### Dot Grids Pattern

**When to use:** PRINTING material backgrounds, halftone imagery.

**CSS:**
```css
.dot-grid {
  background-image:
    radial-gradient(circle 1px, var(--text-hi) 1px, transparent 1px);
  background-size: 4px 4px;
}
```

---

### Section Markers Pattern

**When to use:** DOCUMENT layout, PRINTING material, numbered sections.

**CSS:**
```css
.section-marker::before {
  content: '§ ' counter(section, decimal-leading-zero) ' — ';
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-md);
  letter-spacing: 0.04em;
}
```

---

## Usage Rules

1. **Edit labels before shipping.** Default labels in SVGs are placeholders. Replace them with product-specific names.
2. **Inherit colors via CSS variables.** All SVGs use `var(--accent)`, `var(--line-2)`, etc. Override at the SVG element with `style="--accent: #FF5800"` if needed.
3. **Scale via viewBox, not width/height.** Set `width: 100%` on the container and let the viewBox handle proportions.
4. **Never use unedited.** Shipping default labels (`Module A`, `R1`) is the v1 failure mode.
5. **One texture per surface.** Don't stack halftone on top of grid on top of noise. Pick one primary texture.

---

*SVG library compiled for the Vertex Industrial Geist design system. All assets use CSS variable hooks for automatic material palette inheritance.*
