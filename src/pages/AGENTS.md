# Lavorare su pagine e collegamenti

Ambito: `src/pages` e sottocartelle. Integra le [regole del repository](../../AGENTS.md). Riferimenti verificati il 2026-10-23.

## Punti da leggere

- [path.js](./path.js): `PATHS`, `getSheetPath`, `getMageLegacyPath` e percorsi legacy.
- [App.jsx](../App.jsx): route di elenco, `DETAIL_ROUTE_CONFIGS` e resolver specifici per le famiglie.
- [LazyDetailRoute.jsx](../components/LazyDetailRoute.jsx): attesa, risoluzione del parametro `:slug`, errori e retry.
- La pagina di elenco, il dettaglio e il dataset della famiglia concreta: non tutti usano lo stesso nome di prop o la stessa disambiguazione.

## Liste e dettagli

- Riutilizzare `SimpleTable`, `TableGroup` e gli helper di contenuto già presenti. Impostare colonne esplicite quando si nascondono metadati o descrizioni lunghe.
- Preparare nuove righe/oggetti per i link senza mutare i dataset importati. Se la trasformazione serve a più pagine, verificare prima helper come [arcanaTableData.js](./Mage/arcanaTableData.js).
- Un link di dettaglio richiede un oggetto risolvibile e contenuti effettivi; non dedurre la disponibilità del dettaglio dalla sola presenza del nome.
- Conservare il nome di prop atteso dal dettaglio e configurarlo in `propKey`; non imporre un contratto unico a tutte le pagine.
- Per una nuova famiglia seguire il [flusso operativo](../../docs/ai/WORKFLOWS.md#aggiungere-o-completare-un-contenuto), che comprende anche ricerca e sheet.
- Per ogni nuova pagina o dettaglio controllare le voci del lessico collegate al contenuto e aggiornare le destinazioni disponibili secondo il [flusso del lessico](../../docs/ai/WORKFLOWS.md#mantenere-il-lessico-allineato).

## URL e identità

- Passare a React Router percorsi interni come `/mage/arcana/...`; `HashRouter` gestisce il frammento. Non aggiungere `/grimoire/` o `#` ai dati dei link interni.
- La sezione Mage usa `PATHS.MAGE.ARCANA`: [Arcana.jsx](./Mage/Arcana.jsx) mostra tutti gli Arcana, [Arcanum.jsx](./Mage/Arcanum.jsx) un singolo Arcanum. I vecchi URL `/mage/spells` e `/mage/spells/:slug` reindirizzano ai nuovi indirizzi; non usarli per generare nuovi link.
- Verificare insieme link di lista, resolver in `App.jsx` e `path` nell'indice di ricerca. I duplicati possono usare classe, rank o manuale; i derangement usano anche l'indice della riga.
- I Legacy usano `getMageLegacyPath(item.Id)` con l'indice leggero, non `slugify(item.Name)` o l'import anticipato dei dettagli.
- Preservare le route legacy della sheet e gli helper di percorso. Non reinterpretare una route assente come richiesta di riprogettare la navigazione.
- Controllare l'effetto sui preferiti: il link può essere la chiave di un elemento già salvato.

## Pagine della scheda e dei manuali

- [SheetLibrary.jsx](./Generale/SheetLibrary.jsx) gestisce la libreria; [SheetEditor.jsx](./Generale/SheetEditor.jsx) collega l'editor allo storage. Le regole del sottosistema sono nella [guida sheet](../components/Sheet/AGENTS.md).
- `/sheet` è la libreria, non una scheda già creata. Gli smoke browser devono creare/aprire una scheda prima di cercarne tracker o sezioni.
- Per [BookDetail.jsx](./Generale/BookDetail.jsx) verificare sia i contenuti editoriali sia quelli collegati tramite l'indice di ricerca e [bookNavigation.js](../books/bookNavigation.js).

## Verifica

- Controllare elenco → dettaglio, accesso diretto alla route, elemento inesistente e nomi duplicati quando presenti.
- Per route/caricamento partire da `App.test.jsx` e `infrastructureImprovements.test.jsx`; per il contenuto usare le suite della famiglia nella [mappa dei test](../../docs/ai/TESTING.md).
- Verificare sul mobile le pagine con ranked o gruppi di tabelle. Non attribuire agli smoke esistenti una copertura di tutte le famiglie.
