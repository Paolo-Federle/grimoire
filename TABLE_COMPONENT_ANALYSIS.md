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
- Sectioned tables currently fall into two major patterns:
  - alphabetical buckets inside a fixed rank/level, such as Mage spells where `Fate 1`, `Fate 2`, etc. are headers and each bucket contains same-rank spells ordered alphabetically;
  - progression groups ordered by rank, such as Vampire disciplines where `Animalism`, `Dominate`, etc. are group headers and child powers are ordered from rank 1 to rank 5.
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
- There are two different concepts that should not be collapsed into the same data model:
  - a real parent content item with ranked child rows, such as a discipline, gift, or utterance;
  - a UI grouping of multiple sibling tables, such as an Arcana page that contains `Death 1`, `Death 2`, etc.
- For real parent content items, prefer a parent object with a `Ranks` array instead of section-header rows.
- For sibling table groups, prefer a wrapper component such as `TableGroup`, while the inner tables can remain normal `SimpleTable`/future standard-table instances.

## New component direction: `TableGroup`

File:
- `src/components/TableGroup.jsx`

Purpose:
- Provide a lightweight MUI/Tailwind wrapper for a group of related tables.
- Keep the table rendering itself delegated to `SimpleTable` or the future standard table.
- Replace cases where `MultipleTables` is being used only because several standard tables need to be visually connected under one outer title/accordion.

Current component shape:

```jsx
<TableGroup title="Death" defaultExpanded>
  <SimpleTable table={deathOneData} title="Death 1" />
  <SimpleTable table={deathTwoData} title="Death 2" />
  <SimpleTable table={deathThreeData} title="Death 3" />
  <SimpleTable table={deathFourData} title="Death 4" />
  <SimpleTable table={deathFiveData} title="Death 5" />
</TableGroup>
```

When the outer group title should also link to a detail/overview page, pass `titleLink`.
If `titleLink` is a relative string, it is appended to the current route; if it starts with `/`, it is treated as an absolute internal route.

```jsx
<TableGroup title="Seeming Contracts" titleLink="seeming">
  ...
</TableGroup>
```

From `/changeling/contracts`, this points the title to `/changeling/contracts/seeming`.
When `titleLink` is present, the title text is styled as a normal content link and the expand/collapse icon remains the collapse control.
The contracts example above describes the API shape only; pages should pass `titleLink` only when the destination route/content actually exists.

It also supports a `sections` prop for generated page code:

```jsx
<TableGroup
  title="Death"
  sections={[
    { title: "Death 1", content: <SimpleTable table={deathOneData} /> },
    { title: "Death 2", content: <SimpleTable table={deathTwoData} /> },
  ]}
/>
```

Implementation notes:
- Uses Material UI primitives with an outlined-group treatment inspired by the MUI outlined input label pattern.
- Uses Tailwind utility classes for spacing and text sizing.
- Encloses sibling groups with a light Material-style line interrupted by the group title, instead of using a colored background.
- Shows the expand/collapse icon after the group title, matching the existing table-title pattern.
- Uses content indent, smaller nested table titles, an outline around each outer group, and spacing between outer groups to show hierarchy.
- Supports title links through `titleLink`; row favorite/link behavior remains the responsibility of the inner tables.
- Supports `collapsible={false}` if a page wants the same grouping without an accordion.

Migration target:
- `src/pages/Mage/Spells.jsx`
- `src/pages/Mage/Arcana.jsx`
- ritual-style sibling rank groups inside `src/pages/Vampire/Disciplines.jsx`, currently Crúac and Theban Sorcery

Applied migration:
- `src/pages/Mage/Spells.jsx` now uses `TableGroup` as the outer Arcana container.
- `src/pages/Mage/Arcana.jsx` now renders the selected Arcana as plain `SimpleTable` instances, without the outer `TableGroup`.
- `src/pages/Mage/spellTableData.js` centralizes the Arcana list, visible spell headers, row normalization, and spell detail links.
- `src/Data/Vampire/DisciplineData.jsx` now exposes `ThebanSorceryOverview` and `CrùacOverview` as parent/overview objects outside the ritual arrays. `ThebanSorceryData` and `CrùacData` now contain only real ritual rows, without the old sentinel `N/A` overview fields or rank-divider objects.
- `src/pages/Vampire/Disciplines.jsx` now renders Theban Sorcery and Crúac with `TableGroup` plus nested `SimpleTable` instances by rank. Their outer titles use `titleLink`, pointing at the existing discipline detail pages, while the old `Book: "N/A"` overview objects are no longer inside the table data arrays.

Non-target:
- Parent/child ranked content such as ordinary disciplines, gifts, and utterances. Those should use a hierarchical data shape first. Crúac and Theban Sorcery are a different subcase: the parent object is a linked overview, while the child rituals are sibling rank buckets rather than a fixed one-power-per-rank progression.

## Data direction: parent objects with `Ranks`

This applies when the group label is a real content object and the rows below it are ranked children.

Preferred shape:

```js
{
  Name: "Animalism",
  Book: "VTR p115",
  LongDescription: [...],
  Ranks: [
    {
      Rank: "•",
      Name: "Feral Whispers",
      Cost: "-",
      Description: "Speak with animals",
      "Dice Pool": "Manipulation + Animal Ken + Animalism",
      Book: "VTR p115"
    }
  ]
}
```

Rationale:
- The parent is searchable/favoritable as a real object.
- The ranked powers remain normal row-like objects.
- Overview text belongs to the parent instead of living in fake table rows.
- Detail pages can render parent content and ranked rows from the same object.
- Listing pages can choose whether to show one parent row, expanded ranked rows, or both.

Primary candidates:
- `src/Data/Vampire/DisciplineData.jsx`
- `src/Data/Werewolf/GiftData.jsx`
- `src/Data/Changeling/ContractData.jsx` for Universal and Seeming contract families
- `src/Data/Mummy/UtterancesData.jsx`

Possible later candidate:
- Remaining parts of `src/Data/Changeling/ContractData.jsx`, especially Court and Goblin contracts, after deciding which labels are real parent content and which are only table buckets.

## `SimpleTable` support for parent rows with `Ranks`

`SimpleTable` now detects parent rows that contain a `Ranks` array and renders them as a hierarchical table instead of a flat table.

Supported default shape:

```js
{
  Name: "Animalism",
  Description: "",
  Book: "VtR 115",
  LongDescription: [...],
  link: "/vampire/disciplines/animalism",
  Ranks: [
    {
      Name: "Feral Whispers",
      Rank: "•",
      Cost: "-",
      Description: "Speak with animals",
      Book: "VtR 115",
      link: "/vampire/disciplines/feral_whispers"
    }
  ]
}
```

Also supported, for existing Manifestation/Key-style data:

```js
{
  Manifestation: "Boneyard",
  Key: "Cold Wind",
  Attribute: "Wits",
  Skill: "Occult",
  Summary: "...",
  Ranks: [
    { dot: 1, summary: "..." },
    { dot: 2, summary: "..." }
  ],
  Book: "GTS 115"
}
```

Behavior:
- Parent rows render as the same dark section rows used by `ManyHeadersTable`.
- Parent rows can be linked when `activeRowLink` is enabled and the parent has `link`.
- Child rows render as normal alternating rows.
- Child rows can also link when they have `link`.
- `dot` is converted to bullet-dot rank text when a child does not already have `Rank`.
- `summary` is rendered under `Summary` when a child does not already have that field.
- Detail text fields such as `LongDescription` remain in the data object but are not auto-rendered as columns.

Migration rule:
- Keep parent descriptive/detail data on the parent object.
- Move every ranked power into the parent `Ranks` array.
- Do not drop fields from ranked children; if a field is not visible in the list table, it can still remain on the child for detail pages/search/favorites.
- Prefer passing explicit `headers` during migration so the visible table remains stable.

Applied migration:
- `src/Data/Vampire/DisciplineData.jsx`: `UniversalDisciplineData` now uses parent discipline objects with `Ranks` arrays.
- `src/Data/Vampire/DisciplineData.jsx`: `UniversalDisciplineFlatData` is derived from the nested data and used by `allDiscipline`, so existing discipline and power detail routes still resolve.
- `src/pages/Vampire/Disciplines.jsx`: the universal Disciplines section now uses `SimpleTable` with ranked parent rendering instead of `ManyHeadersTable`.
- Data-preservation check: the migration reconstructed the original 48 universal discipline rows from the new nested data with no mismatches, apart from intentionally removing parent `Rank: "N/A"` sentinel fields.
- `src/Data/Vampire/DisciplineData.jsx`: `CoilsOfTheDragonOverview` now holds the top-level Coils overview, while `CoilsOfTheDragonData` contains only the individual coil families with ranked tiers in `Ranks`.
- `src/Data/Vampire/DisciplineData.jsx`: `CoilsOfTheDragonFlatData` is derived from the nested Coils data and used by `allDiscipline` after the overview object.
- `src/pages/Vampire/Disciplines.jsx`: the Coils section now renders through `TableGroup` plus ranked `SimpleTable`; the group title links to the Coils overview detail page and the coil family/power rows keep their links.
- Data-preservation check: the Coils migration reconstructed the original 46 rows from the overview plus nested data with no mismatches, apart from intentionally removing old `Rank: "N/A"` sentinel fields from overview/group rows.
- `src/Data/Vampire/DisciplineData.jsx`: `BloodlineDisciplineData` now uses one parent object per bloodline discipline, with each discipline power moved into the parent `Ranks` array.
- `src/Data/Vampire/DisciplineData.jsx`: `BloodlineDisciplineFlatData` is derived from the nested bloodline discipline data and used by `allDiscipline`.
- `src/components/SimpleTable.jsx`: ranked tables can receive `rankedParentHeaders` when parent section rows need to display different fields than child rows; this preserves the old bloodline parent row display of `Discipline` and `Bloodline`.
- `src/pages/Vampire/Disciplines.jsx`: the Bloodline Disciplines section now uses ranked `SimpleTable` instead of `ManyHeadersTable`.
- Data-preservation check: the Bloodline Disciplines migration reconstructed the original 336 rows from the nested data with no mismatches, apart from intentionally removing old `Rank: "N/A"` sentinel fields from parent rows.
- `src/Data/Vampire/DisciplineData.jsx`: `otherDisciplineData` now uses parent discipline objects with ranked powers in `Ranks`.
- `src/Data/Vampire/DisciplineData.jsx`: `otherDisciplineFlatData` is derived from the nested other discipline data and used by `allDiscipline`.
- `src/pages/Vampire/Disciplines.jsx`: the Other Disciplines section now uses ranked `SimpleTable`; this removes `ManyHeadersTable` from the Vampire disciplines page.
- Data-preservation check: the Other Disciplines migration reconstructed the original 46 rows from the nested data with no mismatches, apart from intentionally removing old `Rank: "N/A"` sentinel fields from parent rows.
- `src/Data/Werewolf/GiftData.jsx`: `giftData` now uses one parent object per gift list, with individual Gifts moved into the parent `Ranks` array.
- `src/Data/Werewolf/GiftData.jsx`: `giftFlatData` is derived from the nested gift data for consumers that need the original flat shape.
- `src/pages/Werewolf/Gifts.jsx`: the Gifts section now uses ranked `SimpleTable` instead of `ManyHeadersTable`.
- `src/components/Sheet/raceOptions.js`: the Werewolf sheet gift picker now reads parent gift-list rows directly from `giftData`.
- Data-preservation check: the Gifts migration reconstructed the original 398 rows from the nested data with no mismatches, apart from intentionally removing old `Rank: "N/A"` sentinel fields from parent rows.
- `src/Data/Changeling/ContractData.jsx`: Universal, Seeming, Court, minor Court, and named Goblin contract arrays now use real contract-family parent rows with ranked clauses inside `Ranks`.
- `src/Data/Changeling/ContractData.jsx`: `unclassifiedGoblinContractData` remains flat real contract rows. Its rank grouping is a page-rendering concern, like Arcana/spell rank buckets, not a parent-with-children data model.
- `src/Data/Changeling/ContractData.jsx`: flat derived exports such as `universalContractFlatData` and `beastlyContractsFlatData` preserve the old flattened shape for `allContracts`, detail pages, search, and sheet options.
- `src/pages/Changeling/Contracts.jsx`: all contract pools now render with ranked `SimpleTable`; `ManyHeadersTable` is no longer used by the Contracts page.
- Data-preservation check: the Universal and Seeming contract migration converted 20 contract-family rows and preserved 131 ranked clauses in order; the Court/named Goblin pass converted 20 more contract-family rows and preserved 90 ranked clauses. `unclassifiedGoblinContractData` was flattened back to its 26 real contract rows. Old `Rank: "N/A"` sentinel fields were intentionally removed from real parent rows.

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

Additional cleanup examples:
- `src/Data/Vampire/CovenantData.jsx` previously mixed real covenant rows with divider labels such as `Antagonistic`, `Uncommon`, `Broken`, and `Alternate`.
- This does not need a new key on each object. The data has been split into `mainCovenantData`, `antagonisticCovenantData`, `uncommonCovenantData`, `brokenCovenantData`, and `alternateCovenantData`.
- A combined `covenantData` export remains for existing consumers, and `src/pages/Vampire/Covenant.jsx` can render separate `SimpleTable` instances.
- `src/Data/Vampire/VampireMeritsData.jsx` had divider rows for covenant-specific merits.
- This also does not need a new key on each object. The data has been split into `generalVampireMeritsData`, `carthianMeritsData`, `invictusMeritsData`, and `ordoDraculMeritsData`.
- A combined `vampireMeritsData` export remains for sheet lookup compatibility, and `src/pages/Vampire/VampireMerits.jsx` can render separate `SimpleTable` instances.

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
- `GiftData.jsx`: mostly `visual-group`; intentionally postponed as a rank-progression edge case.
- `CourtData.jsx`: no longer a table edge case if split by the current group headers and rendered with the base table path.
- `PsychicMeritsData.jsx`: no longer a table edge case if split into stable psychic category arrays.
- `ThaumaturgyData.jsx`: no longer a table edge case after splitting the real merits from ritual merits.
- `ClanData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports.
- `BloodlineData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports and adding a hidden `Clan` key.
- `CovenantData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports.
- `VampireMeritsData.jsx`: no longer a `ManyHeadersTable` case after splitting fake divider rows into separate exports.
- `KithData.jsx`: no longer a `ManyHeadersTable` case after splitting fake seeming rows into separate exports and adding a hidden `Seeming` key.

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

#### Two section-header ordering patterns

Current sectioned tables are not all the same kind of grouping.

Pattern 1: alphabetical buckets inside fixed rank/level
- Example: `src/pages/Mage/Spells.jsx` and `src/pages/Mage/Arcana.jsx`.
- Headers such as `Fate 1`, `Fate 2`, and so on represent rank/level buckets.
- Rows below each bucket are same-rank spells and are usually ordered alphabetically.
- The future table should support this as explicit `groups` or `groupBy` buckets.

Pattern 2: rank progression inside a named group
- Example: `src/pages/Vampire/Disciplines.jsx`.
- Headers such as `Animalism` and `Dominate` represent named power trees.
- Rows below each header are ordered by rank, usually rank 1 through rank 5.
- The group itself may also hold content, links, favorites, and search metadata.

This distinction matters because the first pattern is mostly a display bucket, while the second may represent a real domain object with its own detail page.

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

Fresh read:
- `Spells.jsx` and `Arcana.jsx` duplicate the same array-of-arrays preparation for Death/Fate/Force/Life/Matter/Mind/Prime/Space/Spirit/Time.
- `addLinkToList` mutates each spell object by assigning `obj.link`; this works today, but the future table adapter should prefer returning copied rows.
- This is a strong candidate for a small shared mage spell table model before the generic table migration, because the repetition is page-level rather than domain-specific.
- The grouped table can support either shape:
  - existing arrays per arcana level;
  - a future flat list with an `ArcanaLevel` or `Level` field.

#### Vampire disciplines

Files:
- `src/pages/Vampire/Disciplines.jsx`
- `src/Data/Vampire/DisciplineData.jsx`

Current rendering:
- Universal disciplines, Coils, bloodline disciplines, and other disciplines now use ranked `SimpleTable` data with parent `Ranks` arrays.
- Theban Sorcery and Crúac now use `TableGroup` with nested `SimpleTable` instances grouped by `Rank`.
- Former discipline section rows that used `Rank: "N/A"` have been converted into parent objects or extracted overview objects.
- Overview rows like `Animalism` contain real long-form content and should remain favorite-able/searchable/linkable.
- For Theban Sorcery and Crúac, the overview object is extracted into dedicated exports and used as the outer linked group title. The ritual arrays contain only real rituals; the overview objects remain in `allDiscipline` for detail/search/link behavior.

Current read:
- Legit grouped content.
- This is a key pilot for group labels that are also content entries.
- Theban Sorcery and Crúac are closer to the Arcana/spell shape than to fixed discipline progressions: each rank can contain many alphabetically ordered rituals, while the parent title links to the overview content.

Needed table behavior:
- Group header can render as a dark/strong row.
- Group header can have a link.
- Group header can be favorite-able.
- Child rows can also link when they have detail content.
- Ritual-style groups can use an outer linked `TableGroup` title and normal inner tables, without fake visual objects in the rendered rows.

#### Changeling contracts

Files:
- `src/pages/Changeling/Contracts.jsx`
- `src/Data/Changeling/ContractData.jsx`

Current rendering:
- Contract-family pools use ranked `SimpleTable`.
- Unclassified Goblin contracts use `TableGroup` with normal `SimpleTable` sections grouped by `Rank`.
- `src/pages/Changeling/Contracts.jsx` now also uses `TableGroup` to wrap related table pools:
  - `Seeming Contracts`: Beastly, Darkling, Elemental, Fairest, Ogreish, and Wizened.
  - `Court Contracts`: Spring, Summer, Autumn, Winter, and Other Court Contracts.
  - `Goblin Contracts`: named goblin contract families plus unclassified goblin contracts.
- `Universal Contracts` remains a standalone table.
- Overview rows like `Contracts of the Board` contain family description content.
- Some sections have note paragraphs between tables.

Current read:
- Legit grouped content, with one mixed subcase.
- Similar to disciplines, but more varied because universal, seeming, court, goblin, and unclassified contracts use different headers.
- Rows such as `Contracts of the Board`, `Contracts of Eternal Spring`, and `Contracts of Goblin Fortune` are now content-bearing parent objects.
- Court and named Goblin contract rows now use the same parent `Ranks` shape as Universal and Seeming contracts.
- `unclassifiedGoblinContractData` is flat data. The page groups it by `Rank`, because those dot sections are UI buckets like Arcana levels, not content groups.

Needed table behavior:
- Same as disciplines, plus per-table column configs.
- Keep page-level notes inside the appropriate outer group, but outside the inner table.
- Allow one page/table family to mix content group headers and visual rank bucket headers.
- Support nested table titles, so inner `ManyHeadersTable` sections do not compete visually with the outer `TableGroup` title.
- For migrated contract-family rows, pass `rankedParentHeaders={["Name"]}` so parent rows behave like the old section headers while children keep the full visible column set.
- Court contract parent rows pass `rankedParentHeaders={["Name", "Dice Pool"]}` to preserve the old parent-source display in the second column.
- For unclassified Goblin contracts, keep the data flat and group by `Rank` at the page/component level.

#### Werewolf gifts

Files:
- `src/pages/Werewolf/Gifts.jsx`
- `src/Data/Werewolf/GiftData.jsx`

Current rendering:
- Uses ranked `SimpleTable`.
- `giftData` now stores each gift list as a parent row with ranked gifts inside `Ranks`.
- `giftFlatData` reconstructs the old flat list if another consumer needs it.

Current read:
- Legit grouped content.
- Most group labels are meaningful gift-list domain groups rather than rich detail entries.

Fresh read:
- Former `Rank: "N/A"` rows are real gift-list labels, for example `Agony`, `Alpha`, `Battle`, `Blood`, and many more.
- `Spirit's Silence, The` was adjusted and no longer needs to be tracked as a special blocker.
- Migration result: 398 original rows, 67 parent gift lists, 398 reconstructed flat rows, 0 mismatches.

#### Psychic powers and Thaumaturgy merits

Files:
- `src/pages/MortalsAndTemplates/Lesser templates/Psychics.jsx`
- `src/pages/MortalsAndTemplates/Lesser templates/Thaumaturgy.jsx`
- `src/Data/Mortal/Lesser templates/PsychicMeritsData.jsx`
- `src/Data/Mortal/Lesser templates/ThaumaturgyData.jsx`

Current rendering:
- Uses split data arrays and `SimpleTable`.
- The old visual rows like `Extrasensory Perception`, `Mediumist`, `Psychokinetic`, `Telepathy`, and `Rituals` are no longer data objects.

Current read:
- Psychic merits can be normalized by splitting the dataset into stable category arrays and rendering each with the base table path.
- Thaumaturgy can be normalized by splitting the three general merits from the ritual merits.

Needed table behavior:
- Psychic merits should not need visual group label rows after the split.
- Thaumaturgy should not need visual group label rows after the split.

Fresh read:
- `PsychicMeritsData.jsx` has several clear category labels: `Extrasensory Perception`, `Mediumist`, `Psychokinetic`, and later `Telepathy`.
- `ThaumaturgyData.jsx` has one visible divider, `Rituals`, after a few non-ritual merits.
- Psychic powers should be split as:
  - first/default group: `psychicMeritsData`
  - `Extrasensory Perception`: `psychicEspMeritsData`, rendered with title `ESP merits`
  - `Mediumist`: `psychicMediumistMeritsData`, rendered with title `Mediumist merits`
  - `Psychokinetic`: `psychicPsychokineticMeritsData`, rendered with title `Psychokinetic merits`
  - `Telepathy`: `psychicTelepathicMeritsData`, rendered with title `Telepathic merits`
- Thaumaturgy should be split into `thaumaturgyMeritsData` and `thaumaturgyRitualMeritsData`, with the combined `ThaumaturgyMeritsData` export kept for compatibility.

Resolution:
- Applied.
- `PsychicMeritsData.jsx` now exports real split arrays and a combined compatibility export.
- `ThaumaturgyData.jsx` now exports real split arrays and a combined compatibility export.
- `Psychics.jsx` and `Thaumaturgy.jsx` render the split arrays through `SimpleTable`.

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

Resolution:
- Cleanup candidate, not a table edge case.
- Split into separate pools for main, antagonistic, uncommon, broken, and alternate covenants.
- Do not add a new grouping key to each covenant row.
- Keep combined `covenantData` for compatibility.
- Render as multiple `SimpleTable` instances.

#### Vampire merits

Files:
- `src/pages/Vampire/VampireMerits.jsx`
- `src/Data/Vampire/VampireMeritsData.jsx`

Resolution:
- Cleanup candidate, not a table edge case.
- Split into general merits and covenant-specific merit arrays.
- Do not add a new grouping key to each merit row.
- Keep combined `vampireMeritsData` for sheet lookup compatibility.
- Render as multiple `SimpleTable` instances.

#### Changeling courts

Files:
- `src/pages/Changeling/Court.jsx`
- `src/Data/Changeling/CourtData.jsx`

Current rendering:
- Uses split court-family arrays and `SimpleTable`.
- The old visual group rows such as `Seasonal Courts of the Americas`, `Faraway CourtsSeasonal Variants`, and `Directional Courts of Asia` are no longer data objects.

Current read:
- Can be normalized by splitting the data into the same groups currently represented by the section headers.

Resolution:
- Cleanup candidate, not a table edge case.
- Split into court-family arrays based on the current group headers.
- Render the split pools with the base table path instead of relying on section header rows.

Fresh read:
- The labels are taxonomy rows with no real row content: `Seasonal Courts of the Americas`, `Faraway CourtsSeasonal Variants`, `Directional Courts of Asia`, `Diurnal Courts of Eastern Europe`, and `Auroral Courts`.
- Split these labels into separate arrays/tables, matching the cleanup style used for clans/covenants/kiths.
- The old `Courts` filter issue was resolved by making `courtData` a combined list of real court rows only.

#### Changeling kiths

Files:
- `src/pages/Changeling/Kith.jsx`
- `src/Data/Changeling/KithData.jsx`

Resolution:
- Cleanup candidate, not a table edge case.
- Split into `kithBeastsData`, `kithDarklingsData`, `kithElementalsData`, `kithFairestData`, `kithOgresData`, and `kithWizenedData`.
- Add hidden `Seeming` to each real kith row.
- Rename the old `Book` effect text to `Blessing effect`.
- Add a real `Book` source field using the Codex of Darkness kith table references.
- Keep combined `kithData` for sheet/options compatibility.
- Render as multiple `SimpleTable` instances with headers that hide `Seeming`.

### Fresh remaining edge-case pass

This pass was made after cleaning Vampire clan, bloodline, covenant, vampire merits, Changeling kiths, Changeling courts, psychic merits, and thaumaturgy merits out of section-header table data.

Live sectioned/grouped families still in the code:
- `src/pages/Changeling/Contracts.jsx`: mixed content groups and rank buckets. Contract-family groups render through ranked `SimpleTable`; unclassified Goblin contracts render as flat rank-bucket tables inside `TableGroup`.
- `src/pages/Mage/Spells.jsx` and `src/pages/Mage/Arcana.jsx`: postponed edge case; alphabetical buckets by rank/level from array-of-arrays, not sentinel rows.
- `src/pages/Mummy/Utterances.jsx`: repeated-row grouping through `mergeHeaders`, confirmed legit.
- `src/pages/Mummy/MummyMerits.jsx`: `MummiesStyleMeritsData` uses the same repeated-row grouping pattern; likely legit but still worth checking.
- `src/pages/Promethean/Manifestation.jsx`: intentionally special combination UI, not a standard table migration target.
- `src/pages/Generale/OggettiOcculti.jsx`: intentionally special local table for now.
- Detail pages using direct `BaseTable`: probably not special domain cases, but the migration should decide whether detail tables keep favorites by default.

Applied cleanup:
- `src/Data/Changeling/CourtData.jsx`: split into court-family arrays and fixed the combined `Courts` export so it uses only real court rows.
- `src/Data/Mortal/Lesser templates/PsychicMeritsData.jsx`: split into `psychicMeritsData`, `psychicEspMeritsData`, `psychicMediumistMeritsData`, `psychicPsychokineticMeritsData`, and `psychicTelepathicMeritsData`.
- `src/Data/Mortal/Lesser templates/ThaumaturgyData.jsx`: split into `thaumaturgyMeritsData` for Dream/Library/Magical Nexus and `thaumaturgyRitualMeritsData` for ritual merits.
- `src/pages/Changeling/Contracts.jsx`: grouped Seeming, Court, and Goblin contract table pools with `TableGroup`.
- `src/Data/Changeling/ContractData.jsx`: Universal and Seeming contract-family rows now own ranked clause children through `Ranks`, with flat derived exports feeding `allContracts`.
- `src/pages/Changeling/Contracts.jsx`: Universal and Seeming contract pools now render through ranked `SimpleTable`.
- `src/Data/Changeling/ContractData.jsx`: Court contracts, minor Court contracts, and named Goblin contracts now also use the ranked `Ranks` shape, with matching flat derived exports.
- `src/Data/Changeling/ContractData.jsx`: `unclassifiedGoblinContractData` was corrected back to flat real contract rows; the page groups it by rank.
- `src/pages/Changeling/Contracts.jsx`: Court and named Goblin contract-family pools now render through ranked `SimpleTable`, while unclassified Goblin uses a rank-bucket `TableGroup`. The page no longer imports `ManyHeadersTable`.
- Removed unused legacy components: `src/components/ManyHeadersTable/*` and `src/components/MultipleTables.jsx`.

Cases that most need Paolo's comment before code changes:
- `Mummy/Utterances` and `Mummy/MummyMerits`: should the unified table preserve the exact desktop merged-cell look, or is a grouped-section rendering acceptable?
- Detail tables: should favorite toggles remain visible inside detail-page sub-tables?

Postponed edge cases:
- Spells/Arcana: alphabetical rank/level buckets. Preferred migration is `TableGroup` wrapping standard tables, not a hierarchical parent/rank data rewrite.
- Utterances: repeated-row grouped content. Preferred migration is parent utterance objects with a `Ranks` array or equivalent ranked child list, preserving the current grouped-row meaning.

Current component-level edge cases:
- `mergeHeaders` is a desktop table trick for a real grouped-row need. The unified component should model the grouping directly, then decide whether desktop renders row-spans or group headers.
- Mobile parity is improved now that `SimpleTable` mobile cards have favorites, but `mergeHeaders` is still desktop-only behavior.

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
- `src/Data/Vampire/CovenantData.jsx` is also a cleanup case and can be split into separate covenant pools without adding a grouping key to each row.
- `src/Data/Vampire/VampireMeritsData.jsx` is also a cleanup case and can be split into separate merit pools without adding a grouping key to each row.
- `src/Data/Changeling/KithData.jsx` is also a cleanup case and can be split into seeming arrays, with a hidden `Seeming` key on each row.
- `src/Data/Changeling/CourtData.jsx` has been split into arrays matching the current court group headers and rendered with the base table path.
- `src/Data/Mortal/Lesser templates/PsychicMeritsData.jsx` has been split into `psychicMeritsData`, `psychicEspMeritsData`, `psychicMediumistMeritsData`, `psychicPsychokineticMeritsData`, and `psychicTelepathicMeritsData`, with page titles `ESP merits`, `Mediumist merits`, `Psychokinetic merits`, and `Telepathic merits` for the specialized groups.
- `src/Data/Mortal/Lesser templates/ThaumaturgyData.jsx` has been split into `thaumaturgyMeritsData` and `thaumaturgyRitualMeritsData`.

Still open:
1. For `src/pages/Mummy/Utterances.jsx`, should desktop keep the exact merged-cell look, or is a clearer grouped-section look acceptable?
2. For `src/pages/Changeling/Contracts.jsx`, should unclassified goblin dot rows be treated as visual rank buckets while contract-family rows remain content groups?
3. For detail-page tables that currently use `BaseTable`, should favorites stay visible or should detail sub-tables be plain reference tables?
4. During migration, should old imports like `SimpleTable` and `ManyHeadersTable` keep working while they internally call the new shared `DataTable`, or do you prefer changing page imports directly as each page is migrated?

Postponed by choice:
- `src/pages/Vampire/Disciplines.jsx`
- `src/pages/Werewolf/Gifts.jsx`
- `src/pages/Mage/Spells.jsx`
- `src/pages/Mage/Arcana.jsx`
