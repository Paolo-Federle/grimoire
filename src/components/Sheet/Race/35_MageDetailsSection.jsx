import CategoryContainer from "../Common/17_CategoryContainer";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { SelectInput } from "../Common/35_SelectInput";
import { TextInput } from "../Common/35_TextInput";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { getSpellByTitle, getSpellDetailPath, getSpellOptionsForArcanaLevel } from "../sheetLookupData";

const arcanaOptions = [
  "death",
  "fate",
  "forces",
  "life",
  "matter",
  "mind",
  "prime",
  "spirit",
  "space",
  "time",
];

const listConfig = {
  active_spells: {
    title: "Active Spells",
    addLabel: "Spell",
    maxItems: (sheetData) => (sheetData.race_traits.energy_strength.value || 1) + 3,
    defaultItem: { arcana: "", level: 1, name: "", potency: "", dice_pool: "", book: "" },
    fields: [
      { key: "arcana", label: "Arcana", type: "select", options: arcanaOptions },
      { key: "level", label: "Level", type: "select", options: [1, 2, 3, 4, 5] },
      { key: "name", label: "Spell", type: "spellSelect" },
      { key: "potency", label: "Potency", type: "text" },
    ],
  },
  spells_onself: {
    title: "Spells Upon Self",
    addLabel: "Spell",
    maxItems: (sheetData) =>
      (sheetData.attributes.physical.stamina.base || 0) +
      (sheetData.attributes.physical.stamina.modifier || 0),
    defaultItem: { arcana: "", level: 1, name: "", potency: "", dice_pool: "", book: "" },
    fields: [
      { key: "arcana", label: "Arcana", type: "select", options: arcanaOptions },
      { key: "level", label: "Level", type: "select", options: [1, 2, 3, 4, 5] },
      { key: "name", label: "Spell", type: "spellSelect" },
      { key: "potency", label: "Potency", type: "text" },
    ],
  },
  rotes: {
    title: "Rotes",
    addLabel: "Rote",
    maxLabel: "",
    maxItems: () => Number.POSITIVE_INFINITY,
    defaultItem: { arcana: "", level: 1, name: "", dice_pool: "", book: "" },
    showMetadata: true,
    fields: [
      { key: "arcana", label: "Arcana", type: "select", options: arcanaOptions },
      { key: "level", label: "Level", type: "select", options: [1, 2, 3, 4, 5] },
      { key: "name", label: "Spell", type: "spellSelect" },
    ],
  },
};

function MageListEditor({
  listKey,
  title,
  addLabel,
  maxItems,
  defaultItem,
  fields,
  showMetadata = false,
}) {
  const { sheetData, setSheetData } = useSheetData();
  const items = sheetData.race_details.mage[listKey] || [];
  const limit = maxItems(sheetData);
  const canAddItem = items.length < limit;
  const headerInfo =
    listKey === "active_spells"
      ? `Max active spells: ${limit}`
      : listKey === "spells_onself"
        ? `Spell tolerance: ${limit}`
        : "";

  const updateField = (index, fieldKey, value) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["race_details", "mage", listKey, index, fieldKey], value)
    );
  };

  const handleSpellSelection = (index, spellTitle) => {
    const currentItem = items[index] || {};
    const matchedSpell = getSpellByTitle(currentItem.arcana, currentItem.level, spellTitle);

    setSheetData((prev) => {
      let updatedSheetData = updateValueAtPath(
        prev,
        ["race_details", "mage", listKey, index, "name"],
        spellTitle
      );

      updatedSheetData = updateValueAtPath(
        updatedSheetData,
        ["race_details", "mage", listKey, index, "dice_pool"],
        matchedSpell?.dicePool || ""
      );

      updatedSheetData = updateValueAtPath(
        updatedSheetData,
        ["race_details", "mage", listKey, index, "book"],
        matchedSpell?.Book || ""
      );

      return updatedSheetData;
    });
  };

  const handleArcanaOrLevelChange = (index, key, value) => {
    setSheetData((prev) => {
      let updatedSheetData = updateValueAtPath(
        prev,
        ["race_details", "mage", listKey, index, key],
        key === "level" ? Number(value) : value
      );

      updatedSheetData = updateValueAtPath(
        updatedSheetData,
        ["race_details", "mage", listKey, index, "name"],
        ""
      );
      updatedSheetData = updateValueAtPath(
        updatedSheetData,
        ["race_details", "mage", listKey, index, "dice_pool"],
        ""
      );
      updatedSheetData = updateValueAtPath(
        updatedSheetData,
        ["race_details", "mage", listKey, index, "book"],
        ""
      );

      return updatedSheetData;
    });
  };

  const addItem = () => {
    if (!canAddItem) {
      return;
    }

    setSheetData((prev) =>
      updateValueAtPath(prev, ["race_details", "mage", listKey], (currentItems = []) => [
        ...currentItems,
        { ...defaultItem },
      ])
    );
  };

  const removeItem = (index) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["race_details", "mage", listKey], (currentItems = []) => {
        if (currentItems.length <= 1) {
          return currentItems;
        }

        return currentItems.filter((_, currentIndex) => currentIndex !== index);
      })
    );
  };

  const isCompactSpellLayout =
    (listKey === "active_spells" || listKey === "spells_onself") &&
    fields.some((field) => field.key === "potency");

  return (
    <div className="rounded border border-gray-200 p-3">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
        {!!headerInfo && <span className="text-xs text-gray-500">{headerInfo}</span>}
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const spellOptions = getSpellOptionsForArcanaLevel(item.arcana, item.level);
          const detailPath = item.name ? getSpellDetailPath(item.name) : null;
          const hasSelectedSpell = Boolean(item.name);

          return (
            <div key={`${listKey}-${index}`} className="rounded bg-gray-50 p-3">
              {isCompactSpellLayout ? (
                <div className="space-y-2">
                  <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_96px] lg:grid-cols-[minmax(120px,0.8fr)_78px_minmax(0,1.4fr)_auto] lg:items-center">
                    <div className={hasSelectedSpell ? "lg:max-w-[140px]" : ""}>
                      <SelectInput
                        label="Arcana"
                        options={arcanaOptions}
                        path={["race_details", "mage", listKey, index, "arcana"]}
                        onChange={(value) => handleArcanaOrLevelChange(index, "arcana", value)}
                      />
                    </div>

                    <div className="sm:max-w-[96px] lg:max-w-[78px]">
                      <SelectInput
                        label="Level"
                        options={[1, 2, 3, 4, 5]}
                        path={["race_details", "mage", listKey, index, "level"]}
                        onChange={(value) => handleArcanaOrLevelChange(index, "level", value)}
                      />
                    </div>

                    <div className="min-w-0 sm:col-span-2 lg:col-span-1">
                      <SelectInput
                        label="Spell"
                        options={spellOptions}
                        path={["race_details", "mage", listKey, index, "name"]}
                        onChange={(value) => handleSpellSelection(index, value)}
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 sm:col-span-2 lg:col-span-1 lg:justify-self-end">
                      <CompactDetailLink to={detailPath} label="Open spell details" />
                    </div>
                  </div>

                  <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <TextInput
                      label="Potency"
                      value={item.potency}
                      onChange={(value) => updateField(index, "potency", value)}
                    />

                    <button
                      type="button"
                      title={`Remove ${addLabel.toLowerCase()}`}
                      aria-label={`Remove ${addLabel.toLowerCase()}`}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded bg-[#333] text-sm font-semibold text-white hover:bg-[#111] ${
                        items.length > 1 ? "" : "invisible"
                      }`}
                      onClick={() => removeItem(index)}
                    >
                      x
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {fields.map((field) => {
                      if (field.type === "spellSelect") {
                        return (
                          <SelectInput
                            key={`${listKey}-${field.key}-${index}`}
                            label={field.label}
                            options={spellOptions}
                            path={["race_details", "mage", listKey, index, "name"]}
                            onChange={(value) => handleSpellSelection(index, value)}
                          />
                        );
                      }

                      if (field.type === "select") {
                        return (
                          <SelectInput
                            key={`${listKey}-${field.key}-${index}`}
                            label={field.label}
                            options={field.options}
                            path={["race_details", "mage", listKey, index, field.key]}
                            onChange={(value) => handleArcanaOrLevelChange(index, field.key, value)}
                          />
                        );
                      }

                      if (field.type === "text") {
                        return (
                          <TextInput
                            key={`${listKey}-${field.key}-${index}`}
                            label={field.label}
                            value={item[field.key]}
                            onChange={(value) => updateField(index, field.key, value)}
                          />
                        );
                      }

                      return null;
                    })}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    {showMetadata ? (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                        <span>{item.dice_pool || "-"}</span>
                        <span>{item.book || "-"}</span>
                      </div>
                    ) : (
                      <span />
                    )}

                    <div className="flex items-center gap-2">
                      <CompactDetailLink to={detailPath} label="Open spell details" />
                      <button
                        type="button"
                        title={`Remove ${addLabel.toLowerCase()}`}
                        aria-label={`Remove ${addLabel.toLowerCase()}`}
                        className={`inline-flex h-8 w-8 items-center justify-center rounded bg-[#333] text-sm font-semibold text-white hover:bg-[#111] ${
                          items.length > 1 ? "" : "invisible"
                        }`}
                        onClick={() => removeItem(index)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`mt-3 rounded px-4 py-2 text-sm text-white ${
          canAddItem ? "bg-[#333] hover:bg-[#111]" : "cursor-not-allowed bg-gray-400"
        }`}
        onClick={addItem}
        disabled={!canAddItem}
      >
        + Add {addLabel}
      </button>
    </div>
  );
}

export default function MageDetailsSection() {
  return (
    <div className="w-full space-y-4">
      <CategoryContainer section="MAGE PRACTICES">
        <div className="grid w-full gap-4 md:grid-cols-2">
          <MageListEditor listKey="active_spells" {...listConfig.active_spells} />
          <MageListEditor listKey="spells_onself" {...listConfig.spells_onself} />
        </div>
      </CategoryContainer>

      <CategoryContainer section="ROTES">
        <div className="w-full">
          <MageListEditor listKey="rotes" {...listConfig.rotes} />
        </div>
      </CategoryContainer>
    </div>
  );
}
