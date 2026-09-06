# Feature-map + datamodel-tjek v1.2
Dato: 2026-09-04
Farve: grøn · Three-run #1 · Reviewer-retur 1/2
Kilder: site-rules.md, playbook, bot-charters, ops-setup, site-spec (delvist), Pia-image-bot.

**Model-lås (Peter 2026-09-04):** (1) kun match-copy, ingen arbejdsgiver-ydelser i v1. (2) CV er 1b, ikke i første formular. (3) ingen GitHub.

---

## Route-låse (Reviewer retur 1)

| Flow | Route | Note |
|------|--------|------|
| Spontan ansøgning / opret vikar | `/opret/vikar` | Ikke `/ansog`. |
| Virksomhedsformular | `/opret/virksomhed` | Egen side. CTA på `/virksomheder` linker hertil. |
| Job-ansøgning | `/jobs/[slug]` | Samme kandidatfelter + job-ref. Adskilt fra virksomhed. |

---

## Sider

| # | Route | Formål |
|---|--------|--------|
| 1 | `/` | Find vikar / Find job |
| 2 | `/virksomheder` | Match-hjælp, brancher, proces, case, CTA → `/opret/virksomhed` |
| 3 | `/vikarer` | Fordele (kun sande), proces, CTA → `/opret/vikar` |
| 4 | `/jobs` | Filter + tom-tilstand |
| 5 | `/jobs/[slug]` | Detalje + ansøg |
| 6 | `/opret/vikar` | Vikar-flow only (uden CV i v1) |
| 7 | `/opret/virksomhed` | Virksomhed-flow only |
| 8 | `/om` | Filosofi |
| 9 | `/kontakt` | Kontakt |
| 10 | `/privatliv` `/cookies` `/404` | Privatliv på dansk |
| 11 | `/tak` | Efter formular |

Ikke v1: login, vagtplan, fastansættelse, overenskomst-claims, kundelogin, betaling, GitHub.

Ordet "ydelser" bruges ikke i UI-copy.

---

## Datamodel (site-rules, justeret)

### Job
titel, fag, type, by/postnr/område, startdato, varighed, beskrivelse, krav, vagtlag, virksomhed kun hvis aftalt, status åben/lukket.

### Kandidat (`/opret/vikar`)
navn, telefon, email, fag, område, kort besked, samtykke, lead-kilde. **Ingen CPR. Ingen CV i første formular (1b).**

### Virksomhed (`/opret/virksomhed`)
firmanavn, cvr valgfri, kontakt, telefon, email, behov, samtykke, lead-kilde. Ingen dummy-CVR i prod.

---

## DoD dette kort
- [x] Route-låse 1–3
- [x] Peter-låse match / CV 1b / ingen GitHub
- [ ] Reviewer GODKENDT på v1.2 (eller foldet ind i kort A)
- [x] Ingen kode
