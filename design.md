# Bryte / UKG Pro — Design System Specification

> **Version:** 1.0.0 · **Source:** Figma `YO0rnWhL60rnsJ1QwzkP8G` · **Node:** `1:17746`  
> **Last updated:** 2025-06-11  
> **Spec style:** Google Material Design 3 documentation conventions

---

## Table of Contents

1. [Overview](#1-overview)
2. [Design Principles](#2-design-principles)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing & Grid](#5-spacing--grid)
6. [Shape (Border Radius)](#6-shape-border-radius)
7. [Elevation & Shadow](#7-elevation--shadow)
8. [Motion & Animation](#8-motion--animation)
9. [Iconography](#9-iconography)
10. [Components](#10-components)
    - [10.1 Top Navigation Bar](#101-top-navigation-bar)
    - [10.2 Page Header](#102-page-header)
    - [10.3 Tab Bar](#103-tab-bar)
    - [10.4 Enrollment Banner Card](#104-enrollment-banner-card)
    - [10.5 Quick Link Card](#105-quick-link-card)
    - [10.6 Plan Row](#106-plan-row)
    - [10.7 Company Message Widget](#107-company-message-widget)
    - [10.8 AI Assistant Panel (Bryte)](#108-ai-assistant-panel-bryte)
    - [10.9 Button](#109-button)
    - [10.10 Input Bar](#1010-input-bar)
    - [10.11 Badge](#1011-badge)
11. [Layout & Page Structure](#11-layout--page-structure)
12. [Accessibility](#12-accessibility)
13. [Asset Inventory](#13-asset-inventory)

---

## 1. Overview

**Bryte** is an AI-powered employee benefits assistant embedded within the **UKG Pro** HR platform. The design system governs a two-panel dashboard: a primary **Benefits overview** panel on the left (68% width) and an **AI chat assistant** panel on the right (31% width).

The visual language is calm, trustworthy, and modern — rooted in a deep forest-green brand palette with warm sand accents for the AI surface. Typography relies on three carefully chosen typefaces: **DM Sans** for UI text, **Noto Sans Display** for tabular data, and **Volte Rounded** for warm promotional headings.

---

## 2. Design Principles

| Principle | Description |
|-----------|-------------|
| **Calm clarity** | Reduce cognitive load. Benefits information is dense — layouts use whitespace generously and type hierarchies guide the eye step by step. |
| **Trustworthy data** | Numeric values use `Noto Sans Display` (a tabular figures-first font) to communicate precision and reliability. |
| **Warm AI** | The AI panel is visually distinct via a warm sand gradient (#F5EBDC tint) to signal it is an intelligent, approachable surface — not a cold utility. |
| **Progressive disclosure** | Complex information (e.g. plan details) is layered: title → provider logo → plan name → coverage detail → cost. |
| **Accessibility first** | All interactive elements carry `aria-label` attributes. Focus rings are visually distinct. Color is never the sole differentiator. |

---

## 3. Color System

### 3.1 Color Roles

The system uses **semantic role names** mapped to CSS custom properties. All values are defined in `client/src/index.css` and consumed via Tailwind utility classes in `tailwind.config.ts`.

### 3.2 Brand

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Brand / brand | `--brandbrand` | `#13352C` | Primary brand identity |

### 3.3 Action Colors

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Action / enabled | `--actionactionenabled` | `#0E3B35` | Primary CTA background |
| Action / active | `--actionactionactive` | `#30258D` | Pressed / selected state (indigo) |
| Action / mid enabled | `--actionactionmidenabled` | `rgba(120, 207, 184, 0.20)` | Chip / pill fill (tinted teal) |
| Action / text action | `--actiontextactionenabled` | `#016CA2` | Inline text links |
| Action / brand darker | `--actionbranddarker` | `#005151` | Hover on dark action elements |
| Action / monochrome on dark | `--action-monochromeenabledondark` | `rgba(255,255,255,0.94)` | Icons/text on dark bg |
| Action / monochrome on light | `--action-monochromeenabledonlight` | `rgba(0,0,0,0.65)` | Icons/text on light bg |
| Action / low emphasis on light | `--action-monochromelowemphasisenabledonlight` | `rgba(0,0,0,0.43)` | Low-emphasis icons on light |

### 3.4 Surface Colors

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Surface / light | `--surfacesurfacelight` | `#FFFFFF` | Default card & page background |
| Surface / light darker | `--surfacesurfacelightdarker` | `#F5F5F5` | Slightly darkened background (section bg) |
| Surface / accent | *(inline)* | `#E2F8F6` | Open enrollment banner card bg |
| Surface / section bg | *(inline)* | `#F2F4F4` | Quick links section bg |
| Surface / AI surface | `--surfaceaisurface` | `#FFFFFF → #F5EBDC` (gradient) | AI panel background |
| Background / AI bg | `--backgroundaibackgroundenabled` | `#FFFFFF → #F5EBDC` (gradient) | User chat bubble fill |

### 3.5 Text Colors

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Text / high emphasis on light | `--text-colortexthighemphasisonlight` | `rgba(0,0,0,0.87)` | Body, headings |
| Text / low emphasis on light | `--text-colortextlowemphasisonlight` | `rgba(0,0,0,0.60)` | Captions, metadata |
| Text / disabled on light | `--text-colortextdisabledonlight` | `rgba(0,0,0,0.30)` | Disabled states |
| Text / high emphasis on dark | `--text-colortexthighemphasisondark` | `#FFFFFF` | Text on dark surfaces |

### 3.6 Border Colors

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Border / low emphasis | `--borderborderlowemphasisonlight` | `rgba(0,0,0,0.10)` | Subtle dividers, hairlines |
| Border / mid emphasis | `--borderbordermidemphasisonlight` | `rgba(0,0,0,0.15)` | Card borders |
| Border / high emphasis | `--borderborderhighemphasisonlight` | `rgba(0,0,0,0.42)` | Prominent borders |
| Border / background stroke | `--borderbackgroundstrokeenabled` | `#EBDCCD` | AI panel border, input borders (warm sand) |

### 3.7 Semantic / Status Colors

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Badge / charcoal | `--badgecharcoal` | `#4F4F4F` | Neutral status dot / chip |
| Badge / important | `--badgeimportant` | `#E80D24` | Critical / error badge |
| Annotation / on light | `--annotationannotation-on-light` | `#8629FF` | Annotation labels on light bg |
| Annotation / on dark | `--annotationannotation-on-dark` | `rgba(237,224,255,0.90)` | Annotation on dark bg |
| Focus / on light | `--focusfocusborderonlight` | `#549AC8` | Keyboard focus ring on light |
| Focus / on dark | `--focusfocusborderondark` | `rgba(255,255,255,0.65)` | Keyboard focus ring on dark |

---

## 4. Typography

### 4.1 Font Families

| Role | Family | Fallback | Notes |
|------|--------|----------|-------|
| **Primary UI** | DM Sans | Helvetica, sans-serif | All headings, body text, labels, buttons |
| **Data / Numeric** | Noto Sans Display | Helvetica, sans-serif | Tabular figures, plan names, metrics |
| **Brand / Display** | Volte Rounded | Helvetica, sans-serif | Large promotional text, countdown, select button labels |

> **Font loading:** DM Sans and Noto Sans Display are loaded from Google Fonts via `@import` in `index.css`. Volte Rounded is a licensed commercial font referenced via CSS variable fallback.

### 4.2 Type Scale

All type tokens are defined as CSS custom properties and consumed via Tailwind `font-*` utilities.

#### Display

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `display-md` | DM Sans | 41px | 600 | 48px | −0.25px | Hero numbers (enrollment dates) |
| `display-sm` | DM Sans | 32px | 600 | 40px | −0.70px | Sub-hero display |
| `display-xs` | Volte Rounded | 26px | 500 | 32px | −0.20px | Dollar amounts, per-paycheck cost |

#### Heading

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `heading-heading-lg` | DM Sans | 26px | 600 | 31px | −0.90px | Card feature headings |
| `heading-heading-md` | DM Sans | 23px | 600 | 28px | −0.90px | Section titles |
| `heading-heading-sm` | DM Sans | 20px | 600 | 24px | −0.70px | Sub-section labels |
| `heading-heading-xs` | DM Sans | 18px | 600 | 22px | −0.60px | Tertiary headings |
| `heading-box-heading` | DM Sans | 20px | 600 | 21px | −1.00px | Widget titles (tightly kerned) |
| `heading-volte-semibold-s` | Volte Rounded | 20px | 600 | 24px | −0.60px | Warm branded subheads (countdown) |
| `navigation-heading` | DM Sans | 20px | 400 | 24px | −0.20px | Navigation panel titles |

#### Body / Copy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `copy-md` | DM Sans | 16px | 400 | 24px | +0.15px | Body paragraphs, chat messages |
| `copy-italic` | DM Sans | 16px | 400 (italic) | 24px | 0px | Attributed quotes, company messages |
| `copy-sm` | DM Sans | 14px | 400 | 20px | +0.15px | Secondary body text |
| `copy-sm-link` | DM Sans | 14px | 400 | 20px | +0.15px | Small inline hyperlinks |

#### Data

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `data-md-high` | Noto Sans Display | 16px | 500 | 22px | 0px | Plan names, enrolled members |
| `data-md-mid` | DM Sans | 16px | 400 | 22px | −0.35px | Medium data values |
| `data-sm-high` | Noto Sans Display | 14px | 500 | 18px | 0px | Coverage detail values |
| `data-sm-mid` | DM Sans | 14px | 400 | 18px | −0.30px | Quick-link titles, row labels |
| `data-sm-low` | Noto Sans Display | 14px | 400 | 18px | 0px | 'You pay', 'per paycheck' |
| `data-xs-condensed-high` | DM Sans | 12px | 700 | 12px | −1.00px | Badge counts, micro-labels |

#### Interactive

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `button-lg-enabled` | DM Sans | 16px | 600 | 18px | −0.90px | Large CTA buttons |
| `button-md-enabled` | DM Sans | 14px | 600 | 16px | −0.35px | Medium buttons |
| `button-md-monochrome` | DM Sans | 14px | 600 | 16px | −0.35px | Ghost / icon+label buttons |
| `form-sm-enabled` | DM Sans | 14px | 400 | 22px | −0.30px | Input placeholder / field text |

#### Avatar

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|---------------|-------|
| `avatar-lg` | DM Sans | 28px | 600 | 28px | +2.00px | Large avatar initials |
| `avatar-sm` | DM Sans | 12px | 600 | 12px | +0.50px | Small avatar initials |

### 4.3 Type Hierarchy Example

```
Page Title        → display-md   (41px / 600 / DM Sans)
Section Header    → heading-md   (23px / 600 / DM Sans)
Card Header       → heading-lg   (26px / 600 / DM Sans)
Widget Title      → heading-box-heading (20px / 600 / DM Sans)
Body Copy         → copy-md      (16px / 400 / DM Sans)
Data Label        → data-sm-mid  (14px / 400 / DM Sans)
Data Value        → data-sm-high (14px / 500 / Noto Sans)
Dollar Amount     → display-xs   (26px / 500 / Volte Rounded)
```

---

## 5. Spacing & Grid

### 5.1 Base Unit

All spacing follows an **8px base grid**. Sub-pixel values of 2px and 4px are used for tight internal padding within compact components.

| Step | Value | Common Usage |
|------|-------|-------------|
| 0.5 | 2px | Micro gaps within icon buttons |
| 1 | 4px | Icon-to-label gaps |
| 1.5 | 6px | Button vertical padding |
| 2 | 8px | Inline element gaps |
| 2.5 | 10px | Nav button padding |
| 3 | 12px | Header vertical padding |
| 4 | 16px | Standard content padding, card internal padding |
| 5 | 20px | Input horizontal padding |
| 6 | 24px | Card content padding |
| 8 | 32px | Section vertical padding |
| 12 | 48px | Footer padding top |
| 18 | 72px | Bottom of main content section |

### 5.2 Page Layout

```
┌─────────────────────────────────────────────────┐
│                 Top Nav (64px)                   │
├───────────────────────────────────┬─────────────┤
│                                   │             │
│      Benefits Panel (68fr)        │  AI Panel   │
│      max-content: 960px           │   (31fr)    │
│      side padding: 152px lg       │             │
│                                   │             │
└───────────────────────────────────┴─────────────┘
         Max viewport: 1704px
```

| Property | Value |
|----------|-------|
| Max viewport width | `1704px` |
| Column split | `grid-cols-[68fr_31fr]` |
| Content max-width (left panel) | `960px` |
| Content horizontal padding | `px-4` → `px-8` → `px-[152px]` (responsive) |
| Min viewport height | `980px` |

### 5.3 Content Section Spacing

```
Top Nav                     64px
Page Header (title+sub)     96px
Divider                      1px
Enrollment Card             225px + vertical gap ~16px
Quick Links Section          full-width, py-32
  → Quick link grid          gap-16, 4 columns
Plans + Sidebar Grid         gap-24, 2 columns
```

---

## 6. Shape (Border Radius)

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Hairline separators |
| `sm` | 4px | Tag edges, small internal rects |
| `md` | 8px | Minor rounding |
| `lg` | 10px (10.29px) | Icon container within enrollment card |
| `xl` | 12px | Input bar |
| `2xl` | 16px | Cards — enrollment banner, plan list, widget cards |
| `pill` | 50px | All buttons (CTA, ghost, chip) |
| `extra` | 48px | Large decorative radius (Figma variable) |
| `full` | 9999px | Avatar circles, icon-only buttons, status dots |

### Chat Bubble Asymmetry

User messages use asymmetric rounding to indicate origin:
- `border-radius: 16px 4px 16px 16px` — upper-right corner is minimal (4px) to "point" toward the user.

---

## 7. Elevation & Shadow

This system **does not use drop shadows** for elevation. Instead, elevation is communicated through:

1. **Background color contrast** — white cards (`#FFFFFF`) sit on gray section backgrounds (`#F2F4F4`) or tinted accent surfaces.
2. **Border strokes** — `1px solid rgba(0,0,0,0.15)` on quick-link cards.
3. **Tinted backgrounds** — The warm sand gradient on the AI panel visually separates it from the white benefits panel.

> **Rationale:** Shadow-free design feels flatter and more modern, reduces visual noise in a data-dense context, and improves legibility on high-brightness displays.

---

## 8. Motion & Animation

All animations are defined as CSS keyframes in `client/src/index.css` and as Tailwind custom utilities.

### 8.1 Core Animations

| Class | Keyframe | Duration | Easing | Purpose |
|-------|----------|----------|--------|---------|
| `.animate-fade-in` | `fade-in` | 1s | ease | Element enters from 10px above |
| `.animate-fade-up` | `fade-up` | 1s | ease | Element rises from 20px below |
| `.animate-shimmer` | `shimmer` | 8s | — | Loading skeleton sweep |
| `.animate-marquee` | `marquee` | `--duration` | linear | Horizontal ticker |
| `.animate-marquee-vertical` | `marquee-vertical` | `--duration` | linear | Vertical ticker |
| `.animate-spin` | `spin` | 1s | linear | Loading spinner |

### 8.2 Accordion Transitions (Radix UI)

| Class | Duration | Easing | Purpose |
|-------|----------|--------|---------|
| `accordion-down` | 0.2s | ease-out | Expand accordion panel |
| `accordion-up` | 0.2s | ease-out | Collapse accordion panel |

### 8.3 Animation Delay

Use the CSS variable `--animation-delay` to stagger sequential `.animate-fade-in` / `.animate-fade-up` elements:

```css
.animate-fade-in { animation: fade-in 1s var(--animation-delay, 0s) ease forwards; }
```

---

## 9. Iconography

All icons are **24×24px SVG files** exported from Figma and stored in `client/public/figmaAssets/`.

| File | Role | Component Used In |
|------|------|------------------|
| `icon.svg` | Hamburger / menu | Top Nav |
| `icon-1.svg` | Profile | Top Nav |
| `icon-3.svg` | Download | Plans section header |
| `icon-5.svg` | Attachment | AI Input Bar |
| `icon-7.svg` | Notifications | Top Nav |
| `icon-8.svg` | AI panel open/toggle | AI Panel Header |
| `go-forward.svg` | Right-arrow CTA | AI Assistant message chip |
| `microphone.svg` | Voice input | AI Input Bar |
| `fullscreen.svg` | Expand panel | AI Panel Header |
| `calendar.svg` | Enrollment date icon | Enrollment Banner |

### Icon Button Anatomy

```
┌─────────────────────────────────┐
│  border-radius: 50px            │
│  padding: 8px                   │
│  ┌───────────────────────────┐  │
│  │  <img> 24×24px            │  │
│  └───────────────────────────┘  │
│  hover: bg-transparent          │
│  focus-visible: ring-2 offset-1 │
└─────────────────────────────────┘
```

---

## 10. Components

---

### 10.1 Top Navigation Bar

**Purpose:** Global app header — brand identity, navigation toggle, utility icons.

```
┌─────────────────────────────────────────────────────┐
│  [☰]  |  UKG-logo                    [🔔]  [👤]   │
└─────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | `#FFFFFF` |
| Horizontal padding | `16px` |
| Layout | `flex row, space-between` |

**Left group:**
- Icon button (hamburger, 40×40px, radius `50px`)
- Vertical divider (1px, `rgba(0,0,0,0.10)`, height `100%`)
- UKG Logo (`ukg-logo.svg`, 61×24px) inside a 44px tall container

**Right group:**
- Notifications icon button
- Profile icon button

**States:**
- Icon buttons: no background change on hover (`hover:bg-transparent`)
- Focus: `ring-2 ring-focusfocusborderonlight ring-offset-1`

---

### 10.2 Page Header

**Purpose:** Page-level title and description block.

```
Benefits
View and manage everything related to your benefits
─────────────────────────────────────────────────
```

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding | `16px` (mobile) → `32px` (tablet) → `152px` (desktop) |
| Max content width | `960px` |
| Title typography | `display-md` (41px / 600 / DM Sans) |
| Title color | `text.highEmphasisOnLight` |
| Subheading typography | `heading-heading-sm` (20px / 600 / DM Sans) |
| Subheading color | `rgba(0,0,0,0.60)` |
| Bottom divider | `1px solid rgba(0,0,0,0.10)` |

---

### 10.3 Tab Bar

**Purpose:** Secondary navigation within a page (hidden in current view but structurally present).

```
┌──────────┬──────────┬──────────┬──────────┐
│  Tab 1   │  Tab 2   │  Tab 3   │  Tab 4   │
│──────────│          │          │          │
│ ████████ │          │          │          │  ← selected indicator
└──────────┴──────────┴──────────┴──────────┘
```

| Property | Value |
|----------|-------|
| Tab height | `46px` |
| Tab min-width | `113px` |
| Text padding | `14px 16px` |
| Text typography | `button-md-monochrome` (14px / 600 / DM Sans) |
| Selected indicator | `4px tall, border-radius 2px, color: action.enabled` |
| Badge | 16px tall pill, background white, count in `data-xs-condensed-high` |
| Focus ring | `inset ring-2 focus.borderOnLight` |

**States:**
- **Default:** No indicator visible
- **Selected:** 4px indicator shown at bottom of tab
- **Focused:** Focus ring overlay (hidden by default)

---

### 10.4 Enrollment Banner Card

**Purpose:** Prominent CTA card announcing open enrollment window.

```
┌────────────────────────────────────────────────────────────┐
│  Background: #E2F8F6 + SVG pattern overlay                  │
│                                                             │
│  It's open enrollment time!            ┌───────────────┐   │
│                                         │  📅 48px icon │   │
│  Start choosing the benefits for you    │  Nov 1 - 28   │   │
│  and your family for 2025...            │  14 days left │   │
│                                         │  ● not started│   │
│  [  Button  ]                           └───────────────┘   │
└────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | `225px` |
| Background fill | `#E2F8F6` |
| Background images | `background.svg` + `card-pattern.svg` (absolutely positioned) |
| Border radius | `16px` (2xl) |
| Border | none |
| Layout | `grid-cols-[1fr_260px]` |

**Left column:**
- Heading: `heading-heading-lg` — `color: text.highEmphasisOnLight`
- Body: `copy-md` — `color: text.highEmphasisOnLight`
- CTA Button: ghost variant, `color: action.active` (#30258D), `border-radius: 50px`

**Right column:**
- Icon container: `48×48px`, `border-radius: 10.29px`, `background: rgba(48,206,187,0.45)`
- Icon: `calendar.svg`, `20.57×20.57px`
- Date: `display-md`, `color: rgba(0,0,0,0.87)`, center-aligned
- Days left: `heading-volte-semibold-s`, `color: rgba(0,0,0,0.45)`, single-line clamp
- Status: dot `12.75px` circle in `badge.charcoal` + `data-sm-mid` label

---

### 10.5 Quick Link Card

**Purpose:** Compact navigation tile for top-level benefit categories.

```
┌──────────────────────────────────────┐
│  [image]  Compensation         [  ] │
└──────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | `56px` |
| Background | `#FFFFFF` |
| Border | `1px solid rgba(0,0,0,0.15)` |
| Border radius | `16px` (2xl) |
| Layout | `flex row, items-center, justify-end` |
| Image | left edge, self-stretching SVG |
| Label typography | `data-sm-mid` (standard) or inline `18px / 600` (emphasized) |
| Label color | `text.highEmphasisOnLight` |
| Grid | `grid-cols-4` on desktop, `grid-cols-2` tablet, `grid-cols-1` mobile |

**Emphasized variant** (Third party pay):
- Font: `[font-family:'DM_Sans'] 16px font-semibold leading-[18px] tracking-[-0.90px]`

---

### 10.6 Plan Row

**Purpose:** Single insurance plan listing inside "Your family's plans" card.

```
┌──────────────────────────────────────────────────────────────┐
│  Medical                                    You pay          │
│  [BCBS Logo]                               $125.00           │
│  BCBS 3000 HDHP                            per paycheck      │
│  Covered: you, Taylor, Cathy                                 │
│──────────────────────────────────────────────────────────────│
│  Health savings account (HSA)               You pay          │
│  [Payflex Logo]                             $57.69           │
│  Payflex HSA                               per paycheck      │
│  Your annual contribution: $1,500.00       Change my         │
│                                            contribution →     │
└──────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Padding per row | `24px` |
| Separator | `1px rgba(0,0,0,0.10)` — inset `mx-24` |
| Card border radius | `16px` (2xl) |

**Left block anatomy:**
| Element | Typography | Color |
|---------|-----------|-------|
| Plan title | 18px / 600 / DM Sans / −0.60px LS | `text.highEmphasisOnLight` |
| Provider logo | Image | — |
| Plan name | `data-md-high` | `text.highEmphasisOnLight` |
| Detail label | `data-sm-mid` | `text.highEmphasisOnLight` |
| Detail value | `data-sm-high` | `text.highEmphasisOnLight` |

**Right block anatomy:**
| Element | Typography | Color | Alignment |
|---------|-----------|-------|-----------|
| "You pay" | `data-sm-low` | `rgba(0,0,0,0.60)` | right |
| Amount | `display-xs` | `text.highEmphasisOnLight` | right |
| "per paycheck" | `data-sm-low` | `rgba(0,0,0,0.60)` | right |
| Change link | `copy-md` | `action.textActionEnabled` | right |

---

### 10.7 Company Message Widget

**Purpose:** Sidebar card for employer-authored messages about benefit programs.

```
A message from your company
Company savings plan
──────────────────────────
Acme Co. is pleased to offer our employees a new company savings plan.

[  Learn more  ]  [  Got it  ]
```

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border radius | `16px` (2xl) |
| Eyebrow | `copy-italic`, `rgba(0,0,0,0.60)` |
| Title | `heading-box-heading`, `text.highEmphasisOnLight` |
| Body | `copy-md`, `text.highEmphasisOnLight` |
| CTA buttons | Ghost variant, `color: action.active` |

---

### 10.8 AI Assistant Panel (Bryte)

**Purpose:** Persistent right-rail AI chat interface.

#### Panel Container

| Property | Value |
|----------|-------|
| Width | `31fr` (~530px at 1704px viewport) |
| Min height | `980px` |
| Background | `linear-gradient(0deg, rgba(245,235,220,0.20), rgba(245,235,220,0.20)), #FFFFFF` |
| Border left | `1px solid #EBDCCD` |
| Layout | `flex column` |

#### Panel Header

```
[☰]  🌿 Bryte                          [⛶]
```

| Property | Value |
|----------|-------|
| Height | `52px` |
| Padding | `12px 24px` |
| Logo | `bryte-logo.svg`, `24×24px` |
| Title | `navigation-heading`, `text.highEmphasisOnLight` |

#### User Chat Bubble

| Property | Value |
|----------|-------|
| Alignment | `flex-end` (right-aligned) |
| Background | `linear-gradient(rgba(245,235,220,0.55), rgba(245,235,220,0.55)), #FFFFFF` |
| Border radius | `16px 4px 16px 16px` (asymmetric — upper-right minimal) |
| Padding | `12px 20px` |
| Typography | `copy-md` |
| Color | `rgba(0,0,0,0.87)` |

#### Assistant Message

| Property | Value |
|----------|-------|
| Alignment | `flex-start` (left-aligned) |
| Background | none (inline with panel bg) |
| Typography | `copy-md`, `text.highEmphasisOnLight` |

**CTA Chip Button:**
| Property | Value |
|----------|-------|
| Background | `action.midEnabled` — `rgba(120,207,184,0.20)` |
| Color | `#0A1E18` |
| Border radius | `50px` |
| Padding | `6px 16px` |
| Typography | `button-md-monochrome` + trailing icon |

#### Bottom Fade

- `bottom-cover.svg`: absolutely positioned sticky-bottom gradient mask over scroll content, providing fade effect.

---

### 10.9 Button

**Button system uses three primary visual variants:**

#### Ghost Button

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | none |
| Border radius | `50px` |
| Padding | `6px 8px` |
| Color | inherited from parent context |
| Hover | `bg-transparent` (no fill change) |

Used for: nav icon buttons, action links in cards, panel controls.

#### CTA Chip

| Property | Value |
|----------|-------|
| Background | `rgba(120,207,184,0.20)` |
| Border | none |
| Border radius | `50px` |
| Padding | `6px 16px` |
| Color | `#0A1E18` |
| Typography | `button-md-monochrome` (DM Sans 14px / 600) |

Used for: AI assistant contextual action buttons.

#### Text Link Button

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Color | `action.textActionEnabled` (`#016CA2`) |
| Typography | `copy-md` (16px / 400) |

Used for: "Change my contribution" inline plan row actions.

---

### 10.10 Input Bar

**Purpose:** Freeform text input for the Bryte AI assistant.

```
┌────────────────────────────────────────────────┐
│  Search or ask Bryte...            [📎]  [🎙]  │
└────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #EBDCCD` |
| Border radius | `12px` |
| Padding | `6px 8px 6px 20px` |
| Margin | `0 24px` |
| Placeholder text | `form-sm-enabled`, `rgba(0,0,0,0.60)` |
| Action icons | `icon-5.svg` (attachment) + `microphone.svg`, `24×24px`, `ghost` icon buttons |

---

### 10.11 Badge

**Purpose:** Notification count indicator on tab items.

| Property | Value |
|----------|-------|
| Background | `surface.light` (`#FFFFFF`) |
| Border radius | `full` |
| Min width | `19px` |
| Height | `16px` |
| Padding | `0 5.5px` |
| Count typography | `data-xs-condensed-high` (12px / 700 / DM Sans / −1px LS) |

---

## 11. Layout & Page Structure

### 11.1 Page Regions

```
┌──────────────────────────────────────────────────────────────────┐
│  TOP NAV                                           height: 64px   │
│  [☰] | UKG Logo                        [🔔] [👤]                 │
├──────────────────────────────────────────┬───────────────────────┤
│  LEFT PANEL (68fr)                        │  RIGHT PANEL (31fr)   │
│                                           │                       │
│  PAGE HEADER (max-width: 960px)           │  AI ASSISTANT         │
│  ┌──────────────────────────────────┐     │  (Bryte)              │
│  │ Benefits                         │     │                       │
│  │ View and manage...               │     │  [Header]             │
│  │ ──────────────────────────────── │     │                       │
│  └──────────────────────────────────┘     │  [User bubble]        │
│                                           │                       │
│  ENROLLMENT CARD (max-width: 960px)       │  [Assistant msg]      │
│  ┌──────────────────────────────────┐     │  [CTA Chip]           │
│  │  It's open enrollment time!      │     │                       │
│  │                       Nov 1-28   │     │                       │
│  └──────────────────────────────────┘     │                       │
│                                           │  [Input Bar]          │
│  QUICK LINKS SECTION (bg: #F2F4F4)        │                       │
│  [Comp] [YTD] [3rd Party] [Direct]        │                       │
│                                           │                       │
│  PLANS + SIDEBAR GRID                     │                       │
│  ┌─────────────────┐ ┌──────────────┐    │                       │
│  │  Your family's  │ │  Company msg │    │                       │
│  │  plans          │ │  widget      │    │                       │
│  └─────────────────┘ └──────────────┘    │                       │
└──────────────────────────────────────────┴───────────────────────┘
```

### 11.2 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (`< sm`) | Plans stack vertically; quick links single column; side padding 16px |
| Tablet (`sm`) | Plans row, quick links 2-col; side padding 32px |
| Desktop (`lg`) | Full two-column layout; quick links 4-col; side padding 152px; enrollment card two-col |

### 11.3 Section Padding Summary

| Section | Padding |
|---------|---------|
| Top nav | `px-16 py-0` |
| Page header | `px-4 pt-16 pb-8` → `px-152` at lg |
| Enrollment card wrapper | `px-2 pb-72` |
| Quick links section | `px-4 py-32` → `px-0` at lg |
| Plans grid | `gap-24, grid-cols-[575px_361px]` at lg |
| AI panel header | `px-24 py-12` |
| AI panel chat area | `px-24` |
| AI panel input | `px-24 pb-16 pt-42` |

---

## 12. Accessibility

### 12.1 Implemented Patterns

| Pattern | Implementation |
|---------|---------------|
| **Landmark roles** | `<main>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<nav>` used semantically |
| **aria-label** | All icon-only buttons carry descriptive `aria-label` attributes |
| **aria-label (nav)** | Nav region: `aria-label="Benefits quick links"` |
| **Heading hierarchy** | `<h1>` (page title) → `<h2>` (card titles) → `<h3>` (section titles) |
| **Focus rings** | CSS variable `--focusfocusborderonlight: #549AC8` applied on `focus-visible` |
| **Color contrast** | Primary text `rgba(0,0,0,0.87)` on white exceeds WCAG AA (≥4.5:1) |
| **Keyboard navigation** | Ghost buttons are `<button type="button">` elements, focusable by default |

### 12.2 Color Contrast Reference

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `rgba(0,0,0,0.87)` on `#FFFFFF` | 13.4:1 | ✅ AAA |
| `rgba(0,0,0,0.60)` on `#FFFFFF` | 5.9:1 | ✅ AA |
| `#016CA2` on `#FFFFFF` | 5.0:1 | ✅ AA |
| `#30258D` on `#FFFFFF` | 8.5:1 | ✅ AAA |
| `rgba(0,0,0,0.87)` on `#E2F8F6` | ~12:1 | ✅ AAA |

### 12.3 Recommended Improvements

- Add `role="status"` to enrollment countdown for live region updates.
- Ensure chat messages from assistant use `aria-live="polite"` on the chat container.
- Provide visible focus state on quick-link cards (currently missing explicit focus style).
- Tab bar scrollable arrows should have `aria-label="Scroll tabs left/right"`.

---

## 13. Asset Inventory

### 13.1 Icons (24×24px SVG)

| Filename | Description |
|----------|-------------|
| `icon.svg` | Hamburger / menu toggle |
| `icon-1.svg` | Profile / account |
| `icon-3.svg` | Download / export |
| `icon-5.svg` | Attachment / paperclip |
| `icon-7.svg` | Notifications / bell |
| `icon-8.svg` | AI panel open / toggle |
| `go-forward.svg` | Arrow right (CTA chip trailing icon) |
| `microphone.svg` | Voice input |
| `fullscreen.svg` | Expand to fullscreen |
| `calendar.svg` | Enrollment date indicator |

### 13.2 Logos

| Filename | Brand | Dimensions |
|----------|-------|------------|
| `ukg-logo.svg` | UKG | 61×24px |
| `bryte-logo.svg` | Bryte AI | 24×24px |
| `bitmap.png` | BCBS (Blue Cross Blue Shield) | ~86px wide |
| `bitmap-1.png` | Payflex HSA | ~87px wide |
| `delta-dental-vector-logo-copy.png` | Delta Dental | ~169×19px |

### 13.3 Background & Decorative

| Filename | Usage |
|----------|-------|
| `background.svg` | Enrollment card — full-bleed background pattern |
| `card-pattern.svg` | Enrollment card — decorative overlay pattern |
| `bottom-cover.svg` | AI chat scroll area — bottom gradient fade mask |
| `line.svg` | Generic decorative line asset |

### 13.4 Quick Link Section Images

| Filename | Quick Link |
|----------|------------|
| `image-section.svg` | YTD Summary |
| `image-section-1.svg` | Direct Deposit |
| `image-section-2.svg` | Third Party Pay |
| `image-section-3.svg` | Compensation |

---

*End of Design System Specification — Bryte / UKG Pro v1.0.0*
