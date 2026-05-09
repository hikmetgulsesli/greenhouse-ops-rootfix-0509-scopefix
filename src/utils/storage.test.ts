import { describe, it, expect, vi, beforeEach } from "vitest";
import { loadState, saveState, clearStorage, isStorageAvailable, isStorageFull, StorageError } from "./storage";

describe("storage utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should check storage availability", () => {
    expect(isStorageAvailable()).toBe(true);
  });

  it("should check if storage is full", () => {
    expect(isStorageFull()).toBe(false);
  });

  it("should save and load state", () => {
    const data = { tasks: [{ id: "1", title: "Test" }] };
    saveState(data);
    const loaded = loadState<typeof data>();
    expect(loaded).toEqual(data);
  });

  it("should return null when no state exists", () => {
    const loaded = loadState<unknown>();
    expect(loaded).toBeNull();
  });

  it("should clear storage", () => {
    saveState({ test: true });
    clearStorage();
    const loaded = loadState<unknown>();
    expect(loaded).toBeNull();
  });

  it("should throw StorageError on quota exceeded", () => {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key: string, value: string) {
      const err = new DOMException("Quota exceeded", "QuotaExceededError");
      throw err;
    };
    expect(() => saveState({ data: "x" })).toThrow(StorageError);
    Storage.prototype.setItem = originalSetItem;
  });
});
