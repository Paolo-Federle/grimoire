# Tabelle: stato corrente e guida di manutenzione

Ultima verifica: 2026-10-22. Questa guida aggiorna la precedente analisi di consolidamento: separa i pattern implementati dalle proposte ancora aperte. Le vecchie ipotesi di un componente `DataTable` non sono un'API disponibile né un piano da eseguire automaticamente.

Regole generali in [AGENTS.md](./AGENTS.md), contesto dell'app in [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

## Quale pattern usare

| Caso | Dati | Rendering corrente | Esempi |
| --- | --- | --- | --- |
| Elenco semplice | Array di righe reali | `SimpleTable` | Meriti, equipaggiamento, clan/covenant |
| Oggetto con progressione | Genitore con array `Ranks` | `SimpleTable` ranked | Discipline, doni, famiglie di contratti, utterance |
| Più tabelle sorelle | Array distinti per livello/tipo | `TableGroup` con `SimpleTable` | Arcana, rituali Crúac/Theban Sorcery, Transmutations |
| Tabelle indipendenti sulla stessa pagina | Pool distinti senza gerarchia comune | Più `SimpleTable` | Armi, strumenti, categorie di meriti |
| Tabella editoriale dentro una descrizione | Blocco `type: "table"` | `StructuredContent` | Magie e descrizioni lunghe |
| Esploratore con interazioni specifiche | Modello di dominio dedicato | Componente locale | Combinazioni Manifestation/Key, oggetti occulti casuali |

Una famiglia con contenuto proprio non è un separatore grafico. Un livello Arcana che raccoglie molte magie non è il genitore di una progressione. Non forzare questi casi nella stessa shape.

## Componenti effettivamente presenti

- `src/components/SimpleTable.jsx`: ingresso responsive, titolo richiudibile, introduzione, selezione flat/ranked.
- `src/components/SimpleTable/DesktopSimpleTable.jsx` e `MobileSimpleTable.jsx`: tabella desktop e card mobile flat.
- `src/components/SimpleTable/DesktopRankedSimpleTable.jsx` e `MobileRankedSimpleTable.jsx`: genitori/figli; sul mobile i gruppi sono richiudibili.
- `src/components/SimpleTable/rankedTableUtils.js`: rilevamento `Ranks`, colonne e normalizzazione dei valori figli.
- `src/components/BaseTable.jsx`: renderer desktop con `BookLink`, preferiti e link nella prima colonna; usato anche nei dettagli e nei blocchi legacy.
- `src/components/TableGroup.jsx`: contenitore di tabelle sorelle, con titolo, eventuale link e apertura/chiusura.

`ManyHeadersTable`, `MultipleTables` e `CombinationTable` sono stati rimossi. `mergeHeaders`, `headerCheckFields`, `alternateData`, `listOfRows` e `tableFields` non sono props del `SimpleTable` attuale. Non ripristinare righe sentinella `N/A` o vecchi import per imitare i separatori delle UI precedenti.

## `SimpleTable`: contratto corrente

Props principali:

- `table`, `headers`, `title`, `upperText`, `maxWidth`, `className`.
- `activeRowLink`: abilita il collegamento della prima cella quando la riga ha `link`.
- `titleVariant="nested"`: titolo secondario per tabelle dentro un gruppo.
- `rankedField="Ranks"`: campo dei figli, rilevato automaticamente.
- `rankedParentHeaders`: selezione/mappatura dei campi mostrati sul genitore.
- `rankHeader="Rank"`, `summaryHeader="Summary"`, `nestedRankField="dot"`, `nestedSummaryField="summary"`: adattamento dei campi ranked.

La scelta mobile avviene sotto 768 px. I due layout conservano preferiti, link e riferimenti ai manuali. Il renderer desktop flat delega a `BaseTable`, che chiama la prop dei link `onRowClick`.

Passare `headers` espliciti quando le righe includono descrizioni lunghe, gruppi, chiavi tecniche o campi non visibili: le colonne inferite dalle chiavi del primo oggetto non sono uno schema editoriale affidabile.

Esempio di elenco:

```jsx
<SimpleTable
  title="Merits"
  table={rows}
  headers={["Name", "Prerequisites", "Description", "Book"]}
  activeRowLink
/>
```

`rows` deve già contenere i `link` corretti; il componente non costruisce da solo le route di dettaglio.

## Genitori con `Ranks`

Esempio rappresentativo, con nomi/campi da adattare al dataset reale:

```js
{
  Name: "Animalism",
  Book: "VtR 115",
  LongDescription: [/* blocchi editoriali */],
  link: "/vampire/disciplines/animalism",
  Ranks: [
    {
      Name: "Feral Whispers",
      Rank: "•",
      Description: "Speak with animals",
      Book: "VtR 115",
      link: "/vampire/disciplines/feral_whispers"
    }
  ]
}
```

- Il genitore conserva descrizione, identità e metadati; i figli mantengono i propri campi, fonti e link.
- `rankedParentHeaders={["Name"]}` permette di mostrare solo il nome del genitore, mantenendo tutte le colonne sui figli.
- I contratti di Court usano anche `rankedParentHeaders={["Name", "Dice Pool"]}`: controllare la pagina prima di uniformare queste props.
- `dot` numerico viene convertito in `•` quando manca il campo `Rank`; `summary` può alimentare `Summary`. `formatRankValue` produce già il carattere corretto, quindi la vecchia correzione del mojibake non è un lavoro ancora da applicare al formatter.
- Per le utterance preservare `Tier` e i prerequisiti, senza rinominarli automaticamente in `Rank`.
- Export flat derivati o conservati restano necessari per resolver, ricerca e selettori della sheet. Non eliminarli dopo aver migrato la sola tabella.
- Preferiti e link di genitori e figli dipendono dai metadati passati dal chiamante: non creare URL se il contenuto di dettaglio non esiste.

## Tabelle sorelle con `TableGroup`

```jsx
<TableGroup title="Death" defaultExpanded>
  <SimpleTable title="Death 1" table={deathOneRows} headers={headers} titleVariant="nested" activeRowLink />
  <SimpleTable title="Death 2" table={deathTwoRows} headers={headers} titleVariant="nested" activeRowLink />
</TableGroup>
```

Il wrapper supporta `children` oppure `sections` con contenuti/rendering dedicati, `subtitle`, `defaultExpanded`, `collapsible` e `titleLink`.

- Un `titleLink` che inizia con `/` è un percorso interno assoluto; uno relativo è accodato alla route corrente.
- Collegare il titolo solo a destinazioni esistenti. Con un link, il testo del titolo naviga e il controllo con l'icona apre/chiude il gruppo.
- `collapsible={false}` mantiene la cornice senza interazione accordion.
- Note introduttive e paragrafi tra tabelle possono restare nel gruppo, fuori dalle singole tabelle.
- Il wrapper gestisce la gerarchia visiva; i preferiti appartengono alle righe delle tabelle.

## Migrazioni già applicate

| Famiglia/file | Stato verificato |
| --- | --- |
| `src/Data/Vampire/DisciplineData.jsx` e `src/pages/Vampire/Disciplines.jsx` | Discipline universali, Coils, bloodline e altre discipline usano genitori con `Ranks`; overview Crúac/Theban Sorcery separate e rituali flat per rank in `TableGroup`; export aggregati/flat mantenuti |
| `src/Data/Werewolf/GiftData.jsx` e `src/pages/Werewolf/Gifts.jsx` | Liste di doni con figli in `Ranks`; `giftFlatData` mantiene la vista flat |
| `src/Data/Changeling/ContractData.jsx` e `src/pages/Changeling/Contracts.jsx` | Famiglie Universal, Seeming, Court, minor Court e Goblin nominate con `Ranks`; Goblin non classificati restano flat e sono raggruppati per rank nella pagina |
| `src/pages/Mage/Arcana.jsx`, `Arcanum.jsx`, `arcanaTableData.js` | Preparazione condivisa in `ARCANA_SETS`/`buildSpellRows`; `Arcana` usa `TableGroup`, il singolo `Arcanum` usa `SimpleTable` per livello; le righe sono copie con link sotto `/mage/arcana` |
| `src/Data/Mage/PathData.jsx`, `PathDetailData.js`, `src/pages/Mage/Path.jsx` | Cinque righe flat con header espliciti e dettagli lazy su `/mage/path/:slug`; contenuti del PDF separati dall'indice leggero usato dalla sheet, campi storici e identità dei preferiti preservati |
| `src/Data/Mage/OrderData.jsx`, `OrderDetailData.js`, `src/pages/Mage/Order.jsx` | Sei righe flat con header espliciti; cinque dettagli lazy su `/mage/order/:slug` dal PDF, Seers senza link. Indice della sheet, alias Free Council/Council of Free Assemblies e identità dei preferiti preservati |
| `src/Data/Mummy/UtterancesData.jsx` e `src/pages/Mummy/Utterances.jsx` | Genitori con `Ranks`, collegamenti ai dettagli e varianti `*FlatData`; non è più un caso `mergeHeaders` |
| `src/Data/Mummy/MummiesMeritsData.jsx` e `src/pages/Mummy/MummyMerits.jsx` | Style merits con `Ranks` e contenuti per grado; `MummiesStyleMeritsFlatData` mantiene le righe flat. Tutte le sezioni collegano il dettaglio su `/mummy/merits/:slug`, incluso il culto; ricerca e resolver usano le stesse identità |
| `src/pages/Promethean/Transmutations.jsx` | Classi di trasmutazioni in `TableGroup` con `SimpleTable` e link disambiguati mediante classe/manuale |
| `src/pages/Hunter/Endowments.jsx` | Pool in `SimpleTable`; Teleinformatics e Goetic Gospel sono già dati ranked, non vecchie continuazioni implicite di tabelle senza titolo |

Altri separatori grafici sono già stati tolti dai dataset e sostituiti con pool reali:

- Clan: `clanData`, `restrictedClanData`, `historicalClanData`.
- Bloodline: pool per clan più gruppo generico; `Clan` resta disponibile come metadato e `bloodlineData` aggrega i consumatori esistenti.
- Covenant: pool main/antagonistic/uncommon/broken/alternate e aggregato `covenantData`.
- Vampire merits: pool general/Carthian/Invictus/Ordo Dracul e aggregato compatibile.
- Kith: pool per Seeming, campo `Seeming` e fonti `Book`; l'effetto è nel campo `Blessing effect`.
- Court: pool per famiglia di Court e liste aggregate di sole righe reali.
- Psychic merits: pool base, ESP, Mediumist, Psychokinetic, Telepathic.
- Thaumaturgy: meriti generali separati da quelli rituali, con export combinato compatibile.

Queste migrazioni non sono candidati ancora da approvare o da ripetere. Prima di modificare un export, cercarne anche gli utilizzi nella sheet e nell'indice di ricerca.

## Contenuti editoriali e tabelle nei dettagli

- `StructuredContent` rende `paragraph`, `heading`, `list`, `line`, `table`; per l'enfasi usare `InlineContent`.
- `ContentBlockList` mantiene compatibilità con blocchi di tabelle nominate e delega a `BaseTable`; `Detail.jsx` espone gli helper per le pagine.
- `InlineContent` interpreta il vecchio HTML inline tramite `DOMParser`, convertendolo in nodi React per testo, grassetto, corsivo e a capo.
- Non ci sono usi di `dangerouslySetInnerHTML` in `src` alla verifica corrente; i vecchi suggerimenti di conversione di singole pagine da quel fallback sono superati.
- Non sono supportati blocchi `html`, `tableRef` o placeholder `[TABLE1]` come API del renderer attuale. Le tabelle complesse devono essere incorporate come blocchi `table`.
- Una tabella editoriale in `StructuredContent` non aggiunge automaticamente i preferiti. `BaseTable`, invece, li mostra nella prima colonna: preservare questa distinzione quando si cambia un dettaglio.
- Non passare oggetti di contenuto strutturato alle celle flat aspettandosi il rendering di blocchi: scegliere un renderer esistente adeguato.

La guida specifica dei contenuti delle magie è [ArcanaContentMigrationAnalysis.md](./src/Data/Mage/Arcana/ArcanaContentMigrationAnalysis.md).

## Decisioni da conservare e casi speciali

- Preferiti e collegamenti devono restare disponibili sul mobile, compresi i gruppi ranked.
- I titoli di dominio con contenuto proprio possono avere dettaglio, ricerca e preferiti; i soli separatori visivi non devono diventare oggetti indicizzati.
- La preparazione dei dati nella pagina è accettata. Uniformare comportamenti equivalenti senza imporre una nuova struttura a ogni dataset.
- L'interfaccia può migliorare larghezze, spazi e allineamenti mantenendo lo stile comune del progetto.
- `src/components/ManifestationCombination.jsx`, usato da `src/pages/Promethean/Manifestation.jsx`, resta un esploratore specializzato per Manifestation/Key. Il percorso del file è storico; le route del dominio sono Geist.
- `src/pages/Generale/OggettiOcculti.jsx` conserva la tabella locale con azioni casuali. Quella logica non deve guidare un rifacimento generale delle tabelle.

## Lavoro ancora aperto

- Filtri/ordinamento e conservazione del contesto lista → dettaglio sono nel backlog; vanno progettati distinguendo flat, ranked e gruppi di tabelle.
- `src/pages/Mummy/Affinities.jsx` usa ancora tabelle indipendenti dopo il titolo Pillar affinities. Un `TableGroup` può essere valutato se migliora la gerarchia, senza cambiare i dati per ragioni solo visive.
- `src/pages/Geist/Memento.jsx`, `src/pages/Mummy/Relic.jsx` e `src/pages/Mummy/Judges.jsx` possono essere valutati allo stesso modo; non sono migrazioni necessarie solo perché contengono più tabelle.
- Rimane una decisione di prodotto l'eventuale rimozione dei preferiti dalle sotto-tabelle di dettaglio che oggi usano `BaseTable`; mantenere il comportamento corrente in assenza di una richiesta mirata.
- L'eventuale unificazione ulteriore sotto `DataTable` rimane una proposta architetturale. Estendere prima i componenti esistenti secondo le regole del progetto.
- Estendere la copertura browser per ranked, mobile e gruppi: la suite tabella/dettaglio non abilita ancora tutte le famiglie.

Le vecchie domande sul mantenimento delle celle unite nelle utterance e sulla classificazione dei Goblin non classificati sono superate dall'implementazione attuale, descritta sopra.

## Verifica di una modifica alle tabelle

Cercare i consumatori reali prima di cambiare un contratto condiviso:

```powershell
rg -n '<SimpleTable|<BaseTable|<TableGroup' src/pages src/components
rg -n 'rankedParentHeaders|rankedField|activeRowLink|titleLink' src/pages src/components
rg -n 'FlatData|Ranks|__favKey' src/Data src/search src/components/Sheet
```

Per ogni pagina coinvolta controllare colonne visibili, genitori/figli, fonti `Book`, link di dettaglio, preferiti e apertura/chiusura desktop/mobile. Se cambia la shape, verificare anche resolver in `src/App.jsx`, indice di ricerca e cataloghi della sheet.

`npm test` verifica anche infrastruttura, dati e contenuti editoriali. Per navigazione usare Playwright sull'app locale; `tests/table-detail-pages.spec.js` abilita al momento Locations, Derangements e Universal Merits. Le altre famiglie commentate non sono coperte da quella suite. Per i comandi e i limiti dei test sheet vedere [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md#verifiche-e-limiti-noti).
