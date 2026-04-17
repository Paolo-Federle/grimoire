# PROJECT_CONTEXT.md

## Panoramica del progetto in linguaggio naturale
`grimoire` e` una web app React statica che raccoglie e presenta contenuti enciclopedici / di consultazione organizzati per categorie di gioco. Il contenuto non sembra provenire da un backend: la fonte principale osservata sono i dataset locali in `src/Data`. L'app punta a generare molte pagine in modo coerente, con pochi componenti riusabili per liste, tabelle e pagine di dettaglio.

Accanto alla parte di consultazione esiste una `sheet` interattiva, sempre lato client, con stato condiviso via context.
La `sheet` e` da considerare una feature ancora in corso e separata concettualmente dalla wiki, ma con obiettivo dichiarato di poter sfruttare i dataset del progetto quando utile.

## Come scorrono i dati nell’app
- I dataset sono definiti in `src/Data/*`.
- Le pagine in `src/pages/*` importano dataset specifici e li passano a componenti riusabili.
- `src/App.js` monta le route statiche e molte route dinamiche generate dai dataset.
- Gli slug delle pagine dinamiche sono costruiti da utility (`slugify`) e dai campi osservati nei dati (`Name`, `Title`, `Nome`, `Titolo`, ecc.).
- Le pagine di dettaglio ricevono tipicamente l'oggetto gia` risolto via prop dal routing generato, non lo recuperano da API.
- I preferiti scorrono tramite:
  - `FavoriteToggle`
  - helper in `src/utils.jsx`
  - `localStorage`
  - pagina `favorites`
- La sheet usa:
  - `SheetDataProvider`
  - stato iniziale da `00_SheetData.jsx`
  - update immutabili tramite `sheetStateUtils.js`

## Componenti principali e responsabilita`
- `App.js`
  - definisce il routing principale;
  - genera molte route dinamiche da dataset.
- `BaseTable`
  - tabella base desktop con supporto a merge celle, preferiti, link di riga.
- `SimpleTable`
  - wrapper responsive per tabelle semplici, con variante mobile/desktop.
- `MultipleTables`
  - usato per insiemi multipli di tabelle omogenee, per esempio magie / arcana.
- `ManyHeadersTable`
  - gestisce tabelle con righe-header o strutture meno lineari.
- `Detail.jsx`
  - utility component per rendering di testo dinamico, campi etichettati e blocchi con HTML.
- `Navbar` / `Breadcrumbs`
  - navigazione globale e breadcrumbs da route.
- `Sheet/*`
  - sottosistema separato per la scheda personaggio.

## Dipendenze tra moduli
- `App.js` dipende da:
  - `PATHS`
  - pagine
  - dataset usati per route dinamiche
- Le pagine dipendono spesso da:
  - dataset locali
  - componenti tabellari condivisi
  - helper di trasformazione in `utils.jsx`
- `favorites` dipende da:
  - `FavoriteToggle`
  - utilita` di serializzazione/deserializzazione in `utils.jsx`
- La sheet dipende da:
  - `00_SheetData.jsx`
  - `05_SheetDataContext.jsx`
  - `sheetStateUtils.js`
  - componenti di input MUI e componenti row/section dedicati

## Pattern gia` presenti da rispettare
- Pattern osservato: poche astrazioni centrali per molte pagine.
- Pattern osservato: forte separazione tra dataset e rendering.
- Pattern osservato: route centralizzate con `PATHS`.
- Pattern osservato: pagine dinamiche costruite direttamente da array di dati.
- Pattern osservato: contenuti lunghi con HTML incorporato nei dati per formattazione editoriale.
- Chiarimento di progetto: i dataset piu` recenti stanno gia` andando verso strutture piu` pulite e meno dipendenti da HTML inline.
- Pattern osservato: la stessa entita` puo` avere campi diversi per lista e dettaglio.
- Pattern osservato: nella sheet esiste una struttura dati iniziale molto esplicita e annidata, da preservare.

## Aspetti sensibili da non rompere
- Routing con `HashRouter`:
  - importante per compatibilita` con deploy statico e `homepage` su GitHub Pages.
- Shape dei dataset:
  - molte utility e componenti si aspettano chiavi testuali specifiche e non uniformi.
- Rendering HTML:
- parte della formattazione dei contenuti dipende da stringhe HTML nei dataset.
- Evoluzione desiderata:
- ridurre progressivamente l'HTML direttamente nei dataset;
- preferire modelli dati piu` strutturati quando si lavora su dataset nuovi o si correggono dataset esistenti.
- Componenti tabellari condivisi:
- una modifica a questi componenti puo` impattare molte sezioni diverse.
- Preferiti:
  - dipendono da route correnti, slug e serializzazione dei dati di riga.
- Sheet:
  - aggiornamenti annidati devono rimanere immutabili per non introdurre bug silenziosi.

## Glossario rapido dei termini del progetto
- `Data`: dataset statici locali che alimentano l'app.
- `Detail page`: pagina di dettaglio generata da un item di tabella/lista.
- `PATHS`: mappa centralizzata delle route.
- `SimpleTable` / `BaseTable` / `MultipleTables` / `ManyHeadersTable`: famiglia di componenti per liste e tabelle.
- `Sheet`: scheda personaggio interattiva.
- `Favorites`: sistema di salvataggio client-side di elementi consultati.
- `LongDescription` / `Descrizione` / simili: campi lunghi, spesso renderizzati come testo ricco o blocchi dinamici.

## Domande aperte / punti incerti
- Tailwind oggi non e` usato sistematicamente, ma puo` essere adottato in modo piu` ampio.
- Non esiste una convenzione formale tra CSS custom, Tailwind e MUI; preferenza dichiarata verso Tailwind e MUI.
- La `sheet` e` una feature in corso, separata dalla wiki ma destinata a poter usare i dataset.
- La direzione desiderata sul naming e` convergere verso l'inglese standard.
- Warning build/test sono riconosciuti come debito tecnico da sistemare.
- Da verificare se alcuni file anomali di naming sono solo storici o ancora deliberati.
- Da verificare la strategia concreta di migrazione dell'HTML fuori dai dataset legacy.

## Attenzioni / Rischi / Da verificare
- `dangerouslySetInnerHTML` e` presente in piu` punti condivisi: oggi coerente con l'approccio content-driven, ma rappresenta una zona di transizione da gestire con prudenza.
- Alcuni dataset o pagine possono contenere campi con naming misto italiano/inglese.
- La migrazione verso inglese standard va fatta in modo graduale per non rompere dataset, route, utility e rendering esistenti.
- Esistono warning di build / lint osservati in precedenza; evitare di aumentarli e ridurli progressivamente.
- Esistono warning residui lato test/document object model da monitorare se si continua a lavorare sulla sheet.
- I test Playwright sono smoke test utili, ma non sostituiscono verifiche funzionali profonde su tutte le sezioni.
