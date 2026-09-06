# Kort A — Copy/UI-plan v1.1
Dato: 2026-09-04 (rettet efter Peter-noter)
Farve: grøn · Three-run #1 · Ingen kode · Ingen GitHub
Afhænger af: feature-map v1.2 (låst)

**Peter-tjek før B:** H1 bærer filosofien; CTA = Find vikar / Find job; store mennesker-billeder; brancher = eksempler ikke dækning; I kalder jer ikke “vikarbureau der ansætter”.

---

## Positionering (låst)
- Vi er et **dansk match-bureau**. Vi matcher vikarer og virksomheder.
- Vi er **ikke** arbejdsgiver. Vi ansætter ikke. Ingen “ydelser” som vagtplan/fastansættelse/overenskomst i v1-copy.
- Filosofi synlig: mennesker der har det godt, arbejder bedre.

### Forbudte formuleringer (Reviewer afviser)
- “vikarbureau der ansætter”
- “vi ansætter dig”
- “bliv ansat hos os”
- “vores vikarer” som om vi er arbejdsgiver
- “overenskomst”, “vagtplan”, “fastansættelse” som produkt-claim i v1
- “ydelser” som sektionstitel

### Tilladte formuleringer
- “Find vikar” / “Find job”
- “Vi matcher…”
- “Beskriv dit behov”
- “Opret dig” / “Send ansøgning”
- “Det rigtige match”

---

## Forside `/` — UI-skeleton

### Hero (full-bleed, store mennesker)
- Baggrund: stort Pia-foto (16:9), overlay 30–45 % navy
- **H1 bærer filosofien** (ikke dørene): f.eks. **Mennesker der har det godt, arbejder bedre.**
- Underlinje (kort): Vi matcher vikarer og virksomheder — trygt og enkelt.
- **CTA’erne er dørene** (skal begge ses på 375px) — ikke H1:
  - Signal `#FF4D8D`: **Find vikar** → `/virksomheder`
  - Sol `#FFE14A`: **Find job** → `/vikarer`
- Ingen “Log ind”
- Peter-note 2026-09-04: H1 = filosofi; CTA = dørene.

### Efter hero (blokke)
1. Farve-tillid (kort, uden dokumenterede tal endnu — ingen fake metrics)
2. Foto-split: to døre gentaget
3. Brancher (thumbs, store) — **eksempler, ikke dækning** (fx sundhed, lager, kontor, HORECA). Copy må ikke love “vi dækker alle brancher”.
4. Sådan virker det — 3 trin × 2 spor (virksomhed / vikar), match-sprog
5. Seneste jobs-teaser → `/jobs` (tom-tilstand OK)
6. FAQ kort
7. Footer: privatliv, cookies, kontakt — ingen arbejdsgiver-claim

### Billedkrav forside
- Mindst 1 hero + branche-thumbs: **store mennesker**, tæt på, værdighed (Pia-politik)
- Ikke handshake-stock, ikke lille header-hero

---

## Øvrige sider — copy-beats (ikke færdig brødtekst)

| Side | Primær H1-retning | Primær CTA |
|------|-------------------|------------|
| `/virksomheder` | Find det rigtige match til dit behov | Beskriv behov → `/opret/virksomhed` |
| `/vikarer` | Find job der passer dig | Opret dig → `/opret/vikar` |
| `/jobs` | Ledige job | Filter; tom: CTA til `/opret/vikar` |
| `/jobs/[slug]` | Jobtitel | Ansøg (samme felter, + job-ref) |
| `/opret/vikar` | Fortæl hvem du er | Send (uden CV) |
| `/opret/virksomhed` | Beskriv behovet | Send |
| `/om` | Mennesker der har det godt, arbejder bedre | — |
| `/kontakt` | Skriv til os | Send |
| `/privatliv` | Privatliv (rekruttering) | — |
| `/tak` | Tak — vi vender tilbage | — |

---

## Formular-UI (v1 felter)

**`/opret/vikar`:** navn, telefon, email, fag, område, besked, samtykke, lead-kilde.  
**Ikke:** CPR, CV (1b).

**`/opret/virksomhed`:** firmanavn, CVR valgfri, kontakt, telefon, email, behov, samtykke, lead-kilde.  
**Ikke:** dummy-CVR, blandet vikar-felter.

---

## Design-tokens (fra site-spec)
- Navy `#0B1020`, Off-white `#F6F1EA`, Sol `#FFE14A`, Signal `#FF4D8D`, Ice `#3EE0C4`, Electric `#4F7CFF`
- CTA: Sol = vikar-spor, Signal = virksomhed-spor — konsekvent hele sitet
- Max 2 fladefarver + 1 foto per sektion

---

## DoD for kort A (Reviewer)
- [x] Forside: H1 = filosofi; CTA = **Find vikar** / **Find job**
- [x] Store mennesker-billeder krævet i hero
- [x] Brancher = eksempler, ikke dækning
- [x] Eksplicit forbud mod “vikarbureau der ansætter” / arbejdsgiver-copy
- [x] Formularer adskilt; CV ude af første formular
- [x] Ingen kode, ingen GitHub
- [x] Reviewer GODKENDT (+ Peter-noter 2026-09-04 indarbejdet)

## Ikke i A
Færdig brødtekst til alle sektioner, Pia-generering, kode, preview, 375-screens — det er B+.
