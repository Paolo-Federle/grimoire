# Guida di ingresso per gli agenti AI

Struttura aggiornata il 2026-10-23. Iniziare dalle [regole generali](../../AGENTS.md) e leggere il [contesto del progetto](../../PROJECT_CONTEXT.md) per capire i consumatori coinvolti nella modifica.

## Scegliere la guida necessaria

| Se si lavora su… | Istruzioni locali |
| --- | --- |
| Dataset, identità, gerarchie e contenuti editoriali | [src/Data/AGENTS.md](../../src/Data/AGENTS.md) |
| Liste, dettagli e collegamenti tra pagine | [src/pages/AGENTS.md](../../src/pages/AGENTS.md) |
| Tabelle, rendering condiviso e feedback dei dettagli | [src/components/AGENTS.md](../../src/components/AGENTS.md) |
| Stato, cataloghi, Play/Edit e persistenza della scheda | [src/components/Sheet/AGENTS.md](../../src/components/Sheet/AGENTS.md) |
| Indicizzazione, ricerca e collegamenti ai manuali | [src/search/AGENTS.md](../../src/search/AGENTS.md) |

Gli `AGENTS.md` locali integrano quelli dei livelli superiori per il proprio sottoalbero. Una modifica trasversale richiede di leggere le guide delle aree effettivamente toccate; le istruzioni della sheet sono pertinenti anche alle sue pagine di ingresso.

## Procedure e approfondimenti

- [WORKFLOWS.md](./WORKFLOWS.md): percorsi operativi per contenuti, tabelle, routing e scheda, con una mappa dei sintomi frequenti.
- [TESTING.md](./TESTING.md): suite pertinenti, comandi, limiti e uso corretto degli smoke browser.
- [TABLE_COMPONENT_ANALYSIS.md](../../TABLE_COMPONENT_ANALYSIS.md): contratto corrente delle tabelle e migrazioni già applicate.
- [ArcanaContentMigrationAnalysis.md](../../src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md): struttura editoriale delle magie e casi da conservare.
- [TODO.md](../../TODO.md): attività aperte e debiti noti; non sostituisce l'ispezione del codice.
- [README del progetto](../../README.md): installazione, avvio, build e deploy.

## Quale fonte aggiornare

| Informazione | Dove mantenerla |
| --- | --- |
| Strumenti e comandi disponibili | `package.json` e configurazioni; documentarli nel README |
| Regole trasversali e vincoli di progetto | `AGENTS.md` alla radice |
| Architettura, flussi e stato osservato | `PROJECT_CONTEXT.md` |
| Vincoli di un sottosistema | Il suo `AGENTS.md` locale |
| Passi che attraversano più sottosistemi | `WORKFLOWS.md` |
| Scelta dei test e limiti della copertura | `TESTING.md` |
| Attività da fare e proposte non implementate | `TODO.md` e sezioni future delle guide specialistiche |

I dati e il codice definiscono il comportamento corrente. Una proposta storica non è una funzionalità già disponibile; un test riuscito non dimostra la correttezza di tutti i dati. Conservare date e condizioni delle verifiche invece di presentarne l'esito come permanente.

## Manutenzione della struttura

- Aggiornare la guida pertinente insieme ai cambiamenti di componenti condivisi, route, schema dati, storage o tooling.
- Collegare esempi reali del repository, con link relativi portabili, invece di copiare grandi frammenti di codice destinati a invecchiare.
- Mantenere un solo punto di approfondimento per ogni tema; usare rimandi nelle altre guide.
- Annotare i limiti osservati e separare attività già concluse, lavoro aperto e decisioni future.
- Per dati e contenuti del gioco mantenere distinte correzioni editoriali e modifiche strutturali.

```bash
npm run check:docs
```

Il controllo verifica i link Markdown locali e le ancore nei documenti del repository, senza accedere a siti esterni. Non dimostra che una descrizione architetturale sia ancora corretta: quella richiede il confronto con il codice.
