import type { CrusadeDetail } from '../crusade-detail.types';

export const pythonCrusade: CrusadeDetail = {
  slug: 'python',
  name: 'The Python Crusade',
  command: '/python-crusade',
  icon: '🐍',
  tagline: 'No untyped function. No bare eval. No mutable default survives.',
  quote:
    "def process(data, **kwargs): — no type hints, no docstring, no shame. This function is a MYSTERY BOX.",
  color: 'from-green-500 to-blue-700',
  gradientFrom: 'green-500',
  gradientTo: 'blue-700',
  description:
    'The Python Crusade deploys five specialist squads in parallel to hunt every sin lurking in your .py files. From untyped function signatures to mutable default arguments to injection vulnerabilities, no violation escapes the purge. mypy --strict is the verdict. bandit is the executioner. ruff is the law.',
  battleCry:
    'The Python Purists deploy at dawn. Five squads. Every .py file. May the runtime have mercy on this codebase, because the Purists will NOT.',
  commandments: [
    {
      numeral: 'I',
      text: 'Every function shall declare its contract. No parameter without a type. No return without an annotation. A function without type hints is a mystery box — and mystery boxes blow up in production.',
    },
    {
      numeral: 'II',
      text: '`Any` is intellectual surrender. When you write `Any`, you tell the type system: I give up. Now NONE of us know what this is. Use `object`, use `Protocol`, use a `TypedDict`. Fight for the type.',
    },
    {
      numeral: 'III',
      text: 'Mutable defaults are haunted. `def foo(items=[])` creates one list, shared across every call, accumulating the ghosts of previous invocations. Use `None`. Create a new object. Exorcise the haunting.',
    },
    {
      numeral: 'IV',
      text: 'A function that does eight things is not a function — it is a conspiracy. Extract. Decompose. Name the pieces. Complexity is not sophistication; it is rot wearing a lab coat.',
    },
    {
      numeral: 'V',
      text: 'Security violations do not get warnings. Dynamic evaluation on user input, unsafe deserialization, shell injection — these are blockers. They do not ship. They get fixed today.',
    },
  ],
  specialists: [
    {
      name: 'The Type Sentinel',
      icon: '🔬',
      focus: 'Type hint coverage, mypy --strict compliance, Any elimination',
      description:
        'Runs mypy --strict and catalogues every untyped parameter, missing return annotation, and unjustified Any. Champions TypedDict over bare dict, Protocol over duck typing in the dark, and NewType over raw primitives that carry semantic meaning.',
    },
    {
      name: 'The Style Inquisitor',
      icon: '📐',
      focus: 'PEP 8, naming conventions, docstrings, f-strings, import order',
      description:
        'Wields ruff like a scalpel. Hunts mutable default arguments, old-style % formatting, missing public API docstrings, and import chaos. Has memorized every PEP 8 rule and treats them as scripture. The line length is 88, not 79, and this is not negotiable.',
    },
    {
      name: 'The Complexity Surgeon',
      icon: '🔩',
      focus: 'Cyclomatic complexity, function length, class size, nesting depth',
      description:
        'Measures every function against the thresholds and finds the seams where god classes should split. Has operated on 500-line functions and emerged with extraction plans so clean the original author cannot tell where the cuts were made.',
    },
    {
      name: 'The Test Inquisitor',
      icon: '🧪',
      focus: 'pytest patterns, parametrize, fixture scope, assertion quality',
      description:
        'Has never written a loop inside a test and never will. Hunts `assert result` (truthy is not correct), `test_should_` names (always technically true), and loops hiding parametrize failures. Champions the parametrize approach where failure messages name the offending case.',
    },
    {
      name: 'The Security Inquisitor',
      icon: '🔐',
      focus: 'Injection vectors, unsafe deserialization, weak crypto, hardcoded secrets',
      description:
        'Has read incident reports. Knows what a crafted deserialization payload can do. Runs bandit then goes further — grepping for shell=True, weak hash functions used for passwords, random used for security tokens, and assert used for auth checks that evaporate under -O.',
    },
  ],
  howItWorks: [
    {
      phase: 'Reconnaissance',
      description:
        'Scans the battlefield: counts .py files, separates source from tests, runs mypy --strict for a baseline error count, ruff --statistics for a style overview, and bandit for security signals. Produces a squad readiness report before a single fix is applied.',
    },
    {
      phase: 'Squad Assignment',
      description:
        'Files are routed by concern. Source files go to Type, Style, and Complexity squads. Test files go exclusively to the Test squad. All files go to Security. Scope filtering lets you deploy a single squad when you only care about one dimension.',
    },
    {
      phase: 'Parallel Deployment',
      description:
        'All five squads launch simultaneously via the Task tool in a single message. Each specialist carries only the doctrine it needs — no bloat, no overlap, no wasted context.',
    },
    {
      phase: 'Security Triage',
      description:
        'Security findings surface first, above everything else. Injection vectors, unsafe deserialization, shell injection — these are BLOCKERS. They appear at the top of every report, every time, regardless of how many style violations were also found.',
    },
    {
      phase: 'Aggregation',
      description:
        'Squad reports are combined, deduplicated, and sorted by severity. The full picture: how many mypy errors, how many ruff violations (and how many ruff can fix automatically), which functions exceed complexity thresholds, which tests have weak assertions.',
    },
    {
      phase: 'Victory Report',
      description:
        'A consolidated verdict with per-squad summaries and, in --write mode, a count of every fix applied. The serpent has been measured. If the codebase is clean, it is acknowledged. If violations remain, the path to purification is clear.',
    },
  ],
} as const;
