# Contesto del progetto

Ultima revisione della documentazione: 2026-10-23. Le regole operative sono in [AGENTS.md](./AGENTS.md), i comandi in [README.md](./README.md). Gli esiti delle verifiche applicative riportati sotto conservano la data della loro esecuzione.

## Panoramica

`grimoire` è una wiki React statica per contenuti di gioco, organizzata per linee tematiche. I dataset in `src/Data` alimentano liste, dettagli, ricerca e collegamenti ai manuali. Non c'è un backend applicativo: i contenuti sono moduli locali e un indice JSON generato.

La scheda personaggio è un sottosistema distinto ma integrato con quei dataset. Ha una libreria locale, editor, modalità Play/Edit, autosalvataggio, import/export della singola scheda e stampa dal browser. Rimane in evoluzione; non è più soltanto una pagina di prova senza persistenza.

## Avvio, build e test

| Area | Stato corrente | Fonte |
| --- | --- | --- |
| Avvio | `index.html` carica `src/index.jsx`, che monta `App.jsx` nel `HashRouter` | `index.html`, `src/index.jsx` |
| Sviluppo/build | Vite, porta 3000, base `/grimoire/`, output `dist/` | `vite.config.mjs` |
| Test React/dati | Vitest, jsdom, Testing Library; file in `src/tests` | `vite.config.mjs`, `src/setupTests.js` |
| Test browser | Playwright, progetti chromium/firefox/webkit, server Vite automatico | `playwright.config.js`, `tests` |
| Deploy | GitHub Pages tramite `gh-pages -d dist` | `package.json` |
| Stile | MUI/Emotion, Tailwind e CSS custom | `src/css/muiTheme.js`, `tailwind.config.js`, `src/index.css` |

La precedente toolchain CRA/Jest è stata sostituita: i comandi con `--watchAll=false`, i percorsi `App.js`/`index.js` e l'output di deploy `build/` sono superati. `homepage` rimane in `package.json`, ma il prefisso degli asset è configurato da `base` in Vite.

## Come scorrono i dati

1. I moduli in `src/Data` esportano dataset e, in alcuni casi, viste aggregate/flat compatibili con altri consumatori.
2. Le pagine in `src/pages` selezionano le colonne, preparano copie delle righe e aggiungono link per le tabelle.
3. `SimpleTable` distingue righe flat e genitori con `Ranks`; `TableGroup` raccoglie tabelle sorelle senza creare genitori fittizi nei dati.
4. `App.jsx` dichiara route di elenco e configurazioni dei dettagli; `LazyDetailRoute` carica pagina e dataset quando serve, risolve l'elemento e lo passa come prop.
5. Gli stessi dataset alimentano l'indice statico di ricerca e i cataloghi della sheet. Una modifica ai dati può quindi coinvolgere più viste.

Per i nomi già migrati l'identità è `Name`, non `Title`/`Nome`/`Titolo`; i campi descrittivi rimangono eterogenei. `src/tests/canonicalIdentityKeys.test.js` verifica i dataset migrati e gli ID dei Legacy.

## Mappa del codice per tipo di intervento

| Intervento | Punti da leggere |
| --- | --- |
| Aggiungere/correggere una pagina | `src/App.jsx`, `src/pages/path.js`, pagina e dataset specifici |
| Risolvere un dettaglio o un nome duplicato | `DETAIL_ROUTE_CONFIGS` e resolver in `src/App.jsx`, `src/components/LazyDetailRoute.jsx` |
| Cambiare una tabella | `src/components/SimpleTable.jsx`, `src/components/SimpleTable/*`, `src/components/BaseTable.jsx`, `src/components/TableGroup.jsx` |
| Renderizzare contenuti editoriali | `src/components/StructuredContent.jsx`, `src/components/ContentBlockList.jsx`, `src/components/Detail.jsx`, `src/components/Content.ts` |
| Ricerca e suggerimenti | `src/search/buildSearchIndex.js`, `src/search/searchClient.js`, `src/components/WikiSearch.jsx`, `src/pages/Generale/Search.jsx` |
| Manuali e contenuti collegati | `src/books/bookNavigation.js`, `src/Data/BookData.jsx`, `src/Data/BookDetailData.js`, `src/Data/BookSupplementDetailData.js`, `src/pages/Generale/BookDetail.jsx` |
| Preferiti | `src/favoritesStore.js`, `src/components/FavoriteToggle.jsx`, `src/pages/favorites.jsx` |
| Libreria/editor schede | `src/pages/Generale/SheetLibrary.jsx`, `src/pages/Generale/SheetEditor.jsx`, `src/components/Sheet/sheetStorage.js` |
| Stato e cataloghi della scheda | `src/components/Sheet/05_SheetDataContext.jsx`, `src/components/Sheet/07_SheetCatalogContext.jsx`, `src/components/Sheet/raceOptions.js`, `src/components/Sheet/sheetStateUtils.js` |

## Routing e caricamento differito

- `PATHS` centralizza i percorsi; `HashRouter` mantiene gli URL compatibili con GitHub Pages (`/grimoire/#/...`).
- La sezione Mage usa `/mage/arcana` e `/mage/arcana/:slug`, con redirect dai precedenti `/mage/spells` e `/mage/spells/:slug`. `Arcana.jsx` è l'elenco completo, `Arcanum.jsx` mostra un singolo Arcanum. I link in ricerca, lessico e sheet usano gli URL canonici; `favoritesStore.js` normalizza quelli già salvati senza perdere contenuti o stato di selezione.
- Le pagine sono importate tramite `React.lazy` e `Suspense`.
- Ogni configurazione di dettaglio specifica `loadPage`, `loadData`, `propKey` e `resolveItem`. Il parametro `:slug` viene risolto al momento della navigazione; non viene generata una route per ogni oggetto importando tutti i dataset all'avvio.
- `LazyDetailRoute` e `RouteFeedback` gestiscono attesa, contenuto non trovato, errore e tentativo di ricaricamento; `AppErrorBoundary` gestisce gli errori di rendering.
- Gli slug normali usano `slugify` da `utils.jsx`, che separa le parole con underscore. Alcune famiglie disambiguano nomi uguali tramite manuale o tipologia: i link di pagina e ricerca devono seguire il resolver corrispondente.
- I Legacy Mage hanno un indice leggero (`LegacyIndexData.js`) con `Id` stabile; `LegacyDetailLoader.js` importa `LegacyData.jsx` su richiesta. Le route usano `getMageLegacyPath(Id)`.
  L'indice usa i campi inglesi `Path`, `Order`, `Primary Arcanum`, `Optional Arcanum` e `Conjunctional Arcanum`. L'elenco combina cinque filtri su questi campi, conservati nei parametri della route per ripristinarli tornando dal dettaglio; mostra il conteggio dei risultati e permette di azzerare le selezioni.
- I cinque Path Mage hanno dettagli su `/mage/path/:slug`: `PathData.jsx` resta leggero per lista e cataloghi della sheet, mentre `PathDetailData.js` contiene i testi strutturati del manuale (pp. 92-106), caricati dal dettaglio lazy e dal builder di ricerca. I campi storici della sheet e le identità dei preferiti sono mantenuti; il lessico collega ciascun Path al proprio dettaglio.
- I cinque ordini del Pentacolo hanno dettagli su `/mage/order/:slug`: `OrderData.jsx` conserva l'indice leggero e i valori storici della sheet, mentre `OrderDetailData.js` contiene i testi strutturati e i rapporti fra ordini dal PDF (pp. 38-52). Free Council conserva l'identità e l'URL `council_of_free_assemblies`; ricerca e lessico riconoscono entrambi i nomi. I Seers of the Throne restano nella lista senza dettaglio, perché assenti dall'estratto fornito; le identità dei preferiti sono preservate per tutti e sei gli ordini.
- La pagina `/mage/mana` carica [ManaData.js](./src/Data/Mage/ManaData.js), con le regole dal PDF (pp. 77-79) fino a Tass, escludendo la successiva sezione Wisdom. È collegata dalla pagina Mage, dal catalogo Energy pools, dal lessico (Mana e tass) e dalla ricerca. Traits contiene una singola riga Energy pools che apre [EnergyPools.jsx](./src/pages/Generale/EnergyPools.jsx) su `/traits/energy_pools`: [EnergyPoolsData.js](./src/Data/EnergyPoolsData.js) alimenta qui la tabella con sei pool soprannaturali e i cinque Pillars dei Mummy. Solo i pool con una pagina dedicata disponibile hanno un link; Sekhem resta distinto come power trait. Le identità dei preferiti salvati quando la tabella era su Traits sono preservate.
- `getSheetPath(sheetId)` genera gli URL della scheda; le vecchie route `/sheet/editor/:sheetId` reindirizzano a `/sheet/:sheetId`.

## Tabelle e testo ricco

La famiglia corrente comprende `SimpleTable`, le sue varianti desktop/mobile flat/ranked, `BaseTable` e `TableGroup`. I precedenti `ManyHeadersTable`, `MultipleTables` e `CombinationTable` non esistono più; neppure `mergeHeaders` è una prop corrente.

Tre casi da distinguere:

- **Contenuto con progressione:** un genitore reale possiede `Ranks` (discipline, doni, famiglie di contratti, utterance, style merits Mummy).
- **Tabelle sorelle:** livelli Arcana o rituali divisi per rank restano righe flat in più `SimpleTable`, eventualmente dentro `TableGroup`.
- **Tabelle indipendenti:** categorie di meriti, armi e strumenti possono restare tabelle separate.

I preferiti e i link sono presenti anche nelle card mobile. I gruppi ranked mobile hanno apertura/chiusura per genitore. `TableGroup` può avere un titolo collegato a un dettaglio con `titleLink`; il titolo non sostituisce le righe come oggetti favoribili.

`StructuredContent` rende blocchi `paragraph`, `heading`, `list`, `line`, `table`. `InlineContent` rende stringhe e nodi `text`, `bold`, `italic`, `lineBreak`, con compatibilità per HTML inline legacy. `ContentBlockList` collega i contenuti strutturati ai vecchi blocchi con tabelle nominate; `Detail.jsx` espone helper come `DynamicText` e `LabeledField`.

I dettagli Mage di Path, ordini e Legacy usano [BalancedColumns.jsx](./src/components/BalancedColumns.jsx): due colonne di testo bilanciate automaticamente da 1024 px, una sola colonna sotto questa soglia. Il testo scorre nell'ordine del documento e usa lo scroll della pagina; i titoli restano collegati al testo seguente e tabelle, voci di elenco e coppie etichetta/valore vengono mantenute insieme quando possibile. Le tabelle larghe scorrono orizzontalmente entro la colonna senza allargare la pagina.

I testi di Mana, Path e ordini omettono i rimandi editoriali inline ai manuali (frasi «See …», numeri di pagina e «see above/below»), preservando regole e indicazioni utili. Le fonti `Book` restano nei dataset e nei collegamenti finali delle pagine.

Alla revisione non ci sono chiamate a `dangerouslySetInnerHTML` in `src`. Non esiste più il fallback strutturale HTML descritto nelle vecchie note: il parser inline conserva solo testo, enfasi e a capo. Nuovi contenuti complessi devono usare blocchi strutturati per preservare liste e tabelle.

Per esempi e stato delle migrazioni: [guida tabelle](./TABLE_COMPONENT_ANALYSIS.md) e [playbook Arcana](./src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md).

## Ricerca globale e manuali

- Navbar, home e banner delle linee di gioco usano la ricerca; la pagina `/search` offre filtri per linea, tipologia e manuale.
- `buildSearchIndex.js` seleziona esplicitamente le fonti indicizzate e costruisce metadati/link; non scopre automaticamente ogni nuova pagina.
- `scripts/generate-search-index.mjs` importa il builder tramite Vite e scrive `public/search-index.json`. Viene eseguito da `prestart`, `predev`, `prebuild`.
- `searchClient.js` carica quell'asset con `fetch` usando `import.meta.env.BASE_URL`, mantiene la promise in cache e cerca lato client. Questo caricamento non è un service layer né una chiamata a un backend.
- Se si modifica un dataset a server già avviato, rigenerare esplicitamente l'indice. `public/search-index.json` è ignorato da Git.
- `bookNavigation.js` costruisce catalogo, slug e associazioni tramite i codici dei manuali. I dettagli editoriali sono in `BookDetailData.js` e `BookSupplementDetailData.js`.
- `BookDetail.jsx` usa l'indice di ricerca per mostrare i contenuti collegati a un manuale; un indice obsoleto può quindi influire anche sui libri.
- `scripts/audit-book-chapters.mjs` è uno strumento di audit che consulta un servizio esterno, separato dal runtime della wiki e dai normali test locali.

## Preferiti

`favoritesStore.js` usa `useSyncExternalStore` e la chiave `grimoire_favorites_v1`. Gli hook condividono uno snapshot; le modifiche emettono anche `favorites:changed`, mentre l'evento `storage` aggiorna le altre schede del browser.

L'identità dà precedenza a `__favKey`, poi a `link`, poi a percorso e slug della prima colonna. Cambiare link o colonne può quindi modificare la corrispondenza con preferiti già salvati. Gli helper di serializzazione/stato non risiedono più in `utils.jsx`.

## Scheda personaggio

- `/sheet` mostra la libreria con creazione, duplicazione, eliminazione, ricerca, filtro per razza e import/export della singola scheda.
- `/sheet/:sheetId` apre `SheetEditor`, che collega `CharacterSheet` allo storage e offre export e stampa/PDF tramite il browser.
- `00_SheetData.jsx` definisce il modello iniziale; `SheetDataProvider` normalizza i dati, mantiene lo stato e invoca `onChange` dopo 400 ms, scaricando anche modifiche pendenti allo smontaggio.
- `SheetViewProvider` espone Play/Edit; `settings.view_mode` conserva la modalità scelta nella scheda. Le sezioni sono Character, Powers, Story & XP e Settings.
- `SheetCatalogProvider` carica le opzioni della razza selezionata da `raceOptions.js`; helper dedicati forniscono meriti, risorse e magie. La sheet attinge già ai contenuti wiki.
- `sheetStorage.js` conserva le schede nella chiave `grimoire_saved_sheets_v1`, con versione interna dello storage `2`; il formato export è `grimoire-sheet-v1`. Non confondere i suffissi delle chiavi con la versione interna.
- `normalizeSheetData` integra i valori predefiniti preservando i campi salvati e omette `choices`, che sono cataloghi ricostruibili. Modifiche al modello devono mantenere leggibili le vecchie schede.
- Usare `updateValueAtPath` e copie immutabili per modifiche annidate; preservare autosalvataggio, calcoli derivati, tracker e distinzione Play/Edit.
- Backup di tutta la libreria, ripristino con merge/replace e gestione completa degli errori di storage restano nel backlog; l'export della singola scheda esiste già.

## Verifiche e limiti noti

Verifica locale del 2026-10-22:

- `npm test`: **21 suite e 160 test superati**, senza warning del runner osservati.
- `npm run build`: completata; generati **5262 elementi di ricerca**. Resta l'avviso Vite per alcuni chunk minificati oltre 500 kB, soprattutto contenuti/dataset voluminosi.
- Smoke home Playwright Chromium: **1 test superato** usando `PLAYWRIGHT_APP_BASE` con slash finale e il server avviato su `127.0.0.1`, come descritto sotto. Le due suite browser complete non sono state eseguite in questa revisione documentale.

Limiti della copertura e del tooling:

- Vitest seleziona `src/tests/**/*.{test,spec}.{js,jsx}`; la directory Playwright `tests/` è esclusa.
- Le suite coprono anche contenuti Arcana, ricerca, identità canoniche, manuali, cataloghi/storage della sheet, tracker, modalità di visualizzazione e caricamento dei dettagli. Scegliere i test in base ai consumatori coinvolti.
- L'URL Playwright predefinito è `http://127.0.0.1:3000/grimoire`, senza slash finale. Gli helper con `new URL('#/', base)` raggiungono così `/grimoire#/`, dove Vite mostra l'avviso sulla base pubblica. Impostare `PLAYWRIGHT_APP_BASE=http://127.0.0.1:3000/grimoire/` prima dei test. Nella verifica l'avvio automatico è inoltre andato in timeout; l'avvio manuale con `npm start -- --host 127.0.0.1` ha permesso il riuso del server. Comandi in `README.md`.
- `tests/example.spec.js` contiene ancora scenari sheet che cercano i tracker direttamente su `/sheet` e tab `Page 2`; la UI corrente richiede l'apertura di una scheda dalla libreria e usa i nuovi nomi delle sezioni. Questi scenari richiedono riallineamento, rilevato leggendo codice e test.
- `tests/table-detail-pages.spec.js` abilita attualmente Locations, Derangements e Universal Merits; diverse altre famiglie sono commentate. Non è una verifica completa di tutte le tabelle/dettagli.
- Non c'è uno script di lint e `vite build` non esegue ESLint. I vecchi avvisi CRA/ESLint o Jest/Router vanno distinti da quelli effettivamente riprodotti.
- I nomi anomali `DevotionsDetail .jsx`, `32_DynamicInput.jsx.jsx` e le cartelle con spazi sono ancora presenti e importati.
- Tailwind/MUI rimangono le preferenze per nuovo stile; la convergenza verso inglese e dati strutturati deve essere graduale.

## Mantenere utile questo contesto

L'[indice delle guide AI](./docs/ai/README.md) raccoglie le istruzioni locali, i [flussi operativi](./docs/ai/WORKFLOWS.md) e la [mappa dei test](./docs/ai/TESTING.md). `npm run check:docs`, definito in [check-ai-docs.mjs](./scripts/check-ai-docs.mjs), verifica i collegamenti Markdown locali e le ancore senza accesso alla rete. Non controlla automaticamente la correttezza delle descrizioni del codice.

Quando cambia una funzionalità condivisa, aggiornare qui il flusso e i suoi punti di ingresso, in `AGENTS.md` le regole operative e in `README.md` i comandi. Segnare come implementate le proposte completate nelle guide specialistiche e nel backlog, evitando istruzioni contraddittorie o riferimenti a componenti rimossi.
