# v1-lister (låst af Peter 2026-09-04)

## Princip
Alle match-felter på `/opret/vikar` = fortrykte lister + ja/nej. **Ingen fritekst-fag.** Ingen tags folk selv finder på. Ingen “skriv dit fag”.
**Andet** = ét felt + “uddyb” — må **ikke** være hovedvejen.
Gem værdier som **faste nøgler** (fx `sosu_assistent`), ikke den synlige sætning.
**Ingen upload.**

Samme princip på virksomhed-formular: spor + område som valg, ikke “beskriv alt”.

## Spor
- `sosu` — SOSU
- `bygge` — Bygge
- `lager` — Lager
- `kontor` — Kontor
- `andet` — Andet (+ uddyb)

## Område
(I er på Fyn — start dér, ikke 98 kommuner.)
- `fyn` — Fyn
- `trekanten` — Trekanten
- `oestjylland` — Østjylland
- `koebenhavn` — København
- `andet` — Andet (+ uddyb)

## Niveau (efter spor)

### SOSU (`sosu`)
- `sosu_hjaelper` — SOSU-hjælper
- `sosu_assistent` — SOSU-assistent
- `ssa` — SSA
- `ufaglaert_omsorg` — Ufaglært i omsorg

### Bygge (`bygge`)
- `ufaglaert` — Ufaglært
- `faglaert` — Faglært
- `sjakbajs_formand` — Sjakbajs / formand

### Lager (`lager`)
- `ufaglaert` — Ufaglært
- `truck` — Truck
- `holdleder` — Holdleder

### Kontor (`kontor`)
- `assistent` — Assistent
- `bogholderi_loen` — Bogholderi / løn
- `andet_kontor` — Andet kontor

## Beviser (ja / nej / under_uddannelse — listen skifter med spor)

### SOSU
- `sosu_bevis` — SOSU-bevis
- `medicinhaandtering` — Medicinhåndtering
- `foerstehjaelp` — Førstehjælp
- `koerekort` — Kørekort

### Bygge
- `svendebrev` — Svendebrev
- `stillads` — Stillads
- `asbest` — Asbest
- `foerstehjaelp` — Førstehjælp
- `koerekort` — Kørekort

### Lager
- `truckcertifikat` — Truckcertifikat
- `hygiejne` — Hygiejne
- `foerstehjaelp` — Førstehjælp

## Start
- `med_det_samme` — Med det samme
- `inden_2_uger` — Inden 2 uger
- `senere` — Senere
