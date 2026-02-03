---
description: Unleash parallel Naming Purist agents to enforce file naming conventions, variable semantics, and code clarity across the codebase. No vague name survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope all|api|web] [--fix]
---

# The Naming Crusade

The Naming Purists march across your codebase, reading every identifier, scrutinizing every file name, and judging every variable against the sacred commandments of clarity. This is not a gentle code review. This is a PURGE of linguistic laziness.

## War Cry

"The Naming Purists read every identifier in this codebase. {N} squads deployed across {M} files. Every name will be MEANINGFUL, every file will follow convention, every boolean will answer a question. If an identifier can't describe itself, it doesn't deserve to exist."

## Battle Plan

### Phase 1: Reconnaissance (Intelligence Gathering)

Before deploying squads, gather intelligence on the target codebase.

**Step 1.1: Parse Arguments**
```typescript
// Parse user input
const args = parseArguments(userInput);
const targetPath = args.path || process.cwd();
const scope = args.scope || 'all'; // 'all', 'api', 'web'
const shouldFix = args.includes('--fix');
```

**Step 1.2: Determine Scope**
```bash
# If scope is 'api', target apps/api
# If scope is 'web', target apps/web
# If scope is 'all', target everything
```

**Step 1.3: File Discovery**
Use `Glob` to discover all TypeScript files in scope:
```bash
**/*.ts
**/*.tsx
```

**Step 1.4: Quick Scan for Common Violations**
Use `Grep` for fast detection of common issues across ALL files:

**File Naming Violations**:
```bash
# Find files that don't match [name].[type].ts convention
# Look for PascalCase files, missing type suffixes, banned names
```

**Boolean Violations**:
```bash
# Pattern: boolean declarations without is/has/should/can/will/did prefix
# (const|let|var)\s+(?!is|has|should|can|will|did)[a-z]+\s*[:=].*(?:boolean|true|false)
```

**Generic Name Violations**:
```bash
# Pattern: banned generic names
# \b(data|result|temp|info|item|stuff|thing|misc|value)\b
# (but exclude when part of compound names like userData)
```

**Single Letter Variables**:
```bash
# Pattern: single letter variable declarations
# (const|let|var)\s+[a-z]\s*=
```

**Constant Casing Violations**:
```bash
# Pattern: exported constants in camelCase (should be SCREAMING_SNAKE)
# export const [a-z][a-zA-Z]+\s*=
```

**Step 1.5: Intelligence Summary**
Report initial findings:
```markdown
## Reconnaissance Complete

**Scope**: {scope}
**Files Scanned**: {count}
**Potential Violations Detected**:
- File naming: {count} files
- Boolean naming: {count} instances
- Generic names: {count} instances
- Single-letter vars: {count} instances
- Constant casing: {count} instances

**Squad Deployment Recommended**: {YES/NO}
```

If violations < 5 and not critical, report success and exit.
If violations >= 5 or any critical violations found, proceed to Phase 2.

### Phase 2: Squad Deployment (Parallel Attack)

Deploy specialized Naming Purist squads in PARALLEL using the `Task` tool. Each squad uses the `naming-purist` subagent with specific focus.

**Squad 1: File Naming Enforcement Squad**
```typescript
// Objective: Audit all file names against [name].[component-type].ts convention
// Files: All .ts/.tsx files from recon
// Focus: Detect violations, suggest renames following architectural layer rules
// Success Criteria: Every file follows convention or has rename suggestion
```

**Squad 2: Variable Naming Squad**
```typescript
// Objective: Audit variable naming (booleans, collections, single-letters, generics)
// Files: Files flagged in recon for variable violations
// Focus: Boolean prefixes, plural/singular, banned generic names, single-letter vars
// Success Criteria: Every violation has specific suggestion
```

**Squad 3: Function Naming Squad**
```typescript
// Objective: Audit function names for clarity and specificity
// Files: All .ts/.tsx files (prioritize controllers, services, handlers)
// Focus: Vague verbs (handle, process, manage), specificity, action clarity
// Success Criteria: Every vague function has specific rename suggestion
```

**Squad 4: Type/Constant/Event Naming Squad**
```typescript
// Objective: Audit types, interfaces, constants, and events
// Files: Files with type definitions, exports, event classes
// Focus: PascalCase types, SCREAMING_SNAKE constants, past-tense events
// Success Criteria: Convention compliance or specific fixes
```

**Deployment Strategy**:
```markdown
Deploying 4 Naming Purist squads in parallel:
- Squad 1 (File Naming): {N} files
- Squad 2 (Variables): {N} files
- Squad 3 (Functions): {N} files
- Squad 4 (Types/Events): {N} files

Each squad operates independently. Results will be reconciled after completion.
```

Use `Task` tool to spawn each squad:
```typescript
// Squad 1
await Task({
  agent: 'naming-purist',
  objective: 'Audit file names in {paths} against [name].[component-type].ts convention. For each violation, provide current name, suggested name, and architectural layer rationale.',
  background: true
});

// Squad 2
await Task({
  agent: 'naming-purist',
  objective: 'Audit variable naming in {paths}. Focus on: boolean prefixes, plural/singular collections, banned generic names, single-letter variables. Provide specific rename suggestions.',
  background: true
});

// Squad 3
await Task({
  agent: 'naming-purist',
  objective: 'Audit function names in {paths}. Identify vague verbs (handle, process, manage, do). Suggest specific, action-oriented names.',
  background: true
});

// Squad 4
await Task({
  agent: 'naming-purist',
  objective: 'Audit types, interfaces, constants, and events in {paths}. Check PascalCase types, SCREAMING_SNAKE constants, past-tense events. Flag violations.',
  background: true
});
```

### Phase 3: Reconciliation (Consolidate Results)

After all squads report back, consolidate findings.

**Step 3.1: Collect Squad Reports**
Retrieve results from all 4 squads.

**Step 3.2: Deduplicate and Prioritize**
Some violations may be reported by multiple squads (e.g., a file with bad name AND bad variables). Deduplicate and organize by severity.

**Severity Levels**:

**CRITICAL** (breaks convention, must fix):
- File naming convention violations
- Exported constants not in SCREAMING_SNAKE_CASE
- Domain events not in past tense
- Repository implementations not following .repository-impl.ts pattern

**WARNING** (should fix soon):
- Boolean variables without semantic prefixes
- Generic junk drawer names (data, result, temp, etc.)
- Vague function names (handle, process, manage)
- Unapproved abbreviations
- Collections not plural/items not singular

**INFO** (nice to improve):
- Single-letter variables in medium scopes
- Overly verbose names
- Minor clarity improvements

**Step 3.3: Generate Consolidated Report**
```markdown
# Naming Crusade - Final Report

## Executive Summary
- **Squads Deployed**: 4
- **Files Audited**: {N}
- **Total Violations**: {N}
  - Critical: {N}
  - Warning: {N}
  - Info: {N}

## Critical Violations (MUST FIX)

### File Naming Convention
| Current File | Suggested Rename | Reason |
|--------------|------------------|--------|
| src/utils.ts | src/string-formatter.ts | "utils" is a junk drawer |
| src/UserRepositoryImpl.ts | src/user.repository-impl.ts | Must follow [name].[type].ts |

### Constant Naming
| File | Line | Current | Suggested |
|------|------|---------|-----------|
| config.ts | 5 | apiBaseUrl | API_BASE_URL |

### Event Naming
| File | Line | Current | Suggested |
|------|------|---------|-----------|
| events.ts | 12 | CreateOrder | OrderCreated |

## Warning Violations (SHOULD FIX)

### Boolean Naming
| File | Line | Current | Suggested | Reason |
|------|------|---------|-----------|--------|
| form.ts | 12 | valid | isValidEmail | Frame the question |

### Generic Names
| File | Line | Current | Suggested | Reason |
|------|------|---------|-----------|--------|
| api.ts | 23 | data | users | Be specific |

### Vague Functions
| File | Line | Current | Suggested | Reason |
|------|------|---------|-----------|--------|
| handlers.ts | 45 | handleClick | submitOrderForm | What does it DO? |

## Info Suggestions (NICE TO HAVE)

{List minor improvements}

---

**Total Violations by Squad**:
- File Naming Squad: {N} violations
- Variable Naming Squad: {N} violations
- Function Naming Squad: {N} violations
- Type/Event Squad: {N} violations

**Estimated Fix Time**: {N} minutes
**Recommended Action**: {Fix critical violations immediately, schedule warnings for next sprint}
```

### Phase 4: Auto-Fix (Optional)

If `--fix` flag was provided, generate and execute fixes.

**Step 4.1: Generate Fix Commands**

For **file renames**:
```bash
# Use git mv to preserve history
git mv src/utils.ts src/string-formatter.ts
git mv src/UserRepositoryImpl.ts src/user.repository-impl.ts
```

For **import updates** (after file renames):
```bash
# Find all files that import the renamed files
# Use Edit tool to update import paths
```

For **identifier renames**:
```typescript
// Use Edit tool for each violation
// Example: Rename variable across file
Edit({
  file: 'src/form.ts',
  old_string: 'const valid = validateEmail(email)',
  new_string: 'const isValidEmail = validateEmail(email)',
});

// Update all references in same file
Edit({
  file: 'src/form.ts',
  old_string: 'if (valid)',
  new_string: 'if (isValidEmail)',
  replace_all: true,
});
```

**Step 4.2: Verification**
After applying fixes, run type check to ensure no broken references:
```bash
# If in monorepo
pnpm type-check

# Or standard
npm run type-check
```

If type check fails, report errors and ask user if they want to:
1. Revert fixes
2. Manually fix type errors
3. Continue anyway

**Step 4.3: Fix Summary**
```markdown
## Fixes Applied

### File Renames: {N}
- src/utils.ts → src/string-formatter.ts
- src/UserRepositoryImpl.ts → src/user.repository-impl.ts

### Identifier Renames: {N}
- form.ts:12 - `valid` → `isValidEmail`
- api.ts:23 - `data` → `users`
- handlers.ts:45 - `handleClick` → `submitOrderForm`

### Import Updates: {N} files

### Verification
✓ Type check passed
✓ No broken imports

**Next Steps**:
1. Review changes: `git diff`
2. Run tests: `pnpm test`
3. Commit if satisfied: `git add . && git commit -m "refactor: enforce naming conventions"`
```

### Phase 5: Victory Report

Present final report with dramatic flair.

```markdown
# THE NAMING CRUSADE HAS CONCLUDED

## Battle Statistics
- **Squads Deployed**: 4 elite Naming Purist units
- **Files Audited**: {N}
- **Violations Found**: {N}
- **Violations Fixed**: {N} (if --fix was used)
- **Code Clarity Improvement**: IMMEASURABLE

## The Purge Results

{Copy consolidated report here}

## The Commandments Enforced

Every file now follows (or has instructions to follow):
1. File names: `[name].[component-type].ts`
2. Booleans: `is/has/should/can/will/did` prefixes
3. Functions: Specific action verbs
4. Constants: SCREAMING_SNAKE_CASE
5. Events: Past-tense naming
6. Collections: Plural vs singular
7. No generic junk: data, result, temp, info BANNED
8. No single letters: Outside tight loops
9. No unapproved abbreviations
10. Types describe WHAT, not HOW

## What This Means

Every identifier in the audited codebase now has:
- **Clarity**: Names describe exactly what they are
- **Consistency**: Convention followed universally
- **Discoverability**: Patterns enable quick navigation
- **Maintainability**: Future developers will thank you

{If --fix was used}
The codebase has been PURGED of naming violations. Review the changes, run your tests, and commit when satisfied.

{If --fix was NOT used}
Fix commands and suggestions provided above. Apply them when ready to restore linguistic sanity to your codebase.

---

**"A name is the first line of documentation. Make it count."**
- The Naming Purist
```

## Usage Examples

### Example 1: Audit Entire Codebase
```bash
/naming-crusade --scope all
```
Deploys all 4 squads across entire codebase, reports violations, no fixes.

### Example 2: Audit API Only
```bash
/naming-crusade --scope api
```
Focuses squads on apps/api directory only.

### Example 3: Audit and Fix
```bash
/naming-crusade --scope web --fix
```
Audits apps/web and automatically applies fixes with verification.

### Example 4: Audit Specific Path
```bash
/naming-crusade src/domains/orders
```
Focuses on a specific subdirectory.

## Edge Cases and Safety

### Before Starting
1. Check if codebase is under git version control
2. Check for uncommitted changes (warn user)
3. If --fix is used without git, require explicit confirmation

### During Execution
1. If a squad fails, continue with others and report partial results
2. If file rename would overwrite existing file, skip and warn
3. If identifier rename would break exported API, flag as WARNING not auto-fix

### After Execution
1. Always run type check if fixes were applied
2. Provide rollback instructions if fixes were applied
3. Suggest running tests before committing

## Implementation Notes

### Argument Parsing
```typescript
function parseArguments(input: string) {
  const args = input.trim().split(/\s+/);
  const path = args.find(arg => !arg.startsWith('--')) || process.cwd();
  const scope = args.find(arg => arg.startsWith('--scope'))?.split('=')[1] || 'all';
  const fix = args.includes('--fix');

  return { path, scope, fix };
}
```

### Scope Resolution
```typescript
function resolveScopePath(scope: string, basePath: string) {
  switch (scope) {
    case 'api': return path.join(basePath, 'apps/api');
    case 'web': return path.join(basePath, 'apps/web');
    case 'all': return basePath;
    default: return basePath;
  }
}
```

### Squad Coordination
Use `Task` tool with `background: true` for parallel execution.
Wait for all squads to complete before reconciliation.

### Fix Application Order
1. File renames first (affects imports)
2. Import path updates second
3. Identifier renames last (within files)

## Remember

This is not a gentle suggestion system. This is a CRUSADE. Names matter. Clarity matters. Convention matters. Every vague identifier is a lie that compounds over time. Every generic "data" variable is a future bug waiting to happen.

Deploy the squads. Purge the violations. Restore clarity.

**THE NAMING CRUSADE BEGINS NOW.**
