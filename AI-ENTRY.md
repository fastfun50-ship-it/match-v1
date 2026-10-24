# AI-ENTRY — match-v1

Repository: fastfun50-ship-it/match-v1. Dokumenteret arbejdsgren: `main`. Verificér den faktiske checkout før skrivning; en gammel status starter ikke en gammel opgave.

Start i [fælles README](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/README.md), læs eget botindeks og relevant egen læring. Den eneste fælles regelkilde er [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Fælles regler kopieres ikke hertil; de gælder fortsat.

## Læs ved projektstart
- [PROJECT](https://github.com/fastfun50-ship-it/match-v1/blob/main/ai/PROJECT.md): mål, funktioner og afgrænsning.
- [STATUS](https://github.com/fastfun50-ship-it/match-v1/blob/main/ai/STATUS.md): fremdrift, kendte fejl og næste skridt.
- [RULES](https://github.com/fastfun50-ship-it/match-v1/blob/main/ai/RULES.md): projektsærkrav og udgivelsesgrænser.

## Læs efter opgavens behov
- [ARCHITECTURE](https://github.com/fastfun50-ship-it/match-v1/blob/main/ai/ARCHITECTURE.md) ved kode eller dataflow.
- [TESTS](https://github.com/fastfun50-ship-it/match-v1/blob/main/ai/TESTS.md) for kontroller af de berørte brugerforløb.
- Eksisterende AGENTS/CLAUDE-vejledning bevares for værktøjskrav. Godkendt design og billeder findes via projektets eksisterende dokumentation; opfind ikke en designsti.

## Repo-specific hard stops
- Never mix the two flows (company hires / temp seeks job) in one form (`docs/site-rules.md`).
- **Never a CPR field**, not in frontend and not in the first form (`docs/site-rules.md`, README).
- Demo jobs carry `status: 'example'` + "Eksempel" badge; no fictitious CVR (`docs/v1-jobs-locked.md`, `src/data/jobs.ts`).
- Ask before irreversible: publish, DNS, sending a real application to a customer, tracking with personal data (`docs/site-rules.md`). "Publicer ikke selv."
- Files named `*-locked.md` in `docs/` are owner-locked decisions — do not change them without Peter.
