# AGENTS.md

## Scopo del progetto
- `grimoire` e` un'app React statica orientata alla consultazione di contenuti.
- I contenuti principali sono nel repository, soprattutto in `src/Data`, non arrivano da un backend osservato nel progetto.
- L'app genera molte pagine e viste dinamiche a partire da dataset locali, con forte attenzione a omogeneita` delle pagine e riuso di pochi componenti.
- Parte del progetto include anche una `sheet` interattiva per il personaggio, gestita lato client.

## Stack tecnologico
- React 18
- React Router DOM 6
- `react-scripts` (Create React App) per sviluppo/build
- Material UI (`@mui/material`, `@mui/icons-material`, `@emotion/*`)
- Tailwind CSS presente nel progetto e candidabile a uso piu` esteso
- CSS custom in `src/css`
- Jest + Testing Library per test React
- Playwright per smoke test / test di navigazione
- Deploy statico osservato verso GitHub Pages tramite `gh-pages`

## Struttura del progetto
- `src/App.js`: composizione principale delle route.
- `src/pages/*`: pagine per sezioni e sottosezioni del dominio.
- `src/Data/*`: dataset statici usati per generare liste e dettagli.
- `src/components/*`: componenti riusabili per tabelle, dettagli, navbar, breadcrumbs, sheet.
- `src/components/Sheet/*`: sottosistema della scheda personaggio.
- `src/utils.jsx`: utility generiche, slug, preferiti e helper vari.
- `src/pages/path.js`: costanti `PATHS` usate dal routing.
- `tests/*`: suite Playwright.
- `public/*`: asset pubblici standard CRA.

## Convenzioni di naming
- Convenzione osservata: file pagina e componenti in PascalCase, spesso con nomi descrittivi del dominio (`Vampire`, `DisciplinesDetail`, `UniversalMeritsDetail`).
- Convenzione osservata: molte cartelle sono organizzate per linea tematica o "razza" (`Vampire`, `Mage`, `Werewolf`, `Changeling`, ecc.).
- Convenzione osservata: i dataset hanno chiavi eterogenee (`Name`, `Title`, `Nome`, `Titolo`), quindi il codice spesso gestisce piu` varianti.
- Convenzione osservata nella sheet: prefisso numerico nei file (`15_AttributesSection.jsx`, `30_AttributeRow.jsx`) per ordinare blocchi/componenti.
- Esistono alcune anomalie di naming gia` presenti nel repo:
  - `src/pages/Vampire/DevotionsDetail .jsx`
  - `src/components/Sheet/Common/32_DynamicInput.jsx.jsx`
  - cartelle con spazi come `Lesser templates`
- Non normalizzare questi nomi in modo opportunistico senza richiesta esplicita: potrebbero avere impatti sugli import.

## Convenzioni per componenti, hooks, utility, API/service layer
- Componenti:
  - privilegiare componenti riusabili e generici per liste, tabelle e dettagli;
  - prima di creare un nuovo componente, verificare se il caso rientra gia` in `SimpleTable`, `BaseTable`, `MultipleTables`, `ManyHeadersTable`, `Detail`.
- Hooks:
  - non e` presente un layer esteso di custom hooks;
  - hook osservato e centrale: `useSheetData()` per la sheet.
- Utility:
  - utilita` trasversali in `src/utils.jsx`;
  - utilita` specifiche della sheet in `src/components/Sheet/sheetStateUtils.js`.
- API / service layer:
  - non osservato un vero service layer;
  - non osservate chiamate API applicative nel progetto;
  - trattare il progetto come app content-driven statica finche' non emerge altro.

## Gestione dello stato
- App principale:
  - stato per lo piu` locale ai componenti tramite `useState`;
  - routing con `HashRouter` in `src/index.js`.
- Preferiti:
  - salvati in `localStorage` tramite helper in `src/utils.jsx`;
  - comunicazione con evento custom `favorites:changed`.
- Sheet:
  - stato condiviso tramite `SheetDataProvider` e `useSheetData()`;
  - struttura iniziale in `src/components/Sheet/00_SheetData.jsx`;
  - aggiornamenti annidati da fare in modo immutabile usando `sheetStateUtils.js`.

## Gestione delle chiamate API
- Nessuna chiamata API applicativa osservata.
- Non introdurre fetch/service layer "per pulizia architetturale" se non serve davvero a una feature richiesta.
- Se in futuro vengono introdotte API, documentare separatamente perche' oggi il progetto e` principalmente statico e locale.

## Styling / UI system
- Styling misto:
- CSS custom in `src/css`
- utility class Tailwind presenti in molte view/componenti
- Material UI per controlli, icone e theme
- Tema MUI osservato in `src/css/muiTheme.js`.
- Chiarimento di progetto:
- Tailwind oggi non e` usato in modo sistematico, ma puo` essere esteso anche in modo piu` completo.
- Non esiste una convenzione formale tra CSS custom, Tailwind e MUI.
- Preferenza dichiarata: privilegiare Tailwind e MUI rispetto a nuovo CSS custom, salvo casi specifici.
- Convenzione osservata:
- contenuto editoriale e tabelle con forte riuso di markup semplice;
- la UI non e` costruita su un design system formale separato.
- Preservare l'aspetto uniforme delle pagine gia` esistenti: meglio estendere pattern esistenti che introdurre un nuovo linguaggio visivo.

## Regole di modifica del codice
- Preservare struttura, route e shape dei dati esistenti.
- Procedere con modifiche piccole e locali.
- Riutilizzare i componenti gia` presenti prima di introdurne di nuovi.
- Se un componente riceve dati/props non usati immediatamente, non eliminarli senza verificare se servono ad altre viste, tabelle o dettagli.
- Nei flussi della sheet usare aggiornamenti immutabili; evitare mutazioni profonde dirette.
- Quando si toccano route o link:
  - verificare `PATHS` in `src/pages/path.js`;
  - verificare compatibilita` con `HashRouter`;
  - ricordare che il deploy osservato usa `homepage: /grimoire/`.
- Quando si tocca rendering di testo ricco:
- rispettare il pattern esistente basato su HTML incorporato nei dati;
- preferire boundary condivise invece di moltiplicare `dangerouslySetInnerHTML` in nuovi punti;
- tenere presente la direzione desiderata del progetto: progressiva riduzione dell'HTML direttamente nei dataset, soprattutto nei dataset piu` nuovi.

## Cose da non fare
- Non rifattorizzare l'architettura generale senza richiesta esplicita.
- Non sostituire in massa i componenti tabellari con nuove astrazioni.
- Non trasformare il progetto in un'app "API-first" o "state-managed" senza bisogno reale.
- Non rimuovere campi dai dataset perche' sembrano ridondanti: molti dati sono usati in liste e dettagli diversi.
- Non normalizzare naming/file path anomali senza verificare gli import.
- Non cambiare `HashRouter` in `BrowserRouter` senza considerare il deploy statico su GitHub Pages.
- Non introdurre una sanitizzazione aggressiva del contenuto HTML senza verificare l'impatto sulla formattazione editoriale gia` presente.
- Non migrare in massa inglese/italiano o naming dei dati senza un lavoro mirato e controllato: l'obiettivo dichiarato e` convergere verso l'inglese standard, ma con cambiamenti progressivi.

## Checklist prima di proporre modifiche
- La modifica rispetta i componenti gia` separati?
- Sto riusando un pattern gia` presente invece di introdurne uno nuovo?
- Sto preservando la shape dei dati passati ai componenti?
- Ho verificato se la pagina nasce da dataset in `src/Data`?
- Ho controllato `PATHS` e i link generati?
- Se tocco la sheet, sto aggiornando lo stato in modo immutabile?
- Se tocco la sheet, sto preservando il fatto che e` una feature separata dalla wiki ma con possibile accesso ai dataset?
- Se tocco test:
- Jest deve riflettere route/componenti reali;
- Playwright deve testare l'app, non siti esterni.

## Comandi utili
- `npm start`
- `npm run build`
- `npm test -- --watchAll=false`
- `npx playwright test tests/example.spec.js --project=chromium`
- `npx playwright test tests/table-detail-pages.spec.js --project=chromium`
- `npm run deploy`

## File/cartelle importanti
- `src/App.js`
- `src/index.js`
- `src/pages/path.js`
- `src/utils.jsx`
- `src/components/Detail.jsx`
- `src/components/BaseTable.jsx`
- `src/components/SimpleTable.jsx`
- `src/components/Sheet/00_SheetData.jsx`
- `src/components/Sheet/05_SheetDataContext.jsx`
- `src/components/Sheet/sheetStateUtils.js`
- `tests/example.spec.js`
- `tests/table-detail-pages.spec.js`
- `playwright.config.js`

## Note per lavorare in sicurezza su questo progetto
- Il progetto e` fortemente data-driven: piccoli cambiamenti a utility comuni o componenti tabellari possono avere impatti molto ampi.
- Le chiavi dei dataset non sono uniformi; verificare sempre i nomi effettivi dei campi.
- Il rendering HTML nei contenuti e` una scelta gia` presente e funzionale al progetto statico; trattarlo con cautela.
- Direzione dichiarata: nel tempo i dataset dovrebbero contenere meno HTML inline e modelli dati piu` puliti, ma senza rotture improvvise dei contenuti esistenti.
- La sheet e` una feature ancora in corso e concettualmente separata dalla wiki, ma dovrebbe poter attingere ai dataset quando serve.
- Direzione dichiarata su naming e lingua: convergere verso l'inglese standard.
- Warning di build e test non sono considerati accettabili a regime: vanno ridotti e sistemati progressivamente.
- La copertura test e` di tipo smoke/integrativo, non di business logic estesa.
- Attenzioni / Rischi / Da verificare:
- molti dettagli di pagina usano `dangerouslySetInnerHTML`;
- esistono file/path anomali con spazi o doppie estensioni;
- sono presenti warning residui in Jest/React Router e alcuni warning ESLint in build, da sistemare;
- la presenza contemporanea di CRA, Tailwind, CSS custom e MUI richiede cautela su stile e regressioni visive.
