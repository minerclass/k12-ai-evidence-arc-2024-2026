# K-12 Teacher AI Evidence Arc, 2024-2026

This repository presents a proposal-stage visual synthesis of three national K-12 teacher
survey waves. It asks how the evidence moves from **instructional adoption** to
**expected teaching impacts** and then to **institutional response**.

The page is designed as a public research companion for dissertation Chapters 1-3. It may
later support Chapters 4-5 joint displays, but it does not contain dissertation participant
data or represent dissertation findings.

## Read the Visual

Visit the live companion:
[https://minerclass.github.io/k12-ai-evidence-arc-2024-2026/](https://minerclass.github.io/k12-ai-evidence-arc-2024-2026/)

The interactive evidence area includes:

- a three-wave overview;
- parallel grade-band snapshots for 2024 and 2025;
- a 2026 task-level comparison of any guidance versus formal written guidance; and
- an equity view in which two independent context datasets (Spring 2025 ATP resource survey
  and the December 2024 NCES School Pulse Panel) show the same directional gap by school
  composition and neighborhood poverty.

## Central Interpretation

The sources describe an implementation problem rather than a clean trend:

- AIRS 2024 establishes a baseline of instructional AI use;
- the Gallup-sponsored Fall 2025 ATP wave captures widespread use and differing
  expectations for how teachers' and students' AI use will affect the work of teaching; and
- the Gallup-sponsored Winter 2026 ATP wave shows that formal, task-specific guidance
  remains uncommon.

Survey wording, timing, denominators, and samples differ. Percentages should not be
subtracted as if they were repeated measurements of the same construct.

## Repository Structure

```text
.
|-- analysis/
|   |-- DISSERTATION_INTEGRATION.md
|   |-- METHODS_AND_LIMITATIONS.md
|   |-- PROPOSAL_AUDIT_TRAIL.md
|   |-- GAL0226T_weighted_descriptives.py   (reproducible: Winter 2026 estimates)
|   |-- GAL1025T_weighted_descriptives.py   (reproducible: Fall 2025 estimates)
|   `-- GAL0425T_weighted_descriptives.py   (reproducible: Spring 2025 equity estimates)
|-- data/
|   |-- dissertation_table1_claims.csv
|   `-- evidence_arc_metrics.csv
|-- CITATION.cff
|-- CHANGELOG.md
|-- ZENODO_RELEASE_CHECKLIST.md
|-- app.js
|-- index.html
|-- styles.css
`-- README.md
```

The `analysis/*.py` scripts recompute every Gallup/ATP value from the public-use files using
`PORTAL_WEIGHT` (Python standard library only). They expect each wave's public CSV locally and
do not contain any microdata. The NCES School Pulse Panel equity values are openly downloadable
aggregate estimates.

## Data Boundary

Only aggregated, weighted percentages and valid unweighted denominators are published here.
Raw survey microdata are intentionally excluded.

The public claim crosswalk and audit summary are designed for proposal-stage
traceability. The private researcher archive additionally retains source-file
hashes, raw files, full claim records, and validation logs.

## Key Sources

- [RAND: Uneven Adoption of Artificial Intelligence Tools Among U.S. Teachers and Principals](https://www.rand.org/pubs/research_reports/RRA134-25.html)
- [RAND: 2024 AIRS technical report](https://www.rand.org/content/dam/rand/pubs/research_reports/RRA100/RRA134-24/RAND_RRA134-24.pdf)
- [Gallup: Three in 10 Teachers Use AI Weekly, Saving Six Weeks a Year](https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx)
- [Gallup: Most Teachers Receive No Formal Guidance on AI Use](https://news.gallup.com/poll/710534/teachers-receive-no-formal-guidance.aspx)
- [Gallup-Walton Family Foundation K-12 Teacher Research](https://www.gallup.com/analytics/659819/k-12-teacher-research.aspx)
- [NCES School Pulse Panel (December 2024 technology release)](https://nces.ed.gov/surveys/spp/)
- [RAND Survey Panels Data Portal](https://rspdata.org/)

## Citation Note

Values in the visualization are independent public-portal analyses using `PORTAL_WEIGHT`.
They may differ from sponsor publications that use non-public weights or different analytic
definitions. Consult `analysis/METHODS_AND_LIMITATIONS.md` and
`analysis/PROPOSAL_AUDIT_TRAIL.md` before reusing a value.

## Citation

Suggested proposal-stage citation:

> Miner, M. (2026). *K-12 teacher AI evidence arc, 2024-2026*
> [Data analysis, code, and interactive visualization]. GitHub.
> https://minerclass.github.io/k12-ai-evidence-arc-2024-2026/

Machine-readable citation metadata are provided in `CITATION.cff`. A versioned
Zenodo DOI may replace the GitHub-only citation after the reviewed proposal-stage
release is archived.

## Release and License Status

The planned proposal-stage release is `v0.1.0-proposal`. See `CHANGELOG.md` and
`ZENODO_RELEASE_CHECKLIST.md`. No reuse license is currently granted; a license
must be selected before the Zenodo record is published.
