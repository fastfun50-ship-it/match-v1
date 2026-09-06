# Match — lokal marketing-udkast (v1)

Dansk match-bureau: vi matcher vikarer og virksomheder (success fee).
**Ikke** et vikarbureau der ansætter.

## Sådan kører du

I projektmappen:

1. Installer afhængigheder med din package manager (`install`-script / lockfile).
2. Start udviklingsserver: `run dev` (script i package.json).
3. Byg: `run build`.

Eksempel med den almindelige Node-package-manager:

```bash
cd /workspace/match-v1-build
npm install
npm run dev
```

Byg:

```bash
npm run build
```

Alternativt virker bun: `bun install`, `bun run build`, `bun run dev`.

Åbn den lokale URL, Astro viser i terminalen (typisk http://localhost:4321).

## Hvad er IKKE gjort

- Ingen GitHub / remote
- Ingen deploy
- Ingen Pia-billeder (hero bruger CSS-pladsholder)
- Ingen rigtig form-backend (submit navigerer til /tak klient-side)
- Ingen CV-upload
- Ingen CPR-felt
- Ingen rigtige jobs / ingen dummy-CVR-værdier
- Ingen stock handshake-billeder

## To døre

| Spor | CTA-farve | Primær rute |
|------|-----------|-------------|
| Virksomhed | Signal #FF4D8D | /virksomheder → /opret/virksomhed |
| Vikar | Sol #FFE14A | /vikarer → /opret/vikar |

## Stack

Astro (minimal, static), dansk copy, mobile-first.
