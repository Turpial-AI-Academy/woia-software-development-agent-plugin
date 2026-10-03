---
name: development
description: Implements ready software SPECs from repository evidence and executable tasks. Use when coding, configuring, testing, or updating implementation documentation for an approved change while preserving scope, project conventions, current validation evidence, and a reviewable source head.
license: MIT
compatibility: Works with software repositories across languages, frameworks, and delivery models; implementation and validation depend on the target repository's actual tools, permissions, SPEC/task format, and source-control workflow.
metadata:
  author: Turpial AI Academy
  version: "0.5.0"
---

# development

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Implement an already-ready software SPEC by executing its tasks, changing only the authorized code, configuration, tests, generated inputs, migrations, and implementation documentation needed by that SPEC, validating the affected behavior, and leaving an identifiable source head ready for review.


## Fast path and reference loading

Use the **bounded implementation fast path** when the SPEC/task are already ready, the requested change is local and reversible, healthy repository conventions are clear, and there is no material architecture/toolchain/public-contract/persistence/migration/security/concurrency ambiguity.

Fast path:

1. read the ready SPEC criterion(s), the owning task, and only directly affected source/config/docs/tests;
2. preserve the repository's established implementation/testing conventions;
3. make the smallest traceable change;
4. run focused checks for the changed behavior plus mandatory repository cross-cutting invariants and final gates;
5. preserve unrelated artifacts and unaffected valid evidence, and leave an exact reviewable source identity.

Do not reload all development references or reread broad project context merely because a new delegated turn started.

Use the **deep path** for a new implementation plan, unclear or contradictory scope/evidence, scope/ownership conflicts, generated-source/persisted-data/migration/compatibility behavior, public API/event/schema changes, auth/authorization/secrets/signing/trust/security/concurrency boundaries, deployment/rollback/availability risk, toolchain/architecture changes or unhealthy conventions, cross-provider dependency restructuring, missing durable evidence for a required gate, a failed invariant, or an explicit diagnostic/audit request. Reconcile the affected evidence before resuming the bounded path.

Reference policy:

- `DEVELOPMENT_STANDARD.md`: implementation-policy ambiguity or deep-path work;
- `SCOPE_AND_CHANGE_DISCIPLINE.md`: scope/ownership/refactor/toolchain uncertainty;
- `EXECUTION_PROTOCOL.md`: complex task-state, generated-source, migration, or execution-protocol concerns;
- `VALIDATION_AND_HANDOFF.md`: evidence/source-head uncertainty or full handoff review.

Detailed references remain authoritative when triggered.

## Non-negotiable rules

- Start from a ready SPEC and executable tasks. Do not silently invent missing acceptance criteria or rewrite approved intent while implementing.
- Read the minimum sufficient repository context before editing: repository instructions, the SPEC, its tasks, cited project decisions, affected source, relevant tests, and implementation docs.
- Preserve healthy project conventions. Do not impose the author's preferred language, framework, architecture, package manager, test style, branching model, or tooling.
- Keep every material change traceable to the SPEC, a task, an affected contract, or necessary validation/documentation.
- Do not add unrelated features, opportunistic refactors, broad dependency upgrades, formatting sweeps, or cleanup merely because the files are open.
- A task is gate-complete only when it is closed, or explicitly skipped with a concrete reason. Blocked/in-progress work is not gate-complete.
- Validate with current evidence from the target repository. Reused execution evidence must be durable, inspectable, and still applicable to the affected implementation; skipped, unavailable, or stale checks are not PASS.
- Before reporting the implementation as review-ready, identify the exact source head/ref that contains the intended implementation.
- Do not merge, tag, publish, release, deploy, or mutate a marketplace unless separately authorized by the repository's workflow.

## Discover

Read [DEVELOPMENT_STANDARD.md](references/DEVELOPMENT_STANDARD.md) when an implementation-policy decision is actually ambiguous or the work is on the deep path. On the bounded implementation fast path, start from the ready SPEC/task and affected repository surfaces.

Discover in this order unless repository evidence requires a narrower equivalent:

1. repository/agent instructions and current source-control state;
2. the ready SPEC and its acceptance criteria;
3. the executable task list/implementation guide;
4. only the project decisions explicitly cited by the SPEC/tasks or required to resolve an affected contract;
5. affected source/configuration/generated inputs/migrations;
6. relevant existing tests and their patterns;
7. implementation documentation that may become inaccurate.

Do not perform an indiscriminate repository read. Expand context only when a real dependency, contradiction, or risk requires it.

Build a working map:

~~~text
acceptance criterion
  -> task(s)
  -> affected surface
  -> existing convention/contract
  -> implementation change
  -> validation evidence
~~~

Record ambiguity or contradictions before editing. If the SPEC is not ready enough to implement safely, report the gap instead of manufacturing requirements.

## Decide

Use [SCOPE_AND_CHANGE_DISCIPLINE.md](references/SCOPE_AND_CHANGE_DISCIPLINE.md) when scope, ownership, refactoring, dependency/toolchain, or change-discipline questions are materially uncertain; do not reload it for a bounded task whose scope is already explicit.

For each task or coherent implementation slice:

1. identify the acceptance criterion or approved outcome it serves;
2. identify the smallest affected code/config/docs/test surface;
3. preserve the repository's healthy conventions and ownership boundaries;
4. select the smallest implementation that satisfies the behavior;
5. decide what validation is proportionate to the actual change;
6. identify any ambiguity, incompatible contract, migration, generated-source, or irreversible decision that must be escalated.

Do not turn a development task into architecture redesign, toolchain migration, dependency modernization, repository cleanup, or release work unless the SPEC explicitly requires that outcome.

## Implement

Follow [EXECUTION_PROTOCOL.md](references/EXECUTION_PROTOCOL.md) when task-state, generated-source, migration, or execution-protocol complexity requires it. For a bounded ready task, execute directly under the rules in this skill.

Execute one task or coherent dependency group at a time.

For each task:

- mark/track it as in progress using the repository's existing task mechanism when one exists;
- make only changes required by the SPEC/task and repository contracts;
- follow canonical generators rather than hand-editing generated outputs when the repository defines a generator;
- preserve migrations, compatibility paths, persisted formats, public contracts, and rollback-sensitive behavior unless the SPEC explicitly changes them;
- update implementation documentation when the implementation makes it false or incomplete;
- run focused checks while iterating when that materially reduces risk;
- close the task only after its implementation is present and its relevant evidence is available;
- if skipped, record a concrete reason and explain why the SPEC remains satisfied;
- if blocked or ambiguous, stop that slice and report the blocker instead of treating it as complete.

Refactoring is allowed when necessary to implement the SPEC safely or to keep the changed code maintainable, but it must not expand behavior beyond approved acceptance criteria.

## Validate

Use [VALIDATION_AND_HANDOFF.md](references/VALIDATION_AND_HANDOFF.md) when evidence/source-head handoff is unclear or a full deep-path handoff review is needed. On the bounded implementation fast path, validate the changed surface and rerun only evidence invalidated by the change plus repository-required final checks.

Validate the changed surface with the repository's real commands and contracts.

Classify evidence before using it to close a task or acceptance criterion:

- **Reusable**: durable, inspectable records of actual execution or observation identify the source head/tree, checked surfaces, command or inspection, relevant environment/inputs, and result. Reuse only when those surfaces, dependencies, inputs, and required invariants remain unchanged and applicable; retain the original target rather than claiming a new execution.
- **Invalidated**: a later mutation or failed invariant affects a recorded surface, dependency, input, environment, or required gate. Mark the affected evidence stale before claiming completion and rerun the relevant checks; preserve unrelated evidence and artifacts.
- **Freshly required**: changed behavior, missing or uninspectable execution evidence, uncertain applicability, or a repository gate requiring the exact current candidate needs new execution/observation. Mandatory final gates remain mandatory even on the fast path.
- **Assumptions/inferences**: prose claims, recollection, and expected outcomes are not execution evidence. Record uncertainty and obtain the required evidence before closing the gate.

Amortize expensive runtime checks across a stable candidate when the repository permits reuse. A phase transition or new turn alone does not invalidate evidence. Development evidence supports downstream review/testing/security/release QA, but each independently owns its gate and establishes the evidence it requires; Development cannot declare those gates satisfied.

As applicable, verify:

- acceptance criteria against implemented behavior;
- focused unit/component/integration/contract/end-to-end tests affected by the change;
- type/static/schema/build checks relevant to modified code;
- configuration parsing and generated-source consistency;
- migrations and compatibility behavior;
- implementation documentation consistency;
- task terminal states and skipped reasons;
- resulting diff/status for unrelated changes;
- exact source-head identity.

Do not require TDD, a particular test pyramid, npm commands, or a specific CI system unless the target repository or SPEC requires them.

Before declaring the development gate satisfied, require all three:

~~~text
TASKS:
  every required task = CLOSED or SKIPPED(reason)

SPEC:
  implementation evidence covers the ready SPEC acceptance criteria

SOURCE:
  exact reviewable source head/ref is identified
~~~

If any condition is missing, report development as incomplete/blocked rather than PASS.

## Report

Report:

1. SPEC/change identifier and scope implemented;
2. acceptance-criteria-to-task coverage;
3. task states, including every skipped reason;
4. files/surfaces changed and important implementation decisions;
5. repository conventions/contracts preserved;
6. validation actually executed and exact results, with durable evidence paths and targets;
   distinguish reused evidence, invalidated evidence, fresh checks, and assumptions/inferences;
7. checks skipped, blocked, or unavailable;
8. exact source head/ref prepared for review;
9. remaining risks, follow-ups, or known deviations;
10. whether the development gate is satisfied.

Use [development-report.template.md](assets/development-report.template.md) when a durable handoff is useful.

## Detailed references

- [Development Standard](references/DEVELOPMENT_STANDARD.md)
- [Execution Protocol](references/EXECUTION_PROTOCOL.md)
- [Scope & Change Discipline](references/SCOPE_AND_CHANGE_DISCIPLINE.md)
- [Validation & Handoff](references/VALIDATION_AND_HANDOFF.md)
