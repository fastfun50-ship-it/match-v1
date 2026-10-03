# ARCHITECTURE — match-v1

## Stack
Astro 5 (`output: 'static'`), plain CSS (`src/styles/global.css`). npm (`package-lock.json`) — `bun.lock` also present.

## Modules
| Module | Purpose | Main files | Depends on | May also affect |
|---|---|---|---|---|
| Layout | Shell, header (mobile menu, both CTAs), footer | `src/layouts/Layout.astro`, `src/components/Header.astro`, `Footer.astro` | global.css | all pages |
| Marketing pages | Front, companies, temps, about, privacy, cookies, 404 | `src/pages/index.astro`, `virksomheder.astro`, `vikarer.astro`, `om.astro`, `privatliv.astro`, `cookies.astro`, `404.astro` | — | CTAs/flows |
| Jobs | List + detail | `src/pages/jobs/index.astro`, `src/pages/jobs/[slug].astro`, `src/data/jobs.ts` | jobs data | `/opret/vikar` CTA |
| Forms (client-only) | Temp, company, contact forms → `/tak` | `src/pages/opret/vikar.astro`, `opret/virksomhed.astro`, `kontakt.astro`, `tak.astro`, `src/data/v1-lister.ts` | v1-lister | success page |
| Local static server | Serves `dist/` on :4321 | `serve-dist.cjs` | build output | — |
| Docs/decisions | Locked design/copy/process decisions | `docs/*.md` | — | everything |

No auth, DB, storage, admin, payments.

## Dependency map — "If I change X, regression-test Y"
| Change in | Regression-test |
|---|---|
| `src/data/jobs.ts` | `/jobs` list (live first, Eksempel badge, empty state), every `/jobs/[slug]` page builds |
| `src/data/v1-lister.ts` | `/opret/vikar` and `/opret/virksomhed` option lists |
| `Header.astro` | both CTAs visible on mobile + desktop, mobile menu |
| any form page | submit → correct `/tak?fra=…`, no CPR field, flows not mixed |
| `global.css` | 375 px and 1280 px layouts (site-rules playbook C) |

## Deploy
None configured (README "Ingen deploy"; no vercel.json). `.astro/` generated files are committed (see STATUS).
