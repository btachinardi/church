---
description: Unleash parallel React Purist agents to audit component architecture, hook discipline, state management, and effect hygiene across the frontend codebase. No impure component survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope architecture|effects|state|all] [--write] [--model haiku|sonnet|opus]
---

# React Crusade: The War Against Impure Components

Deploy parallel React Purist agents to audit every component, every hook, every effect. No tier violation escapes. No rogue effect survives. No state management sin remains hidden.

## War Cry

```
╔════════════════════════════════════════════════════════════════╗
║              THE REACT PURISTS DESCEND                         ║
║                                                                ║
║  {N} Squads Deployed. Every Component Will Be Classified.     ║
║  Every Effect Will Be CLEANSED.                                ║
║  The Immutable State Demands PURITY.                           ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Command Arguments

```bash
/react-crusade [path] [--scope architecture|effects|state|all] [--write]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `.` | Root path to audit (absolute path required for agents) |
| `--scope` | `all` | Focus area: `architecture` (tier compliance), `effects` (hook discipline), `state` (state management), `all` (complete audit) |
| `--write` | `false` | If present, squads will REFACTOR components, not just report |
| `--model` | *(inherit)* | Override model for specialist agents: `haiku`, `sonnet`, or `opus` |

### Examples
```bash
# Full frontend audit
/react-crusade

# Audit component architecture only
/react-crusade /workspace/apps/web/src --scope architecture

# Audit and FIX effect violations
/react-crusade /workspace/apps/web/src/domains --scope effects --write

# Audit specific domain's frontend
/react-crusade /workspace/apps/web/src/domains/orders

# Audit state management patterns
/react-crusade /workspace/apps/web/src --scope state
```

---

## Battle Plan: The Five Phases

### Phase 1: Reconnaissance (Intelligence Gathering)

**Mission**: Map all frontend components and classify the battlefield.

**Actions**:
1. **Determine absolute path**: Convert user-provided path to absolute
2. **Discover component files**: Glob for all `*.tsx` files (excluding tests, stories, index files)
3. **Count components**: Total component files, hooks, stores, providers
4. **Scan imports**: Extract import patterns to pre-classify tiers
5. **Identify frameworks**: Detect query library (TanStack Query, SWR, etc.), state library (Zustand, Redux, etc.)
6. **Scan for red flags**: Quick grep for `useEffect.*fetch`, `eslint-disable.*exhaustive-deps`, excessive `useState`

**Outputs**:
- Absolute path for agent delegation
- Component inventory (total files by type)
- Framework detection results
- Red flag count (preliminary severity estimate)

**Intelligence Report Format**:
```
=== RECONNAISSANCE REPORT ===
Target Path: /absolute/path/to/audit
Scope: {architecture|effects|state|all}
Write Mode: {ENABLED|DISABLED}

Component Files: {count}
Hook Files: {count}
Store Files: {count}
Provider Files: {count}

Frameworks Detected:
  Query Library: {TanStack Query | SWR | none}
  State Library: {Zustand | Redux | Jotai | none}
  UI Library: {shadcn/ui | MUI | none}

Red Flags Detected:
  fetch in useEffect: {count}
  eslint-disable exhaustive-deps: {count}
  Components > 200 lines: {count}

SQUADS DEPLOYING: 5
```

---

### Model Configuration

If `--model` was specified, pass it to every Task tool call using the `model` parameter (e.g., `model: "haiku"`).
If no `--model` flag was provided, omit the `model` parameter so agents inherit the model from the parent thread.

### Phase 2: Parallel Squad Deployment

Deploy FIVE specialized squads simultaneously, each with its own specialist agent:

#### Squad 1: Component Architecture Squad (`react-arch-purist`)
**Mission**: Classify all components into the sacred three tiers and flag violations.

**Agent Task**:
```
You are the Component Architecture Squad of the React Crusade.

Target: {absolute_path}
Scope: {architecture|all}
Write Mode: {true|false}

MISSION: Classify every React component into the Three-Tier Architecture.

The Three Tiers:
- Tier 1 (Dumb UI): Generic building blocks. No domain types. No stores.
- Tier 2 (Domain UI): Maps domain concepts to UI. Props only. No stores/hooks for state.
- Tier 3 (Provider): Sources state from stores/context. Passes props to Tier 2. No raw HTML/Tailwind.

1. Glob all *.tsx component files in scope
2. For each component, analyze imports and JSX:
   - Imports store/context/query hooks? → Tier 3
   - Imports domain types but no stores? → Tier 2
   - Imports neither? → Tier 1
   - Imports BOTH stores AND domain types with complex JSX? → MIXED (violation)
3. For Tier 3 (Providers): Flag if they render Dumb UI components directly
4. For Tier 2 (Domain UI): Flag if they subscribe to stores
5. For Tier 1 (Dumb UI): Flag if they import domain types

{IF WRITE MODE}
6. For MIXED components:
   - Split into Provider (Tier 3) + Component (Tier 2)
   - Extract domain mapping logic into Tier 2
   - Keep state sourcing in Tier 3
{/IF}

Report findings with classification and violations.
```

**Success Criteria**:
- All components classified into tiers
- Mixed-tier components flagged as CRITICAL
- Providers rendering raw HTML flagged as WARNING
- (Write mode) Mixed components split into proper tiers

---

#### Squad 2: Effect Discipline Squad (`react-hooks-purist`)
**Mission**: Audit all `useEffect` usage for correctness and cleanup.

**Agent Task**:
```
You are the Effect Discipline Squad of the React Crusade.

Target: {absolute_path}
Scope: {effects|all}
Write Mode: {true|false}

MISSION: Purge every effect heresy.

Effect Heresies:
- Data fetching inside useEffect (should use query library)
- Missing cleanup functions (subscriptions, listeners, timers)
- Derived state computed in useEffect (should be useMemo or inline)
- Suppressed exhaustive-deps linter rule
- Multiple useEffect calls in a single component (>3 is suspicious)

1. Grep all useEffect calls across scope
2. For each useEffect:
   a. Contains fetch/axios/api call? → CRITICAL: data fetch in effect
   b. Contains addEventListener/subscribe/WebSocket without return? → CRITICAL: missing cleanup
   c. Only calls a setState with computed value? → WARNING: derived state
   d. Has eslint-disable for exhaustive-deps? → WARNING: suppressed linter
3. Count useEffect per component file
4. Flag components with 3+ effects

{IF WRITE MODE}
5. Replace fetch-in-effect with useQuery
6. Add cleanup functions to effects with subscriptions
7. Convert derived state effects to useMemo/inline
8. Remove eslint-disable and fix dependency arrays
{/IF}

Report findings with file:line references and code snippets.
```

**Success Criteria**:
- All useEffect calls audited
- Data fetching in effects flagged as CRITICAL
- Missing cleanups flagged as CRITICAL
- Derived state flagged as WARNING
- (Write mode) Effects replaced/fixed

---

#### Squad 3: State Management & Unifying Lens Squad (`react-state-purist`)
**Mission**: Enforce the Great Separation, the Unifying Lens doctrine, and detect all state management heresies.

**Agent Task**:
```
You are the State Management & Unifying Lens Squad of the React Crusade.

Target: {absolute_path}
Scope: {state|all}
Write Mode: {true|false}

MISSION: Enforce the Great Separation and the Doctrine of the Unifying Lens.

The Great Separation:
- Server state (React Query) and Client state (Zustand) must NEVER be merged
- React Query holds the Real Truth (confirmed server data)
- Zustand holds User Intent (filters, UI state) and Visions of the Future (pending optimistic items)

The Three Forbidden Paths:
- THE CACHE HACK: Using setQueryData in onMutate to inject optimistic data into the query cache
- THE SYNCING STORE: Using useEffect to copy React Query data into Zustand
- THE SIN OF DUPLICATION: Storing the same API data in both React Query and Zustand

The Righteous Path (Unifying Lens):
- Pending/optimistic items live ONLY in a Zustand pending store
- Server truth lives ONLY in the React Query cache
- A custom hook merges them via useMemo (Computed Derivation)
- Pending items tracked by UUID, exorcised in onSettled

1. Scan store files (*.store.ts, *.store.tsx, *Slice.ts, *Context.tsx):
   a. Flag any fetch/axios/api calls inside stores → Server state pollution
   b. Flag any async actions that cache API responses → Should use query cache
   c. Verify pending stores track items by tempId/UUID → Missing tracking

2. Scan for Cache Hack violations:
   a. Find all setQueryData calls
   b. Flag setQueryData inside onMutate → CRITICAL: Cache Hack
   c. Allow setQueryData for SSR hydration or prefetching (context matters)

3. Scan for Syncing Store violations:
   a. Find useEffect calls that watch query data and update stores
   b. Flag useEffect(...setState/useStore...) after useQuery → CRITICAL: Syncing Store

4. Verify Unifying Lens compliance:
   a. Find mutation hooks with optimistic behavior
   b. Check for corresponding pending store + lens hook
   c. Check for exorcism (removePending) in onSettled
   d. Check for invalidateQueries in onSettled

5. Scan component files:
   a. Count useState calls per component → Flag 5+ as excessive
   b. Find inline object/array creation passed as props → Unstable references
   c. Find expensive computations without useMemo → Missing memoization

6. Trace prop chains:
   a. Identify props passed through 3+ components unchanged
   b. Suggest context or store for deeply shared state

{IF WRITE MODE}
7. Create pending stores for optimistic UI (Vessel of Hope pattern)
8. Create Unifying Lens hooks (useMemo computed derivation)
9. Refactor Cache Hack mutations to use pending stores
10. Remove Syncing Store useEffect bridges
11. Extract server state from Zustand stores into useQuery hooks
12. Replace excessive useState with useReducer
13. Add useMemo/useCallback where needed
{/IF}

Report findings categorized by doctrine violation type.
```

**Success Criteria**:
- All stores audited for server state pollution
- All `setQueryData` in `onMutate` flagged as CRITICAL (Cache Hack)
- All `useEffect` query-to-store bridges flagged as CRITICAL (Syncing Store)
- Unifying Lens pattern verified for all optimistic UI flows
- Pending item exorcism (removePending in onSettled) verified
- Excessive useState flagged
- Missing memoization identified
- (Write mode) All violations refactored to Unifying Lens pattern

---

#### Squad 4: Data Flow Safety Squad (`react-data-purist`)
**Mission**: Audit async operations for race conditions, cleanup, and idempotency.

**Agent Task**:
```
You are the Data Flow Safety Squad of the React Crusade.

Target: {absolute_path}
Scope: {effects|all}
Write Mode: {true|false}

MISSION: Eliminate race conditions, zombie connections, and duplicate mutations.

Safety Violations:
- Async operations without AbortController
- WebSocket/SSE connections without close on unmount
- Event listeners without removeEventListener
- Mutation handlers without idempotency keys (for critical operations)
- Missing optimistic updates on user-facing mutations
- Unbatched high-frequency state updates (SSE/WebSocket streams)

1. Find all async operations in effects:
   - fetch/axios without AbortController → Race condition risk
   - WebSocket/EventSource without close → Zombie connection
   - setInterval/setTimeout without clearInterval/clearTimeout → Timer leak
2. Find all event listeners:
   - addEventListener without removeEventListener → Memory leak
   - window/document listeners in components → Must clean up
3. Find mutation handlers:
   - Payment/order/account mutations without idempotency → Duplicate risk
   - Mutations that refetch instead of optimistic update → Sluggish UX
4. Find streaming data handlers:
   - SSE/WebSocket message handlers that setState per message → Unbatched flood

{IF WRITE MODE}
5. Add AbortController to async effects
6. Add cleanup functions for connections and listeners
7. Add idempotency keys to critical mutations
8. Implement optimistic updates where appropriate
9. Add batching for high-frequency updates
{/IF}

Report findings with severity and code examples.
```

**Success Criteria**:
- All async operations audited for cleanup
- Race conditions flagged
- Missing idempotency keys identified
- (Write mode) Safety measures implemented

---

#### Squad 5: Performance & Rendering Squad (`react-perf-purist`)
**Mission**: Audit rendering performance and concurrent feature usage.

**Agent Task**:
```
You are the Performance & Rendering Squad of the React Crusade.

Target: {absolute_path}
Scope: {state|all}
Write Mode: {true|false}

MISSION: Eliminate unnecessary re-renders and ensure responsive interactions.

Performance Sins:
- Components re-rendering unnecessarily (missing React.memo on pure components)
- Unstable object/function references causing child re-renders
- Heavy computations blocking the main thread
- Missing useTransition for expensive UI updates
- Inline style objects creating new references every render
- Large lists without virtualization

1. Find pure presentation components without React.memo:
   - Components that receive only primitive props → Should be memo'd
   - Components rendered in lists → Especially important to memo
2. Find unstable references:
   - Objects created inline in JSX: prop={{ key: value }}
   - Functions created inline: onClick={() => handler(id)}
   - Arrays created inline: items={[a, b, c]}
3. Find heavy operations:
   - .filter(), .sort(), .map() chains without useMemo
   - Complex calculations in render body without memoization
4. Find blocking updates:
   - State updates that trigger expensive re-renders without useTransition
   - Search/filter inputs without debouncing
5. Find large lists:
   - .map() rendering 50+ items without virtualization

{IF WRITE MODE}
6. Wrap pure components with React.memo
7. Extract inline objects/functions to useMemo/useCallback
8. Add useMemo to expensive computations
9. Add useTransition to heavy state updates
10. Add debouncing to search inputs
{/IF}

Report findings with estimated performance impact.
```

**Success Criteria**:
- Pure components identified and memoization recommended
- Unstable references cataloged
- Heavy computations without memoization flagged
- (Write mode) Performance optimizations applied

---

### Phase 3: Severity Classification

Aggregate findings from all squads and classify:

#### CRITICAL (Must Fix Immediately)
- Components spanning all three tiers (God Components)
- Data fetching in `useEffect` (race conditions)
- Missing cleanup on subscriptions/WebSocket/SSE (memory leaks)
- Mutations without idempotency keys (duplicate operations)
- Suppressed `exhaustive-deps` linter rule (hidden bugs)
- **Cache Hack**: `setQueryData` in `onMutate` for optimistic updates (Cache pollution)
- **Syncing Store**: `useEffect` copying React Query data into Zustand (Duplicated Truth)
- **Server state in stores**: Zustand/Redux stores with fetch methods (violated Great Separation)

#### WARNING (Below Standard)
- Providers rendering Dumb UI components directly (tier bleed)
- Derived state in `useEffect` (unnecessary re-renders)
- Excessive `useState` (5+ in one component)
- Missing memoization on expensive operations
- Missing optimistic updates
- Missing Unifying Lens for existing optimistic UI flows
- Pending items without UUID tracking
- Missing exorcism (`removePending`) in `onSettled`

#### INFO (Quality Improvements)
- Pure components without `React.memo`
- Inline objects/functions in JSX
- Missing `useTransition` on heavy updates
- Large lists without virtualization
- Minor naming inconsistencies in component tiers

---

### Phase 4: Consolidated Report

Aggregate all squad reports into unified battle report.

```
╔════════════════════════════════════════════════════════════════╗
║                    REACT CRUSADE COMPLETE                       ║
╚════════════════════════════════════════════════════════════════╝

BATTLEFIELD SUMMARY
-------------------
Target: {absolute_path}
Scope: {architecture|effects|state|all}
Components Audited: {count}
Hooks Analyzed: {count}
Effects Inspected: {count}

SQUAD REPORTS
-------------
✓ Component Architecture Squad:         {findings_count} issues
✓ Effect Discipline Squad:              {findings_count} issues
✓ State Management & Unifying Lens:     {findings_count} issues
✓ Data Flow Safety Squad:               {findings_count} issues
✓ Performance & Rendering Squad:        {findings_count} issues

COMPONENT TIER CENSUS
---------------------
Tier 1 (Dumb UI):      {count} components
Tier 2 (Domain UI):    {count} components
Tier 3 (Providers):    {count} components
UNCLASSIFIED (mixed):  {count} components ⚠️

SEVERITY BREAKDOWN
------------------
CRITICAL: {count}
  • God Components (mixed tiers): {count}
  • Fetch in useEffect: {count}
  • Missing effect cleanup: {count}
  • Missing idempotency keys: {count}
  • Suppressed exhaustive-deps: {count}
  • Cache Hack (setQueryData in onMutate): {count}
  • Syncing Store (useEffect query→store bridge): {count}
  • Server state in client stores: {count}

WARNING: {count}
  • Tier boundary bleed: {count}
  • Derived state in useEffect: {count}
  • Missing Unifying Lens: {count}
  • Excessive useState: {count}
  • Missing memoization: {count}

INFO: {count}
  • Missing React.memo: {count}
  • Inline references: {count}
  • Missing useTransition: {count}

UNIFYING LENS COMPLIANCE
------------------------
Optimistic UI flows found: {count}
  Using Unifying Lens (Computed Derivation): {count} ✓
  Using Cache Hack (setQueryData): {count} ⚠️
  Using neither (no optimistic UI): {count}
  Pending stores with UUID tracking: {count}
  Exorcism in onSettled: {count}

{IF WRITE MODE}
REFACTORING APPLIED
-------------------
• Components split (Provider + Component): {count}
• Effects replaced with useQuery: {count}
• Cleanup functions added: {count}
• Memoization added: {count}
• Derived state inlined: {count}
{/IF}

TOP PRIORITY TARGETS
--------------------
{List top 5 CRITICAL issues with specific file paths}

DETAILED FINDINGS
-----------------
{Consolidated findings from all squads, grouped by severity}

═══════════════════════════════════════════════════════════════

{IF all critical issues resolved}
THE IMMUTABLE STATE BLESSES THIS CODEBASE.
Components are PURE. Effects are CLEAN. State is DISCIPLINED.
Continue maintaining this excellence. AMEN.
{ELSE}
HERESY DETECTED: {count} CRITICAL issues remain.
Impure components corrupt the entire render tree.
Cleanse them before they spread. The Immutable State demands PURITY.
{/IF}
```

---

### Phase 5: Victory Conditions

#### Full Victory (All Clear)
- Zero CRITICAL issues
- Zero WARNING issues
- All components classified into exactly one tier
- All effects clean and disciplined
- State management properly separated

**Declaration**: "COMPLETE VICTORY. The Immutable State blesses this codebase. Components are PURE, effects are CLEAN, state is DISCIPLINED. The congregation is DISMISSED. AMEN."

#### Partial Victory (Critical Issues Resolved)
- Zero CRITICAL issues
- Some WARNING issues remain
- Most components properly tiered

**Declaration**: "CRITICAL HERESIES PURGED. {count} WARNING items remain. The faithful continue their work. PROGRESS IS BLESSED."

#### Ongoing Battle (Critical Issues Remain)
- CRITICAL issues present
- Components still spanning multiple tiers

**Declaration**: "HERESY PERSISTS. {count} CRITICAL violations corrupt the render tree. IMPURE COMPONENTS MUST BE CLEANSED. Address immediately."

---

## Implementation Workflow

### Step 1: Parse Arguments
```typescript
const args = parseArguments(userInput)
// args.path: string (relative or absolute)
// args.scope: 'architecture' | 'effects' | 'state' | 'all'
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
# Count component files
find . -name "*.tsx" -not -path "*/node_modules/*" -not -name "*.spec.*" -not -name "*.test.*" -not -name "*.stories.*" | wc -l

# Quick red flag scan
grep -rn "useEffect.*fetch\|useEffect.*axios" --include="*.tsx" | wc -l
grep -rn "eslint-disable.*exhaustive-deps" --include="*.tsx" --include="*.ts" | wc -l
```

### Step 4: Deploy Squads in Parallel
Use `Task` tool to spawn 5 specialist agents simultaneously:

```typescript
// ALL squads deployed in a single message for true parallelism
Task({ agent: 'react-arch-purist', task: architectureMission })
Task({ agent: 'react-hooks-purist', task: hooksMission })
Task({ agent: 'react-state-purist', task: stateMission })
Task({ agent: 'react-data-purist', task: dataFlowMission })
Task({ agent: 'react-perf-purist', task: performanceMission })
```

**CRITICAL**: All 5 Task calls MUST be in a single message for true parallelism.

### Step 5: Wait for All Squads
Monitor all squad tasks until completion.

### Step 6: Aggregate Reports
Collect findings from all squads, merge, deduplicate, classify by severity.

### Step 7: Generate Final Report
Print consolidated battle report with tier census, severity breakdown, and victory status.

---

## Edge Cases and Validation

### Invalid Path
If path does not exist:
```
ERROR: Target path does not exist: {path}
ORDERS: Provide a valid path to audit.
```

### No React Files
If no `.tsx` files found:
```
WARNING: No React component files found in {path}.
Verify the path points to a React frontend codebase.
```

### No Query Library Detected
If no TanStack Query/SWR found:
```
INFO: No data fetching library detected (TanStack Query, SWR).
If this codebase fetches data, a query library is STRONGLY recommended.
Manual fetch management is the #1 source of React bugs.
```

### Write Mode Without Permission
If `--write` flag set but user hasn't confirmed:
```
AskUserQuestion: Write mode will SPLIT and REFACTOR component files. This changes file structure. Confirm? (yes/no)
```

---

## Output Examples

### Clean Codebase
```
═══════════════════════════════════════════════════════════════
                    REACT CRUSADE COMPLETE
═══════════════════════════════════════════════════════════════

Target: /workspace/apps/web/src/domains/users
Scope: all
Components Audited: 18
Effects Inspected: 12

COMPONENT TIER CENSUS
---------------------
Tier 1 (Dumb UI):      4 components ✓
Tier 2 (Domain UI):    9 components ✓
Tier 3 (Providers):    5 components ✓
UNCLASSIFIED (mixed):  0 components ✓

SEVERITY BREAKDOWN
------------------
CRITICAL: 0 ✓
WARNING: 2
  • Missing memoization: 2
INFO: 3
  • Missing React.memo: 3

THE IMMUTABLE STATE BLESSES THIS MODULE.
Continue maintaining this excellence. AMEN.
```

### Major Campaign
```
═══════════════════════════════════════════════════════════════
                    REACT CRUSADE COMPLETE
═══════════════════════════════════════════════════════════════

Target: /workspace/apps/web/src
Scope: all
Components Audited: 87
Effects Inspected: 43

COMPONENT TIER CENSUS
---------------------
Tier 1 (Dumb UI):      12 components ✓
Tier 2 (Domain UI):    28 components ✓
Tier 3 (Providers):    15 components ✓
UNCLASSIFIED (mixed):  32 components ⚠️

SEVERITY BREAKDOWN
------------------
CRITICAL: 14 ⚠️
  • God Components (mixed tiers): 8
  • Fetch in useEffect: 4
  • Missing effect cleanup: 2
WARNING: 23
  • Derived state in useEffect: 7
  • Server state in stores: 3
  • Excessive useState: 5
  • Missing memoization: 8
INFO: 19

TOP PRIORITY TARGETS
--------------------
1. CRITICAL: order-detail.tsx — 312 lines, fetches + stores + complex JSX
2. CRITICAL: dashboard.tsx — 4 useEffect with fetch, no cleanup
3. CRITICAL: chat-panel.tsx — WebSocket without close on unmount
4. CRITICAL: payment-form.tsx — Submit without idempotency key
5. CRITICAL: task-board.tsx — 8 useState, 3 useEffect, mixed tiers

HERESY DETECTED: 14 CRITICAL issues remain.
Impure components corrupt the entire render tree.
Cleanse them before they spread.
```

---

## Success Metrics

The React Crusade is successful when:

1. **All squads complete**: No errors, all reports received
2. **Components classified**: Every component assigned to exactly one tier
3. **Effect discipline verified**: No rogue effects, all cleanups in place
4. **State boundaries enforced**: Server state in cache, client state in stores
5. **Findings classified**: CRITICAL/WARNING/INFO breakdown clear
6. **Priority targets listed**: Top 5 most critical issues identified
7. **Actionable guidance**: Specific file paths and refactoring steps provided
8. **(Write mode) Components refactored**: Mixed components split, effects cleaned

**Remember: The goal is not just to find impurity, but to CLEANSE it.**

A React component should do ONE thing well. If it does THREE things, it is THREE components waiting to be born.

---

## Final Notes

- **Absolute paths**: Always convert user paths to absolute before agent delegation
- **Parallel execution**: All 5 squads run simultaneously for speed
- **Write mode confirmation**: Always confirm before refactoring files
- **War cry**: Display at start to set tone and expectations
- **Victory declaration**: Clear pass/fail based on CRITICAL issues
- **Tier census**: Always include component tier breakdown in report

The React Purists show no mercy. No impure component escapes. No rogue effect survives. No state management sin remains hidden.

**The Immutable State demands PURITY. AMEN.**
