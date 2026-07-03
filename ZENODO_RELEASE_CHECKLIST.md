# Zenodo Release Checklist

## Recommended record

- Resource type: Software
- Title: *K-12 Teacher AI Evidence Arc, 2024-2026*
- Version: `0.1.0`
- Creator: Micah J. Miner (`https://orcid.org/0009-0002-9739-6955`)
- Publication date: date the Zenodo record is published
- License: MIT
- Related identifier: exact reviewed GitHub commit or release URL
- Description: use the abstract in `CITATION.cff`

## Public release package

Archive one source-code ZIP generated from the reviewed GitHub commit or release. It may include:

- site source files;
- `README.md`;
- `CITATION.cff`;
- `CHANGELOG.md`;
- `analysis/*.py` and public verification scripts such as `analysis/*.R`;
- public methods and audit documentation; and
- aggregate CSV outputs in `data/`.

## Never upload

- RAND/Gallup respondent-level CSV, DTA, SAV, or POR files;
- dissertation drafts or private Google Docs;
- the private SHA-256 manifest or local filesystem paths;
- private research notes or handoffs;
- credentials or tokens; or
- future participant, interview, transcript, student, staff, or district data.

## Checks required before publication

- Confirm that the Zenodo record and packaged repository both use the MIT license.
- Review the generated ZIP to confirm that `.gitignore` exclusions were honored.
- Preview the Zenodo record and verify creator name, ORCID, version, description,
  keywords, related identifier, and file visibility.
- Publish only after the reviewed GitHub commit and Zenodo metadata match exactly.

## Suggested workflow

1. Merge and verify the corrected GitHub repository.
2. Record the exact reviewed commit SHA.
3. Generate a source ZIP from that commit.
4. Create a Zenodo version draft and upload the single ZIP.
5. Complete metadata and reserve a DOI if desired.
6. Review the draft.
7. Publish only after explicit final approval.
