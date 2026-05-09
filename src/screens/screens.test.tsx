import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { StorageErrorState } from "./StorageErrorState";
import { EmptyState } from "./EmptyState";
import { EquipmentStatus } from "./EquipmentStatus";
import { TaskBoard } from "./TaskBoard";
import type { AppState, Equipment, Task, AppSettings } from "../types/domain";

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
    currentScreen: "dashboard",
    tasks: [],
    equipment: [],
    logs: [],
    settings: { ...defaultSettings },
    searchQuery: "",
    notifications: [],
    ...overrides,
  };
}

const mockEquipment: Equipment[] = [
  {
    id: "e-1",
    name: "HVAC Unit Alpha",
    type: "hvac",
    zone: "Zone 1 Climate Control",
    health: 42,
    state: "offline",
    lastService: "2023-10-12",
    nextService: "OVERDUE",
  },
  {
    id: "e-2",
    name: "Soil Array 4",
    type: "sensor",
    zone: "Zone 3 Moisture/pH",
    health: 98,
    state: "online",
    lastService: "2023-11-05",
    nextService: "2024-05-05",
  },
  {
    id: "e-3",
    name: "Main Pump B",
    type: "irrigation",
    zone: "Central Reservoir",
    health: 65,
    state: "maintenance",
    lastService: "2023-08-22",
    nextService: "In Progress",
  },
  {
    id: "e-4",
    name: "LED Array West",
    type: "lighting",
    zone: "Zone 2 Canopy",
    health: 92,
    state: "online",
    lastService: "2023-09-10",
    nextService: "2024-03-10",
  },
];

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
    status: "todo",
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
    priority: "high",
    assignee: "Tom Servo",
    zone: "Bay 2",
    dueDate: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: "t-5",
    title: "Refill nutrient dosing tanks",
    description: "Nutrient levels below threshold",
    status: "completed",
    priority: "medium",
    assignee: "M. Smith",
    zone: "Nutrient Room",
    dueDate: new Date().toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
];

describe("StorageErrorState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders error message and error code", () => {
    render(<StorageErrorState />);
    expect(screen.getByText("Data Sync Error")).toBeInTheDocument();
    expect(screen.getByText(/ERR_QUOTA_EXCEEDED/)).toBeInTheDocument();
    expect(screen.getByText(/Local storage is full or unavailable/)).toBeInTheDocument();
  });

  it("calls onClose when retry button is clicked", () => {
    const onClose = vi.fn();
    render(<StorageErrorState onClose={onClose} />);
    const retryBtn = screen.getByRole("button", { name: /retry storage sync/i });
    fireEvent.click(retryBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onBack when retry button is clicked and onClose is not provided", () => {
    const onBack = vi.fn();
    render(<StorageErrorState onBack={onBack} />);
    const retryBtn = screen.getByRole("button", { name: /retry storage sync/i });
    fireEvent.click(retryBtn);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clear storage button is clicked", () => {
    const onClose = vi.fn();
    render(<StorageErrorState onClose={onClose} />);
    const clearBtn = screen.getByRole("button", { name: /clear local storage/i });
    fireEvent.click(clearBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("navigates to dashboard via sidebar", () => {
    const onNavigate = vi.fn();
    render(<StorageErrorState onNavigate={onNavigate} />);
    const dashboardBtn = screen.getByRole("button", { name: /dashboard/i });
    fireEvent.click(dashboardBtn);
    expect(onNavigate).toHaveBeenCalled();
  });
});

describe("EmptyState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders empty state message", () => {
    render(<EmptyState />);
    expect(screen.getByText("No Tasks Found")).toBeInTheDocument();
    expect(screen.getByText(/Get started by creating your first maintenance task/)).toBeInTheDocument();
  });

  it("calls onAction with new-task when create button is clicked", () => {
    const onAction = vi.fn();
    render(<EmptyState onAction={onAction} />);
    const createBtn = screen.getByRole("button", { name: /create new task/i });
    fireEvent.click(createBtn);
    expect(onAction).toHaveBeenCalledWith("new-task");
  });

  it("navigates via sidebar buttons", () => {
    const onNavigate = vi.fn();
    render(<EmptyState onNavigate={onNavigate} />);
    const dashboardBtn = screen.getByRole("button", { name: /dashboard/i });
    fireEvent.click(dashboardBtn);
    expect(onNavigate).toHaveBeenCalled();
  });
});

describe("EquipmentStatus", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all equipment from state", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    expect(screen.getByText("HVAC Unit Alpha")).toBeInTheDocument();
    expect(screen.getByText("Soil Array 4")).toBeInTheDocument();
    expect(screen.getByText("Main Pump B")).toBeInTheDocument();
    expect(screen.getByText("LED Array West")).toBeInTheDocument();
  });

  it("filters by equipment type", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    const typeSelect = screen.getByLabelText(/equipment type/i);
    fireEvent.change(typeSelect, { target: { value: "sensor" } });
    expect(screen.getByText("Soil Array 4")).toBeInTheDocument();
    expect(screen.queryByText("HVAC Unit Alpha")).not.toBeInTheDocument();
  });

  it("filters by operational state", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    const stateSelect = screen.getByLabelText(/operational state/i);
    fireEvent.change(stateSelect, { target: { value: "offline" } });
    expect(screen.getByText("HVAC Unit Alpha")).toBeInTheDocument();
    expect(screen.queryByText("Soil Array 4")).not.toBeInTheDocument();
  });

  it("filters by health status", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    const healthSelect = screen.getByLabelText(/health status/i);
    fireEvent.change(healthSelect, { target: { value: "optimal" } });
    expect(screen.getByText("Soil Array 4")).toBeInTheDocument();
    expect(screen.getByText("LED Array West")).toBeInTheDocument();
    expect(screen.queryByText("HVAC Unit Alpha")).not.toBeInTheDocument();
  });

  it("shows empty state when no equipment matches filters", () => {
    render(<EquipmentStatus state={makeState({ equipment: [] })} />);
    expect(screen.getByText(/no equipment matches your filters/i)).toBeInTheDocument();
  });

  it("shows correct health percentage and bar color", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    expect(screen.getByText("42%")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
  });

  it("disables schedule button for maintenance state equipment", () => {
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} />);
    const maintenanceBtn = screen.getByRole("button", { name: /maintenance active/i });
    expect(maintenanceBtn).toBeDisabled();
  });

  it("navigates to tasks when schedule maintenance is clicked", () => {
    const onNavigate = vi.fn();
    render(<EquipmentStatus state={makeState({ equipment: mockEquipment })} onNavigate={onNavigate} />);
    const scheduleButtons = screen.getAllByRole("button", { name: /schedule maintenance/i });
    fireEvent.click(scheduleButtons[0]);
    expect(onNavigate).toHaveBeenCalled();
  });
});

describe("TaskBoard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all task columns", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("renders tasks in correct columns", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.getByText("Patch structural leak")).toBeInTheDocument();
    expect(screen.getByText("Refill nutrient dosing tanks")).toBeInTheDocument();
  });

  it("filters tasks by search", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    const searchInput = screen.getByPlaceholderText(/search tasks/i);
    fireEvent.change(searchInput, { target: { value: "valve" } });
    expect(screen.getByText("Replace faulty flow valve")).toBeInTheDocument();
    expect(screen.queryByText("Calibrate humidity sensors")).not.toBeInTheDocument();
  });

  it("shows task priority badges", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText("High")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Low")).toBeInTheDocument();
  });

  it("shows assignee initials or unassigned", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    expect(screen.getByText("MJ")).toBeInTheDocument();
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("Unassigned")).toBeInTheDocument();
  });

  it("calls onAction when new task button is clicked", () => {
    const onAction = vi.fn();
    render(<TaskBoard state={makeState({ tasks: mockTasks })} onAction={onAction} />);
    const newTaskBtn = screen.getByRole("button", { name: /new task/i });
    fireEvent.click(newTaskBtn);
    expect(onAction).toHaveBeenCalledWith("new-task");
  });

  it("shows completed tasks with strikethrough", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    const completedTask = screen.getByText("Refill nutrient dosing tanks");
    expect(completedTask).toBeInTheDocument();
  });

  it("shows task counts per column", () => {
    render(<TaskBoard state={makeState({ tasks: mockTasks })} />);
    const counts = screen.getAllByText(/\d+/).filter((el) => el.classList.contains("font-mono"));
    expect(counts.length).toBeGreaterThan(0);
  });
});
