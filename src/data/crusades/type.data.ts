import type { CrusadeDetail } from '../crusade-detail.types';

export const typeCrusade: CrusadeDetail = {
  slug: 'type',
  name: 'The Type Crusade',
  command: '/type-crusade',
  icon: '\u2694\uFE0F',
  tagline: 'Purge every `any`, every `as` cast, every type sin.',
  quote: 'Oh, an `any`? Why not just write JavaScript at this point?',
  color: 'from-blue-600 to-purple-700',
  gradientFrom: 'blue-600',
  gradientTo: 'purple-700',
  description:
    'The Great Type Crusade unleashes four specialist squads in parallel to hunt and exterminate every type sin lurking in your codebase. From explicit `any` annotations to silent schema-domain divergence, no violation escapes the purge. The compiler is the only judge, and `tsc --noEmit` is the final verdict.',
  battleCry:
    'The TypeScript Purists ride at dawn. May the compiler have mercy on this codebase, because the Purists will NOT.',
  commandments: [
    {
      numeral: 'I',
      text: '`any` is the Devil. Every `any` is a hole in the type system through which bugs crawl like cockroaches. Replace it with `unknown`, generics, or union types -- no exceptions, no mercy.',
    },
    {
      numeral: 'II',
      text: 'Never Cast, Always Guard. Type assertions (`as`) are lies you tell the compiler. The compiler trusted you, and you betrayed it. Replace every cast with runtime proof: `typeof`, `instanceof`, `in`, or custom type guard functions.',
    },
    {
      numeral: 'III',
      text: 'Every branch shall be exhausted. Every `switch` on a discriminated union must end with `assertNever`. Every if-chain on a union must leave no variant unhandled. Silent fallthrough is a ticking time bomb.',
    },
    {
      numeral: 'IV',
      text: 'Schemas shall derive, never redefine. If a domain entity defines valid values, every Zod schema, DTO, and tool definition must derive from that definition. Hardcoded enum subsets are the most dangerous lie -- they pass type checks while silently rejecting valid domain states.',
    },
    {
      numeral: 'V',
      text: 'The compiler is the only judge. No crusade is complete until `tsc --noEmit` passes. The squads propose; the compiler disposes. Trust no agent blindly -- only the Lord of Types renders final judgment.',
    },
  ],
  specialists: [
    {
      name: 'The Any Purist',
      icon: '\uD83D\uDEAB',
      focus: 'Extermination of `any` in all its forms',
      description:
        'The merciless exterminator of the typeless void. Hunts every explicit `any` annotation, every implicit `any` in catch blocks and untyped parameters, every `Record<string, any>`, and every `Promise<any>`. Audits tsconfig for `strict: true` and `noImplicitAny`. Replaces all `any` with `unknown`, generics, union types, or proper interfaces.',
    },
    {
      name: 'The Assertion Purist',
      icon: '\uD83D\uDD28',
      focus: 'Elimination of type assertions and compiler silencing',
      description:
        'The relentless cast-breaker who replaces every `as` with a proper type guard. Hunts `as` casts, `@ts-ignore` directives, `@ts-expect-error` without justification, and non-null assertions (`!`). Champions the `satisfies` operator over `as` for literal validation. Enforces the Exact Type Doctrine: a guard named `isFoo` must return `value is Foo`, never a looser type.',
    },
    {
      name: 'The Guard Purist',
      icon: '\uD83D\uDEE1\uFE0F',
      focus: 'Exhaustive checks, discriminated unions, and branded types',
      description:
        'The exhaustiveness enforcer of the type dominion. Ensures every switch on a discriminated union ends with `assertNever`, every if-chain on a union leaves no variant unhandled, and every discriminant property uses literal types instead of bare `string`. Champions branded types for domain safety -- a `UserId` is not an `Email`, even though both are strings.',
    },
    {
      name: 'The Schema Purist',
      icon: '\uD83D\uDD17',
      focus: 'Schema-domain alignment and Zustand store typing',
      description:
        'The alignment enforcer of domain truth. Hunts the most dangerous lie in TypeScript: the lie that passes type checks. Detects hardcoded `z.enum()` subsets that silently reject valid domain states, untyped Zustand selectors hiding implicit `any` behind ergonomic syntax, and stores created without the generic form. Enforces the complete Zustand Doctrine: exported state interfaces, typed `create<State>()`, and explicit selector annotations.',
    },
  ],
  howItWorks: [
    { phase: 'Pre-Flight', description: 'Verifies monorepo configuration, checks `tsconfig.json` for `strict: true`, and runs `tsc --noEmit` to establish a baseline. Config sins are fixed before code sins are hunted.' },
    { phase: 'Reconnaissance', description: 'Scans the battlefield with Grep and Glob to produce a body count -- every `any`, `as` cast, `@ts-ignore`, and `@ts-expect-error` is catalogued. Files are grouped by directory and classified by their dominant sin.' },
    { phase: 'Squad Assignment', description: 'Each file is assigned to one of four specialist squads based on its worst violation -- Any Elimination, Assertion Purge, Guard Reinforcement, or Schema Alignment. Files with mixed sins go to the squad matching their gravest offense.' },
    { phase: 'Parallel Deployment', description: 'All four squads are launched simultaneously via the Task tool in a single message. Each specialist carries only the doctrine it needs, operating on its assigned files with surgical precision.' },
    { phase: 'Compiler Judgment', description: 'After all squads report, `tsc --noEmit` is invoked as the final arbiter. If the Lord of Types speaks errors, they are fixed before victory is declared.' },
    { phase: 'Second Purge', description: 'The battlefield is swept for survivors -- `as unknown` double-casts and remaining type assertions. Any stragglers are eliminated in hand-to-hand combat by the War General personally.' },
  ],
} as const;
