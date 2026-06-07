# Vertex Industrial Geist — Icon System

**Version:** 1.0.0  
**Last Updated:** 2026-06-06  
**Scope:** All Vertex UI surfaces  

---

## Table of Contents

1. [Philosophy](#philosophy)
2. [Icon Source & Dependencies](#icon-source--dependencies)
3. [Size Scale](#size-scale)
4. [Stroke Weight](#stroke-weight)
5. [Color System](#color-system)
6. [Categories](#categories)
7. [CSS Utilities](#css-utilities)
8. [Component Patterns](#component-patterns)
9. [Industrial Icon Style Guide](#industrial-icon-style-guide)
10. [Common Icon Set (50+ Icons)](#common-icon-set)
11. [Accessibility](#accessibility)
12. [Implementation Checklist](#implementation-checklist)

---

## Philosophy

Icons in Vertex are **instrument indicators**, not decoration. Every icon must answer: "What action or state does this represent?"

**Core Principles:**
- **Precision over personality** — Clean, geometric strokes. No illustration-style icons.
- **Stroke, not fill** — Outline icons are default. Filled only for status indicators.
- **Scale with purpose** — Size communicates hierarchy, not preference.
- **Motion is signal** — Animated icons indicate process, not delight.
- **One icon, one meaning** — Never reuse an icon for different actions.

---

## Icon Source & Dependencies

### Recommended Icon Libraries

| Library | Use Case | Install |
|---|---|---|
| **@geist-ui/icons** | Primary choice. Matches Geist design language exactly. | `npm i @geist-ui/icons` |
| **@radix-ui/react-icons** | Fallback. 15x15 base, stroke-based, Radix aesthetic. | `npm i @radix-ui/react-icons` |
| **lucide-react** | Extended set. 24x24 base, excellent coverage. | `npm i lucide-react` |

### Icon Naming Conventions

Vertex follows **kebab-case** icon names derived from the source library:

```
@geist-ui/icons:   <HomeIcon />        →  class="icon-home"
@radix-ui:         <HomeIcon />        →  class="icon-home"
lucide-react:      <Home />            →  class="icon-home"
```

**Naming Rules:**
- Use the source library's canonical name
- Remove `Icon` suffix for CSS class names
- Directional variants: `chevron-up`, `chevron-down`, `chevron-left`, `chevron-right`
- Size variants: Same icon, different `--icon-size-*` token

### SVG Requirements

All icons must be:
- **Vector-based SVG** (no raster images)
- **ViewBox: 0 0 24 24** (standardized canvas)
- **Stroke-based** (`stroke="currentColor"`, `fill="none"`)
- **Scalable** via CSS `width`/`height` (not `font-size`)
- **Accessible** with `<title>` element or `aria-label`

---

## Size Scale

| Token | Value | Usage Context |
|---|---|---|
| `--icon-size-xs` | 12px | Inline text, terminal, dense tables |
| `--icon-size-sm` | 16px | Buttons, form inputs, menu items |
| `--icon-size-md` | 20px | Navigation, cards, primary actions |
| `--icon-size-lg` | 24px | Hero sections, feature panels, empty states |
| `--icon-size-xl` | 32px | Dashboard metrics, onboarding, illustrations |

### Size Selection Rules

| Context | Recommended Size |
|---|---|
| Inside 13px label text | `xs` (12px) |
| Inside button (sm) | `sm` (16px) |
| Inside default button | `md` (20px) |
| Navigation item | `md` (20px) |
| Input prefix/suffix | `sm` (16px) |
| Panel header | `md` (20px) |
| Status indicator row | `sm` (16px) |
| Metric card | `lg` (24px) |
| Alert / Toast | `lg` (24px) |
| Empty state | `xl` (32px) |

---

## Stroke Weight

| Token | Value | Usage |
|---|---|---|
| `--icon-stroke-hairline` | 1.5px | Navigation, subtle indicators, dark themes |
| `--icon-stroke-default` | 2px | Default for all interactive elements |
| `--icon-stroke-bold` | 2.5px | Large icons (xl), high-contrast situations |

### Stroke Selection Guide

| Situation | Use Hairline (1.5px) | Use Default (2px) |
|---|---|---|
| Size | `xs`, `sm` | `md`, `lg`, `xl` |
| Background | Dark theme | Light theme |
| Density | Dense data tables | Standard UI |
| Context | Inline with 13px text | Standalone buttons |
| Visual Weight | Subtle, receding | Present, actionable |

**Rule of Thumb:**
- If the icon sits next to 13px uppercase labels → **hairline**
- If the icon is clickable or in a button → **default**
- If the icon is >24px and needs presence → **bold**

---

## Color System

### Default Behavior

Icons **inherit color from parent text** via `currentColor`:

```html
<!-- Icon matches text color automatically -->
<a class="nav-link" href="/">
  <svg class="icon-md">...</svg>
  <span>Dashboard</span>
</a>
```

### Explicit Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--icon-color` | `currentColor` | Default: inherits from parent |
| `--icon-color-muted` | `var(--ds-gray-700)` | Secondary, non-interactive icons |
| `--icon-color-disabled` | `var(--ds-gray-500)` | Disabled state icons |

### Status Colors

Apply status color classes for semantic meaning:

```html
<span class="status-icon status-icon--ok">
  <svg><!-- checkmark --></svg>
</span>
<span class="status-icon status-icon--alarm">
  <svg><!-- alert triangle --></svg>
</span>
```

| Status | Class | Token |
|---|---|---|
| Success / OK | `.icon-status-ok` | `--ds-ok` (#45a557) |
| Warning | `.icon-status-warn` | `--ds-warn` (#ffb224) |
| Error / Alarm | `.icon-status-alarm` | `--ds-alarm` (#e5484d) |
| Information | `.icon-status-info` | `--ds-info` (#0072f5) |
| Muted | `.icon-status-muted` | `--ds-gray-600` |

### Material Context

Icons automatically adapt to the active material theme. No override needed.

---

## Categories

Icons are organized into six functional categories. This determines placement and sizing conventions.

### 1. Navigation
Icons that orient the user or move between views.
- **Size:** `md` (20px)
- **Stroke:** hairline (1.5px) in nav, default (2px) in mobile menu
- **Examples:** Home, ChevronRight, Menu, ArrowLeft, ExternalLink

### 2. Action
Icons that trigger an operation.
- **Size:** `sm` (16px) in buttons, `md` (20px) standalone
- **Stroke:** default (2px)
- **Examples:** Plus, Trash2, Edit3, Copy, Download, RefreshCw

### 3. Communication
Icons that represent messaging or social functions.
- **Size:** `sm` (16px)
- **Stroke:** hairline (1.5px)
- **Examples:** Mail, Bell, MessageSquare, Share2, Send

### 4. Status
Icons that indicate system or data state.
- **Size:** `sm` (16px) inline, `lg` (24px) in alerts
- **Stroke:** default (2px). Filled variants allowed.
- **Examples:** CheckCircle, AlertTriangle, XCircle, Info, Clock

### 5. Editor
Icons for content creation and manipulation.
- **Size:** `sm` (16px)
- **Stroke:** hairline (1.5px)
- **Examples:** Bold, Italic, Link, Image, List, Code

### 6. Media
Icons for media controls and file operations.
- **Size:** `md` (20px)
- **Stroke:** default (2px)
- **Examples:** Play, Pause, Volume2, FileText, FolderOpen, Image

---

## CSS Utilities

### Size Utilities

```html
<svg class="icon-xs">...</svg>   <!-- 12px -->
<svg class="icon-sm">...</svg>   <!-- 16px -->
<svg class="icon-md">...</svg>   <!-- 20px -->
<svg class="icon-lg">...</svg>   <!-- 24px -->
<svg class="icon-xl">...</svg>   <!-- 32px -->
```

### Stroke Utilities

```html
<svg class="icon-sm icon-stroke-hairline">...</svg>   <!-- 1.5px -->
<svg class="icon-md icon-stroke-default">...</svg>    <!-- 2px -->
<svg class="icon-lg icon-stroke-bold">...</svg>       <!-- 2.5px -->
```

### Animation Utilities

```html
<!-- Loading state -->
<svg class="icon-md icon-spin">...</svg>

<!-- Attention / live indicator -->
<svg class="icon-sm icon-pulse">...</svg>

<!-- Interactive hint -->
<svg class="icon-sm icon-bounce">...</svg>

<!-- New element entry -->
<svg class="icon-md icon-fade-in">...</svg>
```

### Context Utilities

```html
<!-- Icon-only button -->
<button class="icon-button" aria-label="Close">
  <svg class="icon-md">...</svg>
</button>

<!-- Icon inside input -->
<div class="geist-input-wrapper">
  <span class="icon-input">
    <svg class="icon-sm">...</svg>
  </span>
  <input class="geist-input" type="text" />
</div>

<!-- Icon + text pair -->
<span class="icon-text">
  <svg class="icon-sm">...</svg>
  Settings
</span>
```

### Rotation & Flip Utilities

```html
<svg class="icon-md icon-rotate-90">...</svg>    <!-- Rotate 90° clockwise -->
<svg class="icon-md icon-rotate-180">...</svg>   <!-- Rotate 180° -->
<svg class="icon-md icon-flip-h">...</svg>       <!-- Flip horizontal -->
```

---

## Component Patterns

### 1. Icon Button (`icon-btn`)

A button containing only an icon. **Requires `aria-label`.**

```html
<!-- Default -->
<button class="icon-btn" aria-label="Delete item">
  <svg class="icon-btn__icon">...</svg>
</button>

<!-- Sizes -->
<button class="icon-btn icon-btn--xs" aria-label="Close">...</button>
<button class="icon-btn icon-btn--sm" aria-label="Close">...</button>
<button class="icon-btn icon-btn--lg" aria-label="Close">...</button>
<button class="icon-btn icon-btn--xl" aria-label="Close">...</button>

<!-- Variants -->
<button class="icon-btn icon-btn--accent" aria-label="Add">...</button>
<button class="icon-btn icon-btn--ghost" aria-label="More">...</button>
<button class="icon-btn icon-btn--square" aria-label="Grid view">...</button>
<button class="icon-btn icon-btn--pill" aria-label="Filter">...</button>
```

### 2. Icon with Text (`icon-text-pair`)

Horizontal alignment of icon and label.

```html
<!-- Default -->
<span class="icon-text-pair">
  <svg class="icon-text-pair__icon">...</svg>
  <span class="icon-text-pair__label">Settings</span>
</span>

<!-- Sizes -->
<span class="icon-text-pair icon-text-pair--sm">...</span>
<span class="icon-text-pair icon-text-pair--lg">...</span>

<!-- Icon on right -->
<span class="icon-text-pair icon-text-pair--reverse">...</span>

<!-- Vertical stack -->
<span class="icon-text-pair icon-text-pair--vertical">...</span>

<!-- Monospace (for instrument panels) -->
<span class="icon-text-pair icon-text-pair--mono">...</span>

<!-- Status variants -->
<span class="icon-text-pair icon-text-pair--ok">...</span>
<span class="icon-text-pair icon-text-pair--warn">...</span>
<span class="icon-text-pair icon-text-pair--alarm">...</span>
```

### 3. Icon Group (`icon-toolbar`)

Multiple icon buttons in a row, like a toolbar.

```html
<!-- Default (joined buttons) -->
<div class="icon-toolbar" role="group" aria-label="Text formatting">
  <button class="icon-btn" aria-label="Bold">...</button>
  <button class="icon-btn" aria-label="Italic">...</button>
  <button class="icon-btn" aria-label="Underline">...</button>
</div>

<!-- With dividers -->
<div class="icon-toolbar icon-toolbar--divided" role="group">...</div>

<!-- Compact (spaced, not joined) -->
<div class="icon-toolbar icon-toolbar--compact" role="group">...</div>
```

### 4. Icon Badge (`icon-badge`)

Icon with notification dot or count.

```html
<!-- Notification dot -->
<span class="icon-badge">
  <svg class="icon-badge__target">...</svg>
  <span class="icon-badge__dot"></span>
</span>

<!-- Numeric count -->
<span class="icon-badge">
  <svg class="icon-badge__target">...</svg>
  <span class="icon-badge__count">7</span>
</span>

<!-- Pulsing dot -->
<span class="icon-badge icon-badge--pulse">
  <svg class="icon-badge__target">...</svg>
  <span class="icon-badge__dot"></span>
</span>

<!-- Status colors -->
<span class="icon-badge icon-badge--ok">...</span>
<span class="icon-badge icon-badge--warn">...</span>
```

### 5. Animated Icon States

```html
<!-- Loading spinner -->
<svg class="icon-md icon-loader">...</svg>
<svg class="icon-md icon-loader--slow">...</svg>

<!-- Live / attention indicator -->
<svg class="icon-sm icon-attention">...</svg>

<!-- Interactive hint -->
<svg class="icon-sm icon-hint">...</svg>

<!-- Data updated flash -->
<svg class="icon-md icon-update">...</svg>

<!-- Entry animation -->
<svg class="icon-md icon-enter">...</svg>
```

---

## Industrial Icon Style Guide

### When to Use Hairline Stroke (1.5px)

✅ **Use hairline when:**
- Icon sits inline with 11-13px uppercase labels
- In navigation alongside monospace text
- On dark backgrounds where 2px feels heavy
- In dense data tables or terminal outputs
- For decorative / non-interactive indicators

❌ **Do NOT use hairline when:**
- Icon is the sole clickable target
- Size is >24px (stroke becomes invisible)
- Icon needs to stand out as primary action
- In high-contrast alerts or warnings

### When to Use Default Stroke (2px)

✅ **Use default when:**
- Icon is inside a button or clickable element
- Size is 20-24px (standard UI)
- In light theme with standard contrast
- For action icons (add, delete, edit)

### Icon + Label Pairing Rules

| Label Style | Icon Size | Gap | Alignment |
|---|---|---|---|
| 11px uppercase label | 12px (xs) | 6px | center |
| 13px body text | 16px (sm) | 8px | center |
| 14px button text | 16px (sm) | 8px | center |
| 16px body | 20px (md) | 8px | center |
| Metric value | 24px (lg) | 12px | center |

**Rules:**
1. Icon always comes **before** label (LTR). Use `icon-text-pair--reverse` for RTL.
2. Gap is always `≤ icon width / 2`.
3. Icon and label share **baseline alignment**, not top/bottom.
4. In monospace contexts, both icon and text use `font-family: var(--font-mono)`.

### Icon-Only Button Accessibility

**Every icon-only button MUST have:**

```html
<!-- Good: aria-label describes the action -->
<button class="icon-btn" aria-label="Delete project">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Good: aria-labelledby references visible text -->
<button class="icon-btn" aria-labelledby="delete-label">
  <svg aria-hidden="true">...</svg>
  <span id="delete-label" hidden>Delete project</span>
</button>

<!-- Bad: no accessible name -->
<button class="icon-btn">
  <svg>...</svg>
</button>
```

**Requirements:**
- `aria-label` or `aria-labelledby` **required**
- Inner `<svg>` should have `aria-hidden="true"` (prevents double-announcing)
- Focus ring must be visible (`box-shadow: var(--ds-focus-ring)`)
- Touch target minimum: 32x32px (our `icon-btn--sm`)

### Icon Color in Different Contexts

| Context | Icon Color | Example |
|---|---|---|
| Default text | `currentColor` (inherits) | Body copy, links |
| Button primary | `var(--bg-000)` (inverse) | `.btn-primary` icon |
| Button ghost | `var(--text-hi)` | `.btn-ghost` icon |
| Navigation active | `var(--accent)` | Active nav item |
| Navigation inactive | `var(--text-md)` | Inactive nav item |
| Form input prefix | `var(--ds-gray-600)` | Search icon in input |
| Status OK | `var(--ds-ok)` | Success checkmark |
| Status Alarm | `var(--ds-alarm)` | Error triangle |
| Disabled | `var(--ds-gray-500)` | Greyed-out icon |

### Icon Sizing Relative to Text

| Text Size | Icon Size | Ratio |
|---|---|---|
| 11px (label) | 12px (xs) | 1.09x |
| 13px (small) | 16px (sm) | 1.23x |
| 14px (body-sm) | 16px (sm) | 1.14x |
| 16px (body) | 20px (md) | 1.25x |
| 18px (lead) | 20px (md) | 1.11x |
| 24px (headline) | 24px (lg) | 1.00x |
| 32px (display) | 32px (xl) | 1.00x |

**Rule:** Icon size should be **0.8x to 1.3x** the text size. Never smaller than text, rarely more than 1.5x.

---

## Common Icon Set

### Navigation (10 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `home` | Dashboard root, home link | md | `layout`, `grid` |
| `chevron-right` | Expand, next, breadcrumb | sm | `arrow-right`, `caret-right` |
| `chevron-down` | Dropdown, collapse | sm | `arrow-down`, `caret-down` |
| `chevron-left` | Back navigation | sm | `arrow-left` |
| `arrow-left` | Return, back action | md | `chevron-left` |
| `arrow-right` | Forward, proceed | md | `chevron-right` |
| `menu` | Mobile nav toggle, hamburger | md | `align-justify` |
| `x` | Close, dismiss, cancel | sm | `x-circle` |
| `external-link` | Opens in new tab | sm | `link`, `arrow-up-right` |
| `settings` | Configuration panel | md | `sliders`, `tool` |

### Action (12 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `plus` | Add, create new | sm | `plus-circle`, `plus-square` |
| `trash-2` | Delete, remove | sm | `trash`, `x` |
| `edit-3` | Edit, modify | sm | `edit`, `pen-tool` |
| `copy` | Duplicate, copy to clipboard | sm | `clipboard`, `duplicate` |
| `download` | Save file, export | sm | `arrow-down-circle`, `save` |
| `upload` | Import, send file | sm | `arrow-up-circle`, `cloud-upload` |
| `refresh-cw` | Reload, sync, retry | sm | `rotate-cw`, `repeat` |
| `search` | Find, query | sm | `magnifying-glass` |
| `filter` | Narrow results | sm | `sliders`, `funnel` |
| `more-horizontal` | Overflow menu | sm | `more-vertical`, `dots` |
| `move` | Drag, reorder | sm | `drag-handle`, `grip-vertical` |
| `maximize-2` | Expand, fullscreen | sm | `maximize`, `fullscreen` |

### Communication (8 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `mail` | Email, messages | sm | `message-square`, `inbox` |
| `bell` | Notifications, alerts | md | `bell-ring`, `activity` |
| `message-square` | Chat, comments | sm | `message-circle`, `chat` |
| `send` | Submit, dispatch | sm | `paper-airplane`, `navigation` |
| `share-2` | Share externally | sm | `share`, `external-link` |
| `at-sign` | Mention, username | sm | `hash`, `mention` |
| `phone` | Call, contact | sm | `phone-call`, `headphones` |
| `video` | Video call, camera | sm | `video-off`, `camera` |

### Status (10 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `check-circle-2` | Success, verified | sm/lg | `check`, `check-square` |
| `alert-triangle` | Warning, caution | sm/lg | `alert-circle`, `zap` |
| `x-circle` | Error, failed | sm/lg | `x-octagon`, `slash` |
| `info` | Information, tip | sm/lg | `help-circle`, `circle` |
| `clock` | Pending, scheduled | sm | `timer`, `hourglass` |
| `loader` | Loading, processing | md | `refresh-cw`, `spin` |
| `activity` | Live, monitoring | sm | `pulse`, `trending-up` |
| `shield` | Secure, protected | sm | `shield-check`, `lock` |
| `zap` | Fast, energized | sm | `bolt`, `flame` |
| `minus-circle` | Removed, excluded | sm | `ban`, `x-circle` |

### Editor (6 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `bold` | Bold text | sm | `type` |
| `italic` | Italic text | sm | `type` |
| `link` | Insert hyperlink | sm | `anchor`, `paperclip` |
| `image` | Insert image | sm | `picture`, `photo` |
| `list` | Bulleted list | sm | `list-ordered`, `align-left` |
| `code` | Inline code | sm | `terminal`, `command` |

### Media (8 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `play` | Start playback | md | `play-circle`, `triangle` |
| `pause` | Pause playback | md | `pause-circle`, `square` |
| `skip-forward` | Next track | md | `fast-forward`, `chevrons-right` |
| `skip-back` | Previous track | md | `rewind`, `chevrons-left` |
| `volume-2` | Audio on | sm | `volume-1`, `speaker` |
| `volume-x` | Mute | sm | `volume-off`, `speaker-off` |
| `file-text` | Document, file | sm | `file`, `document` |
| `folder-open` | Open directory | sm | `folder`, `directory` |

### Extended / Specialized (6 icons)

| Icon Name | Usage Context | Size | Alternatives |
|---|---|---|---|
| `terminal` | CLI, command line | sm | `command`, `code` |
| `database` | Data storage, backend | sm | `server`, `hard-drive` |
| `cloud` | Cloud services, upload | sm | `cloud-upload`, `server` |
| `git-branch` | Version control | sm | `git-commit`, `git-merge` |
| `cpu` | Compute, processing | md | `server`, `box` |
| `globe` | International, web | sm | `world`, `map` |

---

## Accessibility

### SVG Accessibility

```html
<!-- Method 1: aria-label on parent -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Method 2: title inside SVG -->
<svg role="img">
  <title>Close dialog</title>
  ...
</svg>

<!-- Method 3: aria-labelledby -->
<svg aria-labelledby="icon-title">
  <title id="icon-title">Close dialog</title>
  ...
</svg>
```

**Rules:**
- If icon is decorative (paired with visible text): `aria-hidden="true"`
- If icon conveys meaning alone: `<title>` or `aria-label`
- Never use `alt` on `<svg>` (invalid HTML)
- Focusable icons must have `role="img"`

### Animated Icons & Reduced Motion

All animated icons respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .icon-spin,
  .icon-pulse,
  .icon-bounce {
    animation: none;
  }
}
```

**Guidelines:**
- Loading spinners: OK to animate, but provide static fallback state
- Attention pulses: Limit to 3 cycles, then stop
- Decorative bounces: Disable entirely under reduced motion
- Status dots: Use color change instead of pulse if motion is reduced

### Touch Targets

| Element | Minimum Size | Our Implementation |
|---|---|---|
| Icon button | 32x32px | `icon-btn` = 40x40px ✓ |
| Toolbar icon | 32x32px | `icon-btn--sm` = 32x32px ✓ |
| Nav icon | 44x44px | `icon-btn--lg` = 48x48px ✓ |

### Focus Visibility

All interactive icon elements use `--ds-focus-ring`:

```css
.icon-btn:focus-visible {
  outline: none;
  box-shadow: var(--ds-focus-ring);
}
```

---

## Implementation Checklist

### For Designers

- [ ] Icon set defined in Figma using 24x24 frame
- [ ] Stroke width specified per component
- [ ] Color token referenced (not hex values)
- [ ] All icon-only buttons have annotation for `aria-label`
- [ ] Animated icons have static state variant
- [ ] Touch targets meet 32x32px minimum

### For Developers

- [ ] `@geist-ui/icons` or `@radix-ui/react-icons` installed
- [ ] `tokens/icons.css` imported in global styles
- [ ] `components/icon.css` imported in global styles
- [ ] All `<svg>` icons use `viewBox="0 0 24 24"`
- [ ] All icon-only buttons have `aria-label`
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Status icons use semantic color classes
- [ ] Loading states use `.icon-spin`
- [ ] Reduced motion media query tested
- [ ] Dark mode icon contrast verified

### For QA

- [ ] Icon buttons have visible focus rings
- [ ] Screen readers announce icon-only buttons correctly
- [ ] Animated icons stop under `prefers-reduced-motion: reduce`
- [ ] Touch targets are 32x32px minimum
- [ ] No icon is used for two different meanings
- [ ] Status colors pass 3:1 contrast ratio
- [ ] Icons scale crisply at all sizes (no blur)

---

## File Reference

| File | Purpose |
|---|---|
| `tokens/icons.css` | Size, stroke, animation, and color utilities |
| `components/icon.css` | Icon button, text pair, toolbar, badge, animated states |
| `patterns/ICON_SYSTEM.md` | This document — usage guide and reference |

---

*Vertex Industrial Geist Icon System v1.0 — Precision iconography for industrial interfaces*
