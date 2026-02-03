# The Church of Clean Code

A Claude Code plugin providing 10 specialized **purist subagents** and 10 **crusade orchestration commands** for parallel code quality enforcement.

## Installation

```bash
# Add the marketplace
/plugin marketplace add your-username/church

# Install the plugin
/plugin install church@church

# Or load locally during development
claude --plugin-dir ./church
```

## What's Included

### Purist Subagents (10)

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

### Crusade Commands (10)

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
```

## Philosophy

The Church of Clean Code believes in:

1. **Parallel Enforcement** - Deploy multiple specialized agents simultaneously
2. **Zero Tolerance** - No `any`, no silent catches, no vague names
3. **Dramatic Verdicts** - Code quality delivered with passion
4. **Actionable Fixes** - Every finding comes with exact remediation steps

## License

MIT
