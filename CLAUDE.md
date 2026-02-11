# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Church of Clean Code is a Claude Code plugin providing 10 specialized **purist subagents** and 10 **crusade orchestration commands** for parallel code quality enforcement. It includes a marketing website deployed to Netlify.

## Repository Structure

```
church/
├── agents/           # Purist subagent definitions (*.md)
├── commands/         # Crusade orchestration commands (*.md)
├── skills/           # Auto-discovered skills (SKILL.md)
├── .claude-plugin/   # Plugin manifest (plugin.json, marketplace.json)
├── src/              # Vite + React website source
│   ├── components/   # React components (*.component.tsx)
│   ├── sections/     # Page sections (*.section.tsx)
│   └── data/         # Static data (*.data.ts)
└── dist/             # Build output (deployed to Netlify)
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
2. **Squad Formation** - Group files into squads (3-6 files each)
3. **Parallel Deployment** - Launch multiple purist agents via Task tool in a single message
4. **Victory Report** - Aggregate results and report findings

Key rule: All Task tool calls MUST be in a single message for true parallelism.

## File Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| React components | `*.component.tsx` | `code-block.component.tsx` |
| Page sections | `*.section.tsx` | `hero.section.tsx` |
| Static data | `*.data.ts` | `bestiary.data.ts` |

## Website Tech Stack

- Vite 6 + React 19 + TypeScript 5.7
- Tailwind CSS 3.4
- Deployed to Netlify (church.btas.dev)

## Plugin Installation

Users install via:
```bash
/plugin marketplace add btachinardi/church
/plugin install church@btachinardi-church
```
