import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import { SheetDataProvider, SheetViewProvider, useSheetData } from "../components/Sheet/05_SheetDataContext";
import MeritsSection from "../components/Sheet/Merits/15_MeritsSection";
import { buildSheetDownloadPayload, parseImportedSheetText } from "../components/Sheet/sheetStorage";

function StateProbe() {
  const { sheetData: current } = useSheetData();
  return <output data-testid="sheet-state">{JSON.stringify(current)}</output>;
}

function renderMerits(merits, mode = "edit") {
  return render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <SheetViewProvider value={{ mode }}>
        <SheetDataProvider initialData={{ ...sheetData, merits }}>
          <MeritsSection />
          <StateProbe />
        </SheetDataProvider>
      </SheetViewProvider>
    </MemoryRouter>
  );
}

function currentData() {
  return JSON.parse(screen.getByTestId("sheet-state").textContent);
}

function clickDot(label, rating) {
  const group = screen.getByRole("group", { name: label });
  fireEvent.click(group.firstChild.children[rating - 1]);
}

describe("sheet Merit aspects", () => {
  it("calculates totals above five, clears an aspect to zero, and exports the distribution", async () => {
    const initialMerit = { name: "Hollow", dots: 0, aspects: {} };
    renderMerits([initialMerit, { name: "Resources", dots: 3 }]);
    await screen.findByRole("group", { name: "Hollow Size dots" });

    clickDot("Hollow Size dots", 5);
    clickDot("Hollow Amenities dots", 3);
    clickDot("Hollow Doors dots", 2);
    expect(screen.getByLabelText("Hollow total dots")).toHaveTextContent("Total: 10");
    clickDot("Hollow Amenities dots", 3);
    expect(screen.getByLabelText("Hollow total dots")).toHaveTextContent("Total: 7");

    const data = currentData();
    expect(data.merits[0]).toEqual({ name: "Hollow", dots: 7, aspects: { Size: 5, Amenities: 0, Doors: 2 } });
    expect(data.merits[1]).toEqual({ name: "Resources", dots: 3 });
    expect(initialMerit).toEqual({ name: "Hollow", dots: 0, aspects: {} });
    const imported = parseImportedSheetText(JSON.stringify(buildSheetDownloadPayload({ data })));
    expect(imported.data.merits).toEqual(data.merits);
  });

  it("preserves a legacy total until the player sets the aspects", async () => {
    renderMerits([{ name: "Hollow", dots: 4 }]);
    await screen.findByText(/Previously recorded: 4 dots/);
    expect(currentData().merits[0]).toEqual({ name: "Hollow", dots: 4 });
    clickDot("Hollow Wards dots", 2);
    expect(currentData().merits[0]).toEqual({ name: "Hollow", dots: 2, aspects: { Wards: 2 } });
    expect(screen.queryByText(/Previously recorded/)).not.toBeInTheDocument();
  });

  it("initializes categories when selecting a Merit and clears them when changing to a regular Merit", async () => {
    renderMerits([{ name: "Resources", dots: 3 }]);
    await waitFor(() => expect(screen.queryByText("Loading merits...")).not.toBeInTheDocument());
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Merit" }));
    fireEvent.click(screen.getByRole("option", { name: "Hollow", exact: true }));
    expect(currentData().merits[0]).toEqual({
      name: "Hollow", dots: 0, aspects: { Size: 0, Amenities: 0, Doors: 0, Wards: 0 },
    });
    clickDot("Hollow Size dots", 5);
    clickDot("Hollow Wards dots", 5);
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Merit" }));
    fireEvent.click(screen.getByRole("option", { name: "Resources", exact: true }));
    expect(currentData().merits[0]).toEqual({ name: "Resources", dots: 5 });
    expect(screen.queryByRole("group", { name: "Hollow Size dots" })).not.toBeInTheDocument();
  });

  it("restores aspect ratings and keeps them read-only in Play mode", async () => {
    const merit = { name: "Hollow", dots: 5, aspects: { Size: 2, Wards: 3 } };
    renderMerits([merit], "play");
    await screen.findByRole("group", { name: "Hollow Size dots" });
    clickDot("Hollow Size dots", 5);
    expect(screen.getByLabelText("Hollow total dots")).toHaveTextContent("Total: 5");
    expect(currentData().merits[0]).toEqual(merit);
  });
});
