---
description: Unleash parallel Test Purist agents to audit coverage, test quality, and assertions across the codebase. No untested code survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope domain|app|all] [--write]
---

# Test Crusade: The War Against Untested Code

Deploy parallel Test Purist agents to audit every corner of the codebase. No untested function escapes. No weak assertion survives. No coverage gap remains hidden.

## War Cry

```
╔════════════════════════════════════════════════════════════════╗
║                   THE TEST PURISTS DESCEND                      ║
║                                                                 ║
║  {N} Squads Deployed. Every Function Will Be Tested.           ║
║  Every Assertion Will Be MEANINGFUL.                            ║
║  Coverage Is Not A Number — It's A PROMISE.                     ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Command Arguments

```bash
/test-crusade [path] [--scope domain|app|all] [--write]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `.` | Root path to audit (absolute path required for agents) |
| `--scope` | `all` | Focus area: `domain` (domain layer only), `app` (application layer only), `all` (entire codebase) |
| `--write` | `false` | If present, squads will WRITE missing tests, not just report |

### Examples
```bash
# Audit entire codebase, report only
/test-crusade

# Audit domain layer in specific path
/test-crusade /workspace/apps/api/src/domains --scope domain

# Audit and FIX by writing missing tests
/test-crusade /workspace/apps/api --scope app --write

# Audit specific domain module
/test-crusade /workspace/apps/api/src/domains/orders
```

---

## Battle Plan: The Five Phases

### Phase 1: Reconnaissance (Intelligence Gathering)

**Mission**: Understand the battlefield before deploying squads.

**Actions**:
1. **Determine absolute path**: Convert user-provided path to absolute
2. **Run coverage report**: Execute `pnpm test:coverage` from workspace root
3. **Parse coverage data**: Extract coverage percentages by file and layer
4. **Count files**: Total source files, total test files, ratio
5. **Identify scope**: Based on `--scope` flag, filter files to audit
6. **Scan for test debt**: Find all `test.skip`, `test.todo`, and skipped tests

**Outputs**:
- Absolute path for agent delegation
- Coverage baseline (before any fixes)
- List of files below target coverage
- Count of untested files (0% coverage)
- Count of test debt items

**Intelligence Report Format**:
```
=== RECONNAISSANCE REPORT ===
Target Path: /absolute/path/to/audit
Scope: {domain|app|all}
Write Mode: {ENABLED|DISABLED}

Source Files: {count}
Test Files: {count}
Test Ratio: {test_files / source_files}

Coverage Baseline:
  Domain Layer:      {X}% (Target: 90%)
  Application Layer: {X}% (Target: 80%)
  Infrastructure:    {X}% (Target: 70%)

Files Below Target: {count}
Untested Files (0%): {count}
Test Debt Items: {count}

SQUADS DEPLOYING: 4
```

---

### Phase 2: Parallel Squad Deployment

Deploy FOUR specialized squads simultaneously, each with `test-purist` agent in background mode:

#### Squad 1: Coverage Gap Squad
**Mission**: Find all files below target coverage.

**Agent Task**:
```
You are Coverage Gap Squad of the Test Crusade.

Target: {absolute_path}
Scope: {domain|app|all}
Write Mode: {true|false}

MISSION: Find all source files below target coverage for their layer.

Coverage Targets:
- Domain: 90%
- Application: 80%
- Infrastructure: 70%

1. Parse coverage report for files in scope
2. Classify each file: CRITICAL (0%), WARNING (below target), OK (at/above target)
3. For each file below target:
   - Identify untested public functions
   - Calculate coverage gap (target - current)
   - Estimate tests needed

{IF WRITE MODE}
4. For CRITICAL files (0% coverage):
   - Create basic test file with structure
   - Write tests for core public functions
   - Follow templates from your system prompt
{/IF}

Report findings in structured format.
```

**Success Criteria**:
- All files in scope classified by coverage status
- Specific untested functions identified
- (Write mode) Test files created for 0% coverage files

---

#### Squad 2: Assertion Quality Squad
**Mission**: Find weak assertions that provide false confidence.

**Agent Task**:
```
You are Assertion Quality Squad of the Test Crusade.

Target: {absolute_path}
Scope: {domain|app|all}
Write Mode: {true|false}

MISSION: Find and eliminate weak assertions.

Weak Assertion Patterns:
- toBeTruthy() or toBeDefined() without context
- toMatchSnapshot() on non-UI code
- Vague test names: "works", "test1", "handles correctly"
- Tests with no assertions (empty body)
- Generic expectations without specific values

1. Scan all test files in scope
2. Find weak assertion patterns using Grep
3. Classify by severity:
   - CRITICAL: No assertions in test body
   - WARNING: Weak assertions (toBeTruthy, toBeDefined)
   - INFO: Vague test naming

{IF WRITE MODE}
4. For CRITICAL cases:
   - Add meaningful assertions based on function behavior
   - Update test names to be specific
   - Replace weak assertions with explicit checks
{/IF}

Report findings with file:line references.
```

**Success Criteria**:
- All weak assertions cataloged
- Specific replacements recommended
- (Write mode) Weak assertions replaced with meaningful ones

---

#### Squad 3: Property Test Squad
**Mission**: Ensure all domain entities have property tests.

**Agent Task**:
```
You are Property Test Squad of the Test Crusade.

Target: {absolute_path}
Scope: {domain|app|all}
Write Mode: {true|false}

MISSION: Find domain entities and validators without property tests.

Property Test Targets:
- All *.entity.ts files (100% must have property tests)
- All *.validator.ts files (80% must have property tests)

1. Glob for *.entity.ts and *.validator.ts in scope
2. Check for corresponding *.property.spec.ts file
3. If property test exists, verify it tests:
   - Serialization roundtrips
   - Domain invariants
   - Validation rules
4. Check for *.arbitrary.ts (fast-check generators)

{IF WRITE MODE}
5. For missing property tests:
   - Create *.property.spec.ts file
   - Create *.arbitrary.ts if needed
   - Write roundtrip tests
   - Write invariant tests
{/IF}

Report findings with severity:
- CRITICAL: Entity with no property tests
- WARNING: Property tests exist but incomplete
- INFO: Missing arbitrary generators
```

**Success Criteria**:
- All entities and validators cataloged
- Missing property test files identified
- (Write mode) Property test files created with roundtrip/invariant tests

---

#### Squad 4: Test Hygiene Squad
**Mission**: Find test debt and structural issues.

**Agent Task**:
```
You are Test Hygiene Squad of the Test Crusade.

Target: {absolute_path}
Scope: {domain|app|all}
Write Mode: {true|false}

MISSION: Find accumulated test debt and hygiene issues.

Test Debt Patterns:
- test.skip / it.skip — skipped tests
- test.todo / it.todo — placeholder tests
- Tests longer than 50 lines
- Missing beforeEach cleanup
- Unverified mocks (mock created but never verified)

1. Grep for skip/todo patterns
2. Find tests exceeding line limit
3. Find mocks without verification
4. Check for missing test cleanup

{IF WRITE MODE}
5. For each issue:
   - Unskip tests and fix underlying issue
   - Complete todo tests
   - Refactor long tests into smaller focused tests
   - Add mock verifications
{/IF}

Report findings categorized by debt type.
```

**Success Criteria**:
- All skipped/todo tests cataloged
- Long tests identified
- Unverified mocks found
- (Write mode) Test debt resolved

---

### Phase 3: Severity Classification

Aggregate findings from all squads and classify:

#### CRITICAL (Must Fix Immediately)
- Domain entities with 0% coverage
- Application use cases with 0% coverage
- Domain entities without property tests
- Tests with no assertions

#### WARNING (Below Standard)
- Files below target coverage for their layer
- Weak assertions (toBeTruthy, toBeDefined)
- Missing property tests on validators
- Skipped tests (test.skip)

#### INFO (Quality Improvements)
- Vague test names
- Missing arbitrary generators
- Todo tests
- Tests longer than 50 lines

---

### Phase 4: Consolidated Report

Aggregate all squad reports into unified battle report.

```
╔════════════════════════════════════════════════════════════════╗
║                    TEST CRUSADE COMPLETE                        ║
╚════════════════════════════════════════════════════════════════╝

BATTLEFIELD SUMMARY
-------------------
Target: {absolute_path}
Scope: {domain|app|all}
Files Audited: {count}
Test Files Analyzed: {count}

SQUAD REPORTS
-------------
✓ Coverage Gap Squad:      {findings_count} issues
✓ Assertion Quality Squad: {findings_count} issues
✓ Property Test Squad:     {findings_count} issues
✓ Test Hygiene Squad:      {findings_count} issues

SEVERITY BREAKDOWN
------------------
CRITICAL: {count}
  • Domain/Application files at 0% coverage: {count}
  • Domain entities without property tests: {count}
  • Tests with no assertions: {count}

WARNING: {count}
  • Files below target coverage: {count}
  • Weak assertions: {count}
  • Skipped tests: {count}

INFO: {count}
  • Vague test names: {count}
  • Missing arbitraries: {count}
  • Todo tests: {count}

{IF WRITE MODE}
TESTS WRITTEN
-------------
• New test files created: {count}
• Assertions strengthened: {count}
• Property tests added: {count}
• Test debt resolved: {count}

COVERAGE DELTA
--------------
Before:
  Domain Layer:      {X}%
  Application Layer: {X}%

After:
  Domain Layer:      {Y}% ({delta:+X}%)
  Application Layer: {Y}% ({delta:+X}%)
{/IF}

TOP PRIORITY TARGETS
--------------------
{List top 5 CRITICAL issues with specific file paths}

DETAILED FINDINGS
-----------------
{Consolidated findings from all squads, grouped by severity}

═══════════════════════════════════════════════════════════════

{IF all critical issues resolved}
VICTORY: This {scope} is approaching battle-readiness.
Critical coverage gaps eliminated. Continue improving WARNING items.
{ELSE}
ORDERS: {count} CRITICAL issues remain. Address these immediately.
Untested code is code that DOES NOT WORK — you just don't know it yet.
{/IF}
```

---

### Phase 5: Victory Conditions

#### Full Victory (All Clear)
- Zero CRITICAL issues
- Zero WARNING issues
- All coverage targets met
- All entities have property tests
- No test debt

**Declaration**: "COMPLETE VICTORY. This {scope} is BATTLE-READY. Tests are comprehensive, assertions are meaningful, coverage is proven. DISMISSED."

#### Partial Victory (Critical Issues Resolved)
- Zero CRITICAL issues
- Some WARNING issues remain
- Coverage approaching targets

**Declaration**: "CRITICAL THREATS ELIMINATED. {count} WARNING items remain. Continue quality improvements. Making PROGRESS."

#### Ongoing Battle (Critical Issues Remain)
- CRITICAL issues present
- Coverage gaps significant

**Declaration**: "UNACCEPTABLE. {count} CRITICAL issues remain. Untested code is a THREAT to production. Address immediately."

---

## Implementation Workflow

### Step 1: Parse Arguments
```typescript
const args = parseArguments(userInput)
// args.path: string (relative or absolute)
// args.scope: 'domain' | 'app' | 'all'
// args.write: boolean
```

### Step 2: Resolve Absolute Path
```bash
# Convert to absolute path
cd {args.path} && pwd
```

Store absolute path for agent delegation (agents require absolute paths).

### Step 3: Run Reconnaissance
```bash
# Run coverage from workspace root
pnpm test:coverage

# Parse coverage output
# Extract coverage percentages by file
# Count test debt items
```

### Step 4: Deploy Squads in Parallel
Use `Task` tool to spawn 4 `test-purist` agents in background mode:

```typescript
// All squads run in parallel
Task({
  agent: 'test-purist',
  background: true,
  task: coverageGapMission,
  absolutePath: resolvedPath
})

Task({
  agent: 'test-purist',
  background: true,
  task: assertionQualityMission,
  absolutePath: resolvedPath
})

Task({
  agent: 'test-purist',
  background: true,
  task: propertyTestMission,
  absolutePath: resolvedPath
})

Task({
  agent: 'test-purist',
  background: true,
  task: testHygieneMission,
  absolutePath: resolvedPath
})
```

### Step 5: Wait for All Squads
Monitor background tasks until all complete.

### Step 6: Aggregate Reports
Collect findings from all squads, classify by severity, generate consolidated report.

### Step 7: Re-run Coverage (Write Mode Only)
If `--write` flag was set:
```bash
pnpm test:coverage
```

Calculate coverage delta (after - before).

### Step 8: Generate Final Report
Print consolidated battle report with severity breakdown, priority targets, and victory status.

---

## Edge Cases and Validation

### Invalid Path
If path does not exist:
```
ERROR: Target path does not exist: {path}
ORDERS: Provide a valid path to audit.
```

### No Test Framework
If no test command found in package.json:
```
ERROR: No test framework detected.
ORDERS: Ensure vitest or jest is configured.
```

### Empty Scope
If scope filter yields zero files:
```
WARNING: No files found matching scope '{scope}' in {path}.
Verify path and scope are correct.
```

### Write Mode Without Permission
If `--write` flag set but user hasn't confirmed:
```
AskUserQuestion: Write mode will CREATE and MODIFY test files. Confirm? (yes/no)
```

---

## Output Examples

### Minimal Invasion (Few Issues)
```
═══════════════════════════════════════════════════════════════
                    TEST CRUSADE COMPLETE
═══════════════════════════════════════════════════════════════

Target: /workspace/apps/api/src/domains/users
Scope: all
Files Audited: 23
Test Files Analyzed: 18

SEVERITY BREAKDOWN
------------------
CRITICAL: 0 ✓
WARNING: 3
  • Files below target coverage: 2
  • Weak assertions: 1
INFO: 5
  • Vague test names: 5

VICTORY: This module is approaching battle-readiness.
Continue improving WARNING items for complete coverage.
```

### Major Campaign (Many Issues)
```
═══════════════════════════════════════════════════════════════
                    TEST CRUSADE COMPLETE
═══════════════════════════════════════════════════════════════

Target: /workspace/apps/api/src/domains/orders
Scope: domain
Files Audited: 45
Test Files Analyzed: 12

SEVERITY BREAKDOWN
------------------
CRITICAL: 8 ⚠️
  • Domain entities at 0% coverage: 3
  • Domain entities without property tests: 5
WARNING: 18 ⚠️
  • Files below target coverage: 12
  • Weak assertions: 6
INFO: 23

TOP PRIORITY TARGETS
--------------------
1. CRITICAL: order.entity.ts — 0% coverage, 6 public functions untested
2. CRITICAL: order-item.entity.ts — 0% coverage, 4 public functions untested
3. CRITICAL: discount.entity.ts — 0% coverage, 3 public functions untested
4. CRITICAL: order.entity.ts — Missing property tests (invariants untested)
5. CRITICAL: order-validator.ts — Missing property tests (validation untested)

ORDERS: 8 CRITICAL issues remain. Address these immediately.
Untested code is code that DOES NOT WORK — you just don't know it yet.
```

### Write Mode Delta
```
TESTS WRITTEN
-------------
• New test files created: 8
• Assertions strengthened: 23
• Property tests added: 5
• Test debt resolved: 4

COVERAGE DELTA
--------------
Before:
  Domain Layer:      45%
  Application Layer: 67%

After:
  Domain Layer:      78% (+33%)
  Application Layer: 82% (+15%)

PROGRESS: Significant improvement. {count} WARNING items remain.
Continue assault to reach 90% domain coverage target.
```

---

## Success Metrics

The Test Crusade is successful when:

1. **All squads complete**: No errors, all reports received
2. **Findings classified**: CRITICAL/WARNING/INFO breakdown clear
3. **Priority targets listed**: Top 5 most critical issues identified
4. **Actionable guidance**: Specific files and line numbers provided
5. **(Write mode) Coverage improved**: Measurable delta in coverage percentages

**Remember: The goal is not just to find issues, but to ELIMINATE them.**

Coverage is not a number — it's a PROMISE that the code behaves as specified.

---

## Final Notes

- **Absolute paths**: Always convert user paths to absolute before agent delegation
- **Parallel execution**: All 4 squads run simultaneously for speed
- **Background mode**: Squads run in background to avoid blocking
- **Write mode confirmation**: Always confirm before writing files
- **War cry**: Display at start to set tone and expectations
- **Victory declaration**: Clear pass/fail based on CRITICAL issues

The Test Purists show no mercy. No untested code escapes. No weak assertion survives.

**DISMISSED.**
