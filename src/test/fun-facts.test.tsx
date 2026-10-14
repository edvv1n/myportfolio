import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import FunFactPopup from "../components/FunFactPopup";

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn() })));
});
afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });
it("shows a fact within the configured interval and allows pausing all popups", () => {
  render(<FunFactPopup />);
  expect(screen.queryByLabelText("A fun fact from Edwin")).toBeNull();
  act(() => { vi.advanceTimersByTime(12000); });
  expect(screen.getByLabelText("A fun fact from Edwin")).toBeTruthy();
  fireEvent.click(screen.getByTitle("Pause fun facts"));
  act(() => { vi.advanceTimersByTime(100000); });
  expect(screen.getByTitle("Enable fun facts").getAttribute("aria-pressed")).toBe("false");
  expect(screen.queryByLabelText("A fun fact from Edwin")).toBeNull();
});
it("defers a fact while the visitor is typing", () => {
  render(<><input aria-label="Message" /><FunFactPopup /></>);
  screen.getByLabelText("Message").focus();
  act(() => { vi.advanceTimersByTime(12000); });
  expect(screen.queryByLabelText("A fun fact from Edwin")).toBeNull();
  screen.getByLabelText("Message").blur();
  act(() => { vi.advanceTimersByTime(12000); });
  expect(screen.getByLabelText("A fun fact from Edwin")).toBeTruthy();
});

it("starts at 12 seconds and picks a different topic at the next 12-second tick", () => {
  render(<FunFactPopup />);
  act(() => { vi.advanceTimersByTime(11999); });
  expect(screen.queryByRole("status")).toBeNull();
  act(() => { vi.advanceTimersByTime(1); });
  const first = screen.getByRole("status").textContent;
  const topic = screen.getByText(/Edwin’s fun fact/).textContent;
  act(() => { vi.advanceTimersByTime(12000); });
  expect(screen.getAllByRole("status").at(-1)?.textContent).not.toBe(first);
  expect(screen.getAllByText(/Edwin’s fun fact/).at(-1)?.textContent).not.toBe(topic);
  expect(screen.getAllByLabelText("A fun fact from Edwin").at(-1)?.className).not.toContain("fact-bottom");
});
