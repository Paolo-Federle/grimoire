# Scheda personaggio

Ambito: `src/components/Sheet` e sottocartelle. Integra le istruzioni [generali](../../../AGENTS.md) e dei [componenti](../AGENTS.md). Usare questa guida anche quando si toccano `SheetLibrary` e `SheetEditor`. Riferimenti verificati il 2026-10-23.

## Flusso da preservare

1. [SheetLibrary.jsx](../../pages/Generale/SheetLibrary.jsx) crea/apre un record salvato.
2. [SheetEditor.jsx](../../pages/Generale/SheetEditor.jsx) carica il record e collega `onSheetDataChange` a `saveStoredSheet`.
3. [10_CharacterSheet.jsx](./10_CharacterSheet.jsx) compone provider, sezioni e modalità Play/Edit.
4. [05_SheetDataContext.jsx](./05_SheetDataContext.jsx) normalizza i dati iniziali, espone `useSheetData` e differisce l'autosalvataggio.
5. [07_SheetCatalogContext.jsx](./07_SheetCatalogContext.jsx) carica il catalogo della razza selezionata tramite [raceOptions.js](./raceOptions.js).

I percorsi pubblici sono `/sheet` e `/sheet/:sheetId`; gli URL legacy sono gestiti in `App.jsx`. Non salvare una scheda di prova nello storage personale per dimostrare un comportamento: usare dati isolati nei test.

## Aggiungere o cambiare un campo

- Controllare il modello in [00_SheetData.jsx](./00_SheetData.jsx), la normalizzazione in [sheetStorage.js](./sheetStorage.js), gli input, eventuali calcoli derivati e la modalità di visualizzazione.
- Usare updater funzionali e modifiche immutabili tramite [sheetStateUtils.js](./sheetStateUtils.js), soprattutto per percorsi annidati e array.
- `updateValueAtPath` accetta un valore o una funzione che riceve il valore corrente. Non cambiare direttamente un oggetto raggiunto tramite `getValueAtPath`.

```jsx
setSheetData((previous) =>
  updateValueAtPath(previous, ["character", "name"], nextName)
);
```

- In caso di un campo nuovo, verificare che la normalizzazione fornisca il valore predefinito ai record vecchi e conservi i campi aggiuntivi già salvati.
- Una modifica strutturale a array/oggetti richiede attenzione specifica agli import precedenti: il merge dei default non è una migrazione universale di ogni shape.
- Nei calcoli automatici confrontare valori correnti e nuovi e restituire `previous` se non cambia nulla. Evitare cicli effetto → nuovo oggetto → autosave.

## Persistenza e autosalvataggio

- Chiave locale: `grimoire_saved_sheets_v1`; versione interna: `2`; formato export: `grimoire-sheet-v1`. Non cambiare questi valori solo per allinearli nel naming.
- `normalizeSheetData` ricostruisce i default e rimuove `choices`: i cataloghi non sono parte dei dati personali da salvare.
- Il provider non salva al primo render; differisce di 400 ms gli aggiornamenti e scarica quelli pendenti allo smontaggio. Conservare questo comportamento quando cambiano callback o navigazione.
- Verificare anche il cambio di `initialData`, il passaggio tra schede e la lettura di record/file precedenti, secondo il flusso toccato.
- La libreria ha già import/export singolo; backup e ripristino dell'intera libreria sono attività diverse. Non sovrascrivere tutte le schede per implementare l'import di una.

## Play/Edit e cataloghi

- La modalità passa da `SheetViewProvider`/`useSheetView`; `settings.view_mode` conserva la scelta, con fallback a `settings.default_view` e poi Play.
- Preservare la distinzione tra valori permanenti protetti in Play e risorse/tracker modificabili durante il gioco. Controllare un input equivalente prima di applicare `disabled` o `readOnly`.
- Nuove opzioni dipendenti dalla razza vanno confrontate con `raceOptions.js`, `sheetMeritData.js`, `sheetSpellData.js`, `sheetResourceData.js` e gli helper specifici interessati.
- Conservare caricamento differito, cache dei cataloghi e protezione dai risultati asincroni della razza precedente. Etichette mostrate e valori salvati possono essere diversi, come per gli ID Legacy.
- La sheet può usare i dataset wiki senza copiarli dentro ciascun record salvato.

## Verifiche mirate

- Context, cataloghi e normalizzazione: `infrastructureImprovements.test.jsx`.
- Modalità e persistenza della vista: `SheetViewPersistence.test.jsx`; input e sezioni dinamiche: `SelectInput.test.jsx`, `CategoryContainer.test.jsx`.
- Meriti: `SheetMeritData.test.js`, `SheetMeritAspects.test.jsx`; risorse/tracker: `SheetTrackers.test.jsx`, `DerivedStatsSection.test.jsx`.
- Per forme Werewolf, Arcana, specializzazioni, dadi o XP scegliere le suite dedicate nella [mappa dei test](../../../docs/ai/TESTING.md).
- Gli smoke browser sheet esistenti cercano ancora la vecchia UI. Creare/aprire una scheda nella libreria, usare i tab correnti e verificare il ricaricamento del record quando si valuta il salvataggio.
