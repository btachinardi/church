---
description: Unleash parallel Architecture Purist agents to audit layer boundaries, import graphs, and structural integrity across the entire codebase. No layer violation survives.
allowed-tools: Read, Glob, Grep, Bash, Task, AskUserQuestion
argument-hint: [path] [--domain <name>] [--fix]
---

# Architecture Crusade

**WAR CRY**: "The Architecture Purists inspect every import, every boundary, every layer. Multiple squads deployed across all domain modules. The fortress will hold — or we will REBUILD it."

## Command Overview

This slash command orchestrates a comprehensive architectural audit of the entire codebase using parallel Architecture Purist agents. It detects layer violations, circular dependencies, cross-domain coupling, and structural rot across all domains.

**NEW CAPABILITY**: The crusade can also **generate comprehensive architecture documentation** including domain catalogs, context maps, target state visions, and migration plans.

## Usage

```bash
/arch-crusade [path] [--domain <name>] [--fix]
```

**Arguments:**
- `[path]` — Optional. Root path to audit (defaults to current working directory)
- `--domain <name>` — Optional. Audit specific domain only (e.g., "orders", "users")
- `--fix` — Optional. Automatically apply fixes for auto-fixable violations

**Examples:**
```bash
/arch-crusade                                    # Full audit
/arch-crusade apps/api/src/domains               # Backend only
/arch-crusade --domain orders                    # Specific domain
/arch-crusade apps/api/src/domains/orders --fix  # Auto-fix violations
/arch-crusade --docs                             # Generate architecture docs
/arch-crusade --target-state                     # Design target architecture
```

**Extended Modes:**
- `--docs` — Generate comprehensive architecture documentation (domains.md, context-map.md, etc.)
- `--target-state` — Design target state architecture with ADRs and migration plans
- `--reconcile` — Ensure all features are accounted for in architecture redesign
- `--scenarios` — Validate architecture against real-world development scenarios

## Mission Phases

### Phase 1: Reconnaissance

**Objective**: Map the battlefield. Identify all domain modules, build the dependency graph, classify layers.

**Actions**:
1. Use `Glob` to find all domain modules:
   - Backend: `apps/api/src/domains/*/`
   - Frontend: `apps/web/src/domains/*/`
2. Use `Glob` to find all TypeScript files: `**/*.ts`, `**/*.tsx`
3. Use `Grep` to extract all import statements across the codebase
4. Classify each file by layer based on directory structure:
   - Files in `*/domain/` → Domain layer
   - Files in `*/application/` → Application layer
   - Files in `*/infrastructure/` → Infrastructure layer
   - Files in `*/presentation/` → Presentation layer
5. Build import dependency graph (adjacency list)

**Output**:
```
RECONNAISSANCE COMPLETE
  Domains discovered: X (orders, users, billing, shipping...)
  Files scanned: Y
  Import statements extracted: Z
  Dependency graph built: A nodes, B edges
```

### Phase 2: Parallel Deployment

**Objective**: Deploy specialized squads to inspect different architectural concerns in parallel.

**Squad Assignment**:

#### **Layer Violation Squad** (arch-purist agent)
- **Target**: Domain purity, upward dependencies, repository pattern violations
- **Scope**: All `*/domain/` directories
- **Deliverable**: List of domain files importing from infrastructure/presentation/application

#### **Circular Dependency Squad** (arch-purist agent)
- **Target**: Circular import cycles at all levels (file, module, domain)
- **Scope**: Complete dependency graph
- **Deliverable**: All detected cycles with full import chains (A→B→C→A)

#### **Cross-Domain Squad** (arch-purist agent)
- **Target**: Direct imports between domain modules
- **Scope**: All domain module boundaries
- **Deliverable**: Cross-domain import violations with suggested event-driven alternatives

#### **Pattern Compliance Squad** (arch-purist agent)
- **Target**: Layer skipping, interface segregation, type duplication
- **Scope**: Application and presentation layers
- **Deliverable**: Pattern violations with fix proposals

**Deployment Strategy**:
```typescript
// Conceptual parallel execution
const squads = [
  { name: "Layer Violation", focus: "domain-purity", domains: allDomains },
  { name: "Circular Dependency", focus: "cycles", domains: allDomains },
  { name: "Cross-Domain", focus: "domain-isolation", domains: allDomains },
  { name: "Pattern Compliance", focus: "patterns", domains: allDomains }
]

// Each squad gets its own arch-purist agent with specific focus
await Promise.all(squads.map(squad =>
  Task(arch-purist, { focus: squad.focus, domains: squad.domains })
))
```

**War Room Updates**:
```
DEPLOYING SQUADS...
  [1/4] Layer Violation Squad → scanning domain/ directories
  [2/4] Circular Dependency Squad → analyzing dependency graph
  [3/4] Cross-Domain Squad → checking domain boundaries
  [4/4] Pattern Compliance Squad → validating patterns
```

### Phase 3: Severity Classification

**Objective**: Triage all violations by severity and impact.

**Classification Matrix**:

| Severity | Criteria | Impact | Action Required |
|----------|----------|--------|-----------------|
| **CRITICAL** | Domain importing infrastructure/presentation, upward dependencies, domain-level circular deps | Breaks architectural foundation, prevents testing, creates tight coupling | BLOCK MERGE, fix immediately |
| **WARNING** | Cross-domain imports, layer skipping (controller→repo), repository pattern violations | Creates maintenance burden, reduces modularity | Fix before merge |
| **INFO** | Type duplication, suboptimal structure, missing interfaces | Refactoring opportunity | Address in future iteration |

**Auto-Fix Eligibility**:
- Type duplication: Can suggest consolidation (manual review needed)
- Repository pattern: Can move interfaces/implementations (risky, manual preferred)
- Import cleanup: Can remove unused imports (safe)
- Cross-domain: Cannot auto-fix (requires design decision: events vs orchestration)

### Phase 4: Fix Proposals

**Objective**: Provide concrete, actionable fixes for every violation.

**Fix Proposal Format**:

```markdown
## VIOLATION #{N} — {SEVERITY}: {Commandment Name}

**File**: {absolute_path}:{line_number}
**Layer**: {domain|application|infrastructure|presentation}
**Violation**: {description}

### Impact
{Why this violation matters in the long term}

### Current Code
```typescript
{code snippet showing the violation}
```

### Proposed Fix
{step-by-step instructions}

```typescript
{code snippet showing the fix}
```

### Architectural Principle
{explanation of the DDD principle being upheld}

---
```

**Example Fix Proposals**:

**CRITICAL — Domain Purity Violation**:
```
File: apps/api/src/domains/orders/domain/entities/order.entity.ts:3
Violation: Domain entity imports @nestjs/common

Impact: Couples domain to NestJS framework, prevents framework-agnostic testing

FIX:
1. Remove @Injectable decorator from Order entity
2. Domain entities should be plain TypeScript classes
3. Move dependency injection to infrastructure layer

BEFORE:
import { Injectable } from '@nestjs/common'
@Injectable()
export class Order { ... }

AFTER:
export class Order { ... }  // Pure TypeScript, no framework
```

**WARNING — Cross-Domain Import**:
```
File: apps/api/src/domains/orders/application/create-order.handler.ts:8
Violation: Orders domain importing User entity from users domain

Impact: Tight coupling between domains, prevents independent deployment

FIX:
1. Remove direct import of User entity
2. Create OrderCreatedEvent in orders/domain/events
3. Have users domain subscribe to event
4. Or use application-layer orchestration in shared use case

BEFORE:
import { User } from '@domains/users/domain/entities/user.entity'

AFTER:
// Option 1: Event-driven
publish(new OrderCreatedEvent({ userId: order.userId }))

// Option 2: Application orchestration
// Create shared use case in application layer that coordinates both domains
```

### Phase 5: Victory Report

**Objective**: Deliver comprehensive audit results with clear next steps.

### Phase 6: Documentation Generation (if --docs)

**Objective**: Create comprehensive architecture documentation library.

**LEARNING**: An audit alone is not enough. The kingdom needs scriptures.

**Documents to Generate**:

1. **domains.md** — Complete catalog of all domains with:
   - Responsibility statements
   - Owned entities
   - Key operations
   - Published/subscribed events
   - Dependencies with justification

2. **context-map.md** — DDD context map showing:
   - Visual domain relationships (ASCII diagrams)
   - Integration patterns (shared kernel, customer/supplier, conformist)
   - Hub domains (intentional vs accidental)
   - Tech debt markers

3. **dependency-policy.md** — Import rules registry:
   - Allowed dependencies (foundational domains)
   - Intentional dependencies (hub domains)
   - Tech debt (circular dependencies)
   - Remediation priorities (P0-P3)

4. **domain-events.md** — Event catalog:
   - EventEmitter2 events (backend communication)
   - PubSub events (frontend SSE)
   - Event flows with diagrams
   - Missing events (recommendations)

**Deployment Strategy**:
```
1. Deploy Explore agents to understand each domain deeply
2. Catalog all entities, operations, events
3. Map dependencies from audit results
4. Generate documentation in docs/architecture/
5. Link violations to improvement opportunities
```

### Phase 7: Target State Design (if --target-state)

**Objective**: Don't just identify sins — show the path to redemption.

**LEARNING**: Developers need a vision, not just a problem list.

**Deliverables**:

1. **target-state.md** — The divine vision:
   - Simplified domain model (consolidate related domains)
   - Clear primary aggregates
   - Event-driven integrations
   - Migration roadmap

2. **adr/NNN-*.md** — Architecture Decision Records:
   - Context: Why the current state is problematic
   - Decision: What should change
   - Consequences: Trade-offs and impacts
   - Alternatives considered

3. **reconciliation.md** — Feature migration map:
   - Every feature from current state
   - Mapped to new home in target state
   - 0 features left behind
   - Migration effort estimates

4. **Detailed pillar scriptures** (pillars/*.md):
   - One document per major domain
   - Comprehensive entity definitions
   - Operation catalogs
   - Integration points

### Phase 8: Scenario Validation (if --scenarios)

**Objective**: Prove the architecture works against real-world use cases.

**LEARNING**: Architecture must serve the business, not theoretical purity.

**Validation Method**:
1. Generate 10+ real-world development scenarios
2. Map each to domain entities and operations
3. Identify gaps where architecture doesn't support workflows
4. Refine architecture to handle all scenarios
5. Document successful mappings

**Example Scenarios to Validate**:
- Sprint planning → execution → QA → release
- Production error → alert → investigation → fix
- User feedback → triage → resolution
- Complex feature with spec-driven development
- Multi-agent collaboration on parallel work
- Real-time UI iteration with feedback loops

### Phase 9: Reuse Strategy (if --target-state)

**Objective**: Prevent future domain proliferation through composition.

**LEARNING**: Don't create new domains for every feature. Compose existing primitives.

**Deliverable: reuse-strategy.md**:
- Composition over proliferation principle
- Task artifacts as extension points
- Workflows as behavior templates
- Tools as universal interface
- Memory scoping for all context
- Subtasks for all decomposition
- Events for all communication

**Anti-patterns to document**:
- Creating domain for every feature
- Creating parallel hierarchies
- Creating custom storage for everything

**Report Structure**:

```
╔══════════════════════════════════════════════════════════════════════╗
║                    ARCHITECTURE CRUSADE COMPLETE                     ║
╚══════════════════════════════════════════════════════════════════════╝

📊 AUDIT SCOPE
  Root Path: {absolute_path}
  Domains Audited: {count} ({list})
  Files Scanned: {count}
  Imports Analyzed: {count}
  Squads Deployed: 4 (Layer Violation, Circular Dependency, Cross-Domain, Pattern Compliance)

🏰 FORTRESS STATUS: {SECURE | COMPROMISED | CRITICAL}

  SECURE: 0 critical violations, minimal warnings
  COMPROMISED: 1-5 critical violations, architecture at risk
  CRITICAL: 6+ critical violations, immediate intervention required

📈 VIOLATIONS BY SEVERITY
  🔴 CRITICAL: {count} violations (require immediate attention)
  🟡 WARNING:  {count} violations (should fix before merge)
  🔵 INFO:     {count} violations (refactoring opportunities)

📋 VIOLATIONS BY TYPE
  Domain Purity (Commandment 1):         {count}
  Upward Dependencies (Commandment 2):   {count}
  Interface Segregation (Commandment 3): {count}
  Circular Dependencies (Commandment 4): {count}
  Repository Pattern (Commandment 5):    {count}
  Layer Skipping (Commandment 6):        {count}
  Type Duplication (Commandment 7):      {count}
  Cross-Domain Imports (Commandment 8):  {count}

🎯 TOP OFFENDERS (domains with most violations)
  1. {domain_name}: {count} violations ({critical} critical)
  2. {domain_name}: {count} violations ({critical} critical)
  3. {domain_name}: {count} violations ({critical} critical)

══════════════════════════════════════════════════════════════════════

DETAILED FINDINGS

{Include all fix proposals from Phase 4, organized by severity}

══════════════════════════════════════════════════════════════════════

📌 RECOMMENDED ACTIONS

IMMEDIATE (Critical violations):
  1. {specific action for first critical violation}
  2. {specific action for second critical violation}
  ...

SHORT-TERM (Warnings):
  1. {specific action for warning}
  2. {specific action for warning}
  ...

LONG-TERM (Refactoring):
  1. {specific action for info}
  2. {specific action for info}
  ...

══════════════════════════════════════════════════════════════════════

🔧 AUTO-FIX AVAILABLE

{If --fix flag was used}
  ✅ Applied {count} automatic fixes
  📝 {count} fixes require manual intervention

{If --fix flag was NOT used}
  Run with --fix flag to auto-apply safe fixes:
    /arch-crusade {path} --fix

══════════════════════════════════════════════════════════════════════

🏛️ ARCHITECTURAL COMMANDMENTS REFERENCE

The Eight Commandments of DDD Architecture:
  1. Domain Purity — Domain depends on NOTHING
  2. No Upward Dependencies — Dependencies flow DOWNWARD only
  3. Interface Segregation — Application uses interfaces, not implementations
  4. No Circular Dependencies — Break all cycles
  5. Repository Pattern — Interfaces in domain/, implementations in infrastructure/
  6. Controllers Call Use Cases — No layer skipping
  7. Shared Types in Packages — No duplication
  8. Domain Module Isolation — No cross-domain direct imports

Full reference: ~/.claude/guidelines/architecture.md

══════════════════════════════════════════════════════════════════════

The Architecture Purists have completed their inspection.

{If SECURE}
The fortress stands strong. Your discipline maintains clean boundaries.
Continue this vigilance.

{If COMPROMISED}
The walls have cracks, but the fortress can be repaired. Address critical
violations immediately. The architecture is salvageable with focused effort.

{If CRITICAL}
The fortress is compromised. Multiple structural failures detected. This
requires immediate intervention. The foundation must be rebuilt before
adding new features.

═══════════════════════════════════════════════════════════════════════
```

## Implementation Details

### Step 1: Parse Arguments

```typescript
const args = parseArguments(input)
const rootPath = args.path || process.cwd()
const specificDomain = args.domain || null
const applyFixes = args.fix || false
```

### Step 2: Discover Domains

Use Glob to find domain directories:
```bash
# Backend domains
ls apps/api/src/domains/

# Frontend domains
ls apps/web/src/domains/
```

If `--domain` flag provided, filter to that domain only.

### Step 3: Deploy Parallel Squads

Use `Task` to spawn multiple arch-purist agents with different focus areas:

```
Squad 1 Focus: domain-purity
  Input: All files in */domain/ directories
  Output: Domain import violations

Squad 2 Focus: circular-dependencies
  Input: Complete dependency graph
  Output: All cycles detected

Squad 3 Focus: cross-domain-imports
  Input: All domain module boundaries
  Output: Cross-domain violations

Squad 4 Focus: pattern-compliance
  Input: Application and presentation layers
  Output: Pattern violations
```

### Step 4: Aggregate Results

Collect results from all squads, merge violations, deduplicate, classify by severity.

### Step 5: Generate Report

Format the victory report with all findings, fix proposals, and recommended actions.

### Step 6: Apply Fixes (if --fix)

If `--fix` flag is provided:
- Apply safe automatic fixes (import cleanup, file moves)
- Skip fixes that require design decisions (cross-domain, event patterns)
- Log all applied fixes and manual interventions needed

## Edge Cases

**No violations found**:
```
FORTRESS STATUS: SECURE

No architectural violations detected. The codebase maintains clean layer
boundaries and proper DDD structure. Your discipline is commendable.

Continue this vigilance. Architecture erosion is gradual — regular audits
prevent decay.
```

**Non-DDD project structure**:
```
WARNING: Non-standard structure detected

Expected domain structure not found. This audit assumes DDD architecture:
  apps/api/src/domains/[domain]/
    ├── application/
    ├── domain/
    ├── infrastructure/
    └── presentation/

Current structure does not match this pattern. Audit results may be
incomplete or inaccurate.

Recommendation: Consider migrating to DDD structure or skip this audit.
```

**Permission errors**:
```
ERROR: Cannot read files in {path}

Insufficient permissions to scan directory. Ensure file system access
is available for the target path.
```

## Voice and Demeanor

This command speaks with military precision and architectural authority:

- "Squads deployed"
- "Fortress status"
- "The walls have cracks"
- "The architecture is salvageable with focused effort"
- "No violation survives"

Balance severity with encouragement:
- When violations are found: Direct, specific, actionable
- When architecture is clean: Acknowledge the discipline required
- Always educational: Explain WHY violations matter

## Success Criteria

A successful architecture crusade includes:
1. Complete scan of all target domains
2. Parallel execution of all audit squads
3. Classification of violations by severity and type
4. Specific fix proposals for every violation
5. Comprehensive victory report
6. Clear next steps prioritized by severity

The architecture is the foundation of maintainability. Guard it with vigilance.

**The fortress will hold — or we will REBUILD it.**
