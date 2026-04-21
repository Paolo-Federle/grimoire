import { DotMarkers } from "../Common/40_DotMarkers";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { SelectInput } from "../Common/35_SelectInput";
import { useSheetData } from "../05_SheetDataContext";
import { getValueAtPath, updateValueAtPath } from "../sheetStateUtils";

const buildDefaultItem = (withDots, minDots) =>
  withDots ? { name: "", dots: minDots } : { name: "" };

export default function RaceOptionList({
  title,
  itemLabel,
  path,
  options,
  itemKey = "name",
  secondaryKey = null,
  secondaryLabel = "",
  getSecondaryOptions = null,
  defaultItem = null,
  preventDuplicates = true,
  getDetailPath = null,
  withDots = false,
  minDots = 1,
  maxDots = 5,
}) {
  const { sheetData, setSheetData } = useSheetData();
  const items = getValueAtPath(sheetData, path) || [];

  const updateItem = (index, key, value) => {
    setSheetData((prev) => updateValueAtPath(prev, [...path, index, key], value));
  };

  const updatePrimaryValue = (index, value) => {
    setSheetData((prev) => {
      let updatedSheetData = updateValueAtPath(prev, [...path, index, itemKey], value);

      if (secondaryKey) {
        updatedSheetData = updateValueAtPath(updatedSheetData, [...path, index, secondaryKey], "");
      }

      return updatedSheetData;
    });
  };

  const addItem = () => {
    setSheetData((prev) =>
      updateValueAtPath(prev, path, (currentItems = []) => [
        ...currentItems,
        defaultItem ? { ...defaultItem } : buildDefaultItem(withDots, minDots),
      ])
    );
  };

  const removeItem = (index) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, path, (currentItems = []) => {
        if (currentItems.length <= 1) {
          return currentItems;
        }

        return currentItems.filter((_, currentIndex) => currentIndex !== index);
      })
    );
  };

  return (
    <div className="rounded border border-gray-200 p-3">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide">{title}</h2>

      <div className="space-y-3">
        {items.map((item, index) => {
          const selectedNames = preventDuplicates
            ? items
                .map((currentItem, currentIndex) =>
                  currentIndex === index ? null : currentItem?.[itemKey]
                )
                .filter(Boolean)
            : [];

          const availableOptions = options.filter(
            (option) => option === item?.[itemKey] || !selectedNames.includes(option)
          );
          const secondaryOptions = getSecondaryOptions ? getSecondaryOptions(item, sheetData) : [];
          const detailPath = getDetailPath ? getDetailPath(item, sheetData) : null;

          return (
            <div
              key={`${title}-${index}`}
              className="rounded bg-gray-50 p-2"
            >
              <div className="space-y-2">
                <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                  <SelectInput
                    label={itemLabel}
                    options={availableOptions}
                    path={[...path, index, itemKey]}
                    onChange={(value) => updatePrimaryValue(index, value)}
                  />

                  <div className="flex items-center justify-end gap-2">
                    <CompactDetailLink
                      to={detailPath}
                      label={`Open ${itemLabel.toLowerCase()} details`}
                    />
                    <button
                      type="button"
                      title={`Remove ${itemLabel.toLowerCase()}`}
                      aria-label={`Remove ${itemLabel.toLowerCase()}`}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded bg-[#333] text-sm font-semibold text-white hover:bg-[#111] ${
                        items.length > 1 ? "" : "invisible"
                      }`}
                      onClick={() => removeItem(index)}
                    >
                      x
                    </button>
                  </div>
                </div>

                {secondaryKey ? (
                  <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <SelectInput
                      label={secondaryLabel}
                      options={secondaryOptions}
                      path={[...path, index, secondaryKey]}
                    />

                    {withDots ? (
                      <div className="flex items-center gap-3 md:justify-end">
                        <span className="text-sm font-semibold">Dots</span>
                        <DotMarkers
                          min={minDots}
                          max={maxDots}
                          value={item?.dots ?? minDots}
                          modifier={0}
                          onChange={(newValue) => updateItem(index, "dots", newValue)}
                        />
                      </div>
                    ) : (
                      <span />
                    )}
                  </div>
                ) : null}

                {withDots && !secondaryKey ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">Dots</span>
                    <DotMarkers
                      min={minDots}
                      max={maxDots}
                      value={item?.dots ?? minDots}
                      modifier={0}
                      onChange={(newValue) => updateItem(index, "dots", newValue)}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-3 rounded bg-[#333] px-4 py-2 text-sm text-white hover:bg-[#111]"
        onClick={addItem}
      >
        + Add {itemLabel}
      </button>
    </div>
  );
}
