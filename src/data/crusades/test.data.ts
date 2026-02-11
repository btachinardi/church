import type { CrusadeDetail } from '../crusade-detail.types';

export const testCrusade: CrusadeDetail = {
  slug: 'test',
  name: 'The Test Crusade',
  command: '/test-crusade',
  icon: '\u{1F6E1}\uFE0F',
  tagline: "If it's not tested, it doesn't work.",
  quote: "expect(true).toBe(true) \u2014 that's not a test, that's a SUGGESTION.",
  color: 'from-cyan-600 to-blue-800',
  gradientFrom: 'from-cyan-600',
  gradientTo: 'to-blue-800',
  description:
    'The Test Crusade deploys four merciless specialist squads in parallel to purge every untested function, every meaningless assertion, every missing property test, and every piece of accumulated test debt from your codebase. Coverage is not a number on a dashboard \u2014 it is a sacred PROMISE that the code behaves as specified. Untested code is code that does not work. You just don\'t know it yet.',
  battleCry:
    'Coverage is not a number \u2014 it is a PROMISE. And we have come to collect.',
  commandments: [
    {
      numeral: 'I',
      text: 'If it is not tested, it does not work. Untested code is a guess, a hope, a prayer. We do not ship prayers. We ship PROOF.',
    },
    {
      numeral: 'II',
      text: 'Every test must assert something MEANINGFUL. toBeTruthy() is not a test \u2014 it is a suggestion. Assertions must verify SPECIFIC behavior or they verify NOTHING.',
    },
    {
      numeral: 'III',
      text: 'Domain entities shall have property tests. One example with test@example.com proves nothing about the infinite space of inputs. Fast-check explores that space SYSTEMATICALLY.',
    },
    {
      numeral: 'IV',
      text: 'Accumulated test debt is forbidden. Every it.skip is a broken promise. Every unverified mock is a silent liar. Every todo test is a crack in the foundation you chose to ignore.',
    },
    {
      numeral: 'V',
      text: 'Factory-created objects must prove they can complete their lifecycle. A child born in DRAFT that can never reach ACTIVE is an orphan trapped forever. A single lifecycle test would have caught it on day one.',
    },
  ],
  specialists: [
    {
      name: 'The Coverage Purist',
      icon: '\u{1F4CA}',
      focus: 'Coverage Gaps & Untested Code',
      description:
        'Hunts files below target coverage, untested public APIs, and directories with zero test files. Classifies every file by layer \u2014 domain at 90%, application at 80%, infrastructure at 70%. Files at 0% are not code, they are prayers running in production.',
    },
    {
      name: 'The Assertion Purist',
      icon: '\u{1F3AF}',
      focus: 'Assertion Quality & Test Naming',
      description:
        'Eliminates weak assertions like toBeTruthy and toBeDefined, eradicates snapshot abuse on business logic, and enforces specification-grade test names. Coverage without assertion quality is FRAUD \u2014 tests that prove nothing are lies giving false confidence.',
    },
    {
      name: 'The Property Purist',
      icon: '\u{1F9EA}',
      focus: 'Property Tests & Invariant Enforcement',
      description:
        'Ensures every domain entity and validator has property-based tests using fast-check. Verifies serialization roundtrips, domain invariants, and validation completeness. A handful of examples prove your code works for a few inputs. Property tests prove it works for ALL of them.',
    },
    {
      name: 'The Hygiene Purist',
      icon: '\u{1F9F9}',
      focus: 'Test Debt & Structural Discipline',
      description:
        'Purges skipped tests, todo placeholders, unverified mocks, and oversized test functions. Enforces Arrange-Act-Assert structure and factory lifecycle tests. A test suite riddled with skips and todos is not a safety net \u2014 it is a landmine field.',
    },
  ],
  howItWorks: [
    'Reconnaissance \u2014 The crusade runs coverage reports, counts source and test files, scans for test debt, and builds a complete intelligence picture of the battlefield before any squad deploys.',
    'Parallel Squad Deployment \u2014 Four specialist squads launch simultaneously: the Coverage Gap Squad, the Assertion Quality Squad, the Property Test Squad, and the Test Hygiene Squad. Each carries only the doctrine it needs.',
    'Severity Classification \u2014 All findings are classified into CRITICAL (zero-coverage entities, missing property tests, empty assertions), WARNING (below-target files, weak assertions, skipped tests), and INFO (vague names, missing arbitraries, todos).',
    'Consolidated Battle Report \u2014 Squad findings are aggregated into a unified report with severity breakdowns, top priority targets, and specific file-and-line references for every violation.',
    'Victory Declaration \u2014 The crusade renders its verdict: Full Victory when all targets are met, Partial Victory when critical threats are eliminated, or Ongoing Battle when critical issues remain. Untested code is a THREAT to production.',
  ],
} as const;
