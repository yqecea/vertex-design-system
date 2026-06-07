# Benchmark Grid Quality Analysis

Date: 2026-06-06

## Method
I reviewed the live page HTML and class structure for each benchmark site, then cross-checked the top-level layout, typography, borders, motion hooks, and responsive tokens.

**Industrial feel score** = 7 facets × 0-3 (21 max):
- Grid discipline
- Border / hairline discipline
- Section framing
- Typography pairing
- Component density control
- Responsive choreography
- Motion quality

Glass is analyzed separately, but it does not add directly to the score.

## Scoreboard
| Site | Score | Read |
|---|---:|---|
| CommandCode.ai | 19/21 | Best “developer-taste” industrial system; noisy but disciplined |
| Supermemory.ai | 18/21 | Strong editorial hierarchy with clean modular sections |
| Opencode.ai | 12/21 | Clear and calm, but intentionally less grid-forward |
| Unkey.dev | 20/21 | Strongest product-grid precision and system clarity |
| ZeroLeaks.ai | 17/21 | Great security-console framing; a little less layered than the leaders |
| OYSANA landing | 16/21 | Best premium craft reference; more luxury than industrial |

## Site-by-site analysis

### 1) CommandCode.ai
**Grid structure:** Visible but partially hidden by noise and overlays. The DOM uses explicit split-grid structures like `grid grid-cols-1 sm:grid-cols-2 divide-x divide-border`, plus a fixed desktop shell (`w-[1189px]`). That makes the structure feel technical, even when the surface is busy.

**Border usage:** Heavy hairline discipline. I saw `border-y border-border`, thin icon chips, small outlined buttons, and repeated 1px separators. This is one of the strongest “industrial” signals on the list.

**Section framing:** Modular one-page storytelling. Hero, feature clusters, community block, CTA block. The framing is chapter-like, not freeform.

**Glass usage:** Almost none. It prefers opaque black, overlays, and texture instead of blur.

**Typography pairing:** Geist + Geist Mono. The monospace accent and display weight give it a coding-lab tone.

**Component density:** High, but controlled. Many icons, pills, and status-like microcomponents without collapsing into clutter.

**Responsive behavior:** Good. Navigation collapses cleanly, hero content reflows, and the split sections stack well.

**Animation quality:** Strong. Scroll reveal, flicker text, animated buttons, and subtle motion effects feel productized rather than gimmicky.

**What it does well:** Taste + technical identity + hairline discipline.

**What Vertex can learn:** Use noise and linework as structure, not decoration.

**Industrial feel:** 19/21

---

### 2) Supermemory.ai
**Grid structure:** Clearly visible. The page is built like an editorial product system: centered hero, container-edge sections, and many card grids. The nav itself is a three-part grid, which sets the tone early.

**Border usage:** Clean but less aggressive than CommandCode/Unkey. Borders support the layout instead of dominating it.

**Section framing:** Excellent. Sections are named and staged like a narrative: primitives, benchmarks, use cases, etc. It reads like a structured product manifesto.

**Glass usage:** Minimal. A little blur in navigation/dropdowns, but the page is mostly solid-surface and sharp.

**Typography pairing:** Space Grotesk + DM Sans. Great pairing for a modern infra product: expressive headline, calm body.

**Component density:** Moderate-high. Plenty of cards and nested examples, but enough whitespace to keep it readable.

**Responsive behavior:** Very good. Big type scales down cleanly; the page keeps its hierarchy on smaller screens.

**Animation quality:** Mostly restrained. Motion is there, but the page relies more on type and spacing than animation.

**What it does well:** Hierarchy and narrative pacing.

**What Vertex can learn:** Use section naming and staged reveal to make dense material feel easier.

**Industrial feel:** 18/21

---

### 3) Opencode.ai
**Grid structure:** Mostly hidden. The page leans on simple containers and stacked sections rather than visible column systems. It feels intentionally spare.

**Border usage:** Light. Far fewer obvious hairline frames than the other benchmarks.

**Section framing:** Clear but minimal: hero, explanation, privacy, FAQ, signup. It’s a straight line.

**Glass usage:** Basically none.

**Typography pairing:** IBM Plex Sans / Mono / Serif family stack. It gives the site a credible, open-source, terminal-friendly personality without trying too hard.

**Component density:** Low to moderate. This is a clarity-first page, not a chrome-heavy one.

**Responsive behavior:** Good in the sense that it doesn’t overcomplicate the mobile layout.

**Animation quality:** Functional, not flashy.

**What it does well:** Clarity, trust, and restraint.

**What Vertex can learn:** Not every page needs maximal industrial styling; sometimes the best move is to reduce visual noise.

**Industrial feel:** 12/21

---

### 4) Unkey.dev
**Grid structure:** Very visible and very disciplined. This is the most “systemic” page in the set. It uses strong containers, precise 2-column sections, a sticky top bar, and a full-screen hero with layered media.

**Border usage:** Excellent hairline discipline. Strong 1px framing on nav, cards, menus, and module boundaries. Borders feel like part of the product language.

**Section framing:** Best-in-class. Hero → proof → capability grid → workflow blocks. Each section has a clear job.

**Glass usage:** Minimal. It prefers hard surfaces and contrast over frosted effects.

**Typography pairing:** Inter + JetBrains Mono. Very credible for a modern infra/product site.

**Component density:** High, but highly organized. The page can show lots of information without feeling busy.

**Responsive behavior:** Excellent. Hero media swaps across breakpoints, nav collapses cleanly, and sections adapt without layout drama.

**Animation quality:** Very polished. Logo marquee, hover transitions, and media motion feel mature.

**What it does well:** Product-grade hierarchy and precision.

**What Vertex can learn:** Use a strong grid spine and let the content sit inside it cleanly.

**Industrial feel:** 20/21

---

### 5) ZeroLeaks.ai
**Grid structure:** Moderately visible. The design uses strong framing, background linework, and layered panels more than explicit multi-column density.

**Border usage:** Good. The site leans on technical outlines, stroke lines, and hard-edged panels.

**Section framing:** Strong security-story structure: hero, trust, research, scanner output, how it works, pricing, FAQ.

**Glass usage:** Present, but restrained. There is blur/backdrop treatment in a few places, but it never becomes the main aesthetic.

**Typography pairing:** Geist / InterDisplay / Geist Mono / Figma Hand. This gives it a security-lab + product + human touch blend.

**Component density:** Moderate. Enough detail to feel credible, not so much that it loses focus.

**Responsive behavior:** Good. The hero and module stacks compress in a straightforward way.

**Animation quality:** Solid, especially in the scanner/log framing and reveal pacing.

**What it does well:** Security-console atmosphere and evidence-driven framing.

**What Vertex can learn:** Use log-style content blocks to make technical proof feel tangible.

**Industrial feel:** 17/21

---

### 6) OYSANA landing
**Grid structure:** Very visible, but it reads as premium hospitality rather than dev-tool industrial. The DOM is full of full-width blocks, stacked imagery, and heavy section composition.

**Border usage:** Less about hairlines, more about atmosphere, shadows, and masked layering. It still uses linework, but it is softer and more editorial.

**Section framing:** Excellent. The pacing feels cinematic: large hero, deep imagery, feature blocks, facilities, FAQ.

**Glass usage:** Soft atmospheric blur and layered overlays rather than explicit glass UI.

**Typography pairing:** Cormorant Garamond + sans companions. Strong luxury contrast and excellent hierarchy.

**Component density:** High, but spread across large visual spaces.

**Responsive behavior:** Mature and layout-aware, with many visibility switches and responsive typography controls.

**Animation quality:** Richer than the dev-tool sites, especially in scroll presentation and image-driven transitions.

**What it does well:** Premium feel, pacing, and visual confidence.

**What Vertex can learn:** How to make a page feel expensive without overusing effects.

**Industrial feel:** 16/21

## Common patterns across all sites
- One dominant hero, then structured proof sections.
- Strong breakpoint-aware typography scaling.
- Very limited glass; most rely on solid surfaces + linework.
- Borders are used as system pieces, not decoration.
- Motion is restrained: hover, reveal, marquee, media loop, or log-style accents.
- Most sites keep density high but cap each module at one clear job.

## Unique innovations per site
- **CommandCode:** taste-learning concept + noisy terminal-like visual language.
- **Supermemory:** narrative sectioning around primitives, benchmarks, and use cases.
- **Opencode:** open-source clarity with almost no visual friction.
- **Unkey:** dashboard-grade product imagery inside a polished marketing shell.
- **ZeroLeaks:** security scanner/log aesthetic that makes risk feel real.
- **OYSANA:** luxury editorial pacing and premium image choreography.

## Recommended grid approach for Vertex
1. **Use a strict 12-column desktop grid** with a centered content spine.
2. **Reserve hairlines for structure**: section borders, card separators, nav dividers.
3. **Keep glass rare**: only for overlays, menus, or modal surfaces.
4. **Pair one sans + one mono** for product credibility; add a display face only if Vertex needs a signature headline voice.
5. **Let hero and proof sections break out full-bleed**, but keep the majority of the page inside a consistent container.
6. **Use density intentionally**: 2-up cards by default, 3-up only for proof/logos/metrics.
7. **Animate with discipline**: hover lifts, entrance reveals, and one marquee/log strip are enough.

**Best target mix for Vertex:** Unkey’s grid precision + CommandCode’s hairline grit + OYSANA’s premium pacing.
