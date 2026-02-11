import type { CrusadeDetail } from '../crusade-detail.types';

export const namingCrusade: CrusadeDetail = {
  slug: 'naming',
  name: 'The Naming Crusade',
  command: '/naming-crusade',
  icon: '✒️',
  tagline: 'Names are documentation. Bad names are lies.',
  quote:
    "A file called utils.ts. UTILS? That's not a name, that's a JUNK DRAWER.",
  color: 'from-amber-600 to-yellow-800',
  gradientFrom: 'from-amber-600',
  gradientTo: 'to-yellow-800',
  description:
    'The Naming Purists march across your codebase, reading every identifier, scrutinizing every file name, and judging every variable against the sacred commandments of clarity. Four elite squads deploy in parallel to purge linguistic laziness from every corner of your project. If an identifier cannot describe itself, it does not deserve to exist.',
  battleCry:
    'Every name will be MEANINGFUL, every file will follow convention, every boolean will answer a question. The age of vague identifiers is OVER.',
  commandments: [
    {
      numeral: 'I',
      text: 'File names shall follow the sacred [name].[component-type].ts convention. No PascalCase. No junk drawers. No exceptions.',
    },
    {
      numeral: 'II',
      text: 'Booleans shall frame a question with is, has, should, can, will, or did. An unprefixed boolean is a lie wearing the mask of ambiguity.',
    },
    {
      numeral: 'III',
      text: 'Functions shall name their ACTION, not their trigger. handleClick is a confession of laziness; submitOrderForm is a covenant of clarity.',
    },
    {
      numeral: 'IV',
      text: 'Types shall bear no Hungarian prefix, no redundant suffix, and no implementation leakage. Events shall speak in past tense, for they are FACTS of history.',
    },
    {
      numeral: 'V',
      text: 'Generic junk drawer names -- data, result, temp, stuff, thing -- are BANNED. Constants shall SCREAM their permanence in SCREAMING_SNAKE_CASE.',
    },
  ],
  specialists: [
    {
      name: 'File Naming Purist',
      icon: '📂',
      focus: 'File Convention Enforcement',
      description:
        'The convention enforcer who guards the [name].[component-type].ts format across every architectural layer. Detects PascalCase violations, missing component-type segments, banned junk drawer file names, and layer-convention mismatches. Every file name is a card in the codebase catalog -- and this purist ensures every card is filed correctly.',
    },
    {
      name: 'Variable Naming Purist',
      icon: '🔤',
      focus: 'Semantic Variable Clarity',
      description:
        'The semantic guardian who ensures every variable tells its story at a glance. Enforces boolean prefixes, bans single-letter variables outside tight loops, demands plural collections and singular items, requires SCREAMING_SNAKE_CASE for constants, and purges generic junk drawer names like data, result, and temp from the lexicon.',
    },
    {
      name: 'Function Naming Purist',
      icon: '⚡',
      focus: 'Action Verb Specificity',
      description:
        'The verb specialist who ensures every function describes its action with surgical specificity. Hunts down vague verbs -- handle, process, manage, do -- and demands they be replaced with precise, action-oriented names. Also eradicates unapproved abbreviations that sacrifice comprehension for keystrokes.',
    },
    {
      name: 'Type Naming Purist',
      icon: '🏷️',
      focus: 'Type and Event Nomenclature',
      description:
        'The nomenclature enforcer who guards interfaces, types, events, and enums with taxonomic precision. Strips Hungarian notation prefixes, eliminates redundant Type and Interface suffixes, corrects event names to past tense, and ensures enum names are singular PascalCase categories free of implementation leakage.',
    },
  ],
  howItWorks: [
    'Reconnaissance scans the target scope, discovering all TypeScript files and running Grep patterns to detect file naming violations, unprefixed booleans, generic junk drawer names, single-letter variables, and non-screaming constants.',
    'Four specialist squads deploy in parallel: the File Naming squad audits every file against [name].[component-type].ts convention, the Variable squad hunts semantic violations, the Function squad targets vague verbs, and the Type squad enforces nomenclature doctrine.',
    'Each squad operates independently with its own narrow doctrine, reading flagged files, analyzing context, and classifying every violation by severity -- CRITICAL for convention-breaking sins, WARNING for semantic laziness, INFO for minor clarity improvements.',
    'Results are reconciled into a consolidated report, deduplicated across squads, and organized by severity with exact file locations, current names, suggested renames, and passionate rationale for every fix.',
    'If the --fix flag is set, file renames execute via git mv to preserve history, import paths are updated, identifier renames are applied with the Edit tool, and a type check verifies nothing was broken.',
    'The Victory Report presents final battle statistics, lists every commandment enforced, and declares the codebase linguistically purified -- or provides precise instructions for manual remediation.',
  ],
};
