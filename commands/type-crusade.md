---
description: Unleash parallel TypeScript Purist agents across the codebase to purge every `any`, `as` cast, and type sin. The Great Type Crusade begins.
allowed-tools: Read, Glob, Grep, Task, AskUserQuestion
argument-hint: [path-or-glob] [--scope "domain"|"app"|"all"]
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

### Phase 1: Reconnaissance

Before you deploy your army, you must know the battlefield.

1. Use `Glob` to find ALL `.ts` and `.tsx` files in scope
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
```

## Important

- NEVER skip the parallel deployment. The whole point is the SWARM.
- NEVER declare victory without running `tsc --noEmit`. The compiler is the only judge.
- NEVER leave `as unknown` double-casts behind. They are the scourge reborn.
- If the codebase is clean (zero violations found), announce victory and stand down with appropriate reverence.
- If `tsconfig.json` doesn't have `strict: true`, flag this as a CRITICAL finding before anything else.
