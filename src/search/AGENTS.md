# Ricerca e indice statico

Ambito: `src/search` e sottocartelle. Integra le [regole del repository](../../AGENTS.md). Riferimenti verificati il 2026-10-23.

## Costruzione e runtime sono separati

- [buildSearchIndex.js](./buildSearchIndex.js) importa i dataset e costruisce l'indice durante la generazione. È corretto che questo modulo conosca molte famiglie.
- [generate-search-index.mjs](../../scripts/generate-search-index.mjs) carica il builder tramite Vite e scrive `public/search-index.json`.
- [searchClient.js](./searchClient.js) carica solo l'asset JSON tramite `import.meta.env.BASE_URL`; ricerca e filtri sono client-side.
- Non importare il builder nei componenti browser per accedere ai risultati: si anticiperebbe il caricamento dei dataset pesanti.
- L'indice è generato/ignorato da Git. Modificare le fonti e rigenerarlo, non correggere a mano il JSON.

## Aggiungere una fonte di contenuti

- In `searchSources` specificare `id`, `gameLine`, `type`, `items` e `basePath` oppure una funzione `path`; una funzione `title` è disponibile per nomi non standard.
- Verificare gli stessi criteri di disambiguazione nei link della pagina e nei resolver di `App.jsx`. L'esistenza di `Name` non garantisce uno slug univoco.
- Usare l'indice leggero e l'`Id` stabile per i Legacy; genitori con `Ranks`, overview e varianti flat vanno scelti secondo il dettaglio effettivamente raggiungibile.
- Gli elementi normali vengono deduplicati per `path`: due varianti con lo stesso URL possono far sparire un risultato. I libri usano una chiave composta distinta.
- I record finali hanno `id`, `title`, `summary`, `gameLine`, `type`, `book`, `meta`, `path`. Gli `id` `search-N` sono rigenerati: non sono identità persistenti di dominio.
- Alcune pagine generiche sono ricavate automaticamente da `PATHS`; questo non sostituisce l'aggiunta esplicita degli oggetti di una nuova famiglia.

## Testo, filtri e manuali

- `flattenText` e i campi selezionati da `getSummary` determinano cosa entra nel sommario. Un nuovo campo editoriale può richiedere un adattamento; non indicizzare tutti gli oggetti indiscriminatamente.
- Controllare `normalizeSearchText`, ranking, lunghezza minima della query e filtri quando si modifica `searchClient`.
- Conservare codici `Book`, `gameLine` e link coerenti con [bookNavigation.js](../books/bookNavigation.js): anche le pagine dei manuali consumano l'indice.
- I percorsi dei record sono interni, senza il prefisso di deploy o il frammento di `HashRouter`.

## Rigenerazione e verifica

```bash
node scripts/generate-search-index.mjs
npm test -- src/tests/searchClient.test.js src/tests/bookNavigation.test.js
```

- Avvio e build rigenerano già l'indice. Se il server era aperto durante la modifica ai dati, rigenerare manualmente e ricaricare la pagina se il client ha già memorizzato la promise dell'indice.
- I test `searchClient` verificano normalizzazione, ranking e filtri su dati di prova; non verificano tutti gli URL dell'indice reale. Ispezionare anche i record generati della famiglia toccata.
- Una variazione del numero totale di record è un indizio, non una prova di completezza. Controllare varianti, nomi duplicati e destinazioni dei link.
- Per ulteriori controlli vedere [TESTING.md](../../docs/ai/TESTING.md) e il [flusso contenuti](../../docs/ai/WORKFLOWS.md#aggiungere-o-completare-un-contenuto).
