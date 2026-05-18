import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CharacterSheet from "../../components/Sheet/10_CharacterSheet";
import { PATHS } from "../path";
import {
  downloadSheetAsText,
  getStoredSheet,
  normalizeSheetData,
  saveStoredSheet,
} from "../../components/Sheet/sheetStorage";

const getSheetName = (sheetRecord) =>
  String(sheetRecord?.data?.character?.name || "").trim() || sheetRecord?.name || "New Sheet";

export default function SheetEditor() {
  const navigate = useNavigate();
  const { sheetId = "" } = useParams();
  const storedSheet = useMemo(() => getStoredSheet(sheetId), [sheetId]);
  const [lastSavedSheet, setLastSavedSheet] = useState(storedSheet);

  useEffect(() => {
    setLastSavedSheet(storedSheet);
  }, [storedSheet]);

  if (!storedSheet) {
    return (
      <div className="longTextContainer">
        <div className="rounded border border-dashed border-gray-300 p-6 text-center text-sm text-gray-600">
          Sheet not found.{" "}
          <Link className="underline" to={PATHS.SHEET}>
            Go back to the sheet library
          </Link>
          .
        </div>
      </div>
    );
  }

  const handleSheetChange = (nextSheetData) => {
    const savedSheet = saveStoredSheet(sheetId, nextSheetData);
    setLastSavedSheet(savedSheet);
  };

  return (
    <div className="space-y-4">
      <div className="longTextContainer">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">{getSheetName(lastSavedSheet)}</h1>
            <p className="text-sm text-gray-600">
              {lastSavedSheet?.updatedAt
                ? `Saved ${new Date(lastSavedSheet.updatedAt).toLocaleString("en-GB")}`
                : "Autosave enabled"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate(PATHS.SHEET)}
            >
              Back to sheets
            </button>
            <button
              type="button"
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() =>
                downloadSheetAsText({
                  ...lastSavedSheet,
                  data: normalizeSheetData(lastSavedSheet.data),
                })
              }
            >
              Export text
            </button>
            <button
              type="button"
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => window.print()}
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      <CharacterSheet
        key={sheetId}
        initialData={storedSheet.data}
        onSheetDataChange={handleSheetChange}
      />
    </div>
  );
}
