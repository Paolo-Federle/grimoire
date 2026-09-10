import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import {
  SheetDataProvider,
  SheetViewProvider,
} from "../components/Sheet/05_SheetDataContext";
import SkillsSection from "../components/Sheet/Skills/15_SkillsSection";
import { normalizeSheetData } from "../components/Sheet/sheetStorage";

const buildSheet = (specialties = []) => ({
  ...sheetData,
  skills: {
    ...sheetData.skills,
    mental: {
      ...sheetData.skills.mental,
      academics: {
        ...sheetData.skills.mental.academics,
        specialties,
      },
    },
  },
});

const renderSkills = ({ mode = "edit", specialties = [] } = {}) => {
  const initialData = buildSheet(specialties);
  const onChange = vi.fn();
  const result = render(
    <SheetViewProvider value={{ mode, setMode: vi.fn() }}>
      <SheetDataProvider initialData={initialData} onChange={onChange}>
        <SkillsSection min={0} max={5} />
      </SheetDataProvider>
    </SheetViewProvider>
  );

  return { ...result, initialData, onChange };
};

describe("skill specialties", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("adds an empty specialties array when a legacy sheet does not contain one", () => {
    const legacyAcademics = {
      base: sheetData.skills.mental.academics.base,
      modifier: sheetData.skills.mental.academics.modifier,
    };
    const normalized = normalizeSheetData({
      ...sheetData,
      skills: {
        ...sheetData.skills,
        mental: {
          ...sheetData.skills.mental,
          academics: legacyAcademics,
        },
      },
    });

    expect(normalized.skills.mental.academics.specialties).toEqual([]);
  });

  it("adds, persists and removes a normalized specialty without mutating initial data", () => {
    vi.useFakeTimers();
    const initialSpecialties = [];
    const { initialData, onChange } = renderSkills({ specialties: initialSpecialties });

    fireEvent.click(screen.getByRole("button", { name: "Add specialty" }));
    fireEvent.change(screen.getByRole("textbox", { name: "Specialty name" }), {
      target: { value: "  Field   Research  " },
    });
    fireEvent.click(screen.getByRole("button", { name: "Save specialty" }));

    expect(screen.getByText("Field Research")).toBeInTheDocument();
    expect(screen.getByText("1 specialty")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(400));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].skills.mental.academics.specialties).toEqual([
      "Field Research",
    ]);
    expect(initialData.skills.mental.academics.specialties).toBe(initialSpecialties);
    expect(initialData.skills.mental.academics.specialties).toEqual([]);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Remove Field Research specialty from Academics",
      })
    );
    expect(screen.queryByText("Field Research")).not.toBeInTheDocument();
    act(() => vi.advanceTimersByTime(400));
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][0].skills.mental.academics.specialties).toEqual([]);
  });

  it("rejects duplicate specialties case-insensitively", () => {
    renderSkills({ specialties: ["History"] });

    fireEvent.click(screen.getByRole("button", { name: "Add specialty" }));
    fireEvent.change(screen.getByRole("textbox", { name: "Specialty name" }), {
      target: { value: "history" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Save specialty" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "That specialty is already listed for this skill."
    );
    expect(screen.getAllByText("History")).toHaveLength(1);
  });

  it("adds a specialty to the Skill selected in the compact editor", () => {
    vi.useFakeTimers();
    const { onChange } = renderSkills();

    fireEvent.click(screen.getByRole("button", { name: "Add specialty" }));
    fireEvent.change(screen.getByRole("combobox", { name: "Skill for specialty" }), {
      target: { value: "physical.firearms" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Specialty name" }), {
      target: { value: "Pistols" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Save specialty" }));

    expect(screen.getByText("Pistols")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(400));
    expect(onChange.mock.calls[0][0].skills.physical.firearms.specialties).toEqual([
      "Pistols",
    ]);
  });

  it("shows recorded specialties but no editing controls in play mode", () => {
    renderSkills({ mode: "play", specialties: ["History"] });

    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Add specialty" })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Remove History specialty from Academics" })
    ).not.toBeInTheDocument();
  });

  it("returns focus to the add control when Escape closes the editor", async () => {
    renderSkills();

    fireEvent.click(screen.getByRole("button", { name: "Add specialty" }));
    const input = screen.getByRole("textbox", { name: "Specialty name" });
    expect(input).toHaveFocus();

    fireEvent.keyDown(input, { key: "Escape" });
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Add specialty" })).toHaveFocus()
    );
  });
});
