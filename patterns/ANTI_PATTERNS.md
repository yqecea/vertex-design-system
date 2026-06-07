# Industrial Anti-Patterns

Complete catalog of failure modes from the industrial-design-frontend skill, integrated with Vertex/Geist constraints.

## The Seven Deadly Sins

### 1. GREEBLING — Fake Complexity
**What**: Random technical-looking elements (hex codes, coordinates, barcodes) without functional purpose.

**Why it fails**: Technical users spot fake data instantly. A random hex string `0xA7F3B2` that doesn't hash anything breaks trust.

**Fix with Geist**:
- Use real `--ds-*` token values in evidence slots
- If showing coordinates, use real locations
- If showing hashes, hash real data
- Every number must be plausible

### 2. COSTUME INDUSTRIAL — Decorating SaaS
**What**: Standard marketing page (hero + features + testimonials + CTA) with industrial decoration: dark bg, monospace labels, crosshairs.

**Why it fails**: Structure underneath is consumer SaaS. Industrial decoration on consumer skeleton creates cognitive dissonance.

**Fix with Geist**:
- Every section PROVES something (Evidence Rules)
- Use Geist's real components (terminal, code block, gauge) as evidence
- Layout must be structural, not marketing-flow

### 3. THE DARK MODE TRAP
**What**: Defaulting to dark because "industrial = dark."

**Why it fails**: Industrial is about ENGINEERED ORDER, not darkness. PRINTING material is light-mode-native.

**Fix with Geist**:
- Use `--ds-background-100` / `--ds-background-200` properly
- PRINTING material uses `#ffffff` canvas
- CASTING has warm concrete light variant
- Let material determine mode, not assumption

### 4. RAINBOW ACCENT
**What**: Using 3+ saturated colors for categories. Blue for AI, green for integrations, orange for performance.

**Why it fails**: Multi-accent palettes are consumer SaaS. Industrial systems have ONE accent.

**Fix with Geist**:
- ONE accent per material: `--ds-blue-700`, `--ds-teal-700`, `--ds-amber-700`
- Differentiate categories via opacity, icon shape, border treatments
- Never multiple hues on one page

### 5. THE GRADIENT
**What**: Gradient fills on backgrounds, buttons, hero sections.

**Why it fails**: Gradients suggest flowing, organic, consumer aesthetics. Industrial surfaces are FLAT.

**Fix with Geist**:
- Replace gradients with luminosity steps: `--ds-background-100` → `--ds-background-200`
- Max 8% luminosity directional lighting (simulating machined surface)
- Use `--ds-gray-alpha-*` for subtle transitions

### 6. DROP SHADOW DEPTH
**What**: `box-shadow: 0 4px 24px rgba(0,0,0,0.15)` for card elevation.

**Why it fails**: Drop shadows imply floating layers. Industrial panels are BOLTED to the chassis.

**Fix with Geist**:
- Panel separation: `border: 1px solid var(--ds-gray-alpha-400)`
- Edge lighting: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)`
- Accent emphasis: `border-left: 2px solid var(--accent)`
- Glass overlay for depth (NOT shadows)

### 7. ORGANIC MOTION
**What**: Spring animations, elastic bounce, ease-in-out over 400ms+.

**Why it fails**: Organic motion implies biological systems. Industrial motion is MECHANICAL.

**Fix with Geist**:
- Use `--ds-motion-timing-swift`: `cubic-bezier(.175, .885, .32, 1.1)`
- Max 300ms duration
- No bounce, no spring, no overshoot
- `linear` or fast-deceleration easing only

---

## Context-Specific Anti-Patterns

### Hero Section
| ❌ Wrong | ✅ Right |
|---|---|
| Full-screen abstract 3D shape | Split hero with evidence artifact (terminal, dashboard) |
| "AI particles" or floating dots | Real product screenshot or functional diagram |
| Centered headline with no evidence | Terminal window with real command output |
| Gradient overlay on stock photo | Geist Grid with visible guides behind content |

### Feature Sections
| ❌ Wrong | ✅ Right |
|---|---|
| Alternating left-right marketing blocks | Bento grid with bounded tiles |
| Cards with decorative icons | Panels with real functional artifacts |
| Masonry layout | 12-column grid with 1px seams |
| "Benefit" descriptions | Evidence slots with real data |

### Typography
| ❌ Wrong | ✅ Right |
|---|---|
| Serif fonts | Geist Sans (Structure) + Geist Mono (Instrument) |
| Handwritten/script fonts | Never use |
| All-monospace body copy | Structure voice for reading, Instrument for data |
| Emoji (🚀⚡✨) | Never use |

### Navigation
| ❌ Wrong | ✅ Right |
|---|---|
| Floating pill-shaped menu | Solid bottom-bordered utility bar |
| Transparent header with soft blur | Glass navbar with `blur(12px)` + visible border |
| Hamburger on desktop | Dense links, hide nothing |

### Footer
| ❌ Wrong | ✅ Right |
|---|---|
| Large marketing footer with social icons | System terminal: columns + status + version |
| "Stay updated!" newsletter | Console strip with build info |
| Tagline and testimonials | `© 2026 · BUILD v3.2.1 · NODE: US-EAST-1` |

### Copy
| ❌ Wrong | ✅ Right |
|---|---|
| "Get Started" | `Initialize` · `Deploy` · `Build` |
| "Something went wrong" | `ERR_CODE · DESCRIPTION · RETRY` |
| "Welcome back!" | `SESSION: ACTIVE` or silence |
| Exclamation marks | Only `! WARNING` for genuine alerts |

---

## The Convergence Self-Check

Before shipping, answer honestly:

1. **Could I swap the brand for "Linear" or "Vercel"?**
   - If yes → you've built consumer SaaS with dark theme. FAIL.

2. **Is the only "industrial" element dark bg + monospace?**
   - If yes → costume, not machine. FAIL.

3. **Does every section flow as marketing → illustration?**
   - If yes → brochure, not control panel. FAIL.

4. **Would a manufacturing engineer trust this?**
   - If yes → genuinely industrial. PASS.

5. **If I removed all color, does structure say "engineered"?**
   - If yes → structural quality, not cosmetic. PASS.

---

## Case Study References

### Scoring Guide (0-3 per category)

| Quality | Question | Score |
|---|---|---|
| Structure | Is the grid visible? Module boundaries explicit? | 0-3 |
| Evidence | Does hero contain functional proof artifact? | 0-3 |
| Color | Is there ONE accent doing ALL signaling? | 0-3 |
| Typography | Clear STRUCTURE + INSTRUMENT voice split? | 0-3 |
| Copy | Vocabulary feels operational, not promotional? | 0-3 |
| Motion | Animations state-confirming, not decorative? | 0-3 |
| Consequence | Would an engineer trust this to control something? | 0-3 |

**18-21**: genuinely industrial
**12-17**: industrial with compromises
**7-11**: SaaS with industrial inflections
**0-6**: not industrial

### Reference Sites

| Site | Material | Key Quality |
|---|---|---|
| **Unkey** | MACHINING | API products should let code BE the hero |
| **Supermemory** | MACHINING/PLATING | Show product in actual interface form |
| **ConductorAI** | CALIBRATING/PRINTING | Workflow as operational machinery |
| **ZeroLeaks** | CALIBRATING | Security should look actively monitoring |
| **Linear** | N/A (anti-reference) | Premium minimalism ≠ industrial |
| **Vercel** | MACHINING | Evidence-first hero with terminal |
| **Stripe Docs** | PRINTING | Editorial precision, document hierarchy |
| **Fly.io** | WELDING | Structural transparency |
| **Railway** | PLATING | Dense panel system, routing metaphor |
| **Axiom** | CALIBRATING | Monitoring dashboard language |

---

*Anti-patterns extracted from industrial-design-frontend skill and adapted for Geist token system.*