# Table component consolidation analysis

## Goal

Create one table system that can replace most current table components while preserving the existing data-driven page structure, route behavior, favorites behavior, mobile cards, and editorial styling.

This is an analysis and planning file, not an implementation spec carved in stone. The main purpose is to make the next pass safer: decide which table cases should be aligned under one component, and which ones should stay intentionally special.

## Current scope

This pass is table-focused.

Data cleanup is a later workstream. Some datasets clearly could be better arranged, but the first table consolidation should work with the current page-level filtering and current data shapes. The table API should make those cases easier to express through clear props, without forcing a data migration immediately.

## Confirmed direction

- Mobile tables should keep the same core behavior as desktop: favorites and row/detail links should work consistently.
- Grouped tables should support collapsible groups on mobile.
- Some group labels are only visual labels, but some group labels are links to additional content. The unified model must support both.
- The new table does not need to preserve the current look exactly. It can improve consistency, especially column width, spacing, and alignment.
- Special action-heavy pages such as `OggettiOcculti` can remain local for now.
- Direct `BaseTable` usage should be reduced where possible. The preferred direction is one shared table component that handles flat rows, grouped rows, and page-filtered datasets.
- Page-level filtering/transformation is still acceptable and desirable. The issue is not that pages prepare data; the issue is that similar preparation is done inconsistently when pages have lots of data or only a few rows.
- Overview rows such as discipline or contract group rows should be able to participate in favorites and search. Exact search behavior may later depend on whether the user searches by group, single power/clause, or full text.
- Special rendering cases are usually easy to spot because they use `ManyHeadersTable`, `MultipleTables`, `CombinationTable`, or local table code instead of the simpler `SimpleTable`/`BaseTable` path.
- The unified component should expose easy props for common layout behavior: title, accordion/collapsible section, grouped rendering, group label links, favorites, row links, mobile collapse, and optional intro text.
- Grouping should not require fake objects. The table should support groups derived from repeated row values, page-level arrays, or explicit group metadata.
- Some grouped data needs the group itself to hold content, links, favorites, or search metadata; disciplines and contracts are the clearest examples.

## Data-shape findings

Some table complexity is not only in the components. A few data files contain objects whose main purpose is to control table rendering rather than represent the same kind of row as the entries around them.

For this phase, these are not instructions to clean the data immediately. They are notes explaining why the unified table needs flexible props and adapters.

### Section/overview rows embedded in datasets

Examples:
- `src/Data/Vampire/DisciplineData.jsx`
- `src/Data/Changeling/ContractData.jsx`
- likely related files used by `ManyHeadersTable`, such as bloodlines, covenants, kiths, courts, gifts, psychic merits, and thaumaturgy merits.

Observed pattern:
- A dataset contains normal rows plus special rows that behave as section headers.
- These special rows often use sentinel values such as `"N/A"` in fields checked by `headerCheckFields`.
- They may still carry real descriptive/detail data, especially disciplines and contracts.

Example shape from disciplines:

```js
{
  Name: "Animalism",
  Rank: "N/A",
  Cost: "",
  Description: "",
  Discipline: "Animalism",
  Book: "VtR 115",
  LongDescription: [...]
}
```

This row is not a normal discipline power. It is an overview/header for the discipline group, but it also has meaningful detail-page content.

Example shape from contracts:

```js
{
  Name: "Contracts of the Board",
  Rank: "N/A",
  FullCost: "N/A",
  Cost: "N/A",
  Dice Pool: "N/A",
  Catch: "N/A",
  Description: "N/A",
  Book: "N/A",
  FullDescription: [...]
}
```

This row exists so the table can render a contract-family heading, but it also contains the family description.

Former example:
- `src/Data/Vampire/ClanData.jsx` previously had fake divider rows such as `Name: "Restricted"` and `Name: "Historical"` only to make `ManyHeadersTable` split the display.
- That was a simple cleanup candidate, not a real grouped-content case.
- It has been split into `clanData`, `restrictedClanData`, and `historicalClanData`, and `src/pages/Vampire/Clan.jsx` can use three `SimpleTable` instances.

Second cleanup example:
- `src/Data/Vampire/BloodlineData.jsx` previously had fake rows such as `Name: "Daeva"` with `Nickname: "N/A"` only to divide bloodlines by parent clan.
- This can also be cleaned immediately.
- The data has been split into `genericBloodlineData`, `daevaBloodlineData`, `gangrelBloodlineData`, `mekhetBloodlineData`, `nosferatuBloodlineData`, `ventrueBloodlineData`, `juliiBloodlineData`, and `unknownBloodlineData`.
- Each real bloodline row now has a `Clan` key for data/search/filter use, while the page passes explicit headers so `Clan` is not shown in the table.
- A combined `bloodlineData` export remains for sheet/options compatibility.

### Why this matters

If a new unified table only reproduces `headerCheckFields`, it will preserve behavior but keep the rendering hack embedded in the data model.

If the new table expects clean groups immediately, it will require data migration before component migration.

The safer approach is two-phase:
- First, support the current mixed-row datasets through table props/adapters.
- Later, discuss data cleanup separately and migrate datasets only where it helps readability and maintenance.

### Possible future data model for grouped content

This is not for the first table-focused pass. It is a future cleanup direction.

For cases where the group heading is also content, a cleaner future shape could use explicit group metadata:

```js
{
  title: "Animalism",
  summary: {
    Book: "VtR 115",
    LongDescription: [...]
  },
  rows: [
    {
      Name: "Feral Whispers",
      Rank: "•",
      Cost: "-",
      Description: "Speak with animals",
      Book: "VtR 115"
    }
  ]
}
```

For cases where the heading is only visual:

```js
{
  title: "Restricted",
  rows: [
    {
      Name: "Akhud",
      Nickname: "",
      Disciplines: "Celerity, Praestantia, Obfuscate",
      Book: "VII 32"
    }
  ]
}
```

This would eventually remove the need for dummy `"N/A"` values and make rendering choices explicit.

### Good current grouped storage example

Files:
- `src/Data/Geist/ManifestationData.jsx`
- `src/components/ManifestationCombination.jsx`

`ManifestationsKeysData` is a good example of data that is already arranged around the real domain model instead of visual table needs.

Observed shape:

```js
{
  Manifestation: "Boneyard",
  Key: "Cold Wind",
  Attribute: "Wits",
  Skill: "Occult",
  Summary: "...",
  Ranks: [
    { dot: 1, summary: "...", content: [...] },
    { dot: 2, summary: "...", content: [...] }
  ],
  Book: "GTS 115"
}
```

Why it is good:
- The top-level object represents a real combination: one Manifestation plus one Key.
- Nested `Ranks` represent real child rows/details.
- The data does not need dummy separator rows.
- It can support non-table UI naturally, such as selecting a manifestation and key before reading rank details.

Important distinction:
- The storage model is good.
- The current rendering is an edge-case interactive explorer and should not be forced into the general table component.
- The unified table can learn from this grouped/nested shape, but `ManifestationCombination` can remain a specialized UI.

### Dataset classification useful for table props

For each current `ManyHeadersTable` dataset, classify section rows enough to choose table props:
- `content-group`: the header row has real detail/description content and may need a detail route, favorite, or searchable entry.
- `visual-group`: the header row is only a visual divider and should not be treated like a content item.
- `linked-visual-group`: the header row is primarily a visual divider, but its label should link to additional content.
- `mixed`: some header rows are real content and some are dividers.

Initial guesses:
- `DisciplineData.jsx`: likely `content-group`.
- `ContractData.jsx`: likely `content-group`.
- `ClanData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports.
- `BloodlineData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports and adding a hidden `Clan` key.
- `VampireMeritsData.jsx`: likely normal flat rows unless transformed elsewhere.

The unified table plan should include this classification as rendering config, otherwise the component may accidentally make visual labels favorite-able or make real overview content disappear.

The target model should therefore allow group metadata like:

```js
{
  title: "Restricted",
  link: "/vampire/clans/restricted",
  labelKind: "linked-visual-group",
  rows: [...]
}
```

and also:

```js
{
  title: "Animalism",
  labelKind: "content-group",
  summary: { LongDescription: [...], Book: "VtR 115" },
  link: "/vampire/disciplines/animalism",
  rows: [...]
}
```

## Current table families

### `SimpleTable`

Files:
- `src/components/SimpleTable.jsx`
- `src/components/SimpleTable/DesktopSimpleTable.jsx`
- `src/components/SimpleTable/MobileSimpleTable.jsx`
- `src/components/BaseTable.jsx`

Role:
- Primary flat dataset renderer.
- Infers headers from the first row unless `headers` is passed.
- Supports optional section title with collapse.
- Supports `upperText` blocks above the table.
- Supports mobile card layout.
- Supports first-cell routing through `activeRowLink`.
- Supports favorites through `BaseTable` on desktop.
- Supports `BookLink`.
- Supports simple row-span merging through `mergeHeaders`, currently desktop-only.

Observed issues:
- Desktop and mobile do not have full feature parity: mobile does not render favorites for `SimpleTable`, and does not support `mergeHeaders`.
- Collapse state, route handling, book rendering, first-cell linking, and responsive choice are duplicated in other components.
- `window.innerWidth` is read directly in render/setup paths; it works client-side but is less consistent than a shared responsive hook.

### `BaseTable`

Role:
- Lower-level desktop table renderer.
- Used directly by detail pages and by `SimpleTable`.

Observed issues:
- It is not purely primitive because it owns navigation, favorites, `BookLink`, and row-span behavior.
- Direct use from detail pages is valid, but it means table behavior is split between "page-level" and "base-level" APIs.

### `ManyHeadersTable`

Files:
- `src/components/ManyHeadersTable/ManyHeadersTable.jsx`
- `src/components/ManyHeadersTable/DesktopManyHeadersTable.jsx`
- `src/components/ManyHeadersTable/MobileManyHeadersTable.jsx`

Role:
- Renders datasets where some rows are really section/header rows.
- Header rows are detected by `headerCheckFields`: all listed fields equal `"N/A"`.
- Header row display content is pulled from `alternateData`.
- Normal rows display under these section rows.
- Mobile treats section rows as collapsible group headers.

Typical users:
- Vampire disciplines, clans, covenants, bloodlines, merits.
- Changeling contracts, courts, kiths.
- Werewolf gifts.
- Psychic and Thaumaturgy merits.

Observed issues:
- Conceptually this is not "many headers"; it is a grouped/sectioned table.
- The section-detection rule is implicit and tied to sentinel values in the dataset.
- It duplicates `BookLink`, favorites, first-cell link behavior, responsive rendering, and section collapse.
- Some pages pass `activeRowLink={false}` but still carry `prereqForLink`, so the API has some noise.

### `MultipleTables`

File:
- `src/components/MultipleTables.jsx`

Role:
- Renders one logical section containing multiple row groups, each with its own displayed header row.
- Used by Mage spells and Mage arcana.
- Data shape is array-of-arrays: `listOfRows`.
- `displayHeaders` is an array of header label arrays.
- `tableFields` maps visible columns to object keys.

Observed issues:
- Very similar cell behavior to the other table components.
- The grouping model is different from `ManyHeadersTable`: groups are outside the rows instead of encoded as sentinel/header rows.
- Good candidate for unification if the new component accepts a normalized `groups` model.

### `CombinationTable`

File:
- `src/components/CombinationTable.jsx`

Role:
- Generic nested parent/child table for rows with a nested array field such as `Ranks`.
- Appears currently unused by pages.

Observed issues:
- It solves a real shape: parent rows plus child detail rows.
- It may be a good future mode for Geist keys/haunts or similar rank-based content, but it should not drive the first consolidation unless a live page needs it.

### Local special tables

Known case:
- `src/pages/Generale/OggettiOcculti.jsx` defines `StyledOccultTable`.

Role:
- Has page-specific action controls, randomization state, and simple static display.

Initial recommendation:
- Keep the randomization logic page-local.
- The display part could later use the unified table via a `headerAction`/`toolbar` prop, but this should be low priority.

### Structured content inline tables

File:
- `src/components/StructuredContent.jsx`

Role:
- Renders tables embedded in structured content blocks.

Initial recommendation:
- Do not force this into the first unified table API unless we want all rich-content tables to inherit app-level favorites/link behavior.
- It can share a lower-level cell/table primitive later.

## Proposed unified model

Create one public component, tentatively named `DataTable`.

Recommended location:
- `src/components/DataTable/DataTable.jsx`

Suggested internal pieces:
- `DataTableSection.jsx` or section rendering helpers.
- `DesktopDataTable.jsx`
- `MobileDataTable.jsx`
- `tableModel.js` for normalizing rows/groups/columns.
- `tableCells.jsx` for rendering book links, arrays, inline content, links, favorites.
- `useIsMobile.js` or a small shared media-query hook.

The component should support two equivalent input styles:

1. Flat rows, for current `SimpleTable` use:

```jsx
<DataTable
  title="Merits"
  rows={rows}
  columns={["Name", "Cost", "Book"]}
  rowLink={{ enabled: true, field: "link" }}
/>
```

2. Groups, for current `MultipleTables` and cleaner future replacements for `ManyHeadersTable`:

```jsx
<DataTable
  title="Death"
  columns={[
    { key: "Titolo", label: "Death 1" },
    { key: "DescrizioneBreve", label: "Description" },
    { key: "Aspect" },
    { key: "Cost" },
    { key: "Arcana" },
    { key: "Book" },
  ]}
  groups={[
    { title: "Death 1", rows: deathOneData },
    { title: "Death 2", rows: deathTwoData },
  ]}
  rowLink={{ enabled: true, field: "link" }}
/>
```

For migration compatibility, a wrapper or adapter can also accept legacy names temporarily:
- `table` -> `rows`
- `headers` -> `columns`
- `activeRowLink` -> `rowLink.enabled`
- `mergeHeaders` -> `mergeColumns`
- `upperText` -> `intro`
- `listOfRows` + `displayHeaders` + `tableFields` -> `groups` + `columns`

In plainer terms, this means the old component names can keep working during migration while they delegate to the new shared implementation. For example, `SimpleTable` could remain importable by existing pages, but internally render `DataTable`. This reduces risk because pages can be converted gradually instead of all at once.

## Features the unified component should own

- Section title and collapse.
- A simple `title` prop that can render the title and optionally make the table section behave like an accordion, matching the current `SimpleTable` pattern.
- Optional intro/upper text with the existing link/string behavior.
- Header inference from row data, excluding `link`.
- Explicit column config with `{ key, label, render, hideOnMobile }`.
- `Book` field rendering through `BookLink`.
- Array value rendering with comma join.
- First-cell favorite toggle, controlled by `enableFavorites`.
- First-cell route link, controlled by a single `rowLink` config.
- Link precondition, replacing `prereqForLink`.
- Group labels that can be plain, linked, favorite-able/searchable content, or simple dividers.
- Desktop table rendering.
- Mobile card rendering.
- Optional mobile grouped collapses.
- Row span/merge behavior where it is still wanted.
- Empty state.
- Optional header/toolbar action for cases like randomize buttons.

## Cases likely safe to align

These should probably become straightforward `DataTable` usages:
- Most pages currently using `SimpleTable`.
- Detail-page tables currently using `BaseTable`.
- Favorites page grouped tables.
- `Mummy/Utterances` and similar `mergeHeaders` tables, after confirming mobile behavior.
- Mage `Spells` and `Arcana`, if `groups` is accepted as a first-class model.

## Edge Case Review

This section tracks cases that should be checked with Paolo before implementation. The goal is to decide whether each one is a legitimate table feature or a data/page cleanup candidate.

### Confirmed legit edge cases

#### Mummy utterances

Files:
- `src/pages/Mummy/Utterances.jsx`
- `src/Data/Mummy/UtterancesData.jsx`

Current rendering:
- Uses `SimpleTable` with `mergeHeaders`.
- Example: `Awaken the Dead` appears several times with different `Tier` values.
- `mergeHeaders={["Name", "Book"]}` makes the repeated `Name` and `Book` cells appear once across adjacent tier rows.

Classification:
- Legit table edge case.

Reason:
- This is not just a visual divider workaround. The repeated name identifies one utterance with multiple tier expressions.
- It is a clean example of grouping without fake divider objects.
- A unified table should support this as either merged columns or a grouped-row presentation.
- Unlike disciplines/contracts, this group currently does not need to hold its own overview data. It only groups child rows.

Implementation note:
- Prefer a grouping prop over thinking of this only as merged cells.
- Possible names: `groupBy`, `groupRepeatedBy`, or `mergeColumns`.
- The table needs two group styles:
  - group label only, for utterances;
  - group label plus content metadata, for disciplines/contracts.
- Mobile can either repeat the values or show one card group per utterance. The first implementation can preserve desktop behavior and keep mobile simple.

### Likely legit edge cases

#### Mummy style merits

Files:
- `src/pages/Mummy/MummyMerits.jsx`
- `src/Data/Mummy/MummiesMeritsData.jsx`

Current rendering:
- `MummiesStyleMeritsData` uses `mergeHeaders={["Name", "Book"]}`.

Current read:
- Probably similar to utterances: one named style/merit with multiple row entries.
- Likely legit, but should be checked after inspecting whether the repeated `Name` rows are true sub-entries or could become separate simple tables.

#### Mage spells and arcana

Files:
- `src/pages/Mage/Spells.jsx`
- `src/pages/Mage/Arcana.jsx`
- `src/Data/Mage/Arcana/*Data.jsx`

Current rendering:
- Uses `MultipleTables`.
- The page prepares arrays of rows split by dot/rank, then renders repeated header blocks inside one table section.

Current read:
- Legit grouped table case.
- Current `MultipleTables` behavior is obsolete and should become a `DataTable` groups API rather than a special component.
- The missing concept is an easy way to classify rows by Arcana level/dot rating and render those classes as table groups.

Possible future props:

```jsx
<DataTable
  title="Death"
  groups={[
    { title: "Death 1", rows: deathOneData },
    { title: "Death 2", rows: deathTwoData },
  ]}
  columns={[
    { key: "Titolo", label: "Name" },
    { key: "DescrizioneBreve", label: "Description" },
    { key: "Aspect" },
    { key: "Cost" },
    { key: "Arcana" },
    { key: "Book" },
  ]}
  rowLink={{ enabled: true, field: "link" }}
/>
```

Alternative future props if the page keeps flat rows:

```jsx
<DataTable
  title="Death"
  rows={deathSpells}
  groupBy={(spell) => spell.ArcanaLevel}
  groupLabel={(level) => `Death ${level}`}
  columns={spellColumns}
  rowLink={{ enabled: true, field: "link" }}
/>
```

Question:
- For arcana/spells, should the page continue preparing arrays per dot level, or should the table accept a flat spell list plus a `groupBy` function/key?

#### Vampire disciplines

Files:
- `src/pages/Vampire/Disciplines.jsx`
- `src/Data/Vampire/DisciplineData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Section rows are detected through fields such as `Rank: "N/A"` or `Book: "N/A"`.
- Overview rows like `Animalism` contain real long-form content and should remain favorite-able/searchable/linkable.

Current read:
- Legit grouped content.
- This is a key pilot for group labels that are also content entries.

Needed table behavior:
- Group header can render as a dark/strong row.
- Group header can have a link.
- Group header can be favorite-able.
- Child rows can also link when they have detail content.

#### Changeling contracts

Files:
- `src/pages/Changeling/Contracts.jsx`
- `src/Data/Changeling/ContractData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Overview rows like `Contracts of the Board` contain family description content.
- Some sections have note paragraphs between tables.

Current read:
- Legit grouped content.
- Similar to disciplines, but more varied because universal, court, goblin, and unclassified contracts use different headers.

Needed table behavior:
- Same as disciplines, plus per-table column configs.
- Keep page-level notes outside the table.

#### Werewolf gifts

Files:
- `src/pages/Werewolf/Gifts.jsx`
- `src/Data/Werewolf/GiftData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Many rows with `Rank: "N/A"` appear to name gift lists, followed by ranked gift rows.

Current read:
- Likely legit grouped table.
- Most group labels look visual rather than rich content, but they are meaningful domain groups.

Potential issue to verify later:
- At least one area around `Spirit's Silence, The` has a row with `Rank: "N/A"` that appears to be an actual power-like row, not a group label. This may be data cleanup later, not a blocker for table consolidation.

#### Psychic powers and Thaumaturgy merits

Files:
- `src/pages/MortalsAndTemplates/Lesser templates/Psychics.jsx`
- `src/pages/MortalsAndTemplates/Lesser templates/Thaumaturgy.jsx`
- `src/Data/Mortal/Lesser templates/PsychicMeritsData.jsx`
- `src/Data/Mortal/Lesser templates/ThaumaturgyData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Rows like `Extrasensory Perception`, `Mediumist`, `Psychokinetic`, and `Telepathy` mark groups for related merits.

Current read:
- Likely legit grouped table if those group labels are useful categories.
- They may be visual-only group labels unless later expanded with content.

Needed table behavior:
- Group label without row link/favorite by default.
- Easy switch if a group label later gets content.

### Needs confirmation

#### Vampire bloodlines

Files:
- `src/pages/Vampire/Bloodline.jsx`
- `src/Data/Vampire/BloodlineData.jsx`

Resolution:
- Cleanup candidate, not a table edge case.
- Split into parent-clan arrays plus `genericBloodlineData`.
- Add `Clan` to each object for data use.
- Render as multiple `SimpleTable` instances with headers that hide `Clan`.

#### Vampire covenants

Files:
- `src/pages/Vampire/Covenant.jsx`
- `src/Data/Vampire/CovenantData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Group rows include labels such as `Antagonistic`, `Uncommon`, `Broken`, and `Alternate`.

Current read:
- Could be legitimate grouping, but it is close to the old `ClanData` problem.
- Because there are only a handful of groups, it might also work as several `SimpleTable`s.

Question:
- Are these covenant group labels domain categories that should stay inside one grouped table, or would this be cleaner as separate tables?

#### Vampire merits

Files:
- `src/pages/Vampire/VampireMerits.jsx`
- `src/Data/Vampire/VampireMeritsData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Group rows include `Carthian Merits`, `Invictus Merits`, `Ordo Dracul Merits`.

Current read:
- Likely legitimate grouped table or separate simple tables. Both are reasonable.

Question:
- Do covenant-specific merit headers belong inside one table, or should these be split into normal table datasets later?

#### Changeling courts

Files:
- `src/pages/Changeling/Court.jsx`
- `src/Data/Changeling/CourtData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Group rows include labels such as `Seasonal Courts of the Americas`, `Faraway CourtsSeasonal Variants`, and `Directional Courts of Asia`.

Current read:
- Likely legitimate grouped table because the labels are taxonomy/context, not just accidental dividers.

Question:
- Should court family labels be visual-only headers, or should they eventually become linkable/content entries?

#### Changeling kiths

Files:
- `src/pages/Changeling/Kith.jsx`
- `src/Data/Changeling/KithData.jsx`

Current rendering:
- Uses `ManyHeadersTable`.
- Group rows include seeming labels such as `Beasts`, `Darklings`, and likely other seeming categories.

Current read:
- Legit grouped table if the goal is scanning kiths by seeming.
- Could also be split into separate tables, but one grouped table seems more ergonomic.

Question:
- Should kith seeming labels stay as visual group headers?

### Known special case to keep local

#### Manifestations and keys

Files:
- `src/pages/Promethean/Manifestation.jsx`
- `src/components/ManifestationCombination.jsx`
- `src/Data/Geist/ManifestationData.jsx`

Current rendering:
- Uses a dedicated interactive component, not a normal table.
- The user selects a Manifestation and a Key, then sees the relevant combination and rank details.

Classification:
- Keep as a special UI for now.

Reason:
- This is not just a table with unusual headers. It is a combination/explorer interface for two dimensions of data.
- `ManifestationsKeysData` is a good storage model, but the UI itself is not a general table pattern.
- If a table view is later needed, `DataTable` could render the same data as grouped/nested rows, but that should be separate from replacing table components.

#### Oggetti occulti

Files:
- `src/pages/Generale/OggettiOcculti.jsx`

Current rendering:
- Local `StyledOccultTable` with randomization action.

Classification:
- Keep local for now.
- It can use shared table pieces later if useful, but it should not drive the unified table design.

## Cases that need product/domain decisions

### Section rows from `ManyHeadersTable`

Question:
- Should rows with sentinel values like `"N/A"` continue to be stored directly inside datasets as visual section rows?
- When those rows contain real content, such as discipline or contract overview text, should they be treated as group metadata, standalone detail entries, or both?
- When section rows are mostly visual labels but also link somewhere, how should favorites/search/detail behavior work?

Options:
- Keep the dataset shape for now and add a `sectionRows` adapter in `DataTable`.
- Normalize these datasets into explicit `groups` before rendering.
- Leave `ManyHeadersTable` as a special component until those datasets are cleaned.

Initial recommendation:
- Support an adapter during migration, but aim for explicit `groups` long-term. The grouped model is clearer and easier to test than detecting section rows by `"N/A"`.
- Do not treat every section row the same. Some are real domain content; others are only visual labels.
- Add explicit group label behavior: visual-only label, linked visual label, and content group.
- For the table-focused phase, do not require data cleanup. Use props to describe the current row behavior.

### Mobile behavior for grouped tables

Question:
- Should grouped tables always collapse child rows on mobile, as `ManyHeadersTable` does today?

Options:
- Always collapse grouped mobile sections.
- Let each table choose with `mobileGroupsInitiallyOpen` or `collapsibleGroups`.
- Keep flat mobile cards for simple grouped data like Mage spells.

Initial recommendation:
- Make grouped mobile collapse configurable. Some dense power lists benefit from collapsed groups; spell ranks may be easier if groups are just visible headings.
- Default grouped mobile sections to collapsible. Keep an option to start groups open for pages where scanning all rows is more useful.

### Favorites on mobile

Question:
- Should mobile `SimpleTable` cards show the same favorite toggle as desktop?

Initial recommendation:
- Yes. This is an alignment fix rather than a special case.
- Confirmed direction: mobile should keep favorites and link behavior.

### Row-span merging on mobile

Question:
- Should `mergeHeaders` have a mobile equivalent?

Plain explanation:
- `mergeHeaders` is the current prop used by some tables to visually merge repeated adjacent values in desktop table cells.
- Example: if several consecutive rows have the same `Name` and `Book`, the desktop table can show those cells once with a taller cell instead of repeating the same text in every row.
- Current examples are in `src/pages/Mummy/Utterances.jsx` and `src/pages/Mummy/MummyMerits.jsx`.

Options:
- Ignore merge behavior on mobile and show repeated values.
- Hide repeated merged values after the first card in a group.
- Convert merged columns into visual group headings.

Initial recommendation:
- Treat `mergeHeaders` as the current visual implementation of a broader grouping need.
- For a unified component, repeated values are the safest first mobile behavior.
- Long term, a grouped transform can make these cleaner.

### Inline HTML in cell values

Question:
- Should the unified table render legacy HTML inside cell strings?

Current state:
- Several details and data fields already rely on HTML rendering elsewhere.
- Current table cells mostly render strings directly, so embedded HTML in table cells may show as text unless handled by a detail renderer.

Initial recommendation:
- Do not broaden `dangerouslySetInnerHTML` by default. Add a per-column renderer or `renderHtml: true` for confirmed columns only.

## Suggested migration strategy

1. Build `DataTable` as a new component without deleting old components.
2. Add focused tests for table behavior:
   - flat rows;
   - first-cell route link;
   - favorites presence;
   - `BookLink`;
   - mobile card rendering;
   - grouped rows from explicit `groups`;
   - grouped rows from `groupBy`;
   - groups with metadata/content;
   - groups without metadata/content;
   - legacy section-row adapter;
   - merge columns.
3. Create a table inventory for every `ManyHeadersTable`/`MultipleTables` input and classify the rendering behavior needed: plain group label, linked group label, content group, mobile collapse, row links, favorites.
4. Convert `SimpleTable` to be a compatibility wrapper around `DataTable`.
5. Convert direct `BaseTable` usages to `DataTable` or make `BaseTable` a desktop-only internal renderer.
6. Convert `MultipleTables` to a compatibility wrapper around grouped `DataTable`.
7. Convert one `ManyHeadersTable` page as a pilot, preferably one with limited data and no detail links.
8. Convert one content-bearing grouped page as a second pilot, probably disciplines or contracts, to verify that overview rows still work.
9. After the table pilots, pause before data cleanup and discuss which datasets should be rearranged.
10. Only then remove old table components.

## Better analysis instructions for the next pass

Before implementation, collect a table inventory with these fields:
- page file;
- component used;
- dataset imported;
- visible columns;
- has explicit headers;
- has `activeRowLink`;
- has `upperText`;
- has `mergeHeaders`;
- has grouped/section rows;
- group label type: none, visual, linked visual, content, mixed;
- has mobile-specific expectations;
- has local action controls;
- page-level data filtering/transformation;
- detail route target if linked.

Recommended command starting points:

```powershell
rg "<SimpleTable|<ManyHeadersTable|<MultipleTables|<BaseTable" src/pages src/components -n
rg "mergeHeaders|upperText|activeRowLink|headerCheckFields|alternateData|listOfRows|displayHeaders|tableFields" src/pages src/components -n
```

For `ManyHeadersTable` datasets, inspect the actual rows and classify whether section rows are real domain objects or only visual dividers.

Also inspect whether the section row exists only because of the renderer. Good warning signs:
- many fields set to `"N/A"`;
- fields duplicated only to satisfy headers;
- empty `Description` but populated long-form content;
- section title stored in the same key as normal row titles;
- row should not behave like the row below it for favorites/search/detail routing.
- row label should link to extra content but should not behave like a normal child row.

For page-level filtering, do not treat all differences as a problem. Filtering in the page file is acceptable when it makes the page readable and keeps dataset shape intact. The follow-up analysis should identify inconsistent transforms only when they produce different table behavior for equivalent cases.

For Mage `Spells` and `Arcana`, inspect whether the rank group title should be a table header label, a group heading, or both.

For detail-page tables, verify whether favorites should appear. Current `BaseTable` means they usually do appear, but detail tables may not always need favorites.

## Questions for Paolo

Resolved:
- Discipline and contract overview rows should be able to be favorite-able/searchable content, although search behavior may later vary by search mode.
- Mobile should keep favorites and link behavior.
- Grouped mobile sections should support collapse.
- `OggettiOcculti` can stay a special local table for now.
- The table UI may improve width, spacing, and column consistency instead of preserving the exact current look.
- The current page-level data filtering approach is acceptable; the unified table should reduce inconsistent rendering APIs, not forbid page-level data preparation.
- `src/Data/Vampire/ClanData.jsx` was a bad grouped-table case and can be cleaned immediately by splitting data into `clanData`, `restrictedClanData`, and `historicalClanData`.
- `src/Data/Vampire/BloodlineData.jsx` was also a cleanup case and can be split into generic/parent-clan arrays, with a hidden `Clan` key on each row.

Still open:
1. For arcana/spells, should grouping be supplied as arrays per level, or should the table accept a flat list plus `groupBy`?
2. For `src/pages/Mummy/Utterances.jsx`, should desktop keep the exact merged-cell look, or is a clearer grouped-section look acceptable?
3. During migration, should old imports like `SimpleTable` and `ManyHeadersTable` keep working while they internally call the new shared `DataTable`, or do you prefer changing page imports directly as each page is migrated?
