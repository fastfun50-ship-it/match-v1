# Scout handoff GRØN — tilmelding vikar + virksomhed (4 Sep 2026)

## 1) Til Mira/Peter (≤20 linjer)
Objective: Felt-kortlægning DK bliv-vikar + virksomhed-døre; screens i /workspace/ot-charters/scout/
1) Sider: SOS Vikar ansøg/bliv · SoSu Vikaren · Vikar-bureau · Jobindex opret+vikar · Carelink · Vikarholdet
2) Indsamler: kontakt; spor/fag (valg); ofte CV/bevis-upload gate; tlf/samtale; AG: attest/løn/kontrakt
3) Ikke kopiere: ansættelse, overenskomst, MitID/Nemkonto, straffeattest-gate, obligatorisk upload, 1 års erfaring-krav
4) Hul: to-døre (vikar|virksomhed) mangler tydeligt hos flere AG; Jobindex = portal-match; vi mangler kun lean deklarativt signal + kontakt
5) v1: ingen upload; fortrykte nøgler; kontakt+spor+område+niveau+beviser+start. Senere: valgfri fil efter match
6) Links nedenfor. Status done. Farve GRØN. Next: Execution lock lister; Reviewer afvis AG-felter.

## 2) Til Execution — fortrykte nøgler (implementér)
### /opret/vikar
kontakt: fornavn, efternavn, email, telefon (fritekst)
spor: sosu | bygge | lager | kontor | andet
område: fyn_first (+ senere andre nøgler)
niveau: per spor (keys, ikke labels)
beviser: ja | nej | under_uddannelse
start: dato eller snart-nøgle
IKKE v1: upload, MitID, straffeattest, referencer, CV-fil, ID-foto, erfaring_aar_krav

Valgfri senere (efter match): upload_bevis, upload_cv

### /opret/virksomhed
kontakt: navn, email, telefon, firmanavn
cvr: valgfri fritekst
spor_behov: samme spor-keys (multi ok)
område: fyn_first
besked: valgfri fritekst
IKKE v1: EAN/payroll, fil-upload-gate, “ansæt hos os”, booking-af-vikar-som-AG

## 3) Til Reviewer — AFVIS (gør os til AG)
- “Ansat hos os” / kontrakt / løn / overenskomst som produkt
- Straffeattest / MitID / Nemkonto / CPR i opret
- Obligatorisk CV/diplom/ID-foto før match
- Hard gate “min. 1 års erfaring” / 1800 timer / 5. semester
- Fysisk tilknytningssamtale som v1-krav
- Virksomhed ser person før match uden samtykke-flow

## Evidence paths
sosu-fields.md, bygge-jobindex-fields.md, ekstra-bliv-vikar.md + pngs i samme mappe
