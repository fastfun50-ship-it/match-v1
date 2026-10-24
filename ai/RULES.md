# RULES — match-v1

Fælles indgang: [README](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/README.md). Eneste fælles regelkilde: [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Kopier af fælles roller, gates, scope og DONE-format er fjernet herfra. Slå de relevante afsnit op i kilden; nedenstående særkrav og godkendte projektundtagelser bevares.

## 3. Repo-specific rules (evidenced in `docs/site-rules.md` and `*-locked.md`)
- 6 principles (site-rules): smallest change, subtract before add, lock data shape before UI, prove it works, fix root causes, ask before irreversible.
- Never mix the company and temp flows in one form.
- Never a CPR field; CV not in the first form (v1).
- Jobs: demo jobs `status: example` + "Eksempel" badge; live first; no CVR; no Jobnet scraping.
- Visual fixes: fix token/CSS before adding a component; verify 375 and 1280.
- Launch (site-rules §D) is a checklist; **do not publish yourself**.
- `docs/*-locked.md` = owner-locked decisions.
- Note: `docs/site-rules.md` "Prove it works" asks for preview URL + screenshots 375/1280 of the changed flow — this repo rule overrides the general "no screenshots unless asked" for this repo.

## 4. Deploy / branches
- **One development line (default, STANDARD.md §9a):** one active development line → one version we test → one deployment we keep building on. Do not spread an ordinary task over several branches/environments on your own. Preview/staging only when this repo has real customers/data or Peter asks - and then it is written here as a project override.
- Default branch `main` (single commit). No deploy configured.

## 5. ARCHITECTURE/PRODUCT DECISION REQUIRED
- Adding a form backend, CV upload, storage of applications, analytics/tracking.
- Publishing/DNS.
- Any change to `*-locked.md` decisions.
