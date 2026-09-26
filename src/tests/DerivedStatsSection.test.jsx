import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import { SheetDataProvider } from "../components/Sheet/05_SheetDataContext";
import DerivedStatsSection from "../components/Sheet/Traits/15_DerivedStatsSection";

describe("Other traits details", () => {
  it("exposes its compact details control as an accessible disclosure", () => {
    render(
      <SheetDataProvider initialData={sheetData}>
        <DerivedStatsSection />
      </SheetDataProvider>
    );

    const button = screen.getByRole("button", { name: "Show details" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Base 1 | Mod 0")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByRole("button", { name: "Hide details" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    expect(screen.getByRole("region", { name: "Other traits details" })).toBeInTheDocument();
    expect(screen.getByText("Base 1 | Mod 0")).toBeInTheDocument();
  });
});
