import type { CrusadeDetail } from '../crusade-detail.types';

export const swiftCrusade: CrusadeDetail = {
  slug: 'swift',
  name: 'The Swift Crusade',
  command: '/swift-crusade',
  icon: '🦅',
  tagline:
    'No data race survives. No force-unwrap escapes. The compiler is absolute.',
  quote:
    "Force-unwrap on line 47. This is not confidence — this is a CRASH INSTRUCTION disguised as code.",
  color: 'from-lime-600 to-green-800',
  gradientFrom: 'lime-600',
  gradientTo: 'green-800',
  description:
    "The Swift Crusade deploys five enforcement squads in parallel to hunt every unsafe pattern lurking in your Swift codebase. Data races hiding behind mutable classes. Force-unwraps waiting to crash at 3 AM. Retain cycles silently leaking memory. Empty catch blocks swallowing critical errors. Abbreviated names that no one can read. This crusade finds them all, diagnoses the disease, and enforces the compiler's will with the precision of a type checker and the mercy of a strict concurrency audit.",
  battleCry:
    'The compiler does not suggest. It ENFORCES. Unsafe code is not tolerated. It is CORRECTED.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not ship data races. Every mutable shared state lives in an actor. Every concurrent boundary crossing uses Sendable types. Swift 6 makes this a compile-time check — ENABLE it.',
    },
    {
      numeral: 'II',
      text: "Thou shalt not force-unwrap, force-cast, or force-try. The bang operator is a crash instruction. The compiler offered you Optional for a reason. It was PROTECTING you. Guard it. Handle it. Respect it.",
    },
    {
      numeral: 'III',
      text: 'Thou shalt not leak memory. Every escaping closure captures [weak self]. Every delegate is weak var. Every class justifies its existence over a struct. ARC is a contract — violate it and objects hold each other FOREVER.',
    },
    {
      numeral: 'IV',
      text: "Thou shalt not swallow errors. An empty catch block is DARKNESS. Every error is typed, handled, or propagated. Swift 6 gave us typed throws — the caller deserves to know what can go wrong.",
    },
    {
      numeral: 'V',
      text: "Thou shalt name with clarity. No abbreviations. No single-letter names. Argument labels read as English. Mutating and non-mutating pairs are consistent. Apple's API Design Guidelines are your covenant.",
    },
  ],
  specialists: [
    {
      name: 'The Concurrency Enforcer',
      icon: '⚡',
      focus:
        'Swift 6 strict concurrency: Sendable, actors, @MainActor, structured concurrency',
      description:
        'The spirit forged in the fires of Swift 6 strict concurrency. Hunts mutable shared state outside actors, missing Sendable conformance, unstructured Task {} usage, and @unchecked Sendable escape hatches. When a data race lurks behind a mutable var in a class, this enforcer finds it and demands actor isolation.',
    },
    {
      name: 'The Type Guardian',
      icon: '🛡️',
      focus:
        'Force casts, Any/AnyObject, some vs any, protocols, generic constraints',
      description:
        'Keeper of Swift\'s type system — the most powerful armor in the language. Hunts force casts (as!), bare Any usage, untyped dictionaries, and inheritance abuse. When someone writes [String: Any] instead of a typed struct, this guardian strips the armor crack and enforces protocol-oriented design.',
    },
    {
      name: 'The Memory Sentinel',
      icon: '🧠',
      focus:
        'ARC patterns, [weak self], delegate patterns, retain cycles, value vs reference types',
      description:
        "Guardian of ARC's sacred contract. Hunts escaping closures missing [weak self], strong delegate references, unowned misuse, and classes that should be structs. When a closure and an object hold each other forever in a silent pact of mutual destruction, this sentinel breaks the cycle.",
    },
    {
      name: 'The Error Doctrine Enforcer',
      icon: '⚠️',
      focus:
        'Typed throws, try!/try?, empty catches, Result patterns, custom error types',
      description:
        "Guardian against the darkness of swallowed errors. Hunts try! crash instructions, empty catch blocks that consume errors into the void, bare throws without types, and Result with untyped failure. When catch {} silently eats a critical database error, this enforcer brings the error back into the light.",
    },
    {
      name: 'The Naming Covenant Enforcer',
      icon: '📝',
      focus:
        'Apple API Design Guidelines, argument labels, mutating pairs, abbreviations',
      description:
        "Guardian of Apple's API Design Guidelines — the covenant of the Swift ecosystem. Hunts abbreviated names (str, btn, mgr), missing argument labels, mutating methods without non-mutating pairs, and Boolean properties without is/has/can prefixes. When a function reads as a cipher instead of English, this enforcer restores clarity.",
    },
  ],
  howItWorks: [
    {
      phase: 'Reconnaissance',
      description:
        'Scans every .swift file in scope, counting violations across five concern domains — concurrency, type safety, memory management, error handling, and API design. Applies Grep patterns for force-unwraps, force-casts, empty catches, strong delegates, and naming violations, then produces a dramatic report ranking every offender by severity.',
    },
    {
      phase: 'Squad Assignment',
      description:
        'Each violation is assigned to one of five enforcement squads based on concern — Concurrency Enforcement for data races, Type Safety Inquisition for force casts, Memory Vigilance for retain cycles, Error Doctrine for swallowed errors, and API Purity for naming sins. Files may appear in multiple squads if they have cross-concern violations.',
    },
    {
      phase: 'Parallel Deployment',
      description:
        'All five enforcement squads are launched simultaneously via the Task tool in a single message. Each specialist agent carries only the doctrine for its concern domain, analyzing assigned files with focused precision.',
    },
    {
      phase: 'Deep Analysis',
      description:
        'Each squad reads every assigned file, identifies violations with exact line numbers, classifies severity, and produces specific remediation code. Force-unwraps become guard-let. Force-casts become conditional casts. Empty catches become typed error handlers.',
    },
    {
      phase: 'Enforcement (--fix mode)',
      description:
        'Upon confirmation, squads apply fixes in parallel — replacing unsafe patterns with safe alternatives, adding capture lists, typing throws, and renaming APIs. The Swift compiler verifies every modification compiles cleanly.',
    },
    {
      phase: 'Victory Report',
      description:
        "A final re-scan verifies all violations are resolved. Compilation and tests confirm the codebase is whole. The compiler's judgment has been delivered. Swift is safe.",
    },
  ],
} as const;
