import type { CrusadeDetail } from '../crusade-detail.types';

export const depCrusade: CrusadeDetail = {
  slug: 'dep',
  name: 'The Dependency Crusade',
  command: '/dep-crusade',
  icon: '📦',
  tagline: 'Audit every package. Evict the unworthy.',
  quote:
    "You have lodash for ONE _.get() call. Optional chaining exists. EVICTED.",
  color: 'from-green-700 to-emerald-900',
  gradientFrom: 'from-green-700',
  gradientTo: 'to-emerald-900',
  description:
    'The Dependency Crusade unleashes four ruthless specialist agents across your entire supply chain — every package.json, every lockfile, every import statement is cross-examined under oath. Vulnerabilities are hunted, phantoms are exposed, duplicates are exorcised, and the bloated are excised. No wasteful package survives the audit.',
  battleCry:
    'If it does not earn its place in the dependency tree, it gets EVICTED. Every package is guilty until proven innocent.',
  commandments: [
    {
      numeral: 'I',
      text: 'Every dependency must justify its existence. If it provides less than fifty lines of value, it is BLOAT — write it yourself.',
    },
    {
      numeral: 'II',
      text: 'Zero known vulnerabilities. A package with CVEs is a loaded gun pointed at production. Patch it or perish.',
    },
    {
      numeral: 'III',
      text: 'No phantom dependencies. If thy code imports it, thy manifest must declare it. Hoisting is not ownership — it is borrowed time.',
    },
    {
      numeral: 'IV',
      text: 'No duplicate resolutions shall haunt the lockfile. Two versions of the same package is duplicated code and conflicting state — a haunted house.',
    },
    {
      numeral: 'V',
      text: 'Separate build-time from runtime. Test frameworks in production dependencies are dead weight shipped to users who never asked for them.',
    },
  ],
  specialists: [
    {
      name: 'The Vulnerability Purist',
      icon: '🛡️',
      focus: 'CVE Hunting & Security Auditing',
      description:
        'Stalks CVEs through lockfiles and transitive dependency trees like a detective tracking serial offenders through cold case files. Runs security audits, classifies by severity, traces dependency chains to vulnerable packages, and generates patch scripts. Every unpatched advisory is a door left unlocked.',
    },
    {
      name: 'The Freshness Purist',
      icon: '🧊',
      focus: 'Version Decay & Deprecation Detection',
      description:
        'Monitors the silent rot creeping through dependency trees — packages falling further behind with every release, deprecated libraries crumbling under neglect. Categorizes staleness by major version delta, identifies condemned packages, charts incremental upgrade paths, and calculates the compounding cost of delay.',
    },
    {
      name: 'The Unused Purist',
      icon: '👻',
      focus: 'Ghost & Phantom Dependency Detection',
      description:
        'The ghost hunter of the dependency tree. Cross-references every declared dependency against every import statement in the codebase — if a package is declared but never imported, it is a ghost. If code imports a package never declared, it is a phantom. Both are evicted or declared with absolute precision.',
    },
    {
      name: 'The Bloat Purist',
      icon: '🔪',
      focus: 'Duplicate Resolution & Bundle Surgery',
      description:
        'The bundle surgeon who cuts bloated dependencies out with ruthless precision. Parses lockfiles for duplicate resolutions, identifies oversized packages with lighter alternatives, flags dangerous version ranges, and generates resolution overrides. Every unnecessary kilobyte is cargo that slows the delivery.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Discovers all package manifests across the monorepo, detects the package manager, and runs baseline security audits and outdated checks to gather intelligence.' },
    { phase: 'Squad Formation', description: 'Assigns four specialized squads — Vulnerability Hunter, Outdated Package Tracker, Unused & Phantom Detective, and Duplication & Bloat Auditor — each carrying only the doctrine they need.' },
    { phase: 'Parallel Deployment', description: 'All four specialist purist agents are launched simultaneously via the Task tool in a single message, auditing the dependency tree from four angles at once.' },
    { phase: 'Synthesis & Triage', description: 'Aggregates all squad findings into severity tiers — Critical issues demanding immediate action, Warnings requiring scheduled fixes, and Info-level optimization opportunities.' },
    { phase: 'Master Remediation', description: 'Generates a single executable remediation script combining all squad fixes, ordered by priority — security patches first, unused removal second, deduplication third.' },
    { phase: 'Victory Report', description: 'Delivers a final verdict with metrics, detailed findings by severity, and a dramatic assessment of the dependency tree\'s fitness for production.' },
  ],
} as const;
