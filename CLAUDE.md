# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Church of Clean Code is a Claude Code plugin providing 11 **generic purist subagents**, 48 **specialized purist agents**, and 11 **crusade orchestration commands** for parallel code quality enforcement. It includes a marketing website deployed to Netlify.

## Repository Structure

```
church/
├── agents/              # Purist subagent definitions (*.md)
│   ├── react-purist.md  # Generic purists (11 total, for direct invocation)
│   ├── react/           # Specialized purists (48 total, for crusade deployment)
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
│   └── size/            # 4 size specialists
├── commands/            # Crusade orchestration commands (*.md)
│   ├── react-crusade.md # 11 crusade commands total
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
│   │       └── ...      # 11 crusade data files + index.ts
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
- **Generic purists** (`agents/*.md`): 11 broad agents for direct invocation. Each covers a full domain (e.g., `react-purist` covers all React concerns).
- **Specialist purists** (`agents/<domain>/*.md`): 48 focused agents for crusade deployment. Each covers one narrow concern (e.g., `react-arch-purist` covers only component tier classification).

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
