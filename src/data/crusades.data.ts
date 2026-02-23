export interface Crusade {
  readonly name: string;
  readonly slug: string;
  readonly command: string;
  readonly icon: string;
  readonly tagline: string;
  readonly quote: string;
  readonly color: string;
}

export const crusades: readonly Crusade[] = [
  {
    name: 'The Type Crusade',
    slug: 'type',
    command: '/type-crusade',
    icon: '⚔️',
    tagline: 'Purge every `any`, every `as` cast, every type sin.',
    quote: 'Oh, an `any`? Why not just write JavaScript at this point?',
    color: 'from-blue-600 to-purple-700',
  },
  {
    name: 'The Git Crusade',
    slug: 'git',
    command: '/git-crusade',
    icon: '📜',
    tagline: 'Clean history. Atomic commits. Conventional messages.',
    quote: "This commit says 'update'. UPDATE WHAT? This is a permanent record, not a sticky note.",
    color: 'from-orange-600 to-red-700',
  },
  {
    name: 'The Secret Crusade',
    slug: 'secret',
    command: '/secret-crusade',
    icon: '🔐',
    tagline: 'DEFCON 1 credential scanning. No key shall hide.',
    quote: "A hardcoded AWS key? This isn't a codebase, it's an OPEN INVITATION.",
    color: 'from-red-700 to-red-900',
  },
  {
    name: 'The Architecture Crusade',
    slug: 'arch',
    command: '/arch-crusade',
    icon: '🏰',
    tagline: 'DDD layer boundaries. The fortress must hold.',
    quote: 'A domain entity importing from infrastructure? The domain is SACRED GROUND.',
    color: 'from-purple-700 to-indigo-900',
  },
  {
    name: 'The Dependency Crusade',
    slug: 'dep',
    command: '/dep-crusade',
    icon: '📦',
    tagline: 'Audit every package. Evict the unworthy.',
    quote: "You have lodash for ONE _.get() call. Optional chaining exists. EVICTED.",
    color: 'from-green-700 to-emerald-900',
  },
  {
    name: 'The Test Crusade',
    slug: 'test',
    command: '/test-crusade',
    icon: '🛡️',
    tagline: "If it's not tested, it doesn't work.",
    quote: "expect(true).toBe(true) — that's not a test, that's a SUGGESTION.",
    color: 'from-cyan-600 to-blue-800',
  },
  {
    name: 'The Dead Code Crusade',
    slug: 'dead',
    command: '/dead-crusade',
    icon: '💀',
    tagline: 'The dead shall be buried. No corpse remains.',
    quote: "47 lines of commented-out code. This isn't a codebase, it's a GRAVEYARD.",
    color: 'from-gray-600 to-gray-900',
  },
  {
    name: 'The Naming Crusade',
    slug: 'naming',
    command: '/naming-crusade',
    icon: '✒️',
    tagline: 'Names are documentation. Bad names are lies.',
    quote: "A file called utils.ts. UTILS? That's not a name, that's a JUNK DRAWER.",
    color: 'from-amber-600 to-yellow-800',
  },
  {
    name: 'The Size Crusade',
    slug: 'size',
    command: '/size-crusade',
    icon: '🗡️',
    tagline: 'No file grows unchecked. No monolith survives.',
    quote: 'This file is 1,247 lines. It started small. Innocent. Now it is a CREATURE.',
    color: 'from-rose-600 to-pink-900',
  },
  {
    name: 'The Observability Crusade',
    slug: 'observability',
    command: '/observability-crusade',
    icon: '🔦',
    tagline: 'Let there be LIGHT. No silent failure remains.',
    quote: 'An empty catch block. Do you know what lives inside? DARKNESS. Pure, absolute darkness.',
    color: 'from-yellow-500 to-amber-700',
  },
  {
    name: 'The React Crusade',
    slug: 'react',
    command: '/react-crusade',
    icon: '🛕',
    tagline: 'Component purity. Effect discipline. The Immutable State.',
    quote: "This component fetches data, manages state, AND renders UI? That's not a component — that's a MONOLITH with a .tsx extension.",
    color: 'from-sky-500 to-indigo-700',
  },
  {
    name: 'The A11y Crusade',
    slug: 'a11y',
    command: '/a11y-crusade',
    icon: '♿',
    tagline: 'March for Universal Readability',
    quote: 'The web is for everyone. Code that abandons the blind, traps the keyboard user, or speaks only to the sighted has failed its covenant.',
    color: 'from-violet-600 to-fuchsia-800',
  },
  {
    name: 'The Copy Crusade',
    slug: 'copy',
    command: '/copy-crusade',
    icon: '✍️',
    tagline: 'Persuasive copy. Human messages. No vague button survives.',
    quote: '"Submit"? SUBMIT WHAT? This is the moment of highest anxiety and you give them... ambiguity.',
    color: 'from-teal-600 to-cyan-800',
  },
  {
    name: 'The Adaptive Crusade',
    slug: 'adaptive',
    command: '/adaptive-crusade',
    icon: '\uD83E\uDE9F',
    tagline: 'Seamless UI across foldables, touch, keyboard, and every DPI.',
    quote:
      '100vw. Do you know what happens when a foldable unfolds? This layout SHATTERS. Like glass. Like the CEO\'s confidence on launch day.',
    color: 'from-violet-600 to-fuchsia-900',
  },
  {
    name: 'The Compose Crusade',
    slug: 'compose',
    command: '/compose-crusade',
    icon: '🧩',
    tagline: 'Declarative purity. State discipline. Zero recomposition waste.',
    quote:
      'This composable fetches data, manages state, AND renders UI? That is not a composable \u2014 that is an Activity with a @Composable annotation.',
    color: 'from-green-500 to-teal-700',
  },
] as const;
