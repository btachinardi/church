# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Church of Clean Code is a Claude Code plugin providing 14 **generic purist subagents**, 61 **specialized purist agents**, and 14 **crusade orchestration commands** for parallel code quality enforcement. It includes a marketing website deployed to Netlify.

## Repository Structure

```
church/
├── agents/              # Purist subagent definitions (*.md)
│   ├── react-purist.md  # Generic purists (14 total, for direct invocation)
│   ├── react/           # Specialized purists (61 total, for crusade deployment)
│   │   ├── react-arch-purist.md
│   │   ├── react-hooks-purist.md
│   │   ├── react-state-purist.md
│   │   ├── react-data-purist.md
│   │   └── react-perf-purist.md
│   ├── arch/            # 5 architecture specialists
│   ├── observability/   # 4 observability specialists
│   ├── test/            # 4 test specialists
│   ├── typescript/      # 4 TypeScript specialists
│   ├── dead/            # 6 dead code specialists
│   ├── dep/             # 4 dependency specialists
│   ├── naming/          # 4 naming specialists
│   ├── git/             # 4 git specialists
│   ├── secret/          # 4 secret specialists
│   ├── size/            # 4 size specialists
│   ├── a11y/            # 4 accessibility specialists
│   ├── copy/            # 4 copywriting specialists
│   ├── adaptive/        # 5 adaptive UI specialists
│   └── kotlin/          # 5 Kotlin specialists
├── commands/            # Crusade orchestration commands (*.md)
│   ├── react-crusade.md # 13 crusade commands total
│   └── ...
├── skills/              # Auto-discovered skills (SKILL.md)
├── .claude-plugin/      # Plugin manifest (plugin.json, marketplace.json)
├── src/                 # Vite + React website source
│   ├── components/      # React components (*.component.tsx)
│   ├── sections/        # Page sections (*.section.tsx)
│   ├── pages/           # Route pages (*.page.tsx)
│   │   ├── home.page.tsx
│   │   └── crusade.page.tsx
│   ├── data/            # Static data (*.data.ts)
│   │   └── crusades/    # Per-crusade landing page data
│   │       ├── type.data.ts
│   │       ├── git.data.ts
│   │       ├── react.data.ts
│   │       └── ...      # 13 crusade data files + index.ts
│   ├── app.tsx          # Route definitions (react-router-dom)
│   └── main.tsx         # Entry point with BrowserRouter
└── dist/                # Build output (deployed to Netlify)
```

## Commands

```bash
# Development
npm run dev           # Start Vite dev server
npm run build         # TypeScript check + Vite build
npm run preview       # Preview production build

# Test plugin locally
claude --plugin-dir ./church
```

## Plugin Components

### Subagents (agents/)

Subagent definitions follow Claude Code agent format with YAML frontmatter:
- `name`: Agent identifier used in Task tool's `subagent_type`
- `description`: Trigger phrases and purpose
- `tools`: Allowed tools (Read, Edit, Write, Glob, Grep, Bash)
- `model`: Model to use (opus recommended for code quality tasks)

**Two tiers of agents:**
- **Generic purists** (`agents/*.md`): 13 broad agents for direct invocation. Each covers a full domain (e.g., `react-purist` covers all React concerns).
- **Specialist purists** (`agents/<domain>/*.md`): 55 focused agents for crusade deployment. Each covers one narrow concern (e.g., `react-arch-purist` covers only component tier classification).

### Commands (commands/)

Slash command definitions with YAML frontmatter:
- `description`: What the command does
- `allowed-tools`: Tools the command can use
- `argument-hint`: Usage pattern for arguments

Commands orchestrate parallel subagent deployment via the Task tool.

### Skills (skills/)

Auto-discovered knowledge that Claude Code loads when relevant. Each skill has a SKILL.md with metadata and content.

## Crusade Pattern

All crusades follow the same parallel deployment pattern:

1. **Reconnaissance** - Scan codebase for violations using Grep/Glob
2. **Squad Formation** - Assign concern-based squads to specialist agents
3. **Parallel Deployment** - Launch specialist purist agents via Task tool in a single message
4. **Victory Report** - Aggregate results and report findings

Key rule: All Task tool calls MUST be in a single message for true parallelism.

Each crusade deploys **specialist agents** (not generic purists) so each squad carries only the doctrine it needs. Generic purists remain available for direct invocation outside crusades.

## File Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| React components | `*.component.tsx` | `code-block.component.tsx` |
| Page sections | `*.section.tsx` | `hero.section.tsx` |
| Route pages | `*.page.tsx` | `crusade.page.tsx` |
| Static data | `*.data.ts` | `bestiary.data.ts` |

## Website Tech Stack

- Vite 6 + React 19 + TypeScript 5.7
- React Router DOM (BrowserRouter with `/crusade/:slug` routes)
- Tailwind CSS 3.4
- Deployed to Netlify (church.btas.dev)

## Plugin Installation

Users install via:
```bash
/plugin marketplace add btachinardi/church
/plugin install church@btachinardi-church
```

---

## How to Create a New Crusade

Creating a new crusade requires **10 coordinated assets** across the plugin and website. This section is a complete step-by-step guide. Follow every step — missing any asset will leave the crusade incomplete.

Use an existing crusade as your reference template throughout. The **Size Crusade** (`size`) is the canonical example.

### Overview: Complete Asset Checklist

| # | Asset | Path | Auto-discovered? |
|---|-------|------|:-:|
| 1 | Generic purist agent | `agents/{domain}-purist.md` | Yes |
| 2 | Specialist agent directory | `agents/{domain}/` | Yes |
| 3 | Specialist agent files (4-6) | `agents/{domain}/{domain}-{concern}-purist.md` | Yes |
| 4 | Crusade command | `commands/{domain}-crusade.md` | Yes |
| 5 | Crusade detail data (landing page) | `src/data/crusades/{slug}.data.ts` | No |
| 6 | Barrel export registration | `src/data/crusades/index.ts` | No |
| 7 | Home page card data | `src/data/crusades.data.ts` | No |
| 8 | README tables + counts | `README.md` | No |
| 9 | CLAUDE.md structure + counts | `CLAUDE.md` | No |
| 10 | Skill "When to Invoke" table | `skills/clean-code-standards/SKILL.md` | No |

**No changes needed to:** `plugin.json`, `marketplace.json`, `app.tsx`, `crusade.page.tsx`, `crusades.section.tsx`, `crusade-card.component.tsx`, `netlify.toml`, or `crusade-detail.types.ts`. These are all data-driven and auto-discover new crusades.

---

### Step 1: Generic Purist Agent

**File:** `agents/{domain}-purist.md`

This is the broad agent users invoke directly in conversation (e.g., "review the size of my files").

#### YAML Frontmatter

```yaml
---
name: {domain}-purist
description: {Dramatic persona description}. Use this agent to {what it does}. Triggers on "{trigger1}", "{trigger2}", "{trigger3}", "{trigger4}".
tools: Read, Edit, Write, Glob, Grep, Bash
model: opus
permissionMode: default
---
```

- `name` — Kebab-case identifier. Must match `{domain}-purist`.
- `description` — Include trigger phrases that Claude Code uses for auto-dispatch. List 5-8 trigger phrases.
- `tools` — Always `Read, Edit, Write, Glob, Grep, Bash`.
- `model` — Always `opus`.
- `permissionMode` — Always `default`.

#### Markdown Body Structure

Follow this section order (see `agents/size-purist.md` for full reference):

1. **Persona introduction** — Dramatic backstory establishing the purist's trauma/motivation
2. **`## CRITICAL: Search Exclusions`** — Standard block (copy from any existing purist):
   ```
   **ALWAYS exclude these directories from ALL searches:**
   - `node_modules/`, `dist/`, `build/`, `.next/`, `coverage/`
   ```
3. **Core doctrine** — The rules/laws of this domain with thresholds, tables, or diagrams
4. **Commandments** — Numbered rules with HERESY (bad code) and RIGHTEOUS (good code) examples
5. **`## Coverage Targets`** — Table of concern vs target percentage
6. **`## Detection Approach`** — Phased scanning strategy using Grep/Glob patterns
7. **`## Reporting Format`** — Template for summary statistics and detailed findings
8. **`## Voice and Tone`** — Sample dramatic quotes for violations and for clean code
9. **`## Write Mode`** — Templates for when `--write` flag is used (if applicable)
10. **`## Workflow`** — Numbered step sequence
11. **`## Success Criteria`** — Checklist for when a module passes

**Length:** ~500-1000 lines. Generic purists are comprehensive — they cover the FULL domain.

---

### Step 2: Specialist Agent Directory and Files

**Directory:** `agents/{domain}/`
**Files:** `agents/{domain}/{domain}-{concern}-purist.md` (create 4-6 specialists)

Specialists are narrow-focus agents deployed ONLY by the crusade command. Each covers one specific concern within the domain.

#### How to Decompose a Domain into Specialists

Split the generic purist's doctrine into 4-6 non-overlapping concerns. Examples:

| Domain | Specialists |
|--------|-------------|
| size | component, service, domain, utility |
| typescript | any, assertion, guard, schema |
| react | arch, hooks, state, data, perf |
| dead | comment, debug, export, orphan, todo, unreachable |

**Rule:** Every concern in the generic purist must be covered by exactly one specialist. No gaps, no overlaps.

#### Specialist YAML Frontmatter

```yaml
---
name: {domain}-{concern}-purist
description: "{Focused description}. Use this agent to {narrow purpose}. Triggers on '{trigger1}', '{trigger2}', '{domain} {concern} purist'."
tools: Read, Edit, Write, Glob, Grep, Bash
model: opus
permissionMode: default
---
```

#### Specialist Markdown Body Structure

1. **Title** — `# The {Concern} {Metaphor}: Specialist of the {Domain} Purist`
2. **Persona** — Shorter backstory focused on this specific concern
3. **`## CRITICAL: Search Exclusions`** — Same standard block as generic purist
4. **`## Specialist Domain`** — **REQUIRED.** Explicitly states:
   - **IN SCOPE**: What file types/patterns this specialist handles
   - **OUT OF SCOPE**: What other specialists handle (reference them by name)
5. **Thresholds/Rules** — Only the subset relevant to this concern
6. **Detection approach** — Scoped to this concern's patterns
7. **Reporting format** — Simplified for single-concern output

**Length:** ~200-400 lines. Specialists are focused — they carry only the doctrine they need.

#### Naming Convention

`{domain}-{concern}-purist.md` — Examples:
- `size-component-purist.md`
- `ts-any-purist.md` (TypeScript uses `ts-` prefix)
- `dead-orphan-purist.md`

**Exception:** TypeScript specialists use `ts-` prefix instead of `typescript-` for brevity.

---

### Step 3: Crusade Command

**File:** `commands/{domain}-crusade.md`

This is the slash command users invoke as `/church:{domain}-crusade`. It orchestrates parallel deployment of specialists.

#### YAML Frontmatter

```yaml
---
description: Unleash parallel {Domain} Purist agents to {what it audits} across the codebase. {Dramatic closing line}.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--flag1] [--flag2] [--scope all|api|web]
---
```

- `description` — One sentence. Starts with "Unleash parallel...".
- `allowed-tools` — Always `Read, Glob, Grep, Bash, Task, AskUserQuestion`. The `Task` tool is essential for spawning specialist subagents.
- `argument-hint` — Show supported flags. Always include `[path]`.

#### Markdown Body Structure (The Battle Plan)

Follow this phase structure exactly (see `commands/size-crusade.md` for full reference):

```
# {Domain} Crusade: {Dramatic Subtitle}

You are the **{Domain} Crusade Orchestrator**, commanding squads of {Domain} Purist agents...

## THE MISSION
{Dramatic mission statement}

## PHASE 1: RECONNAISSANCE
### Step 1: Parse Arguments
{Extract path, flags, scope from user command}

### Step 2: Scan the Codebase
{Use Glob/Grep/Bash to count files, detect patterns, find violations}

### Step 3: Classify Findings
{Apply thresholds, categorize by severity}

### Step 4: Generate Reconnaissance Report
{ASCII art report template with placeholders}

## PHASE 2: ASK FOR PERMISSION
{If destructive flag not set, show report-only. If set, confirm with user.}

## PHASE 3: SQUAD ORGANIZATION
{Map findings to specialist squads by concern}

### Squad Organization
**{Squad 1 Name}** → uses `{domain}-{concern1}-purist` agent
Handles: {file types/patterns}

**{Squad 2 Name}** → uses `{domain}-{concern2}-purist` agent
Handles: {file types/patterns}

{... repeat for each specialist}

## PHASE 4: PARALLEL DEPLOYMENT

For EACH squad, spawn the specialist subagent via Task tool.

**Task definition template:**
```
You are part of the {SQUAD NAME}.
{Mission description}
{List of files/items assigned to this squad}
{Instructions for analysis}
Use the output format from your instructions.
```

**CRITICAL: All Task tool calls MUST be in a SINGLE message for true parallelism.**

## PHASE 5: AGGREGATE AND REPORT
{Collect squad reports, synthesize into consolidated findings}

## PHASE 6: VICTORY REPORT
{ASCII art final report with before/after metrics}

## IMPORTANT OPERATIONAL RULES
{Edge cases, error handling, scope filtering}
```

**Key rules for the command body:**
- All Task tool calls for squad deployment MUST be described as going into a SINGLE message (this is the core parallelism pattern)
- Each squad section must reference the exact specialist `name` from the agent frontmatter
- Include ASCII art banners for dramatic war cry and report templates
- Include error handling for: invalid paths, no files found, compilation failures

**Length:** ~400-530 lines.

---

### Step 4: Crusade Detail Data (Landing Page)

**File:** `src/data/crusades/{slug}.data.ts`

This provides all content for the `/crusade/{slug}` landing page on the website.

```typescript
import type { CrusadeDetail } from '../crusade-detail.types';

export const {slug}Crusade: CrusadeDetail = {
  slug: '{slug}',
  name: 'The {Domain} Crusade',
  command: '/{slug}-crusade',
  icon: '{emoji}',                              // Unicode emoji
  tagline: '{One-line pitch}',
  quote: '{Dramatic quote showing personality}',
  color: 'from-{color1}-{shade} to-{color2}-{shade}',  // Tailwind gradient
  gradientFrom: '{color1}-{shade}',
  gradientTo: '{color2}-{shade}',
  description: '{2-3 sentence paragraph describing what the crusade does}',
  battleCry: '{Battle cry quote}',
  commandments: [
    { numeral: 'I', text: '{First commandment}' },
    { numeral: 'II', text: '{Second commandment}' },
    { numeral: 'III', text: '{Third commandment}' },
    { numeral: 'IV', text: '{Fourth commandment}' },
    { numeral: 'V', text: '{Fifth commandment}' },
  ],
  specialists: [
    {
      name: 'The {Specialist Title}',
      icon: '{emoji}',
      focus: '{What file types/patterns}',
      description: '{2-3 sentences with dramatic personality}',
    },
    // One entry per specialist agent (4-6 entries)
  ],
  howItWorks: [
    'Reconnaissance: {Phase 1 description}',
    'Squad Assignment: {Phase 2 description}',
    'Parallel Deployment: {Phase 3 description}',
    '{Phase 4 description}',
    '{Phase 5 description}',
    'Victory Report: {Final phase description}',
  ],
} as const;
```

**Interface reference** (`src/data/crusade-detail.types.ts`):
- `CrusadeDetail` — Full detail for landing page
- `CrusadeSpecialist` — `{ name, icon, focus, description }`
- `CrusadeCommandment` — `{ numeral, text }`

**Guidelines:**
- `slug` must be URL-safe (lowercase, no spaces). This becomes the URL path `/crusade/{slug}`
- `color` must be a valid Tailwind gradient pair (e.g., `from-rose-600 to-pink-900`)
- `gradientFrom` and `gradientTo` must match the `color` components
- `commandments` — Use Roman numerals (I through V or VI). Usually 5 commandments.
- `specialists` — One entry per specialist agent file. The `name` here is the display name (e.g., "The Component Surgeon"), NOT the agent `name` from frontmatter.
- `howItWorks` — 5-6 steps describing the crusade phases

---

### Step 5: Register in Barrel Export

**File:** `src/data/crusades/index.ts`

Add the import and register in the `crusadeDetails` record:

```typescript
import { {slug}Crusade } from './{slug}.data';

// Add to the record:
export const crusadeDetails: Record<string, CrusadeDetail> = {
  // ... existing entries
  {slug}: {slug}Crusade,
};
```

The key in the record MUST match the `slug` field in the data file.

---

### Step 6: Add Home Page Card Data

**File:** `src/data/crusades.data.ts`

Add an entry to the `crusades` array (uses the lighter `Crusade` interface, not `CrusadeDetail`):

```typescript
{
  name: 'The {Domain} Crusade',
  slug: '{slug}',
  command: '/{slug}-crusade',
  icon: '{emoji}',
  tagline: '{Same tagline as detail data}',
  quote: '{Same quote as detail data}',
  color: '{Same color as detail data}',
},
```

**Important:** The `slug`, `name`, `command`, `icon`, `tagline`, `quote`, and `color` values must be consistent with the detail data file. The section heading on the home page ("The Eleven Crusades") in `src/sections/crusades.section.tsx` should be updated to reflect the new count.

---

### Step 7: Update README.md

Update these sections in `README.md`:

1. **Badge counts** — Update the agent count badge (e.g., `59` → `59 + new specialists`) and crusade count badge if applicable
2. **Header subtitle** — Update "59 purist agents. 11 crusades." to new counts
3. **Purist Agents table** — Add a row for the new generic purist:
   ```
   | `{domain}-purist` | {Brief purpose description} |
   ```
4. **Crusade Commands table** — Add a row:
   ```
   | `/church:{slug}-crusade` | {specialist count} | {What it audits} |
   ```
5. **Website slugs list** — Add `{slug}` to the dot-separated list

---

### Step 8: Update CLAUDE.md

Update these sections in this file:

1. **Project Overview** — Update generic purist count, specialist count, and crusade command count
2. **Repository Structure** — Add the new specialist directory under `agents/` with the specialist count comment
3. **Crusade Commands table** (if one is present) — Add the new command

---

### Step 9: Update Skill

**File:** `skills/clean-code-standards/SKILL.md`

1. Add a new pillar section (### N+1. {Domain Name}) if the domain represents a new clean code pillar
2. Add a row to the "When to Invoke Crusades" table:
   ```
   | {Situation description} | `/church:{slug}-crusade` |
   ```

---

### Naming Reference

All names must be consistent across every asset:

| Concept | Convention | Example |
|---------|-----------|---------|
| Domain identifier | Lowercase, kebab-case | `size`, `dead`, `typescript` |
| URL slug | Same as domain (or abbreviated) | `size`, `dead`, `type` |
| Generic agent name | `{domain}-purist` | `size-purist` |
| Specialist agent name | `{domain}-{concern}-purist` | `size-component-purist` |
| Specialist directory | `agents/{domain}/` | `agents/size/` |
| Crusade command file | `{domain}-crusade.md` | `size-crusade.md` |
| Crusade data file | `{slug}.data.ts` | `size.data.ts` |
| Exported variable | `{slug}Crusade` | `sizeCrusade` |
| Slash command | `/{slug}-crusade` | `/size-crusade` |
| Invoked as plugin | `/church:{slug}-crusade` | `/church:size-crusade` |

**Note:** The slug may differ from the domain name for brevity. TypeScript uses domain `typescript` but slug `type`. When creating a new crusade, pick a short, memorable slug.

---

### Tailwind Gradient Colors Already Used

Avoid duplicating existing color schemes:

| Crusade | Gradient |
|---------|----------|
| type | `from-blue-600 to-purple-700` |
| git | `from-orange-600 to-red-700` |
| secret | `from-red-700 to-red-900` |
| arch | `from-purple-700 to-indigo-900` |
| dep | `from-green-700 to-emerald-900` |
| test | `from-cyan-600 to-blue-800` |
| dead | `from-gray-600 to-gray-900` |
| naming | `from-amber-600 to-yellow-800` |
| size | `from-rose-600 to-pink-900` |
| observability | `from-yellow-500 to-amber-700` |
| react | `from-sky-500 to-indigo-700` |
| a11y | `from-violet-600 to-fuchsia-800` |
| copy | `from-teal-600 to-cyan-800` |
| adaptive | `from-violet-600 to-fuchsia-900` |
| kotlin | `from-indigo-500 to-orange-600` |

---

### Verification After Creation

After creating all assets, verify:

1. **Plugin discovery** — Run `claude --plugin-dir ./church` and confirm the new agents and command appear
2. **Website build** — Run `npm run build` and confirm no TypeScript errors
3. **Landing page** — Run `npm run dev` and navigate to `/crusade/{slug}` to verify the page renders
4. **Home page** — Verify the new crusade card appears on the home page grid
5. **Consistency** — Confirm all names, slugs, counts, and colors match across all 10 assets
