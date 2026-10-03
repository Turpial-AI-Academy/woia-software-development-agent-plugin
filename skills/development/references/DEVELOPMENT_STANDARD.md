# Development Standard

## Objective

Turn an already-ready behavioral change into reviewable source implementation with minimum sufficient change and current evidence.

Development begins after intent is ready enough to implement. It does not own discovery of the product problem, invention of acceptance criteria, final code-review approval, release-candidate QA, or deployment.

## Required inputs

At minimum:

- a ready SPEC or equivalent approved behavioral contract;
- executable tasks or an equivalent ordered implementation plan.

If either input is absent or materially ambiguous, do not manufacture it silently. Report what is missing and which implementation decision cannot be made safely.

## Source hierarchy

Use the target repository's actual sources of truth. Prefer the narrowest relevant evidence:

~~~text
repository instructions / governance
  -> ready SPEC + acceptance criteria
  -> executable tasks / implementation guide
  -> explicitly cited project decisions and contracts
  -> affected source/config/generated inputs/migrations
  -> relevant tests
  -> implementation documentation
~~~

Code shows current implementation reality; the ready SPEC defines the approved behavioral delta. When they conflict, surface the contradiction instead of silently choosing one.

## Minimum-sufficient reading

Read only what is necessary to implement safely.

A healthy default is:

1. repository instructions and current source-control state;
2. active ready SPEC;
3. its tasks/implementation guide;
4. documents explicitly cited by them;
5. affected source files;
6. relevant existing tests;
7. affected implementation docs.

Expand context only for a concrete dependency, public contract, data/migration concern, generated surface, security boundary, or unresolved contradiction.

## Preserve-first implementation

For existing repositories:

- preserve healthy naming, structure, patterns, style, dependency policy, test organization, configuration ownership, and generated-source workflow;
- prefer the smallest behavioral change that satisfies the SPEC;
- avoid rewriting nearby code merely because another style is possible;
- distinguish necessary refactoring from opportunistic cleanup.

For greenfield work, use already-approved technical decisions when present. Development is not a license to reopen them without cause.

## Prior-method basis and deliberate generalization

This capability preserves proven implementation principles from prior Turpial/user methodology:

- read the relevant SPEC and tasks before code;
- read only minimum required project context;
- inspect affected source and existing test patterns;
- implement within SPEC scope;
- refactor without expanding acceptance criteria;
- update implementation-affected documentation;
- verify the resulting behavior and evidence.

The standalone plugin deliberately does **not** universalize role-specific agent names, fixed npm commands, a mandatory TDD sequence, or one repository document layout. Those details remain target-repository policy unless the SPEC explicitly requires them.

## Completion boundary

Development is complete only when:

1. required tasks are closed or skipped with reasons;
2. the implementation satisfies the ready SPEC with current evidence;
3. an exact source head/ref containing the intended implementation is identifiable for review.

A partially implemented working tree, a blocked task, or an unvalidated behavior is not gate-complete.
