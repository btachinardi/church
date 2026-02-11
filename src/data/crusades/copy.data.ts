import type { CrusadeDetail } from '../crusade-detail.types';

export const copyCrusade: CrusadeDetail = {
  slug: 'copy',
  name: 'The Copy Crusade',
  command: '/copy-crusade',
  icon: '✍️',
  tagline: 'Persuasive copy. Human messages. No vague button survives.',
  quote: '"Submit"? SUBMIT WHAT? This is the moment of highest anxiety and you give them... ambiguity.',
  color: 'from-teal-600 to-cyan-800',
  gradientFrom: 'teal-600',
  gradientTo: 'cyan-800',
  description:
    'The Copy Crusade deploys four specialist squads in parallel to audit every word users read in your application. Vague buttons create cart abandonment. No-reply addresses destroy trust. Generic headlines bleed conversions. This crusade finds every copy sin — from "Submit" buttons to robotic error messages to hero sections that say "Welcome" instead of stating a benefit — and rewrites them using proven persuasion frameworks to convert browsers into customers.',
  battleCry:
    'We rewrite with precision. We enforce with mercy. No copy shall be vague. No message shall be robotic.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt not bore. Use AIDA or PAS frameworks to guide the soul from apathy to action. Corporate speak is bloodless. Generic greetings are conversion killers. Every sentence must justify its existence by answering the user\'s silent question: "So what?"',
    },
    {
      numeral: 'II',
      text: 'Thou shalt kill the "Submit" button. Microcopy must be specific and action-oriented. "Submit" tells the user NOTHING. "Complete Purchase — $47.99" tells them EVERYTHING. Vague buttons create anxiety. Specific buttons build trust.',
    },
    {
      numeral: 'III',
      text: 'Thou shalt honor the opt-in. Never send an SMS or email without explicit consent. To do so is to invite the wrath of the law and the hatred of the user. No-reply addresses are the silent ghost — the door slammed in the customer\'s face.',
    },
    {
      numeral: 'IV',
      text: 'Thou shalt focus on benefits, not features. "Real-time sync" is a feature. "Your team always sees the latest version — no more duplicate work" is a benefit. Use the FAB framework: Feature → Advantage → Benefit. Chain "So what?" until you reach the human gain.',
    },
    {
      numeral: 'V',
      text: 'Thou shalt respect the fold. 50-80% of users never scroll. If your value proposition is buried at line 800, it might as well not exist. The hero section is sacred ground. Headline + benefit + CTA. Visible without scrolling. Or perish.',
    },
  ],
  specialists: [
    {
      name: 'The Microcopy Exorcist',
      icon: '🔘',
      focus: 'UI buttons, error messages, tooltips, and form fields',
      description:
        'The surgeon of user interface text who has seen too many users paralyzed by "Submit" buttons. Hunts vague CTAs, robotic error messages that say "Invalid" without explaining HOW to fix it, empty states that feel like dead ends, and form labels that say "Name" when "Full Name" would be clearer. When a checkout button says "Confirm" and cart abandonment spikes to 40%, this exorcist rewrites it to "Complete Purchase — $47.99" and watches conversions soar.',
    },
    {
      name: 'The Transactional Templar',
      icon: '📧',
      focus: 'Email/SMS copy, sender addresses, and deliverability',
      description:
        'The high guard of deliverability who remembers the company that sent 10,000 order confirmations from no-reply@company.com and watched their domain reputation tank overnight. Hunts the Silent Ghost (no-reply addresses), vague subject lines that say "Notification" instead of "Your order #12847 has shipped", SMS messages over 160 characters that fragment mid-sentence, and transactional emails that answer neither "What just happened?" nor "What do I do next?" Protects inbox placement, legal compliance, and user trust.',
    },
    {
      name: 'The Headline Inquisitor',
      icon: '🎯',
      focus: 'Hero headlines, value propositions, and CTAs',
      description:
        'The guardian of first impressions who changed a landing page headline from "Welcome to Acme" to "Ship Products 3x Faster with AI-Powered Project Management" and watched bounce rate drop from 92% to 34%. Hunts generic welcomes, value propositions buried below the fold, vague CTAs like "Learn More" that should be "See How It Works (2-Minute Demo)", and feature headlines that say "Real-Time Sync" instead of "Real-Time Sync — Your Team Always Sees the Latest Version". When you have 3 seconds to capture attention, this inquisitor ensures you don\'t waste them.',
    },
    {
      name: 'The Framework Enforcer',
      icon: '📐',
      focus: 'AIDA, PAS, 4Ps, and FAB framework compliance',
      description:
        'The keeper of persuasion structures who reorganized a landing page using the PAS framework (Problem → Agitation → Solution) and watched conversion rate jump from 1.2% to 4.8% with the SAME elements, just structured correctly. Hunts random arrangement of headlines, features, and testimonials with no psychological journey. Enforces AIDA (Attention, Interest, Desire, Action) for onboarding flows, PAS for problem-aware audiences, FAB (Features → Advantages → Benefits) for feature descriptions, and the sacred "So What?" test to ensure every feature connects to a user gain. When copy has all the right ingredients but no architecture, this enforcer provides the blueprint.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Scans UI components, email templates, and landing pages for copy violations using pattern detection. Searches for "Submit" buttons, no-reply addresses, generic headlines like "Welcome", robotic error messages, and features without benefits. Produces a dramatic report ranking violations by conversion impact.' },
    { phase: 'Squad Assignment', description: 'Each violation is assigned to one of four specialist squads — Microcopy Exorcists handle buttons and UI text, Transactional Templars handle emails and SMS, Headline Inquisitors handle hero sections and CTAs, Framework Enforcers handle persuasion structure and benefit mapping.' },
    { phase: 'Parallel Deployment', description: 'All four specialist squads are launched simultaneously via the Task tool in a single message. Each agent carries only the doctrine for its domain — microcopy principles, deliverability laws, headline formulas, or persuasion frameworks — ensuring focused, expert analysis.' },
    { phase: 'Copy Audit', description: 'Each squad reads assigned files, identifies user goals and emotional states, diagnoses copy sins, and proposes specific rewrites using proven frameworks (AIDA, PAS, FAB, 4Ps). Plans include before/after examples, psychological principles, and estimated conversion impact.' },
    { phase: 'Execution (--write mode)', description: 'Upon confirmation, squads rewrite copy in parallel using the Edit tool — buttons become specific, error messages include next steps, headlines state benefits, features connect to user gains. No edit occurs without the user approving the plan first.' },
    { phase: 'Victory Report', description: 'A final re-scan verifies all violations are fixed. The report shows before/after metrics, estimated conversion lift (15-30%), reduced cart abandonment (10-20%), and improved email deliverability (+15-25%). Vague copy has been clarified. Robotic messages have been humanized.' },
  ],
} as const;
