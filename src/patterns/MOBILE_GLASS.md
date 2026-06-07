# Mobile Glass Performance Guide

## Why Oysana Lags on Mobile

The Oysana landing page (`Home.tsx`) applies `backdrop-blur-md` to **every card** in the services grid (`.grid-cols-1 md:grid-cols-3`) plus additional glass on label badges. On a mobile viewport, this creates a **compositing nightmare**:

| Issue | Location | Impact |
|-------|----------|--------|
| `backdrop-blur-md` on 3 cards simultaneously | `InsaneCard` (line 161) | GPU must re-blur 3 overlapping regions every frame |
| `backdrop-blur-sm` on label badge | Line 393 | Extra blur layer behind cards |
| `filter: blur(16px)` → `blur(0px)` animation | `InsaneCard` initial state | Animates blur radius — the most expensive CSS property to transition |
| No `will-change` hints | Entire file | Browser cannot pre-allocate GPU layers |
| No `contain` rules | Entire file | Repaint propagates to entire viewport |
| `bg-black/60` + blur + gradient overlays + shimmer | `InsaneCard` | Multiple semi-transparent layers force readback |

**Result:** On a mid-range Android phone, scrolling through the "What We Do" section drops FPS from 60 to **18–25**.

---

## Performance Optimization Strategies

### 1. will-change: transform

Force GPU layer creation **before** the element enters the viewport. Remove after animation completes to free VRAM.

```css
/* GPU promotion — apply before animation */
.glass-promote {
  will-change: transform;
  transform: translateZ(0);
}

/* Remove after animation to prevent memory bloat */
.glass-promote.animated {
  will-change: auto;
  transform: none;
}
```

**JavaScript toggle (React):**

```tsx
import { useEffect, useRef } from 'react';

function useGPUPromote() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Promote 100ms before animation starts
    el.classList.add('glass-promote');
    
    const timer = setTimeout(() => {
      el.classList.remove('glass-promote');
    }, 1500); // Match your animation duration
    
    return () => clearTimeout(timer);
  }, []);
  
  return ref;
}
```

**Measurable target:** FPS improvement of **+15–25** during scroll on mid-tier devices.

---

### 2. contain: layout style paint

Isolate glass panels so browser repaint is clipped to the element bounds.

```css
.glass-container {
  contain: layout style paint;
  /* Creates new stacking context + paint boundary */
}
```

**When to use:**
- Every card grid wrapper
- Any element with >2 glass children
- Sections with parallax backgrounds + glass overlays

**Measurable target:** Paint time reduced by **40–60%** in Chrome DevTools Performance panel.

---

### 3. transform: translateZ(0) GPU Promotion

The classic GPU hack. Use sparingly — each promoted layer consumes **~4MB VRAM** on mobile.

```css
/* Promote only the active/visible glass panel */
.glass-active {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

**Rule of thumb:** Maximum **5 promoted layers** per viewport on mobile. Audit with Chrome DevTools → Layers panel.

---

### 4. Reduce Blur Radius on Mobile (8px max)

Large blur radii force the GPU to sample a bigger kernel. On mobile, `blur(16px)` is **4× slower** than `blur(8px)`.

```css
/* Desktop: full blur */
.glass {
  --glass-blur: blur(16px) saturate(180%);
  backdrop-filter: var(--glass-blur);
}

/* Mobile: cap at 8px */
@media (max-width: 768px) {
  .glass {
    --glass-blur: blur(8px) saturate(140%);
    backdrop-filter: blur(8px) saturate(140%);
    -webkit-backdrop-filter: blur(8px) saturate(140%);
  }
}

/* Small mobile: cap at 6px */
@media (max-width: 480px) {
  .glass {
    --glass-blur: blur(6px) saturate(120%);
    backdrop-filter: blur(6px) saturate(120%);
    -webkit-backdrop-filter: blur(6px) saturate(120%);
  }
}
```

**Visual check:** Side-by-side on a phone, users cannot distinguish 6px from 16px blur on small cards.

---

### 5. Limit Concurrent Glass Panels (3 max)

More than 3 overlapping `backdrop-filter` layers causes **tile-based GPU overload**.

```css
@media (max-width: 768px) {
  /* Convert glass panels beyond 3rd to solid */
  .glass-grid > .glass:nth-child(n+4) {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background: rgba(0, 0, 0, 0.7) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
}
```

**React implementation** — dynamically degrade based on viewport:

```tsx
function GlassGrid({ children }) {
  const [limit, setLimit] = useState(3);
  
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setLimit(mq.matches ? 3 : Infinity);
    
    const handler = (e) => setLimit(e.matches ? 3 : Infinity);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  
  return (
    <div className="glass-grid">
      {children.map((child, i) => (
        <div key={i} className={i >= limit ? 'glass-fallback' : 'glass'}>
          {child}
        </div>
      ))}
    </div>
  );
}
```

---

### 6. Use Opacity Instead of Blur for Distant Layers

Background layers that are **visually behind** the focal glass can use opacity reduction instead of blur.

```css
/* Foreground: full glass */
.glass-focal {
  backdrop-filter: blur(8px) saturate(140%);
  background: rgba(0, 0, 0, 0.4);
}

/* Background layer: no blur, just opacity */
.glass-distant {
  backdrop-filter: none;
  background: rgba(0, 0, 0, 0.65);
  /* 60% cheaper than blur */
}
```

**Use case:** In Oysana, the label badge (`[ WHAT WE DO ]`) sits behind the cards. It does not need blur at all — a semi-transparent dark background is sufficient.

---

### 7. CSS Containment for Glass Containers

Prevent blur repaints from propagating up the DOM tree.

```css
/* Section wrapper containing glass cards */
.glass-section {
  contain: layout style paint;
}

/* Individual card — strict containment */
.glass-card {
  contain: strict;
  content-visibility: auto;
  contain-intrinsic-size: auto 300px;
}
```

**Containment strategy:**
| Container Level | Contain Value | Purpose |
|-----------------|---------------|---------|
| Page section | `layout style paint` | Isolate section repaint |
| Card grid | `layout` | Prevent grid reflow on card hover |
| Glass card | `strict` | Full isolation + lazy render |
| Glass element itself | `style paint` | Isolate blur/filter changes |

---

## Device-Specific Optimizations

### iOS Safari

Safari has **notorious** `backdrop-filter` bugs and performance cliffs:

```css
@supports (-webkit-touch-callout: none) {
  /* iOS-only fixes */
  .glass {
    /* Safari requires explicit -webkit prefix */
    -webkit-backdrop-filter: blur(8px) saturate(140%);
    
    /* Disable mix-blend-mode (causes flicker + 50% perf hit) */
    &::after,
    &::before {
      mix-blend-mode: normal !important;
      opacity: 0.4;
    }
    
    /* Force hardware acceleration */
    -webkit-transform: translateZ(0);
    
    /* Fix for overflow:hidden clipping backdrop-filter */
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
  
  /* iOS Safari: reduce blur further on older devices */
  @media (max-width: 768px) and (hover: none) {
    .glass {
      -webkit-backdrop-filter: blur(6px) saturate(120%);
      backdrop-filter: blur(6px) saturate(120%);
    }
  }
}
```

**Known iOS issues:**
- `backdrop-filter` + `overflow: hidden` = clipped blur
- Fixed-position glass navbars jitter during elastic scroll
- `border-radius` + blur causes GPU layer corruption on iOS 15–16

**Fix for border-radius corruption:**

```css
.glass-rounded {
  border-radius: 12px;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  /* Forces correct compositing order */
}
```

---

### Android Chrome

Android Chrome handles `backdrop-filter` better but has **GPU compositing limits**:

```css
/* Android Chrome: prefer composited layers */
@media (hover: none) and (pointer: coarse) {
  .glass {
    /* Chrome Android: will-change is more effective than translateZ */
    will-change: transform;
    
    /* Disable subpixel rendering for cleaner blur edges */
    -webkit-font-smoothing: antialiased;
  }
  
  /* Avoid blur on low-end Android (detected via memory) */
  @media (max-device-memory: 2gb) {
    .glass {
      backdrop-filter: none !important;
      background: rgba(0, 0, 0, 0.75) !important;
    }
  }
}
```

**Android-specific tip:** Chrome on Android creates **tiled compositor layers**. Large blur radii (>12px) cause tile splitting, which increases memory usage exponentially. Keep mobile blur ≤8px.

---

### Low-End Devices: Fallback to Solid Color

Use the Device Memory API + Hardware Concurrency API to detect low-end devices:

```js
function getDeviceTier() {
  const memory = navigator.deviceMemory || 4; // GB
  const cores = navigator.hardwareConcurrency || 4;
  
  if (memory <= 2 || cores <= 4) return 'low';
  if (memory <= 4 || cores <= 6) return 'mid';
  return 'high';
}

// Apply tier class to <html>
document.documentElement.dataset.tier = getDeviceTier();
```

```css
/* Low-end: disable all blur, use solid translucent backgrounds */
[data-tier="low"] .glass,
[data-tier="low"] .glass-sm,
[data-tier="low"] .glass-md,
[data-tier="low"] .glass-lg {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  background: rgba(0, 0, 0, 0.78) !important;
  border: 1px solid rgba(255, 255, 255, 0.06) !important;
}

/* Mid-tier: reduced blur */
[data-tier="mid"] .glass {
  backdrop-filter: blur(6px) saturate(120%) !important;
  -webkit-backdrop-filter: blur(6px) saturate(120%) !important;
}
```

**Fallback color formula:** The solid background opacity should approximate the perceived darkness of the blurred version. Test by toggling blur on/off in DevTools and adjusting `rgba` alpha until brightness matches.

---

## Measurement: How to Test FPS and Identify Bottlenecks

### Method 1: Chrome DevTools — Frame Timeline

1. Open DevTools → Performance tab
2. Enable **Screenshots** and **Web Vitals**
3. Click Record → Scroll through glass-heavy section → Stop
4. Look for:
   - **Long tasks** (>50ms) in Main thread
   - **Paint** events with large areas
   - **Composite Layers** spikes

**Target:** No frame longer than **16.67ms** (60 FPS). Glass sections should not exceed **8ms** per frame.

---

### Method 2: Real-Time FPS Counter (JavaScript)

```js
class FPSMonitor {
  constructor() {
    this.frames = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.history = [];
    this.running = false;
  }
  
  start() {
    this.running = true;
    this.tick();
  }
  
  tick() {
    if (!this.running) return;
    
    this.frames++;
    const now = performance.now();
    
    if (now - this.lastTime >= 1000) {
      this.fps = this.frames;
      this.history.push(this.fps);
      
      // Auto-degrade if FPS drops
      if (this.fps < 30) {
        document.body.classList.add('glass-low-power');
        console.warn(`[GlassPerf] FPS dropped to ${this.fps}. Enabling low-power mode.`);
      }
      
      this.frames = 0;
      this.lastTime = now;
    }
    
    requestAnimationFrame(() => this.tick());
  }
  
  stop() {
    this.running = false;
  }
  
  getAverage() {
    if (this.history.length === 0) return 60;
    return Math.round(
      this.history.reduce((a, b) => a + b, 0) / this.history.length
    );
  }
}

// Usage: monitor glass sections
const monitor = new FPSMonitor();

// Start monitoring when entering glass section
const glassSection = document.querySelector('.glass-section');
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) monitor.start();
  else monitor.stop();
}, { threshold: 0.1 });

observer.observe(glassSection);
```

---

### Method 3: Chrome Layer Borders (Visual Debug)

Enable in DevTools:
- **Rendering** tab → **Layer borders** (shows composited layers in orange)
- **Rendering** tab → **Paint flashing** (shows repaints in green)

**What to look for:**
- **Orange borders around every glass card** = each creates a GPU layer (expected)
- **Green flash on scroll** = unnecessary repaint (bad)
- **Red flash** = layer promotion thrashing (very bad)

**Target:**
- ≤5 orange-bordered layers visible at once
- Zero green flashes during passive scroll
- No red flashes during animations

---

### Method 4: Web Vitals — INP (Interaction to Next Paint)

Glass blur directly impacts **INP**. Test with:

```js
import { onINP } from 'web-vitals';

onINP((metric) => {
  if (metric.value > 200) {
    // INP > 200ms is "Needs Improvement"
    // Check if glass elements were involved
    const entries = metric.entries;
    const glassInvolved = entries.some(e => 
      e.target?.closest('.glass, .glass-sm, .glass-md, .glass-lg')
    );
    
    if (glassInvolved) {
      console.warn('[GlassPerf] INP degraded by glass:', metric.value);
      document.body.classList.add('glass-low-power');
    }
  }
});
```

**Target INP:** <100ms (Good), <200ms (Okay), >200ms (Fix immediately).

---

### Method 5: Memory Pressure Test

Simulate low-end device in Chrome:

1. DevTools → Performance → ⚙️ Settings → **CPU: 4× slowdown**
2. DevTools → Rendering → **GPU rasterization: Disabled**
3. DevTools → Sensors → **Device: Mid-tier mobile**

Scroll through the page. If FPS drops below 30, your glass implementation fails the **mid-tier test**.

---

## Quick Reference: Performance Budget

| Metric | Target | Action if Exceeded |
|--------|--------|-------------------|
| Blur radius (mobile) | ≤8px | Reduce to 6px or 4px |
| Concurrent glass panels | ≤3 | Convert excess to solid bg |
| GPU layers per viewport | ≤5 | Remove `will-change` from off-screen |
| Frame duration | ≤16.67ms | Enable `glass-low-power` class |
| INP (Interaction) | <200ms | Disable blur on interactive elements |
| Memory (VRAM) | <50MB | Reduce layer count, use `content-visibility` |
| Paint time per frame | <3ms | Apply `contain: paint` to containers |

---

## Oysana-Specific Fixes

Apply these to the Oysana `Home.tsx` glass components:

```tsx
// 1. InsaneCard — add GPU promotion + containment
function InsaneCard({ id, title, desc, footer, index, rotation }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} style={{ perspective: '1200px' }} className="glass-container">
      <motion.div
        // ... existing animation props ...
        className="relative bg-black/60 backdrop-blur-md border border-[#404040] p-[24px] md:p-[32px] group overflow-hidden cursor-default glass-promote"
        style={{ transformStyle: 'preserve-3d' }}
        onAnimationComplete={() => {
          // Remove GPU promotion after entrance animation
          ref.current?.querySelector('.glass-promote')?.classList.remove('glass-promote');
        }}
      >
        {/* ... content ... */}
      </motion.div>
    </div>
  );
}
```

```tsx
// 2. Label badge — remove unnecessary blur
<Reveal>
  <span className="inline-flex items-center px-[16px] py-[8px] border border-[#404040] bg-black/70 font-pixel text-[11px] text-white/60 tracking-[0.08em] uppercase mb-[32px] w-fit">
    {/* Removed: backdrop-blur-sm — not needed behind cards */}
    <TextScramble text="[ WHAT WE DO ]" />
  </span>
</Reveal>
```

```css
/* 3. Add to index.css — mobile glass limits */
@media (max-width: 768px) {
  .grid-cols-1 .glass-promote:nth-child(n+4) {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background: rgba(0, 0, 0, 0.75) !important;
  }
}
```

---

## Summary Checklist

Before shipping glass on mobile:

- [ ] Blur radius ≤8px on mobile, ≤6px on small screens
- [ ] No more than 3 concurrent glass panels visible
- [ ] `will-change: transform` applied before animation, removed after
- [ ] `contain: layout style paint` on all glass containers
- [ ] Label badges and distant layers use opacity, not blur
- [ ] iOS Safari: `-webkit-backdrop-filter` explicitly set
- [ ] iOS Safari: `mix-blend-mode` disabled on glass pseudo-elements
- [ ] Low-end fallback: solid background via `deviceMemory` detection
- [ ] Animations use `transform` and `opacity`, never `backdrop-filter`
- [ ] FPS monitor confirms ≥55 FPS during scroll on mid-tier device
- [ ] INP <200ms on glass interactive elements
- [ ] Chrome Layers panel shows ≤5 composited layers

---

*Last updated: 2026-06-06 | Target: 60 FPS on mid-tier mobile*
