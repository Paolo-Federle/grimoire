import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { sheetData as template } from "../components/Sheet/00_SheetData";
import { SheetDataProvider, SheetViewProvider, useSheetData } from "../components/Sheet/05_SheetDataContext";
import WerewolfFormsSection from "../components/Sheet/Race/35_WerewolfFormsSection";
import { HealthTracker } from "../components/Sheet/Health/Health";
import SheetAutoCalculations from "../components/Sheet/20_SheetAutoCalculations";
import AttributesSection from "../components/Sheet/Attributes/15_AttributesSection";
import DerivedStatsSection from "../components/Sheet/Traits/15_DerivedStatsSection";
import CharacterSheet from "../components/Sheet/10_CharacterSheet";
import { buildSheetTraits } from "../components/Sheet/Dice/DiceRoller";
import { getActiveWerewolfStats, getWerewolfFormStats, getSheetAttributeTotal } from "../components/Sheet/sheetWerewolfForms";
import { normalizeSheetData, buildSheetDownloadPayload, parseImportedSheetText } from "../components/Sheet/sheetStorage";

function makeWerewolf() {
  const data = normalizeSheetData(template);
  data.character.race.selected = "werewolf";
  data.attributes.physical.strength.base = 3;
  data.attributes.physical.dexterity.base = 2;
  data.attributes.physical.stamina.base = 3;
  data.attributes.mental.wits.base = 3;
  data.attributes.social.composure.base = 2;
  data.attributes.social.manipulation.base = 2;
  return data;
}

function Snapshot() {
  const { sheetData } = useSheetData();
  return <pre data-testid="sheet-data">{JSON.stringify(sheetData)}</pre>;
}

const currentData = () => JSON.parse(screen.getByTestId("sheet-data").textContent);
const chooseForm = (name) => fireEvent.click(screen.getByRole("radio", { name: new RegExp(`^${name} `) }));

describe("Werewolf 1e forms", () => {
  it.each([
    ["hishu", 3, 2, 3, 2, 5, 8, 2, 4, 10, 5],
    ["dalu", 4, 2, 4, 1, 6, 10, 2, 4, 11, 7],
    ["gauru", 6, 3, 5, 2, 7, 12, 3, 5, 14, 8],
    ["urshul", 5, 4, 5, 1, 6, 11, 3, 6, 17, 8],
    ["urhan", 3, 4, 4, 2, 4, 8, 3, 6, 15, 9],
  ])("calculates %s without double-counting attribute bonuses", (form, strength, dexterity, stamina, manipulation, size, health, defense, initiative, speed, perception) => {
    expect(getWerewolfFormStats(makeWerewolf(), form)).toEqual({
      strength, dexterity, stamina, manipulation, size, health, defense, initiative, speed, perception,
      armor: form === "gauru" ? "1/1" : "-",
    });
  });

  it("includes manual modifiers and uses species factor, rather than Size, for Speed", () => {
    const data = makeWerewolf();
    data.derived_stats.size = 4;
    data.attributes.physical.strength.modifier = 1;
    data.attributes.physical.dexterity.modifier = 2;
    data.attributes.physical.stamina.modifier = -1;
    data.attributes.mental.wits.modifier = 1;
    data.derived_stats.speed.modifier = 3;
    data.derived_stats.defense.modifier = 1;
    data.derived_stats.initiative.modifier = 2;
    data.derived_stats.health_mod = 2;
    data.derived_stats.armor = "2/1";
    expect(getWerewolfFormStats(data, "gauru")).toMatchObject({
      strength: 7, dexterity: 5, stamina: 4, size: 6, health: 12,
      defense: 5, initiative: 9, speed: 20, armor: "1/1 natural; 2/1 other",
    });
  });

  it("defaults legacy and invalid selections to Hishu and ignores forms for other races", () => {
    const data = makeWerewolf();
    delete data.race_details.werewolf;
    expect(getActiveWerewolfStats(data).strength).toBe(3);
    data.race_details.werewolf = { current_form: "crinos" };
    expect(getActiveWerewolfStats(data).strength).toBe(3);
    data.race_details.werewolf.current_form = "gauru";
    data.character.race.selected = "vampire";
    expect(getActiveWerewolfStats(data)).toBeNull();
    expect(getSheetAttributeTotal(data, "physical", "strength")).toBe(3);
  });

  it("updates dice pools and clamps shifted Manipulation to one", () => {
    const data = makeWerewolf();
    data.race_details.werewolf.current_form = "urshul";
    data.attributes.social.manipulation.base = 1;
    const traits = buildSheetTraits(data);
    const value = (id) => traits.find((trait) => trait.id === id).value;
    expect(value("attributes.physical.strength")).toBe(5);
    expect(value("attributes.social.manipulation")).toBe(1);
    expect(value("derived.defense")).toBe(3);
    expect(value("derived.initiative")).toBe(6);
    expect(value("derived.size")).toBe(6);
    expect(value("werewolf.perception")).toBe(8);
  });

  it("shifts in Play mode without mutating base stats and survives export/import", () => {
    const initialData = makeWerewolf();
    render(<SheetDataProvider initialData={initialData}><SheetViewProvider value={{ mode: "play" }}><SheetAutoCalculations /><WerewolfFormsSection /><AttributesSection min={1} max={5} /><Snapshot /></SheetViewProvider></SheetDataProvider>);
    chooseForm("Gauru");
    expect(screen.getByRole("radio", { name: "Gauru Wolf-Man" })).toBeChecked();
    expect(screen.getByRole("group", { name: "Strength: 6 (Gauru)", exact: true })).toBeInTheDocument();
    chooseForm("Urshul");
    const shifted = currentData();
    expect(shifted.attributes).toEqual(initialData.attributes);
    expect(shifted.derived_stats.speed.base).toBe(10);
    expect(shifted.race_details.werewolf.current_form).toBe("urshul");
    const imported = parseImportedSheetText(JSON.stringify(buildSheetDownloadPayload({ data: shifted })));
    expect(getActiveWerewolfStats(imported.data).speed).toBe(17);
    chooseForm("Hishu");
    expect(getActiveWerewolfStats(currentData()).strength).toBe(3);
    expect(initialData.race_details.werewolf.current_form).toBe("hishu");
  });

  it("shows changes in existing attribute and trait sections without a duplicate stats grid", () => {
    render(<SheetDataProvider initialData={makeWerewolf()}><SheetViewProvider value={{ mode: "play" }}><WerewolfFormsSection /><AttributesSection min={1} max={5} /><DerivedStatsSection /><Snapshot /></SheetViewProvider></SheetDataProvider>);
    chooseForm("Gauru");
    expect(screen.queryByLabelText("Gauru stats")).not.toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Strength: 6 (Gauru)", exact: true })).toBeInTheDocument();
    const otherTraits = screen.getByRole("region", { name: "OTHER TRAITS content" });
    expect(within(otherTraits).getByText("Perception")).toBeInTheDocument();
    expect(within(otherTraits).getByText("14")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("group", { name: "Strength attribute" })).getByRole("button", { name: "+", exact: true }));
    expect(screen.getByRole("group", { name: "Strength: 7 (Gauru)", exact: true })).toBeInTheDocument();
    expect(currentData().attributes.physical.strength).toEqual({ base: 3, modifier: 1 });
    fireEvent.click(screen.getByRole("button", { name: "Compare forms", exact: true }));
    const comparison = screen.getByRole("region", { name: "Form comparison" });
    expect(within(comparison).getAllByRole("row")).toHaveLength(12);
    expect(within(comparison).getByRole("row", { name: /^Strength/ })).toHaveTextContent("Strength 4 5 7 6 4".replaceAll(" ", ""));
  });

  it("places the selector in the Character page and retains its selection across pages", () => {
    render(<CharacterSheet initialData={makeWerewolf()} />);
    chooseForm("Urshul");
    expect(screen.getByRole("group", { name: "Strength: 5 (Urshul)", exact: true })).toBeInTheDocument();
    const characterTab = screen.getByRole("tab", { name: "Character", exact: true });
    const selector = screen.getByRole("region", { name: "WEREWOLF FORMS content" });
    expect(characterTab.compareDocumentPosition(selector) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    fireEvent.click(screen.getByRole("tab", { name: "Powers", exact: true }));
    expect(screen.queryByRole("radio", { name: "Urshul Near-Wolf" })).not.toBeInTheDocument();
    fireEvent.click(characterTab);
    expect(screen.getByRole("radio", { name: "Urshul Near-Wolf" })).toBeChecked();
    expect(screen.getByRole("group", { name: "Strength: 5 (Urshul)", exact: true })).toBeInTheDocument();
  });

  it.each(["play", "edit"])("shows bonus dots beyond five in %s mode without changing base ratings", (mode) => {
    const data = makeWerewolf();
    data.attributes.physical.strength.base = 5;
    render(<SheetDataProvider initialData={data}><SheetViewProvider value={{ mode }}><WerewolfFormsSection /><AttributesSection min={1} max={5} /><Snapshot /></SheetViewProvider></SheetDataProvider>);
    chooseForm("Gauru");
    const dots = screen.getByRole("group", { name: "Strength: 8 (Gauru)", exact: true });
    expect(dots.children).toHaveLength(8);
    expect(dots.querySelectorAll(".bg-green-500")).toHaveLength(3);
    expect(dots.querySelectorAll(".bg-black")).toHaveLength(5);
    expect(screen.queryByLabelText("Strength current value")).not.toBeInTheDocument();
    expect(screen.queryByText("Hishu 5 · Form +3")).not.toBeInTheDocument();
    fireEvent.click(dots.children[7]);
    expect(currentData().attributes.physical.strength.base).toBe(5);
    chooseForm("Urshul");
    const manipulation = screen.getByRole("group", { name: "Manipulation: 1 (Urshul)", exact: true });
    expect(manipulation.querySelectorAll(".bg-black")).toHaveLength(1);
    expect(manipulation.querySelectorAll(".bg-red-500")).toHaveLength(1);
    chooseForm("Hishu");
    const humanDots = screen.getByRole("group", { name: "Strength: 5 (Hishu)", exact: true });
    expect(humanDots.children).toHaveLength(5);
    expect(humanDots.querySelectorAll(".bg-green-500")).toHaveLength(0);
    expect(currentData().attributes).toEqual(data.attributes);
  });

  it("preserves wounds and resistant marks when returning to lower Health", () => {
    const data = makeWerewolf();
    data.race_details.werewolf.current_form = "gauru";
    data.derived_stats.damage = Array(12).fill("bashing");
    data.derived_stats.resistant_damage = Array(12).fill(false);
    data.derived_stats.resistant_damage[11] = true;
    render(<SheetDataProvider initialData={data}><WerewolfFormsSection /><HealthTracker /><Snapshot /></SheetDataProvider>);
    expect(screen.getAllByRole("button", { name: /^Health box/ })).toHaveLength(12);
    chooseForm("Hishu");
    expect(screen.getAllByRole("button", { name: /^Health box/ })).toHaveLength(8);
    expect(screen.getAllByRole("button", { name: /^Overflow damage box/ })).toHaveLength(4);
    expect(screen.getByRole("status")).toHaveTextContent("4 boxes beyond current Health.");
    expect(currentData().derived_stats.damage).toEqual(Array(12).fill("bashing"));
    expect(currentData().derived_stats.resistant_damage[11]).toBe(true);
    chooseForm("Gauru");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Resistant damage box 12" })).toHaveAttribute("aria-pressed", "true");
  });
});
