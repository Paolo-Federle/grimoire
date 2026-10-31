# AGENTS.md

## Come orientarsi

Ultima verifica dei riferimenti: 2026-10-23.

- Leggere questo file per le regole di modifica e [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) per la mappa del codice e lo stato delle funzionalità.
- L'[indice delle guide AI](./docs/ai/README.md) collega gli `AGENTS.md` locali di dati, pagine, componenti, sheet e ricerca. Leggere quelli delle aree coinvolte prima di modificarle.
- Per interventi trasversali usare i [flussi operativi](./docs/ai/WORKFLOWS.md); per scegliere le verifiche usare la [mappa dei test](./docs/ai/TESTING.md).
- [README.md](./README.md) contiene avvio, build e comandi di verifica.
- Per tabelle e dati ranked consultare [TABLE_COMPONENT_ANALYSIS.md](./TABLE_COMPONENT_ANALYSIS.md).
- Per i contenuti delle magie consultare [ArcanaContentMigrationAnalysis.md](./src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md).
- [TODO.md](./TODO.md) è il backlog: una voce aperta può riguardare il completamento di una funzionalità già presente in parte.
- Verificare le affermazioni sullo stato corrente contro codice, `package.json` e configurazioni. Aggiornare queste guide quando cambiano strumenti, percorsi o pattern condivisi.

## Scopo del progetto

- `grimoire` è un'app React statica di consultazione, alimentata soprattutto dai dataset locali in `src/Data`.
- Liste, dettagli, ricerca globale e navigazione per manuale riusano gli stessi contenuti.
- La scheda personaggio (`sheet`) è un sottosistema client in evoluzione, con libreria, persistenza locale e cataloghi derivati dalla wiki.

## Stack e comandi reali

- React 18, React Router DOM 6 e `HashRouter`.
- Vite per sviluppo/build; configurazione in `vite.config.mjs`.
- Vitest + Testing Library + jsdom per i test in `src/tests`; usare `vi` per mock e timer.
- Playwright per i test browser in `tests`.
- Material UI 6, Emotion, Tailwind CSS 3 e CSS custom in `src/css` e `src/index.css`.
- Deploy GitHub Pages con `gh-pages -d dist`.
- Create React App, `react-scripts` e Jest sono riferimenti storici. Non esiste uno script `lint` in `package.json`.

```bash
npm ci
npm start
npm run build
npm run preview
npm run check:docs
npm test
npm test -- src/tests/pages/Mage/SpellDetail.test.jsx
npx playwright test tests/example.spec.js --project=chromium
npx playwright test tests/table-detail-pages.spec.js --project=chromium
```

- `npm run dev` è un alias di avvio. `prestart`, `predev` e `prebuild` rigenerano l'indice di ricerca.
- URL locale: `http://localhost:3000/grimoire/#/`. Vite usa `base: "/grimoire/"` e produce `dist/`.
- Non usare `--watchAll=false`: è un'opzione del vecchio runner Jest. `npm test` esegue già una singola passata.
- Playwright prevede l'avvio automatico di Vite; il suo URL predefinito manca però dello slash finale richiesto dalla base Vite. Impostare `PLAYWRIGHT_APP_BASE=http://127.0.0.1:3000/grimoire/` per la verifica. In caso di timeout del server, avviarlo con `npm start -- --host 127.0.0.1` e lasciare che Playwright lo riusi. Vedere esempi e limiti in `README.md` e `PROJECT_CONTEXT.md`.
- `npm run deploy` pubblica il sito: eseguirlo solo quando la richiesta comprende il deploy.

## Struttura e punti di ingresso

- `index.html` → `src/index.jsx` → `src/App.jsx`: avvio e routing. I precedenti `src/index.js` e `src/App.js` non esistono più.
- `src/pages/path.js`: `PATHS` e helper per gli URL di sheet e Legacy.
- `src/pages/*`: pagine delle linee di gioco e sezioni generali.
- `src/Data/*`: dataset statici; controllare gli export effettivi prima di usarli.
- `src/components/SimpleTable.jsx`, `src/components/SimpleTable/*`, `src/components/BaseTable.jsx`, `src/components/TableGroup.jsx`: famiglia tabellare attuale.
- `src/components/Detail.jsx`, `ContentBlockList.jsx`, `StructuredContent.jsx`, `Content.ts`: rendering condiviso dei contenuti.
- `src/components/LazyDetailRoute.jsx`, `RouteFeedback.jsx`, `AppErrorBoundary.jsx`: caricamento dei dettagli e gestione degli errori.
- `src/search/*` e `scripts/generate-search-index.mjs`: costruzione e lettura dell'indice statico.
- `src/books/bookNavigation.js`: catalogo, slug e collegamenti ai manuali.
- `src/favoritesStore.js`: stato e persistenza dei preferiti; `src/utils.jsx`: slug, trasformazioni e normalizzazione del testo.
- `src/components/Sheet/*`: stato, cataloghi, storage e componenti della scheda; pagine di accesso `SheetLibrary.jsx` e `SheetEditor.jsx` in `src/pages/Generale`.

## Dati, tabelle e dettagli

- Riutilizzare `SimpleTable` per righe normali e genitori con `Ranks`, `TableGroup` per gruppi di tabelle sorelle, `BaseTable` per gli usi di livello inferiore già presenti.
- `ManyHeadersTable`, `MultipleTables` e `CombinationTable` sono stati rimossi. Non ricrearne gli import né usare le vecchie props `mergeHeaders`/`headerCheckFields` come API corrente.
- Distinguere un genitore reale con figli ranked da un raggruppamento visivo per livello/tipologia. Non introdurre righe fittizie con valori `N/A` per disegnare separatori.
- I dataset migrati usano `Name` come identità canonica; i Legacy Mage hanno anche un `Id` stabile. Restano chiavi descrittive miste italiano/inglese: verificarle nel dataset concreto, senza rinominarle in massa.
- Preferire `headers` espliciti quando un dataset include campi tecnici, di raggruppamento o di dettaglio.
- Preservare campi, export aggregati e varianti flat: possono servire a route, dettagli, ricerca, preferiti o selettori della sheet anche quando non compaiono nella tabella.
- Le pagine possono preparare e filtrare i dati; evitare mutazioni degli oggetti importati quando si aggiungono link o valori di presentazione.

## Routing, caricamento e ricerca

- Le pagine sono caricate con `React.lazy`; i dettagli usano configurazioni in `App.jsx` con `loadPage`, `loadData`, `propKey` e `resolveItem`, eseguite da `LazyDetailRoute` sul parametro `:slug`.
- Conservare il caricamento differito. Per i Legacy usare `LegacyIndexData.js` per gli elenchi e `LegacyDetailLoader.js` per i dettagli, evitando import pesanti anticipati.
- Quando si modifica una route, controllare `PATHS`, resolver in `App.jsx`, link nelle liste, indice di ricerca e preferiti. Alcuni resolver disambiguano nomi duplicati con manuale/tipologia; non sostituirli con un semplice `slugify(Name)`.
- `slugify` genera slug con underscore; i Legacy usano `getMageLegacyPath(Id)`. Preservare gli URL esistenti.
- Per la sezione Mage usare `PATHS.MAGE.ARCANA` (`/mage/arcana` e dettagli `/:slug`). I precedenti URL `/mage/spells` sono alias con redirect; i preferiti salvati vengono normalizzati da `favoritesStore.js`.
- Conservare `HashRouter` e il prefisso statico `/grimoire/`; il solo campo `homepage` di `package.json` non configura Vite.
- Il runtime legge `search-index.json` con `fetch`, ma si tratta di un asset statico dello stesso sito, non di un backend applicativo.
- Dopo modifiche ai dataset o alle fonti indicizzate, rigenerare con `node scripts/generate-search-index.mjs` se il server è già avviato. Il file generato in `public/` è ignorato da Git e non va modificato manualmente.
- Nuovi contenuti possono richiedere l'aggiornamento di `src/search/buildSearchIndex.js`; aggiungere una pagina non ne garantisce automaticamente l'indicizzazione.
- Quando si aggiungono pagine o dettagli, verificare e aggiornare anche le voci e i collegamenti del lessico nella linea di gioco pertinente. Seguire il [flusso di manutenzione del lessico](./docs/ai/WORKFLOWS.md#mantenere-il-lessico-allineato), anche quando si rinomina o rimuove una destinazione esistente.

## Testo ricco e stile

- Riutilizzare `StructuredContent` per paragrafi, titoli, liste, righe etichettate e tabelle; `InlineContent` per testo ed enfasi inline.
- `ContentBlockList` gestisce anche i blocchi legacy con tabelle nominate. `Detail.jsx` espone gli helper dei dettagli.
- `InlineContent` mantiene compatibilità con stringhe HTML inline mediante `DOMParser` e nodi React. Il renderer attuale non espone blocchi `html`/`tableRef` né un fallback `dangerouslySetInnerHTML`.
- Preservare la formattazione dei contenuti legacy verificandone il rendering; migrare progressivamente verso dati strutturati. Non introdurre nuovi punti di HTML grezzo o sanitizzazioni che alterino il testo.
- Preferire Tailwind e MUI a nuovo CSS custom; tema in `src/css/muiTheme.js`. Estendere il linguaggio visivo esistente.

## Stato, preferiti e sheet

- La wiki usa principalmente stato locale. I preferiti sono gestiti da `favoritesStore.js` tramite `useSyncExternalStore` e `localStorage` (`grimoire_favorites_v1`), con evento compatibile `favorites:changed` e sincronizzazione tramite `storage`.
- `SheetDataProvider`/`useSheetData()` gestiscono i dati; `SheetViewProvider`/`useSheetView()` la modalità Play/Edit; `SheetCatalogProvider`/`useSheetCatalog()` i cataloghi caricati per razza.
- Il modello iniziale è `00_SheetData.jsx`; usare aggiornamenti immutabili, in particolare `updateValueAtPath` in `sheetStateUtils.js`.
- `sheetStorage.js` normalizza, salva, importa ed esporta le schede. Conservare compatibilità con dati già salvati/importati e non persistere i cataloghi `choices` dentro ogni scheda.
- La libreria è su `/sheet`, l'editor su `/sheet/:sheetId`; i vecchi URL `/sheet/editor/:sheetId` vengono reindirizzati.
- L'autosalvataggio del provider è differito di 400 ms e scarica le modifiche pendenti allo smontaggio. Preservarlo quando si toccano context, navigazione o storage.
- La sheet accede già ai dataset wiki tramite cataloghi e helper dedicati: preservare questa integrazione e la distinzione dalla consultazione.

## Convenzioni e limiti delle modifiche

- Procedere con modifiche piccole e locali; preservare struttura, route e shape dei dati.
- Non rifattorizzare l'architettura generale, sostituire in massa le tabelle o introdurre service layer/state manager senza una necessità della feature richiesta.
- Non eliminare props o campi apparentemente inutilizzati senza controllare tutti i consumatori.
- Conservare i nomi anomali ancora importati: `src/pages/Vampire/DevotionsDetail .jsx`, `src/components/Sheet/Common/32_DynamicInput.jsx.jsx`, cartelle `Lesser templates`.
- Componenti/pagine sono generalmente PascalCase; nella sheet i prefissi numerici ordinano le sezioni. Convergere verso inglese standard in modo progressivo.
- `dist/`, `build/` residuo, `node_modules/`, report Playwright e indice di ricerca generato non sono fonti da aggiornare manualmente.

## Verifiche prima della consegna

- Controllare i dati effettivi e riusare un pattern già presente.
- Se cambiano link o identità, verificare lista → dettaglio, ricerca, preferiti e compatibilità con HashRouter.
- Se cambia la sheet, verificare aggiornamenti immutabili, normalizzazione dei vecchi dati, Play/Edit e persistenza.
- Eseguire i test Vitest pertinenti; per componenti condivisi e routing ampliare a `npm test` e build. Per navigazione/UI usare gli smoke Playwright appropriati sull'app locale.
- Non trattare i test Playwright esistenti come copertura completa: alcuni scenari sheet sono rimasti alla UI precedente.
- Non aumentare i warning. Distinguere gli errori osservati nella verifica corrente dai debiti storici; la build Vite non esegue un controllo ESLint.
- Se cambiano guide o riferimenti, eseguire `npm run check:docs` e `git diff --check`. Il controllo documentale verifica link Markdown locali e ancore; le affermazioni sul comportamento richiedono comunque confronto con il codice.
