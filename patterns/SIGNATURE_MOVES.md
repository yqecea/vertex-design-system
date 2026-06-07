# Industrial Signature Moves Catalog

The complete collection of 24 signature moves across 5 categories. Every industrial render commits to exactly **three moves from three different categories** — declared in Phase 1, held throughout.

**The rule:** No two moves from the same category. No forbidden defaults. Every move must answer a real product question.

---

## Category Overview

| Category | Moves | Best For |
|---|---|---|
| **DIAGRAMS** | 5 moves | Proving architecture, structure, "how it's built" |
| **DATA DISPLAY** | 5 moves | Proving performance, status, "how it runs" |
| **STRUCTURAL ELEMENTS** | 6 moves | Establishing frame, grid, "where things belong" |
| **SURFACE TREATMENTS** | 4 moves | Adding material texture, "what it's made of" |
| **COPY PATTERNS** | 4 moves | Establishing voice, "how it speaks" |

---

## DIAGRAMS — 5 Moves

### D1. Isometric Module Map

**Description:** A labeled 3D isometric diagram of the product's modules and their data flow. Each module is a labeled cube; lines between cubes are labeled data paths.

**CSS Implementation:**
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

**When to use:** AI/ML platforms, data pipeline products, infrastructure. Pairs especially well with MACHINING and PLATING materials.

**Example:**
- Module names: `Ingest`, `Normalize`, `Inference`, `Storage`, `Edge`
- Connection labels: `gRPC`, `tcp:9092`, `wss`
- Accent module: `Inference` (the core value)

**File:** `assets/svg/isometric-module-map.svg`

---

### D2. Wireframe Cube Exploded View

**Description:** A 3D cube shown as wireframe edges with one face floating slightly out, labeled. Suggests "here's what's inside the box."

**CSS Implementation:**
```css
.wireframe-cube {
  width: 100%;
  max-width: 240px;
}
.wireframe-cube svg {
  width: 100%;
  height: auto;
}
.wireframe-cube .cube-face {
  fill: var(--bg-100);
  stroke: var(--accent);
  stroke-width: 1.5;
}
.wireframe-cube .cube-float {
  stroke: var(--line-2);
  stroke-dasharray: 2 2;
  fill: var(--bg-200);
}
```

**When to use:** Hardware products, anything that wants to convey "what's inside." Pairs with CASTING.

**Example:**
```html
<svg class="wireframe-cube" viewBox="0 0 240 200">
  <!-- back face (dimmer) -->
  <polygon points="60,40 180,40 180,120 60,120"
           fill="none" stroke="var(--line-2)" stroke-width="1"/>
  <!-- depth edges -->
  <line x1="60" y1="40" x2="40" y2="60" stroke="var(--line-2)"/>
  <line x1="180" y1="40" x2="160" y2="60" stroke="var(--line-2)"/>
  <line x1="180" y1="120" x2="160" y2="140" stroke="var(--line-2)"/>
  <line x1="60" y1="120" x2="40" y2="140" stroke="var(--line-2)"/>
  <!-- front face -->
  <polygon points="40,60 160,60 160,140 40,140"
           fill="var(--bg-100)" stroke="var(--accent)" stroke-width="1.5"/>
  <!-- exploded top face floating above -->
  <polygon points="50,20 170,20 150,40 30,40"
           fill="var(--bg-200)" stroke="var(--line-2)" stroke-width="1"
           stroke-dasharray="2 2"/>
  <!-- label callout -->
  <text x="180" y="15" font-family="var(--font-mono)" font-size="10"
        fill="var(--text-md)">FACE 01 · ACCESS LAYER</text>
</svg>
```

**File:** `assets/svg/wireframe-cube.svg`

---

### D3. PCB Schematic with Labeled Pins

**Description:** A board outline with traces, vias, and components labeled with designators (`R1`, `C4`, `U7`, `BUS-A`). The product's services map to components; API endpoints map to pins.

**CSS Implementation:**
```css
.pcb-diagram {
  width: 100%;
  max-width: 600px;
}
.pcb-diagram .pcb-trace {
  stroke: var(--accent);
  stroke-width: 1;
  opacity: 0.6;
}
.pcb-diagram .pcb-via {
  fill: var(--bg-000);
  stroke: var(--accent);
}
.pcb-diagram .pcb-label {
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  fill: var(--text-md);
}
```

**When to use:** PLATING material is the obvious pair — but also works for any routing/integration product. Pairs naturally with the "Component designators" copy pattern (C2).

**Example:**
- Component: `R1` → Rate Limiter
- Component: `U7` → Auth Controller
- Component: `C4` → Cache
- Bus: `BUS-A`, `BUS-B`, `PWR`, `GND`

**File:** `assets/svg/pcb-trace-pattern.svg`

---

### D4. Annotated Cutaway with Leader Lines

**Description:** A product visualization surrounded by leader-line callouts pointing at specific features. Each line has an anchor dot at the feature, a thin line, and a label box at the end.

**CSS Implementation:**
```css
.cutaway {
  position: relative;
  display: inline-block;
}
.cutaway-image {
  display: block;
  max-width: 100%;
}
.cutaway-callouts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.cutaway-callouts .ld-anchor {
  fill: var(--accent);
}
.cutaway-callouts .ld-line {
  stroke: var(--line-2);
  stroke-width: 1;
}
.cutaway-callouts .ld-box {
  fill: var(--bg-100);
  stroke: var(--line-2);
}
```

**When to use:** When the product has a UI you want to teach. Pairs with MACHINING.

**Example:**
```html
<figure class="cutaway">
  <img src="product.png" alt="" class="cutaway-image"/>
  <svg class="cutaway-callouts" viewBox="0 0 800 500">
    <!-- callout 1: anchor → line → label box -->
    <circle cx="240" cy="180" r="3" fill="var(--accent)"/>
    <line x1="240" y1="180" x2="560" y2="100" stroke="var(--line-2)" stroke-width="1"/>
    <rect x="560" y="80" width="200" height="40" fill="var(--bg-100)" stroke="var(--line-2)"/>
    <text x="570" y="95" font-family="var(--font-mono)" font-size="10"
          fill="var(--text-md)">01 · LIVE REQUEST PANEL</text>
    <text x="570" y="110" font-family="var(--font-ui)" font-size="11"
          fill="var(--text-md)">All inbound calls, 100ms refresh</text>
  </svg>
</figure>
```

**File:** `assets/svg/leader-line-annotation.svg`

---

### D5. Dimension Lines with Measurements

**Description:** Engineering-drawing style dimension lines between elements, with measurement labels in mono. Communicates "this was specified to tolerance."

**CSS Implementation:**
```css
.dimension-line {
  width: 100%;
  max-width: 400px;
}
.dimension-line svg {
  width: 100%;
  height: auto;
}
```

**When to use:** As a section divider between major content areas, or above the hero on a BOXED layout to call out the chassis width. Pairs with MACHINING.

**Example:**
```html
<svg viewBox="0 0 400 100" class="dimension-line">
  <!-- the two bounding ticks -->
  <line x1="20" y1="40" x2="20" y2="80" stroke="var(--text-md)" stroke-width="1"/>
  <line x1="380" y1="40" x2="380" y2="80" stroke="var(--text-md)" stroke-width="1"/>
  <!-- the dimension line itself with arrows -->
  <line x1="20" y1="60" x2="380" y2="60" stroke="var(--text-md)" stroke-width="1"/>
  <polygon points="20,60 30,55 30,65" fill="var(--text-md)"/>
  <polygon points="380,60 370,55 370,65" fill="var(--text-md)"/>
  <!-- measurement label -->
  <rect x="180" y="50" width="40" height="20" fill="var(--bg-000)"/>
  <text x="200" y="64" text-anchor="middle"
        font-family="var(--font-mono)" font-size="11"
        fill="var(--text-md)">1280px</text>
</svg>
```

**File:** `assets/svg/dimension-line.svg`

---

## DATA DISPLAY — 5 Moves

### Dt1. GO/NO-GO Matrix

**Description:** A grid of labeled cells, each colored green (GO), amber (CAUTION), or red (NO-GO). Pulled directly from mission control vocabulary. Each cell shows a subsystem name and its current status.

**CSS Implementation:**
```css
.go-nogo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-2);
  border: 1px solid var(--line-2);
}
.cell {
  background: var(--bg-100);
  padding: var(--s-3) var(--s-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--s-2);
}
.cell-label, .cell-state {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}
.cell-label { color: var(--text-md); }
.cell.go .cell-state { color: var(--ok); }
.cell.caution .cell-state { color: var(--warn); }
.cell.no-go .cell-state { color: var(--alarm); }
.cell.go { border-left: 2px solid var(--ok); }
.cell.caution { border-left: 2px solid var(--warn); }
.cell.no-go { border-left: 2px solid var(--alarm); }
```

**When to use:** Monitoring products, ops dashboards, status pages. Pairs with CALIBRATING.

**Example:**
```html
<div class="go-nogo">
  <div class="cell go"><span class="cell-label">PROP</span><span class="cell-state">GO</span></div>
  <div class="cell go"><span class="cell-label">GNC</span><span class="cell-state">GO</span></div>
  <div class="cell caution"><span class="cell-label">COMM</span><span class="cell-state">CAUTION</span></div>
  <div class="cell go"><span class="cell-label">EPS</span><span class="cell-state">GO</span></div>
  <div class="cell go"><span class="cell-label">ECLSS</span><span class="cell-state">GO</span></div>
  <div class="cell no-go"><span class="cell-label">TLM</span><span class="cell-state">NO-GO</span></div>
</div>
```

**File:** `assets/svg/go-nogo-matrix.svg`

---

### Dt2. Gauge Arc Cluster

**Description:** A row of 3–5 partial gauge arcs (270° sweep), each showing a current value and threshold. The needle is a stroke; the value is the segment-display readout.

**CSS Implementation:**
```css
.gauge-cluster {
  width: 100%;
  max-width: 540px;
}
.gauge-cluster svg {
  width: 100%;
  height: auto;
}
.gauge-cluster .gauge-track {
  fill: none;
  stroke: var(--line);
  stroke-width: 6;
}
.gauge-cluster .gauge-fill {
  fill: none;
  stroke: var(--accent);
  stroke-width: 6;
  stroke-linecap: butt;
}
.gauge-cluster .gauge-value {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  fill: var(--text-hi);
  font-variant-numeric: tabular-nums;
}
```

**When to use:** Real-time monitoring, infrastructure ops. Pairs with CALIBRATING.

**Example:**
- Gauge 1: `CPU LOAD` → 67%
- Gauge 2: `MEMORY` → 43% (green)
- Gauge 3: `P99 LATENCY` → 12ms

**File:** `assets/svg/gauge-arc-cluster.svg`

---

### Dt3. Log Stream Tile

**Description:** A scrollable terminal-like tile showing real, formatted log lines with timestamps, levels, and messages. Different log levels get a 1px left border in their semantic color.

**CSS Implementation:**
```css
.log-stream {
  border: 1px solid var(--line-2);
  background: var(--bg-100);
}
.log-stream-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: var(--s-3) var(--s-4);
  border-bottom: 1px solid var(--line-2);
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--text-md);
}
.log-stream-body {
  font-family: var(--font-mono); font-size: 13px; line-height: 1.6;
  padding: var(--s-3) var(--s-4);
  max-height: 240px; overflow-y: auto;
}
.log-line {
  padding: 2px 0;
  border-left: 2px solid transparent;
  padding-left: var(--s-2);
}
.log-line.info { color: var(--text-md); }
.log-line.warn { color: var(--warn); border-left-color: var(--warn); }
.log-line.error { color: var(--alarm); border-left-color: var(--alarm); }
```

**When to use:** Dev tools, API products, infra. Pairs with MACHINING or PLATING.

**Example:**
```html
<div class="log-stream" role="log" aria-live="polite">
  <div class="log-stream-header">
    <span class="log-label">// REQUEST.LOG · LIVE</span>
    <span class="log-status"><span class="status-dot status-live"></span>STREAMING</span>
  </div>
  <div class="log-stream-body">
    <div class="log-line info">02:47:33  GET /v1/keys/verify  ok  4ms</div>
    <div class="log-line info">02:47:33  GET /v1/ratelimits/check  ok  2ms</div>
    <div class="log-line warn">02:47:34  POST /v1/keys/create  4xx  retrying…</div>
    <div class="log-line info">02:47:34  POST /v1/keys/create  ok  18ms</div>
    <div class="log-line info">02:47:35  GET /v1/analytics  ok  31ms</div>
  </div>
</div>
```

**File:** `assets/svg/terminal-window.svg` (frame)

---

### Dt4. Benchmark Bar Table

**Description:** A horizontal-bar table comparing the product to alternatives across 3–5 metrics. Bars are 1px-bordered with accent fill at the relative value width.

**CSS Implementation:**
```css
.bench {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: 13px;
}
.bench th {
  text-align: left;
  padding: var(--s-3) var(--s-4);
  border-bottom: 1px solid var(--line-2);
  color: var(--text-md);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.bench td {
  padding: var(--s-3) var(--s-4);
  border-bottom: 1px solid var(--line);
  color: var(--text-hi);
}
.bench .bar {
  display: inline-flex;
  align-items: center;
  gap: var(--s-2);
  width: 100%;
}
.bench .bar::before {
  content: '';
  display: inline-block;
  width: var(--w);
  height: 12px;
  border: 1px solid var(--accent);
  background: var(--accent);
}
```

**When to use:** When the product has comparable metrics. Pairs with all materials.

**Example:**
```html
<table class="bench">
  <thead>
    <tr><th>Metric</th><th>Forge</th><th>Competitor A</th><th>Competitor B</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>p99 latency (ms)</td>
      <td><span class="bar" style="--w: 25%">4.2</span></td>
      <td><span class="bar" style="--w: 80%">14.1</span></td>
      <td><span class="bar" style="--w: 100%">17.6</span></td>
    </tr>
  </tbody>
</table>
```

**File:** N/A (HTML/CSS only)

---

### Dt5. Segment-Display Readout

**Description:** Large segment-style numerals for live counters (mission elapsed time, uptime, throughput). Use Share Tech Mono or DSEG7 if available; fall back to IBM Plex Mono at heavy weight.

**CSS Implementation:**
```css
.readout {
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
}
.readout-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--text-md);
  text-transform: uppercase;
}
.readout-value {
  font-family: 'Share Tech Mono', var(--font-mono);
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
```

**When to use:** CALIBRATING products specifically. Don't use elsewhere — it carries strong mission-control connotation.

**Example:**
```html
<div class="readout">
  <span class="readout-label">MISSION ELAPSED</span>
  <span class="readout-value">T- <span data-segment>00:14:22</span></span>
</div>
```

**File:** N/A (HTML/CSS only)

---

## STRUCTURAL ELEMENTS — 6 Moves

### S1. Edge-Strip Vertical Brand Label

**Description:** A rotated vertical strip in the gutter (BOXED layout) showing the brand name, series, and metadata, like the side label on a piece of equipment.

**CSS Implementation:**
```css
.edge-strip {
  position: absolute;
  top: 48px;
  left: -32px; /* sits in the gutter */
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-lo);
}
```

**When to use:** Requires BOXED layout. Adds enormous distinctiveness for almost no implementation cost.

**Example:**
```html
<span class="edge-strip">FORGE SYSTEMS · CORP HEAVY · SERIES 04 · 2026</span>
<!-- or -->
<span class="edge-strip">MERIDIAN OPS · MISSION CONTROL · STA-3 · BUILD 4.1</span>
```

**File:** N/A (CSS-only)

---

### S2. Registration Marks at Viewport Corners

**Description:** The four `[+]`-shaped crop marks at viewport corners that print-design uses for alignment. Hint that "this was precisely printed."

**CSS Implementation:**
```css
.reg-mark {
  position: fixed;
  width: 16px; height: 16px;
  pointer-events: none;
}
.reg-mark::before, .reg-mark::after {
  content: ''; position: absolute; background: var(--text-lo);
}
.reg-mark::before { /* horizontal */ left: 0; right: 0; top: 50%; height: 1px; }
.reg-mark::after  { /* vertical */ top: 0; bottom: 0; left: 50%; width: 1px; }

.reg-mark.tl { top: 16px; left: 16px; }
.reg-mark.tr { top: 16px; right: 16px; }
.reg-mark.bl { bottom: 16px; left: 16px; }
.reg-mark.br { bottom: 16px; right: 16px; }
```

**When to use:** DOCUMENT layout, or any PRINTING-material page. Also works on BOXED chassis corners (inside, not viewport).

**Example:**
```html
<div class="reg-mark tl"></div>
<div class="reg-mark tr"></div>
<div class="reg-mark bl"></div>
<div class="reg-mark br"></div>
```

**File:** `assets/svg/registration-marks.svg`

---

### S3. Blueprint Grid Overlay

**Description:** A faint repeating grid drawn across a section (or the whole page) with major/minor lines, like a drafting sheet.

**CSS Implementation:**
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

**When to use:** Hero backgrounds, empty-state regions. Pairs with MACHINING. Avoid on PRINTING (different metaphor).

**Example:**
```html
<section class="blueprint-grid">
  <!-- content goes here -->
</section>
```

**File:** `assets/svg/blueprint-grid.svg`

---

### S4. Weld-Seam Dividers

**Description:** Thicker dividers (2–3px) between major sections with a faint top-edge highlight, like a weld bead catching light.

**CSS Implementation:**
```css
.weld-seam {
  height: 3px;
  background: var(--bg-200);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(0,0,0,0.4);
}
```

**When to use:** WELDING material specifically. Don't use elsewhere.

**Example:**
```html
<div class="weld-seam"></div>
```

**File:** N/A (CSS-only; see `assets/css/textures.css`)

---

### S5. Exposed Grid-Intersection Labels

**Description:** Small mono labels at grid line intersections naming each intersection (`A3`, `B7`, `C2`) like a structural drawing's column lines.

**CSS Implementation:**
```css
.grid-axis {
  display: flex;
  gap: var(--s-5);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-lo);
  text-transform: uppercase;
}
.axis-x {
  width: 64px;
  text-align: center;
}
```

**When to use:** WELDING material. Adds the structural-drawing signature.

**Example:**
```html
<div class="grid-axis">
  <span class="axis-x">A</span>
  <span class="axis-x">B</span>
  <span class="axis-x">C</span>
  <span class="axis-x">D</span>
  <span class="axis-x">E</span>
  <span class="axis-x">F</span>
</div>
```

**File:** N/A (CSS-only)

---

### S6. Section Number Rules

**Description:** Numbered section markers with a hairline rule across the section top: `§ 01 — OVERVIEW` followed by a 1px line spanning the section width.

**CSS Implementation:**
```css
.section-header {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: var(--s-3);
  align-items: center;
  margin-bottom: var(--s-5);
}
.section-num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-md);
}
.section-title {
  font-family: var(--font-display);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-hi);
}
.section-rule {
  height: 1px;
  background: var(--line-2);
}
```

**When to use:** PRINTING and DOCUMENT layout especially. Also works in MACHINING.

**Example:**
```html
<section class="numbered-section">
  <header class="section-header">
    <span class="section-num">§ 01</span>
    <span class="section-title">SYSTEM OVERVIEW</span>
    <span class="section-rule"></span>
  </header>
  <!-- content -->
</section>
```

**File:** N/A (CSS-only)

---

## SURFACE TREATMENTS — 4 Moves

### Su1. Halftone Hero Imagery

**Description:** A photographic hero image rendered through a dot-matrix/halftone treatment. Visually distinctive and immediately reads as "printed industrial."

**CSS Implementation:**
```css
.halftone-wrapper {
  position: relative;
  overflow: hidden;
}
.halftone-wrapper img {
  filter: url(#halftone);
  width: 100%;
  display: block;
}
```

**SVG Filter:**
```html
<svg width="0" height="0">
  <defs>
    <filter id="halftone">
      <feGaussianBlur stdDeviation="0.5"/>
      <feColorMatrix type="matrix"
        values="0.5 0.5 0.5 0 0
                0.5 0.5 0.5 0 0
                0.5 0.5 0.5 0 0
                0   0   0   1 0"/>
      <feComponentTransfer><feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1"/></feComponentTransfer>
    </filter>
  </defs>
</svg>
```

**When to use:** PRINTING material, hero sections that need imagery without losing the industrial frame.

**Example:**
```html
<svg width="0" height="0">
  <defs>
    <filter id="halftone">
      <feGaussianBlur stdDeviation="0.5"/>
      <feColorMatrix type="matrix" values="0.5 0.5 0.5 0 0  0.5 0.5 0.5 0 0  0.5 0.5 0.5 0 0  0 0 0 1 0"/>
      <feComponentTransfer><feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1"/></feComponentTransfer>
    </filter>
  </defs>
</svg>
<img src="/hero.jpg" style="filter: url(#halftone); width: 100%;" alt="">
```

**File:** `assets/svg/halftone-dither.svg`

---

### Su2. ASCII-Art Logo Block

**Description:** A `<pre>` block of ASCII art forming the brand wordmark, used as a hero element or in the footer.

**CSS Implementation:**
```css
.ascii-logo {
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.2;
  color: var(--text-md);
  white-space: pre;
  overflow-x: auto;
}
```

**When to use:** Footer, hero, 404 pages. Pairs with WELDING and PLATING.

**Example:**
```html
<pre class="ascii-logo" aria-label="FORGE">
 ███████╗ ██████╗ ██████╗  ██████╗ ███████╗
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
 █████╗  ██║   ██║██████╔╝██║  ███╗█████╗  
 ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  
 ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
</pre>
```

**File:** `assets/svg/ascii-logo-block.svg`

---

### Su3. Diagonal Hazard Hatching on ONE Element

**Description:** Black-and-yellow (or accent) diagonal stripes — classic industrial "pay attention here" vocabulary — used on ONE element: a single CTA, a warning banner, or a section divider. Used everywhere it becomes wallpaper.

**CSS Implementation:**
```css
.hazard {
  background-image: repeating-linear-gradient(
    -45deg,
    var(--bg-000) 0 12px,
    var(--accent) 12px 24px
  );
}
```

**When to use:** CASTING material specifically. Use on exactly one element per page.

**Example:**
```html
<div class="hazard" style="padding: var(--s-4); text-align: center;">
  <span style="font-family: var(--font-mono); font-size: 12px; text-transform: uppercase; color: var(--text-hi);">
    ⚠ CAUTION — HIGH OUTPUT
  </span>
</div>
```

**File:** N/A (CSS-only)

---

### Su4. Plotting Grid Background on Hero

**Description:** A faint 8px plotting grid behind the hero content, like graph paper. Subtler than the blueprint grid (S3); fewer line weights.

**CSS Implementation:**
```css
.plotting-grid {
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size: 8px 8px;
}
```

**When to use:** MACHINING and CALIBRATING heroes.

**Example:**
```html
<section class="plotting-grid" style="padding: var(--s-8) var(--s-6);">
  <!-- hero content -->
</section>
```

**File:** N/A (CSS-only; see `assets/svg/blueprint-grid.svg` for SVG variant)

---

## COPY PATTERNS — 4 Moves

### C1. Terminal Session Header

**Description:** Top of the page or top of a hero panel shows a terminal session line: `user@product:~$ command --flag` followed by the page itself acting as the "output."

**CSS Implementation:**
```css
.terminal-header {
  font-family: var(--font-mono);
  font-size: 14px;
  padding: var(--s-3) var(--s-4);
  background: var(--bg-100);
  border-bottom: 1px solid var(--line-2);
}
.terminal-header .prompt {
  color: var(--text-md);
}
.terminal-header .command {
  color: var(--accent);
}
.terminal-header .command::after {
  content: '▌';
  color: var(--accent);
  animation: cursor-blink 530ms steps(2) infinite;
}
@keyframes cursor-blink {
  50% { opacity: 0; }
}
```

**When to use:** Dev tools especially. Pairs with MACHINING. Avoid on consumer products.

**Example:**
```html
<div class="terminal-header">
  <span class="prompt">forge@console:~$</span>
  <span class="command">./inspect --module=routing --since=24h</span>
</div>
```

**File:** N/A (CSS-only; see `assets/svg/terminal-window.svg` for frame)

---

### C2. Component Designators on Every Panel

**Description:** Every panel has a small mono label in its top-left or top-right corner with a designator (`R1`, `U7`, `BUS-A`, `MOD-04`) like a PCB component identifier.

**CSS Implementation:**
```css
.designator {
  position: absolute;
  top: var(--s-2);
  right: var(--s-3);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-lo);
}
.panel {
  position: relative;
}
```

**When to use:** PLATING material. Becomes the unifying motif across the whole page.

**Example:**
```html
<div class="panel" data-designator="U07">
  <span class="designator">U07</span>
  <h3>Inference engine</h3>
  <p>Sub-100ms inference at the network edge.</p>
</div>
```

**File:** N/A (CSS-only)

---

### C3. Status Console Strip

**Description:** A horizontal strip (often in the hero footer or page footer) with 4–6 monospace data points separated by `·` or `|`. Carries operational metadata.

**CSS Implementation:**
```css
.console-strip {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--text-md);
  padding: var(--s-3) var(--s-4);
  border-top: 1px solid var(--line-2);
  border-bottom: 1px solid var(--line-2);
  display: flex;
  gap: var(--s-3);
  justify-content: center;
  flex-wrap: wrap;
}
```

**When to use:** Any material. The single most universally compatible signature move.

**Example:**
```html
<div class="console-strip">
  BUILD v4.1.2-rc1 · NODE: US-EAST-1 · LATENCY 4ms · UTC 02:47:33 · STATUS: OPERATIONAL
</div>
```

**File:** `assets/svg/status-dot-cluster.svg` (companion)

---

### C4. Figure Captions

**Description:** Below diagrams and illustrations, a print-style figure caption: `FIG 3.2 — Signal path through the routing layer`.

**CSS Implementation:**
```css
.figure-caption {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-md);
  margin-top: var(--s-3);
}
```

**When to use:** PRINTING material, DOCUMENT layout. Also great with any annotated diagram regardless of material.

**Example:**
```html
<figure class="figure">
  <svg>...</svg>
  <figcaption class="figure-caption">FIG 3.2 — Signal path through the routing layer</figcaption>
</figure>
```

**File:** N/A (CSS-only)

---

## The Forbidden Defaults

The following are **NOT** signature moves. They are the default cosplay vocabulary the previous skill kept producing. **Choosing one of these as your "signature move" is a Phase 1 failure — go back and pick a real one.**

- ❌ "Crosshair markers in corners" (this is the v1 default; it's lazy)
- ❌ "Monospace labels" (this is not a move, it's a baseline rule from the typography system)
- ❌ "Dark background" (this is not a move; it's a material consequence)
- ❌ "1px borders" (baseline rule)
- ❌ "Status dot" alone (a single green dot isn't enough — pair it with a status console strip or a GO/NO-GO matrix)
- ❌ "Generic terminal in the hero with `npm install`" (terminal is fine if it's specific to the product; "any terminal" is not)
- ❌ "Bento grid with hairline gutters" (this is the baseline layout for feature sections, not a signature)

The point of signature moves is **specificity**. If your move could equally describe 80% of dark-themed dev-tool pages, it's not a signature move.

---

## Combining the Triplet

Once you've picked three, write a short rationale: how do they hold together?

**Good combinations (internal coherence):**
- D3 (PCB schematic) + C2 (component designators) + Dt3 (log stream) → consistent PCB world
- D1 (isometric module map) + Dt3 (log stream) + C3 (status console strip) → AI/infra coherent
- D5 (dimension lines) + S6 (section numbers) + C4 (figure captions) → engineering-document coherent

**Incoherent combinations (avoid):**
- D3 (PCB) + Dt5 (segment readout) + C2 (component designators) — three from data/copy but with PCB AND mission-control vocabularies fighting each other
- Su1 (halftone) + S4 (weld seams) + Dt2 (gauge cluster) — printing + welding + calibrating, three different metaphors

When you write the Distinctiveness Log, the triplet should feel like *one product's voice*, not three voices stapled together.

---

## Quick Reference Table

| Move | Category | File | Material | Layout |
|---|---|---|---|---|
| D1. Isometric module map | DIAGRAMS | `isometric-module-map.svg` | MACHINING, PLATING | Any |
| D2. Wireframe cube | DIAGRAMS | `wireframe-cube.svg` | CASTING | Any |
| D3. PCB schematic | DIAGRAMS | `pcb-trace-pattern.svg` | PLATING | Any |
| D4. Annotated cutaway | DIAGRAMS | `leader-line-annotation.svg` | MACHINING | Any |
| D5. Dimension lines | DIAGRAMS | `dimension-line.svg` | MACHINING | BOXED |
| Dt1. GO/NO-GO matrix | DATA | `go-nogo-matrix.svg` | CALIBRATING | Any |
| Dt2. Gauge arc cluster | DATA | `gauge-arc-cluster.svg` | CALIBRATING | Any |
| Dt3. Log stream tile | DATA | N/A | MACHINING, PLATING | Any |
| Dt4. Benchmark bar table | DATA | N/A | All | Any |
| Dt5. Segment readout | DATA | N/A | CALIBRATING | Any |
| S1. Edge-strip label | STRUCTURAL | N/A | All | BOXED |
| S2. Registration marks | STRUCTURAL | `registration-marks.svg` | PRINTING | DOCUMENT |
| S3. Blueprint grid | STRUCTURAL | `blueprint-grid.svg` | MACHINING | Any |
| S4. Weld-seam dividers | STRUCTURAL | N/A | WELDING | FULL-BLEED |
| S5. Grid-intersection labels | STRUCTURAL | N/A | WELDING | Any |
| S6. Section number rules | STRUCTURAL | N/A | PRINTING | DOCUMENT |
| Su1. Halftone hero | SURFACE | `halftone-dither.svg` | PRINTING | Any |
| Su2. ASCII logo block | SURFACE | `ascii-logo-block.svg` | WELDING, PLATING | Any |
| Su3. Hazard hatching | SURFACE | N/A | CASTING | Any |
| Su4. Plotting grid | SURFACE | N/A | MACHINING, CALIBRATING | Any |
| C1. Terminal header | COPY | N/A | MACHINING | SPLIT |
| C2. Component designators | COPY | N/A | PLATING | Any |
| C3. Status console strip | COPY | `status-dot-cluster.svg` | All | Any |
| C4. Figure captions | COPY | N/A | PRINTING | DOCUMENT |

---

*Signature moves catalog compiled for the Vertex Industrial Geist design system. Every render commits to three from three different categories.*
