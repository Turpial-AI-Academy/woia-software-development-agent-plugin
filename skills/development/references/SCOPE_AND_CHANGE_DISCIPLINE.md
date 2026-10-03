# Scope & Change Discipline

## Change test

Every material edit should answer at least one:

- Which acceptance criterion does this satisfy?
- Which task requires it?
- Which affected contract/configuration/generated surface makes it necessary?
- Which validation or implementation-documentation need makes it necessary?

If none applies, exclude the change or explain why the SPEC itself requires a broader interpretation.

## Preserve healthy conventions

Inspect and preserve, as applicable:

- language/framework idioms already adopted by the repository;
- module/package ownership;
- naming and file placement;
- error-handling conventions;
- configuration ownership;
- dependency-management policy;
- testing patterns;
- generated-code boundaries;
- migration practices;
- documentation conventions.

Do not convert local author preferences into universal rules.

## Scope-creep indicators

Pause and reassess when implementation starts to include:

- unrelated package/runtime upgrades;
- broad renames or formatting;
- moving modules without behavioral need;
- replacing a framework/library for preference;
- architecture redesign beyond the approved change;
- repository-wide lint cleanup;
- new infrastructure not required by the SPEC;
- speculative future features.

These changes may be valid work, but they require their own approved scope.

## Dependencies

Add or change a dependency only when the SPEC or smallest safe implementation actually needs it.

Before adding one, consider whether the repository already has a suitable capability. Respect its existing lockfile/package policy and avoid broad version churn.

Do not upgrade unrelated dependencies merely because the package manager exposes newer versions.

## Tests

Tests are implementation evidence, not a universal ceremony.

Follow the repository's actual testing contract and the SPEC's risk. Add/change tests when they are needed to prove the behavior, prevent a regression, or satisfy repository policy.

Do not impose mandatory TDD, test pyramids, snapshot styles, coverage thresholds, or one test runner unless the target project requires them.

## Documentation

Update implementation documentation when the change makes current instructions, examples, configuration references, API usage, or operational behavior false or materially incomplete.

Do not rewrite governance/spec history merely to match code. Durable intent changes belong to the repository's appropriate decision/spec process.

## Unsafe shortcuts

Do not:

- weaken tests/gates to make the implementation pass;
- delete validation for behavior you changed without an approved reason;
- bypass canonical generators;
- silently change public contracts;
- store credentials or secret values in source;
- change host-global tooling/configuration as an implementation workaround;
- report unsupported assumptions as verified facts.
