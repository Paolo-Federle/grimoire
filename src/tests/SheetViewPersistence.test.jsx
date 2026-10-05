import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import CharacterSheet from "../components/Sheet/10_CharacterSheet";
import { normalizeSheetData } from "../components/Sheet/sheetStorage";

describe("per-sheet Play/Edit mode", () => {
  afterEach(() => vi.useRealTimers());

  it("stores the selected mode in the sheet data", () => {
    vi.useFakeTimers();
    const onSheetDataChange = vi.fn();

    render(
      <CharacterSheet
        initialData={sheetData}
        onSheetDataChange={onSheetDataChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Edit" }));
    expect(screen.getByText("Editing all character values")).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(400));

    expect(onSheetDataChange.mock.calls.at(-1)[0].settings.view_mode).toBe("edit");
  });

  it("restores a saved mode and falls back to the legacy default", () => {
    const savedEditSheet = normalizeSheetData({
      ...sheetData,
      settings: {
        ...sheetData.settings,
        default_view: "play",
        view_mode: "edit",
      },
    });
    const legacyEditSheet = normalizeSheetData({
      ...sheetData,
      settings: {
        default_view: "edit",
        compact: false,
        confirm_session_reset: true,
      },
    });

    const { unmount } = render(<CharacterSheet initialData={savedEditSheet} />);
    expect(screen.getByText("Editing all character values")).toBeInTheDocument();
    unmount();

    render(<CharacterSheet initialData={legacyEditSheet} />);
    expect(screen.getByText("Editing all character values")).toBeInTheDocument();
  });
});
