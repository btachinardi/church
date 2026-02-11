import type { CrusadeDetail } from '../crusade-detail.types';

export const a11yCrusade: CrusadeDetail = {
  slug: 'a11y',
  name: 'The A11y Crusade',
  command: '/a11y-crusade',
  icon: '♿',
  tagline: 'March for Universal Readability',
  quote:
    'The web is for everyone. Code that abandons the blind, traps the keyboard user, or speaks only to the sighted has failed its covenant. We march for humans AND machines.',
  color: 'from-violet-600 to-fuchsia-800',
  gradientFrom: 'violet-600',
  gradientTo: 'fuchsia-800',
  description:
    'The A11y Crusade deploys four specialist squads to enforce WCAG 2.2 Level AA compliance. We hunt div-soup, restore focus indicators, announce dynamic updates, and ensure perceivability for all users—including AI agents who parse the web as "non-visual users." This is the path to Universal Readability and Answer Engine Optimization.',
  battleCry:
    'I speak for those who cannot see your pixels, cannot click your mouse, cannot parse your div-soup. I enforce the covenant of POUR!',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not bear false tags. A button is a <button>, not a clickable <div>.',
    },
    {
      numeral: 'II',
      text: 'Thou shalt preserve the Hierarchy. Headings must follow logical order (H1→H2→H3).',
    },
    {
      numeral: 'III',
      text: 'Thou shalt not hide the Focus. Keyboard users must see where they are (3:1 contrast minimum).',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt describe the Image. All images must have alt text (descriptive or null for decorative).',
    },
    {
      numeral: 'V',
      text: 'Thou shalt not depend on Color alone. Information must have multiple indicators (icon + text + color).',
    },
  ],
  specialists: [
    {
      name: 'The Semantic Enforcer',
      icon: '🏛️',
      focus: 'Semantic HTML & DOM structure',
      description:
        'The DOM Watch enforcer who hunts div-soup and meaningless code. Ensures native HTML semantics are used first, heading hierarchy is logical, landmark regions exist, and buttons are distinguished from links. Converts <div onClick> abominations into proper <button> elements.',
    },
    {
      name: 'The Focus Pathfinder',
      icon: '🧭',
      focus: 'Keyboard navigation & focus management',
      description:
        'The Navigator who ensures no user is ever trapped or lost. Restores focus indicators vanished by careless CSS, verifies keyboard escape routes from modals, validates tab order logic, and ensures skip links exist. Illuminates the path for keyboard travelers with visible 3:1 contrast focus rings.',
    },
    {
      name: 'The ARIA Oracle',
      icon: '📡',
      focus: 'Dynamic content & ARIA attributes',
      description:
        'The Dynamic Interpreter who guards live regions and ensures screen readers are never left in silence. Adds aria-live to shopping carts, role="alert" to errors, aria-label to icon buttons, aria-expanded to collapsibles, and aria-hidden to decorative SVGs. Gives voice to the silent updates.',
    },
    {
      name: 'The Perceivability Guardian',
      icon: '👁️',
      focus: 'Color contrast, alt text, sensory alternatives',
      description:
        'The Sensory enforcer who ensures content is perceivable through all senses. Audits color contrast ratios (4.5:1 for text), adds alt text to images, converts px to rem for text sizing, verifies touch targets are 44x44px, and ensures information is never conveyed by color alone. Makes the invisible visible.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scan the codebase with Grep/Glob to detect missing alt text, div buttons, outline removal, ARIA usage, and potential contrast violations.' },
    { phase: 'Squad Assignment', description: 'Classify violations into four specialist domains—Semantic (DOM structure), Focus (keyboard navigation), ARIA (dynamic content), and Perceivability (sensory alternatives).' },
    { phase: 'Parallel Deployment', description: 'Launch all four specialist purist agents simultaneously via the Task tool in a single message for true parallelism.' },
    { phase: 'Auto-Remediation (--write)', description: 'Fix decorative alt text, convert div buttons to <button>, restore focus indicators, add role="alert" to errors, and convert px to rem.' },
    { phase: 'Manual Review', description: 'Flag complex issues requiring human judgment—descriptive alt text, color contrast design decisions, heading hierarchy restructuring, and complex ARIA patterns.' },
    { phase: 'Victory Report', description: 'Aggregate squad findings, prioritize critical blockers (keyboard traps, missing alt text, contrast failures), estimate remediation effort, and generate actionable next steps including integration with axe, Pa11y, and Lighthouse.' },
  ],
} as const;
