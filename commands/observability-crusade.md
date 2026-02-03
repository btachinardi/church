---
description: Unleash parallel Observability Purist agents to audit logging, tracing, metrics, and error handling across the codebase. No silent failure survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope all|api|web] [--illuminate]
---

# The Observability Crusade

**"In the beginning, there was darkness upon the codebase. And the Observability Purists said: LET THERE BE LIGHT."**

This command orchestrates a multi-squad crusade to eliminate observability sins and bring full instrumentation to your codebase.

## Command Invocation

```bash
# Survey darkness only (report mode)
/observability-crusade

# Survey specific scope
/observability-crusade --scope api
/observability-crusade --scope web

# Survey and apply fixes
/observability-crusade --illuminate

# Target specific directory
/observability-crusade apps/api/src/domains/orders
/observability-crusade apps/api/src/domains/orders --illuminate
```

## The Four Phases

### Phase 1: The Darkness Survey

First, we scan the codebase to identify every sin against observability:

**Sins to detect:**

1. **Empty Catch Blocks**: `catch (e) {}`, `catch {}`, catch blocks with only comments
2. **Bare Console Calls**: `console.log`, `console.error`, `console.warn` in non-test files
3. **Untraced Endpoints**: API controllers/routes with no logging
4. **Untraced External Calls**: HTTP calls, database queries without timing/logging
5. **Missing Correlation IDs**: No middleware, no propagation
6. **Unstructured Logs**: String concatenation instead of structured objects
7. **Missing Health Checks**: No `/health` endpoint
8. **Swallowed Errors**: Catch and return null/undefined without logging
9. **Missing Business Metrics**: No counters or histograms for business operations
10. **Error Responses Without Context**: Throwing exceptions without logging details

**Scan commands:**

```bash
# Empty catch blocks
rg 'catch\s*\([^)]*\)\s*\{\s*\}' --type ts --type tsx

# Bare console calls (exclude test files)
rg 'console\.(log|error|warn|info|debug)' --type ts --type tsx -g '!*.spec.ts' -g '!*.test.ts' -g '!*.e2e.ts'

# Catch blocks with only comments
rg 'catch.*\{[^}]*//[^}]*\}' --type ts --type tsx

# Missing correlation ID usage in services
rg 'logger\.(info|error|warn)' -A 2 --type ts | rg -v 'correlationId'

# Unstructured string concat logs
rg "logger\.(info|error|warn)\(['\"].*\+.*\)" --type ts

# Missing health check endpoints
rg -L '@Get.*health' apps/api

# Promise without catch
rg 'await\s+\w+\(.*\)' --type ts -g '!*.spec.ts' | rg -v 'try|catch'
```

### Phase 2: The Revelation (Darkness Report)

Present findings in a structured report:

```
╔════════════════════════════════════════════════════════════════╗
║                    THE DARKNESS REPORT                         ║
║          "For they coded without light, and production fell"   ║
╠════════════════════════════════════════════════════════════════╣
║ Sin Category                    │ Count │ Severity             ║
╠═════════════════════════════════╪═══════╪══════════════════════╣
║ Empty Catch Blocks              │  XX   │ CRITICAL             ║
║ Bare console.log Calls          │  XX   │ HIGH                 ║
║ Untraced API Endpoints          │  XX   │ HIGH                 ║
║ Untraced External Calls         │  XX   │ HIGH                 ║
║ Missing Correlation IDs         │  XX   │ HIGH                 ║
║ Unstructured Log Messages       │  XX   │ MEDIUM               ║
║ Swallowed Errors                │  XX   │ CRITICAL             ║
║ Missing Health Checks           │  XX   │ CRITICAL             ║
║ Missing Business Metrics        │  XX   │ MEDIUM               ║
║ Error Responses Without Logs    │  XX   │ HIGH                 ║
╠════════════════════════════════════════════════════════════════╣
║ TOTAL SINS DETECTED: XXX                                       ║
╚════════════════════════════════════════════════════════════════╝
```

**Darkness details:**

For each sin category, show:
- File paths where sins occur
- Line numbers
- Code snippets (first 3 examples)
- Explanation of consequences

**Example revelation:**

```
🔥 EMPTY CATCH BLOCKS (23 found) — CRITICAL

When these fail in production, you will have NO INFORMATION.
The error will be swallowed into the void. Users will suffer.
Engineers will be blind.

Examples:
  apps/api/src/domains/orders/application/order.service.ts:45
    try {
      await this.processPayment(order);
    } catch (e) {
      // Silent death. No log. No trace. Only darkness.
    }

  apps/api/src/domains/users/infrastructure/user.repository-impl.ts:89
    try {
      return await this.db.query(sql);
    } catch {
      // Not even a variable name. Pure void.
    }

  [+20 more occurrences]
```

### Phase 3: The Enlightenment (Parallel Squad Deployment)

Deploy specialized squads to eliminate each category of sin:

**Squad 1: Logging Purification Squad**

**Objective**: Replace bare console calls with structured logging, add context to all logs

**Scope**: All files with `console.log`, `console.error`, `console.warn`

**Actions:**
1. Replace `console.log` with appropriate logger (NestJS Logger, winston, pino)
2. Convert to structured format: `logger.info('message', { context })`
3. Add correlation ID to all log statements
4. Ensure proper log levels (ERROR for failures, WARN for degraded, INFO for events)

**Success criteria**: Zero bare console calls outside test files

---

**Squad 2: Error Handling Squad**

**Objective**: Fix empty catch blocks, swallowed errors, add proper error logging

**Scope**: All empty catch blocks, catch blocks with only comments, catch-and-return-null

**Actions:**
1. Add error logging with full context (entity IDs, operation details, correlation ID)
2. Either re-throw with context or handle gracefully (never swallow silently)
3. Create custom error classes if needed
4. Log error message and stack trace

**Success criteria**: Zero empty catch blocks, all errors logged before handling

---

**Squad 3: Distributed Tracing Squad**

**Objective**: Add correlation ID propagation, instrument endpoints, trace external calls

**Scope**: All API controllers, HTTP clients, database query methods

**Actions:**
1. Add/verify correlation ID middleware exists
2. Add request/response logging to all API endpoints (method, path, duration, status)
3. Instrument external HTTP calls with correlation ID propagation
4. Add timing to database queries and external service calls
5. Ensure correlation ID flows through entire request lifecycle

**Success criteria**: All endpoints traced, correlation IDs in every log, external calls timed

---

**Squad 4: Health & Metrics Squad**

**Objective**: Add health checks, instrument business operations with metrics

**Scope**: Application entry point, business use cases

**Actions:**
1. Create/enhance `/health` endpoint that checks all dependencies (db, cache, queues)
2. Add business metrics counters (orders.placed, payments.processed, users.registered)
3. Add latency histograms (api.request.duration with percentiles)
4. Add error rate metrics (api.errors.count by endpoint and status)
5. Ensure metrics have proper tags (endpoint, method, status)

**Success criteria**: Health check exists and works, business metrics tracking all critical operations

---

**Squad sizing:**

- **Small codebase** (<50 files): 2 squads (Logging+Errors combined, Tracing+Metrics combined)
- **Medium codebase** (50-200 files): 3 squads (Logging, Errors+Tracing, Metrics)
- **Large codebase** (200+ files): 4 separate squads

**Squad prompts:**

Each squad is spawned with the observability-purist agent:

```
You are Squad {N}: {Squad Name}

Your sacred mission: {Objective}

Target scope: {File pattern or directory}

Your tasks:
{Specific actions}

Success criteria: {Measurable outcomes}

Files to focus on: {Specific file paths from darkness survey}

Do NOT modify files outside the target scope.

Report back:
- Number of sins eliminated
- Files modified
- Patterns added (e.g., correlation ID middleware, health check endpoint)
- Remaining issues (if any)

Remember: NEVER log sensitive data (PII, tokens, passwords).
Respect existing instrumentation patterns.
Enhance, don't duplicate.
```

**War cry before deployment:**

```
╔════════════════════════════════════════════════════════════════╗
║                    THE CRUSADE BEGINS                          ║
╚════════════════════════════════════════════════════════════════╝

And the Observability Purists spoke unto the codebase:

    "LET THERE BE LIGHT"

{N} squads descend upon {M} files.

Squad 1 (Logging Purification): {X} files, {Y} sins to purge
Squad 2 (Error Handling): {X} files, {Y} sins to purge
Squad 3 (Distributed Tracing): {X} files, {Y} sins to purge
Squad 4 (Health & Metrics): {X} files, {Y} sins to purge

Every silent failure shall SPEAK.
Every lost request shall be FOUND.
Every metric shall be MEASURED.
Every health check shall VERIFY.

The darkness ends TODAY.
```

### Phase 4: The Verification & Illumination Report

After all squads return, verify the light has been brought:

**Verification steps:**

1. Re-run darkness detection greps
2. Count remaining sins
3. Verify no sensitive data was logged
4. Check correlation ID middleware exists
5. Verify health check endpoint responds
6. Confirm structured logging is used

**The Illumination Report:**

```
╔════════════════════════════════════════════════════════════════╗
║                  THE ILLUMINATION REPORT                       ║
║              "And there was light, and it was good"            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  DARKNESS ELIMINATED:                                          ║
║                                                                ║
║    Empty Catch Blocks Filled:           XX                     ║
║    console.log Calls Consecrated:       XX                     ║
║    API Endpoints Traced:                XX                     ║
║    External Calls Instrumented:         XX                     ║
║    Correlation IDs Propagated:          XX                     ║
║    Health Checks Added:                 XX                     ║
║    Business Metrics Instrumented:       XX                     ║
║    Error Handlers Enlightened:          XX                     ║
║    Structured Logs Created:             XX                     ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║  REMAINING DARKNESS:                    XX                     ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  NEW LIGHT SOURCES CREATED:                                    ║
║                                                                ║
║    ✓ Correlation ID Middleware: {file path}                   ║
║    ✓ Health Check Endpoint: {file path}                       ║
║    ✓ Request Logging Interceptor: {file path}                 ║
║    ✓ Exception Filter: {file path}                            ║
║    ✓ Metrics Service: {file path}                             ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║  OBSERVABILITY STATUS: {percentage}% ILLUMINATED               ║
╚════════════════════════════════════════════════════════════════╝
```

**If darkness remains:**

```
⚠️  DARKNESS PERSISTS in {N} locations:

Critical issues requiring manual attention:
1. {File}:{Line} - {Issue description}
2. {File}:{Line} - {Issue description}
...

These require human judgment due to:
- Complex error handling logic
- External library integration
- Legacy code dependencies
- Business logic considerations
```

**Final summary:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE CRUSADE IS COMPLETE.

Before: XXX sins detected across YYY files
After:  XX sins remain across YY files

Illumination rate: ZZ%

Your production systems shall no longer suffer in darkness.
When incidents occur, you shall have LIGHT to guide you.
Logs shall speak. Traces shall connect. Metrics shall measure.

But vigilance is eternal. New darkness will emerge.
The Observability Purist must return periodically.

May your logs be structured, your traces complete,
and your metrics actionable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Flags & Options

### --scope

Limit the crusade to a specific part of the codebase:

- `--scope api`: Only backend (apps/api)
- `--scope web`: Only frontend (apps/web)
- `--scope all`: Entire codebase (default)

### --illuminate

**Without this flag**: Report-only mode. Identifies sins but doesn't fix them.

**With this flag**: Apply fixes automatically. Squads will modify code.

**Safety considerations when using --illuminate:**

1. **Always commit before running** with --illuminate
2. **Review changes carefully** — automated fixes may need refinement
3. **Check for sensitive data** — verify no secrets were logged
4. **Run tests** after illumination to ensure nothing broke
5. **Consider running without** --illuminate first to see the scope

### [path]

Target a specific directory:

```bash
/observability-crusade apps/api/src/domains/orders
```

Only files within this path will be scanned and illuminated.

## Implementation Details

### Orchestration Logic

```
1. Parse arguments (path, scope, illuminate flag)
2. Determine target directories based on scope
3. Run parallel darkness detection greps
4. Aggregate results into Darkness Report
5. Present Darkness Report to user
6. If --illuminate flag:
   a. Ask user confirmation
   b. Calculate squad count based on codebase size
   c. Partition files by sin category
   d. Spawn squads in parallel with observability-purist agent
   e. Wait for all squads to complete
   f. Aggregate squad results
7. Run verification greps
8. Generate Illumination Report
9. Highlight remaining darkness (if any)
10. Provide next steps
```

### File Scope Determination

```typescript
// Pseudo-code for scope resolution
function getTargetPaths(scope: string, path?: string): string[] {
  if (path) {
    return [path]; // User-specified directory
  }

  switch (scope) {
    case 'api':
      return ['apps/api/src'];
    case 'web':
      return ['apps/web/src'];
    case 'all':
    default:
      return ['apps/', 'packages/'];
  }
}
```

### Squad Size Calculation

```typescript
function calculateSquadCount(fileCount: number): number {
  if (fileCount < 50) return 2;
  if (fileCount < 200) return 3;
  return 4;
}

function getSquadConfiguration(squadCount: number) {
  if (squadCount === 2) {
    return [
      { name: 'Logging & Errors', tasks: ['logging', 'errors'] },
      { name: 'Tracing & Metrics', tasks: ['tracing', 'metrics'] },
    ];
  }
  if (squadCount === 3) {
    return [
      { name: 'Logging Purification', tasks: ['logging'] },
      { name: 'Error & Tracing', tasks: ['errors', 'tracing'] },
      { name: 'Health & Metrics', tasks: ['metrics'] },
    ];
  }
  // squadCount === 4
  return [
    { name: 'Logging Purification', tasks: ['logging'] },
    { name: 'Error Handling', tasks: ['errors'] },
    { name: 'Distributed Tracing', tasks: ['tracing'] },
    { name: 'Health & Metrics', tasks: ['metrics'] },
  ];
}
```

### Sensitive Data Protection

Before completing, always grep for potential sensitive data in logs:

```bash
# Check for common PII patterns in log statements
rg 'logger.*\b(password|token|secret|key|creditCard|ssn|email)\b' --type ts

# Check for direct variable logging (may contain PII)
rg 'logger.*\buser\.' --type ts | rg -v 'userId|user\.id'
```

If found, WARN and provide guidance on redacting.

## Safety Protocols

### Pre-Flight Checks

Before running with --illuminate:

1. **Git status check**: Ensure working directory is clean
2. **Test suite check**: Verify tests are passing
3. **Backup reminder**: Remind user to commit current state

### Post-Illumination Steps

After fixes are applied:

1. **Run linter**: `pnpm lint` to catch formatting issues
2. **Run type checker**: `pnpm type-check` to catch type errors
3. **Run tests**: `pnpm test` to ensure nothing broke
4. **Manual review**: Always review changes before committing

### Rollback Procedure

If issues arise:

```bash
# If changes haven't been committed
git restore .

# If changes were committed
git revert HEAD

# If multiple commits
git reset --hard HEAD~{N}
```

## Example Sessions

### Example 1: Report-Only Mode

```
User: /observability-crusade