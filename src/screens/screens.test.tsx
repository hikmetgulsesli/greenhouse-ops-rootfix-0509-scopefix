import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { FilteredOverview } from "../src/screens/FilteredOverview";
import { MaintenanceLog } from "../src/screens/MaintenanceLog";
import type { AppState, Task, MaintenanceLogEntry, AppSettings } from "../src/types/domain";

const defaultSettings: AppSettings = {
  theme: "dark",
  pushAlerts: true,
  emailDigests: false,
  smsWarnings: true,
  sensorRefreshRate: "Standard (5s)",
  logSyncInterval: "Every 15 mins",
  maxTemperature: 28.5,
  minHumidity: 65,
  maxCO2: 1200,
};

function makeState(overrides: Partial<AppState> = {}): AppState {
  return {
    currentScreen: "filtered",
    tasks: [],
    equipment: [],
    logs: [],
    settings: { ...defaultSettings },
    searchQuery: "",
    notifications: [],
    ...overrides,
  };
}

const mockTasks: Task[] = [
  {
    id: "t-1",
    title: "Replace faulty flow valve",
    description: "Main irrigation valve showing pressure irregularities",
    status: "todo",
    priority: "high",
    assignee: "Marcus Johnson",
    zone: "Zone B",
    dueDate: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: "t-2",
    title: "Calibrate humidity sensors",
    description: "Quarterly calibration for Zone 4 sensors",
    status: "in-progress",
    priority: "medium",
    assignee: "Anna Lee",
    zone: "Sector 4",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: "t-3",
    title: "Quarterly inspection of exhaust fans",
    description: "Routine fan inspection and cleaning",
    status: "todo",
    priority: "low",
    assignee: null,
    zone: "All Zones",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: "t-4",
    title: "Patch structural leak",
    description: "Water ingress detected in Bay 2",
    status: "in-progress",
    priority: "critical",
    assignee: "Tom Servo",
    zone: "Bay 2",
    dueDate: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
];

const mockLogs: MaintenanceLogEntry[] = [
  {
    id: "l-1",
    date: "2023-10-26T08:30:00",
    equipment: "Zone A - Climate Unit 4",
    action: "Replaced HEPA filters",
    technician: "J. Doe",
    status: "completed",
  },
  {
    id: "l-2",
    date: "2023-10-25T14:15:00",
    equipment: "Irrigation Pump P-02",
    action: "Quarterly lubrication and seal check",
    technician: "M. Smith",
    status: "completed",
  },
  {
    id: "l-3",
    date: "2023-10-25T10:00:00",
    equipment: "Sensor Array ZB-1",
    action: "Recalibration sequence initiated",
    technician: "J. Doe",
    status: "in-progress",
  },
  {
    id: "l-4",
    date: "2023-10-24T16:45:00",
    equipment: "Nutrient Doser N-01",
    action: "Valve replacement (Emergency)",
    technician: "R. Klein",
    status: "issue-logged",
  },
];

describe("FilteredOverview", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all tasks from state", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.getByText("Calibrate humidity sensors")).toBeInTheDocument();
    expect(screen.getByText("Patch structural leak")).toBeInTheDocument();
  });

  it("filters tasks by search query", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks, searchQuery: "valve" })} />);
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.queryByText("Calibrate humidity sensors")).not.toBeInTheDocument();
  });

  it("filters by critical status chip", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks })} />);
    const criticalBtn = screen.getByRole("button", { name: /critical status/i });
    fireEvent.click(criticalBtn);
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.getByText("Patch structural leak")).toBeInTheDocument();
    expect(screen.queryByText("Calibrate humidity sensors")).not.toBeInTheDocument();
    expect(screen.queryByText("Quarterly inspection of exhaust fans")).not.toBeInTheDocument();
  });

  it("filters by due today chip", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks })} />);
    const todayBtn = screen.getByRole("button", { name: /due today/i });
    fireEvent.click(todayBtn);
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.getByText("Patch structural leak")).toBeInTheDocument();
    expect(screen.queryByText("Calibrate humidity sensors")).not.toBeInTheDocument();
  });

  it("filters by assigned chip", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks })} />);
    const assignedBtn = screen.getByRole("button", { name: /assigned to me/i });
    fireEvent.click(assignedBtn);
    expect(screen.queryByText("Quarterly inspection of exhaust fans")).not.toBeInTheDocument();
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
  });

  it("shows empty state when no tasks match", () => {
    render(<FilteredOverview state={makeState({ tasks: [] })} />);
    expect(screen.getByText(/no tasks match your filters/i)).toBeInTheDocument();
  });

  it("shows result count", () => {
    render(<FilteredOverview state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText(/found 4 results/i)).toBeInTheDocument();
  });
});

describe("MaintenanceLog", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all logs from state", () => {
    render(<MaintenanceLog state={makeState({ logs: mockLogs })} />);
    expect(screen.getByText("Zone A - Climate Unit 4")).toBeInTheDocument();
    expect(screen.getByText("Irrigation Pump P-02")).toBeInTheDocument();
    expect(screen.getByText("Sensor Array ZB-1")).toBeInTheDocument();
    expect(screen.getByText("Nutrient Doser N-01")).toBeInTheDocument();
  });

  it("filters logs by search", () => {
    render(<MaintenanceLog state={makeState({ logs: mockLogs })} />);
    const searchInput = screen.getByPlaceholderText(/search logs/i);
    fireEvent.change(searchInput, { target: { value: "pump" } });
    expect(screen.getByText("Irrigation Pump P-02")).toBeInTheDocument();
    expect(screen.queryByText("Zone A - Climate Unit 4")).not.toBeInTheDocument();
  });

  it("filters logs by status", () => {
    render(<MaintenanceLog state={makeState({ logs: mockLogs })} />);
    const statusSelect = screen.getByRole("combobox");
    fireEvent.change(statusSelect, { target: { value: "completed" } });
    expect(screen.getByText("Zone A - Climate Unit 4")).toBeInTheDocument();
    expect(screen.getByText("Irrigation Pump P-02")).toBeInTheDocument();
    expect(screen.queryByText("Sensor Array ZB-1")).not.toBeInTheDocument();
    expect(screen.queryByText("Nutrient Doser N-01")).not.toBeInTheDocument();
  });

  it("shows empty state when no logs match", () => {
    render(<MaintenanceLog state={makeState({ logs: [] })} />);
    expect(screen.getByText(/no logs match your filters/i)).toBeInTheDocument();
  });

  it("shows entry count in footer", () => {
    render(<MaintenanceLog state={makeState({ logs: mockLogs })} />);
    expect(screen.getByText(/showing 4 of 4 entries/i)).toBeInTheDocument();
  });
});
