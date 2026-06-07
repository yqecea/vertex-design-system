# Vertex Industrial Design System — Testing Strategy

## Purpose

Every test in this document protects one thing: the operator's trust that the interface works the way a machine should. No broken tokens. No unreadable text. No janky glass. No keyboard traps.

This document covers what to test, how to test it, which paths matter most, what budgets to enforce, and how to prevent regressions from landing.

---

## 1. What to Test

### 1.1 Token Consistency

Every `--ds-*` variable must resolve to a real value. An unresolved token means a missing color, a broken border, or invisible text.

**Check these token families:**

| Family | Prefix | Count | File |
|---|---|---|---|
| Color scales | `--ds-gray-*`, `--ds-blue-*`, `--ds-red-*`, `--ds-amber-*`, `--ds-green-*`, `--ds-teal-*`, `--ds-purple-*`, `--ds-pink-*` | 80 | `tokens/colors.css` |
| Gray alpha | `--ds-gray-alpha-*` | 10 | `tokens/colors.css` |
| Semantic | `--ds-ok`, `--ds-warn`, `--ds-alarm`, `--ds-info` | 4 | `tokens/colors.css` |
| Focus | `--ds-focus-color`, `--ds-focus-ring`, `--ds-focus-ring-outline` | 3 | `tokens/colors.css` |
| Shadows | `--ds-shadow-*`, `--ds-shadow-border*` | 9 | `tokens/colors.css` |
| Overlay | `--ds-overlay-backdrop-color` | 1 | `tokens/colors.css` |
| Typography | `--font-sans`, `--font-mono`, `--font-pixel-*`, `--font-weight-*`, `--text-*`, `--display-*`, `--tracking-*`, `--leading-*` | ~30 | `tokens/typography.css` |
| Spacing | `--geist-space*`, `--geist-gap*`, `--breakpoint-*`, `--ds-page-width` | ~20 | `tokens/spacing.css` |
| Shape | `--geist-radius`, `--geist-marketing-radius`, `--radius-*` | 5 | `tokens/shape.css` |
| Motion | `--ds-motion-*`, `--ease-*`, `--animate-*` | ~8 | `tokens/motion.css` |
| Glass | `--glass-bg*`, `--glass-border*`, `--glass-blur*`, `--glass-shine*`, `--glass-gradient-*` | ~12 | `tokens/glass.css` |
| Material (per-material) | `--bg-000` through `--bg-300`, `--text-hi/md/lo`, `--line`, `--line-2`, `--accent*`, `--ok`, `--warn`, `--alarm`, `--texture-primary` | ~15 | `materials/*.css` |

**Automated check:**

```bash
# Find all --ds-* references in CSS files, then verify each exists as a definition
# Uses: token-lint.sh (see Section 5)

# List every --ds-* variable USED in component/layout/material files
grep -roh -- '--ds-[a-z0-9-]*' components/ layouts/ materials/ examples/ | sort -u > /tmp/used-tokens.txt

# List every --ds-* variable DEFINED in tokens/
grep -oh -- '--ds-[a-z0-9-]*' tokens/*.css | sort -u > /tmp/defined-tokens.txt

# Diff: any used-but-not-defined token is a bug
comm -23 /tmp/used-tokens.txt /tmp/defined-tokens.txt
```

Run the same for `--geist-*`, `--glass-*`, and material-level tokens (`--bg-*`, `--text-hi`, `--line`, `--accent`).

### 1.2 Color Contrast (WCAG 2.1 AA)

| Element | Minimum Ratio | Size Threshold |
|---|---|---|
| Body text (`--text-hi`, `--text-md` on `--bg-100`) | 4.5:1 | 16px |
| Label text (`.label`, 11px mono uppercase) | 4.5:1 | 11px |
| Large text (`.panel-headline`, `--display-*`) | 3:1 | >= 24px |
| UI components (buttons, inputs, borders) | 3:1 | any |
| Focus ring (`--ds-focus-ring`) | 3:1 against background | any |

**Critical pairs to validate per material:**

```text
MACHINING (dark):
  --text-hi (#ededed) on --bg-100 (#171717)      → 14.7:1  ✓
  --text-md (#a1a1a1) on --bg-100 (#171717)      →  6.2:1  ✓
  --text-lo (#6a6a6a) on --bg-100 (#171717)      →  3.6:1  ✓ (large text only)
  --accent (#0072f5) on --bg-000 (#0a0a0a)        →  5.1:1  ✓
  --accent (#0072f5) on --bg-100 (#171717)        →  4.5:1  ✓

PLATING (dark, green-tinted):
  --text-hi (#d4e8cc) on --bg-100 (#0f1a10)      → 12.1:1  ✓
  --text-md (#8aaa7c) on --bg-100 (#0f1a10)      →  5.1:1  ✓
  --text-lo (#5a7a4e) on --bg-100 (#0f1a10)      →  2.9:1  ✗ FAIL — use for large text only

PRINTING (light):
  --text-hi on --bg-100                           → check light theme pairs
```

**Automated check:**

```js
// axe-core integration (see Section 2.3)
// Also: manual spot-check with WebAIM Contrast Checker
// https://webaim.org/resources/contrastchecker/
```

### 1.3 Typography Rendering

**Font loading checklist:**

- [ ] Geist Sans loads (check `--font-sans` resolves to "Geist", not fallback "Inter")
- [ ] Geist Mono loads (check `--font-mono` resolves to "Geist Mono", not "Menlo")
- [ ] Geist Pixel variants load (Square, Grid, Circle, Triangle, Line)
- [ ] Fallback chain works when Geist CDN is down (Inter → system fonts)
- [ ] `font-variant-numeric: tabular-nums` applies on `.tabular` and `[data-numeric]` elements
- [ ] Labels render uppercase with `letter-spacing: 0.08em`
- [ ] Display sizes use `clamp()` correctly: `--display-88` = clamp(48px, 8vw, 88px)
- [ ] Cyrillic subset loads for Russian locales (see `tokens/cyrillic.css`)

**Manual check:**

```text
1. Open DevTools → Elements → Computed
2. Find a .panel-headline element
3. Verify font-family resolves to "Geist", not "Inter"
4. If "Inter" appears: Geist failed to load. Check network tab for font files.
```

### 1.4 Component States

Every interactive component needs state coverage. Test each in every material.

**Button (`.btn`, `.btn-primary`, `.btn-ghost`):**

| State | Expected Behavior |
|---|---|
| Default | Solid background (primary) or transparent (ghost), border visible |
| Hover | Primary: `filter: brightness(1.15)`. Ghost: border + text → accent color |
| Active/Pressed | `transform: scale(0.98)`, `transition-duration: 80ms` |
| Focus | `--ds-focus-ring` visible (2px white inner + 4px accent outer) |
| Disabled | `opacity: 0.5`, `cursor: not-allowed`, no hover effects |
| Loading | Spinner or text change, `pointer-events: none` |

**Panel (`.panel`):**

| State | Expected |
|---|---|
| Default | `border: 1px solid var(--line-2)`, `background: var(--bg-100)` |
| Hover | `border-color: var(--accent)`, `background: var(--bg-200)`, 150ms transition |
| Glass variant | `backdrop-filter` active, grid visible through blur |

**Nav (`.nav`, `.nav--glass`):**

| State | Expected |
|---|---|
| Default | Sticky, `z-index: 100`, 64px height |
| Glass | `backdrop-filter: blur(12px) saturate(150%)` |
| Mobile (<768px) | Hamburger visible, links collapsed, actions hidden |
| Mobile open | `.nav-links.open` visible, full-width dropdown |

### 1.5 Responsive Breakpoints

| Breakpoint | Token | Width | What Changes |
|---|---|---|---|
| sm | `--breakpoint-sm` | 640px | Single column, stacked layouts |
| md | `--breakpoint-md` | 768px | 2-column grids, nav collapses |
| lg | `--breakpoint-lg` | 961px | Full chassis frame, 3-4 columns |
| xl | `--breakpoint-xl` | 1280px | Maximum content width |

**Per-breakpoint checks:**

```text
At 640px (sm):
  - Bento grid: 1 column
  - Split layout: stacked
  - Glass blur: 8px max (per glass-performance.css)
  - Font sizes: clamp values at minimum

At 768px (md):
  - Nav: hamburger menu visible
  - Grid: 2 columns
  - Chassis borders: dropped (< 800px rule from DESIGN_SYSTEM.md)

At 961px (lg):
  - Chassis frame visible
  - 3-column bento
  - Full nav links visible

At 1280px (xl):
  - .nav-inner max-width: 1280px
  - --ds-page-width: 1400px
  - All content at maximum spread
```

### 1.6 Glass Performance

Glass is the single biggest performance risk. Test it like you'd test a database query.

**FPS targets:**

| Viewport | Max Glass Panels | Blur Radius | Target FPS |
|---|---|---|---|
| Desktop (>961px) | 8 | blur(16px) saturate(180%) | 60fps |
| Tablet (768-961px) | 5 | blur(12px) saturate(160%) | 60fps |
| Mobile (<768px) | 3 | blur(8px) saturate(140%) | 60fps |
| Small mobile (<480px) | 2 | blur(8px) saturate(140%) | 60fps |

**What to measure:**

```js
// FPS monitoring script (from glass-performance.css comments)
let frameCount = 0;
let lastTime = performance.now();

function checkFPS() {
  frameCount++;
  const now = performance.now();
  if (now - lastTime >= 1000) {
    const fps = frameCount;
    frameCount = 0;
    lastTime = now;

    if (fps < 30) {
      document.body.classList.add('glass-low-power');
      console.warn(`Glass FPS dropped to ${fps}. Activating low-power mode.`);
    }
  }
  requestAnimationFrame(checkFPS);
}
requestAnimationFrame(checkFPS);
```

**Composite layer check (Chrome DevTools):**

```text
1. Open DevTools → More tools → Layers
2. Count layers on a page with glass panels
3. Each .glass element should create exactly 1 layer
4. If a single glass element creates >1 layer: investigate will-change or transform stacking
5. Total layers on mobile should stay under 20
```

### 1.7 Animation Smoothness

**60fps target for all animations.** The design system defines these motion tokens:

| Token | Value | Usage |
|---|---|---|
| `--default-transition-duration` | 0.15s | Button hover, border transitions |
| `--ds-motion-popover-duration` | 0.2s | Popover enter/exit |
| `--ds-motion-overlay-duration` | 0.3s | Modal/drawer overlay |
| `--ds-motion-timing-swift` | cubic-bezier(.175, .885, .32, 1.1) | Spring-like overshoot |
| `--ease-out` | cubic-bezier(0, 0, .2, 1) | Element exits |

**Performance measurement:**

```text
Chrome DevTools → Performance tab:
1. Record during a theme switch (light ↔ dark)
2. Record during a modal open/close
3. Record during material switch
4. Look for:
   - Frames > 16.67ms (dropped frames)
   - Long tasks > 50ms
   - Layout thrashing (forced reflow during animation)
```

**`prefers-reduced-motion` compliance:**

```css
/* Already in tokens/motion.css — verify it works */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

```text
Test: Enable "Reduce motion" in OS accessibility settings.
Expected: All animations stop. Transitions become instant.
Also: Glass blur gets disabled (per glass-performance.css).
```

### 1.8 Accessibility

**ARIA and semantics:**

- [ ] Grid guides: `aria-hidden="true"` (decorative, not content)
- [ ] SVG illustrations: `aria-hidden="true"` or meaningful `role` + `aria-label`
- [ ] Status updates: use `aria-live="polite"` or `role="status"`
- [ ] Images: `alt` text or `aria-hidden="true"` if decorative
- [ ] Modals: `role="dialog"`, `aria-modal="true"`, focus trap
- [ ] Nav: `<nav>` element with `aria-label`

**Keyboard navigation:**

```text
Tab order must follow reading order:
1. Nav links (left to right)
2. Main content (top to bottom)
3. Interactive elements within panels
4. Footer/actions

Focus trap in modals:
- Tab on last focusable → wraps to first
- Shift+Tab on first → wraps to last
- Escape closes modal, returns focus to trigger

Skip links:
- "Skip to main content" as first focusable element
```

**Screen reader testing:**

```text
Test with:
- VoiceOver (macOS): Cmd+F5
- NVDA (Windows): free download
- TalkBack (Android): Settings → Accessibility

Verify:
- Panel labels read correctly (.panel-label content)
- Status text announced (aria-live regions)
- Material/theme changes announced
- Form validation errors announced
```

### 1.9 Cross-Browser

| Browser | Version | Known Issues |
|---|---|---|
| Chrome | Latest 2 stable | Baseline (primary dev target) |
| Firefox | Latest 2 stable | `backdrop-filter` needs flag in older versions |
| Safari | Latest 2 stable | `-webkit-backdrop-filter` required; `mix-blend-mode` flicker on glass `::after`; clipping bugs with `overflow:hidden` |
| Edge | Latest 2 stable | Chromium-based, same as Chrome but verify |

**Safari-specific checks (from `tokens/glass-performance.css`):**

```css
/* Safari fix: already in glass-performance.css */
@supports (-webkit-backdrop-filter: blur(10px)) {
  .glass {
    -webkit-backdrop-filter: var(--glass-blur);
    &::after {
      mix-blend-mode: normal;  /* prevents flicker */
      opacity: 0.5;
    }
  }
}
```

```text
Safari test matrix:
- [ ] Glass panels render without flicker
- [ ] Glass ::after pseudo-element doesn't clip
- [ ] Sticky nav with glass stays fixed on scroll
- [ ] backdrop-filter doesn't break with overflow:hidden ancestors
- [ ] Font rendering: Geist loads via @font-face (not system font)
```

### 1.10 Mobile Performance

| Device Tier | Target | Glass Budget | Bundle Target |
|---|---|---|---|
| High-end (iPhone 14+, Pixel 7+) | 60fps, TTI < 2s | 3 panels | Full CSS |
| Mid-range (iPhone 12, Pixel 5) | 60fps, TTI < 3s | 2 panels | Full CSS |
| Low-end (iPhone SE, budget Android) | 30fps acceptable, TTI < 4s | 1 panel | Consider critical CSS only |

**Mobile test checklist:**

```text
iOS Safari:
- [ ] Glass blur renders (not just transparent background)
- [ ] Scroll performance: 60fps with glass nav
- [ ] Safe area insets respected (notch devices)
- [ ] Touch targets >= 44x44px
- [ ] Viewport doesn't zoom on input focus (font-size >= 16px)

Android Chrome:
- [ ] Glass blur renders
- [ ] Scroll jank test: swipe through full page
- [ ] Keyboard appearance doesn't break layout
- [ ] Back button closes modals/drawers
- [ ] PWA: glass performance in standalone mode
```

---

## 2. How to Test

### 2.1 Manual QA Checklist

Print this. Pin it to the wall. Check every box before merging.

**Visual integrity:**

- [ ] All sections have visible borders (exposed grid aesthetic)
- [ ] Corner caps present at grid intersections
- [ ] Glass panels show grid through blur
- [ ] No unintended drop shadows (only allowed on modal overlays)
- [ ] Material texture visible on page background

**Typography:**

- [ ] All numbers use tabular figures (`font-variant-numeric: tabular-nums`)
- [ ] Labels are uppercase with `letter-spacing: 0.08em`
- [ ] Body text in sans-serif, never mono
- [ ] Display sizes use `clamp()` and respect viewport

**Interaction:**

- [ ] All buttons have hover, active, focus, disabled states
- [ ] Panels highlight on hover (border → accent, 150ms)
- [ ] Focus ring visible on every interactive element
- [ ] No keyboard traps anywhere
- [ ] Tab order matches visual order

**Theme:**

- [ ] Dark theme: backgrounds are dark, text is light
- [ ] Light theme (PRINTING material): backgrounds are light, text is dark
- [ ] Theme switch: no flash of unstyled content (FOUC)
- [ ] All semantic colors (ok, warn, alarm) visible in both themes

**Performance:**

- [ ] Glass panels maintain 60fps on desktop
- [ ] Mobile: no more than 3 active glass panels
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No layout shift during page load (CLS < 0.1)

### 2.2 Automated Tools

#### Lighthouse

```bash
# Install
npm install -g lighthouse

# Run against local preview
lighthouse http://localhost:3000/preview.html \
  --only-categories=performance,accessibility,best-practices \
  --output=json \
  --output-path=./lighthouse-report.json \
  --chrome-flags="--headless"

# Target scores:
# Performance: >= 90
# Accessibility: >= 95
# Best Practices: >= 90
```

#### axe-core

```bash
# Install
npm install --save-dev @axe-core/cli

# Run
axe http://localhost:3000/preview.html \
  --tags wcag2a,wcag2aa,wcag21aa \
  --save axe-results.json

# Or integrate with Playwright (see Section 2.5)
```

#### WAVE

```bash
# Use the WAVE browser extension for manual review:
# https://wave.webaim.org/extension/

# Check each page:
# - preview.html
# - examples/dashboard.html
# - examples/landing.html
# - examples/docs.html
```

### 2.3 Visual Regression Testing

Use Playwright screenshots to catch unintended visual changes.

**Setup:**

```bash
npm install --save-dev @playwright/test
npx playwright install
```

**playwright.config.ts:**

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  snapshotDir: './tests/visual/__screenshots__',
  updateSnapshots: 'missing',
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } } },
    { name: 'tablet', use: { ...devices['iPad Pro 11'], viewport: { width: 834, height: 1194 } } },
    { name: 'mobile', use: { ...devices['iPhone 14'], viewport: { width: 390, height: 844 } } },
  ],
  use: {
    baseURL: 'http://localhost:3000',
  },
});
```

**Visual regression test example:**

```ts
// tests/visual/materials.spec.ts
import { test, expect } from '@playwright/test';

const materials = ['machining', 'plating', 'welding', 'casting', 'calibrating', 'printing'];

for (const material of materials) {
  test(`${material}: matches snapshot`, async ({ page }) => {
    await page.goto(`/preview.html?material=${material}`);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot(`${material}-full.png`, {
      maxDiffPixelRatio: 0.01, // 1% pixel diff threshold
    });
  });

  test(`${material}: glass panels match`, async ({ page }) => {
    await page.goto(`/preview.html?material=${material}`);
    const glassElements = page.locator('.glass');
    const count = await glassElements.count();
    for (let i = 0; i < count; i++) {
      await expect(glassElements.nth(i)).toHaveScreenshot(`${material}-glass-${i}.png`);
    }
  });
}
```

**Theme switching visual test:**

```ts
// tests/visual/theme.spec.ts
import { test, expect } from '@playwright/test';

test('dark theme default', async ({ page }) => {
  await page.goto('/preview.html');
  await expect(page).toHaveScreenshot('theme-dark.png');
});

test('light theme (printing material)', async ({ page }) => {
  await page.goto('/preview.html?material=printing');
  await expect(page).toHaveScreenshot('theme-light.png');
});
```

### 2.4 Performance Budgets

Enforce these in CI. Fail the build if any budget is exceeded.

**CSS bundle:**

```bash
# Check gzipped CSS bundle size
find . -name '*.css' -not -path './node_modules/*' \
  -exec cat {} + \
  | gzip -c \
  | wc -c

# Budget: < 50KB gzipped (all CSS combined)
# Current estimate: tokens (~4KB) + components (~3KB) + materials (~5KB) + layouts (~2KB) + glass-perf (~2KB) ≈ 16KB raw ≈ 5KB gzipped
```

**Render performance:**

```js
// tests/performance/budgets.spec.ts
import { test, expect } from '@playwright/test';

test('performance budgets', async ({ page }) => {
  await page.goto('/preview.html');
  await page.waitForLoadState('networkidle');

  const metrics = await page.evaluate(() => {
    const paint = performance.getEntriesByType('paint');
    const fp = paint.find(e => e.name === 'first-paint');
    const fcp = paint.find(e => e.name === 'first-contentful-paint');

    // TTI approximation: when main thread is idle
    const longTasks = performance.getEntriesByType('longtask');

    return {
      firstPaint: fp?.startTime ?? 0,
      firstContentfulPaint: fcp?.startTime ?? 0,
      longTaskCount: longTasks.length,
      transferSize: performance.getEntriesByType('resource')
        .filter(r => r.name.endsWith('.css'))
        .reduce((sum, r) => sum + (r.transferSize || 0), 0),
    };
  });

  expect(metrics.firstPaint).toBeLessThan(1500);       // FP < 1.5s
  expect(metrics.firstContentfulPaint).toBeLessThan(2000); // FCP < 2s
  expect(metrics.longTaskCount).toBeLessThan(3);        // Few blocking tasks
});
```

**Glass FPS test:**

```ts
// tests/performance/glass-fps.spec.ts
import { test, expect } from '@playwright/test';

test('glass panels maintain 60fps', async ({ page }) => {
  await page.goto('/preview.html');
  await page.waitForLoadState('networkidle');

  // Inject FPS monitor
  const fps = await page.evaluate(() => {
    return new Promise<number>((resolve) => {
      let frames = 0;
      const start = performance.now();

      function tick() {
        frames++;
        if (performance.now() - start >= 1000) {
          resolve(frames);
          return;
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  });

  expect(fps).toBeGreaterThanOrEqual(55); // Allow 5fps margin
});
```

### 2.5 Playwright End-to-End Test Examples

**Full component state test:**

```ts
// tests/e2e/button-states.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Button states', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/preview.html');
  });

  test('primary button has all states', async ({ page }) => {
    const btn = page.locator('.btn-primary').first();

    // Default
    await expect(btn).toBeVisible();
    await expect(btn).toHaveCSS('cursor', 'pointer');

    // Hover
    await btn.hover();
    await expect(btn).toHaveCSS('filter', /brightness/);

    // Focus (keyboard)
    await page.keyboard.press('Tab');
    // Verify focus ring is applied
    const outline = await btn.evaluate(el =>
      getComputedStyle(el).boxShadow
    );
    expect(outline).toContain('rgb'); // focus ring uses box-shadow

    // Active
    await btn.dispatchEvent('mousedown');
    const transform = await btn.evaluate(el =>
      getComputedStyle(el).transform
    );
    expect(transform).toContain('0.98'); // scale(0.98)
  });

  test('ghost button hover changes border to accent', async ({ page }) => {
    const btn = page.locator('.btn-ghost').first();
    await btn.hover();
    const borderColor = await btn.evaluate(el =>
      getComputedStyle(el).borderColor
    );
    // Should match --accent color
    expect(borderColor).not.toBe('rgba(0, 0, 0, 0)');
  });
});
```

**Theme switch test:**

```ts
// tests/e2e/theme-switch.spec.ts
import { test, expect } from '@playwright/test';

test('dark/light theme switch', async ({ page }) => {
  await page.goto('/preview.html');

  // Dark theme (default, machining)
  const darkBg = await page.evaluate(() =>
    getComputedStyle(document.body).backgroundColor
  );
  expect(darkBg).toBe('rgb(10, 10, 10)'); // #0a0a0a

  // Switch to light (printing material)
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-material', 'printing');
  });

  const lightBg = await page.evaluate(() => {
    const bg = getComputedStyle(document.body).getPropertyValue('--bg-000');
    return bg.trim();
  });
  // PRINTING uses light backgrounds
  expect(lightBg).not.toBe('#0a0a0a');
});
```

**Material switching test:**

```ts
// tests/e2e/material-switch.spec.ts
import { test, expect } from '@playwright/test';

const materials = [
  { name: 'machining', accent: 'rgb(0, 114, 245)' },
  { name: 'plating', accent: 'rgb(18, 165, 148)' },
  { name: 'welding', accent: 'rgb(255, 178, 36)' },
  { name: 'casting', accent: 'rgb(229, 72, 77)' },
  { name: 'calibrating', accent: 'rgb(255, 178, 36)' },
  { name: 'printing', accent: 'rgb(0, 114, 245)' },
];

for (const { name, accent } of materials) {
  test(`${name}: accent color is correct`, async ({ page }) => {
    await page.goto('/preview.html');
    await page.evaluate((mat) => {
      document.documentElement.setAttribute('data-material', mat);
    }, name);

    const btn = page.locator('.btn-primary').first();
    const bgColor = await btn.evaluate(el =>
      getComputedStyle(el).backgroundColor
    );
    expect(bgColor).toBe(accent);
  });
}
```

**Keyboard navigation flow:**

```ts
// tests/e2e/keyboard-nav.spec.ts
import { test, expect } from '@playwright/test';

test('tab order follows reading order', async ({ page }) => {
  await page.goto('/preview.html');

  // Collect all focusable elements
  const focusable = await page.evaluate(() => {
    const elements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return Array.from(elements).map(el => ({
      tag: el.tagName,
      class: el.className,
      text: el.textContent?.trim().slice(0, 30),
    }));
  });

  // Tab through and verify order
  for (let i = 0; i < Math.min(focusable.length, 10); i++) {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => ({
      tag: document.activeElement?.tagName,
      class: document.activeElement?.className,
    }));
    expect(focused.tag).toBe(focusable[i].tag);
  }
});

test('modal traps focus', async ({ page }) => {
  await page.goto('/preview.html');

  // Open modal
  await page.click('[data-open-modal]');
  const modal = page.locator('[role="dialog"]');
  await expect(modal).toBeVisible();

  // Tab through modal — focus should stay inside
  const modalFocusable = await modal.locator('a, button, input').all();
  const firstFocusable = modalFocusable[0];
  const lastFocusable = modalFocusable[modalFocusable.length - 1];

  // Focus last element, then Tab — should wrap to first
  await lastFocusable.focus();
  await page.keyboard.press('Tab');
  await expect(firstFocusable).toBeFocused();

  // Escape closes modal
  await page.keyboard.press('Escape');
  await expect(modal).not.toBeVisible();
});
```

**Glass overlay on complex backgrounds:**

```ts
// tests/e2e/glass-overlay.spec.ts
import { test, expect } from '@playwright/test';

test('glass renders over wallpaper background', async ({ page }) => {
  await page.goto('/preview.html#wallpaper-demo');
  await page.waitForLoadState('networkidle');

  const glass = page.locator('.glass').first();

  // Verify backdrop-filter is applied
  const blur = await glass.evaluate(el =>
    getComputedStyle(el).backdropFilter
  );
  expect(blur).toContain('blur');

  // Verify ::before (shine gradient) exists
  const beforeBg = await glass.evaluate(el =>
    getComputedStyle(el, '::before').background
  );
  expect(beforeBg).not.toBe('none');

  // Verify content is readable through glass
  const textColor = await glass.evaluate(el => {
    const text = el.querySelector('p, span, h2');
    return text ? getComputedStyle(text).color : null;
  });
  expect(textColor).toBeTruthy();
});
```

**Grid responsive reflow:**

```ts
// tests/e2e/responsive-grid.spec.ts
import { test, expect } from '@playwright/test';

test('bento grid reflows across breakpoints', async ({ page }) => {
  await page.goto('/preview.html');
  const bento = page.locator('.bento');

  // Desktop: 3 columns
  await page.setViewportSize({ width: 1280, height: 800 });
  let columns = await bento.evaluate(el =>
    getComputedStyle(el).gridTemplateColumns
  );
  expect(columns.split(' ').length).toBe(3);

  // Tablet: 2 columns
  await page.setViewportSize({ width: 768, height: 1024 });
  columns = await bento.evaluate(el =>
    getComputedStyle(el).gridTemplateColumns
  );
  expect(columns.split(' ').length).toBeLessThanOrEqual(2);

  // Mobile: 1 column
  await page.setViewportSize({ width: 375, height: 812 });
  columns = await bento.evaluate(el =>
    getComputedStyle(el).gridTemplateColumns
  );
  expect(columns.split(' ').length).toBe(1);
});
```

**Form validation states:**

```ts
// tests/e2e/form-validation.spec.ts
import { test, expect } from '@playwright/test';

test('form shows validation states', async ({ page }) => {
  await page.goto('/preview.html#form-demo');

  const input = page.locator('input[required]').first();

  // Empty submit — error state
  await page.click('button[type="submit"]');
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  const errorBorder = await input.evaluate(el =>
    getComputedStyle(el).borderColor
  );
  expect(errorBorder).toContain('rgb(229, 72, 77)'); // --alarm red

  // Fill valid value — error clears
  await input.fill('test@example.com');
  await expect(input).not.toHaveAttribute('aria-invalid', 'true');
});
```

**Toast notification queue:**

```ts
// tests/e2e/toast.spec.ts
import { test, expect } from '@playwright/test';

test('toast notifications stack and dismiss', async ({ page }) => {
  await page.goto('/preview.html');

  // Trigger multiple toasts
  await page.click('[data-trigger-toast="success"]');
  await page.click('[data-trigger-toast="error"]');
  await page.click('[data-trigger-toast="warning"]');

  const toasts = page.locator('[role="alert"]');
  await expect(toasts).toHaveCount(3);

  // Verify stacking order (newest on top)
  const firstToast = toasts.nth(0);
  const lastToast = toasts.nth(2);
  const firstZ = await firstToast.evaluate(el =>
    getComputedStyle(el).zIndex
  );
  const lastZ = await lastToast.evaluate(el =>
    getComputedStyle(el).zIndex
  );
  expect(Number(firstZ)).toBeGreaterThan(Number(lastZ));

  // Auto-dismiss after timeout
  await page.waitForTimeout(5000);
  await expect(toasts).toHaveCount(0);
});
```

---

## 3. Test Cases for Critical Paths

### 3.1 Dark/Light Theme Switching

```text
Precondition: Page loads with data-material="machining" (dark theme)

Steps:
1. Verify --bg-000 resolves to #0a0a0a
2. Verify --text-hi resolves to #ededed
3. Switch to data-material="printing"
4. Verify --bg-000 resolves to a light color
5. Verify --text-hi resolves to a dark color
6. Verify no FOUC (flash of unstyled content) during switch
7. Verify focus rings are visible in both themes
8. Verify semantic colors (ok, warn, alarm) are readable in both
9. Verify glass panels render correctly in both themes
10. Verify material texture changes (8px grid → hairline rules)

Pass criteria:
- All CSS variables resolve (no undefined tokens)
- Contrast ratios pass WCAG AA in both themes
- No layout shift during theme transition
- Transition duration matches --default-transition-duration (150ms)
```

### 3.2 Material Switching

```text
Materials: machining → plating → welding → casting → calibrating → printing

For each material transition:
1. Set data-material attribute
2. Verify --accent changes to material's accent color:
   - machining: #0072f5 (blue)
   - plating: #12a594 (teal)
   - welding: #ffb224 (amber)
   - casting: #e5484d (red)
   - calibrating: #ffb224 (amber)
   - printing: #0072f5 (blue)
3. Verify --bg-000 through --bg-300 change
4. Verify --text-hi/md/lo change
5. Verify --line and --line-2 change
6. Verify --texture-primary changes (grid pattern differs per material)
7. Verify buttons update (accent background)
8. Verify panel hover states use new accent
9. Verify no cross-material contamination (no mixed accent colors)
10. Verify semantic colors (--ok, --warn, --alarm) remain consistent

Pass criteria:
- Each material has a distinct visual identity
- No mixed materials on a single page
- Accent color applies uniformly across all components
```

### 3.3 Glass Overlay on Complex Backgrounds

```text
Test matrix:
- Glass over solid dark background
- Glass over wallpaper image (desktop)
- Glass over wallpaper image (mobile)
- Glass over exposed grid lines
- Glass over another glass panel (stacking)
- Glass over gradient background

For each scenario:
1. Verify backdrop-filter renders (not just transparent)
2. Verify grid lines visible through glass (per DESIGN_SYSTEM.md §7.4)
3. Verify text is readable (contrast check)
4. Verify ::before shine gradient is visible
5. Verify ::after diagonal highlight is visible
6. Verify hover state changes background opacity
7. Verify no visual artifacts (banding, clipping, flicker)
8. Verify FPS stays above 55

Mobile-specific:
1. Blur reduced to blur(8px) (per glass-performance.css)
2. ::before and ::after disabled
3. Maximum 3 glass panels active
4. 4th+ glass panels fall back to solid background
```

### 3.4 Grid Responsive Reflow

```text
Viewport progression: 375px → 640px → 768px → 961px → 1280px

At each viewport:
1. Count visible grid columns
2. Verify no horizontal overflow (scrollbar appears = fail)
3. Verify content doesn't overlap
4. Verify chassis borders drop below 800px (BOXED layout)
5. Verify split layout stacks below 900px
6. Verify nav collapses at 768px
7. Verify bento grid: 4-col → 2-col → 1-col
8. Verify text doesn't truncate (check long words)
9. Verify images scale correctly (object-fit)
10. Verify glass performance stays within budget

Edge cases:
- Exactly 640px, 768px, 961px, 1280px (boundary values)
- 1px below each breakpoint
- 1px above each breakpoint
- Very long text content (no overflow)
- Very short viewport (landscape phone)
```

### 3.5 Modal/Drawer Open/Close Animations

```text
Modal:
1. Click trigger element
2. Verify overlay fades in (--ds-motion-overlay-duration: 0.3s)
3. Verify modal scales from --ds-motion-overlay-scale (0.96) to 1
4. Verify timing uses --ds-motion-overlay-timing (swift ease)
5. Verify focus moves to modal
6. Verify background scroll is locked
7. Press Escape
8. Verify modal scales back to 0.96, overlay fades out
9. Verify focus returns to trigger element

Drawer (if implemented):
1. Click trigger
2. Verify drawer slides in from edge
3. Verify overlay appears behind drawer
4. Close via Escape or close button
5. Verify drawer slides out, overlay fades
6. Verify focus returns to trigger

Reduced motion:
1. Enable prefers-reduced-motion
2. Open modal — should appear instantly (0.01ms duration)
3. Close modal — should disappear instantly
4. No scale animation
```

### 3.6 Form Validation States

```text
For each form input:
1. Leave empty, submit → error state
   - Border changes to --alarm color
   - aria-invalid="true" set
   - Error message appears (aria-describedby links to it)
   - Focus moves to first invalid field

2. Enter invalid value, submit → error state
   - Same as above
   - Error message is specific ("Enter a valid email")

3. Enter valid value → error clears
   - Border returns to --line-2
   - aria-invalid removed
   - Error message disappears

4. Focus state
   - --ds-focus-ring applied (2px white + 4px accent)
   - Ring visible against both light and dark backgrounds

5. Disabled state
   - Visual: opacity reduced, cursor: not-allowed
   - Functional: cannot focus, cannot type
```

### 3.7 Toast Notification Queue

```text
Single toast:
1. Trigger success toast
2. Verify role="alert" or role="status"
3. Verify color: --ok (green)
4. Verify auto-dismiss after timeout
5. Verify dismiss animation (fade out)
6. Verify aria-live region announces content

Queue behavior:
1. Trigger 3 toasts rapidly
2. Verify all 3 visible (stacked)
3. Verify newest on top (highest z-index)
4. Verify each dismisses independently
5. Verify screen reader announces each

Edge cases:
- Trigger 10+ toasts → verify no overflow (scroll or cap)
- Trigger same message twice → dedup or stack?
- Toast during modal → verify toast appears above modal
- Toast on mobile → verify positioning within viewport
```

### 3.8 Keyboard Navigation Flow

```text
Full page tab test:
1. Start at page load
2. First Tab → "Skip to main content" link (if present)
3. Continue tabbing through nav links
4. Tab into main content → first interactive element
5. Tab through all panels, buttons, links
6. Verify focus ring visible at every step
7. Verify tab order = reading order (left-to-right, top-to-bottom)

Modal focus trap:
1. Tab to modal trigger, activate
2. Tab through modal content → focus stays inside
3. Shift+Tab from first element → wraps to last
4. Tab from last element → wraps to first
5. Escape → closes modal, focus returns to trigger

Dropdown/menu:
1. Activate with Enter or Space
2. Arrow keys navigate items
3. Enter selects item
4. Escape closes menu
5. Focus returns to trigger

Skip links:
1. First Tab shows skip link
2. Activate skip link → focus jumps to main content
3. Verify skip link hidden when not focused
```

---

## 4. Performance Budgets

### 4.1 CSS Bundle

| Metric | Budget | How to Measure |
|---|---|---|
| Total CSS (raw) | < 100KB | `find . -name '*.css' \| xargs cat \| wc -c` |
| Total CSS (gzip) | < 50KB | `cat *.css \| gzip -c \| wc -c` |
| Individual token file | < 5KB | Per-file check |
| Unused CSS | < 20% | Chrome Coverage tab |

**Budget check script:**

```bash
#!/bin/bash
# scripts/check-css-budget.sh

BUDGET_RAW=102400   # 100KB
BUDGET_GZIP=51200   # 50KB

CSS_DIR="./tokens ./components ./layouts ./materials"
RAW_SIZE=$(cat $CSS_DIR/**/*.css | wc -c)
GZIP_SIZE=$(cat $CSS_DIR/**/*.css | gzip -c | wc -c)

echo "CSS Bundle Size Report"
echo "======================"
echo "Raw:   ${RAW_SIZE} bytes (budget: ${BUDGET_RAW})"
echo "Gzip:  ${GZIP_SIZE} bytes (budget: ${BUDGET_GZIP})"

if [ "$RAW_SIZE" -gt "$BUDGET_RAW" ]; then
  echo "FAIL: Raw CSS exceeds budget"
  exit 1
fi

if [ "$GZIP_SIZE" -gt "$BUDGET_GZIP" ]; then
  echo "FAIL: Gzipped CSS exceeds budget"
  exit 1
fi

echo "PASS: All CSS budgets met"
```

### 4.2 Render Performance

| Metric | Budget | Tool |
|---|---|---|
| First Paint (FP) | < 1.5s | Lighthouse, Playwright |
| First Contentful Paint (FCP) | < 2.0s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Time to Interactive (TTI) | < 3.0s | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |

### 4.3 Glass Performance

| Metric | Budget | Measurement |
|---|---|---|
| FPS with glass panels | >= 55fps | `requestAnimationFrame` counter |
| Composite layers | < 20 total | DevTools → Layers |
| Glass panels (desktop) | <= 8 | Visual count |
| Glass panels (mobile) | <= 3 | Visual count + CSS `:nth-child` fallback |
| Glass panels (small mobile) | <= 2 | CSS fallback in glass-performance.css |
| Blur radius (mobile) | blur(8px) max | Computed style check |
| `backdrop-filter` animation | Banned | Code review |

### 4.4 Mobile Budgets

| Metric | High-end | Mid-range | Low-end |
|---|---|---|---|
| TTI | < 2s | < 3s | < 4s |
| FPS (scrolling) | 60fps | 60fps | 30fps acceptable |
| FPS (glass) | 60fps | 55fps | 30fps acceptable |
| Glass panels | 3 | 2 | 1 |
| JS heap | < 5MB | < 8MB | < 12MB |

---

## 5. Regression Prevention

### 5.1 CI Pipeline

**GitHub Actions workflow:**

```yaml
# .github/workflows/test.yml
name: Vertex Design System Tests

on: [push, pull_request]

jobs:
  token-lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint design tokens
        run: |
          # Verify all --ds-* references resolve
          USED=$(grep -roh -- '--ds-[a-z0-9-]*' components/ layouts/ materials/ | sort -u)
          DEFINED=$(grep -oh -- '--ds-[a-z0-9-]*' tokens/*.css | sort -u)
          UNRESOLVED=$(comm -23 <(echo "$USED") <(echo "$DEFINED"))
          if [ -n "$UNRESOLVED" ]; then
            echo "Unresolved tokens:"
            echo "$UNRESOLVED"
            exit 1
          fi

  css-budget:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check CSS bundle size
        run: bash scripts/check-css-budget.sh

  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - name: Run axe-core tests
        run: npx playwright test tests/a11y/

  visual-regression:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - name: Visual regression tests
        run: npx playwright test tests/visual/
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: visual-diffs
          path: tests/visual/test-results/

  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - name: Performance budget tests
        run: npx playwright test tests/performance/
```

### 5.2 Pre-commit Hooks

```bash
#!/bin/bash
# .husky/pre-commit

# 1. Token consistency
echo "Checking token consistency..."
USED=$(git diff --cached --diff-filter=ACM -- '*.css' | grep -oh -- '--ds-[a-z0-9-]*' | sort -u)
DEFINED=$(grep -oh -- '--ds-[a-z0-9-]*' tokens/*.css | sort -u)
UNRESOLVED=$(comm -23 <(echo "$USED") <(echo "$DEFINED"))
if [ -n "$UNRESOLVED" ]; then
  echo "ERROR: Unresolved tokens in staged changes:"
  echo "$UNRESOLVED"
  exit 1
fi

# 2. No hardcoded colors (all colors must use tokens)
HARDCODED=$(git diff --cached --diff-filter=ACM -- '*.css' | grep -E '^\+.*#[0-9a-fA-F]{3,8}' | grep -v 'var(' | grep -v '^\+\+\+')
if [ -n "$HARDCODED" ]; then
  echo "WARNING: Hardcoded colors found (use --ds-* tokens instead):"
  echo "$HARDCODED"
  exit 1
fi

# 3. No banned animations
BANNED=$(git diff --cached --diff-filter=ACM -- '*.css' | grep -E '^\+.*animation.*spin|^\+.*animation.*rotate|^\+.*parallax')
if [ -n "$BANNED" ]; then
  echo "ERROR: Banned animation detected:"
  echo "$BANNED"
  exit 1
fi

# 4. CSS size check
TOTAL=$(cat tokens/*.css components/*.css layouts/*.css materials/*.css 2>/dev/null | wc -c)
if [ "$TOTAL" -gt 102400 ]; then
  echo "ERROR: CSS bundle exceeds 100KB raw"
  exit 1
fi
```

### 5.3 Design Token Linting

**stylelint config for token enforcement:**

```json
{
  "plugins": ["stylelint-declaration-strict-value"],
  "rules": {
    "scale-unlimited/declaration-strict-value": [
      ["/color$/", "fill", "stroke"],
      {
        "ignoreValues": ["transparent", "currentColor", "inherit", "initial", "unset"],
        "disableFix": true,
        "message": "Use a --ds-* or material token instead of a hardcoded color."
      }
    ],
    "declaration-property-value-disallowed-list": {
      "backdrop-filter": ["/blur\\((?!\\d+px\\))/.*/"],
      "animation-name": ["/spin/", "/rotate/", "/parallax/"]
    }
  }
}
```

**Token naming convention linter:**

```bash
#!/bin/bash
# scripts/lint-token-names.sh

# Verify token naming conventions:
# - Colors: --ds-{scale}-{step} or --ds-{semantic}
# - Spacing: --geist-space-{multiplier}x
# - Glass: --glass-{property}
# - Material: --{property} (short names, no prefix)

echo "Checking token naming conventions..."

# Flag any --ds-* tokens defined outside tokens/ directory
EXTERNAL=$(grep -rn '^\s*--ds-' components/ layouts/ materials/ 2>/dev/null | grep ':')
if [ -n "$EXTERNAL" ]; then
  echo "WARNING: --ds-* tokens defined outside tokens/ directory:"
  echo "$EXTERNAL"
  echo "Material tokens should use short names (--bg-000, --text-hi, etc.)"
fi

# Flag material tokens defined in tokens/ directory
MATERIAL_IN_TOKENS=$(grep -n '^\s*--bg-\|--text-hi\|--text-md\|--text-lo\|--line\b\|--accent' tokens/*.css 2>/dev/null)
if [ -n "$MATERIAL_IN_TOKENS" ]; then
  echo "WARNING: Material-level tokens found in tokens/ directory:"
  echo "$MATERIAL_IN_TOKENS"
  echo "Material tokens belong in materials/*.css"
fi
```

### 5.4 Visual Diff Thresholds

```ts
// playwright.config.ts — global visual diff settings
export default defineConfig({
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,   // 1% of pixels can differ
      maxDiffPixels: 100,        // or max 100 pixels total
      threshold: 0.2,            // per-pixel color difference threshold
      animations: 'disabled',    // freeze animations for stable screenshots
    },
  },
});
```

**When to update baselines:**

```text
Update visual baselines when:
- A design token value intentionally changes
- A new component variant is added
- A material's color palette is updated
- Layout spacing is intentionally adjusted

Do NOT update baselines when:
- CI fails and you're "just trying to fix it"
- Browser version update causes minor rendering diffs (investigate first)
- Font loading timing causes intermittent diffs (add wait)
```

**Baseline update workflow:**

```bash
# Review diffs before updating
npx playwright test tests/visual/ --update-snapshots

# Commit baselines separately
git add tests/visual/__screenshots__/
git commit -m "test: update visual baselines for [reason]"
```

---

## 6. Test File Structure

```
vertex-industrial-geist/
├── TESTING.md                          # This document
├── scripts/
│   ├── check-css-budget.sh            # CSS size budget check
│   ├── lint-token-names.sh            # Token naming convention linter
│   └── check-contrast.sh              # Contrast ratio checker
├── tests/
│   ├── a11y/
│   │   └── axe.spec.ts               # axe-core accessibility tests
│   ├── visual/
│   │   ├── materials.spec.ts          # Per-material snapshots
│   │   ├── theme.spec.ts              # Dark/light theme snapshots
│   │   ├── responsive.spec.ts         # Breakpoint snapshots
│   │   └── __screenshots__/           # Baseline snapshots
│   ├── performance/
│   │   ├── budgets.spec.ts            # FP, FCP, TTI checks
│   │   └── glass-fps.spec.ts         # Glass panel FPS test
│   └── e2e/
│       ├── button-states.spec.ts      # Button interaction states
│       ├── theme-switch.spec.ts       # Theme transition test
│       ├── material-switch.spec.ts    # Material switching test
│       ├── keyboard-nav.spec.ts       # Keyboard navigation flow
│       ├── glass-overlay.spec.ts      # Glass on backgrounds
│       ├── responsive-grid.spec.ts    # Grid reflow test
│       ├── form-validation.spec.ts    # Form validation states
│       └── toast.spec.ts             # Toast notification queue
└── playwright.config.ts               # Playwright configuration
```

---

## 7. Quick Reference

### Before Every PR

```bash
# 1. Token lint
bash scripts/lint-token-names.sh

# 2. CSS budget
bash scripts/check-css-budget.sh

# 3. Visual regression
npx playwright test tests/visual/

# 4. Accessibility
npx playwright test tests/a11y/

# 5. E2E
npx playwright test tests/e2e/

# 6. Performance
npx playwright test tests/performance/
```

### Critical Numbers

| What | Value | Source |
|---|---|---|
| CSS gzipped budget | < 50KB | Section 4.1 |
| First Paint | < 1.5s | Section 4.2 |
| Time to Interactive | < 3s | Section 4.2 |
| Glass FPS | >= 55fps | Section 4.3 |
| Mobile glass panels | <= 3 | glass-performance.css |
| Contrast (body text) | >= 4.5:1 | WCAG 2.1 AA |
| Contrast (large text) | >= 3:1 | WCAG 2.1 AA |
| Visual diff threshold | 1% pixels | Section 5.4 |
| Breakpoints | 640, 768, 961, 1280 | tokens/spacing.css |

---

*Vertex Industrial Design System v1.0 — Testing Strategy*
*Last updated: 2026-06-06*
