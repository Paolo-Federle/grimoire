import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import {
  SheetDataProvider,
  SheetViewProvider,
} from "../components/Sheet/05_SheetDataContext";
import ExperienceSection, {
  calculateExperienceTotals,
} from "../components/Sheet/Experience/15_ExperienceSection";
import { normalizeSheetData } from "../components/Sheet/sheetStorage";

const renderExperience = ({ mode = "play", experience = sheetData.experience } = {}) => {
  const initialData = { ...sheetData, experience };
  const onChange = vi.fn();

  render(
    <SheetViewProvider value={{ mode, setMode: vi.fn() }}>
      <SheetDataProvider initialData={initialData} onChange={onChange}>
        <ExperienceSection />
      </SheetDataProvider>
    </SheetViewProvider>
  );

  return { initialData, onChange };
};

const summaryValue = (label) =>
  within(screen.getByText(label).parentElement).getByRole("strong").textContent;

describe("experience section", () => {
  afterEach(() => vi.useRealTimers());

  it("calculates current, gained and used XP from the history", () => {
    expect(
      calculateExperienceTotals({
        gained: [{ quantity: 5 }, { quantity: 3 }],
        spent: [{ quantity: 2 }],
      })
    ).toEqual({ gained: 8, spent: 2, current: 6 });
  });

  it("records session gains and expenses while keeping totals in sync", () => {
    vi.useFakeTimers();
    const { initialData, onChange } = renderExperience();

    fireEvent.change(screen.getByRole("textbox", { name: "Session" }), {
      target: { value: "Session 12" },
    });
    fireEvent.change(screen.getByRole("spinbutton", { name: "XP gained" }), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add session XP/i }));

    fireEvent.change(screen.getByRole("textbox", { name: "XP used for" }), {
      target: { value: "Academics 3" },
    });
    fireEvent.change(screen.getByRole("spinbutton", { name: "XP used" }), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add XP expense/i }));

    expect(summaryValue("Current XP")).toBe("3");
    expect(summaryValue("Gained")).toBe("5");
    expect(summaryValue("Used")).toBe("2");
    expect(screen.getByDisplayValue("Session 12")).toBeDisabled();
    expect(screen.getByDisplayValue("Academics 3")).toBeDisabled();
    expect(screen.queryByRole("button", { name: /Remove .* XP entry/i })).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(400));
    const savedExperience = onChange.mock.calls.at(-1)[0].experience;
    expect(savedExperience).toMatchObject({
      total: 5,
      spent_total: 2,
      unspent_total: 3,
    });
    expect(savedExperience.gained[0]).toMatchObject({
      session: "Session 12",
      quantity: 5,
    });
    expect(savedExperience.spent[0]).toMatchObject({
      description: "Academics 3",
      quantity: 2,
    });
    expect(initialData.experience.gained[0].quantity).toBe(0);
  });

  it("normalizes legacy XP entries with the session field", () => {
    const normalized = normalizeSheetData({
      ...sheetData,
      experience: {
        ...sheetData.experience,
        gained: [{ quantity: 3, description: "Old entry", extra_quantity: 0 }],
      },
    });

    expect(normalized.experience.gained[0]).toMatchObject({
      session: "",
      quantity: 3,
      description: "Old entry",
    });
  });
});
