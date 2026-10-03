# PROJECT — match-v1 ("Match" marketing draft v1)

> Derived from `README.md`, `docs/*.md` (site-rules, feature-map, *-locked), `src/pages/**`, `src/data/**`.

## Purpose
Danish match agency marketing site (draft): matches temps (vikarer) with companies on a success fee. README: "**Ikke** et vikarbureau der ansætter." Static Astro site, no backend.

## User groups
- Companies needing staff (track "Virksomhed", CTA colour Signal `#FF4D8D`).
- Temps/job seekers (track "Vikar", CTA colour Sol `#FFE14A`).
- Peter / the agency (receives leads — **no backend yet**).

## Main flows (routes from `src/pages`, locked in `docs/feature-map.md`)
1. `/` → two doors: "Find vikar" / "Find job".
2. Company: `/virksomheder` → `/opret/virksomhed` (company-only form) → `/tak?fra=virksomhed`.
3. Temp: `/vikarer` → `/opret/vikar` (temp-only form, no CV in v1) → `/tak?fra=vikar`.
4. Jobs: `/jobs` (filter + empty state) → `/jobs/[slug]` (detail + apply → `/opret/vikar`).
5. `/kontakt` → `/tak?fra=kontakt`; `/om`, `/privatliv`, `/cookies`, `404`.

## Core features
- Job list from `src/data/jobs.ts` (`status: 'live' | 'example'`, `sortJobs` shows live first); option lists in `src/data/v1-lister.ts`.
- Forms are client-side only: submit navigates to `/tak` (README "Ingen rigtig form-backend"). **No data is sent or stored.**

## Integrations
None (no form backend, no analytics found in code).

## Critical product rules (documented in repo)
- Two flows never mixed in one form (`docs/site-rules.md`).
- No CPR field ever in frontend/first form; CV not in the first form in v1 (`docs/site-rules.md`, `docs/feature-map.md`).
- 4 demo jobs, `status: example`, badge "Eksempel", fictitious company names, no CVR, area Fyn (`docs/v1-jobs-locked.md`).
- Recruitment privacy text in Danish; launch checklist in `docs/site-rules.md` §D.

## UNKNOWN / NEEDS CONFIRMATION
- Whether this project is still active (single commit 2026-09-06).
- Deploy target/domain (README: "Ingen deploy").
- Form backend choice for launch.
