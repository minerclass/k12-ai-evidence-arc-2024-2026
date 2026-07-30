# Repository Instructions

## Purpose

This is a public, proposal-stage dissertation companion for aggregated secondary data.

## Boundaries

- Do not add participant, student, staff, district, or respondent-level data.
- Do not commit raw survey microdata.
- Do not present the visual as a longitudinal trend or causal analysis.
- Keep AIRS 2024 distinct from the Gallup-sponsored 2025 and 2026 RAND ATP surveys.
- Preserve proposal-stage wording until primary dissertation data have been collected and analyzed.

## Evidence Standards

- Use verified source values and valid-response denominators.
- Keep citations linked to primary RAND or Gallup sources.
- Distinguish reported perceptions from measured outcomes.
- Treat subgroup comparisons as descriptive unless a survey-design-aware analysis supports inference.
- The equity view draws on two context datasets (Spring 2025 ATP resource survey; December 2024 NCES School Pulse Panel) beyond the three arc waves. Keep them labeled as convergent directional signals measuring different constructs, never a single subtracted gap.
- Keep the `analysis/*.py` scripts in sync with any value shown on the page; every Gallup/ATP percentage must be reproducible from them.

## Citation identity

This repository *is* **Miner (2026a)** in the dissertation proposal: the Zenodo-archived
secondary-data companion, DOI `10.5281/zenodo.21152544`, version 0.1.0, MIT licensed.
**Miner (2026b)** is the separate *i.e.: inquiry in education* article. Some older sibling
repositories state this pairing in reverse; the ordering here matches the submitted
Chapters 1-3. Three public artifacts now cite this repository as 2026a, so the DOI, version,
and license must stay visible in `README.md`, `CITATION.cff`, and the page footer, and must
stay consistent with the published Zenodo record.

## The two data files

`data/dissertation_table1_claims.csv` is the proposal Table 1 crosswalk (21 claims).
`data/evidence_arc_metrics.csv` is the visualization series (37 rows). They overlap, but
neither is a subset of the other, and that is intentional. If you add a value to the page,
add it to the metrics file and keep it reproducible from `analysis/*.py`. Do not silently
reconcile the two files -- the crosswalk must keep matching Table 1 exactly.

## Validation

Check the page at desktop and mobile widths, keyboard tab behavior, chart labels, source
links, and print layout before publishing.
