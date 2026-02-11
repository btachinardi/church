import type { CrusadeDetail } from '../crusade-detail.types';

export const gitCrusade: CrusadeDetail = {
  slug: 'git',
  name: 'The Git Crusade',
  command: '/git-crusade',
  icon: '\uD83D\uDCDC',
  tagline: 'Clean history. Atomic commits. Conventional messages.',
  quote:
    "This commit says 'update'. UPDATE WHAT? This is a permanent record, not a sticky note.",
  color: 'from-orange-600 to-red-700',
  gradientFrom: 'from-orange-600',
  gradientTo: 'to-red-700',
  description:
    'The Git Crusade deploys four specialist squads in parallel to purge every sin from your repository. Worktree filth, vague commit messages, bloated multi-concern commits, and missing gitignore entries are hunted down with surgical precision. No commit escapes judgment, no branch goes unnamed, and no secret survives in history.',
  battleCry:
    'History is PERMANENT -- and we intend to make it WORTHY.',
  commandments: [
    {
      numeral: 'I',
      text: 'Conventional Commits or DEATH. Every message shall declare its type, scope, and purpose in imperative mood -- lowercase, no period, under 72 characters. A commit that says "fix stuff" is a confession, not a message.',
    },
    {
      numeral: 'II',
      text: 'One commit, one logical change. A commit is a UNIT OF THOUGHT -- complete, minimal, and reversible. If the message needs "and" to describe it, it is two commits wearing a trench coat.',
    },
    {
      numeral: 'III',
      text: 'The worktree shall be CLEAN. Pending changes are committed, stashed, or destroyed. Untracked debris, backup files, and temp artifacts are contraband. The worktree is a staging ground, not a junk drawer.',
    },
    {
      numeral: 'IV',
      text: 'The .gitignore is non-negotiable. Environment files, build artifacts, node_modules, IDE config, OS debris, and credentials shall NEVER be tracked. If a secret was ever committed, it is compromised FOREVER.',
    },
    {
      numeral: 'V',
      text: 'Branches tell stories. Every branch follows type/description naming. "my-branch" is meaningless, "wip" is a state of mind, and "test" is a question without an answer.',
    },
  ],
  specialists: [
    {
      name: 'The Worktree Purist',
      icon: '\uD83E\uDDF9',
      focus: 'Worktree cleanliness and intentional staging',
      description:
        'Inspects the working tree for untracked debris, stale modifications, and lazy staging habits. Organizes pending changes into atomic commits, flags junk files for destruction, and ensures every change passes through the staging area with purpose -- not with "git add ." surrender.',
    },
    {
      name: 'The Message Purist',
      icon: '\u2712\uFE0F',
      focus: 'Conventional Commits enforcement',
      description:
        'Audits every commit message against the Conventional Commits specification with zero tolerance. Validates type accuracy, imperative mood, character limits, and body completeness. A message that says "update" receives a rewrite. A message that says "wip" receives a lecture.',
    },
    {
      name: 'The Atomicity Purist',
      icon: '\uD83D\uDD2C',
      focus: 'Single-concern commit integrity',
      description:
        'Identifies bloated multi-concern commits and plans their surgical decomposition. Detects feature code mixed with formatting, unrelated modules entangled in one diff, and fragmented commits that should be squashed. Every commit must stand alone as one complete thought.',
    },
    {
      name: 'The Hygiene Purist',
      icon: '\uD83D\uDEE1\uFE0F',
      focus: 'Repository infrastructure and .gitignore',
      description:
        'Audits the structural foundations of the repository -- .gitignore completeness, tracked artifacts, branch naming conventions, merge strategy consistency, tag discipline, and secrets in history. If node_modules appears in your git log, this purist will find the haunting.',
    },
  ],
  howItWorks: [
    'Reconnaissance: Survey the damage with git status, recent history, commit sizes, branch inventory, .gitignore gaps, and a secrets scan. The grim statistics are presented.',
    'Sin Classification: Findings are grouped into four squads -- Worktree, Message, Atomicity, and Hygiene -- each assigned to its specialist domain.',
    'Parallel Deployment: All four specialist purist agents are launched simultaneously via the Task tool in a single message. The swarm is the strategy.',
    'Squad Reports: Each specialist delivers a detailed verdict -- proposed commits for the worktree, message rewrites, commit split plans, and hygiene fixes with exact commands.',
    'The General Executes: Pending changes are committed into atomic groups. With the --fix flag, existing history is rewritten in safe order: hygiene first, worktree second, messages third, splits last.',
    'Final Inspection: The full audit runs again. The worktree must be clean, all messages conventional, no bloated commits remaining. The Victory Report is declared.',
  ],
} as const;
