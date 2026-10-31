# Componenti condivisi

Ambito: `src/components` e sottocartelle. Integra le [regole del repository](../../AGENTS.md); per la scheda valgono anche le istruzioni più specifiche in [Sheet/AGENTS.md](./Sheet/AGENTS.md). Riferimenti verificati il 2026-10-23.

## Prima di ampliare un componente

- Cercare tutti i consumatori e le combinazioni di props realmente usate. Una modifica di default può raggiungere molte linee di gioco.
- Estendere il componente esistente quando il comportamento è comune; mantenere locali le interazioni specifiche di un solo dominio.
- Conservare le props e i dati necessari ad altri consumatori, anche se la pagina su cui si lavora non li mostra.
- Per scegliere test e pagine campione usare [TESTING.md](../../docs/ai/TESTING.md), senza creare test che ripetano soltanto l'implementazione.

## Tabelle

- `SimpleTable` sceglie flat/ranked e desktop/mobile; `BaseTable` è il renderer desktop flat; `TableGroup` raggruppa tabelle sorelle.
- Il `title` di `SimpleTable` può essere testo o un elemento React: preservare i link dei titoli, usati ad esempio nei gruppi dei preferiti, senza convertirli in stringa.
- Le differenze tra genitore con `Ranks` e raggruppamento visivo sono descritte nella [guida tabelle](../../TABLE_COMPONENT_ANALYSIS.md). Non reintrodurre componenti rimossi o props storiche.
- Verificare i quattro renderer in `SimpleTable/` quando cambia un comportamento comune: link, preferiti, valori vuoti, array, rank e riferimenti ai manuali.
- La prima colonna determina titolo/link dei preferiti; cambiare ordine o label delle colonne può influenzare i dati salvati.
- `TableGroup.titleLink` risolve i percorsi relativi rispetto alla route corrente. Usare un percorso assoluto interno quando la destinazione non è figlia della pagina.
- Le tabelle editoriali in `StructuredContent` non devono ereditare automaticamente le azioni delle tabelle di consultazione.

## Testo ricco

- [Detail.jsx](./Detail.jsx) espone helper per i dettagli; [ContentBlockList.jsx](./ContentBlockList.jsx) gestisce anche i vecchi blocchi con tabelle nominate.
- [StructuredContent.jsx](./StructuredContent.jsx) è il renderer condiviso per blocchi e contenuti inline; [Content.ts](./Content.ts) documenta il modello.
- `InlineContent` conserva testo, enfasi e a capo delle stringhe legacy. Non è un renderer completo di HTML strutturale.
- Per nuove strutture preferire i blocchi supportati. Se emerge un limite generico, correggere il boundary condiviso e verificarne i consumatori invece di duplicare parsing nelle pagine.
- Non appiattire oggetti editoriali in stringhe: si possono perdere tabelle, liste o note. Per le magie verificare anche la suite `SpellDetail`.
- Per dettagli narrativi a due colonne riusare [BalancedColumns.jsx](./BalancedColumns.jsx), già usato da Path, ordini e Legacy Mage: bilanciamento automatico su desktop, sequenza singola su mobile e scroll della pagina. Non imporre altezza fissa o scroll separati alle colonne; lasciare spezzare le sezioni lunghe, mantenendo insieme titoli e testo seguente e, quando possibile, tabelle e voci brevi. Le tabelle larghe hanno uno scroll orizzontale contenuto nella colonna.

## Caricamento, preferiti e stato

- `LazyDetailRoute` riceve loader/resolver dalla configurazione di `App.jsx`; mantenere callback stabili e impedire che una risposta di una navigazione precedente sovrascriva quella corrente.
- Conservare le distinzioni tra caricamento, errore con retry e contenuto non trovato. Un oggetto mancante non è un errore di rete.
- `FavoriteToggle` usa [favoritesStore.js](../favoritesStore.js), condiviso tramite `useSyncExternalStore`; evitare letture/scritture locali duplicate dello stesso storage.
- In test jsdom impostare il contesto necessario (`MemoryRouter`, provider sheet) seguendo esempi reali nelle suite. I componenti responsive leggono anche `window.innerWidth`.
- Per stato, storage, Play/Edit e calcoli della sheet proseguire nella [guida locale](./Sheet/AGENTS.md).
