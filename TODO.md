# Backlog

Revisione dello stato: 2026-10-22. Per architettura e funzionalità già presenti vedere [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

## Contenuti e schede

- [ ] Modificare dati delle tabelle per magie e Legacy (voce da precisare: contenuti Arcana strutturati, preparazione condivisa delle tabelle Arcana e indice/dettagli Legacy separati sono già presenti).

- [ ] Completare [Lista NPCs](https://docs.google.com/spreadsheets/d/1n3TviHt7TZUBlDEIlorn8wctGTnP6kQ78GhIhby079s/edit?gid=0#gid=0).

- [ ] Schede per PNG non editabili.
- [x] Schede editabili con salvataggio locale, libreria, duplicazione e import/export della singola scheda.
- [ ] Completare descrizione breve dei numina.

## Miglioramenti funzionali approvati

- [x] Ricerca globale nei contenuti della wiki: barra nella navbar e nella home, ricerca contestuale nelle pagine principali delle linee di gioco, suggerimenti rapidi e pagina completa con filtri per linea, tipologia e manuale.
- [ ] Filtri e ordinamento nelle tabelle, iniziando da alcune pagine pilota e gestendo separatamente tabelle semplici, raggruppate e ranked.
- [ ] Conservare il contesto di navigazione tra tabelle e dettagli: filtri, ordinamento, sezioni aperte e posizione di scorrimento.
- [x] Navigazione per manuale, con pagina di dettaglio del libro, introduzione editoriale, sintesi progressive dei capitoli e contenuti della wiki collegati automaticamente.
- [ ] Completare backup e trasferimento delle schede: esportazione di tutte le schede, ripristino con merge/replace, validazione e gestione degli errori di salvataggio.

## Manutenzione tecnica rilevata nella revisione del 2026-10-22

- [ ] Correggere l'URL Playwright predefinito con lo slash finale `/grimoire/` in configurazione e helper dei test; verificare il timeout di avvio automatico del server rispetto all'host `127.0.0.1` atteso dalla configurazione.
- [ ] Riallineare gli scenari sheet di `tests/example.spec.js` alla libreria `/sheet`, all'editor `/sheet/:sheetId` e ai nomi correnti delle sezioni; gli scenari cercano ancora tracker nella libreria e tab `Page 2`.
- [ ] Ampliare gli smoke test tabella/dettaglio alle famiglie ranked e ai layout mobile; oggi diverse famiglie sono commentate in `tests/table-detail-pages.spec.js`.
- [ ] Ridurre i chunk di contenuto più voluminosi segnalati da Vite (oltre 500 kB minificati), preservando il caricamento differito già presente.
