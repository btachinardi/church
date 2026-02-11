import type { CrusadeDetail } from '../crusade-detail.types';

export const sizeCrusade: CrusadeDetail = {
  slug: 'size',
  name: 'The Size Crusade',
  command: '/size-crusade',
  icon: '\uD83D\uDDE1\uFE0F',
  tagline: 'No file grows unchecked. No monolith survives.',
  quote: 'This file is 1,247 lines. It started small. Innocent. Now it is a CREATURE.',
  color: 'from-rose-600 to-pink-900',
  gradientFrom: 'rose-600',
  gradientTo: 'pink-900',
  description:
    'The Size Crusade deploys four surgical squads in parallel to hunt down every bloated file, god class, and mega-component festering in your codebase. Files grow in the shadows -- one line here, a function there -- until innocent modules become thousand-line behemoths that terrify developers and spawn bugs. This crusade finds the bloat, diagnoses the disease, and executes surgical splits with the precision of a field hospital and the mercy of a guillotine.',
  battleCry:
    'We cut deep. We cut clean. No file shall be a monolith. The bloat ends TODAY.',
  commandments: [
    {
      numeral: 'I',
      text: 'No file shall exceed 500 lines without justification. "It just grew" is NOT justification. "We kept adding features" is NOT justification. "It has always been this way" is DEFINITELY not justification. Legitimate exemptions are rarer than clean utils files.',
    },
    {
      numeral: 'II',
      text: 'God classes are abominations. A class doing ten things is ten classes pretending to be one. If you need the word "and" to describe what it does, the scalpel is already in hand.',
    },
    {
      numeral: 'III',
      text: 'Functions over 40 lines are suspicious. Over 80 lines are condemned. By line 40, working memory has been exceeded three times over. No human remembers line 1 by line 80. Extract or perish.',
    },
    {
      numeral: 'IV',
      text: 'One file, one responsibility. The Single Responsibility Principle applies to files, not just classes. If your file handles validation AND persistence AND formatting -- that is three files screaming for freedom.',
    },
    {
      numeral: 'V',
      text: 'Deep nesting is a cry for help. Four levels of indentation is the abyss. Early returns, guard clauses, extracted functions -- these are the ropes that pull us back to the surface.',
    },
  ],
  specialists: [
    {
      name: 'The Component Surgeon',
      icon: '\u2702\uFE0F',
      focus: 'Bloated React components, pages, layouts, and hooks',
      description:
        'The horror movie survivor who has seen 800-line form components and lived to tell the tale. Hunts oversized .component.tsx, .page.tsx, .layout.tsx, and .hook.ts files. Prescribes Extract Component, Extract Hook, and Provider/Component splits. When a scrollbar becomes a pinhead and no one knows where the render logic begins, this surgeon cuts the creature back to health.',
    },
    {
      name: 'The Backend Surgeon',
      icon: '\uD83C\uDFDB\uFE0F',
      focus: 'God classes, bloated services, controllers, and use cases',
      description:
        'The grim dismantler of backend empires. Hunts oversized .service.ts, .controller.ts, .handler.ts, and .use-case.ts files where god classes have conquered neighboring responsibilities. Prescribes Extract Service, Extract Strategy, Extract Validator, and Extract Mapper operations. When a class has 23 methods and handles validation AND persistence AND business logic, this surgeon brings the empire down.',
    },
    {
      name: 'The Domain Surgeon',
      icon: '\uD83E\uDDEC',
      focus: 'Overgrown entities, aggregates, and value objects',
      description:
        'The keeper of domain purity who cuts bloated entities back to their true form. Hunts oversized .entity.ts, .aggregate.ts, and .value-object.ts files where simple domain concepts have absorbed every tangentially related behavior. Prescribes Extract Value Object, Extract Domain Service, Extract Domain Event, and Aggregate Decomposition. When an entity has 28 properties and nobody can tell you what it IS anymore, the domain surgeon restores its identity.',
    },
    {
      name: 'The Utility Surgeon',
      icon: '\u2699\uFE0F',
      focus: 'Bloated utils, helpers, mappers, adapters, and generic files',
      description:
        'The dismantler of dependency singularities and junk drawers of the damned. Hunts oversized .util.ts, .helper.ts, .mapper.ts, .adapter.ts, and .config.ts files -- plus any generic TypeScript file that dares exceed its threshold. Prescribes Split by Concern, Extract Constants, and Extract Adapter operations. When a utils file has 47 imports and half the codebase depends on it, this surgeon collapses the black hole.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans every .ts and .tsx file in scope, counting lines and classifying each by type -- component, hook, service, entity, utility, and beyond. Applies sacred thresholds per file type, exempts barrel files and marked exclusions, and produces a dramatic Horror Report ranking every offender by severity.' },
    { phase: 'Squad Assignment', description: 'Each bloated file is assigned to one of four surgical squads based on its suffix -- Component Surgery for frontend files, Service Surgery for backend logic, Domain Surgery for entities and aggregates, Utility Surgery for helpers and infrastructure. Files that match no specialist pattern fall to the Utility Squad as overflow.' },
    { phase: 'Parallel Deployment', description: 'All four surgical squads are launched simultaneously via the Task tool in a single message. Each specialist agent carries only the doctrine for its file type, analyzing assigned files for distinct responsibilities, function lengths, nesting depth, and import counts.' },
    { phase: 'Surgical Analysis', description: 'Each squad produces detailed split plans with specific line ranges, extraction strategies, new file names, and post-surgery size estimates. Plans are synthesized into a Master Surgical Plan showing total files to split, new files to create, and estimated outcomes.' },
    { phase: 'Execution (--split mode)', description: 'Upon confirmation, squads execute the splits in parallel -- creating new files, moving code, updating every import across the codebase, and verifying with the TypeScript compiler. No import is left broken. No circular dependency is tolerated.' },
    { phase: 'Victory Report', description: 'A final re-count verifies that all previously bloated files now meet their thresholds. TypeScript compilation and tests confirm the codebase is whole. The bloat has been purged. Maintainability is restored.' },
  ],
} as const;
