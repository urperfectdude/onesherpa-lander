# OneSherpa — Landing Page

> Marketing site for **OneSherpa**: an AI-assisted admin & configuration console for **ERPNext**.

## What the product is (one paragraph)

OneSherpa is a friendly control panel that sits on top of ERPNext (the open-source ERP).
Instead of digging through dense, developer-heavy ERP menus, users **configure and manage their
ERP by talking to it**. The home screen greets them with *"Hi {name}, what do you want to make?"*
and a prompt box — describe what you want, and OneSherpa spins up and configures ERP projects for you.

The two pillars to anchor the page on:

1. **AI-native configuration** — describe it in plain language, the tool builds/configures it.
2. **A unified admin cockpit** — projects, data models (DocTypes), imports, and publishing all in
   one consistent dashboard instead of scattered ERP admin screens.

**One-line positioning:** *"ERPNext, without the complexity."*

## Who it's for

- **Business owners** standing up ERPNext who don't want to wrestle with raw configuration.
- **Business consultants** (advisors, not ERP specialists) who need to configure client systems fast.
- **ERP implementation companies** — i.e. **Frappe Partners** — who do this at scale.

> Note: the audience is *people who use/configure ERPNext*, not people who want to learn ERPNext's
> internals. Speak to outcomes, not ERP jargon.

## The product flow to tell on the page

**Implement → Customize → Run.** This is the founder's framing — use it as the spine of the page.

Surfaces worth showcasing (screens): Home/prompt ("what do you want to make?"), Chat (the
conversational workspace — the centerpiece), Projects, DocTypes & Objects, Import/Published/Settings.

## Design principles (founder's explicit expectations)

1. **Simplicity** — every section earns its place; cut anything that doesn't.
2. **Minimalist** — lots of whitespace, restrained palette, few accent colors, no visual noise.
3. **Light-mode, blue-accent** SaaS dashboard aesthetic (founder decided dark UI isn't needed
   for the marketing site; tokens are still centralized so a dark theme could be re-added later).
4. **Token-driven & consistent** — match the product's "developer-tool meets SaaS" language:
   neutral surfaces, rounded corners, layered surface/border treatment (shadcn + Tailwind).
5. **Mention ERPNext explicitly** and reference Frappe Partners where the audience is implementers.

**Inspiration:** https://gojiberry.ai/ — clean, minimal, generous spacing, a single strong hero
prompt, restrained motion. Match that energy. Do **not** clone it; adapt to OneSherpa's story.

## Tech stack (default — swappable, confirm before large changes)

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (matches the product's component system)
- **Framer Motion** for restrained, tasteful motion
- **lucide-react** for icons
- Deploy target: **Vercel**

When the repo is scaffolded, keep this section in sync with reality.

## Conventions

- Design tokens live in the Tailwind theme + CSS variables (light/dark). **Never hardcode hex
  colors in components** — reference tokens so the palette stays consistent and themeable.
- Components are small, composable, server-first; add `"use client"` only where interaction needs it.
- Copy is owned by the copywriter agent — don't invent product claims; keep to the positioning above.
- Accessibility and responsive behavior are not optional; check both before calling a section done.

## Subagents (in `.claude/agents/`)

Delegate to these for focused work. Spawn them when the user asks, or when a task clearly maps to one.

- **design-system-architect** — design tokens, theme, dark/light, shadcn setup, visual language.
- **landing-copywriter** — headlines, section copy, positioning, CTAs. Owns the words.
- **section-builder** — implements landing-page sections as React/Next + Tailwind + shadcn components.
- **ui-polish-reviewer** — responsive, accessibility, motion, and visual-consistency QA pass.
- **erp-domain-advisor** — keeps ERPNext / Frappe / Frappe Partners / DocType references accurate.

## Definition of done for a section

Minimal copy that fits the positioning · responsive (mobile→desktop) · works in light **and** dark ·
tokens not hardcoded · accessible (semantics, contrast, focus, reduced-motion) · matches the
gojiberry-level of restraint.
