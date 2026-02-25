---
description: Unleash parallel Dead Code Purist agents to find and eliminate unused exports, orphaned files, commented-out blocks, and unreachable branches across the codebase. No dead code survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope all|api|web] [--reap] [--severity critical|warning|info] [--model haiku|sonnet|opus]
---

# Dead Code Crusade

The Dead Code Reapers descend upon the codebase in PARALLEL FORMATION. Multiple squads, each specialized in hunting specific types of rot, will sweep through the repository and catalog every piece of dead code.

This is not a cleanup. This is a PURGE.

## War Cry

Before deployment, announce the crusade:

```
🪦 THE DEAD CODE REAPERS DESCEND 🪦

{N} specialized squads deployed to inspect {M} files.
The living code will breathe easier when the dead are BURIED.

Squads deploying:
  ⚰️  Unused Export Squad
  🏚️  Orphan File Squad
  💀 Comment Archaeology Squad
  🐛 Debug Artifact Squad
  📝 Stale TODO Squad
  🚫 Unreachable Code Squad

Scope: {scope}
Mode: {audit|reap}
Severity Filter: {all|critical|warning|info}

Initiating reconnaissance...
```

## Phase 1: Reconnaissance

Before unleashing the squads, gather intelligence about the battlefield.

### 1.1 Determine Scope

Parse command arguments:

- **path**: Optional. If provided, limit to that directory. Default: current working directory.
- **--scope**: `all` (default), `api`, `web`, or custom path
- **--reap**: If present, DELETE dead code. If absent, AUDIT only.
- **--severity**: Filter results — `critical`, `warning`, `info`, or `all` (default)
- **--model**: Override model for specialist agents (`haiku`, `sonnet`, or `opus`). Default: inherits from main thread.

```typescript
const scope = args.scope || 'all';
const reapMode = args.includes('--reap');
const severityFilter = args.severity || 'all';
const targetPath = args.path || process.cwd();
```

### 1.2 Count the Living

Use Glob to count files in scope. **CRITICAL: ALWAYS exclude node_modules, dist, build, .next, coverage**:

```bash
# TypeScript/JavaScript files (with exclusions)
find {targetPath} -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/dist/*" \
  -not -path "*/build/*" \
  -not -path "*/.next/*" \
  -not -path "*/coverage/*" | wc -l
```

Report:
```
📊 Battlefield Analysis:
   - Total files in scope: {N}
   - TypeScript files: {M}
   - JavaScript files: {K}
   - Lines of code: {LOC}
```

### 1.3 Estimate the Dead

Quick pattern-based estimate. **CRITICAL: ALWAYS use --exclude-dir**:

```bash
# Unused exports (rough estimate)
grep -r "^export " --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=coverage | wc -l

# Commented code blocks
grep -r "^[[:space:]]*//.*[({;]" --include="*.ts" \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=coverage | wc -l

# Console statements
grep -r "console\.(log|debug|info)" --include="*.ts" --exclude="*.spec.ts" \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=coverage | wc -l

# TODO comments
grep -r "TODO\|FIXME\|HACK" --include="*.ts" \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=coverage | wc -l
```

Report:
```
🔍 Initial Scan (estimated dead code):
   - Exported symbols: {N}
   - Commented code lines: {M}
   - Console statements: {K}
   - TODO comments: {L}

Deploying specialized squads for precise analysis...
```

### Model Configuration

If `--model` was specified, pass it to every Task tool call using the `model` parameter (e.g., `model: "haiku"`).
If no `--model` flag was provided, omit the `model` parameter so agents inherit the model from the parent thread.

**Before deploying squads, announce the active model to the user:**
- If `--model haiku`: output `Model: Haiku 4.5`
- If `--model sonnet`: output `Model: Sonnet 4.6`
- If `--model opus`: output `Model: Opus 4.6`
- If no `--model` flag: output `Model: inherited (Opus 4.6)` — or whatever model the main thread is running

## Phase 2: Parallel Deployment

Spawn 6 specialized Dead Code Purist agents in PARALLEL, each with a focused mission.

### Squad 1: Unused Export Squad

**Mission**: Find every exported function, class, type, and constant that has ZERO importers.

**Delegation**:
```
Use the dead-export-purist agent to:

1. Find all export statements in {scope}
2. Build a complete import map across the entire codebase
3. Cross-reference: for each export, count importers
4. Classify by severity:
   - CRITICAL: Entire modules (5+ exports) with zero external usage
   - WARNING: Individual functions/classes/types with zero usage
   - INFO: Exports used only in tests

5. Output format:
   - File path
   - Export name
   - Line number
   - Severity
   - Reason (e.g., "0 importers found across codebase")

Focus ONLY on unused exports. Ignore commented code, TODOs, etc.

{if reapMode: "DELETE unused exports and update files accordingly."}
```

### Squad 2: Orphan File Squad

**Mission**: Find entire files not imported by any other file in the dependency tree.

**Delegation**:
```
Use the dead-orphan-purist agent to:

1. Build dependency graph starting from entry points:
   - {scope}/src/main.ts or index.ts
   - {scope}/src/app.ts
   - All files in {scope}/src/pages/ or routes/

2. Trace all imports recursively

3. Find files NOT in the dependency graph (orphans)

4. Exclude from orphan classification:
   - Config files (*.config.ts, tsconfig.json, etc.)
   - Test utilities in __tests__/utils
   - Type declaration files (*.d.ts) that don't need imports
   - Build scripts

5. Classify by severity:
   - CRITICAL: Entire directories of orphaned files
   - WARNING: Individual orphaned files (100+ lines)
   - INFO: Small orphaned files (<100 lines)

6. Output format:
   - File path
   - Lines of code
   - Severity
   - Last modified date (use git log)

Focus ONLY on orphaned files. Ignore exports, comments, etc.

{if reapMode: "DELETE orphaned files."}
```

### Squad 3: Comment Archaeology Squad

**Mission**: Find commented-out code blocks rotting in the codebase.

**Delegation**:
```
Use the dead-comment-purist agent to:

1. Find multi-line comment blocks containing code-like syntax:
   - Function calls with parentheses
   - Blocks with braces
   - Statements with semicolons
   - Variable declarations (const, let, var)

2. Exclude from detection:
   - JSDoc comments (@param, @returns, etc.)
   - Copyright headers
   - Documentation examples (if clearly marked)
   - Pseudocode in planning comments

3. Classify by severity:
   - CRITICAL: 50+ lines of commented code in single block
   - WARNING: 10-49 lines of commented code
   - INFO: Small snippets (1-9 lines)

4. For each block:
   - File path
   - Line range
   - Lines of code
   - First line preview
   - Age (use git blame)

Focus ONLY on commented code. Ignore exports, orphans, etc.

{if reapMode: "DELETE commented code blocks."}
```

### Squad 4: Debug Artifact Squad

**Mission**: Find console.log, debugger statements, and other debugging leftovers.

**Delegation**:
```
Use the dead-debug-purist agent to:

1. Find debugging artifacts:
   - console.log, console.debug, console.info
   - console.table, console.dir, console.trace
   - debugger; statements
   - alert() calls (if in web context)

2. Exclude from detection:
   - Test files (*.spec.ts, *.test.ts)
   - Explicit logger wrappers (logger.ts, log.service.ts)
   - Error logging (console.error, console.warn) in catch blocks

3. Classify by severity:
   - CRITICAL: console.logs in authentication/security modules
   - WARNING: console.logs in production code
   - INFO: debugger statements

4. Output format:
   - File path
   - Line number
   - Statement type (console.log, debugger, etc.)
   - Context (surrounding code)
   - Severity

Focus ONLY on debug artifacts. Ignore exports, orphans, etc.

{if reapMode: "DELETE debug artifacts."}
```

### Squad 5: Stale TODO Squad

**Mission**: Find TODO, FIXME, and HACK comments and determine if they're LIES.

**Delegation**:
```
Use the dead-todo-purist agent to:

1. Find all TODO/FIXME/HACK/XXX comments

2. For each comment:
   - Use git blame to get commit date
   - Calculate age in months
   - Extract TODO text

3. Classify by severity:
   - CRITICAL: TODOs 12+ months old
   - WARNING: TODOs 6-12 months old
   - INFO: TODOs 3-6 months old

4. Flag special cases:
   - TODOs referencing closed GitHub issues
   - TODOs with no context ("TODO: fix this")
   - TODOs duplicated across multiple files

5. Output format:
   - File path
   - Line number
   - Age (months)
   - TODO text
   - Severity
   - Recommendation (delete, file issue, or do now)

Focus ONLY on TODO comments. Ignore exports, orphans, etc.

{if reapMode: "DELETE TODOs older than 6 months."}
```

### Squad 6: Unreachable Code Squad

**Mission**: Find code that will NEVER execute.

**Delegation**:
```
Use the dead-unreachable-purist agent to:

1. Find unreachable code patterns:
   - Code after return/throw statements (in same block)
   - if (true) with dead else branch
   - if (false) with dead if branch
   - switch cases that can never match
   - Code after process.exit() or similar

2. Exclude:
   - Type guards where TypeScript proves unreachability
   - Intentionally unreachable code in error handling

3. Classify by severity:
   - CRITICAL: 20+ lines of unreachable code
   - WARNING: Functions with unreachable code
   - INFO: Small unreachable snippets

4. Output format:
   - File path
   - Line range
   - Unreachability reason
   - Lines affected
   - Severity

Focus ONLY on unreachable code. Ignore exports, orphans, etc.

{if reapMode: "DELETE unreachable code."}
```

## Phase 3: Squad Synchronization

After all squads return, consolidate findings.

### 3.1 Collect Reports

Each squad returns a structured report. Parse and merge:

```typescript
interface DeadCodeFinding {
  squad: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  category: string;
  filePath: string;
  lineRange: string;
  description: string;
  linesAffected: number;
  recommendation: string;
}

const allFindings: DeadCodeFinding[] = [
  ...unusedExportSquadReport,
  ...orphanFileSquadReport,
  ...commentArchaeologySquadReport,
  ...debugArtifactSquadReport,
  ...staleTodoSquadReport,
  ...unreachableCodeSquadReport,
];
```

### 3.2 Filter by Severity

If user specified `--severity`, filter:

```typescript
const filtered = allFindings.filter(f => {
  if (severityFilter === 'all') return true;
  return f.severity === severityFilter.toUpperCase();
});
```

### 3.3 Sort by Priority

Sort findings:
1. Severity (CRITICAL > WARNING > INFO)
2. Lines affected (descending)
3. File path (alphabetical)

### 3.4 Calculate Total Impact

```typescript
const totalLinesOfDeadCode = allFindings.reduce(
  (sum, f) => sum + f.linesAffected,
  0
);

const findingsBySeverity = {
  CRITICAL: allFindings.filter(f => f.severity === 'CRITICAL').length,
  WARNING: allFindings.filter(f => f.severity === 'WARNING').length,
  INFO: allFindings.filter(f => f.severity === 'INFO').length,
};

const findingsByCategory = allFindings.reduce((acc, f) => {
  acc[f.category] = (acc[f.category] || 0) + 1;
  return acc;
}, {});
```

## Phase 4: The Burial Report

Generate comprehensive markdown report.

```markdown
# 🪦 Dead Code Crusade Report

**Date**: {ISO timestamp}
**Scope**: {scope}
**Mode**: {AUDIT | REAP}
**Severity Filter**: {severityFilter}

---

## Executive Summary

The Dead Code Reapers have completed their sweep.

**Total Dead Code Found**: {totalLinesOfDeadCode} lines

**Findings by Severity**:
- 🔴 CRITICAL: {findingsBySeverity.CRITICAL}
- 🟡 WARNING: {findingsBySeverity.WARNING}
- 🔵 INFO: {findingsBySeverity.INFO}

**Findings by Category**:
- Unused Exports: {findingsByCategory['Unused Export']}
- Orphaned Files: {findingsByCategory['Orphaned File']}
- Commented Code: {findingsByCategory['Commented Code']}
- Debug Artifacts: {findingsByCategory['Debug Artifact']}
- Stale TODOs: {findingsByCategory['Stale TODO']}
- Unreachable Code: {findingsByCategory['Unreachable Code']}

{if reapMode:
**Lines Removed**: {totalLinesRemoved}
**Files Deleted**: {filesDeleted}
}

---

## 🔴 CRITICAL Findings

{for each CRITICAL finding:}

### {category}: `{filePath}`

**Lines**: {lineRange} ({linesAffected} lines)
**Issue**: {description}
**Recommendation**: {recommendation}

{if reapMode: "✅ BURIED"}

{end for}

---

## 🟡 WARNING Findings

{for each WARNING finding:}

### {category}: `{filePath}`

**Lines**: {lineRange} ({linesAffected} lines)
**Issue**: {description}
**Recommendation**: {recommendation}

{if reapMode: "✅ BURIED"}

{end for}

---

## 🔵 INFO Findings

{summary count only, not full details:}

- {count} unused exports
- {count} debug artifacts
- {count} small commented blocks

{if user wants details: provide expandable section}

---

## Squad Performance

| Squad | Findings | Lines Identified | {if reapMode: "Lines Removed"} |
|-------|----------|------------------|{if reapMode: "----------------"} |
| Unused Export Squad | {count} | {lines} | {if reapMode: removed} |
| Orphan File Squad | {count} | {lines} | {if reapMode: removed} |
| Comment Archaeology Squad | {count} | {lines} | {if reapMode: removed} |
| Debug Artifact Squad | {count} | {lines} | {if reapMode: removed} |
| Stale TODO Squad | {count} | {lines} | {if reapMode: removed} |
| Unreachable Code Squad | {count} | {lines} | {if reapMode: removed} |

---

## Next Steps

{if audit mode:}

To BURY the dead code, run:

\`\`\`bash
/dead-crusade {args} --reap
\`\`\`

**WARNING**: This will DELETE code. Review findings carefully first.

{if reap mode:}

The dead have been buried. The codebase is cleaner.

**Git Status**: {run git status to show changes}

Review changes, then commit:

\`\`\`bash
git add .
git commit -m "chore: remove dead code ({totalLinesRemoved} lines removed)"
\`\`\`

{end if}

---

## Remaining Manual Review Required

{list findings that couldn't be auto-removed:}

- Potential false positives requiring human judgment
- Code that might be accessed via reflection/dynamic imports
- Exports that might be part of public API

---

*The Dead Code Reapers have completed their mission.*
*The living code breathes easier.*

🪦 **{totalLinesOfDeadCode} lines of dead code catalogued** 🪦
{if reapMode: "⚰️ **{totalLinesRemoved} lines buried** ⚰️"}
```

## Phase 5: Victory Conditions

Determine mission success:

### Complete Victory
- All squads returned successfully
- Zero errors during scan
- {if reapMode: All targeted dead code removed}

### Partial Victory
- Some squads encountered errors
- Manual review required for some findings

### Defeat
- Critical errors prevented scans
- Scope too large (timeout)
- Permission issues

## User Interaction

### Before Reaping

If `--reap` flag is present, ask for confirmation:

```
AskUserQuestion:

"🪦 REAP MODE ACTIVATED 🪦

You are about to DELETE {totalLinesOfDeadCode} lines of code across {fileCount} files.

Severity breakdown:
- CRITICAL: {count} findings ({lines} lines)
- WARNING: {count} findings ({lines} lines)
- INFO: {count} findings ({lines} lines)

This action will MODIFY files. Ensure you have:
1. Committed recent work
2. Reviewed the audit report
3. Verified no false positives

Proceed with burial? (yes/no)"
```

### During Reaping

Show progress:

```
⚰️  Burying unused exports... (12/47)
⚰️  Removing orphaned files... (3/8)
⚰️  Deleting commented code... (23/56)
⚰️  Purging debug artifacts... (18/34)
⚰️  Erasing stale TODOs... (9/15)
⚰️  Eliminating unreachable code... (5/11)
```

### After Reaping

```
✅ BURIAL COMPLETE

{totalLinesRemoved} lines of dead code removed
{filesDeleted} files deleted
{filesModified} files modified

Git status:
{run: git status --short}

Next: Review changes and commit.
```

## Error Handling

### Graceful Degradation

If a squad fails:
- Log the error
- Continue with other squads
- Include error in final report

```
⚠️  Unreachable Code Squad encountered an error:
    {error message}
    Continuing with other squads...
```

### Timeout Protection

If scope is too large:
- Warn user
- Suggest narrowing scope
- Offer to continue anyway with timeout risk

### Permission Errors

If permission denied on file deletion:
- Log which files couldn't be deleted
- Provide manual deletion commands

## The Final Word

This is not cleanup. This is WARFARE against rot.

Dead code is the enemy. It distracts. It confuses. It LIES about what the system does.

Every unused export is a false promise.
Every orphaned file is wasted space.
Every commented block is cowardice.
Every debug artifact is negligence.
Every stale TODO is a broken commitment.
Every unreachable branch is delusion.

The Dead Code Crusade shows NO MERCY.

Deploy the squads. Catalog the dead. And when the user gives the order:

**BURY THEM ALL.**

---

🪦 *The dead shall not rise again.* 🪦
