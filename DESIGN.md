# JinoX AI — Design System & Visual Constitution

> **Mandate:** JinoX AI strictly adheres to a **Black & White (Monochrome Editorial)** visual language. All interface components, illustrations, icons, and document sections must maintain this aesthetic without introducing chromatic colors.

---

## 1. Design Philosophy

The JinoX AI visual identity is inspired by high-end scientific monographs, peer-reviewed clinical archives, and Swiss graphic design:
- **Maximum Editorial Contrast:** Deep charcoal-black surfaces (`#09090b`) juxtaposed against crisp paper-white (`#ffffff`) and subtle zinc washes (`#f4f4f5`).
- **Zero Chromatic Slop:** No saturated greens, blues, teals, oranges, or rainbow accents. Hierarchy is communicated through typographic scale, weight, whitespace, and hairline borders—not artificial neon colors.
- **Scientific Rigor & Clarity:** Monospace technical labels (`IBM Plex Mono`) paired with elegant display serif headings (`DM Serif Display`) and geometric body text (`Syne`).

---

## 2. Color Palette & Variables

All styling must reference or conform to these exact monochrome values:

| Variable | Hex Value | Role & Usage |
|---|---|---|
| `--ink` | `#09090b` | Dominant dark surface (Hero cover, spotlight cards, sticky header, dark text) |
| `--paper` | `#ffffff` | Pure white background for document body, high-contrast primary CTA buttons |
| `--cream` | `#f4f4f5` | Secondary background for callouts, table alternates, vision sections |
| `--rule` | `#e4e4e7` | Standard hairline border dividing table cells, sections, and cards |
| `--muted` | `#71717a` | Secondary descriptive text, footnotes, table category tags |
| `--gold` | `#a1a1aa` | Neutral gray uppercase eyebrow labels and subheadings |
| `--rust` | `#3f3f46` | Medium-dark zinc borders and numerical labels |
| `--rust-light` | `#e4e4e7` | Hairline grid borders on dark surfaces |
| `--jade` | `#18181b` | Secondary dark container background |

### Strict Prohibition
```css
/* ❌ FORBIDDEN in any stylesheet or JSX component */
--emerald: #10b981;
--cyan: #06b6d4;
--blue: #3b82f6;
text-emerald-*, text-teal-*, text-cyan-*, text-blue-*, text-green-*
bg-emerald-*, bg-blue-*, bg-green-*
```

---

## 3. Typography Hierarchy

| Style Role | Font Family | Size / Line Height | Tracking / Weight |
|---|---|---|---|
| **Primary Titles** | `DM Serif Display`, serif | `clamp(42px, 6vw, 78px)` / `1.05` | `-0.02em`, Regular / Italic |
| **Section Headings (H2)** | `DM Serif Display`, serif | `34px` / `1.15` | `-0.01em`, Regular |
| **Subheadings (H3)** | `Syne`, sans-serif | `13px` / `1.4` | `0.12em`, Bold (Uppercase) |
| **Body Copy** | `Syne`, sans-serif | `15px` / `1.7` | Normal, Regular (400) |
| **Technical Metadata** | `IBM Plex Mono`, monospace | `9px` – `11px` | `0.15em` – `0.25em`, Uppercase |
| **Statistical Metrics** | `DM Serif Display`, serif | `28px` – `42px` | Tight, Regular |

---

## 4. Component Standards

### 4.1 Buttons & CTAs
- **Primary Action (e.g., Live MVP Button):**
  - Background: Solid white `#ffffff`
  - Text: Charcoal black `#09090b` (`font-weight: 600`)
  - Border: 1px solid `#ffffff`
  - Hover: Background `#e4e4e7`, transform `-2px`
  - Live Indicator: Dark charcoal core (`#09090b`) with translucent ping animation
- **Secondary Action (e.g., Medium Vision Article):**
  - Background: Translucent white `rgba(255, 255, 255, 0.06)`
  - Text: Pure white `#ffffff`
  - Border: 1px solid `rgba(255, 255, 255, 0.25)`
  - Hover: Background `rgba(255, 255, 255, 0.14)`

### 4.2 Reading Progress & Sticky Navigation
- Progress Bar: Monochrome white `#ffffff` on `#09090b` header.
- Sticky Nav: Charcoal `#09090b` with `backdrop-filter: blur(16px)` and 1px white hairline border.

### 4.3 Spotlight Cards & Callouts
- **Document Spotlight Card:**
  - Background: `#09090b`
  - Left Accent Border: 4px solid `#ffffff`
  - Text: Crisp white `#ffffff` with neutral gray `#a1a1aa` descriptions
  - Feature badges: Monochrome translucent dark cards with white icons
- **Editorial Callouts:**
  - Background: `#f4f4f5`
  - Left Accent Border: 3px solid `#09090b`
  - Typography: `DM Serif Display`, italic, 19px

### 4.4 Icons & Assets
- All Lucide icons must use `className="text-white"` (on dark surfaces) or `className="text-black"` / `className="text-zinc-600"` (on light surfaces).
- Favicon (`/public/favicon.svg`): Strictly black base `#09090b` with pure white geometry `#ffffff`.

---

## 5. Developer Enforcement Checklist

When making future edits to JinoX AI:
- [ ] Confirm no chromatic Tailwind classes (`text-emerald-*`, `bg-blue-*`, etc.) are introduced.
- [ ] Verify background contrast: dark panels use `#09090b` / `#18181b`; light panels use `#ffffff` / `#f4f4f5`.
- [ ] Ensure all hyperlinks, hover transitions, and indicators strictly transition within grayscale (black, white, zinc).
- [ ] Test the build with `npm run lint` and `npm run build` to confirm zero compilation warnings.
