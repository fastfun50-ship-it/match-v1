# TESTS — match-v1

## Existing automated checks
| Check | Command | Result 2026-10-03 (fresh clone, Node 22, Windows) |
|---|---|---|
| Install | `npm ci` | PASS |
| Build | `npm run build` (astro build, static) | PASS |
| Typecheck | — no script (`astro check` not installed) | TEST GAP |
| Lint / unit / E2E | — none | TEST GAP |

## CI
Before: none. Added `.github/workflows/ai-gate.yml`: `npm ci` → `npm run build`.

## Critical manual flows
1. `/` both doors → correct track.
2. `/opret/vikar` submit → `/tak?fra=vikar`; `/opret/virksomhed` → `/tak?fra=virksomhed`; `/kontakt` → `/tak?fra=kontakt`.
3. `/jobs` filter incl. 0 results; `/jobs/[slug]` shows Eksempel badge, CTA → `/opret/vikar`.
4. Mobile 375 + desktop 1280: both CTAs visible, menu works.
5. No CPR field anywhere.

## Regression matrix
| Area changed | Must re-verify |
|---|---|
| jobs data/pages | flow 3 |
| forms / v1-lister | flows 2, 5 |
| header/layout/css | flows 1, 4 |

## TEST GAPs
- TEST GAP: no check that no form contains a CPR field (simple grep/HTML test on `dist/`).
- TEST GAP: no test for `sortJobs` (live first).
- TEST GAP: no typecheck/lint.
