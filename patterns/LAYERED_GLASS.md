# Layered Glass Architecture

How to stack glass panels without destroying performance.

---

## The Problem

Glass-on-glass stacking creates a **compositing nightmare**:

1. Each `backdrop-filter` element creates a new stacking context
2. Nested glass panels re-blur already-blurred content
3. GPU must composite N layers sequentially
4. On mobile, this drops FPS from 60 to **15-25**

**Oysana's mistake:** Applied `backdrop-blur-md` to **every card** in a 3-column grid. Result: 4+ simultaneous blur operations on mobile.

---

## The Solution: Visual Sublayers

Instead of nesting multiple `backdrop-filter` panels, use **one blur** + **visual sublayers**:

```
┌─────────────────────────────────────┐
│  Content (text, images, etc.)       │
├─────────────────────────────────────┤
│  Specular rim (::before)            │  ← gradient overlay, no blur
├─────────────────────────────────────┤
│  Edge glow (::after)                │  ← box-shadow, no blur
├─────────────────────────────────────┤
│  Glass surface (backdrop-filter)    │  ← ONE blur layer
├─────────────────────────────────────┤
│  Background content                 │
└─────────────────────────────────────┘
```

**Key rule:** Only the outermost pane is truly "glass." Inner panes use matte/opaque backgrounds.

---

## Z-Index Strategy

| Layer | Z-Index | Purpose |
|-------|---------|---------|
| Background | 0 | Page content |
| Glass base | 10 | `backdrop-filter` layer |
| Glass overlay | 20 | Content inside glass |
| Floating glass | 30 | Dropdowns, tooltips |
| Modal glass | 40 | Modal backdrop |
| Toast | 50 | Notifications |
| Nav | 100 | Fixed navbar |

```css
.glass-layer-1 { z-index: 10; }
.glass-layer-2 { z-index: 20; }
.glass-layer-3 { z-index: 30; }
.glass-nav     { z-index: 100; }
.glass-modal   { z-index: 40; }
```

---

## Progressive Enhancement

```css
/* Base: solid background (works everywhere) */
.glass-fallback {
  background: var(--ds-background-200, #111);
  border: 1px solid var(--ds-gray-alpha-400, rgba(255,255,255,0.06));
}

/* Enhanced: glass blur (where supported) */
@supports (backdrop-filter: blur(16px)) {
  .glass-fallback {
    background: var(--glass-bg, rgba(255,255,255,0.03));
    backdrop-filter: blur(16px) saturate(180%);
  }
}

/* Premium: liquid glass (full effects) */
@supports (backdrop-filter: blur(16px)) and (mix-blend-mode: screen) {
  .glass-fallback {
    /* Add specular highlights, glow, etc. */
  }
}
```

---

## Light Source Simulation

Simulate light passing through glass by placing a radial gradient **behind** the glass:

```css
.glass-lit {
  position: relative;
}

.glass-lit::before {
  content: '';
  position: absolute;
  inset: -20%;
  background: radial-gradient(
    600px circle at 20% 25%,
    rgba(255,255,255,0.08) 0%,
    transparent 55%
  );
  z-index: -1;
  pointer-events: none;
}
```

**Effect:** The glass appears to have a light source behind it, creating natural brightness variation.

---

## Edge Glow Without Extra DOM

Use `box-shadow` for edge glow — it doesn't create extra elements:

```css
.glass-glow {
  /* Outer glow + inner rim */
  box-shadow:
    0 0 24px -8px rgba(255,255,255,0.10),   /* outer */
    inset 0 0 20px -12px rgba(255,255,255,0.10); /* inner */
}
```

**Why not pseudo-elements?** `::before`/`::after` create new compositing layers. `box-shadow` is painted as part of the element.

---

## Liquid Glass Refraction

Fake refraction with animated gradients (not real light bending):

```css
.liquid-glass-refraction {
  background:
    linear-gradient(
      115deg,
      transparent 38%,
      rgba(255,255,255,0.08) 45%,
      transparent 50%,
      rgba(255,255,255,0.08) 55%,
      transparent 62%
    ),
    var(--glass-bg);
  background-size: 250% 250%, 100% 100%;
  animation: liquid-shift 10s linear infinite;
}

@keyframes liquid-shift {
  0%   { background-position: 0% 0%, 0 0; }
  100% { background-position: 100% 100%, 0 0; }
}
```

**Performance:** Animates `background-position` (GPU-friendly). Not true refraction, but reads as "liquid."

---

## Nested Glass Best Practices

### ❌ Wrong: Nested backdrop-filter

```html
<div class="glass">           <!-- blur #1 -->
  <div class="glass">         <!-- blur #2 (composites blur #1) -->
    <div class="glass">       <!-- blur #3 (composites blur #2) -->
      Content
    </div>
  </div>
</div>
```

**Result:** O(N²) compositing cost.

### ✅ Right: One blur + matte inner layers

```html
<div class="liquid-glass">    <!-- ONE blur -->
  <div class="matte-panel">   <!-- solid background -->
    <div class="matte-panel"> <!-- solid background -->
      Content
    </div>
  </div>
</div>
```

**Result:** O(1) blur cost.

---

## Performance Budgets

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Max glass panels | 8 | 3 |
| Max blur radius | 24px | 8px |
| Max simultaneous blurs | 4 | 2 |
| Frame budget | 16ms (60fps) | 16ms (60fps) |
| Memory budget | 512MB GPU | 256MB GPU |

---

## Testing Checklist

- [ ] Scroll through page with glass panels — no jank
- [ ] Test on mid-range Android — FPS stays >45
- [ ] Verify Safari doesn't flicker
- [ ] Test prefers-reduced-transparency fallback
- [ ] Confirm glass layers don't overlap >3 deep
- [ ] Measure with Chrome DevTools Performance tab
- [ ] Check GPU memory usage in about:gpu

---

## Summary

1. **One blur per stack** — never nest `backdrop-filter`
2. **Visual sublayers** — use `::before`/`::after` for specular/glow
3. **Z-index discipline** — predictable layering order
4. **Progressive enhancement** — solid fallback → blur → liquid
5. **Mobile limits** — max 3 glass panels, max 8px blur
6. **GPU containment** — `contain: layout style paint` on glass containers
7. **No blur animation** — animate opacity/transform only

*Part of the Vertex Industrial Geist design system.*
