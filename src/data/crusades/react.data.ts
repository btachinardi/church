import type { CrusadeDetail } from '../crusade-detail.types';

export const reactCrusade: CrusadeDetail = {
  slug: 'react',
  name: 'The React Crusade',
  command: '/react-crusade',
  icon: '\uD83D\uDED5',
  tagline: 'Component purity. Effect discipline. The Immutable State.',
  quote:
    "This component fetches data, manages state, AND renders UI? That's not a component \u2014 that's a MONOLITH with a .tsx extension.",
  color: 'from-sky-500 to-indigo-700',
  gradientFrom: 'sky-500',
  gradientTo: 'indigo-700',
  description:
    'The React Crusade deploys five specialist squads in parallel to classify every component into the Sacred Three-Tier Architecture, purge every rogue effect, enforce the Great Separation of server and client state, eliminate race conditions and zombie connections, and hunt down every unnecessary re-render. No impure component survives. No effect escapes without cleanup. No state management sin remains hidden.',
  battleCry:
    'The React Purists descend upon this codebase. Every component will be classified. Every effect will be CLEANSED. The Immutable State demands PURITY.',
  commandments: [
    {
      numeral: 'I',
      text: 'Every component shall belong to exactly one tier. Tier 1 paints the pixels. Tier 2 maps the domain. Tier 3 sources the state. A component that does all three is not a component -- it is an ABOMINATION waiting to be split.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt not fetch data in useEffect. The effect hook is for synchronization with external systems, not for data fetching. Manual fetch-in-effect breeds race conditions, ignores caching, and leaks memory. Use a query library or face the wrath of stale data.',
    },
    {
      numeral: 'III',
      text: 'Server state and client state are sovereign nations -- coordinate, never merge. React Query holds the Real Truth. Zustand holds User Intent. The Cache Hack is FORBIDDEN. The Syncing Store is HERESY. The Unifying Lens is the only righteous path.',
    },
    {
      numeral: 'IV',
      text: 'Every side effect shall have a cleanup function. Every subscription an unsubscription. Every listener a removal. Every fetch an AbortController. Unmounting without cleanup is ABANDONMENT -- the response arrives to a ghost.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt not block the render thread. Memoize expensive computations. Stabilize references. Wrap heavy state updates in useTransition. The user\'s interaction is SACRED -- never hold it hostage with background work.',
    },
  ],
  specialists: [
    {
      name: 'The Arch Purist',
      icon: '\uD83C\uDFDB\uFE0F',
      focus: 'Three-Tier Architecture classification and tier boundary enforcement',
      description:
        'The sacred classifier of UI components. Scrutinizes every import, every JSX structure, and every naming convention to classify components as Tier 1 (Dumb UI), Tier 2 (Domain UI), or Tier 3 (Provider). When a component spans multiple tiers -- fetching data, mapping domain types, AND rendering complex UI -- the Arch Purist prescribes the surgical split required to restore purity. Providers that render raw Tailwind are exposed. Dumb components with domain imports are condemned.',
    },
    {
      name: 'The Hooks Purist',
      icon: '\uD83D\uDD17',
      focus: 'Effect discipline, dependency arrays, and cleanup enforcement',
      description:
        'The relentless auditor of effect discipline. Hunts data fetching inside useEffect, missing cleanup functions on subscriptions and listeners, derived state computed via useState plus useEffect, suppressed exhaustive-deps lint rules, and components drowning in unbatched high-frequency updates. Every effect is judged: does it synchronize with an external system, or does it commit one of the five effect heresies?',
    },
    {
      name: 'The State Purist',
      icon: '\u2696\uFE0F',
      focus: 'The Great Separation, the Unifying Lens, and optimistic UI doctrine',
      description:
        'The sovereign enforcer of state management boundaries. Guards the Great Separation between server state and client state with absolute conviction. Detects the three forbidden paths: the Cache Hack (setQueryData in onMutate polluting the Oracle), the Syncing Store (useEffect copying query data into Zustand), and the Sin of Duplication (server data cached in client stores). Champions the Unifying Lens -- pending stores tracked by UUID, computed derivation via useMemo, and mandatory exorcism in onSettled.',
    },
    {
      name: 'The Data Purist',
      icon: '\uD83D\uDEE1\uFE0F',
      focus: 'Race conditions, zombie connections, prop drilling, and idempotency',
      description:
        'The vigilant guardian of data flow safety. Hunts the invisible dangers: async operations without AbortController that race against user navigation, WebSocket and EventSource connections that linger as zombies after unmount, event listeners never removed, props drilled through three or more layers unchanged, and critical mutations fired without idempotency keys. A payment submission without deduplication protection is not a bug -- it is a lawsuit.',
    },
    {
      name: 'The Perf Purist',
      icon: '\u26A1',
      focus: 'Render performance, memoization, and concurrent features',
      description:
        'The performance sentinel who views every render cycle as sacred. Detects unstable object and function references that silently defeat React.memo, pure presentation components rendered in lists without memoization, expensive sort and filter operations running on every render without useMemo, and heavy state updates that freeze the interface without useTransition. Each unnecessary re-render is a waste of the browser\'s finite resources. Each blocked interaction is hostage-taking.',
    },
  ],
  howItWorks: [
    'Reconnaissance: Scans the battlefield by globbing all .tsx component files, counting hooks, stores, and providers. Quick-greps for red flags -- fetch in useEffect, suppressed exhaustive-deps, excessive useState -- to estimate the severity of heresy before deploying the squads.',
    'Squad Formation: Five specialist squads are assembled, each carrying only the doctrine it needs. The Arch Purist classifies tiers. The Hooks Purist audits effects. The State Purist enforces the Great Separation. The Data Purist hunts race conditions. The Perf Purist eliminates wasted renders.',
    'Parallel Deployment: All five squads are launched simultaneously via the Task tool in a single message. True parallelism -- no squad waits for another. Each operates on its assigned concern with surgical precision across the entire target path.',
    'Severity Classification: Findings from all squads are aggregated and classified. CRITICAL: God Components spanning all tiers, fetch in useEffect, Cache Hacks, missing cleanup. WARNING: tier boundary bleed, derived state in effects, excessive useState. INFO: missing React.memo, inline references, missing useTransition.',
    'Consolidated Report: A unified battle report is generated with component tier census, severity breakdown, Unifying Lens compliance audit, top priority targets with specific file paths, and a final victory declaration based on whether CRITICAL heresies have been purged.',
    'Victory Judgment: If zero CRITICAL issues remain, the Immutable State blesses the codebase. If heresies persist, the faithful are given specific file paths and refactoring steps to continue the purge until every component is PURE, every effect is CLEAN, and every state boundary is SACRED.',
  ],
} as const;
