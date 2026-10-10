import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { sheetData as template } from "../components/Sheet/00_SheetData";
import { SheetDataProvider, SheetViewProvider, useSheetData } from "../components/Sheet/05_SheetDataContext";
import { HealthTracker } from "../components/Sheet/Health/Health";
import { WillpowerTracker } from "../components/Sheet/Willpower/Willpower";
import MoralitySection from "../components/Sheet/Traits/15_MoralitySection";
import { normalizeSheetData, buildSheetDownloadPayload, parseImportedSheetText } from "../components/Sheet/sheetStorage";

vi.mock("../components/Sheet/sheetDerangementData", () => ({
  loadDerangementCatalog: vi.fn(async () => ({
    options: [{ value: "anxiety", label: "Anxiety" }, { value: "phobia", label: "Phobia" }],
    pathById: new Map([["anxiety", "/derangements/anxiety"], ["phobia", "/derangements/phobia"]]),
    idByName: new Map([["anxiety", "anxiety"], ["phobia", "phobia"]]),
  })),
}));

function Snapshot() {
  const { sheetData } = useSheetData();
  return <pre data-testid="tracker-data">{JSON.stringify(sheetData)}</pre>;
}
const currentData = () => JSON.parse(screen.getByTestId("tracker-data").textContent);
const makeData = () => {
  const data = normalizeSheetData(template);
  data.character.race.selected = "mage";
  data.attributes.physical.stamina.base = 3;
  data.attributes.mental.resolve.base = 3;
  data.attributes.social.composure.base = 2;
  return data;
};
function renderTrackers(data, mode, children) {
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><SheetDataProvider initialData={data}><SheetViewProvider value={{ mode }}>{children}<Snapshot /></SheetViewProvider></SheetDataProvider></MemoryRouter>);
}

describe("character tracker controls", () => {
  it("omits counters and explanations while preserving existing marker states", () => {
    const data = makeData();
    data.derived_stats.willpower = ["filled", "filled", "crossed", "empty", "empty"];
    renderTrackers(data, "play", <><HealthTracker /><WillpowerTracker /></>);
    expect(currentData().derived_stats.willpower).toEqual(data.derived_stats.willpower);
    expect(screen.queryByLabelText("Available Willpower")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Willpower box 3: crossed" }));
    expect(screen.getByRole("button", { name: "Willpower box 3: filled" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Willpower box 3: filled" }));
    expect(screen.getByRole("button", { name: "Willpower box 3: empty" })).toBeInTheDocument();
    expect(screen.queryByLabelText("Unmarked Health")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Willpower box 3: empty" }));
    expect(screen.getByRole("button", { name: "Willpower box 3: crossed" }).querySelector("svg")).not.toBeNull();
    expect(screen.queryByText(/Click to cycle|Small dots mark|Bashing ·/)).not.toBeInTheDocument();
  });
  it("tracks damage and Willpower changes without remaining-point counters", () => {
    const data = makeData();
    data.derived_stats.damage = ["lethal", "bashing", ...Array(6).fill("none")];
    renderTrackers(data, "play", <><HealthTracker /><WillpowerTracker /></>);
    expect(screen.queryByLabelText("Unmarked Health")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Health box 1: lethal" }).querySelectorAll("svg.opacity-100")).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "Health box 3: none" }));
    expect(screen.getByRole("button", { name: "Health box 3: bashing" }).querySelectorAll("svg.opacity-100")).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "Resistant damage box 3" }));
    expect(currentData().derived_stats.resistant_damage[2]).toBe(true);
    expect(currentData().derived_stats.damage.slice(0, 3)).toEqual(["lethal", "bashing", "bashing"]);
    expect(screen.getAllByRole("button", { name: /^Willpower box \d+: filled$/ })).toHaveLength(5);
    fireEvent.click(screen.getByRole("button", { name: "Willpower box 4: filled" }));
    expect(screen.getAllByRole("button", { name: /^Willpower box \d+: filled$/ })).toHaveLength(3);
    fireEvent.contextMenu(screen.getByRole("button", { name: "Willpower box 4: empty" }));
    expect(screen.getAllByRole("button", { name: /^Willpower box \d+: filled$/ })).toHaveLength(4);
    expect(data.derived_stats.damage[2]).toBe("none");
  });

  it("edits derangements by level and preserves them when closing the editor", async () => {
    const data = makeData();
    data.morality.derangements[7] = [{ id: "entry-1", derangementId: "anxiety", quantity: 2 }];
    renderTrackers(data, "edit", <MoralitySection />);
    const disclosure = screen.getByRole("button", { name: "Show derangements" });
    expect(disclosure).toHaveAttribute("aria-expanded", "false");
    expect(disclosure).toHaveAttribute("aria-controls");
    fireEvent.click(disclosure);
    const level = await screen.findByRole("group", { name: "Level 7 derangements" });
    fireEvent.click(within(level).getByRole("button", { name: "Add derangement at level 7" }));
    expect(screen.getByRole("button", { name: "1 derangement", exact: true })).toBeInTheDocument();
    const select = within(level).getAllByRole("combobox", { name: "Derangement" })[1];
    fireEvent.mouseDown(select);
    expect(screen.queryByRole("option", { name: "Anxiety", exact: true })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("option", { name: "Phobia", exact: true }));
    expect(within(level).queryByRole("spinbutton")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2 derangements", exact: true })).toBeInTheDocument();
    expect(currentData().morality.derangements[7]).toHaveLength(2);
    const levelCount = within(level).getByRole("button", { name: "2 recorded", exact: true });
    fireEvent.mouseOver(levelCount);
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toHaveTextContent("Anxiety");
    expect(tooltip).toHaveTextContent("Phobia");
    fireEvent.mouseLeave(levelCount);
    fireEvent.click(within(level).getAllByRole("button", { name: "Remove derangement", exact: true })[0]);
    expect(currentData().morality.derangements[7]).toEqual([{ id: expect.any(String), derangementId: "phobia" }]);
    fireEvent.click(screen.getByRole("button", { name: "Hide derangements" }));
    fireEvent.click(screen.getByRole("button", { name: "Show derangements" }));
    expect(screen.getByRole("combobox", { name: "Derangement" })).toHaveTextContent("Phobia");
    expect(data.morality.derangements[7]).toEqual([{ id: "entry-1", derangementId: "anxiety", quantity: 2 }]);
  });

  it("keeps recorded derangements readable and protected in Play mode", async () => {
    const data = makeData();
    data.morality.derangements[7] = [{ id: "entry-1", derangementId: "anxiety", quantity: 2 }];
    renderTrackers(data, "play", <MoralitySection />);
    expect(screen.getByLabelText("Wisdom current rating")).toHaveTextContent(/7\s*\/\s*10/);
    fireEvent.click(screen.getByRole("button", { name: "Show derangements" }));
    const level = await screen.findByRole("group", { name: "Level 7 derangements" });
    expect(within(level).getByRole("combobox", { name: "Derangement" })).toHaveAttribute("aria-disabled", "true");
    expect(within(level).queryByRole("spinbutton")).not.toBeInTheDocument();
    expect(within(level).getByRole("button", { name: "Remove derangement" })).toBeDisabled();
    expect(screen.queryByRole("button", { name: /Add derangement at level/ })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open derangement details/ })).toHaveAttribute("href", "/derangements/anxiety");
  });

  it("lists recorded names in the collapsed count tooltip and drops legacy quantities from exports", async () => {
    const data = makeData();
    data.morality.derangements[7] = [
      { id: "entry-1", derangementId: "anxiety", quantity: 3 },
      { id: "entry-2", derangementId: "phobia", quantity: 2 },
      { id: "draft", derangementId: "" },
    ];
    data.experience.gained = [{ session: "One", quantity: 4 }];
    renderTrackers(data, "play", <MoralitySection />);
    const count = screen.getByRole("button", { name: "2 derangements", exact: true });
    expect(screen.queryByRole("region", { name: "Derangements", exact: true })).not.toBeInTheDocument();
    fireEvent.mouseOver(count);
    expect(await screen.findByText("Anxiety")).toBeInTheDocument();
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("Phobia");
    expect(tooltip).toHaveTextContent("Level 7");
    const payload = buildSheetDownloadPayload({ data: currentData() });
    const imported = parseImportedSheetText(JSON.stringify(payload));
    expect(imported.data.morality.derangements[7]).toEqual([
      { id: "entry-1", derangementId: "anxiety" },
      { id: "entry-2", derangementId: "phobia" },
      { id: "draft", derangementId: "" },
    ]);
    expect(imported.data.experience.gained[0].quantity).toBe(4);
    expect(data.morality.derangements[7][0].quantity).toBe(3);
  });
});
