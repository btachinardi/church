import type { CrusadeDetail } from '../crusade-detail.types';

export const swiftuiCrusade: CrusadeDetail = {
  slug: 'swiftui',
  name: 'The SwiftUI Crusade',
  command: '/swiftui-crusade',
  icon: '📱',
  tagline: 'Defend the declarative kingdom from imperative corruption',
  quote:
    "This view fetches data, manages state, AND renders UI? That's not a view — that's a MONOLITH wearing a struct declaration.",
  color: 'from-lime-500 to-emerald-700',
  gradientFrom: 'lime-500',
  gradientTo: 'emerald-700',
  description:
    'The SwiftUI Crusade deploys five specialist squads in parallel to audit every SwiftUI view for architecture violations, state management sins, view composition heresies, performance pitfalls, and navigation anti-patterns. God-views are split. Legacy @ObservedObject is modernized. Deprecated NavigationView is replaced. Eager containers become lazy. No impure view survives.',
  battleCry:
    'The Swift Knight rides at dawn. Every view will be inspected. Every property wrapper will be judged. The declarative kingdom demands PURITY.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not create Massive View Bodies. A view body exceeding 80 lines is a view nobody understands. By line 40, the developer has forgotten what was on line 1. Extract subviews. Compose. Let the body be a table of contents, not the whole book.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt honor the Single Source of Truth. Every piece of data has ONE owner. If a parent owns it, children receive a @Binding. If it is app-wide, it lives in @Environment. If it is computed from other state, it is a computed property -- NOT a @State synced with .onChange.',
    },
    {
      numeral: 'III',
      text: 'Thou shalt wield the correct Property Wrapper. @State for private value types. @Binding for child two-way access. @Observable for reference models on iOS 17+. @Environment for system values. Using the wrong wrapper is not a style choice -- it is a BUG waiting to manifest as stale UI.',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt not burden the Body with computation. The view body runs on EVERY state change. Sorting a 10,000-item array in the body means sorting it every keystroke. Move computations to the view model. Cache results. Let the body be a DECLARATION, not a factory.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt navigate with typed routes, not string sorcery. NavigationView is deprecated. String-based routing is fragile. Use NavigationStack with Hashable route enums. Centralize navigation in a router. Support deep linking. If you cannot describe your navigation as a state machine, it is a MAZE.',
    },
  ],
  specialists: [
    {
      name: 'The Castellan',
      icon: '🏰',
      focus: 'Architecture patterns, MVVM separation, and god-view detection',
      description:
        'The guardian of architectural boundaries. Patrols the walls between views, view models, and services. When a view reaches beyond its walls to fetch data or execute business logic, the Castellan sounds the alarm. God-views — structs that fetch, manage state, AND render — are condemned and surgically split into proper layers.',
    },
    {
      name: 'The Mason',
      icon: '🧱',
      focus: 'View body complexity, modifier ordering, and preview coverage',
      description:
        'The master builder of view composition. Measures every body, counts every nesting level, inspects every modifier chain. When a body sprawls past 80 lines, the Mason prescribes extraction. When modifiers are ordered wrong — padding after background, frame before content — the Mason sees the invisible bugs and corrects the blueprint.',
    },
    {
      name: 'The Armorer',
      icon: '🛡️',
      focus: 'Property wrapper correctness and single source of truth',
      description:
        'The forger of state management discipline. Every property wrapper is a piece of armor — the wrong armor gets a knight killed. @State for value types, @Observable for reference models, @Binding for child access. The Armorer detects non-private @State, legacy @ObservedObject on iOS 17+, derived state stored instead of computed, and duplicate truth across views.',
    },
    {
      name: 'The Siege Engineer',
      icon: '⚙️',
      focus: 'Rendering performance, lazy containers, and body computation',
      description:
        'The optimizer of the rendering pipeline. Understands that body re-evaluates on every state change. Hunts eager VStack in ScrollView (creating hundreds of invisible views), sorting inside ForEach (O(n log n) per render), unscoped .animation() (animating data loads), and .onAppear + Task (zombie tasks that outlive their views).',
    },
    {
      name: 'The Pathfinder',
      icon: '🧭',
      focus: 'Navigation patterns, typed routes, and deep linking',
      description:
        'The navigator of the SwiftUI kingdom. Charts typed routes, guards navigation paths, and condemns every developer still using NavigationView. Enforces NavigationStack with Hashable route enums, centralized router patterns, enum-based sheet management, and deep linking via .onOpenURL. If you cannot deep link to it, your navigation is FRAGILE.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans the battlefield by finding all .swift files with SwiftUI imports, counting views, view models, legacy patterns, and deprecated APIs. Quick-greps for red flags — @ObservedObject on iOS 17+, NavigationView, non-private @State — to estimate heresy severity before deploying squads.' },
    { phase: 'Squad Formation', description: 'Five specialist squads are assembled, each carrying only the doctrine it needs. The Castellan audits architecture. The Mason measures composition. The Armorer inspects state. The Siege Engineer optimizes performance. The Pathfinder charts navigation.' },
    { phase: 'Parallel Deployment', description: 'All five squads are launched simultaneously via the Task tool in a single message. True parallelism — no squad waits for another. Each examines every SwiftUI file for its specific concern with surgical precision.' },
    { phase: 'Severity Classification', description: 'Findings from all squads are aggregated and classified. CRITICAL: god-views, wrong property wrappers, deprecated NavigationView. WARNING: body over 80 lines, eager containers, body computation, .onAppear + Task. INFO: missing previews, unscoped animations, missing deep linking.' },
    { phase: 'Consolidated Report', description: 'A unified battle report is generated with findings grouped by file, cross-referenced across squads, and prioritized by severity. Top priority targets are identified — files with multiple CRITICAL findings across multiple squads.' },
    { phase: 'Victory Judgment', description: 'If zero CRITICAL issues remain, the Swift Knight declares the kingdom pure. If heresies persist, specific file paths and refactoring steps are provided to continue the purge until every view is DECLARATIVE, every state is CORRECT, and every route is TYPED.' },
  ],
} as const;
