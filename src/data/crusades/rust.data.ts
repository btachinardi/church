import type { CrusadeDetail } from '../crusade-detail.types';

export const rustCrusade: CrusadeDetail = {
  slug: 'rust',
  name: 'The Rust Crusade',
  command: '/rust-crusade',
  icon: '🦀',
  tagline: 'No unwrap survives. No lifetime confusion endures. No unsafe block goes unquestioned.',
  quote: "The borrow checker doesn't hate you. It just refuses to lie.",
  color: 'from-amber-700 to-orange-900',
  gradientFrom: 'amber-700',
  gradientTo: 'orange-900',
  description:
    'The Rust Crusade deploys five specialist squads in parallel to hunt every shortcut the compiler permits but correctness does not. Unwrap time bombs, unsafe blocks without SAFETY comments, clone-to-silence-the-borrow-checker, unergonomic API surfaces, async code that stalls the executor — none of it survives. cargo check passes. That is not enough. This is.',
  battleCry:
    'Memory safe. Thread safe. Panic free. So it is written. So it shall compile.',
  commandments: [
    {
      numeral: 'I',
      text: '`.unwrap()` is a promise that cannot be kept. Use `?` or handle the error explicitly — the on-call engineer at 3 AM deserves more than a PanicInfo log line with no context.',
    },
    {
      numeral: 'II',
      text: 'Every `unsafe` block must earn its right with a `// SAFETY:` comment that proves the invariant holds — not states that it does, proves it.',
    },
    {
      numeral: 'III',
      text: 'Clone to cross boundaries. Not to silence the borrow checker. The compiler is not wrong. Your data model might be.',
    },
    {
      numeral: 'IV',
      text: 'Errors are values. Panics are bugs. `todo!()` in a production code path is a panic waiting for a user to trigger it.',
    },
    {
      numeral: 'V',
      text: 'Fearless concurrency means proving races cannot happen — not ignoring the warnings. `std::thread::sleep` in an `async fn` is not sleeping one task. It is sleeping every task.',
    },
  ],
  specialists: [
    {
      name: 'The Borrow Inquisitor',
      icon: '🔗',
      focus: 'Ownership violations, unnecessary .clone(), Rc/RefCell overuse, lifetime sprawl',
      description:
        'Hunts every `.clone()` that exists to silence a borrow error rather than transfer ownership. Will restructure code to satisfy the borrow checker rather than paper over it. Has a particular loathing for `Rc<RefCell<Rc<RefCell<T>>>>` and will not rest until the ownership model makes sense.',
    },
    {
      name: 'The Panic Exorcist',
      icon: '💀',
      focus: '.unwrap(), .expect(), panic!, todo!, Box<dyn Error> in library APIs',
      description:
        'Drives out `.unwrap()` demons and replaces them with proper error propagation. Has read every post-mortem caused by a `.unwrap()` on a database query result. No `todo!()` ships to production under their watch — if it is not implemented, it returns an error, not a panic.',
    },
    {
      name: 'The Undefined Behavior Sentinel',
      icon: '⚠️',
      focus: 'unsafe blocks without SAFETY comments, transmute abuse, raw pointer operations',
      description:
        'Guards the `unsafe` boundary with the understanding that undefined behavior is not "might crash" — it is "the compiler may optimize assuming this path is unreachable, and then it will be reached." Every unsafe block gets a `// SAFETY:` comment that names the invariant and proves it holds at this specific call site.',
    },
    {
      name: 'The Type Hierophant',
      icon: '📐',
      focus: 'String vs &str, dyn Trait vs impl Trait, missing derives, god traits',
      description:
        'Enforces the hierarchy: `&str` for inputs, `String` for owned outputs, `impl Trait` for static dispatch, `dyn Trait` only when runtime polymorphism is genuinely required. Has added `#[derive(Debug)]` to enough public types at midnight during test failures to make it a non-negotiable rule.',
    },
    {
      name: 'The Fearless Concurrency Apostle',
      icon: '⚡',
      focus: 'Blocking in async, Arc<Mutex> overuse, lock().unwrap(), unmanaged spawns',
      description:
        'Ensures async code is truly async — `tokio::time::sleep`, not `std::thread::sleep`. Knows that `Arc<Mutex<Vec<Task>>>` is a channel implemented badly, with no backpressure and no wakeup signal. Replaces poisoning panics with recovery strategies and detaches no spawned task without a JoinHandle.',
    },
  ],
  howItWorks: [
    {
      phase: 'Reconnaissance',
      description:
        'Scans all .rs files, runs cargo check and clippy for a baseline, then counts unwrap calls, unsafe blocks, clone calls, blocking sleeps, and Arc<Mutex> patterns. Produces a severity-classified report before touching a single file.',
    },
    {
      phase: 'Squad Assignment',
      description:
        'Files are routed by concern. All source files go to Ownership and Type squads. Non-test source files go to the Error squad. Files containing unsafe go to the Unsafe squad. Files with async fn go to the Async squad. Scope filtering lets you deploy one squad when you know where the problem is.',
    },
    {
      phase: 'Parallel Deployment',
      description:
        'All five squads launch simultaneously via the Task tool in a single message. Each specialist carries only the doctrine it needs — the Unsafe squad knows nothing about String vs &str, the Type squad knows nothing about mutex poisoning.',
    },
    {
      phase: 'Fix Verification',
      description:
        'Each specialist runs cargo check after applying fixes to verify the changes compile. Fixes that break the build are reverted and surfaced as recommendations instead. The Unsafe squad will not write a SAFETY comment it cannot fully justify — an honest missing comment is better than a wrong one.',
    },
    {
      phase: 'Victory Report',
      description:
        'Squad reports are aggregated, deduplicated, and sorted by severity. Blockers surface first. The final count shows before/after for cargo check errors, clippy warnings, and per-squad findings. Memory safe. Thread safe. Panic free.',
    },
  ],
} as const;
