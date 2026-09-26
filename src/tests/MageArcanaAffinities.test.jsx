import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import { SheetDataProvider } from "../components/Sheet/05_SheetDataContext";
import RaceDotsGroup from "../components/Sheet/Race/25_RaceDotsGroup";
import { loadRaceCatalog } from "../components/Sheet/raceOptions";

const renderAcanthusArcana = async () => {
  const catalog = await loadRaceCatalog("mage");
  const arcanaGroup = catalog.sectionConfig.dotGroups.find(
    (group) => group.title === "Arcana"
  );
  const mageSheet = {
    ...sheetData,
    character: {
      ...sheetData.character,
      race: { selected: "mage" },
      details: {
        ...sheetData.character.details,
        mage: {
          ...sheetData.character.details.mage,
          path: { selected: "Acanthus" },
          legacy: { selected: "walkers_in_mists" },
        },
      },
    },
  };

  render(
    <SheetDataProvider initialData={mageSheet}>
      <RaceDotsGroup {...arcanaGroup} />
    </SheetDataProvider>
  );
};

describe("Mage Arcana affinities", () => {
  it("marks Path and Legacy Arcana while leaving Common Arcana unmarked", async () => {
    await renderAcanthusArcana();

    expect(within(screen.getByText("Time").parentElement).getByText("Ruling")).toBeInTheDocument();
    expect(within(screen.getByText("Fate").parentElement).getByText("Ruling")).toBeInTheDocument();
    expect(within(screen.getByText("Space").parentElement).getByText("Ruling")).toBeInTheDocument();
    expect(within(screen.getByText("Forces").parentElement).getByText("Inferior")).toBeInTheDocument();
    expect(within(screen.getByText("Death").parentElement).queryByText(/Ruling|Inferior/)).not.toBeInTheDocument();
  });

  it("allows affinity exceptions and keeps only one custom Inferior Arcanum", async () => {
    await renderAcanthusArcana();

    fireEvent.click(screen.getByRole("button", { name: "Customize Death affinity" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "Inferior" }));

    expect(within(screen.getByText("Death").parentElement).getByText("Inferior")).toBeInTheDocument();
    expect(within(screen.getByText("Forces").parentElement).queryByText("Inferior")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset affinities" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Customize Time affinity" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "Common" }));

    expect(within(screen.getByText("Time").parentElement).queryByText("Ruling")).not.toBeInTheDocument();
  });
});
