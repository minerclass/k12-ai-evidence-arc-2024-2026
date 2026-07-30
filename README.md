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

## The Two Data Files

The repository publishes two aggregate CSVs with different jobs. They overlap, but neither is
a subset of the other:

- `data/dissertation_table1_claims.csv` -- the **proposal Table 1 crosswalk**: 21 claims, each
  with its variable name, numerator rule, denominator definition, valid n, approximate standard
  error, research-question mapping, and interpretive caution. Every percentage in it matches
  Table 1 of the submitted Chapters 1-3.
- `data/evidence_arc_metrics.csv` -- the **visualization series**: 37 rows driving the page,
  including grade-band and task-level breakdowns that Table 1 does not carry.

Four Table 1 claims are deliberately not part of the visualization series, so they appear in the
crosswalk only: *any school AI policy present* (34.5%, Fall 2025), *student AI-misuse policy
present* (17.2%, Winter 2026), *does not know whether a misuse policy exists* (37.1%, Winter
2026), and *high-quality AI tools available overall* (75.8%, Spring 2025). The equity view shows
the two subgroup values (80.8% and 71.3%) without that overall baseline; read the crosswalk
alongside the page when the baseline matters.

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

This companion is archived on Zenodo and is cited in the dissertation proposal as
**Miner (2026a)**. Use the archived version:

> Miner, M. J. (2026a). *K-12 teacher AI evidence arc, 2024-2026* (Version 0.1.0)
> [Data analysis, code, and interactive visualization]. Zenodo.
> https://doi.org/10.5281/zenodo.21152544

Machine-readable citation metadata are provided in `CITATION.cff`.

The companion article is cited separately as **Miner (2026b)**: *When the output looks like
learning*, in *i.e.: inquiry in education*, 18(1), Article 4. Some older sibling repositories
state this 2026a/2026b pairing in reverse; the ordering above matches the submitted
Chapters 1-3.

## Release and License Status

The proposal-stage release is **version 0.1.0**, archived on Zenodo on 2026-07-03 under the
**MIT License** (see `LICENSE` and `CITATION.cff`). See `CHANGELOG.md` for what that release
corrected and `ZENODO_RELEASE_CHECKLIST.md` for the procedure used.

Note for maintainers: this repository has no `v0.1.0` git tag. The Zenodo checklist asks for a
"related identifier: exact reviewed GitHub commit or release URL", so the commit that was
archived should be tagged to close that traceability gap. The only current tag is
`proposal-defense`.
