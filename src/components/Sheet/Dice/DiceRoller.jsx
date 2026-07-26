import { useMemo, useState } from "react";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

const title = (value) =>
  String(value || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const totalTrait = (trait) =>
  Number(trait?.base || 0) + Number(trait?.modifier || 0);

const addTraits = (target, idPrefix, group, traits, valueReader = Number) => {
  Object.entries(traits || {}).forEach(([key, value]) => {
    const resolvedValue = valueReader(value);
    if (Number.isFinite(resolvedValue)) {
      target.push({
        id: `${idPrefix}.${key}`,
        group,
        label: title(key),
        value: resolvedValue,
      });
    }
  });
};

export function buildSheetTraits(sheetData) {
  const traits = [];

  Object.entries(sheetData.attributes || {}).forEach(([category, values]) =>
    addTraits(traits, `attributes.${category}`, `Attributes · ${title(category)}`, values, totalTrait)
  );
  Object.entries(sheetData.skills || {}).forEach(([category, values]) =>
    addTraits(traits, `skills.${category}`, `Skills · ${title(category)}`, values, totalTrait)
  );

  const selectedRace = sheetData.character?.race?.selected || "";
  const powerName =
    sheetData.race_traits?.race_specific_names?.[selectedRace]?.energy_strength ||
    "Power Stat";
  if (selectedRace && selectedRace !== "mortal") {
    traits.push({
      id: "race.power",
      group: title(selectedRace),
      label: powerName,
      value: Number(sheetData.race_traits?.energy_strength?.value || 0),
    });
  }

  if (selectedRace === "mage") {
    addTraits(
      traits,
      "arcana",
      "Mage · Arcana",
      sheetData.race_powers?.mage?.arcana,
      Number
    );
  }
  if (selectedRace === "werewolf") {
    addTraits(
      traits,
      "renown",
      "Werewolf · Renown",
      sheetData.race_powers?.werewolf?.renown,
      Number
    );
  }
  if (selectedRace === "mummy") {
    addTraits(
      traits,
      "pillars",
      "Mummy · Pillars",
      sheetData.race_powers?.mummy?.pillars,
      Number
    );
  }

  traits.push(
    {
      id: "morality.score",
      group: "Advantages",
      label: title(sheetData.morality?.[selectedRace] || "Morality"),
      value: Number(sheetData.morality?.score || 0),
    },
    {
      id: "willpower.max",
      group: "Advantages",
      label: "Willpower",
      value:
        totalTrait(sheetData.attributes?.mental?.resolve) +
        totalTrait(sheetData.attributes?.social?.composure) +
        Number(sheetData.derived_stats?.willpower_mod || 0),
    },
    {
      id: "derived.defense",
      group: "Derived",
      label: "Defense",
      value:
        Number(sheetData.derived_stats?.defense?.base || 0) +
        Number(sheetData.derived_stats?.defense?.modifier || 0),
    },
    {
      id: "derived.initiative",
      group: "Derived",
      label: "Initiative",
      value:
        Number(sheetData.derived_stats?.initiative?.base || 0) +
        Number(sheetData.derived_stats?.initiative?.modifier || 0),
    },
    {
      id: "derived.size",
      group: "Derived",
      label: "Size",
      value: Number(sheetData.derived_stats?.size || 0),
    }
  );

  (sheetData.merits || []).forEach((merit, index) => {
    if (merit.name) {
      traits.push({
        id: `merit.${index}`,
        group: "Merits",
        label: merit.name,
        value: Number(merit.dots || 0),
      });
    }
  });

  return traits;
}

export function rollDicePool(pool, again = 10, rote = false, random = Math.random) {
  if (pool <= 0) {
    const die = Math.floor(random() * 10) + 1;
    const dice = [die];
    let successes = die === 10 ? 1 : 0;
    let nextDie = die;

    while (nextDie === 10) {
      nextDie = Math.floor(random() * 10) + 1;
      dice.push(nextDie);
      if (nextDie === 10) successes += 1;
    }

    return {
      dice,
      successes,
      chance: true,
      dramaticFailure: die === 1,
    };
  }

  const dice = [];
  const failures = [];
  let queue = pool;
  let successes = 0;

  while (queue > 0) {
    const die = Math.floor(random() * 10) + 1;
    dice.push(die);
    if (die >= 8) successes += 1;
    else if (dice.length <= pool) failures.push(die);
    if (die >= again) queue += 1;
    queue -= 1;
  }

  if (rote) {
    failures.forEach(() => {
      let reroll;
      do {
        reroll = Math.floor(random() * 10) + 1;
        dice.push(reroll);
        if (reroll >= 8) successes += 1;
      } while (reroll >= again);
    });
  }

  return { dice, successes, chance: false, dramaticFailure: false };
}

function TraitSelect({ value, onChange, traits, label }) {
  const groups = traits.reduce((result, trait) => {
    result[trait.group] = [...(result[trait.group] || []), trait];
    return result;
  }, {});

  return (
    <div className="space-y-1 text-xs text-slate-300">
      <span>{label}</span>
      <select
        aria-label={label}
        className="block w-full rounded bg-white px-2 py-2 text-sm text-gray-900"
        value={traits.some((trait) => trait.id === value) ? value : ""}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">None</option>
        {Object.entries(groups).map(([group, options]) => (
          <optgroup key={group} label={group}>
            {options.map((trait) => (
              <option key={trait.id} value={trait.id}>
                {trait.label} ({trait.value})
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

const resultLabel = (result) => {
  if (result.dramaticFailure) return "Dramatic failure";
  if (result.successes >= 5) return `Exceptional success · ${result.successes} successes`;
  if (result.successes > 0) return `${result.successes} ${result.successes === 1 ? "success" : "successes"}`;
  return "Failure";
};

export default function DiceRoller() {
  const { sheetData, setSheetData } = useSheetData();
  const traits = useMemo(() => buildSheetTraits(sheetData), [sheetData]);
  const availableTraits = useMemo(
    () => traits.filter((trait) => trait.value !== 0),
    [traits]
  );
  const [components, setComponents] = useState([
    "attributes.mental.intelligence",
    "",
    "",
  ]);
  const [modifier, setModifier] = useState(0);
  const [again, setAgain] = useState(10);
  const [rote, setRote] = useState(false);
  const [result, setResult] = useState(null);
  const [rollName, setRollName] = useState("");
  const [selectedSavedRoll, setSelectedSavedRoll] = useState("");

  const selectedTraits = components
    .map((id) => {
      const trait = availableTraits.find((item) => item.id === id);
      return trait || null;
    })
    .filter(Boolean);
  const basePool = selectedTraits.reduce((sum, trait) => sum + trait.value, 0);
  const pool = basePool + Number(modifier || 0);

  const updateComponent = (index, value) => {
    setComponents((current) =>
      current.map((component, componentIndex) =>
        componentIndex === index ? value : component
      )
    );
  };

  const roll = () => {
    setResult(rollDicePool(pool, again, rote));
  };

  const savedRolls = sheetData.saved_rolls || [];

  const saveRoll = () => {
    const name = rollName.trim();
    if (!name) return;

    const record = {
      id: `roll-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      components: [...components],
      modifier: Number(modifier || 0),
      again,
      rote,
    };

    setSheetData((prev) =>
      updateValueAtPath(prev, ["saved_rolls"], [...(prev.saved_rolls || []), record])
    );
    setRollName("");
    setSelectedSavedRoll(record.id);
  };

  const loadRoll = (rollId) => {
    setSelectedSavedRoll(rollId);
    const savedRoll = savedRolls.find((item) => item.id === rollId);
    if (!savedRoll) return;

    setComponents([...(savedRoll.components || ["", "", ""])]);
    setModifier(Number(savedRoll.modifier || 0));
    setAgain(Number(savedRoll.again || 10));
    setRote(Boolean(savedRoll.rote));
    setResult(null);
  };

  const deleteRoll = (rollId) => {
    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["saved_rolls"],
        (prev.saved_rolls || []).filter((item) => item.id !== rollId)
      )
    );
    setSelectedSavedRoll("");
  };

  return (
    <section className="rounded-2xl border border-[#d4d4d4] bg-gradient-to-br from-slate-950 to-slate-700 p-4 text-white shadow-lg">
      <div className="mb-3 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto]">
        <select
          aria-label="Saved rolls"
          className="rounded bg-white px-2 py-2 text-sm text-gray-900"
          value={selectedSavedRoll}
          onChange={(event) => loadRoll(event.target.value)}
        >
          <option value="">
            {savedRolls.length ? "Select a saved roll…" : "No saved rolls"}
          </option>
          {savedRolls.map((savedRoll) => (
            <option key={savedRoll.id} value={savedRoll.id}>
              {savedRoll.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={!selectedSavedRoll}
          className="rounded border border-rose-300/40 px-3 py-2 text-sm text-rose-200 hover:bg-rose-950/40 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => deleteRoll(selectedSavedRoll)}
        >
          Remove
        </button>
      </div>

      <div className="mb-3 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto_auto]">
        <input
          type="text"
          aria-label="Saved roll name"
          placeholder="Name this roll"
          className="rounded bg-white px-3 py-2 text-sm text-gray-900"
          value={rollName}
          onChange={(event) => setRollName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              saveRoll();
            }
          }}
        />
        <button
          type="button"
          disabled={!rollName.trim()}
          className="rounded border border-white/25 px-3 py-2 text-sm hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={saveRoll}
        >
          Save current roll
        </button>
        <div className="flex items-center justify-center rounded bg-white/10 px-3 py-1 font-bold">
          {pool} dice
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {components.map((component, index) => (
          <TraitSelect
            key={index}
            label={`Pool component ${index + 1}`}
            value={component}
            onChange={(value) => updateComponent(index, value)}
            traits={availableTraits}
          />
        ))}
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <label className="space-y-1 text-xs text-slate-300">
          Static modifier
          <input aria-label="Dice modifier" type="number" className="block w-full rounded bg-white px-2 py-2 text-sm text-gray-900" value={modifier} onChange={(event) => setModifier(Number(event.target.value))} />
        </label>
        <label className="space-y-1 text-xs text-slate-300">
          Again rule
          <select aria-label="Again rule" className="block w-full rounded bg-white px-2 py-2 text-sm text-gray-900" value={again} onChange={(event) => setAgain(Number(event.target.value))}>
            <option value={10}>10-again</option><option value={9}>9-again</option><option value={8}>8-again</option>
          </select>
        </label>
        <button type="button" className="mt-auto inline-flex items-center justify-center gap-2 rounded bg-rose-600 px-3 py-2 font-semibold hover:bg-rose-500" onClick={roll}>
          <CasinoRoundedIcon fontSize="small" /> Roll
        </button>
      </div>

      <label className="mt-3 inline-flex items-center gap-2 text-sm">
        <input type="checkbox" checked={rote} onChange={(event) => setRote(event.target.checked)} />
        Rote action
      </label>

      {selectedTraits.length ? (
        <div className="mt-2 text-xs text-slate-300">
          {selectedTraits.map((trait) => `${trait.label} ${trait.value}`).join(" + ")}
          {modifier ? ` ${modifier > 0 ? "+" : "−"} ${Math.abs(modifier)}` : ""}
        </div>
      ) : null}

      {result ? (
        <div className="mt-3 rounded-lg bg-black/25 p-3" aria-live="polite">
          <strong>{resultLabel(result)}</strong>
          {result.chance ? " · Chance die" : ""}
          <div className="mt-2 flex flex-wrap gap-1 text-sm">
            {result.dice.map((die, index) => (
              <span key={index} className={`rounded px-2 py-1 ${die >= 8 ? "bg-emerald-500" : die === 1 ? "bg-rose-700" : "bg-white/15"}`}>{die}</span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
