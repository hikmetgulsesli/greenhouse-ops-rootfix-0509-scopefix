import { useState, useMemo } from "react";
import type { AppState, Task, TaskStatus, TaskPriority } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

const priorityBadge: Record<TaskPriority, { bg: string; text: string; label: string }> = {
  critical: { bg: "bg-error/15", text: "text-error", label: "Critical" },
  high: { bg: "bg-error/15", text: "text-error", label: "High" },
  medium: { bg: "bg-primary/15", text: "text-primary", label: "Medium" },
  low: { bg: "bg-surface-container-highest", text: "text-on-surface-variant", label: "Low" },
};

const statusColumns: TaskStatus[] = ["todo", "in-progress", "completed"];

const statusLabels: Record<TaskStatus, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  completed: "Completed",
};

const statusDot: Record<TaskStatus, string> = {
  todo: "bg-outline-variant",
  "in-progress": "bg-primary-container",
  completed: "bg-green-500",
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

export function TaskBoard(props: TaskBoardProps = {}) {
  const { state, onAction, onNavigate } = props;
  const [search, setSearch] = useState("");
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);

  const tasks: Task[] = state?.tasks ?? [];

  const filteredTasks = useMemo(() => {
    if (!search.trim()) return tasks;
    const q = search.toLowerCase();
    return tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.assignee ?? "").toLowerCase().includes(q) ||
        t.zone.toLowerCase().includes(q)
    );
  }, [tasks, search]);

  const tasksByStatus = useMemo(() => {
    const map: Record<TaskStatus, Task[]> = {
      todo: [],
      "in-progress": [],
      completed: [],
    };
    for (const t of filteredTasks) {
      map[t.status].push(t);
    }
    return map;
  }, [filteredTasks]);

  const handleNewTask = () => {
    if (onAction) onAction("new-task");
  };

  const handleNav = (screen: string) => {
    if (onNavigate) onNavigate(undefined, screen);
  };

  const handleDragStart = (taskId: string) => {
    setDraggingTaskId(taskId);
  };

  const handleDragEnd = () => {
    setDraggingTaskId(null);
  };

  const handleDrop = (newStatus: TaskStatus) => {
    if (!draggingTaskId) return;
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).app) {
      const app = (window as unknown as Record<string, unknown>).app as Record<string, unknown>;
      if (app.updateTask && typeof app.updateTask === "function") {
        (app.updateTask as (id: string, updates: Partial<Task>) => void)(draggingTaskId, { status: newStatus });
      }
    }
    setDraggingTaskId(null);
  };

  const handleMoveStatus = (taskId: string, direction: "forward" | "backward") => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    const idx = statusColumns.indexOf(task.status);
    let newIdx = idx;
    if (direction === "forward" && idx < statusColumns.length - 1) newIdx = idx + 1;
    if (direction === "backward" && idx > 0) newIdx = idx - 1;
    if (newIdx !== idx) {
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).app) {
        const app = (window as unknown as Record<string, unknown>).app as Record<string, unknown>;
        if (app.updateTask && typeof app.updateTask === "function") {
          (app.updateTask as (id: string, updates: Partial<Task>) => void)(taskId, { status: statusColumns[newIdx] });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="bg-background/95 backdrop-blur-md text-primary font-headline text-lg font-semibold docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6">
          <div className="flex items-center gap-4">
            <h2>Task Board</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="bg-surface-container-high border border-outline-variant rounded-full pl-9 pr-3 py-1.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent w-64 placeholder-on-surface-variant"
                placeholder="Search tasks..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={handleNewTask}
              className="hidden sm:flex items-center gap-1 bg-primary text-on-primary px-3 py-1.5 rounded-full text-sm font-semibold hover:brightness-110 transition-colors active:scale-[0.98] cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              New Task
            </button>
            <button
              onClick={() => handleNav("tasks")}
              className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              onClick={() => handleNav("tasks")}
              className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80"
              aria-label="Profile"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* Kanban Board Container */}
        <div className="flex-1 p-4 md:p-6 overflow-x-auto">
          <div className="flex gap-6 min-w-max h-full">
            {statusColumns.map((status) => {
              const columnTasks = tasksByStatus[status];
              return (
                <div
                  key={status}
                  className="w-80 flex flex-col gap-4"
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDrop(status);
                  }}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                    <h3 className="font-bold text-on-surface uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${statusDot[status]}`} />
                      {statusLabels[status]}
                    </h3>
                    <span className="bg-surface-container-high text-on-surface-variant text-xs px-2 py-1 rounded font-mono">
                      {columnTasks.length}
                    </span>
                  </div>

                  {columnTasks.map((task) => {
                    const badge = priorityBadge[task.priority];
                    const isCompleted = task.status === "completed";
                    return (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-surface-container-high border border-outline-variant rounded-lg p-4 flex flex-col gap-3 hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing ${
                          isCompleted ? "opacity-75" : ""
                        } ${draggingTaskId === task.id ? "opacity-50" : ""}`}
                      >
                        <div className="flex justify-between items-start">
                          <span
                            className={`${badge.bg} ${badge.text} text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide`}
                          >
                            {badge.label}
                          </span>
                          {!isCompleted && (
                            <div className="relative group">
                              <button
                                onClick={() => handleNav("tasks")}
                                className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-highest cursor-pointer"
                                aria-label="Task options"
                              >
                                <span className="material-symbols-outlined text-sm">more_vert</span>
                              </button>
                              <div className="absolute right-0 top-6 bg-surface-container-high border border-outline-variant rounded-lg shadow-lg z-20 hidden group-hover:flex flex-col min-w-[160px]">
                                {status !== "todo" && (
                                  <button
                                    className="text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-container-highest first:rounded-t-lg cursor-pointer"
                                    onClick={() => handleMoveStatus(task.id, "backward")}
                                  >
                                    Move Back
                                  </button>
                                )}
                                {status !== "completed" && (
                                  <button
                                    className="text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-container-highest last:rounded-b-lg cursor-pointer"
                                    onClick={() => handleMoveStatus(task.id, "forward")}
                                  >
                                    Move Forward
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <h4
                          className={`font-semibold text-on-surface text-base leading-tight ${
                            isCompleted ? "line-through decoration-outline-variant" : ""
                          }`}
                        >
                          {task.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
                          {isCompleted ? (
                            <>
                              <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                              <span className="text-sm text-on-surface-variant truncate">Completed</span>
                            </>
                          ) : (
                            <>
                              {task.assignee ? (
                                <>
                                  <div className="w-6 h-6 rounded bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">
                                    {initials(task.assignee)}
                                  </div>
                                  <span className="text-sm text-on-surface-variant truncate">{task.assignee}</span>
                                </>
                              ) : (
                                <>
                                  <div className="w-6 h-6 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center text-xs font-bold text-on-surface-variant border-dashed">
                                    --
                                  </div>
                                  <span className="text-sm text-on-surface-variant italic">Unassigned</span>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
