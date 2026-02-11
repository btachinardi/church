# The Church of Clean Code

> **[church.btas.dev](https://church.btas.dev)** | [GitHub](https://github.com/btachinardi/church)

A Claude Code plugin providing 11 specialized **purist subagents**, 48 **specialist purist agents**, and 11 **crusade orchestration commands** for parallel code quality enforcement.

## Installation

```bash
# Add the marketplace
/plugin marketplace add btachinardi/church

# Install the plugin
/plugin install church@btachinardi-church
```

### Installation Scopes

```bash
# User scope (yourself across all projects) - default
/plugin install church@btachinardi-church --scope user

# Project scope (all collaborators on this repo)
/plugin install church@btachinardi-church --scope project

# Local scope (yourself in this repo only)
/plugin install church@btachinardi-church --scope local
```

### Local Development

```bash
claude --plugin-dir ./church
```

> Requires Claude Code v1.0.33+

## What's Included

### Purist Subagents (11)

Specialized agents that can be spawned for focused code quality tasks:

| Agent | Triggers On | Purpose |
|-------|-------------|---------|
| `typescript-purist` | "type review", "fix types", "no any" | Eliminate `any`, enforce strict typing |
| `git-purist` | "commit review", "clean history" | Enforce conventional commits, atomic changes |
| `arch-purist` | "architecture review", "layer violations" | DDD layer boundaries, import graphs |
| `test-purist` | "coverage audit", "test quality" | Coverage gaps, weak assertions, property tests |
| `dead-code-purist` | "dead code", "unused code" | Unused exports, orphaned files, stale TODOs |
| `naming-purist` | "naming conventions", "bad names" | File naming, variable semantics, clarity |
| `size-purist` | "large files", "god class" | Bloated files, mega-components, splits |
| `secret-purist` | "secret scan", "leaked keys" | Credentials in code and git history |
| `dep-purist` | "dependency audit", "npm audit" | Vulnerabilities, outdated, unused packages |
| `observability-purist` | "logging review", "tracing audit" | Missing logs, traces, metrics, health checks |
| `react-purist` | "react review", "component audit", "hook review" | Component architecture, hook discipline, state management |

### Crusade Commands (11)

Orchestration commands that deploy multiple purist agents in parallel:

| Command | Purpose |
|---------|---------|
| `/church:type-crusade` | Parallel TypeScript type enforcement |
| `/church:git-crusade` | Parallel git history and worktree cleanup |
| `/church:arch-crusade` | Parallel architecture boundary enforcement |
| `/church:test-crusade` | Parallel test coverage and quality audit |
| `/church:dead-crusade` | Parallel dead code elimination |
| `/church:naming-crusade` | Parallel naming convention enforcement |
| `/church:size-crusade` | Parallel bloated file detection and splits |
| `/church:secret-crusade` | Parallel secret scanning (code + history) |
| `/church:dep-crusade` | Parallel dependency audit and remediation |
| `/church:observability-crusade` | Parallel observability instrumentation |
| `/church:react-crusade` | Parallel React component and hook audit |

## Usage Examples

```bash
# Run a type crusade on the entire codebase
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

## Website

The marketing website at [church.btas.dev](https://church.btas.dev) includes individual crusade landing pages at `/crusade/{slug}` for each of the 11 crusades:

| Slug | Page |
|------|------|
| `type` | [/crusade/type](https://church.btas.dev/crusade/type) |
| `git` | [/crusade/git](https://church.btas.dev/crusade/git) |
| `secret` | [/crusade/secret](https://church.btas.dev/crusade/secret) |
| `arch` | [/crusade/arch](https://church.btas.dev/crusade/arch) |
| `dep` | [/crusade/dep](https://church.btas.dev/crusade/dep) |
| `test` | [/crusade/test](https://church.btas.dev/crusade/test) |
| `dead` | [/crusade/dead](https://church.btas.dev/crusade/dead) |
| `naming` | [/crusade/naming](https://church.btas.dev/crusade/naming) |
| `size` | [/crusade/size](https://church.btas.dev/crusade/size) |
| `observability` | [/crusade/observability](https://church.btas.dev/crusade/observability) |
| `react` | [/crusade/react](https://church.btas.dev/crusade/react) |

## Philosophy

The Church of Clean Code believes in:

1. **Parallel Enforcement** - Deploy multiple specialized agents simultaneously
2. **Zero Tolerance** - No `any`, no silent catches, no vague names
3. **Dramatic Verdicts** - Code quality delivered with passion
4. **Actionable Fixes** - Every finding comes with exact remediation steps

## License

MIT
