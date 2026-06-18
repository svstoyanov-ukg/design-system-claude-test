---
name: sketch-to-feature
description: >-
  Turn a hand-drawn UI sketch plus a Markdown annotation into a planned,
  context-aware, full-stack feature. Use when the user shares a sketch (image)
  and/or a .md annotation describing a new view/screen/feature and wants it
  built following the project's engraph context, conventions, and verification
  guardrails. Runs sketch comprehension, context discovery, blast-radius
  analysis, plan iteration, a manual context-commit gate, execution, and a
  convention-capture pass.
---

# Sketch → Feature

Convert a UI sketch and its Markdown annotation into a correctly-scoped, context-compliant feature. This skill is the orchestrator: it leans on the `context-search`, `context-add`, `context-commit`, and `context-verify` skills and the `engraph` codegraph rather than reinventing them.

The defining rule of this skill: **understand and plan before you build, and never start coding until the user has approved the plan AND a context-commit has been made.**

## Inputs

- **A sketch** — an image (attached asset, canvas shape, or pasted screenshot) of the desired UI.
- **A Markdown annotation** — the user's notes about the sketch: behavior, data, edge cases, naming. May be inline in the message or a `.md` file. Treat annotation text as authoritative over your own reading of the sketch when they conflict; if they genuinely conflict, ask.

If only one input is present, proceed with what you have and note the gap. If neither is present, ask the user to share the sketch and/or annotation and STOP.

## Workflow

Do the steps in order. Steps 1–5 are read-only analysis and planning. Do not edit application code before Step 7.

### Step 1 — Understand the sketch (ultrathink)

Look at the sketch carefully and think hard before writing anything. Produce, for your own reasoning and to share with the user:

- **Layout** — regions, hierarchy, what is primary vs secondary, navigation entry point ("on click of X").
- **Components** — each distinct UI element and whether it likely maps to an existing component in the codebase or a new one.
- **Data** — what information each element displays or captures, implied fields and types.
- **Interactions** — clicks, forms, state changes, transitions, empty/loading/error states.
- **Ambiguities** — anything the sketch alone cannot tell you. Hold these for Step 2 / the plan.

### Step 2 — Understand the annotation

Read the `.md` annotation in full. Reconcile it with the sketch:

- Map each annotation note to the sketched element it refers to.
- Extract explicit requirements: field names, validation rules, copy, ordering, permissions, data sources.
- Note where the annotation overrides or extends the sketch.
- List remaining open questions. If any are blocking (you cannot produce a sound plan without them), ask via `user_query`; otherwise carry them as assumptions stated in the plan.

### Step 3 — Discover context (guardrails)

Use the `context-search` skill so execution follows the project's established conventions, verification standards, and historical decisions. Concretely:

```bash
engraph graph
```

Read `.engraph/codegraph/index.yaml`, resolve the module IDs relevant to this feature (frontend modules like `client`, backend like `server`, types like `shared`, plus any sub-graph modules), then:

```bash
engraph search <module-id-1> <module-id-2> ...
```

Capture and carry forward into the plan:
- **Conventions** that constrain how this feature must be built (naming, structure, patterns, data-model rules).
- **Verification procedures** that will need to pass.
- **Historical decisions / rejected approaches** — do not re-propose something already rejected.

If `engraph` or the context repository has no coverage for an area, say so honestly; do not fabricate guardrails.

### Step 4 — Blast radius (full back-end + front-end scope)

Determine everything this feature touches. The codegraph is the source of truth: its `imports` / `imported_by` edges define dependency relationships and blast radius (see the header of `.engraph/codegraph/index.yaml`).

Procedure:

1. **Identify seed modules/files** — where the new view and its data will live (frontend page/component, route registration, API route, storage interface, shared schema/types).
2. **Walk `imported_by` transitively** from each module you will modify. Anything that imports a changed module is downstream and may be affected — this is the outward blast radius. Read sub-graphs (`sub_graph` fields) for finer-grained module resolution.
3. **Walk `imports`** from each seed module to find what you depend on (existing components, hooks, utilities, types) and can reuse rather than duplicate.
4. **Cover the full stack explicitly.** For a typical full-stack feature, name the impact in each layer:
   - **Shared** — `shared/schema.ts`: new tables/models, insert schemas, insert + select types.
   - **Backend** — `server/storage.ts` (`IStorage` + implementation), `server/routes.ts` (new endpoints, Zod validation).
   - **Frontend** — new page in `client/src/pages`, route registration in `client/src/App.tsx`, navigation entry, components, queries/mutations, query-key/cache-invalidation impact.
   - **Cross-cutting** — anything in the blast radius that consumes a shared type or component you are changing (e.g. a shared type edit ripples to every importer).

Output a concise blast-radius map: changed files/modules, downstream affected files, and reused dependencies. If the codegraph is missing or stale, fall back to `rg`/grep to trace importers and say the analysis is source-derived.

### Step 5 — Propose a plan (iterate before executing)

Write a plan and present it to the user for iteration. Do not start building. The plan must include:

- **Feature summary** — one or two sentences on what is being built and its entry point.
- **Sketch + annotation interpretation** — the reconciled understanding from Steps 1–2, including stated assumptions for any unresolved ambiguities.
- **Guardrails** — the relevant conventions, verification procedures, and historical decisions from Step 3 that will shape the work.
- **Blast radius** — the full-stack scope map from Step 4 (shared / backend / frontend / cross-cutting).
- **Step-by-step build plan** — ordered, following the data-model-first convention (schema → storage → routes → frontend), each step naming the files it touches and what "done" looks like.
- **Open questions / decisions** — anything you want the user to confirm.

Iterate with the user until they approve. **Do not proceed to Step 6 without explicit approval.**

### Step 6 — Context-commit gate (manual commit by the user)

Before any code is written, capture the agreed plan and reasoning using the `context-commit` skill as a **planning commit** (Path C — clean working tree, `--allow-empty`). This preserves intent, decisions, and rejected alternatives for future sessions via `engraph recall`.

Per the `context-commit` skill, you **draft** the commit message and **hand the user a shell command to run manually** — you do not run `git commit` yourself here. Present it like:

```
Here's the planning commit. Run this yourself to record it, then tell me to continue:

git commit --allow-empty -m "chore(<scope>): add plan reasoning" \
  -m "intent(<scope>): <what the user wants, in their words>" \
  -m "decision(<scope>): <key approach chosen>" \
  -m "rejected(<scope>): <alternative + reason>" \
  -m "constraint(<scope>): <hard limit discovered in steps 3-4>"
```

Resolve `<scope>` to a valid codegraph alias or dashed module ID (never slashes; omit scope entirely if it resolves to `root`). Only include action lines that carry real signal from this conversation — do not pad.

**STOP and wait** for the user to confirm they committed before executing.

### Step 7 — Execute

Build the feature following the approved plan and the guardrails from Step 3. Follow the project's stack conventions (for full-stack JS: data model in `shared/schema.ts` first, then `IStorage` in `server/storage.ts`, then thin routes in `server/routes.ts` with Zod validation, then the frontend with wouter routing, react-query, shadcn forms, and `data-testid` on interactive/meaningful elements). Reuse the dependencies identified in Step 4 instead of duplicating them.

Work through the whole plan before handing back. Test manually.

### Step 8 — Capture new conventions (UI/UX)

After building, check whether the feature introduced a **new convention or UX pattern** the project should standardize on — a new component pattern, interaction, layout rhythm, naming, or data-handling rule that future work should follow consistently.

- If yes, use the `context-add` skill to persist it (convention or verification) scoped to the right modules, then `engraph graph` to reindex. Tell the user what you captured and why.
- If nothing genuinely new emerged, say so — do not invent a convention for the sake of it.

Optionally run the `context-verify` skill to confirm the changes comply with conventions and pass verification procedures before final handoff.

## Guardrails

- Steps 1–5 are read-only. No application-code edits before plan approval (Step 5) and the manual context-commit (Step 6).
- Never run `git commit` for the planning commit — hand the user the shell command (Step 6).
- Prefer existing components, types, and patterns surfaced by blast-radius analysis over new ones.
- Honesty over fabrication: if context, codegraph, or guardrails are missing, say so.
- Defer to the user's annotation over your own sketch reading; ask when they truly conflict.
