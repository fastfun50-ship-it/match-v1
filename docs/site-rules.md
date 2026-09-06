# Site-rules — vikarbureau
pstack skåret ned. Kun på build, bugs, QA og launch.
Ikke på research, raw copy eller moodboard.

To sider af forretningen: virksomhed hyrer vikar, vikar søger job.
Aldrig bland de to flows i samme formular.

## TIL / FRA
TIL: ny side, jobliste, filter, ansøgning, virksomhedsforespørgsel, CMS, deploy, bug, visuel fejl, launch.
FRA: briefing, tone, overskrifter, stockfotos.

## 6 principper
1. Laziness — mindste ændring. Ingen nyt framework “til senere”.
2. Subtract before add — slet død CSS og dobbelte CTA’er først.
3. Foundational thinking — lås dataformen før UI.
4. Prove it works — preview-URL + screenshot mobil 375 + desktop 1280 af den ændrede flow.
5. Fix root causes — repro først. Ikke et ekstra if.
6. Ask before irreversible — publicer, DNS, rigtig ansøgning til kunde, CPR, tracking med persondata.

## Datamodel (lås det her)

Job:
- titel, fag, type (fuldtid/deltid/vikariat/vagt)
- by/postnr/område, startdato, varighed
- kort beskrivelse, krav, vagtlag
- virksomhed vises kun hvis aftalt
- status: åben/lukket

Kandidat-ansøgning:
- navn, telefon, email
- fag + ønsker område
- CV-fil (pdf/docx)
- kort besked
- samtykke til opbevaring (rekruttering)
- ALDRIG cpr i frontend eller i første formular

Virksomhed-henvendelse:
- firmanavn, cvr valgfrit
- kontakt, telefon, email
- behov (fag, antal, periode, sted)
- samtykke

Lead-kilde på begge: utm eller “hvordan hørte du om os”.

## Feature map
1. Forside → to indgange: “Find vikar” / “Find job”
2. Til virksomheder (ydelser, brancher, proces, case, CTA)
3. Til vikarer (fordele, proces, CTA ansøg)
4. Ledige jobs (liste + filter fag/område/type)
5. Jobopslag (detalje + ansøg på dét job)
6. Spontan ansøgning
7. Om os + kontakt
8. Mobilmenu, begge CTA’er synlige
9. Privatliv (rekruttering), cookie, 404
10. Succes-side efter sendt formular

## 4 playbooks (ét ad gangen)

### A. Feature
1. Tre linjer: hvem, hvilken side, hvad der gemmes.
2. Mindste ændring.
3. Preview.
4. Bevis mobil + desktop.
5. Rapport: URL, ændret, ikke rørt.

### B. Bug
1. Repro (device, side, klik, forventet vs faktisk).
2. Rodårsag.
3. Mindste fix.
4. Før/efter.
5. Restrisiko i én linje.

### C. Visual
1. Præcis fejl.
2. Ret token/CSS før ny komponent.
3. 375 og 1280.

### D. Launch
Ja/nej:
- HTTPS + rigtigt domæne
- Begge CTA’er virker på mobil
- Jobfilter virker med 0 resultater
- Ansøgning og virksomhedsform sender et sted hen
- Fil-upload afvist hvis ikke pdf/docx
- Ingen CPR-felt
- Title/OG/404
- Rekrutterings-privatliv på dansk
- Ingen hemmeligheder i frontend
Publicer ikke selv.

## GDPR til vikar (kort)
- Formål: rekruttering, ikke marketing, medmindre særskilt samtykke
- Gem kun det I skal bruge
- Sletfrist skrives i privatliv (fx 6 eller 12 mdr.)
- CV kun via HTTPS
- Ingen åben mappe med ansøgninger på webfangsten

## Svarformat
- Done / blocked
- Preview-URL
- Bevis
- Diff i én sætning
- Max 5 linjer
