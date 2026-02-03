---
name: clean-code-standards
description: Core principles and standards for clean code enforcement. Auto-invoked when reviewing code quality, discussing best practices, or planning refactoring work.
---

# Clean Code Standards

This skill provides the foundational principles enforced by the Church of Clean Code purist agents.

## The Ten Pillars of Clean Code

### 1. Type Safety
- No `any` types - use `unknown` with guards
- No type assertions (`as`) - use runtime validation
- Exhaustive switch statements with `never` checks
- Branded types for domain safety

### 2. Git Hygiene
- Conventional Commits format required
- Atomic commits (one logical change per commit)
- No WIP commits on main branches
- Clean worktree at session end

### 3. Architecture Boundaries
- Domain layer depends on NOTHING
- Dependencies flow downward only
- No circular dependencies
- Repository interfaces in domain, implementations in infrastructure

### 4. Test Coverage
- Domain: 90% coverage minimum
- Application: 80% coverage minimum
- All entities require property tests (fast-check)
- No weak assertions (toBeTruthy without context)

### 5. Dead Code Elimination
- Zero unused exports
- Zero orphaned files
- No commented-out code (git remembers)
- TODOs older than 3 months must be actioned or deleted

### 6. Naming Clarity
- File format: `[name].[component-type].ts`
- Booleans: `is/has/should/can/will/did` prefixes
- No generic names: `data`, `result`, `temp`, `info`
- Collections plural, items singular

### 7. Size Limits
- Components: max 350 lines (critical at 500)
- Functions: max 40 lines (suspicious), 80 lines (condemned)
- Nesting: max 4 levels
- No god classes

### 8. Secret Security
- Zero secrets in code or git history
- Environment variables for all credentials
- .gitignore must cover all secret patterns
- Rotation required if ever committed

### 9. Dependency Health
- Zero known vulnerabilities
- No packages >2 major versions behind
- No unused dependencies
- devDependencies vs dependencies properly separated

### 10. Observability
- No empty catch blocks
- Structured logging with correlation IDs
- All endpoints traced
- Health checks for all dependencies

## When to Invoke Crusades

| Situation | Recommended Crusade |
|-----------|---------------------|
| Before PR merge | `/church:type-crusade`, `/church:test-crusade` |
| Architecture review | `/church:arch-crusade` |
| Security audit | `/church:secret-crusade --history` |
| Dependency update | `/church:dep-crusade` |
| Codebase cleanup | `/church:dead-crusade`, `/church:size-crusade` |
| New team onboarding | `/church:naming-crusade` |
| Production incident | `/church:observability-crusade --illuminate` |
