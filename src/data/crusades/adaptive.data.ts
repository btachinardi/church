import type { CrusadeDetail } from '../crusade-detail.types';

export const adaptiveCrusade: CrusadeDetail = {
  slug: 'adaptive',
  name: 'The Adaptive Crusade',
  command: '/adaptive-crusade',
  icon: '\uD83E\uDE9F',
  tagline: 'Seamless UI across foldables, touch, keyboard, and every DPI.',
  quote:
    '100vw. Do you know what happens when a foldable unfolds? This layout SHATTERS. Like glass. Like the CEO\'s confidence on launch day.',
  color: 'from-violet-600 to-fuchsia-900',
  gradientFrom: 'violet-600',
  gradientTo: 'fuchsia-900',
  description:
    'The Adaptive Crusade deploys five specialist squads in parallel to audit every viewport assumption, touch target, focus indicator, resolution asset, and state persistence pattern in your codebase. Foldable devices fold. Tablets rotate. Touch fingers miss tiny buttons. Keyboard users hit invisible walls. High-DPI displays smear 1x images. This crusade finds every adaptive UI violation and enforces the Nine Commandments so no user on any device ever suffers the Great Viewport Collapse.',
  battleCry:
    'The viewport is your battlefield. The hinge is your enemy. The user is your ward. Defend them across every screen, every fold, every rotation.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not hardcode viewport dimensions. 100vw includes the scrollbar and shatters on foldables. 100vh lies on mobile browsers with dynamic toolbars. Use percentages, dvh, and container queries -- the viewport is not a fixed canvas.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt respect the hinge. Foldable devices have a physical seam. Content that spans it becomes unreadable, buttons vanish into the fold, and text splits mid-word. Detect viewport segments and design around them.',
    },
    {
      numeral: 'III',
      text: 'Thou shalt preserve state across configuration changes. When the user rotates, folds, or resizes, their form input, scroll position, and navigation state MUST survive. State loss on resize is a betrayal of user trust.',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt make all interactive elements keyboard accessible. Focus indicators must be visible. Tab order must be logical. Modals must trap focus. No user shall navigate blind through an invisible interface.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt respect minimum touch targets. 44x44 CSS pixels minimum for every interactive element. No hover-only interactions. Touch is not second-class -- it is 60% of all web traffic.',
    },
  ],
  specialists: [
    {
      name: 'The Seam Sentinel',
      icon: '\uD83E\uDE9E',
      focus: 'Foldable hinge awareness, viewport segments, canonical layouts',
      description:
        'The guardian of the fold who ensures no content is devoured by the hinge. Hunts hardcoded 100vw/100vh values, missing viewport segment detection, and single-column layouts stretched across foldable screens. When the CEO opens the app on a Galaxy Z Fold and the hero section splits down the seam, this sentinel has already prevented it.',
    },
    {
      name: 'The State Preservation Cleric',
      icon: '\uD83D\uDCDC',
      focus: 'State continuity across resize, fold, and rotate',
      description:
        'The keeper of the sacred covenant between application and user: what the user has done shall not be undone by the device. Hunts forms without draft persistence, unthrottled resize handlers, lost scroll positions, and navigation state that resets on rotation. Three minutes of input shall never be vaporized by 90 degrees.',
    },
    {
      name: 'The Focus Tracker',
      icon: '\uD83C\uDFAF',
      focus: 'Keyboard navigation, focus-visible, tab order, focus trapping',
      description:
        'The relentless enforcer of keyboard navigation who ensures no user is ever lost, trapped, or invisible. Hunts global outline:none, positive tabIndex values, modals without focus traps, and custom widgets that ignore keyboard input. When a keyboard user tabs into the void, this tracker lights the path home.',
    },
    {
      name: 'The DPI Crusader',
      icon: '\uD83D\uDD2C',
      focus: 'srcset, devicePixelRatio, viewport meta, SVG adoption',
      description:
        'The resolution guardian who ensures every pixel is crisp on every display without wasting a single byte. Hunts images without srcset, canvases ignoring devicePixelRatio, and raster icons that should be SVG. When a hero image renders as a blurry smear on every Retina display in the office, this crusader has already served the 2x.',
    },
    {
      name: 'The Touch Target Templar',
      icon: '\uD83E\uDD1A',
      focus: 'Touch target sizing, hover-free access, drag-and-drop feedback',
      description:
        'The guardian of touch-first interaction who ensures no user misses a tap or loses access to hover-gated features. Hunts 24px icon buttons, onMouseEnter without touch alternatives, and drag-and-drop without visual feedback. When a user on a crowded bus tries to tap a speck-sized close button, this templar has already enlarged it to 44px.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans every CSS, SCSS, TSX, and TypeScript file for viewport hardcoding, missing srcset, outline:none, undersized touch targets, hover-only interactions, missing state persistence, and absent viewport segment detection. Classifies every violation by concern and severity.' },
    { phase: 'Squad Assignment', description: 'Each violation is assigned to one of five specialist squads based on its concern -- Seam Sentinels for viewport issues, State Preservation Clerics for persistence gaps, Focus Trackers for keyboard sins, DPI Crusaders for resolution crimes, and Touch Target Templars for interaction failures.' },
    { phase: 'Parallel Deployment', description: 'All five specialist squads are launched simultaneously via the Task tool in a single message. Each agent carries only the doctrine for its specific concern, analyzing assigned files with laser focus.' },
    { phase: 'Deep Analysis', description: 'Each squad examines violation context, confirms the issue, assesses severity and user impact, and produces specific fix instructions with exact code changes. In --fix mode, fixes are applied directly.' },
    { phase: 'Aggregation', description: 'Squad reports are synthesized into a consolidated findings report with violation counts, fix counts, and an Adaptive Scorecard rating each concern as PASS, WARN, or FAIL.' },
    { phase: 'Victory Report', description: 'A final scorecard declares whether the codebase survives the fold. Touch targets, focus flow, resolution assets, state persistence, and viewport awareness are all verified. The Great Viewport Collapse will not happen here.' },
  ],
} as const;
