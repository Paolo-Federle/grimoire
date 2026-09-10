import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CategoryContainer from "../components/Sheet/Common/17_CategoryContainer";

describe("sheet category accordion", () => {
  it("opens and closes a section without unmounting or resetting its content", async () => {
    render(
      <CategoryContainer section="EXPERIENCE">
        <label>
          Notes
          <input defaultValue="Session reward" />
        </label>
      </CategoryContainer>
    );

    const toggle = screen.getByRole("button", { name: "EXPERIENCE" });
    const content = screen.getByRole("region", { name: "EXPERIENCE content" });
    const input = screen.getByRole("textbox", { name: "Notes" });

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(content).toBeVisible();

    fireEvent.change(input, { target: { value: "Five XP" } });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await waitFor(() => expect(content).not.toBeVisible());

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await waitFor(() => expect(content).toBeVisible());
    expect(input).toHaveValue("Five XP");
  });
});
