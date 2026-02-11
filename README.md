<div align="center">

# The Church of Clean Code

**75 purist agents. 14 crusades. Zero tolerance.**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Plugin v2.0.0](https://img.shields.io/badge/plugin-v2.0.0-brightgreen.svg)](https://github.com/btachinardi/church)
[![Claude Code](https://img.shields.io/badge/Claude_Code-v1.0.33%2B-blueviolet.svg)](https://docs.anthropic.com/en/docs/claude-code)
[![75 Agents](https://img.shields.io/badge/agents-75-orange.svg)](#purist-agents)
[![14 Crusades](https://img.shields.io/badge/crusades-14-red.svg)](#crusade-commands)
[![Website](https://img.shields.io/badge/website-church.btas.dev-black.svg)](https://church.btas.dev)

A Claude Code plugin that deploys specialized AI agents in parallel to enforce code quality across your entire codebase.

</div>

---

## Quick Start

```bash
# 1. Add the marketplace
/plugin marketplace add btachinardi/church

# 2. Install the plugin
/plugin install church@btachinardi-church

# 3. Launch a crusade
/church:type-crusade
```

> Requires **Claude Code v1.0.33+**

---

## Features

- **Parallel Enforcement** — Crusades deploy multiple specialist agents simultaneously in a single message, scanning your codebase at scale
- **Two-Tier Agent System** — 14 generic purists for direct invocation + 61 specialists for crusade deployment
- **14 Crusade Commands** — One `/church:*-crusade` command per domain, each orchestrating 4-6 specialist agents
- **Actionable Fixes** — Every finding includes exact file locations and remediation steps
- **Zero Configuration** — Install and run. No config files, no setup, no dependencies

---

## Purist Agents

Invoke any generic purist directly by mentioning its trigger phrases in conversation:

| Agent | Purpose |
|-------|---------|
| `typescript-purist` | Eliminate `any`, enforce strict typing, validate schemas |
| `arch-purist` | DDD layer boundaries, import graphs, circular dependencies |
| `test-purist` | Coverage gaps, weak assertions, missing property tests |
| `react-purist` | Component architecture, hook discipline, state management |
| `git-purist` | Conventional commits, atomic changes, clean history |
| `dead-code-purist` | Unused exports, orphaned files, stale TODOs, dead branches |
| `naming-purist` | File naming, variable semantics, function clarity |
| `size-purist` | Bloated files, god classes, mega-components |
| `secret-purist` | Credentials in code and git history |
| `dep-purist` | Vulnerabilities, outdated/unused packages, bloat |
| `observability-purist` | Missing logs, traces, metrics, health checks |
| `a11y-purist` | WCAG compliance, semantic HTML, ARIA, keyboard navigation, perceivability |
| `copy-purist` | UX microcopy, email/SMS, headlines, persuasion frameworks |
| `adaptive-purist` | Foldable support, touch targets, focus management, DPI, state preservation |

Each generic purist covers its full domain. During crusades, **61 specialist agents** (4-6 per domain) handle narrower concerns for deeper analysis.

---

## Crusade Commands

Each crusade performs reconnaissance, forms squads, deploys specialists in parallel, and delivers a consolidated report.

| Command | Specialists | What It Audits |
|---------|:-----------:|----------------|
| `/church:type-crusade` | 4 | `any` usage, type assertions, type guards, schema validation |
| `/church:arch-crusade` | 5 | Layer violations, circular deps, cross-domain leaks, patterns, shadow coupling |
| `/church:test-crusade` | 4 | Coverage, assertions, property tests, test hygiene |
| `/church:react-crusade` | 5 | Component tiers, hooks, state, data flow, performance |
| `/church:git-crusade` | 4 | Commit messages, atomicity, worktree, branch hygiene |
| `/church:dead-crusade` | 6 | Unused exports, orphaned files, comments, debug code, unreachable branches, stale TODOs |
| `/church:naming-crusade` | 4 | Files, variables, functions, types |
| `/church:size-crusade` | 4 | Components, services, utilities, domain modules |
| `/church:secret-crusade` | 4 | Source scanning, config files, git history, supply chain |
| `/church:dep-crusade` | 4 | Vulnerabilities, freshness, unused packages, bloat |
| `/church:observability-crusade` | 4 | Logging, tracing, metrics, error handling |
| `/church:a11y-crusade` | 4 | WCAG 2.2 AA compliance, semantic HTML, keyboard access, ARIA, contrast, alt text |
| `/church:copy-crusade` | 4 | Buttons, error messages, email/SMS, headlines, value props, CTAs, frameworks |
| `/church:adaptive-crusade` | 5 | Foldable seams, state preservation, focus management, DPI/resolution, touch targets |

---

## Usage

```bash
# Run a type crusade across the entire codebase
/church:type-crusade

# Audit architecture of a specific domain
/church:arch-crusade apps/api/src/domains/orders

# Scan for secrets including git history
/church:secret-crusade --history --deep

# Find and split bloated files
/church:size-crusade --split

# Audit dependencies and auto-fix
/church:dep-crusade --fix

# Purge impure React components
/church:react-crusade src/components
```

You can also invoke purist agents directly in conversation:

```
> "Review the types in src/domains/auth"
  → triggers typescript-purist

> "Are there any dead exports in packages/ui?"
  → triggers dead-code-purist

> "Check the naming conventions in this project"
  → triggers naming-purist
```

---

## Installation Scopes

```bash
# User scope — yourself, across all projects (default)
/plugin install church@btachinardi-church --scope user

# Project scope — all collaborators on this repo
/plugin install church@btachinardi-church --scope project

# Local scope — yourself, in this repo only
/plugin install church@btachinardi-church --scope local
```

---

## Local Development

```bash
# Run the plugin directly from source
claude --plugin-dir ./church

# Start the marketing website dev server
npm run dev

# Build the website
npm run build
```

---

## Website

The marketing website at **[church.btas.dev](https://church.btas.dev)** includes dedicated landing pages for each crusade at `/crusade/{slug}`:

`type` · `arch` · `test` · `react` · `git` · `dead` · `naming` · `size` · `secret` · `dep` · `observability` · `a11y` · `copy` · `adaptive`

---

## Philosophy

1. **Parallel over sequential** — Deploy many specialists at once, not one generalist slowly
2. **Zero tolerance** — No `any`, no silent catches, no vague names, no dead code
3. **Actionable over advisory** — Every finding comes with exact file paths and fixes
4. **Dramatic verdicts** — Code quality delivered with conviction

---

## License

[MIT](LICENSE) — Bruno Tachinardi
