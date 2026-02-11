import type { CrusadeDetail } from '../crusade-detail.types';

export const deadCrusade: CrusadeDetail = {
  slug: 'dead',
  name: 'The Dead Code Crusade',
  command: '/dead-crusade',
  icon: '💀',
  tagline: 'The dead shall be buried. No corpse remains.',
  quote:
    "47 lines of commented-out code. This isn't a codebase, it's a GRAVEYARD.",
  color: 'from-gray-600 to-gray-900',
  gradientFrom: 'from-gray-600',
  gradientTo: 'to-gray-900',
  description:
    'The Dead Code Reapers descend upon the codebase in parallel formation, hunting every species of rot: unused exports, orphaned files, commented-out blocks, debug artifacts, stale TODOs, and unreachable branches. This is not a cleanup. This is a PURGE. Six specialized squads sweep through the repository with the cold certainty of undertakers, cataloguing every piece of code that no longer serves the living.',
  battleCry:
    'The living code will breathe easier when the dead are BURIED.',
  commandments: [
    {
      numeral: 'I',
      text: 'If nothing imports it, it does not exist. An export with zero importers is a contract VOIDED by abandonment.',
    },
    {
      numeral: 'II',
      text: 'Commented-out code is not preservation -- it is COWARDICE. Git remembers everything. The comments remember nothing useful.',
    },
    {
      numeral: 'III',
      text: 'A TODO older than three months is not a plan. It is a MEMORIAL to intentions that died in silence.',
    },
    {
      numeral: 'IV',
      text: 'Debug artifacts in production code are the tools of a worker who left the job half-finished. console.log is not a feature.',
    },
    {
      numeral: 'V',
      text: 'Code after a return statement will never execute. It is DEAD ON ARRIVAL, haunting the file as a ghost that misleads all who read it.',
    },
  ],
  specialists: [
    {
      name: 'Dead Export Purist',
      icon: '⚰️',
      focus: 'Unused Exports',
      description:
        'The Contract Auditor who cross-references every export against every import across the entire codebase. An export is a solemn promise that someone depends on this code. When no one imports it, the contract is VOID and the code is declared dead.',
    },
    {
      name: 'Dead Orphan Purist',
      icon: '🏚️',
      focus: 'Orphaned Files',
      description:
        'The Gravedigger who walks the dependency graph like a cemetery groundskeeper. Builds the full import tree from every entry point, then identifies files disconnected from the living code -- corpses taking up space and confusing anyone who stumbles upon them.',
    },
    {
      name: 'Dead Comment Purist',
      icon: '💀',
      focus: 'Commented-Out Code',
      description:
        'The Archaeologist who excavates layers of commented-out code buried under the sediment of indecision. Every commented block is a monument to cowardice -- someone too afraid to delete, too uncertain to commit. Git remembers. The comments do not.',
    },
    {
      name: 'Dead Debug Purist',
      icon: '🐛',
      focus: 'Debug Artifacts',
      description:
        'The Cleanup Crew that sweeps through production code hunting for console.log statements, debugger breakpoints, and development-only blocks. Someone was debugging here and left their tools behind. The cleanup crew has arrived.',
    },
    {
      name: 'Dead TODO Purist',
      icon: '📝',
      focus: 'Stale TODOs',
      description:
        'The TODO Reaper who reads the inscriptions left by developers past -- promises carved into comments, vows of improvement never honored. Uses git blame to date each promise and declares death on any TODO that has rotted beyond three months.',
    },
    {
      name: 'Dead Unreachable Purist',
      icon: '🚫',
      focus: 'Unreachable Code',
      description:
        'The Branch Pruner who examines every execution path with the eye of a surgeon. Code after return statements, impossible conditions, dead switch cases, and resolved feature flags -- these are ghosts that haunt the file but will never execute. Not once. Not ever.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scan the codebase to count the living, estimate the dead, and determine the scope of the battlefield.' },
    { phase: 'Parallel Deployment', description: 'Six specialized squads launch simultaneously, each hunting a single species of dead code: unused exports, orphaned files, commented blocks, debug artifacts, stale TODOs, and unreachable branches.' },
    { phase: 'Squad Synchronization', description: 'All squad reports are collected, merged, and filtered by severity. Findings are sorted by criticality, lines affected, and file path.' },
    { phase: 'Impact Calculation', description: 'Total lines of dead code are tallied across all categories, broken down by severity (CRITICAL, WARNING, INFO) and by squad.' },
    { phase: 'The Burial Report', description: 'A comprehensive markdown report is generated with executive summary, findings by severity, squad performance metrics, and next steps.' },
    { phase: 'Reap or Audit', description: 'In audit mode, the dead are catalogued. In reap mode, the dead are BURIED. The user chooses when the purge begins.' },
  ],
} as const;
