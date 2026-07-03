# Data Availability

This repository provides analysis scripts, aggregate weighted estimates, methods
documentation, and claim records. It does **not** redistribute respondent-level survey
microdata or any dissertation participant data. The `analysis/*.py` scripts reproduce the
published aggregates only after the eligible public-use source files are obtained
independently and placed in the expected local folders (which are excluded by
`.gitignore`).

## Sources used

| Source | Wave | Obtain from |
| --- | --- | --- |
| RAND American Instructional Resources Survey (`AIR0424T`) | Spring 2024 | RAND Survey Panels data portal (https://rspdata.org/) |
| RAND ATP / Gallup, Teacher Satisfaction and Resources (`GAL0425T`) | Spring 2025 | RAND Survey Panels data portal |
| RAND ATP / Gallup, Teacher Careers and AI (`GAL1025T`) | Fall 2025 | RAND Survey Panels data portal |
| RAND ATP / Gallup, Teacher Expectations and Responsibilities (`GAL0226T`) | Winter 2026 | RAND Survey Panels data portal |
| NCES School Pulse Panel, Technology module | December 2024 | NCES (https://nces.ed.gov/surveys/spp/) |

RAND/Gallup public-use files are obtained through the RAND Survey Panels data portal and may
require registration or an institutional email; those files are not redistributed here. The
NCES School Pulse Panel December 2024 release is a published estimate workbook downloaded
directly from NCES.

## Expected local layout (not committed)

The scripts assume source files live outside this repository, for example:

```
Secondary_Data_for_Dissertation/
  02_RAND_AIRS/AIR0424T_.../raw/
  03_RAND_Gallup/GAL1025T_.../raw/
  01_NCES_SPP/2024-12_Technology/raw/
```

Each dataset's `raw/` folder is git-ignored. Only aggregate outputs and documentation are
published.

## Dissertation use boundary

These secondary datasets provide national **structural context** for the dissertation, not
direct measures of pedagogical friction and not evidence from within the bounded case. In
particular, the Fall 2025 `GAL1025T` teaching-impact items ask whether teachers' or students'
AI use is expected to make the **job of teaching** easier or harder; they do not measure
student learning, authorship, cognitive outsourcing, or unproductive success. Cross-wave
values are read as an evidence arc, not a longitudinal trend or change score.
