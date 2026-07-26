import CategoryContainer from "../Common/17_CategoryContainer";
import { TextInput } from "../Common/35_TextInput";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

const emptyBackground = { name: "", description: "" };
const emptyRelationship = { name: "", type: "", description: "" };

function EditableList({ title, path, fields, emptyItem }) {
  const { sheetData, setSheetData } = useSheetData();
  const { mode } = useSheetView();
  const items = sheetData[path] || [];

  const change = (index, key, value) =>
    setSheetData((prev) => updateValueAtPath(prev, [path, index, key], value));

  return (
    <CategoryContainer section={title}>
      <div className="w-full space-y-3">
        {items.map((item, index) => (
          <div key={index} className="grid gap-2 rounded-lg border border-gray-200 p-3 md:grid-cols-3">
            {fields.map(({ key, label, wide }) => (
              <div key={key} className={wide ? "md:col-span-3" : ""}>
                <TextInput
                  label={label}
                  value={item[key] || ""}
                  onChange={(value) => change(index, key, value)}
                  multiline={wide}
                  rows={wide ? 2 : undefined}
                />
              </div>
            ))}
            <button
              type="button"
              disabled={mode === "play"}
              className="text-left text-xs text-red-700 hover:underline"
              onClick={() =>
                setSheetData((prev) =>
                  updateValueAtPath(prev, [path], items.filter((_, itemIndex) => itemIndex !== index))
                )
              }
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          disabled={mode === "play"}
          className="rounded bg-[#333] px-3 py-2 text-sm text-white hover:bg-[#111]"
          onClick={() =>
            setSheetData((prev) => updateValueAtPath(prev, [path], [...items, { ...emptyItem }]))
          }
        >
          + Add {title.toLowerCase()}
        </button>
      </div>
    </CategoryContainer>
  );
}

export default function StorySection() {
  const { sheetData, setSheetData } = useSheetData();
  const character = sheetData.character;
  const setCharacter = (key, value) =>
    setSheetData((prev) => updateValueAtPath(prev, ["character", key], value));

  return (
    <div className="space-y-4">
      <CategoryContainer section="CHRONICLE & IDENTITY">
        <div className="grid w-full gap-3 md:grid-cols-2">
          {[
            ["player", "Player"],
            ["chronicle", "Chronicle"],
            ["faction", "Faction"],
            ["group", "Group"],
          ].map(([key, label]) => (
            <TextInput
              key={key}
              label={label}
              value={character[key] || ""}
              onChange={(value) => setCharacter(key, value)}
            />
          ))}
        </div>
      </CategoryContainer>

      <CategoryContainer section="CHARACTER STORY">
        <div className="grid w-full gap-3">
          {[
            ["appearance", "Appearance"],
            ["description", "Description"],
            ["background", "Background"],
            ["goals", "Goals and aspirations"],
          ].map(([key, label]) => (
            <TextInput
              key={key}
              label={label}
              value={character[key] || ""}
              onChange={(value) => setCharacter(key, value)}
              multiline
              rows={key === "background" ? 5 : 2}
            />
          ))}
        </div>
      </CategoryContainer>

      <EditableList
        title="BACKGROUNDS"
        path="backgrounds"
        emptyItem={emptyBackground}
        fields={[
          { key: "name", label: "Title" },
          { key: "description", label: "Description", wide: true },
        ]}
      />
      <EditableList
        title="RELATIONSHIPS"
        path="relationships"
        emptyItem={emptyRelationship}
        fields={[
          { key: "name", label: "Name" },
          { key: "type", label: "Type" },
          { key: "description", label: "Notes", wide: true },
        ]}
      />

      <CategoryContainer section="NOTES">
        <div className="w-full">
          <TextInput
            label="Notes"
            value={sheetData.notes || ""}
            onChange={(value) =>
              setSheetData((prev) => updateValueAtPath(prev, ["notes"], value))
            }
            multiline
            rows={8}
          />
        </div>
      </CategoryContainer>
    </div>
  );
}
