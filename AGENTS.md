# Ignite Design System — Pilot (Angular)

A thin-slice pilot that renders one design-system page in Angular, with the
design expertise carried in-repo via engraph. The visual system is translated
to text once (tokens + conventions) and reused as text.

## Stack

- Angular 22 (standalone components, SCSS) + Tailwind v3 (utility classes are
  the shared vocabulary the conventions are written in).
- Design tokens live as CSS custom properties in `src/styles.scss` (Figma-derived,
  ported from the design-system slice). `design-system.json` is the source record;
  `design.md` is the long-form spec.
- Figma-exported SVGs in `public/figmaAssets/`.

## Design tokens — the one rule

Color, type, radius, spacing come from tokens, never raw values:

- Color: semantic Tailwind tokens backed by the CSS vars in `src/styles.scss`
  (e.g. `text-text-colortexthighemphasisonlight`, `bg-surfaceaisurface`,
  `text-actionactionactive`). No `text-gray-500`, no arbitrary hex.
- Type: the token quartet, never raw `text-2xl`. e.g.
  `font-display-md text-[length:var(--display-md-font-size)] font-[number:var(--display-md-font-weight)] leading-[var(--display-md-line-height)] tracking-[var(--display-md-letter-spacing)]`.
- See `.engraph/context/conventions/` for the full, scoped rule set.

## Engraph Context

This repository includes a curated context layer (`.engraph/context/`) that captures
architecture decisions, coding conventions, and quality standards so they persist across
AI sessions. Prefer this over rediscovering patterns from raw source.

- `.engraph/codegraph/` — auto-generated structural map (blast radius). Do not
  hand-edit; regenerate with `engraph graph`.
- `.engraph/context/conventions/` — 12 scoped conventions (read before, checked
  after), scoped to `src/app/pages`, `src/app/pages/sections`, `src/app/components/ui`.
- `.engraph/context/verifications/` — verification schema (gates).

Skills (`.agents/skills/`):
- `/context-search <query>` — Use proactively when you need deeper insight into why something was built a certain way or what conventions apply.
- `/context-add "<knowledge>"` — Capture a design decision, convention, or non-obvious gotcha before it's lost; it grounds the knowledge in real code references.
- `/context-extract` — Discover structural, convention, and verification context from source files.
- `/context-verify` — Verify current branch changes against established conventions; produces a structured compliance report. More reliable than ad-hoc checking.

## Note: codegraph + index need a refresh

The codegraph and `.engraph/context/index.yaml` routing table were generated
against the bare scaffold. After the token/Tailwind/convention port, run
`engraph graph` to refresh them once the `engraph` binary is installable
(currently blocked by the corporate proxy). The individual convention YAML
files are the source of truth in the meantime.
