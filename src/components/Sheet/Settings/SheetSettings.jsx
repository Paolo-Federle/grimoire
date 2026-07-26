import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

export default function SheetSettings() {
  const { sheetData, setSheetData } = useSheetData();
  const { mode, setMode } = useSheetView();
  const settings = sheetData.settings || {};

  const updateSetting = (key, value) =>
    setSheetData((prev) => updateValueAtPath(prev, ["settings", key], value));

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">Sheet behaviour</h2>
        <p className="mt-1 text-sm text-gray-600">
          Play mode protects permanent character values while keeping session trackers and dice available.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="space-y-1 text-sm font-medium">
            Default view
            <select
              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
              value={settings.default_view || "play"}
              onChange={(event) => updateSetting("default_view", event.target.value)}
            >
              <option value="play">Play / read-only</option>
              <option value="edit">Always edit</option>
            </select>
          </label>

          <label className="space-y-1 text-sm font-medium">
            Current view
            <select
              className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
            >
              <option value="play">Play / read-only</option>
              <option value="edit">Edit</option>
            </select>
          </label>
        </div>

        <div className="mt-5 space-y-3">
          <label className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={Boolean(settings.compact)}
              onChange={(event) => updateSetting("compact", event.target.checked)}
            />
            <span><strong>Compact layout</strong><br /><span className="text-gray-600">Reduce spacing around the sheet on smaller screens.</span></span>
          </label>
          <label className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={settings.confirm_session_reset !== false}
              onChange={(event) => updateSetting("confirm_session_reset", event.target.checked)}
            />
            <span><strong>Confirm session resets</strong><br /><span className="text-gray-600">Reserved for resetting temporary damage and resource changes safely.</span></span>
          </label>
        </div>
      </section>
    </div>
  );
}
