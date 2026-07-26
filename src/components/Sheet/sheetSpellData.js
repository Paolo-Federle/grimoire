import { SpellsData } from "../../Data/Mage/Arcana/allArcana";
import { PATHS } from "../../pages/path";
import { slugify } from "../../utils";

const normalizeArcanaName = (value) =>
  String(value || "")
    .replace(/[^\w\s]/g, "")
    .trim()
    .toLowerCase();

const extractSpellLevel = (arcanaValue) => {
  const bulletMatch = String(arcanaValue || "").match(/(?:•|â€¢|Ã¢â‚¬Â¢|ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢)/g);
  return bulletMatch?.length || 0;
};

const cleanHtmlText = (value) =>
  String(value || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const normalizedSpells = SpellsData.map((spell) => ({
  ...spell,
  arcanaName: normalizeArcanaName(spell.Arcana),
  level: extractSpellLevel(spell.Arcana),
  dicePool: cleanHtmlText(spell.RoteDice || ""),
  detailPath: spell?.Name
    ? `${PATHS.MAGE.SPELLS}/${slugify(spell.Name)}`
    : null,
}));

export function getSpellOptionsForArcanaLevel(arcana, level) {
  const normalizedArcana = normalizeArcanaName(arcana);
  const numericLevel = Number(level) || 0;

  return normalizedSpells
    .filter(
      (spell) => spell.arcanaName === normalizedArcana && spell.level === numericLevel
    )
    .map((spell) => spell.Name);
}

export function getSpellByTitle(arcana, level, title) {
  const normalizedArcana = normalizeArcanaName(arcana);
  const numericLevel = Number(level) || 0;

  return normalizedSpells.find(
    (spell) =>
      spell.arcanaName === normalizedArcana &&
      spell.level === numericLevel &&
      spell.Name === title
  );
}

export function getSpellDetailPath(title) {
  return normalizedSpells.find((spell) => spell.Name === title)?.detailPath || null;
}
