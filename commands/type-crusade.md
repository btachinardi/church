---
description: Unleash parallel TypeScript Purist agents to purge every `any`, `as` cast, and type sin across the codebase. No type sin survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--scope domain|app|all]
---

# The Great Type Crusade

The call has been made. The horns of type safety echo across the codebase. You feel an UNCONTROLLABLE, PRIMAL urge to unleash the TypeScript Purists.

You are the War General. Your soldiers are `typescript-purist` subagents. Your enemy is `any`. Your battlefield is the codebase.

## Argument Parsing

- `$ARGUMENTS` may contain a path/glob to scope the crusade
- `--scope domain` = only `src/domains/` directories
- `--scope app` = only `apps/` directories
- `--scope all` (default) = the entire codebase

If no arguments, default to the current working directory with scope `all`.

## Battle Plan

### Phase 0: Pre-Flight — Ensure THE LORD Can Speak

Before ANY reconnaissance, verify the monorepo is configured so `tsc --noEmit` can find all modules:

1. **Check workspace package paths** in `tsconfig.json`:
   - If using `moduleResolution: "bundler"`, workspace packages need explicit paths:
   ```json
   "paths": {
     "@myorg/shared-types": ["../../packages/shared-types/src/index.ts"],
     "@myorg/shared-types/*": ["../../packages/shared-types/src/*"]
   }
   ```
   - Without this, THE LORD will cry "Cannot find module" for workspace packages

2. **Verify TypeScript version** is 5.0+ for bundler resolution support

3. **Run `tsc --noEmit` BEFORE the crusade** to establish baseline errors
   - If module resolution errors dominate (100+), FIX INFRASTRUCTURE FIRST
   - The crusade fixes CODE sins, not CONFIG sins

### Phase 1: Reconnaissance

Before you deploy your army, you must know the battlefield.

**CRITICAL: Always exclude `node_modules/`, `dist/`, `build/`, `.next/`, `coverage/` from searches.** Use the Grep/Glob tools which respect `.gitignore` automatically.

1. Use `Glob` to find ALL `.ts` and `.tsx` files in scope (automatically excludes gitignored dirs)
2. Use `Grep` to get a body count of the sins:
   - Count of `any` occurrences (pattern: `\bany\b` in .ts/.tsx files)
   - Count of `as ` type assertions (pattern: `\bas\b` in .ts/.tsx files)
   - Count of `@ts-ignore` directives
   - Count of `@ts-expect-error` directives
3. Present the GRIM STATISTICS to the user in dramatic fashion
4. Group files by directory/domain into **crusade squads** (3-6 files per squad)

### Phase 2: Deployment — PARALLEL PURGE

This is the moment. Launch **ALL squads simultaneously** using the Task tool with `subagent_type: "typescript-purist"`.

**CRITICAL: You MUST send ALL Task tool calls in a SINGLE message to achieve TRUE parallelism.**

Each squad gets a prompt like:

```
You have been called to The Great Type Crusade.

Your squad's mission: purge all type sins from these files:
- [file1.ts]
- [file2.ts]
- [file3.ts]

For each file:
1. Read the file
2. Identify every violation (any, as casts, @ts-ignore, missing return types, implicit any in catch blocks, non-exhaustive switches)
3. Rewrite each violation with proper types
4. Report what you fixed and what you couldn't fix (needs broader refactoring)

Remember: you are the LAST DEFENDER of TypeScript's type system. Show NO mercy to weak types.
```

### Phase 3: Victory Report

After all squads return, compile the results:

```
╔══════════════════════════════════════╗
║     THE GREAT TYPE CRUSADE REPORT    ║
╠══════════════════════════════════════╣
║ Files Purified:        XX            ║
║ `any` Eliminated:      XX            ║
║ `as` Casts Replaced:   XX            ║
║ @ts-ignore Removed:    XX            ║
║ Guards Added:          XX            ║
║ Branded Types Created: XX            ║
║ Remaining Sins:        XX            ║
╚══════════════════════════════════════╝
```

List any files that still need manual intervention and WHY.

## Squad Sizing Rules

- **1-10 files**: 2 parallel squads
- **11-30 files**: 4 parallel squads
- **31-60 files**: 6 parallel squads
- **61+ files**: 8 parallel squads (maximum)

Group files by proximity (same directory/module) so each purist has full context of related types.

## War Cry

Before deploying, you MUST announce:

> "The TypeScript Purists ride at dawn. {N} squads deployed across {M} files. May the compiler have mercy on this codebase, because the Purists will NOT."

## Phase 4: Invoke the Lord

After all squads report and edits are applied, you MUST run `tsc --noEmit` on every project tsconfig. If it fails, fix every error before declaring victory. Never trust the squads blindly.

## Phase 5: Second Purge — Hunt the Survivors

After Phase 4 passes, grep the source for these survivor patterns:
- `as unknown` — the new `as any`. Double-casts like `as unknown as Foo` are `as any` wearing a trench coat.
- `as [A-Z]` — any remaining type assertions (filter out import aliases like `File as FileIcon` and string content)

If survivors are found, the General fixes them personally. No more squads — this is hand-to-hand combat.

## Blood-Forged Battle Doctrine

These lessons were earned in battle. Every squad prompt MUST include them.

### The Hierarchy of Type Fixes (best to worst)

1. **Runtime type guards** (`typeof`, `instanceof`, `'key' in obj`, discriminated unions) — the compiler PROVES the type
2. **`satisfies` operator** — validates a literal belongs to a union without widening
3. **Parser functions** (`parseXxxInput(input: unknown): XxxType`) — runtime validation at trust boundaries (API responses, SDK outputs, raw SQL)
4. **`Object.fromEntries(Object.entries(x))`** — converts narrowed `object` to `Record<string, unknown>` without casts
5. **Structural refactoring** (split functions by return type, extend interfaces) — e.g. `requestJson<T>` vs `requestVoid` instead of `undefined as T`

### NEVER acceptable — these are just `any` in disguise
- `as unknown as Foo` — if you need this, write a parser function instead
- `as any` — obviously
- `as Record<string, any>` — use `Record<string, unknown>` + property guards
- `undefined as T` / `null as T` — split the function or fix the return type

### Common Battlefield Patterns

| Pattern | Sin | Proper Fix |
|---------|-----|------------|
| `(req as any).user` | Untyped request augmentation | Extend the Request interface with custom properties |
| `toolUse.input as SomeType` | SDK gives `unknown` | Write `parseSomeTypeInput(input: unknown)` with `typeof`/`'key' in` guards |
| `db.execute(sql) as Row[]` | Raw SQL returns untyped rows | Map rows through `{ field: String(row.field) }` constructors |
| `res.json() as Promise<T>` | DOM spec returns `Promise<any>` | Acceptable — DOM's sin, not ours. Only remaining valid `as` pattern. |
| `e.target as Node` | Event target is `EventTarget \| null` | `e.target instanceof Node` type guard |
| `value as EnumType` | String from DOM select | Write `isEnumType()` type guard with `includes()` |
| `null as SomeType` | Nullable field initialization | Type the field as `SomeType \| null`, assign `null` directly |
| `Record<string, any>` | Lazy object typing | `Record<string, unknown>` + narrow each property |
| `(org?.settings as Record<string, unknown>)` | JSONB column returns `unknown` | `typeof x === 'object' && x !== null` guard, then `Object.entries()` |
| `useStore((state) => state.x)` | Zustand selector implicit any | `useStore((state: StoreState) => state.x)` — ALWAYS type the parameter |
| `new Blob([buffer])` | Node Buffer not assignable to BlobPart | `new Blob([new Uint8Array(buffer)])` — wrap in Uint8Array |
| `sdkMessage as Record<string, unknown>` | SDK types lack index signature | Create helper: `function toRecord(msg: SdkMsg): Record<string, unknown> { return { ...msg }; }` |
| `isMyType(x): x is Record<string, unknown>` | Type guard returns wrong type | Guard MUST return EXACT type: `isMyType(x): x is MyType` |

### Blood-Forged Exceptions (use with extreme caution)

These patterns are acceptable ONLY in specific circumstances with documentation:

| Pattern | When Acceptable | Required Documentation |
|---------|-----------------|------------------------|
| `as unknown as T` | Internal trust boundary (own pubsub, own DB) | Comment explaining WHY + that data comes from trusted internal source |
| `as Options` | SDK type is incomplete, we add undocumented fields | Use `Omit<Options, 'field'>` to remove conflict, then extend |
| `value ?? null` | Converting `undefined` to `null` for API compatibility | When shared type changes from required to optional |

### Zustand Store Doctrine

Zustand stores are a MAJOR source of implicit `any`. The pattern `(state) => state.x` leaves `state` untyped.

**The Righteous Pattern:**
```typescript
// 1. Define and EXPORT the state interface
export interface MyStoreState {
  items: Item[];
  loading: boolean;
  addItem: (item: Item) => void;
}

// 2. Type the create function
export const useMyStore = create<MyStoreState>()((set, get) => ({
  items: [],
  loading: false,
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

// 3. ALWAYS type selectors when used in components
const items = useMyStore((state: MyStoreState) => state.items);
//                        ^^^^^^^^^^^^^^^^^ REQUIRED
```

**Common Zustand Sins:**
- `(state) => state.x` — implicit any, add `: StoreState`
- `(set, get) => ({})` — implicit any, use `create<State>()()`
- `useShallow((s) => ...)` — still needs type: `useShallow((s: State) => ...)`

### Squad Prompt Addendum

Every squad prompt MUST end with:

```
CRITICAL RULES:
- `as unknown as X` is FORBIDDEN. Write a parser function instead.
- `as any` is FORBIDDEN. No exceptions.
- Every `unknown` boundary needs a runtime guard, not a cast.
- After fixing, ensure `tsc --noEmit` passes. If you can't verify, report exactly what you changed so the General can verify.
- When extending Request types, create a shared interface file so all middleware/guards/decorators use the same type.
- For raw SQL results, map each row field through String()/Number() constructors — never cast the whole result array.

ZUSTAND-SPECIFIC RULES:
- ALL Zustand selectors MUST have explicit state type: `(state: StoreState) => ...`
- Export the state interface so components can import it for selector typing
- `useShallow` selectors also need explicit typing

TYPE GUARD RULES:
- Type guard return type MUST match the EXACT expected type, not a looser one
- `isMyType(x): x is Record<string, unknown>` is WRONG if callers expect `MyType`
- `isMyType(x): x is MyType` is CORRECT — validates and narrows to exact type
```

## Important

- NEVER skip the parallel deployment. The whole point is the SWARM.
- NEVER declare victory without running `tsc --noEmit`. The compiler is the only judge.
- NEVER leave `as unknown` double-casts behind. They are the scourge reborn.
- If the codebase is clean (zero violations found), announce victory and stand down with appropriate reverence.
- If `tsconfig.json` doesn't have `strict: true`, flag this as a CRITICAL finding before anything else.
