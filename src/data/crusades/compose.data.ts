import type { CrusadeDetail } from '../crusade-detail.types';

export const composeCrusade: CrusadeDetail = {
  slug: 'compose',
  name: 'The Compose Crusade',
  command: '/compose-crusade',
  icon: '🧩',
  tagline: 'Declarative purity. State discipline. Zero recomposition waste.',
  quote:
    'This composable fetches data, manages state, AND renders UI? That is not a composable \u2014 that is an Activity with a @Composable annotation.',
  color: 'from-green-500 to-teal-700',
  gradientFrom: 'green-500',
  gradientTo: 'teal-700',
  description:
    'The Compose Crusade deploys five specialist squads in parallel to classify every composable into the Sacred Three-Tier Architecture, enforce state hoisting discipline, purge every LaunchedEffect(Unit) lifecycle hack, eliminate recomposition waste from unstable classes and missing keys, and audit every modifier chain for correct ordering. No impure composable survives. No effect escapes without cleanup. No unstable class triggers silent recomposition cascades.',
  battleCry:
    'The Compose Purists descend upon this codebase. Every composable will be classified. Every effect will be CLEANSED. The Declarative UI demands PURITY.',
  commandments: [
    {
      numeral: 'I',
      text: 'Every composable shall belong to exactly one tier. Tier 1 paints the pixels. Tier 2 owns local state. Tier 3 orchestrates with the ViewModel. A composable that does all three is not a composable -- it is an Activity with a @Composable annotation.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt hoist state to the caller. A composable that owns the state it renders is a composable that cannot be reused, tested, or previewed. State flows DOWN. Events flow UP. This is the unidirectional data flow covenant.',
    },
    {
      numeral: 'III',
      text: 'Thou shalt not abuse LaunchedEffect(Unit) as a lifecycle hack. The effect system is for synchronization with external systems, not for disguising init blocks. Load data in the ViewModel. Use proper keys. Respect the composition lifecycle.',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt make every class stable. Unstable parameters trigger recomposition of every composable that receives them. Mark data classes @Immutable, use ImmutableList, and let the compiler skip what has not changed.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt chain modifiers in the correct order. clip before background. Padding placement changes the visual result. Modifier order is not cosmetic -- it is structural. One wrong link in the chain and the entire layout SHATTERS.',
    },
  ],
  specialists: [
    {
      name: 'The Arch Purist',
      icon: '🏛️',
      focus: 'Three-Tier composable classification, tier boundary enforcement, and nested scrollable detection',
      description:
        'The sacred classifier of Composable functions. Scrutinizes every import, every ViewModel reference, and every state access to classify composables as Tier 1 (Stateless), Tier 2 (Stateful), or Tier 3 (Screen). When a composable spans multiple tiers -- accessing ViewModel, managing local state, AND rendering complex layouts -- the Arch Purist prescribes the surgical split required to restore purity. Detects nested scrollable containers (LazyColumn inside verticalScroll Column) that cause runtime crashes and prescribes flattening into a single LazyColumn.',
    },
    {
      name: 'The State Purist',
      icon: '⚖️',
      focus: 'State hoisting, remember patterns, and rememberSaveable discipline',
      description:
        'The sovereign enforcer of state hoisting and remember discipline. Guards the boundary between state ownership and state consumption with absolute conviction. Detects composables that own state they should receive as parameters, remember where rememberSaveable is required for process-death survival, computed state trapped at the wrong level, and MutableState leaking through function signatures. State flows down. Events flow up. This is the covenant.',
    },
    {
      name: 'The Effects Purist',
      icon: '🔗',
      focus: 'LaunchedEffect, DisposableEffect, and effect key discipline',
      description:
        'The relentless auditor of side effect discipline. Hunts LaunchedEffect(Unit) lifecycle hacks that disguise init blocks, DisposableEffect without meaningful onDispose cleanup, incorrect effect keys that miss relaunch triggers, rememberCoroutineScope used inside composition instead of callbacks, and SideEffect running non-suspend operations that should be in LaunchedEffect. Every effect is judged: does it synchronize with an external system, or does it commit one of the effect heresies?',
    },
    {
      name: 'The Perf Purist',
      icon: '⚡',
      focus: 'Recomposition cost, stability annotations, and lazy list keys',
      description:
        'The performance sentinel who views every recomposition as sacred. Detects unstable data classes that silently trigger recomposition cascades, lambda captures that defeat skip optimizations, LazyColumn items without keys causing state mismatches, inline object allocations during composition, and missing derivedStateOf causing redundant recompositions. Each unnecessary recomposition is a waste of the render budget. Each unstable class is an invisible poison.',
    },
    {
      name: 'The Modifier Purist',
      icon: '🔧',
      focus: 'Modifier chain ordering and parameter conventions',
      description:
        'The meticulous enforcer of Modifier chain discipline. Audits every modifier chain for correct ordering -- clip before background, padding placement relative to borders, size before layout constraints. Enforces the Modifier parameter convention: every composable must accept Modifier as its first optional parameter. Detects composed{} usage where Modifier.Node is preferred, modifier instances created during composition instead of remembered, and missing Modifier.then() for proper chain combination.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans the battlefield by globbing all .kt files containing @Composable, counting ViewModels, effects, and modifier chains. Quick-greps for red flags -- LaunchedEffect(Unit), items without key, background before clip -- to estimate the severity of heresy before deploying the squads.' },
    { phase: 'Squad Formation', description: 'Five specialist squads are assembled, each carrying only the doctrine it needs. The Arch Purist classifies tiers. The State Purist enforces hoisting. The Effects Purist audits side effects. The Perf Purist hunts recomposition waste. The Modifier Purist inspects every chain.' },
    { phase: 'Parallel Deployment', description: 'All five squads are launched simultaneously via the Task tool in a single message. True parallelism -- no squad waits for another. Each operates on its assigned concern with surgical precision across the entire target path.' },
    { phase: 'Severity Classification', description: 'Findings from all squads are aggregated and classified. CRITICAL: mixed-tier composables, LaunchedEffect(Unit) lifecycle abuse, missing DisposableEffect cleanup, unstable recomposition cascades. WARNING: missing state hoisting, modifier ordering, missing lazy keys. INFO: missing rememberSaveable, composed instead of Modifier.Node.' },
    { phase: 'Consolidated Report', description: 'A unified battle report is generated with composable tier census, severity breakdown, recomposition stability audit, top priority targets with specific file paths, and a final victory declaration based on whether CRITICAL heresies have been purged.' },
    { phase: 'Victory Judgment', description: 'If zero CRITICAL issues remain, the Declarative UI blesses the codebase. If heresies persist, the faithful are given specific file paths and refactoring steps to continue the purge until every composable is PURE, every effect is CLEAN, and every modifier chain is ORDERED.' },
  ],
} as const;
