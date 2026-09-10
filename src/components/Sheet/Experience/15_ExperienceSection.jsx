import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

const emptyGain = () => ({ session: "", quantity: "", description: "" });
const emptySpend = () => ({ quantity: "", description: "" });
const toAmount = (value) => Math.max(0, Number.parseInt(value, 10) || 0);

const hasGainContent = (entry) =>
  toAmount(entry?.quantity) > 0 ||
  Boolean(String(entry?.session || "").trim()) ||
  Boolean(String(entry?.description || "").trim());

const hasSpendContent = (entry) =>
  toAmount(entry?.quantity) > 0 ||
  Boolean(String(entry?.description || "").trim());

export function calculateExperienceTotals(experience = {}) {
  const gained = (Array.isArray(experience.gained) ? experience.gained : []).reduce(
    (total, entry) => total + toAmount(entry?.quantity),
    0
  );
  const spent = (Array.isArray(experience.spent) ? experience.spent : []).reduce(
    (total, entry) => total + toAmount(entry?.quantity),
    0
  );

  return { gained, spent, current: gained - spent };
}

const fieldClass =
  "h-9 min-w-0 rounded-md border border-gray-300 bg-white px-2.5 text-sm text-gray-800 outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200 disabled:bg-gray-50 disabled:text-gray-600";

function SummaryCard({ label, value, compact = false }) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-gray-50 text-gray-900 ${compact ? "flex items-center justify-between gap-3 px-2.5 py-1.5" : "px-3 py-2"}`}
    >
      <span className={`${compact ? "text-[10px]" : "block text-[11px]"} font-semibold uppercase tracking-wide text-gray-500`}>
        {label}
      </span>
      <strong className={compact ? "text-sm leading-5" : "text-xl leading-6"}>{value}</strong>
    </div>
  );
}

export default function ExperienceSection() {
  const { sheetData, setSheetData } = useSheetData();
  const { mode } = useSheetView();
  const experience = sheetData.experience || {};
  const gainedEntries = (Array.isArray(experience.gained) ? experience.gained : [])
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => hasGainContent(entry));
  const spentEntries = (Array.isArray(experience.spent) ? experience.spent : [])
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => hasSpendContent(entry));
  const totals = calculateExperienceTotals(experience);
  const [gainDraft, setGainDraft] = useState(emptyGain);
  const [spendDraft, setSpendDraft] = useState(emptySpend);

  const updateExperience = (updater) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["experience"], (current = {}) => {
        const updated = updater(current);
        const nextTotals = calculateExperienceTotals(updated);

        return {
          ...updated,
          total: nextTotals.gained,
          spent_total: nextTotals.spent,
          unspent_total: nextTotals.current,
        };
      })
    );
  };

  const addGain = (event) => {
    event.preventDefault();
    const session = gainDraft.session.trim();
    const quantity = toAmount(gainDraft.quantity);

    if (!session || quantity < 1) return;

    updateExperience((current) => ({
      ...current,
      gained: [
        ...(Array.isArray(current.gained) ? current.gained.filter(hasGainContent) : []),
        {
          session,
          quantity,
          extra_quantity: 0,
          description: gainDraft.description.trim(),
        },
      ],
    }));
    setGainDraft(emptyGain());
  };

  const addSpend = (event) => {
    event.preventDefault();
    const description = spendDraft.description.trim();
    const quantity = toAmount(spendDraft.quantity);

    if (!description || quantity < 1) return;

    updateExperience((current) => ({
      ...current,
      spent: [
        ...(Array.isArray(current.spent) ? current.spent.filter(hasSpendContent) : []),
        {
          quantity,
          extra_quantity: 0,
          description,
        },
      ],
    }));
    setSpendDraft(emptySpend());
  };

  const changeEntry = (collection, index, field, value) => {
    updateExperience((current) => ({
      ...current,
      [collection]: (Array.isArray(current[collection]) ? current[collection] : []).map(
        (entry, entryIndex) =>
          entryIndex === index
            ? { ...entry, [field]: field === "quantity" ? toAmount(value) : value }
            : entry
      ),
    }));
  };

  const removeEntry = (collection, index) => {
    updateExperience((current) => ({
      ...current,
      [collection]: (Array.isArray(current[collection]) ? current[collection] : []).filter(
        (_, entryIndex) => entryIndex !== index
      ),
    }));
  };

  return (
    <CategoryContainer section="EXPERIENCE">
      <div className="w-full min-w-0 space-y-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-stretch gap-2">
          <SummaryCard label="Current XP" value={totals.current} />
          <div className="grid min-w-28 gap-1">
            <SummaryCard label="Gained" value={totals.gained} compact />
            <SummaryCard label="Used" value={totals.spent} compact />
          </div>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-2">
          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-3">
            <h2 className="m-0 text-sm font-bold text-gray-900">XP gained by session</h2>
            <form className="mt-3 grid min-w-0 grid-cols-2 gap-2" onSubmit={addGain}>
              <label className="min-w-0 text-xs font-medium text-gray-600">
                Session
                <input
                  type="text"
                  aria-label="Session"
                  placeholder="Session number or title"
                  className={`${fieldClass} mt-1 w-full`}
                  value={gainDraft.session}
                  onChange={(event) =>
                    setGainDraft((current) => ({ ...current, session: event.target.value }))
                  }
                />
              </label>
              <label className="min-w-0 text-xs font-medium text-gray-600">
                XP gained
                <input
                  type="number"
                  min="1"
                  aria-label="XP gained"
                  className={`${fieldClass} mt-1 w-full`}
                  value={gainDraft.quantity}
                  onChange={(event) =>
                    setGainDraft((current) => ({ ...current, quantity: event.target.value }))
                  }
                />
              </label>
              <label className="col-span-2 min-w-0 text-xs font-medium text-gray-600">
                Notes <span className="font-normal text-gray-400">(optional)</span>
                <input
                  type="text"
                  aria-label="Gained XP notes"
                  placeholder="Milestones, attendance, awards…"
                  className={`${fieldClass} mt-1 w-full`}
                  value={gainDraft.description}
                  onChange={(event) =>
                    setGainDraft((current) => ({ ...current, description: event.target.value }))
                  }
                />
              </label>
              <button
                type="submit"
                disabled={!gainDraft.session.trim() || toAmount(gainDraft.quantity) < 1}
                className="col-span-2 inline-flex h-9 items-center justify-center gap-1 rounded-md bg-[#333] px-3 text-xs font-semibold text-white hover:bg-[#111] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <AddRoundedIcon sx={{ fontSize: "1rem" }} /> Add session XP
              </button>
            </form>

            <div className="mt-3 space-y-2" aria-label="Gained XP history">
              {gainedEntries.length === 0 ? (
                <p className="m-0 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  No session XP recorded yet.
                </p>
              ) : (
                gainedEntries.map(({ entry, index }) => (
                  <div
                    key={`gain-${index}`}
                    className="grid min-w-0 grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_4.5rem_auto] items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-1"
                  >
                    <input
                      type="text"
                      aria-label={`Gained XP session ${index + 1}`}
                      className="h-7 w-full min-w-0 bg-transparent px-1 text-xs font-semibold outline-none disabled:text-gray-800"
                      value={entry.session || "Session"}
                      disabled={mode === "play"}
                      onChange={(event) =>
                        changeEntry("gained", index, "session", event.target.value)
                      }
                    />
                    <input
                      type="text"
                      aria-label={`Gained XP notes ${index + 1}`}
                      placeholder="No notes"
                      className="h-7 w-full min-w-0 bg-transparent px-1 text-xs text-gray-500 outline-none disabled:text-gray-500"
                      value={entry.description || ""}
                      disabled={mode === "play"}
                      onChange={(event) =>
                        changeEntry("gained", index, "description", event.target.value)
                      }
                    />
                    <label className="flex h-7 items-center gap-1 rounded border border-gray-300 bg-white px-1 text-[10px] font-semibold uppercase text-gray-600">
                      <input
                        type="number"
                        min="0"
                        aria-label={`Gained XP amount ${index + 1}`}
                        className="h-full min-w-0 flex-1 bg-transparent text-center text-xs font-bold outline-none"
                        value={toAmount(entry.quantity)}
                        disabled={mode === "play"}
                        onChange={(event) =>
                          changeEntry("gained", index, "quantity", event.target.value)
                        }
                      />
                      XP
                    </label>
                    {mode === "edit" ? (
                      <button
                        type="button"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-white hover:text-red-700"
                        aria-label={`Remove gained XP entry ${index + 1}`}
                        onClick={() => removeEntry("gained", index)}
                      >
                        <CloseRoundedIcon sx={{ fontSize: "1rem" }} />
                      </button>
                    ) : (
                      <span className="w-0" aria-hidden="true" />
                    )}
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-3">
            <h2 className="m-0 text-sm font-bold text-gray-900">XP used</h2>
            <form className="mt-3 grid min-w-0 grid-cols-2 gap-2" onSubmit={addSpend}>
              <label className="min-w-0 text-xs font-medium text-gray-600">
                Used for
                <input
                  type="text"
                  aria-label="XP used for"
                  placeholder="Attribute, Skill, Merit, power…"
                  className={`${fieldClass} mt-1 w-full`}
                  value={spendDraft.description}
                  onChange={(event) =>
                    setSpendDraft((current) => ({ ...current, description: event.target.value }))
                  }
                />
              </label>
              <label className="min-w-0 text-xs font-medium text-gray-600">
                XP used
                <input
                  type="number"
                  min="1"
                  aria-label="XP used"
                  className={`${fieldClass} mt-1 w-full`}
                  value={spendDraft.quantity}
                  onChange={(event) =>
                    setSpendDraft((current) => ({ ...current, quantity: event.target.value }))
                  }
                />
              </label>
              <button
                type="submit"
                disabled={!spendDraft.description.trim() || toAmount(spendDraft.quantity) < 1}
                className="col-span-2 inline-flex h-9 items-center justify-center gap-1 rounded-md bg-[#333] px-3 text-xs font-semibold text-white hover:bg-[#111] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <AddRoundedIcon sx={{ fontSize: "1rem" }} /> Add XP expense
              </button>
            </form>

            <div className="mt-3 space-y-2" aria-label="Used XP history">
              {spentEntries.length === 0 ? (
                <p className="m-0 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                  No XP expenses recorded yet.
                </p>
              ) : (
                spentEntries.map(({ entry, index }) => (
                  <div
                    key={`spent-${index}`}
                    className="grid min-w-0 grid-cols-[minmax(0,1fr)_4.5rem_auto] items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-1"
                  >
                    <input
                      type="text"
                      aria-label={`Used XP description ${index + 1}`}
                      className="h-7 w-full min-w-0 bg-transparent px-1 text-xs font-semibold outline-none disabled:text-gray-800"
                      value={entry.description || ""}
                      disabled={mode === "play"}
                      onChange={(event) =>
                        changeEntry("spent", index, "description", event.target.value)
                      }
                    />
                    <label className="flex h-7 items-center gap-1 rounded border border-gray-300 bg-white px-1 text-[10px] font-semibold uppercase text-gray-600">
                      <input
                        type="number"
                        min="0"
                        aria-label={`Used XP amount ${index + 1}`}
                        className="h-full min-w-0 flex-1 bg-transparent text-center text-xs font-bold outline-none"
                        value={toAmount(entry.quantity)}
                        disabled={mode === "play"}
                        onChange={(event) =>
                          changeEntry("spent", index, "quantity", event.target.value)
                        }
                      />
                      XP
                    </label>
                    {mode === "edit" ? (
                      <button
                        type="button"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-white hover:text-red-700"
                        aria-label={`Remove used XP entry ${index + 1}`}
                        onClick={() => removeEntry("spent", index)}
                      >
                        <CloseRoundedIcon sx={{ fontSize: "1rem" }} />
                      </button>
                    ) : (
                      <span className="w-0" aria-hidden="true" />
                    )}
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </CategoryContainer>
  );
}
