---
name: clean-code-standards
description: Core principles and standards for clean code enforcement. Auto-invoked when reviewing code quality, discussing best practices, or planning refactoring work.
---

# Clean Code Standards

This skill provides the foundational principles enforced by the Church of Clean Code purist agents.

## The Fourteen Pillars of Clean Code

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

### 11. Accessibility (Universal Readability)
- All images have alt text (descriptive or null)
- Text contrast: 4.5:1 minimum (3:1 for large text)
- No information conveyed by color alone
- All interactive elements keyboard accessible
- Focus indicators visible (3:1 contrast)
- ARIA used correctly (or native HTML preferred)
- No keyboard traps

### 12. High-Converting Copy
- No "Submit" buttons without context - use specific action verbs
- No no-reply email addresses - use monitored addresses
- Hero headlines must state a clear benefit
- Features must connect to benefits (FAB framework)
- Landing pages must follow AIDA/PAS/4Ps structure
- SMS messages must be under 160 characters
- Error messages must include next steps

### 13. Adaptive UI
- No hardcoded `100vw`/`100vh` -- use `%`, `dvh`, container queries
- Foldable hinge awareness via viewport segment APIs
- Canonical layouts (List-Detail, Feed, Supporting Pane) for wide screens
- State preservation across resize, fold, rotate (forms, scroll, navigation)
- Focus-visible styles on all interactive elements, no `outline: none`
- All images have `srcset` for multi-DPI support, icons are SVG
- Touch targets minimum 44x44 CSS pixels
- No hover-only interactions -- touch/keyboard alternatives required
- Drag-and-drop has visual feedback and keyboard alternative

### 14. Kotlin Purity
- Zero `!!` operators in production code
- Structured concurrency: no `GlobalScope`, no `runBlocking` outside main/tests
- Idiomatic Kotlin: no StringBuilder, ArrayList, HashMap, Java-style accessors
- Type safety: no `Any` parameters, no unsafe `as` casts, immutable data classes
- Functional discipline: no unhandled `runCatching`, max 2-level lambda nesting

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
| Accessibility compliance | `/church:a11y-crusade` |
| WCAG 2.2 audit | `/church:a11y-crusade --write` |
| Low conversion rates | `/church:copy-crusade` |
| Email deliverability issues | `/church:copy-crusade --scope email` |
| Landing page optimization | `/church:copy-crusade --scope landing` |
| Foldable/responsive UI audit | `/church:adaptive-crusade` |
| Touch target compliance | `/church:adaptive-crusade --concern touch` |
| Focus/keyboard accessibility | `/church:adaptive-crusade --concern focus` |
| Kotlin code quality review | `/church:kotlin-crusade` |
| Kotlin null safety audit | `/church:kotlin-crusade --scope null` |
| Coroutine discipline check | `/church:kotlin-crusade --scope coroutine` |
