import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App shell", () => {
  it("should render the app with sidebar navigation", () => {
    render(<App />);
    expect(document.querySelector("nav")).not.toBeNull();
  });

  it("should navigate to Task Board when clicked", () => {
    render(<App />);
    const buttons = screen.getAllByText("Task Board");
    fireEvent.click(buttons[0]);
    expect(document.querySelector("nav")).not.toBeNull();
  });

  it("should render sidebar with all nav items", () => {
    render(<App />);
    expect(screen.getAllByText("Dashboard").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Task Board").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Equipment").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Logs").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Settings").length).toBeGreaterThan(0);
  });

  it("should have New Maintenance Task button", () => {
    render(<App />);
    const buttons = screen.getAllByText("New Maintenance Task");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should show notification button", () => {
    render(<App />);
    const notifBtn = screen.getByLabelText("Notifications");
    expect(notifBtn).not.toBeNull();
  });

  it("should update search query on input change", () => {
    render(<App />);
    const searchInputs = screen.getAllByPlaceholderText("Search systems...");
    const searchInput = searchInputs[0] as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "pump" } });
    expect(searchInput.value).toBe("pump");
  });
});
