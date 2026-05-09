import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAppState } from "./useAppState";
import type { Task, Equipment } from "../types/domain";

describe("useAppState", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should initialize with default state", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe("dashboard");
    expect(result.current.state.tasks.length).toBeGreaterThan(0);
    expect(result.current.state.equipment.length).toBeGreaterThan(0);
    expect(result.current.state.logs.length).toBeGreaterThan(0);
    expect(result.current.storageError).toBeNull();
  });

  it("should set screen", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setScreen("tasks");
    });
    expect(result.current.state.currentScreen).toBe("tasks");
  });

  it("should add a task", () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.tasks.length;
    act(() => {
      result.current.addTask({
        title: "Test Task",
        description: "Test Description",
        status: "todo",
        priority: "high",
        assignee: "Test User",
        zone: "Zone A",
        dueDate: "2024-01-01",
      });
    });
    expect(result.current.state.tasks.length).toBe(initialCount + 1);
    const added = result.current.state.tasks[result.current.state.tasks.length - 1];
    expect(added.title).toBe("Test Task");
    expect(added.id).toBeDefined();
    expect(added.createdAt).toBeDefined();
  });

  it("should update a task", () => {
    const { result } = renderHook(() => useAppState());
    const taskId = result.current.state.tasks[0].id;
    act(() => {
      result.current.updateTask(taskId, { status: "completed" });
    });
    const updated = result.current.state.tasks.find((t: Task) => t.id === taskId);
    expect(updated?.status).toBe("completed");
  });

  it("should delete a task", () => {
    const { result } = renderHook(() => useAppState());
    const taskId = result.current.state.tasks[0].id;
    const initialCount = result.current.state.tasks.length;
    act(() => {
      result.current.deleteTask(taskId);
    });
    expect(result.current.state.tasks.length).toBe(initialCount - 1);
    expect(result.current.state.tasks.find((t: Task) => t.id === taskId)).toBeUndefined();
  });

  it("should add equipment", () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.equipment.length;
    act(() => {
      result.current.addEquipment({
        name: "Test Pump",
        type: "irrigation",
        zone: "Zone X",
        health: 85,
        state: "online",
        lastService: "2024-01-01",
        nextService: "2024-07-01",
      });
    });
    expect(result.current.state.equipment.length).toBe(initialCount + 1);
  });

  it("should update equipment", () => {
    const { result } = renderHook(() => useAppState());
    const eqId = result.current.state.equipment[0].id;
    act(() => {
      result.current.updateEquipment(eqId, { health: 50 });
    });
    const updated = result.current.state.equipment.find((e: Equipment) => e.id === eqId);
    expect(updated?.health).toBe(50);
  });

  it("should add a log entry", () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.logs.length;
    act(() => {
      result.current.addLog({
        date: "2024-01-01T10:00:00",
        equipment: "Test Unit",
        action: "Test Action",
        technician: "Test Tech",
        status: "completed",
      });
    });
    expect(result.current.state.logs.length).toBe(initialCount + 1);
  });

  it("should update settings", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateSettings({ maxTemperature: 30 });
    });
    expect(result.current.state.settings.maxTemperature).toBe(30);
  });

  it("should set search query", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearchQuery("pump");
    });
    expect(result.current.state.searchQuery).toBe("pump");
  });

  it("should mark notification as read", () => {
    const { result } = renderHook(() => useAppState());
    const notifId = result.current.state.notifications[0]?.id;
    if (notifId) {
      act(() => {
        result.current.markNotificationRead(notifId);
      });
      const notif = result.current.state.notifications.find((n: { id: string; read: boolean }) => n.id === notifId);
      expect(notif?.read).toBe(true);
    }
  });

  it("should clear all notifications", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.clearAllNotifications();
    });
    expect(result.current.state.notifications.length).toBe(0);
  });

  it("should clear all storage and reset state", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.clearAllStorage();
    });
    expect(result.current.state.tasks.length).toBeGreaterThan(0);
    expect(result.current.storageError).toBeNull();
  });
});

describe("storage utilities", () => {
  it("should handle storage errors gracefully", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.storageError).toBeNull();
    expect(typeof result.current.retryStorage).toBe("function");
    expect(typeof result.current.clearAllStorage).toBe("function");
  });
});
