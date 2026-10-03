# RULES — match-v1

## 1. SYSTEM117 shared rules

Full text: [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Summary:

- **Roles:** Chef/Architect analyses the task and its blast radius → Implementation agent makes the smallest correct change → QA verifies independently and must not just accept the implementer's claim.
- **"Build successful" ≠ done.** The critical flows in `/ai/TESTS.md` for the touched modules must still work. A regression = task NOT complete.
- **Smallest Change Rule.** Fewest files/lines that correctly solve the task. No drive-by refactors, renames, formatting, dependency bumps or styling changes.
- **No Architecture Drift** for a small task: no parallel data layers, no new auth system, no duplicate components, no big moves, no new frameworks, no new projects/repos, no DB architecture changes. → ARCHITECTURE/PRODUCT DECISION REQUIRED.
- **Existing Code First.** Reuse existing components/helpers/stores/routes. Read the implementation before changing it.
- **No parallel truths.** Code = truth of implementation; `/ai/*` = map. A critical rule never lives only in a conversation or agent memory. Doc/code conflict → STOP and report; do not rewrite product code to match a doc.
- **Secrets:** never in git, logs, chat, screenshots or the frontend bundle. Docs name env variables, never values.
- **Never** run production migrations/seeds, change DNS, Vercel env or domains, or force-push as part of a code task.
- **Communication:** do the task, no unnecessary confirmations or status messages, no screenshots unless asked, proportional checks, stop when done. Final report: what changed · checks run · branch/commit/preview · real blockers.

## 2. EXPECTED CHANGE SCOPE (mandatory)

Before implementing, write:

```
EXPECTED CHANGE SCOPE
- Files/modules:
- Why these:
- Must not change:
- Checks to run (from /ai/TESTS.md):
```

After implementing, compare `git diff --stat` with it. If the actual diff goes well outside the declared files/modules: **STOP and reassess** before continuing.

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
- Default branch `main` (single commit). No deploy configured.

## 5. ARCHITECTURE/PRODUCT DECISION REQUIRED
- Adding a form backend, CV upload, storage of applications, analytics/tracking.
- Publishing/DNS.
- Any change to `*-locked.md` decisions.
