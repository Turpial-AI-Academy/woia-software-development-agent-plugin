# Validation & Handoff

## Principle

Validation is proportional to the changed behavior, but evidence must be current and sufficient to support the SPEC.

"Proportional" means avoiding irrelevant expensive checks, not omitting checks that are necessary for the changed contract.

## Build the validation plan from the change

Map:

~~~text
acceptance criterion
  -> changed surface
  -> relevant repository contract
  -> validation command / inspection
  -> observed result
~~~

Examples of relevant evidence include:

- unit/component tests for changed local behavior;
- integration/contract tests for boundaries;
- schema/config validation;
- type/static analysis;
- build/package checks;
- migration dry runs or compatibility tests;
- generated-source consistency;
- focused end-to-end or smoke checks for user-visible flows;
- documentation examples/commands when implementation docs changed.

Use the target repository's actual commands. Do not invent generic npm/pytest/maven commands when the repository declares something else.

## Evidence rules

- Execute the check against the implementation being reported.
- Record pass/fail and meaningful counts/targets when available.
- A skipped or unavailable check remains skipped/unavailable.
- A historical PASS from another head is not current proof after materially relevant changes.
- Re-run only evidence invalidated by later changes; do not repeat unaffected expensive checks without cause.
- Inspect final diff/status for unrelated changes.

Classify the evidence lifecycle explicitly:

- reusable: inspectable durable records of actual execution/observation, with original source head/tree, checked surfaces, command or inspection, relevant environment/inputs, and result; verify that affected dependencies and invariants remain applicable;
- invalidated: later mutations or failed invariants affect the check's surface, dependencies, inputs, environment, or required gate; mark it stale and rerun the affected checks;
- freshly required: changed behavior, missing records, uncertain applicability, and exact-candidate final gates require current execution/observation;
- assumptions/inferences: prose and recollection are not execution evidence and cannot close an acceptance criterion or gate.

Retain the original target for reused results. Preserve unrelated evidence and artifacts. Stable evidence may amortize expensive runtime checks when repository policy permits, but mandatory cross-cutting invariants and final gates still apply. A new turn or phase alone is not a reason to replay validation.

Downstream Code Review, Testing, Security, and Release QA independently own their gates. Development supplies inspectable evidence and cannot substitute its completion for their required evaluation.

## Acceptance-criteria closure

For every acceptance criterion, identify at least one of:

- direct validation evidence;
- repository evidence proving it is satisfied without a runtime check;
- an explicit unresolved gap.

Do not declare the SPEC satisfied while an acceptance criterion has no evidence or acknowledged gap.

## Task closure

Before gate completion:

- every required task is `CLOSED` or `SKIPPED(reason)`;
- every skip reason is recorded and consistent with the SPEC;
- no required task remains open/in-progress/blocked.

## Reviewable source head

A source head is review-ready when:

- it is identifiable by the repository's source-control mechanism;
- it contains the intended implementation being reported;
- its identity can be communicated to the reviewer;
- current validation evidence targets that implementation state, subject to clearly stated limitations.

For Git repositories, report:

~~~text
branch/ref:
HEAD SHA:
working-tree state:
validation target:
~~~

If intended changes remain uncommitted, say that the development gate is not source-head-ready unless the repository explicitly supports a different review mechanism.

## Gate decision

Report `DEVELOPMENT_PASS` only when all are true:

1. SPEC acceptance criteria are satisfied with current evidence;
2. tasks are closed or skipped with reasons;
3. source head is identifiable and review-ready.

Otherwise report `DEVELOPMENT_BLOCKED` with exact missing conditions.

## Handoff content

A useful handoff contains:

- SPEC/change identifier;
- acceptance criteria and evidence;
- task states/skipped reasons;
- changed files/surfaces;
- notable implementation decisions/tradeoffs;
- validation executed and results;
- reused evidence with original targets and durable paths, invalidated evidence and reruns, fresh observations, and assumptions/inferences;
- skipped/blocked checks;
- branch/ref + source-head SHA;
- working-tree state;
- remaining risks/follow-ups;
- gate result.

This handoff prepares review. It does not itself approve the code, merge it, publish it, or deploy it.
