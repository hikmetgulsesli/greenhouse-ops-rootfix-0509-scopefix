import { describe, it, expect } from "vitest";
import type { Task, Equipment, MaintenanceLogEntry, AppSettings, Notification } from "./domain";

describe("domain types", () => {
  it("should allow creating a valid Task", () => {
    const task: Task = {
      id: "t-1",
      title: "Test Task",
      description: "Test Description",
      status: "todo",
      priority: "high",
      assignee: "Test User",
      zone: "Zone A",
      dueDate: "2024-01-01",
      createdAt: new Date().toISOString(),
    };
    expect(task.status).toBe("todo");
    expect(task.priority).toBe("high");
  });

  it("should allow creating a valid Equipment", () => {
    const eq: Equipment = {
      id: "e-1",
      name: "Test Pump",
      type: "irrigation",
      zone: "Zone B",
      health: 85,
      state: "online",
      lastService: "2024-01-01",
      nextService: "2024-07-01",
    };
    expect(eq.state).toBe("online");
    expect(eq.type).toBe("irrigation");
  });

  it("should allow creating a valid MaintenanceLogEntry", () => {
    const log: MaintenanceLogEntry = {
      id: "l-1",
      date: "2024-01-01T10:00:00",
      equipment: "Test Unit",
      action: "Test Action",
      technician: "Test Tech",
      status: "completed",
    };
    expect(log.status).toBe("completed");
  });

  it("should allow creating valid AppSettings", () => {
    const settings: AppSettings = {
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
    expect(settings.theme).toBe("dark");
    expect(settings.maxTemperature).toBe(28.5);
  });

  it("should allow creating a valid Notification", () => {
    const notif: Notification = {
      id: "n-1",
      title: "Test Alert",
      message: "Test message",
      type: "warning",
      read: false,
      timestamp: new Date().toISOString(),
    };
    expect(notif.type).toBe("warning");
    expect(notif.read).toBe(false);
  });
});
