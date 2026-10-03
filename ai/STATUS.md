# STATUS — match-v1

## Branches
- Default/current: `main` (`11c6d5c` "Match v1 første push", 2026-09-06). No other branches.

## Known TODOs (from code)
- None marked in code. README "Hvad er IKKE gjort": no deploy, no Pia images, no form backend, no CV upload, no real jobs.

## Unfinished areas
- Forms do not send anything (client-side redirect to `/tak`).
- Activity status: UNKNOWN / NEEDS CONFIRMATION (one commit, not updated since 2026-09-06).

## Test gaps
See `/ai/TESTS.md`.

## Risk areas
- Launching with client-only forms would silently lose leads.
- `.astro/` (generated types) is committed and is rewritten by `npm run build` → dirty working tree after builds.
- Both `bun.lock` and `package-lock.json` present.

## Doc/code conflicts found
- `README.md` and `docs/feature-map.md` / `docs/v1-jobs-locked.md` say "Ingen GitHub / remote", but the repo is on GitHub (`fastfun50-ship-it/match-v1`). Not changed — reported.
- `docs/site-rules.md` title says "vikarbureau"; README says explicitly "Ikke et vikarbureau der ansætter" (match agency). Not changed — reported.
