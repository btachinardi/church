import type { CrusadeDetail } from '../crusade-detail.types';

export const archCrusade: CrusadeDetail = {
  slug: 'arch',
  name: 'The Architecture Crusade',
  command: '/arch-crusade',
  icon: '🏰',
  tagline: 'DDD layer boundaries. The fortress must hold.',
  quote:
    'A domain entity importing from infrastructure? The domain is SACRED GROUND.',
  color: 'from-purple-700 to-indigo-900',
  gradientFrom: 'purple-700',
  gradientTo: 'indigo-900',
  description:
    'The Architecture Crusade unleashes five specialist squads to audit every import, every boundary, and every layer of your DDD fortress. Layer violations, circular dependencies, cross-domain coupling, pattern breaches, and shadow contracts are hunted in parallel across every domain module. No structural sin survives the inspection.',
  battleCry: 'The fortress will hold -- or we will REBUILD it.',
  commandments: [
    {
      numeral: 'I',
      text: 'Domain Purity -- The domain layer depends on NOTHING. No framework, no database, no HTTP library shall taint the sacred ground of business logic.',
    },
    {
      numeral: 'II',
      text: 'No Upward Dependencies -- Dependencies flow DOWNWARD only. The foundation cannot depend on the roof. The moment domain reaches up, the fortress inverts and collapses.',
    },
    {
      numeral: 'III',
      text: 'No Circular Dependencies -- If A imports B and B imports A, the architecture is BROKEN. A snake eating its own tail. Cut every cycle or watch the codebase collapse into an unmaintainable knot.',
    },
    {
      numeral: 'IV',
      text: 'Domain Module Isolation -- Each domain is a sovereign nation. Cross-domain communication happens through events or application-layer orchestration, NEVER through direct imports between domain internals.',
    },
    {
      numeral: 'V',
      text: 'No Shadow Contracts -- Schemas derive from domain, never redefine. One source of truth. The domain defines. The schema REFLECTS. A lying gate traps every consumer who trusts it.',
    },
  ],
  specialists: [
    {
      name: 'The Layer Purist',
      icon: '🧱',
      focus: 'Domain Purity and Upward Dependencies',
      description:
        'The iron-fisted guardian of the sacred layer hierarchy. Patrols every import statement and every barrel export to ensure dependencies flow in one direction only: DOWNWARD. Domain files importing infrastructure, application reaching into presentation -- every upward crack in the fortress walls is found and condemned.',
    },
    {
      name: 'The Circular Purist',
      icon: '🐍',
      focus: 'Circular Dependency Detection',
      description:
        'The cycle-breaking sentinel who builds directed import graphs and runs depth-first search to find every serpent eating its own tail. Hunts cycles at file, module, and domain levels, including subtle barrel-induced transitive loops. Where others see "it works," this sentinel sees a time bomb.',
    },
    {
      name: 'The Cross-Domain Purist',
      icon: '🛂',
      focus: 'Domain Boundary Enforcement',
      description:
        'The border patrol of sovereign domains. Stands at every domain boundary demanding papers. Direct entity imports, service coupling, cross-domain repository calls -- all are acts of invasion. Identifies hub domains with excessive incoming dependencies and prescribes event-driven diplomacy.',
    },
    {
      name: 'The Pattern Purist',
      icon: '📐',
      focus: 'Repository Pattern, Interface Segregation, and Layer Skipping',
      description:
        'The enforcer of DDD structural discipline. Verifies repository interfaces live in domain and implementations live in infrastructure. Catches application layers importing concrete classes instead of interfaces. Condemns controllers that skip the application layer to query databases directly.',
    },
    {
      name: 'The Shadow Purist',
      icon: '👁️',
      focus: 'Schema-Domain Alignment and Shadow Contracts',
      description:
        'The truth enforcer who hunts the most insidious form of architectural decay. Finds Zod schemas, DTOs, and tool definitions that LIE about what the domain allows -- hardcoding three statuses when the domain defines eight. The code compiles, the types check, but the contract is a trap.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Map the battlefield. Discover all domain modules, scan every TypeScript file, extract all import statements, classify files by layer, and build the complete dependency graph.' },
    { phase: 'Squad Deployment', description: 'Five specialist squads deploy in parallel: Layer Violation, Circular Dependency, Cross-Domain, Pattern Compliance, and Shadow Contract. Each carries only the doctrine it needs.' },
    { phase: 'Violation Detection', description: 'Each squad systematically inspects its domain of concern. Layer boundaries are verified, import cycles are traced, domain borders are patrolled, patterns are audited, and schemas are cross-referenced against domain sources of truth.' },
    { phase: 'Severity Classification', description: 'Every violation is triaged: CRITICAL violations that block merges, WARNINGS that demand attention before merge, and INFO-level refactoring opportunities. The fortress status is declared: SECURE, COMPROMISED, or CRITICAL.' },
    { phase: 'Fix Proposals', description: 'Concrete, actionable remediation for every violation. Before-and-after code, architectural principles upheld, and the long-term cost of ignoring the crack in the wall.' },
    { phase: 'Victory Report', description: 'A comprehensive audit report with violations by severity and type, top offending domains, recommended actions prioritized by urgency, and auto-fix availability for safe corrections.' },
  ],
} as const;
