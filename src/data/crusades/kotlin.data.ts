import type { CrusadeDetail } from '../crusade-detail.types';

export const kotlinCrusade: CrusadeDetail = {
  slug: 'kotlin',
  name: 'The Kotlin Crusade',
  command: '/kotlin-crusade',
  icon: '\uD83D\uDC7B',
  tagline: 'Exorcise every Java ghost. Uphold the Null Safety Promise.',
  quote:
    'A double-bang. The developer looked at the type system and said "I don\'t need you." They SUMMONED NullPointerException back from the grave. We had BANISHED it. And they broke the seal with two characters.',
  color: 'from-indigo-500 to-orange-600',
  gradientFrom: 'indigo-500',
  gradientTo: 'orange-600',
  description:
    'The Kotlin Crusade deploys five specialist squads in parallel to exorcise every Java ghost haunting your Kotlin codebase. It hunts double-bang operators that shatter null safety, GlobalScope coroutines that outlive their hosts, StringBuilder relics from the Java era, Any parameters that betray the type system, and runCatching blocks that swallow errors in silence. This crusade scans every .kt file, classifies violations by severity, and delivers a verdict: PURE, TAINTED, CORRUPTED, or POSSESSED.',
  battleCry:
    'The Java ghosts end here. Every !!, every GlobalScope, every StringBuilder -- exorcised. The Kotlin covenant is restored.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not use `!!`. The double-bang is a summoning circle for NullPointerException. Kotlin gave you `?.`, `?:`, `let`, and `when`. Use them. The type system is a COVENANT -- honor it or write Java.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt practice structured concurrency. GlobalScope is exile without supervision. runBlocking is a hostage situation. Every coroutine must have a parent, a scope, and a plan for cancellation.',
    },
    {
      numeral: 'III',
      text: 'Thou shalt write Kotlin, not Java with different syntax. No StringBuilder. No manual for-loops. No getFoo()/setFoo(). Kotlin has idioms -- joinToString, map, when, properties, scope functions. Use the language you chose.',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt seal thy hierarchies and guard thy types. Any is surrender. Unsafe casts are landmines. Data classes shall be immutable. Sealed classes shall be exhaustive. The type system is your fortress -- build it tall.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt handle every failure. runCatching without onFailure is error suppression. Nested lambdas without names are unreadable. Mutable closures are time bombs. Functional code must be disciplined code.',
    },
  ],
  specialists: [
    {
      name: 'The Null Exorcist',
      icon: '\uD83D\uDC7B',
      focus: '!! operators, lateinit misuse, platform type leaks, null safety violations',
      description:
        'The exorcist who banishes NullPointerException from Kotlin code. Hunts every `!!` operator -- each one a broken promise to the type system. Detects `lateinit var` misuse outside DI and test setup, platform type leaks from Java interop, and missing safe call chains. When the null safety seal is broken, this exorcist restores the covenant.',
    },
    {
      name: 'The Concurrency Warden',
      icon: '\u26D3\uFE0F',
      focus: 'GlobalScope, runBlocking, Thread.sleep, structured concurrency',
      description:
        'The warden who chains rogue coroutines. Captures every GlobalScope escapee -- coroutines with no parent, no supervision, no cancellation. Detects runBlocking hostage situations in production code, Thread.sleep blocking coroutine threads, and fire-and-forget launches without error handling. Structured concurrency is the law. The warden enforces it.',
    },
    {
      name: 'The Java Exorcist',
      icon: '\u2615',
      focus: 'StringBuilder, manual loops, Java-style accessors, collection constructors',
      description:
        'The exorcist who purges Java thinking from Kotlin temples. Finds StringBuilder where joinToString exists, manual for-loops where map and filter await, getFoo()/setFoo() where properties are idiomatic, and ArrayList() where mutableListOf() is cleaner. Every Java ghost detected is a developer who changed the file extension but not their mind.',
    },
    {
      name: 'The Type Architect',
      icon: '\uD83C\uDFF0',
      focus: 'Any parameters, unsafe casts, mutable data classes, sealed hierarchies',
      description:
        'The architect who builds impenetrable type fortresses. Hunts Any parameters -- holes in the castle wall. Detects unsafe `as` casts that are gates left unlocked, `var` in data classes that makes walls movable, and missing sealed classes that leave hierarchies open to invasion. The type system is a fortress; the architect ensures every wall stands.',
    },
    {
      name: 'The Lambda Whisperer',
      icon: '\u03BB',
      focus: 'Nested lambdas, inline discipline, runCatching abuse, functional patterns',
      description:
        'The whisperer who tames wild lambdas. Flattens lambda nesting beyond 2 levels, enforces inline discipline on higher-order functions, and hunts runCatching blocks that swallow errors without handling them. Detects mutable state captured in closures and ambiguous `it` references in nested contexts. Functional power demands functional discipline.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans every .kt and .kts file in scope, running automated grep patterns across all five concern domains -- null safety (!!), coroutine discipline (GlobalScope, runBlocking), Java-isms (StringBuilder, ArrayList), type design (Any, unsafe casts), and functional patterns (runCatching). Produces a dramatic Reconnaissance Report ranking every violation by severity.' },
    { phase: 'Squad Assignment', description: 'Each violation is mapped to one of five specialist squads based on concern domain -- Null Exorcism for !!/lateinit, Concurrency Warden for coroutine violations, Java Exorcism for idiomatic issues, Type Architecture for type safety, Lambda Discipline for functional patterns. Scope filtering deploys only relevant squads.' },
    { phase: 'Parallel Deployment', description: 'All five specialist squads are launched simultaneously via the Task tool in a single message. Each agent carries only the doctrine for its concern domain, analyzing assigned files with surgical precision.' },
    { phase: 'Deep Analysis', description: 'Each squad reads flagged files, classifies findings by severity (CRITICAL/WARNING/INFO), proposes specific fixes with code examples showing the HERESY and the RIGHTEOUS alternative, and applies automated fixes if --write mode is enabled.' },
    { phase: 'Aggregation', description: 'Squad reports are consolidated into a unified findings view grouped by file, severity, and concern. Cross-squad patterns are identified -- deeply haunted files, team-wide habits, and Java-thinking hotspots.' },
    { phase: 'Victory Report', description: 'A final verdict is delivered: PURE, TAINTED, CORRUPTED, or POSSESSED. Total violations, fixes applied, and per-concern breakdowns confirm whether the Java ghosts have been fully exorcised.' },
  ],
} as const;
