// Werewolf: The Forsaken 1e, pp. 170-173; also shown on page 2 of
// Forsaken2-Page_Editable.pdf. Speed/Initiative bonuses already include
// attribute increases. Defense remains the lower of current Dexterity/Wits.
// Rules reference: https://doczz.net/doc/1241548/werewolf---the-forsaken
export const WEREWOLF_FORMS = [
  { id: "hishu", name: "Hishu", description: "Human", attributes: {}, size: 0, speed: 0, initiative: 0, perception: 0,
    notes: ["No form bonuses or Lunacy."] },
  { id: "dalu", name: "Dalu", description: "Near-Human", attributes: { strength: 1, stamina: 1, manipulation: -1 }, size: 1, speed: 1, initiative: 0, perception: 2,
    notes: ["Lunacy: observers count as having 4 extra Willpower."] },
  { id: "gauru", name: "Gauru", description: "Wolf-Man", attributes: { strength: 3, dexterity: 1, stamina: 2 }, size: 2, speed: 4, initiative: 1, perception: 3, naturalArmor: "1/1",
    notes: ["Full Lunacy; rage invoked.", "Ignore wound penalties and unconsciousness rolls; -2 to resist Death Rage.", "Bite +2 lethal; claws +1 lethal. Most Mental and Social tasks fail."] },
  { id: "urshul", name: "Urshul", description: "Near-Wolf", attributes: { strength: 2, dexterity: 2, stamina: 2, manipulation: -3 }, size: 1, speed: 7, initiative: 2, perception: 3,
    notes: ["Lunacy: observers count as having 2 extra Willpower.", "Bite +2 lethal; human speech is unavailable."] },
  { id: "urhan", name: "Urhan", description: "Wolf", attributes: { dexterity: 2, stamina: 1 }, size: -1, speed: 5, initiative: 2, perception: 4,
    notes: ["Bite +2 lethal; no Lunacy or human speech."] },
];

const number = (value) => Number(value) || 0;
export const isWerewolfSheet = (data) => data.character?.race?.selected === "werewolf";

export function getWerewolfForm(data, formId = data.race_details?.werewolf?.current_form) {
  return WEREWOLF_FORMS.find((form) => form.id === formId) || WEREWOLF_FORMS[0];
}

function baseAttribute(data, category, name) {
  const trait = data.attributes?.[category]?.[name];
  return number(trait?.base) + number(trait?.modifier);
}

export function getSheetAttributeTotal(data, category, name) {
  const base = baseAttribute(data, category, name);
  return isWerewolfSheet(data)
    ? Math.max(1, base + (getWerewolfForm(data).attributes[name] || 0))
    : base;
}

export function getWerewolfFormStats(data, formId) {
  const form = getWerewolfForm(data, formId);
  const attribute = (category, name) =>
    Math.max(1, baseAttribute(data, category, name) + (form.attributes[name] || 0));
  const stats = data.derived_stats || {};
  const size = Math.max(1, number(stats.size) + form.size);
  const otherArmor = String(stats.armor || "").trim();

  return {
    strength: attribute("physical", "strength"),
    dexterity: attribute("physical", "dexterity"),
    stamina: attribute("physical", "stamina"),
    manipulation: attribute("social", "manipulation"),
    size,
    health: Math.max(0, attribute("physical", "stamina") + size + number(stats.health_mod)),
    defense: Math.min(attribute("physical", "dexterity"), attribute("mental", "wits")) + number(stats.defense?.modifier),
    initiative: attribute("physical", "dexterity") + attribute("social", "composure") + number(stats.initiative?.modifier),
    // Species factor is 5 in Hishu, independent of Size (e.g. Small-Framed).
    speed: Math.max(1, baseAttribute(data, "physical", "strength")) + Math.max(1, baseAttribute(data, "physical", "dexterity")) + 5 + form.speed + number(stats.speed?.modifier),
    armor: form.naturalArmor
      ? otherArmor ? `${form.naturalArmor} natural; ${otherArmor} other` : form.naturalArmor
      : otherArmor || "-",
    perception: attribute("mental", "wits") + attribute("social", "composure") + form.perception,
  };
}

export function getActiveWerewolfStats(data) {
  return isWerewolfSheet(data) ? getWerewolfFormStats(data) : null;
}
