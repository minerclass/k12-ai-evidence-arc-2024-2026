# Methods and Limitations

## Data Sources

The visualization synthesizes selected weighted indicators from three public-use RAND
American Educator Panels files:

| Wave | File | Public analytic cases | Role in the evidence arc |
| --- | --- | ---: | --- |
| Spring 2024 | `AIR0424T` | 9,126 | Instructional AI adoption and planning |
| Fall 2025 | `GAL1025T` | 2,012 | AI use, expected teaching impacts, support, and policy |
| Winter 2026 | `GAL0226T` | 2,069 | Policy clarity, guidance, and institutional stance |

`AIR0424T` is the RAND American Instructional Resources Survey. `GAL1025T` and
`GAL0226T` are Gallup-sponsored surveys administered through RAND's American Teacher Panel.

## Weighting

Every displayed estimate uses the relevant public file's `PORTAL_WEIGHT`. Missing,
blank, not-applicable, and legitimate-skip responses are excluded from valid denominators
as documented in the source analysis.

RAND notes that public portal weights may differ from the weights used in sponsor reports.
For that reason, independently calculated values may differ from published RAND or Gallup
estimates.

## What Can Be Compared

Within-wave comparisons are the strongest:

- grade-band patterns within AIRS 2024;
- expected teaching impacts of teachers' and students' AI use within `GAL1025T`; and
- any versus formal guidance by task within `GAL0226T`.

Across-wave juxtaposition is appropriate only as a descriptive evidence sequence.

## What Cannot Be Claimed

The visualization does not support claims that:

- AI use increased by a precise number of percentage points from 2024 to 2025;
- AI caused changes in teaching difficulty or student learning;
- respondents share a common definition of AI across waves;
- policy presence demonstrates policy quality or implementation;
- the 2025 teaching-impact items measure student learning, authorship, or cognitive outsourcing;
- any subgroup difference is statistically significant; or
- the surveys directly measure pedagogical friction.

## Variance and Statistical Inference

The public files include a single portal weight but do not provide the complete
survey-design information needed for definitive design-based variance estimation. The
visual therefore reports weighted descriptive percentages and valid unweighted
denominators. It does not display confidence intervals or mark statistical significance.

## Reproducibility and Privacy

The chart-ready values are in `data/evidence_arc_metrics.csv`, and reproducible Gallup/ATP
analysis scripts are in `analysis/`. The public repository does not contain raw
respondent-level microdata. Public-use input files, codebooks, survey instruments, and
technical documents remain in the private/local secondary-data archive.
