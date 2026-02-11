import type { CrusadeDetail } from '../crusade-detail.types';

export const observabilityCrusade: CrusadeDetail = {
  slug: 'observability',
  name: 'The Observability Crusade',
  command: '/observability-crusade',
  icon: '\uD83D\uDD26',
  tagline: 'Let there be LIGHT. No silent failure remains.',
  quote:
    'An empty catch block. Do you know what lives inside? DARKNESS. Pure, absolute darkness.',
  color: 'from-yellow-500 to-amber-700',
  gradientFrom: 'yellow-500',
  gradientTo: 'amber-700',
  description:
    'The Observability Crusade descends upon your codebase to banish every form of darkness: empty catch blocks, bare console.log calls, untraced endpoints, missing correlation IDs, and systems that report themselves healthy while silently dying. Four specialist squads deploy in parallel, each carrying the sacred doctrine of one pillar of observability. When the crusade is complete, every silent failure shall SPEAK, every lost request shall be FOUND, and every metric shall be MEASURED.',
  battleCry:
    'In the beginning, there was darkness upon the codebase. And the Observability Purists said: LET THERE BE LIGHT.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt never swallow errors silently. An empty catch block is the Original Sin -- where errors go to die, and where your understanding dies with them. Every failure must be logged with full context before it is handled or re-thrown.',
    },
    {
      numeral: 'II',
      text: 'Structured logging is sacred scripture. String concatenation logs are prayers whispered into the wind. Every log statement shall carry structured context -- entity IDs, correlation IDs, durations, and timestamps -- so that they may be QUERIED, not merely read.',
    },
    {
      numeral: 'III',
      text: 'The correlation ID is the golden thread. It must be generated at the edge, flow through every service, appear in every log line, and propagate to every downstream call. Without it, debugging distributed systems is prayer and intuition.',
    },
    {
      numeral: 'IV',
      text: 'Health checks must speak truth, not comfortable lies. A health endpoint that returns 200 without verifying its dependencies is a false prophet. Every critical dependency -- database, cache, queue -- shall be tested and its latency measured.',
    },
    {
      numeral: 'V',
      text: 'Averages are lies that hide the suffering of the tail. Thou shalt track p50, p95, and p99 latencies, instrument every business operation with counters and histograms, and define alert thresholds that summon humans when SLOs are violated.',
    },
  ],
  specialists: [
    {
      name: 'The Logging Purist',
      icon: '\uD83D\uDCDC',
      focus: 'Structured logging and console.log eradication',
      description:
        'The prophet of structured logging who banishes console.log to the void. Hunts every bare console call in production code, every string-concatenation log that defies queryability, every misused log level that cries wolf, and every log statement poisoned with PII or secrets. Replaces darkness with structured, searchable, filterable light using the project\'s existing logger.',
    },
    {
      name: 'The Error Purist',
      icon: '\uD83D\uDC7B',
      focus: 'Empty catch blocks and swallowed error exorcism',
      description:
        'The exorcist of empty catch blocks and swallowed errors. Casts out the demons of silent failure -- catch blocks that swallow into the void, catch-and-return-null patterns that mask failures as absence, floating promises with no error handler, and inconsistent error contracts within the same module. Ensures every error is logged with full context before it is handled.',
    },
    {
      name: 'The Tracing Purist',
      icon: '\uD83E\uDDF5',
      focus: 'Correlation ID propagation and endpoint instrumentation',
      description:
        'The golden thread weaver who ensures every request can be traced end-to-end. Audits correlation ID middleware, instruments every API endpoint with request/response logging and duration measurement, traces every external call that crosses a boundary -- HTTP, database, message queue -- and verifies that the sacred x-correlation-id header propagates to all downstream services.',
    },
    {
      name: 'The Metrics Purist',
      icon: '\uD83D\uDCC8',
      focus: 'Health checks, business metrics, and alert thresholds',
      description:
        'The vital signs monitor who refuses to let suffering hide behind comfortable averages. Audits health check endpoints for real dependency verification, instruments every critical business operation with counters and histograms, enforces percentile tracking over deceitful averages, and demands alert thresholds that turn metrics into contracts -- SLOs that summon humans when violated.',
    },
  ],
  howItWorks: [
    { phase: 'The Darkness Survey', description: 'The crusade begins by scanning the entire codebase for every sin against observability -- empty catch blocks, bare console calls, untraced endpoints, missing correlation IDs, swallowed errors, unstructured logs, and missing health checks. Each violation is catalogued with file path, line number, and severity.' },
    { phase: 'The Darkness Report', description: 'All findings are aggregated into a structured Darkness Report, categorized by sin type and severity (CRITICAL, HIGH, MEDIUM). The first three examples of each sin are displayed with code snippets and consequences explained in full prophetic voice.' },
    { phase: 'Squad Formation', description: 'Files are partitioned by sin category and assigned to specialist squads based on codebase size -- two squads for small codebases, three for medium, and four fully independent squads for large operations. Each squad receives only the files and doctrine relevant to its sacred mission.' },
    { phase: 'Parallel Deployment', description: 'All specialist squads -- Logging Purification, Error Handling, Distributed Tracing, and Health & Metrics -- are launched simultaneously via the Task tool in a single message. Each squad carries its specialist agent and operates with surgical precision on its assigned files.' },
    { phase: 'Verification and Illumination', description: 'After all squads return, the darkness detection scans are re-run to count remaining sins. The Illumination Report reveals how many sins were eliminated, what new light sources were created (middleware, interceptors, health endpoints), and the final illumination percentage.' },
    { phase: 'Remaining Darkness', description: 'Any sins requiring human judgment -- complex error handling logic, legacy code dependencies, or external library integration -- are highlighted with specific file paths and actionable guidance for manual resolution.' },
  ],
} as const;
