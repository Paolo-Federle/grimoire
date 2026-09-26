import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import {
  SheetDataProvider,
  SheetViewProvider,
} from "../components/Sheet/05_SheetDataContext";
import { SelectInput } from "../components/Sheet/Common/35_SelectInput";

describe("SelectInput empty option", () => {
  it("lets an editable race-detail selection be cleared", () => {
    const handleChange = vi.fn();

    render(
      <SheetViewProvider value={{ mode: "edit", setMode: vi.fn() }}>
        <SheetDataProvider initialData={sheetData}>
          <SelectInput
            label="Order"
            field={{ selected: "Silver Ladder" }}
            options={["Adamantine Arrow", "Silver Ladder"]}
            allowEmpty
            onChange={handleChange}
          />
        </SheetDataProvider>
      </SheetViewProvider>
    );

    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Order" }));
    fireEvent.click(screen.getByRole("option", { name: "— None —" }));

    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("does not add the empty choice to regular selectors", () => {
    render(
      <SheetViewProvider value={{ mode: "edit", setMode: vi.fn() }}>
        <SheetDataProvider initialData={sheetData}>
          <SelectInput
            label="Race"
            field={{ selected: "mage" }}
            options={[{ value: "mage", label: "Mage" }]}
          />
        </SheetDataProvider>
      </SheetViewProvider>
    );

    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Race" }));

    expect(screen.queryByRole("option", { name: "— None —" })).not.toBeInTheDocument();
  });
});
