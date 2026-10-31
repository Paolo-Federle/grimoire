# Flussi di lavoro ricorrenti

Riferimenti verificati il 2026-10-23. Usare insieme all'[indice delle guide](./README.md), alle [regole generali](../../AGENTS.md) e alla [mappa dei test](./TESTING.md).

## Orientarsi prima della modifica

1. Leggere `git status --short` e il diff pertinente per preservare il lavoro già presente.
2. Identificare dataset, pagina, componenti condivisi e possibili consumatori in ricerca, preferiti e sheet. Leggere gli `AGENTS.md` delle aree coinvolte.
3. Cercare nomi ed export reali con `rg`, inclusi i percorsi anomali già importati. Confrontare un esempio equivalente che funzioni.
4. Definire il comportamento richiesto e i controlli proporzionati alla modifica, senza trasformare un intervento locale in un rifacimento generale.

## Aggiungere o completare un contenuto

1. Individuare il dataset corretto e i campi effettivamente letti dalla lista e dal dettaglio. Per nuovi oggetti canonici usare `Name`; conservare identità e URL esistenti.
2. Decidere se si tratta di righe flat, di un genitore con `Ranks` o di tabelle sorelle. Usare la [guida tabelle](../../TABLE_COMPONENT_ANALYSIS.md) per i casi già risolti.
3. Preparare le righe della pagina senza perdere campi editoriali nei dati condivisi. Aggiungere link solo per contenuti effettivamente risolvibili.
4. Controllare [path.js](../../src/pages/path.js) e [App.jsx](../../src/App.jsx). Per una nuova famiglia di dettagli collegare `path`, `loadPage`, `loadData`, `propKey` e `resolveItem` in `DETAIL_ROUTE_CONFIGS`; preservare il caricamento differito.
5. Cercare duplicati nel pool completo: pagina, resolver e `path` dell'indice devono identificare la stessa variante. Per i Legacy usare `Id` e `getMageLegacyPath`.
6. Verificare [buildSearchIndex.js](../../src/search/buildSearchIndex.js). Una pagina generica ricavata da `PATHS` non equivale all'indicizzazione degli oggetti del suo dataset.
7. Controllare e aggiornare il lessico per i termini corrispondenti alla nuova pagina o al nuovo dettaglio, seguendo la [procedura dedicata](#mantenere-il-lessico-allineato).
8. Cercare eventuali consumatori nella sheet prima di cambiare export, nomi o gerarchie. Le varianti flat e i cataloghi possono servire anche quando la tabella è già ranked.
9. Eseguire le verifiche dei contenuti e dei link pertinenti; rigenerare l'indice e controllare i risultati reali della famiglia. Per un nuovo dettaglio verificare anche un URL inesistente e un accesso diretto.

Esempi da leggere, senza copiarne automaticamente tutte le scelte:

- [Legacy.jsx](../../src/pages/Mage/Legacy.jsx): indice leggero e collegamenti basati su `Id`.
- [Contracts.jsx](../../src/pages/Changeling/Contracts.jsx): genitori ranked e Goblin non classificati raggruppati per rank nella pagina.
- [arcanaTableData.js](../../src/pages/Mage/arcanaTableData.js): preparazione condivisa delle tabelle delle magie e dei link sotto `/mage/arcana`.

## Mantenere il lessico allineato

Il lessico richiede aggiornamenti espliciti quando si aggiungono pagine o dettagli, oppure si rinominano o rimuovono le loro route.

1. Cercare i termini pertinenti in [LexyconData.jsx](../../src/Data/LexyconData.jsx), nella linea di gioco corretta. Per un nuovo termine di gioco aggiungere una voce quando si dispone di una definizione e della fonte `Book`, preservando quelle esistenti.
2. Aggiornare `linkGroups` in [lexyconLinks.js](../../src/pages/Generale/lexyconLinks.js) con i termini e gli alias appropriati. Usare `PATHS` e gli slug/ID canonici del resolver; preferire il dettaglio pertinente quando disponibile, oppure una pagina di categoria che contenga effettivamente il concetto. Lasciare senza link i termini privi di una destinazione verificata.
3. Controllare gli omonimi in base al significato, alla linea di gioco e, se necessario, al manuale. `normalizeTerm` gestisce già maiuscole, spazi, pronunce tra parentesi e l'articolo finale `, the`; preservare le disambiguazioni di `getLexyconPath`, come quella tra Spirit Arcanum ed entità spirituale.
4. Verificare su `/lexycon` la ricerca del termine e il clic sul titolo in grassetto fino al contenuto corretto, anche su mobile. Controllare gli eventuali omonimi e l'accesso diretto alla destinazione; per route rinominate o rimosse aggiornare anche i collegamenti già presenti.

## Correggere dati o testo senza cambiare il modello

- Limitare la modifica ai campi richiesti e conservare fonti, prerequisiti, note e varianti legittime.
- Non deduplicare oggetti solo perché condividono il nome; verificare manuale, tipologia e resolver.
- Se la rappresentazione contiene liste o tabelle, confrontare anche la sequenza e il rendering del testo circostante.
- Per Arcana seguire il [playbook](../../src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md), con le sue verifiche sul corpus. Non avviare nuovamente la migrazione dei dieci file già strutturati.
- Se cambiano le etichette che alimentano slug o cataloghi, trattare il cambiamento anche come modifica di identità e collegamenti.

## Cambiare una tabella o il rendering condiviso

1. Cercare i consumatori della prop o dell'helper interessato; scegliere pagine campione flat, ranked e con `TableGroup` quando il cambiamento può raggiungerle.
2. Preservare colonne visibili, `BookLink`, link nella prima cella, preferiti e comportamento dei genitori/figli. Controllare desktop e card mobile.
3. Per contenuti editoriali, scegliere `InlineContent`, `StructuredContent` o `ContentBlockList` secondo la forma già supportata; non aggiungere parsing per singola pagina.
4. Se una prop è specifica di una famiglia, evitare di cambiarne i default per tutte le altre senza verificarne l'effetto.
5. Eseguire i test dei contenuti e dell'infrastruttura pertinenti e ampliare a suite completa/build per modifiche condivise. La [mappa dei test](./TESTING.md) indica ciò che gli smoke attuali non coprono.

## Cambiare la scheda personaggio

1. Seguire la [guida sheet](../../src/components/Sheet/AGENTS.md) per modello iniziale, storage, input, calcoli e cataloghi.
2. Identificare se il valore è un dato permanente, una risorsa di gioco, un valore derivato o una preferenza della vista; preservarne il comportamento Play/Edit.
3. Usare aggiornamenti immutabili e verificare i record salvati con la shape precedente quando si cambia il modello.
4. Se si toccano provider o navigazione, verificare autosave, scaricamento delle modifiche pendenti e passaggio tra schede. Non persistere `choices` o dataset wiki nei record.
5. Scegliere le suite della funzione concreta e, per una modifica visibile/persistente, controllare creazione/apertura dalla libreria e ricaricamento del record in un contesto di prova isolato.

## Interpretare i sintomi frequenti

| Sintomo | Primo controllo utile |
| --- | --- |
| Un contenuto appare nella lista ma manca in ricerca | Fonte in `searchSources`, campi usati per il titolo, indice rigenerato e cache client |
| Un risultato di ricerca porta al contenuto sbagliato | Disambiguazione coerente tra `path`, link della pagina e resolver; collisioni dei percorsi |
| Un dettaglio mostra "Content not found" | Parametro `:slug`, export caricato, campo identificativo e `propKey`; distinguere elemento mancante da errore del loader |
| Spariscono liste/tabelle dopo una conversione editoriale | Blocchi strutturati effettivi; il parser inline non preserva HTML strutturale |
| Una modifica della sheet scompare al ricaricamento | Updater immutabile, callback dell'editor, normalizzazione e scrittura dello storage |
| Il salvataggio si ripete senza modifiche dell'utente | Effetti/calcoli che creano nuovi oggetti pur mantenendo gli stessi valori |
| Playwright non trova neppure i link della home | URL effettivo e avviso Vite: verificare lo slash finale di `/grimoire/` prima dei selettori |
| Uno smoke sheet cerca tracker nella libreria | Aprire/creare una scheda; `/sheet` non è più l'editor diretto |
| La build termina con avviso su chunk grandi | Dataset/chunk di contenuto segnalati; non confondere l'avviso con un errore ESLint |

## Chiudere l'intervento

- Riesaminare il diff, distinguere problemi preesistenti da regressioni e riportare cosa è stato davvero eseguito.
- Aggiornare istruzioni, contesto o backlog nel punto indicato dall'[indice](./README.md#quale-fonte-aggiornare).
- Eseguire `npm run check:docs` se cambiano guide o riferimenti, oltre alle verifiche applicative richieste dalla modifica.
- Conservare le condizioni di eventuali workaround e le date delle verifiche; non riportare esiti storici come appena riprodotti.
