# Proposal-Stage Quantitative Audit Trail

## Scope

This public companion documents 21 aggregate claims used as national structural
context in the dissertation proposal. The claims are listed in
`data/dissertation_table1_claims.csv`.

This repository contains no respondent-level survey microdata and no dissertation
participant data. Source files remain in a private, researcher-controlled archive.

## Traceability

Each public claim records:

- survey wave and source identifier;
- source variable or variable combination;
- numerator and valid-denominator rule;
- valid unweighted `n`, when the source reports it;
- weighted percentage;
- approximate standard error, when calculated;
- related research question; and
- an explicit interpretation boundary.

The dataset-specific scripts in `analysis/` reproduce the Gallup-sponsored RAND
American Teacher Panel aggregates from locally held public-use files. Those source
files are intentionally excluded by `.gitignore`.

## Independent validation

The highest-risk Fall 2025 claims were recomputed directly from the 2,012-row
`GAL1025T` public-use file:

- 72.5% expected teachers' AI use to make teaching easier (`n = 1,984`);
- 61.9% expected students' AI use to make teaching harder (`n = 1,986`).

Both items ask about expected effects on the **job of teaching**. Neither measures
student learning, authorship, cognitive outsourcing, pedagogical friction, or
unproductive success.

The NCES School Pulse Panel values were traced to the December 2024 technology
workbook, `Poverty` sheet, item `AI5_y`, response `Yes`:

- higher-neighborhood-poverty schools: 39.0% (SE 3.1 percentage points);
- lower-neighborhood-poverty schools: 49.0% (SE 1.3 percentage points).

The public NCES workbook does not release subgroup respondent counts, so valid `n`
is not reported for those rows.

## Statistical boundary

RAND/Gallup estimates use `PORTAL_WEIGHT` and item-specific valid denominators.
Approximate standard errors use Kish's weight-adjusted effective sample size. The
public files do not provide the complete survey design needed for definitive
design-based variance estimation, so no significance claims are made.

The waves differ in wording, timing, analytic population, and denominators. Their
juxtaposition is an evidence arc, not a longitudinal trend or change score.

## Private audit archive

The private archive additionally retains:

- SHA-256 source-file manifest;
- original source files and documentation;
- full claim records;
- analysis decision log;
- input-validation report; and
- reproducible cross-dataset build scripts.

These private materials are available for committee review but are not appropriate
for public release because they contain source-file inventory details and locally
held respondent-level files.
