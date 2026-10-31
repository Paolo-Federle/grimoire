# Scegliere le verifiche

Mappa verificata il 2026-10-23 contro file e configurazioni, senza rinnovare automaticamente gli esiti delle esecuzioni precedenti. Gli esiti datati dell'audit sono nel [contesto del progetto](../../PROJECT_CONTEXT.md#verifiche-e-limiti-noti). Per le regole generali vedere [AGENTS.md](../../AGENTS.md).

## Comandi e proporzione delle verifiche

```bash
npm run check:docs
npm test
npm run build
```

- Per sole guide e riferimenti: controllo documentale e `git diff --check`.
- Per una correzione locale: suite esistente pertinente e controllo del contenuto/comportamento coinvolto.
- Per componenti condivisi, route o schema della sheet: ampliare ai consumatori coinvolti e, quando cambia codice applicativo condiviso, a suite completa e build.
- Per navigazione e comportamento responsive: verifica browser delle pagine campione, oltre ai test pertinenti.
- Non aggiungere test per ogni ritocco reversibile né verifiche che riscrivano l'implementazione. Nuovi test devono proteggere un comportamento significativo.

`npm test` esegue `vitest run`; non passare l'opzione Jest `--watchAll=false`. I test React/dati sono selezionati in `src/tests`; i test Playwright in `tests` sono separati.

## Mappa delle suite esistenti

| Area modificata | Suite da considerare in `src/tests` |
| --- | --- |
| Routing, home, accesso editor e feedback dei dettagli | [App.test.jsx](../../src/tests/App.test.jsx), [infrastructureImprovements.test.jsx](../../src/tests/infrastructureImprovements.test.jsx) |
| Identità canoniche, ID e dettagli Legacy | [canonicalIdentityKeys.test.js](../../src/tests/canonicalIdentityKeys.test.js), [LegacyData.test.js](../../src/tests/LegacyData.test.js) |
| Contenuti Arcana e renderer editoriale | [SpellDetail.test.jsx](../../src/tests/pages/Mage/SpellDetail.test.jsx), [infrastructureImprovements.test.jsx](../../src/tests/infrastructureImprovements.test.jsx) |
| Path Mage, dettagli dal PDF, lista e collegamenti del lessico | [PathDetail.test.jsx](../../src/tests/pages/Mage/PathDetail.test.jsx), [MageArcanaAffinities.test.jsx](../../src/tests/MageArcanaAffinities.test.jsx) |
| Ordini Mage, dettagli dal PDF, alias Free Council, lista, preferiti e lessico | [OrderDetail.test.jsx](../../src/tests/pages/Mage/OrderDetail.test.jsx) |
| Mana dal PDF, esclusione Wisdom, link Mage/lessico e catalogo Energy pools accessibile da Traits | [Mana.test.jsx](../../src/tests/pages/Mage/Mana.test.jsx) |
| Manuali, contenuti editoriali e collegamenti | [BookDetail.test.jsx](../../src/tests/BookDetail.test.jsx), [BookDetailData.test.js](../../src/tests/BookDetailData.test.js), [bookNavigation.test.js](../../src/tests/bookNavigation.test.js) |
| Normalizzazione, ranking e filtri di ricerca | [searchClient.test.js](../../src/tests/searchClient.test.js) |
| Cataloghi, normalizzazione sheet, autosave e preferiti | [infrastructureImprovements.test.jsx](../../src/tests/infrastructureImprovements.test.jsx) |
| Modalità Play/Edit e persistenza della vista | [SheetViewPersistence.test.jsx](../../src/tests/SheetViewPersistence.test.jsx) |
| Meriti e aspetti della scheda | [SheetMeritData.test.js](../../src/tests/SheetMeritData.test.js), [SheetMeritAspects.test.jsx](../../src/tests/SheetMeritAspects.test.jsx) |
| Input, categorie e specializzazioni | [SelectInput.test.jsx](../../src/tests/SelectInput.test.jsx), [CategoryContainer.test.jsx](../../src/tests/CategoryContainer.test.jsx), [SkillSpecialties.test.jsx](../../src/tests/SkillSpecialties.test.jsx) |
| Tracker, risorse e valori derivati | [SheetTrackers.test.jsx](../../src/tests/SheetTrackers.test.jsx), [DerivedStatsSection.test.jsx](../../src/tests/DerivedStatsSection.test.jsx) |
| Affinità Arcana e forme Werewolf | [MageArcanaAffinities.test.jsx](../../src/tests/MageArcanaAffinities.test.jsx), [WerewolfForms.test.jsx](../../src/tests/WerewolfForms.test.jsx) |
| Dadi ed esperienza | [DiceRoller.test.jsx](../../src/tests/DiceRoller.test.jsx), [ExperienceSection.test.jsx](../../src/tests/ExperienceSection.test.jsx) |

Esempio di passata mirata:

```bash
npm test -- src/tests/infrastructureImprovements.test.jsx src/tests/SheetViewPersistence.test.jsx
```

Leggere le asserzioni reali: la presenza di una suite in questa tabella non implica la copertura di ogni caso dell'area.

## Generazione e build

- `prebuild` rigenera già l'indice di ricerca. Se cambia solo il builder o un dataset indicizzato, è possibile eseguire direttamente `node scripts/generate-search-index.mjs` e ispezionare i record interessati.
- Il numero di risultati non dimostra che link, varianti e fonti siano corretti. I test di `searchClient` usano dati di prova, non l'intero indice generato.
- `vite build` verifica la compilazione ma non esegue ESLint: non c'è uno script `lint` corrente.
- L'avviso sui chunk minificati oltre 500 kB è un debito noto; non alzare la soglia solo per nasconderlo e non dichiarare una build senza warning se ricompare.

## Playwright in locale

La configurazione attuale richiede lo slash finale nella variabile dell'URL per raggiungere correttamente la base Vite. In PowerShell:

```powershell
$env:PLAYWRIGHT_APP_BASE = 'http://127.0.0.1:3000/grimoire/'
npx playwright test tests/example.spec.js --project=chromium --grep 'home page exposes the main entry points' --reporter=line
```

Se l'avvio automatico del server va in timeout, aprire un terminale per:

```bash
npm start -- --host 127.0.0.1
```

Lasciarlo in esecuzione e ripetere il comando Playwright nell'altro terminale: fuori da CI la configurazione riusa il server. Per un controllo su un URL diverso, verificare anche le impostazioni `webServer` in [playwright.config.js](../../playwright.config.js); cambiare la sola variabile non riconfigura il server che Playwright avvia.

Per le tabelle attualmente abilitate:

```powershell
$env:PLAYWRIGHT_APP_BASE = 'http://127.0.0.1:3000/grimoire/'
npx playwright test tests/table-detail-pages.spec.js --project=chromium
```

## Limiti e prove manuali mirate

- [example.spec.js](../../tests/example.spec.js) contiene scenari sheet ancora legati ai tracker su `/sheet` e ai vecchi tab `Page 2`. Non usare la passata della sola home come prova del funzionamento della sheet.
- [table-detail-pages.spec.js](../../tests/table-detail-pages.spec.js) abilita Locations, Derangements e Universal Merits; altre famiglie sono commentate. Non copre tutte le pagine ranked o mobile.
- Per una famiglia nuova: controllare il link dalla lista, l'accesso diretto al dettaglio e una route inesistente; per nomi duplicati controllare ogni variante distinta.
- Per tabelle condivise: campionare flat, ranked e `TableGroup` su desktop/mobile, con preferiti e riferimenti `Book`.
- Per persistenza sheet: creare una scheda in un contesto isolato, modificare il valore interessato, navigare/ricaricare e verificare il record riaperto. Per Play/Edit controllare sia valori permanenti sia tracker modificabili durante il gioco.
- Separare nel resoconto le verifiche eseguite da quelle consigliate o non disponibili. Le attività di riallineamento sono nel [backlog](../../TODO.md).
