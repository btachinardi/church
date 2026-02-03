interface Crusade {
  readonly name: string;
  readonly command: string;
  readonly icon: string;
  readonly tagline: string;
  readonly quote: string;
  readonly color: string;
}

export const crusades: readonly Crusade[] = [
  {
    name: 'The Type Crusade',
    command: '/type-crusade',
    icon: '⚔️',
    tagline: 'Purge every `any`, every `as` cast, every type sin.',
    quote: 'Oh, an `any`? Why not just write JavaScript at this point?',
    color: 'from-blue-600 to-purple-700',
  },
  {
    name: 'The Git Crusade',
    command: '/git-crusade',
    icon: '📜',
    tagline: 'Clean history. Atomic commits. Conventional messages.',
    quote: "This commit says 'update'. UPDATE WHAT? This is a permanent record, not a sticky note.",
    color: 'from-orange-600 to-red-700',
  },
  {
    name: 'The Secret Crusade',
    command: '/secret-crusade',
    icon: '🔐',
    tagline: 'DEFCON 1 credential scanning. No key shall hide.',
    quote: "A hardcoded AWS key? This isn't a codebase, it's an OPEN INVITATION.",
    color: 'from-red-700 to-red-900',
  },
  {
    name: 'The Architecture Crusade',
    command: '/arch-crusade',
    icon: '🏰',
    tagline: 'DDD layer boundaries. The fortress must hold.',
    quote: 'A domain entity importing from infrastructure? The domain is SACRED GROUND.',
    color: 'from-purple-700 to-indigo-900',
  },
  {
    name: 'The Dependency Crusade',
    command: '/dep-crusade',
    icon: '📦',
    tagline: 'Audit every package. Evict the unworthy.',
    quote: "You have lodash for ONE _.get() call. Optional chaining exists. EVICTED.",
    color: 'from-green-700 to-emerald-900',
  },
  {
    name: 'The Test Crusade',
    command: '/test-crusade',
    icon: '🛡️',
    tagline: "If it's not tested, it doesn't work.",
    quote: "expect(true).toBe(true) — that's not a test, that's a SUGGESTION.",
    color: 'from-cyan-600 to-blue-800',
  },
  {
    name: 'The Dead Code Crusade',
    command: '/dead-crusade',
    icon: '💀',
    tagline: 'The dead shall be buried. No corpse remains.',
    quote: "47 lines of commented-out code. This isn't a codebase, it's a GRAVEYARD.",
    color: 'from-gray-600 to-gray-900',
  },
  {
    name: 'The Naming Crusade',
    command: '/naming-crusade',
    icon: '✒️',
    tagline: 'Names are documentation. Bad names are lies.',
    quote: "A file called utils.ts. UTILS? That's not a name, that's a JUNK DRAWER.",
    color: 'from-amber-600 to-yellow-800',
  },
  {
    name: 'The Size Crusade',
    command: '/size-crusade',
    icon: '🗡️',
    tagline: 'No file grows unchecked. No monolith survives.',
    quote: 'This file is 1,247 lines. It started small. Innocent. Now it is a CREATURE.',
    color: 'from-rose-600 to-pink-900',
  },
  {
    name: 'The Observability Crusade',
    command: '/observability-crusade',
    icon: '🔦',
    tagline: 'Let there be LIGHT. No silent failure remains.',
    quote: 'An empty catch block. Do you know what lives inside? DARKNESS. Pure, absolute darkness.',
    color: 'from-yellow-500 to-amber-700',
  },
] as const;
