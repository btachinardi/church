interface Creature {
  readonly name: string;
  readonly icon: string;
  readonly description: string;
  readonly habitat: string;
  readonly weakness: string;
}

export const bestiary: readonly Creature[] = [
  {
    name: 'The `any` Hydra',
    icon: '🐉',
    description:
      'Cut one head, two more appear. It spreads through the codebase like a plague — one `any` infects every function it touches, silently disabling the compiler\'s protection.',
    habitat: 'Utility files, API response handlers, legacy migrations',
    weakness: '`unknown` + type guards. Force it to PROVE what it is.',
  },
  {
    name: 'The God Class Leviathan',
    icon: '🦑',
    description:
      'A 3,000-line beast lurking in the deep. It does everything — validation, persistence, formatting, logging. No one dares refactor it. No one fully understands it.',
    habitat: 'Service files, "manager" classes, monolithic components',
    weakness: 'Single Responsibility Principle. Extract until each piece has ONE job.',
  },
  {
    name: 'The Silent Catch Wraith',
    icon: '👻',
    description:
      'It swallows errors into the void. `catch (e) {}` — the error happened, but no one will ever know. When production burns, the logs show NOTHING.',
    habitat: 'Try/catch blocks, Promise chains, event handlers',
    weakness: 'Structured logging with context. Make every error SPEAK.',
  },
  {
    name: 'The Phantom Dependency',
    icon: '🫥',
    description:
      'It uses packages never declared in package.json — surviving only through hoisting. One lockfile change and the build collapses like a house of cards.',
    habitat: 'Monorepos, legacy projects, copy-pasted code',
    weakness: 'Strict dependency auditing. If you use it, DECLARE it.',
  },
  {
    name: 'The console.log Ghost',
    icon: '📡',
    description:
      '`console.log(\'here\')`. `console.log(\'test\')`. `console.log(\'????\')`. Left behind by developers long gone, haunting production logs for eternity.',
    habitat: 'Every file. Everywhere. It is ALWAYS there.',
    weakness: 'Proper logger service + lint rules. Exorcise it completely.',
  },
  {
    name: 'The Zombie TODO',
    icon: '🧟',
    description:
      '`// TODO: fix this later` — committed in 2023. It will never be fixed. It will never be removed. It walks the codebase, neither alive nor dead.',
    habitat: 'Comments, FIXME blocks, HACK annotations',
    weakness: 'Issue tracker or DELETE. If it is not tracked, it is not real.',
  },
  {
    name: 'The useEffect Kraken',
    icon: '🐙',
    description:
      'It wraps its tentacles around data fetching, derived state, and subscriptions — all inside one `useEffect`. No cleanup. No abort. When the component unmounts, the requests keep firing into the void.',
    habitat: 'Components that fetch, compute, and subscribe in a single effect',
    weakness: 'TanStack Query for fetching. `useMemo` for derivation. Cleanup functions for subscriptions.',
  },
  {
    name: 'The God Component',
    icon: '⛪',
    description:
      'It sources state from three stores, maps domain types, renders 400 lines of JSX, and handles every edge case. It is Tier 1, Tier 2, AND Tier 3 — a trinity of CHAOS, not of holiness.',
    habitat: 'Dashboard pages, detail views, form wizards with embedded logic',
    weakness: 'The Sacred Three-Tier Split. Provider sources state. Component paints the picture. Design system provides the blocks.',
  },
  {
    name: 'The Infinite Re-render Ouroboros',
    icon: '🐍',
    description:
      'Born from an unstable object reference in a dependency array. The effect fires, creates a new object, which triggers the effect, which creates a new object. The serpent eats its own tail until the browser tab dies.',
    habitat: '`useEffect` dependency arrays with inline objects, functions defined inside render',
    weakness: '`useMemo` and `useCallback`. Stabilize thy references or perish in the loop.',
  },
  {
    name: 'The Syncing Store Doppelganger',
    icon: '🪞',
    description:
      'It copies React Query data into Zustand through a `useEffect` bridge — creating TWO sources of truth that slowly drift apart. The UI flickers between present and past. Which store holds the truth? NEITHER. Both are LYING.',
    habitat: '`useEffect` watchers that sync query results into global stores, Zustand stores with `fetchUsers` methods',
    weakness: 'The Unifying Lens. Keep the Cache pure, keep the Store focused, merge them through Computed Derivation.',
  },
] as const;
