import type { CrusadeDetail } from '../crusade-detail.types';

export const secretCrusade: CrusadeDetail = {
  slug: 'secret',
  name: 'The Secret Crusade',
  command: '/secret-crusade',
  icon: '🔐',
  tagline: 'DEFCON 1 credential scanning. No key shall hide.',
  quote: "A hardcoded AWS key? This isn't a codebase, it's an OPEN INVITATION.",
  color: 'from-red-700 to-red-900',
  gradientFrom: 'from-red-700',
  gradientTo: 'to-red-900',
  description:
    'The Secret Crusade deploys a coordinated security sweep across your entire codebase and git history, hunting leaked credentials with military-grade paranoia. Every API key, every password, every token that has ever touched version control is a breach waiting to happen. No key, no token, no connection string shall survive the sweep.',
  battleCry:
    'If a secret has EVER been committed, we WILL find it. Rotation is mandatory, not optional.',
  commandments: [
    {
      numeral: 'I',
      text: 'Thou shalt NEVER commit secrets -- no exceptions, no "just for testing," no "it is only dev." A committed credential is a COMPROMISED credential.',
    },
    {
      numeral: 'II',
      text: 'Git history is FOREVER. Removing a secret from HEAD does not remove it from history. If it was ever committed, it is burned. Rotate immediately.',
    },
    {
      numeral: 'III',
      text: 'The .gitignore is thy PERIMETER FENCE. Every missing entry is an open gate. Every open gate is a breach in progress.',
    },
    {
      numeral: 'IV',
      text: 'Secrets shall dwell ONLY in environment variables, secret managers, and vaults. Hardcoded strings are heresy of the highest order.',
    },
    {
      numeral: 'V',
      text: 'Every dependency is an unvetted stranger with access to thy secrets. The supply chain is a threat surface. Audit it. Trust NOTHING.',
    },
  ],
  specialists: [
    {
      name: 'Secret Scanner Purist',
      icon: '🔍',
      focus: 'Hardcoded Credential Detection',
      description:
        'The pattern-matching sentinel who scans every tracked file for hardcoded API keys, tokens, passwords, private keys, and connection strings. Armed with regex patterns for AWS credentials, GitHub tokens, JWTs, and high-entropy strings. Every character sequence is a potential detonator.',
    },
    {
      name: 'Secret Config Purist',
      icon: '🧱',
      focus: 'Configuration Barrier Validation',
      description:
        'The perimeter guard who audits the gates and fences of the codebase. Validates that .gitignore blocks all secret file patterns, that .env.example contains only placeholders, that CI/CD pipelines use secret managers, and that Docker configurations never bake secrets into images.',
    },
    {
      name: 'Secret History Purist',
      icon: '🕵️',
      focus: 'Git History Forensics',
      description:
        'The forensic investigator who excavates the git timeline. Scans the entire commit history for credentials that were ever committed and later removed. A secret in history is COMPROMISED regardless of current HEAD. Calculates exposure windows and mandates rotation.',
    },
    {
      name: 'Secret Supply Purist',
      icon: '📦',
      focus: 'Supply Chain Auditing',
      description:
        'The customs inspector at the border of node_modules. Verifies lockfile integrity, audits dependencies for known CVEs, detects suspicious postinstall scripts, flags typosquatting attempts, and identifies packages with disproportionate network access. Every dependency is a trust decision.',
    },
  ],
  howItWorks: [
    { phase: 'Reconnaissance', description: 'Verify the git repository, count tracked files, identify key areas, and determine squad sizing based on codebase scale and command flags.' },
    { phase: 'Squad Formation', description: 'Assemble 2-4 specialist squads based on repo size: File Scanner Squad for source code, Config Sentinel Squad for barriers, History Squad for git forensics (--history), and Dependency Audit Squad for supply chain (--deep).' },
    { phase: 'War Cry', description: 'Announce deployment with squad assignments, file counts, and commit depth. If a secret has EVER been committed, we WILL find it.' },
    { phase: 'Parallel Deployment', description: 'Launch all specialist purist agents simultaneously via the Task tool. Each squad receives isolated scope and its own detection mission.' },
    { phase: 'DEFCON Consolidation', description: 'Aggregate findings from all squads. Highest DEFCON wins. Deduplicate cross-squad discoveries. Prioritize critical findings over warnings.' },
    { phase: 'Victory Report', description: 'Deliver a comprehensive security assessment with exact file locations, masked secret previews, exposure windows, and precise remediation commands for every finding.' },
  ],
} as const;
