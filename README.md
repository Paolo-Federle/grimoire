# Grimoire

Wiki React statica per contenuti di gioco, con ricerca globale, navigazione per manuale, preferiti e scheda personaggio con salvataggio locale.

## Avvio

Con Node.js e npm installati:

```bash
npm ci
npm start
```

Aprire [Grimoire in locale](http://localhost:3000/grimoire/#/). `npm run dev` avvia lo stesso server Vite.

## Build e verifica

```bash
npm run check:docs
npm run build
npm run preview
npm test
```

La build produce `dist/`. I test React/dati usano Vitest e Testing Library; `npm test` esegue una singola passata. Per una suite specifica:

```bash
npm test -- src/tests/pages/Mage/SpellDetail.test.jsx
```

I test browser usano Playwright. La configurazione prevede l'avvio automatico del server, ma l'URL di base predefinito va corretto con lo slash finale. Esempio PowerShell:

```powershell
$env:PLAYWRIGHT_APP_BASE = 'http://127.0.0.1:3000/grimoire/'
npx playwright test tests/example.spec.js --project=chromium
npx playwright test tests/table-detail-pages.spec.js --project=chromium
```

Se l'avvio automatico va in timeout, lasciare prima in esecuzione `npm start -- --host 127.0.0.1` in un altro terminale; Playwright riusa il server fuori da CI.

I limiti attuali della copertura e gli scenari sheet da riallineare sono descritti in [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#verifiche-e-limiti-noti).

## Ricerca e dati generati

Avvio e build rigenerano `public/search-index.json` dai dataset in `src/Data`. Per aggiornarlo dopo modifiche ai dati mentre il server è già in esecuzione:

```bash
node scripts/generate-search-index.mjs
```

L'indice è un asset generato e ignorato da Git; non modificarlo manualmente. Routing con `HashRouter` e base Vite `/grimoire/` mantengono compatibilità con GitHub Pages.

## Deploy

Per pubblicare su GitHub Pages, con accesso al repository configurato:

```bash
npm run deploy
```

Il comando esegue prima la build e pubblica `dist/` tramite `gh-pages`.

## Guide per lavorare sul progetto

- [Indice delle guide AI](./docs/ai/README.md): istruzioni locali per sottosistema, procedure per le modifiche e mappa dei test. `npm run check:docs` verifica collegamenti Markdown locali e ancore senza accedere a siti esterni.
- [AGENTS.md](./AGENTS.md): istruzioni operative per gli agenti AI e convenzioni di modifica.
- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md): architettura, flussi dei dati, funzionalità, limiti ed esiti delle verifiche datate.
- [TABLE_COMPONENT_ANALYSIS.md](./TABLE_COMPONENT_ANALYSIS.md): pattern correnti per tabelle, dati ranked e migrazioni già applicate.
- [ArcanaContentMigrationAnalysis.md](./src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md): modello dei contenuti delle magie e verifiche editoriali.
- [TODO.md](./TODO.md): backlog delle attività.
