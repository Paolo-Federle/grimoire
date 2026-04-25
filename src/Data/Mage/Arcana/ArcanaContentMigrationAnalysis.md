# Arcana Content Migration Playbook

## Purpose

This file is the working guide for migrating `src/Data/Mage/Arcana/*Data.jsx` away from inline HTML and placeholder-driven rendering.

The goal is to make Arcana data:

- structurally explicit
- renderer-friendly
- easier to test
- safe to evolve without losing text

This is not a generic content guide. It is specifically about how to work on legacy Arcana datasets in this repo.

## Current Rendering Context

Before changing any Arcana file, keep these runtime facts in mind.

### Primary renderer

- Structured content is rendered by [StructuredContent.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/components/StructuredContent.jsx)
- Spell detail pages are rendered by [SpellDetail.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/pages/Mage/SpellDetail.jsx)
- The shared content shape is documented in [Content.ts](C:/Users/Paolo/boolean/Progetti/grimoire/src/components/Content.ts)

### What `SpellDetail` does today

`SpellDetail` now prefers structured content and inline rendering.

It uses:

- `StructuredContent` for block-based content
- `InlineContent` for simple inline fields such as `Practice`, `Action`, `Duration`, `Aspect`, `Cost`, `RoteName`, `RoteDice`
- legacy HTML fallback only when a content field still contains structural HTML or table placeholders

This means new Arcana migrations should target structured blocks first, not HTML strings.

### What `StructuredContent` supports

The renderer currently supports:

- `paragraph`
- `heading`
- `list`
- `line`
- `table`

Inline content supports:

- plain strings
- `bold`
- `italic`
- `lineBreak`

The renderer also still tolerates legacy inline HTML such as `<b>`, `<i>`, `<br>` as a compatibility layer, but that is not the target for completed Arcana files.

## Final Target For A Completed Arcana File

An Arcana data file should be considered complete only when all of the following are true:

- `DescrizioneMiddle` is no longer a raw string when the field exists
- `DescrizioneAlta` is structured whenever it previously relied on structural HTML
- `RoteDescrizione` is structured whenever it previously relied on structural HTML
- no `Tables`
- no `tableRef`
- no `[TABLE1]`, `[TABLE2]`, etc.
- no structural HTML tags inside content fields:
  - `<p>`
  - `<ul>`
  - `<ol>`
  - `<li>`
  - `<h1>` / `<h2>` / `<h3>`
  - `<table>` family tags
- no inline HTML tags left in content fields:
  - `<b>`
  - `<i>`
  - `<strong>`
  - `<em>`
  - `<br>`

Expected end state:

- tables are embedded directly as `type: "table"`
- paragraphs/lists/headings are represented as blocks
- visible text remains intact

## Standard Data Shape

Preferred target:

```ts
type InlineText =
  | string
  | { type: "text"; text: string | InlineText[] }
  | { type: "bold"; text: string | InlineText[] }
  | { type: "italic"; text: string | InlineText[] }
  | { type: "lineBreak" };

type ContentBlock =
  | { type: "paragraph"; text: InlineText | InlineText[] }
  | { type: "heading"; text: InlineText | InlineText[]; level?: 1 | 2 | 3 }
  | { type: "list"; items: Array<InlineText | InlineText[]>; ordered?: boolean }
  | { type: "line"; label?: InlineText | InlineText[]; text: InlineText | InlineText[] }
  | { type: "table"; title?: InlineText | InlineText[]; headers: Array<InlineText | InlineText[]>; rows: Array<Array<InlineText | InlineText[] | number>> };
```

In practice:

- use `paragraph` for almost all prose
- use `list` for bullet/numbered sequences
- use `table` directly instead of legacy side containers
- use `line` for mini stat-block style rows
- use `heading` for embedded section labels such as mini sheets

## Proven Reference Files

The following Arcana files have already been migrated to this standard and are safe references:

- [DeathData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/DeathData.jsx)
- [FateData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/FateData.jsx)
- [ForceData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/ForceData.jsx)
- [LifeData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/LifeData.jsx)
- [MatterData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/MatterData.jsx)
- [MindData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/MindData.jsx)
- [PrimeData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/PrimeData.jsx)
- [SpaceData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/SpaceData.jsx)
- [SpiritData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/SpiritData.jsx)
- [TimeData.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/Data/Mage/Arcana/TimeData.jsx)

When migrating another Arcana, compare against these files before inventing a new pattern.

## Test Location And Why It Matters

The migration safety net lives in:

- [App.test.js](C:/Users/Paolo/boolean/Progetti/grimoire/src/tests/App.test.js)
- [SpellDetail.test.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/tests/pages/Mage/SpellDetail.test.jsx)

`SpellDetail.test.jsx` is the main regression suite for Arcana migration.

It already covers:

- rendering of special cases
- preservation of key text
- table/list rendering
- corpus checks for migrated Arcana files
- absence of structural HTML, inline HTML, placeholders, and legacy table containers

Before broadening a migration, add or extend tests there.

## Rules That Must Not Be Broken

### 1. Do not change visible wording during migration

Allowed:

- changing representation
- splitting HTML paragraphs into blocks
- inlining tables as structured blocks
- replacing inline HTML emphasis with inline content objects

Not allowed:

- rephrasing
- punctuation cleanup
- “fixing” grammar
- replacing terms with nicer wording
- silently dropping notes, examples, or caveats

### 2. Do not mix content migration with normalization

Keep separate:

- malformed HTML repair
- data structure migration
- encoding cleanup
- wording corrections
- typo fixes that affect visible text

### 3. Do not trust terminal mojibake blindly

PowerShell output may display mojibake even when the file itself is fine.

Before assuming corruption:

- inspect the actual diff
- compare old/new text directly
- rely on rendering tests

### 4. Do not bulk-rewrite multiple Arcana blindly

Safe:

- one Arcana file at a time
- one batch of similar entries at a time
- immediate verification after each batch

Unsafe:

- global replacements across multiple files
- script passes without post-conversion inspection
- mixed structural and editorial changes in one pass

## Recommended Migration Workflow

Use this order every time.

### Phase 1: stabilize malformed legacy HTML

Only fix markup that is objectively broken:

- broken list boundaries
- broken paragraph boundaries
- stray closing tags
- table-adjacent text that sits outside valid structure

Do not yet change the overall data model unless the fix naturally becomes a structured block.

### Phase 2: migrate regular patterns in batches

Good batch candidates:

- paragraph-only entries
- paragraph + example entries
- paragraph + list entries
- paragraph + table + paragraph entries

This is where speed is acceptable, as long as tests back it up.

### Phase 3: inline tables immediately

Preferred final structure:

```ts
[
  { type: "paragraph", text: "..." },
  { type: "table", headers: [...], rows: [...] },
  { type: "paragraph", text: "..." }
]
```

Do not leave:

- `Tables`
- `tableRef`
- placeholder markers in content

for a file that is meant to be complete.

### Phase 4: normalize remaining plain strings into blocks

If a content field still exists as a plain string:

- convert it into block form
- usually a single `paragraph` block
- preserve the exact visible text

Important:

- a missing field is fine
- an existing raw string in a completed Arcana file is not

### Phase 5: remove remaining inline HTML

Only after structure is stable:

- replace `<b>` / `<strong>` with inline `bold`
- replace `<i>` / `<em>` with inline `italic`
- replace `<br>` with `lineBreak`

Do this last, not first.

## Special Cases That Must Be Preserved

These are known valid exceptions in meaning, not mistakes.

### Death

- `Quicken Corpse`
  - mini sheet for `Zombies`
- `Revenant`
  - mini sheet for `Revenants`

### Mind

- `Past Life Regression`
  - double rote case
- `Construct Homunculus Persona`
  - multiple tables plus follow-up text
- `Living Library`
  - table with explanatory text before and after

### Shared across Arcana

- `Summon Supernal Being`
  - ritual text
  - two lists
  - example block
  - concluding spell section

Never flatten these blindly into plain paragraphs if the structure is meaningful.

## Good Conversion Patterns

### Paragraph only

```ts
[
  { type: "paragraph", text: "..." }
]
```

### Paragraph + table + paragraph

```ts
[
  { type: "paragraph", text: "..." },
  { type: "table", headers: [...], rows: [...] },
  { type: "paragraph", text: "..." }
]
```

### Embedded emphasis

```ts
{
  type: "paragraph",
  text: [
    "See p. 156 of ",
    { type: "bold", text: "Mage: The Awakening" },
    "."
  ]
}
```

### Heading-like mini sheet

```ts
[
  { type: "heading", text: "Zombies", level: 2 },
  { type: "line", label: "Attributes:", text: "Power 1, Finesse 1, Resistance 2" }
]
```

### Inline example with line break

```ts
{
  type: "paragraph",
  text: [
    { type: "bold", text: "Example:" },
    { type: "lineBreak" },
    "..."
  ]
}
```

## Renderer Constraints To Respect

When shaping data, remember:

- `InlineContent` handles plain strings, arrays, and inline objects
- `StructuredContent` renders `paragraph`, `heading`, `list`, `line`, and `table`
- `SpellDetail` still supports legacy structural HTML only as a compatibility fallback

So the ideal migration result is:

- no need for legacy fallback for the completed Arcana file
- data can render entirely through the structured path

## Minimum Review Checklist For Every Arcana Pass

Before considering a file or batch done, verify:

- text still renders with the same wording
- table count is preserved
- list item count is preserved
- examples remain visible
- follow-up text after tables still appears
- `RoteName` and `RoteDice` are still wired correctly
- no `Tables`
- no `tableRef`
- no `[TABLEX]`
- no inline HTML in content fields

## Minimum Test Checklist For Every Arcana Pass

Add or update tests for:

- one regular paragraph-only case
- one table case
- one list case, if present
- one special case, if present
- one corpus assertion for the whole Arcana file once it is close to complete

Corpus assertions should check:

- no structural HTML
- no inline HTML
- no placeholder markers
- no legacy table containers
- `DescrizioneMiddle` is no longer a raw string when present

## What We Learned From The `MindData` Pass

`MindData` confirmed two important things:

- a large Arcana file can still be migrated safely in broad regular batches if the conversion logic is conservative
- renderer regressions may surface only after a new Arcana introduces a slightly different inline shape

In this case, `MindData` exposed a renderer gap where a single inline object was not being rendered correctly. The right fix was in [StructuredContent.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/components/StructuredContent.jsx), not in the migrated data.

Rule:

- if a migration exposes a renderer limitation that is genuinely generic, fix the renderer instead of degrading the data back to legacy HTML

## Completion Standard For Future Files

A future Arcana file should only be called complete when:

1. it renders correctly in `SpellDetail`
2. it passes the corpus rules above
3. its special cases are explicitly preserved
4. its tests live in [SpellDetail.test.jsx](C:/Users/Paolo/boolean/Progetti/grimoire/src/tests/pages/Mage/SpellDetail.test.jsx)

That is the standard to follow from now on.
