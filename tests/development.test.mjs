import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "development");

test("development boundary requires ready inputs, task closure, and reviewable source", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /ready SPEC and executable tasks/);
  assert.match(skill, /code, configuration, tests, generated inputs, migrations, and implementation documentation/);
  assert.match(skill, /closed, or explicitly skipped with a concrete reason/);
  assert.match(skill, /exact source head\/ref/);
});

function section(document, heading) {
  const result = document.split(/(?=^## )/m).find((part) => heading.test(part.split("\n")[0]));
  assert.ok(result, "missing section: " + heading);
  return result;
}

test("bounded implementation preserves approved scope, focused validation, and unaffected evidence", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const bounded = section(skill, /fast path/i);
  assert.match(bounded, /SPEC.*task.*ready/i);
  assert.match(bounded, /local.*reversible/i);
  assert.match(bounded, /directly affected.*source.*config.*docs.*tests/i);
  assert.match(bounded, /smallest.*traceable.*change/i);
  assert.match(bounded, /focused checks.*changed behavior/i);
  assert.match(bounded, /mandatory.*cross-cutting.*invariants.*final gates/i);
  assert.match(bounded, /preserve.*unrelated artifacts.*unaffected valid evidence/i);
  assert.match(bounded, /exact.*reviewable.*source identity/i);
});

test("deep-path triggers preserve contract, persistence, security, and release safety", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const bounded = section(skill, /fast path/i);
  const deep = bounded.split(/Use the \*\*deep path\*\*/i)[1]?.split(/Reference policy:/i)[0];
  assert.ok(deep, "missing deep-path obligations");
  for (const trigger of [
    /new implementation plan/i, /contradictory.*evidence/i,
    /persisted.*data/i, /migration/i, /public.*API.*event.*schema/i,
    /auth.*authorization.*secrets.*signing.*trust.*security/i,
    /deployment.*rollback.*availability/i, /toolchain.*architecture.*unhealthy/i,
    /cross-provider.*dependency/i, /missing.*durable evidence.*gate/i, /failed invariant/i,
  ]) assert.match(deep, trigger);
});

test("reference loading follows explicit triggers and does not replay broad context each turn", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const bounded = section(skill, /fast path/i);
  assert.match(bounded, /not reload.*references.*broad.*context.*turn/i);
  for (const [reference, trigger] of [
    ["DEVELOPMENT_STANDARD.md", /ambiguity.*deep-path/i],
    ["SCOPE_AND_CHANGE_DISCIPLINE.md", /scope.*ownership.*uncertainty/i],
    ["EXECUTION_PROTOCOL.md", /task-state.*generated-source.*migration/i],
    ["VALIDATION_AND_HANDOFF.md", /evidence.*source-head.*uncertainty/i],
  ]) {
    const policy = bounded.split("\n").find((line) => line.includes("`" + reference + "`"));
    assert.ok(policy, "missing reference policy: " + reference);
    assert.match(policy, trigger);
  }
});

test("evidence reuse requires inspectable execution and mutations invalidate affected proof", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const validation = section(skill, /validate/i);
  const rules = await readFile(path.join(skillRoot, "references", "VALIDATION_AND_HANDOFF.md"), "utf8");
  for (const document of [validation, section(rules, /evidence rules/i)]) {
    for (const obligation of [
      /reusable.*durable.*execution.*observation/is,
      /source head\/tree.*surface.*command.*environment.*inputs.*result/is,
      /invalidated.*mutation.*invariant.*stale.*rerun/is,
      /freshly.*changed behavior.*(missing|uninspectable).*exact.*candidate/is,
      /assumptions.*inferences.*(not execution evidence|cannot close)/is,
      /preserve.*unrelated.*evidence.*artifacts/is,
      /original target/is,
      /(amortize|amortizing).*runtime/is,
      /independently.*own.*gate/is,
    ]) assert.match(document, obligation);
  }
});

test("discovery is minimum-sufficient and starts from approved implementation context", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const standard = await readFile(path.join(skillRoot, "references", "DEVELOPMENT_STANDARD.md"), "utf8");
  assert.match(skill, /minimum sufficient repository context/i);
  assert.match(skill, /Do not perform an indiscriminate repository read/i);
  for (const phrase of ["ready SPEC", "executable task", "affected source", "relevant existing tests", "implementation documentation"]) {
    assert.match(skill, new RegExp(phrase, "i"));
  }
  assert.match(standard, /Code shows current implementation reality; the ready SPEC defines the approved behavioral delta/i);
});

test("scope discipline rejects opportunistic development work", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discipline = await readFile(path.join(skillRoot, "references", "SCOPE_AND_CHANGE_DISCIPLINE.md"), "utf8");
  assert.match(skill, /unrelated features, opportunistic refactors, broad dependency upgrades, formatting sweeps, or cleanup/i);
  assert.match(discipline, /repository-wide lint cleanup/i);
  assert.match(discipline, /Do not upgrade unrelated dependencies/i);
  assert.match(discipline, /Do not impose mandatory TDD/i);
});

test("task protocol distinguishes gate-terminal states from blocked work", async () => {
  const protocol = await readFile(path.join(skillRoot, "references", "EXECUTION_PROTOCOL.md"), "utf8");
  assert.match(protocol, /CLOSED[\s\S]*SKIPPED\(reason\)[\s\S]*BLOCKED\(reason\)/);
  assert.match(protocol, /Only `CLOSED` and `SKIPPED\(reason\)` are terminal for the development gate/);
  assert.match(protocol, /BLOCKED.*means the gate is not satisfied/i);
  assert.match(protocol, /skip reason must be concrete/i);
});

test("validation requires current acceptance-criteria evidence without converting skipped checks to PASS", async () => {
  const validation = await readFile(path.join(skillRoot, "references", "VALIDATION_AND_HANDOFF.md"), "utf8");
  assert.match(validation, /A skipped or unavailable check remains skipped\/unavailable/);
  assert.match(validation, /historical PASS from another head is not current proof/i);
  assert.match(validation, /For every acceptance criterion/i);
  assert.match(validation, /Do not declare the SPEC satisfied/i);
  assert.match(validation, /Re-run only evidence invalidated by later changes/i);
});

test("review readiness identifies exact source head and does not cross integration or publication boundaries", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const protocol = await readFile(path.join(skillRoot, "references", "EXECUTION_PROTOCOL.md"), "utf8");
  assert.match(skill, /identify the exact source head\/ref that contains the intended implementation/i);
  assert.match(protocol, /uncommitted intended changes as \*\*not review-ready\*\*/i);
  assert.match(protocol, /does not authorize merge, tag, publication, release, or deployment/i);
});

test("development report exposes objective contract closure and source-head evidence", async () => {
  const report = await readFile(path.join(skillRoot, "assets", "development-report.template.md"), "utf8");
  for (const heading of ["## 2. Acceptance criteria", "## 3. Task state", "## 6. Validation", "## 7. Source-head readiness", "## 9. Gate"]) {
    assert.ok(report.includes(heading), "missing heading: " + heading);
  }
  assert.match(report, /DEVELOPMENT_PASS \/ DEVELOPMENT_BLOCKED/);
  assert.match(report, /source head\/tree.*checked surfaces.*Environment\/inputs.*Durable evidence path.*Evidence state/i);
  assert.match(report, /reusable.*invalidated.*freshly/i);
  assert.match(report, /assumptions.*inferences.*not execution evidence/i);
});
