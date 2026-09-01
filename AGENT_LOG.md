# Agent Log

Append-only record of automated and agent-assisted changes to this repository.
Newest entry first. No participant data, committee or faculty names, credentials,
or tokens.

---

## 2026-09-01 - Adopt the paper ground

Ground, surface, ink, and muted come from the shared tokens with pre-adoption fallbacks;
the teal, red, and ochre accents stay local.

**Checked before adopting.** Moving from a pure-white ground to the shared warm paper
lowers every accent slightly (`--teal` 6.29 to 5.51, `--focus` 5.22 to 4.57). All stay
above 4.5, so nothing needed lifting.

**Verified.** 147 elements probed: **zero** failures; tightest pair 5.43.

---

## 2026-08-31 - Link back into the research ecosystem

**Problem.** A design-cohesion review across 31 repositories found this repo to be one of
two with **zero** links to any other site in the ecosystem. That mattered more here than
elsewhere: this synthesis is the published companion cited in the dissertation proposal,
and `minerclass.github.io` and `friction-atlas` both link to it, but nothing linked back.
A reader arriving here had no route to the study the evidence supports.

**Changed.** `index.html` and `styles.css`.

- Added a footer line stating that the synthesis provides structural context for the
  dissertation, naming the design correctly as a qualitative-dominant convergent mixed
  methods study, and stating explicitly that the figures describe national survey
  evidence rather than that study's participants.
- Links to the dissertation overview and the root ecosystem hub.
- The footer was a non-wrapping flex row, so a fifth paragraph would have squeezed the
  citation line. Added `flex-wrap` and gave the new line its own full-width row.

**Verified.** Tag balance clean; both destinations return HTTP 200, checked before the
links were written; footer computes to `flex-wrap: wrap` with the new line spanning its
own row; no page-level horizontal scroll.
