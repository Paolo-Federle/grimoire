import { useId, useState } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { WEREWOLF_FORMS, getWerewolfForm, getWerewolfFormStats, isWerewolfSheet } from "../sheetWerewolfForms";
import { BookLink } from "../../BookLink";

const STAT_LABELS = [
  ["strength", "Strength"], ["dexterity", "Dexterity"], ["stamina", "Stamina"],
  ["manipulation", "Manipulation"], ["size", "Size"], ["health", "Health"],
  ["defense", "Defense"], ["initiative", "Initiative"], ["speed", "Speed"],
  ["armor", "Armor"], ["perception", "Perception"],
];

export default function WerewolfFormsSection() {
  const { sheetData, setSheetData } = useSheetData();
  const [showComparison, setShowComparison] = useState(false);
  const comparisonId = useId();
  const radioName = useId();
  if (!isWerewolfSheet(sheetData)) return null;

  const form = getWerewolfForm(sheetData);
  const hishu = getWerewolfFormStats(sheetData, "hishu");

  return (
    <CategoryContainer section="WEREWOLF FORMS">
      <div className="w-full min-w-0 space-y-3">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold text-gray-600">Active form</legend>
          <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-5">
            {WEREWOLF_FORMS.map((option) => (
              <label key={option.id} className={`relative cursor-pointer rounded-md border px-2 py-2 text-center focus-within:ring-2 focus-within:ring-indigo-500 ${form.id === option.id ? "border-indigo-700 bg-indigo-50 text-indigo-900" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>
                <input
                  type="radio"
                  name={radioName}
                  value={option.id}
                  checked={form.id === option.id}
                  className="sr-only"
                  onChange={() => setSheetData((prev) => updateValueAtPath(prev, ["race_details", "werewolf", "current_form"], option.id))}
                />
                <span className="block text-sm font-bold">{option.name}</span>
                <span className="block text-xs">{option.description}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-gray-500">Attributes, Health and other traits below use {form.name}.</span>
          <button type="button" aria-expanded={showComparison} aria-controls={comparisonId} onClick={() => setShowComparison((value) => !value)} className="rounded border border-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-50">
            {showComparison ? "Hide form comparison" : "Compare forms"}
          </button>
        </div>
        <details key={form.id} className="text-xs text-gray-600">
          <summary className="cursor-pointer font-medium">{form.name} form notes</summary>
          <div className="space-y-1 pt-2">
            {form.notes.map((note) => <p key={note} className="m-0">{note}</p>)}
            {form.id === "gauru" && <p className="m-0">Normal Gauru limit: {hishu.stamina + (Number(sheetData.race_traits?.energy_strength?.value) || 0)} turns (Hishu Stamina + Primal Urge), before auspice-moon bonuses.</p>}
          </div>
        </details>
        {showComparison && (
          <div id={comparisonId} role="region" aria-label="Form comparison" tabIndex={0} className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <caption className="pb-2 text-left text-gray-500">Current character totals in every form. Rules: {BookLink("WtF 170")}</caption>
              <thead><tr><th scope="col" className="p-2">Stat</th>{WEREWOLF_FORMS.map((option) => <th scope="col" key={option.id} className={`p-2 ${option.id === form.id ? "bg-indigo-50" : ""}`}>{option.name}</th>)}</tr></thead>
              <tbody>{STAT_LABELS.map(([key, label]) => <tr key={key} className="border-t border-gray-100"><th scope="row" className="p-2 font-medium">{label}</th>{WEREWOLF_FORMS.map((option) => <td key={option.id} className={`p-2 tabular-nums ${option.id === form.id ? "bg-indigo-50 font-semibold" : ""}`}>{getWerewolfFormStats(sheetData, option.id)[key]}</td>)}</tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </CategoryContainer>
  );
}
