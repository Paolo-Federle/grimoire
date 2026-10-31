# Lavorare sui dataset

Ambito: `src/Data` e sottocartelle. Integra le [regole del repository](../../AGENTS.md). Riferimenti verificati il 2026-10-23.

## Prima di cambiare una shape

- Identificare gli export reali e cercarne gli utilizzi in pagine, resolver di `src/App.jsx`, ricerca e sheet. Non fermarsi alla tabella visibile.
- Controllare identità, campi editoriali, fonti `Book`, metadati non visibili ed eventuali export aggregati/flat.
- Verificare nomi duplicati nel pool completo usato dal resolver, anche se la pagina mostra solo una sottocategoria. Due nomi uguali possono identificare varianti legittime.
- Per una nuova famiglia seguire il [flusso contenuto → dettaglio](../../docs/ai/WORKFLOWS.md#aggiungere-o-completare-un-contenuto).

## Identità e compatibilità

- Usare `Name` per nuovi oggetti che seguono il modello canonico; non rinominare automaticamente le chiavi dei dataset legacy.
- I Legacy Mage usano `Id` stabile, distinto dal nome mostrato. Indice in [LegacyIndexData.js](./Mage/LegacyIndexData.js), contenuti in [LegacyData.jsx](./Mage/LegacyData.jsx), caricamento in [LegacyDetailLoader.js](./Mage/LegacyDetailLoader.js).
- Conservare i campi richiesti dai dettagli anche quando la lista li omette. Rimuovere colonne di presentazione nella pagina, non dall'oggetto condiviso.
- Mantenere compatibili gli export aggregati e flat già consumati. Le normalizzazioni devono evitare di mutare gli oggetti importati.
- Non cambiare gli slug esistenti per uniformare la lingua o correggere una grafia senza verificare route e link salvati.

## Gerarchia e contenuti editoriali

- Un genitore di dominio con una progressione usa `Ranks`; una suddivisione solo visiva per livello/tipo resta nel rendering della pagina.
- Non aggiungere righe fittizie con campi `N/A` per creare intestazioni. Per i casi esistenti vedere la [guida tabelle](../../TABLE_COMPONENT_ANALYSIS.md).
- Preferire blocchi `paragraph`, `heading`, `list`, `line`, `table` e nodi inline per l'enfasi. Schema di riferimento: [Content.ts](../components/Content.ts); comportamento effettivo: [StructuredContent.jsx](../components/StructuredContent.jsx).
- Conservare parole, note, esempi, ordine di liste e testo attorno alle tabelle quando si cambia rappresentazione. Separare modifiche strutturali e correzioni editoriali.
- Per le magie usare il [playbook Arcana](./Mage/Arcana/ArcanaContentMigrationAnalysis.md): tutti i dieci dataset attuali sono già migrati.
- Per i manuali distinguere `BookData.jsx` (catalogo), `BookDetailData.js` e `BookSupplementDetailData.js` (contenuti editoriali). La corrispondenza con gli elementi wiki usa i codici dei manuali.

## Verifiche da scegliere

- Identità/Legacy: `canonicalIdentityKeys.test.js` e `LegacyData.test.js` in `src/tests`.
- Arcana: `src/tests/pages/Mage/SpellDetail.test.jsx`, incluse le verifiche sull'intero corpus.
- Manuali: `BookDetailData.test.js`, `bookNavigation.test.js`, `BookDetail.test.jsx` in `src/tests`.
- Se cambiano contenuti indicizzati, rigenerare l'indice ed esaminare URL e varianti dei risultati; se cambiano opzioni della scheda, verificare anche i cataloghi.
- Comandi e limiti della copertura sono nella [mappa dei test](../../docs/ai/TESTING.md). Il numero di record non dimostra da solo che testo, varianti e collegamenti siano corretti.
