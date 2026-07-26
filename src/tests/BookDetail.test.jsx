import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BookDetail from "../pages/Generale/BookDetail";
import { loadSearchIndex } from "../search/searchClient";

vi.mock("../search/searchClient", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    loadSearchIndex: vi.fn(),
  };
});

function renderBook(path) {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/books/:slug" element={<BookDetail />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("BookDetail", () => {
  beforeEach(() => {
    loadSearchIndex.mockResolvedValue([
      {
        id: "discipline-1",
        title: "Animalism",
        summary: "Command animals and the Beast.",
        gameLine: "vampire",
        type: "Discipline",
        book: "VtR 116",
        meta: "",
        path: "/vampire/disciplines/animalism",
      },
      {
        id: "gift-1",
        title: "Warning Growl",
        summary: "A werewolf Gift.",
        gameLine: "werewolf",
        type: "Gift",
        book: "WtF 120",
        meta: "",
        path: "/werewolf/gifts/warning_growl",
      },
    ]);
  });

  it("shows editorial context, chapter summaries and linked wiki contents", async () => {
    renderBook("/books/vampire_the_requiem");

    expect(
      screen.getByRole("heading", { name: "Vampire: The Requiem" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Back to all books" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Editorial source" })
    ).not.toBeInTheDocument();
    expect(screen.getByText("Chapter One: Society of the Damned")).toBeInTheDocument();
    const animalismLinks = await screen.findAllByRole("link", { name: "Animalism" });
    expect(animalismLinks).toHaveLength(2);
    animalismLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/vampire/disciplines/animalism");
    });
    const referenceLinks = screen.getAllByRole("link", { name: "VtR 116" });
    expect(referenceLinks).toHaveLength(2);
    referenceLinks.forEach((link) => {
      expect(link).toHaveAttribute(
        "href",
        "https://online.fliphtml5.com/dymxg/zwrz/#p=116"
      );
    });
    expect(screen.getAllByText("Vampire: The Requiem")).toHaveLength(2);
    expect(screen.queryByText("Warning Growl")).not.toBeInTheDocument();
    expect(screen.getByText("1 linked entry")).toBeInTheDocument();
  });

  it("shows a verified supplement overview without exposing the book code", async () => {
    loadSearchIndex.mockResolvedValue([]);
    renderBook("/books/antagonists");

    expect(
      screen.getByText(
        "Details foes that anyone, mortal or supernatural, may encounter in their adventures."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Chapter One: The Living Dead")).toBeInTheDocument();
    expect(screen.queryByText("Book code")).not.toBeInTheDocument();
    expect(await screen.findByText("0 linked entries")).toBeInTheDocument();
  });

  it("labels an incomplete source outline as partial", async () => {
    loadSearchIndex.mockResolvedValue([]);
    renderBook("/books/free_council");

    expect(screen.getByText("Chapter Two: The Libertine Culture")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Partial overview: the editorial source currently describes only these sections."
      )
    ).toBeInTheDocument();
  });
});
