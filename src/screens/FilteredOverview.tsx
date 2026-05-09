import { useState, useMemo } from "react";
import type { AppState, Task, TaskPriority, TaskStatus } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

const priorityOrder: Record<TaskPriority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const statusOrder: Record<TaskStatus, number> = {
  "in-progress": 0,
  todo: 1,
  completed: 2,
};

const priorityBadge: Record<TaskPriority, { bg: string; text: string; label: string }> = {
  critical: { bg: "bg-error-container/20", text: "text-error", label: "Critical" },
  high: { bg: "bg-error/15", text: "text-error", label: "High" },
  medium: { bg: "bg-primary/15", text: "text-primary", label: "Medium" },
  low: { bg: "bg-surface-container-highest", text: "text-on-surface", label: "Routine" },
};

function initials(name: string | null): string {
  if (!name) return "--";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDueDate(dueDate: string): string {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  if (dueDate === today) return "Due: Today";
  if (dueDate === tomorrow) return "Due: Tomorrow";
  return `Due: ${dueDate}`;
}

export function FilteredOverview(props: FilteredOverviewProps = {}) {
  const { state, onNavigate } = props;
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const tasks: Task[] = state?.tasks ?? [];
  const searchQuery = state?.searchQuery ?? "";

  const combinedSearch = search || searchQuery;

  const filteredTasks = useMemo(() => {
    let result = tasks;

    // Text search
    if (combinedSearch.trim()) {
      const q = combinedSearch.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          (t.assignee ?? "").toLowerCase().includes(q) ||
          t.zone.toLowerCase().includes(q)
      );
    }

    // Filter chips
    if (activeFilters.has("critical")) {
      result = result.filter((t) => t.priority === "critical" || t.priority === "high");
    }
    if (activeFilters.has("due-today")) {
      const today = new Date().toISOString().split("T")[0];
      result = result.filter((t) => t.dueDate === today);
    }
    if (activeFilters.has("assigned")) {
      result = result.filter((t) => t.assignee !== null);
    }

    // Sort: priority then status
    return [...result].sort((a, b) => {
      const priDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priDiff !== 0) return priDiff;
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }, [tasks, combinedSearch, activeFilters]);

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleNavigate = (screen: string) => {
    if (onNavigate) {
      onNavigate(undefined, screen);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile search */}
      <div className="md:hidden px-4 pt-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-9 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="Search tasks..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
        {/* Page Header & Filters */}
        <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-on-surface tracking-tight">Active Tasks</h2>
            <p className="text-on-surface-variant mt-1">Filter and manage ongoing maintenance operations.</p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={() => toggleFilter("critical")}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
                activeFilters.has("critical")
                  ? "bg-error text-on-error"
                  : "bg-error-container/20 text-error border border-error/50 hover:bg-error-container/30"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">warning</span>
              Critical Status
            </button>
            <button
              onClick={() => toggleFilter("due-today")}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
                activeFilters.has("due-today")
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface border border-outline-variant hover:bg-surface-container-highest"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">today</span>
              Due Today
            </button>
            <button
              onClick={() => toggleFilter("assigned")}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${
                activeFilters.has("assigned")
                  ? "bg-primary text-on-primary"
                  : "bg-primary-container/20 text-primary border border-primary/50 hover:bg-primary-container/30"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
              Assigned to Me
            </button>
            <div className="h-6 w-px bg-outline-variant mx-2" />
            <button
              onClick={() => setActiveFilters(new Set())}
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">filter_alt_off</span>
              Clear Filters
            </button>
          </div>

          <div className="text-sm text-on-surface-variant font-medium">
            Found {filteredTasks.length} results
          </div>
        </div>

        {/* Task List (Bento Grid Style) */}
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">inbox</span>
            <p className="text-lg font-medium">No tasks match your filters</p>
            <button
              onClick={() => setActiveFilters(new Set())}
              className="mt-4 text-primary hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredTasks.map((task) => {
              const badge = priorityBadge[task.priority];
              return (
                <div
                  key={task.id}
                  className="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col gap-4 hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary-container"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`${badge.bg} ${badge.text} text-xs font-bold px-2.5 py-1 rounded border ${
                          task.priority === "low" ? "border-outline-variant" : "border-current/20"
                        } uppercase tracking-wider`}
                      >
                        {badge.label}
                      </span>
                      <span className="text-on-surface-variant text-xs">{task.zone}</span>
                    </div>
                    <div className="relative group">
                      <button
                        onClick={() => handleNavigate("tasks")}
                        className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-highest cursor-pointer"
                        aria-label="Task options"
                      >
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                      <div className="absolute right-0 top-6 bg-surface-container-high border border-outline-variant rounded-lg shadow-lg z-20 hidden group-hover:flex flex-col min-w-[160px]">
                        <button
                          className="text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-container-highest first:rounded-t-lg cursor-pointer"
                          onClick={() => handleNavigate("tasks")}
                        >
                          Open in Task Board
                        </button>
                        {task.status !== "completed" && (
                          <button
                            className="text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-container-highest cursor-pointer"
                            onClick={() => {
                              if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).app) {
                                const app = (window as unknown as Record<string, unknown>).app as Record<string, unknown>;
                                if (app.updateTask && typeof app.updateTask === "function") {
                                  (app.updateTask as (id: string, updates: Partial<Task>) => void)(task.id, { status: "completed" });
                                }
                              }
                            }}
                          >
                            Mark Completed
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface mb-1">{task.title}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{task.description}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-outline-variant/50 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {formatDueDate(task.dueDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      {task.assignee && (
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
                            {initials(task.assignee)}
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => handleNavigate("tasks")}
                        className="bg-primary-container text-on-primary-container text-sm font-medium px-3 py-1 rounded hover:bg-primary-fixed-dim transition-colors cursor-pointer focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
