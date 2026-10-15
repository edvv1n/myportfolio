import { describe, expect, it } from "vitest";
import { getActiveSection } from "../lib/active-section";

const positions = (scroll: number) => [
  { id: "home", top: -scroll },
  { id: "about", top: 900 - scroll },
  { id: "projects", top: 1700 - scroll },
  { id: "contact", top: 7200 - scroll },
];

describe("section navigation", () => {
  it("keeps Projects active throughout a section taller than the viewport", () => {
    for (const scroll of [1620, 2500, 4500, 6900]) {
      expect(getActiveSection(positions(scroll), 200, false)).toBe("projects");
    }
  });
  it("tracks transitions when scrolling down and back up", () => {
    const active = [0, 750, 1620, 7050, 3000, 1000, 0].map((scroll) =>
      getActiveSection(positions(scroll), 200, false)
    );
    expect(active).toEqual([
      "home",
      "about",
      "projects",
      "contact",
      "projects",
      "about",
      "home",
    ]);
  });
  it("activates a short final section at the bottom of the page", () => {
    expect(getActiveSection(positions(6600), 200, true)).toBe("contact");
  });
});
