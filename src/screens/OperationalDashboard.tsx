import { useState } from "react";
import type { AppState, Task, Equipment, MaintenanceLogEntry, Notification } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface OperationalDashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const then = new Date(timestamp);
  const diffMs = now.getTime() - then.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export function OperationalDashboard(props: OperationalDashboardProps = {}) {
  const { onNavigate, onAction, state } = props;
  const [chartPeriod, setChartPeriod] = useState<"24h" | "7d">("24h");

  const tasks = state?.tasks ?? [];
  const equipment = state?.equipment ?? [];
  const notifications = state?.notifications ?? [];
  const logs = state?.logs ?? [];

  const criticalAlerts = notifications.filter((n) => n.type === "error" || n.type === "warning").length;
  const tasksDueToday = tasks.filter((t) => t.dueDate === new Date().toISOString().split("T")[0]).length;
  const activeEquipment = equipment.length > 0
    ? Math.round((equipment.filter((e) => e.state === "online").length / equipment.length) * 100)
    : 0;
  const totalTasks = tasks.length;

  const recentActivity = [...logs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const handleNav = (screen: string) => {
    if (onNavigate) onNavigate(null, screen);
  };

  const chartData = chartPeriod === "24h"
    ? [40, 65, 50, 85, 70, 90, 60]
    : [55, 60, 45, 75, 80, 65, 70];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface tracking-tight">System Status</h2>
              <p className="text-on-surface-variant mt-1 text-sm md:text-base">Real-time metrics for Greenhouse Sector 7G.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-DEFAULT border border-outline-variant">
              <span className="material-symbols-outlined text-[16px] text-primary">update</span>
              Last updated: Just now
            </div>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
            {/* Top Row: Summary Cards (Stats) */}
            {/* Critical Alerts */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-error transition-colors relative overflow-hidden cursor-pointer"
              onClick={() => handleNav("equipment")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleNav("equipment"); }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Critical Alerts</span>
                <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center border border-error/20">
                  <span className="material-symbols-outlined text-error text-[18px]">warning</span>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-4xl font-display font-bold text-error">{criticalAlerts}</span>
                <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-error">arrow_upward</span>
                  +2 since last shift
                </p>
              </div>
            </div>

            {/* Tasks Due Today */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-primary-container transition-colors relative overflow-hidden cursor-pointer"
              onClick={() => handleNav("tasks")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleNav("tasks"); }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Tasks Due Today</span>
                <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">today</span>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-4xl font-display font-bold text-on-surface">{tasksDueToday}</span>
                <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">arrow_downward</span>
                  -4 from yesterday
                </p>
              </div>
            </div>

            {/* Active Equipment */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-secondary transition-colors relative overflow-hidden cursor-pointer"
              onClick={() => handleNav("equipment")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleNav("equipment"); }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Active Equip</span>
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-[18px]">power</span>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-4xl font-display font-bold text-on-surface">{activeEquipment}<span className="text-xl text-on-surface-variant font-normal">%</span></span>
                <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="text-secondary font-medium">Nominal operation</span>
                </p>
              </div>
            </div>

            {/* Total Tasks (YTD) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-tertiary transition-colors relative overflow-hidden cursor-pointer"
              onClick={() => handleNav("tasks")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleNav("tasks"); }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Total Tasks</span>
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">inventory_2</span>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-4xl font-display font-bold text-on-surface">{totalTasks}</span>
                <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="text-on-surface-variant font-medium">Year to date</span>
                </p>
              </div>
            </div>

            {/* Middle Section: Activity Log & Health Chart */}
            {/* System Health Chart (Large Focus Area) */}
            <div className="col-span-1 md:col-span-4 lg:col-span-8 bg-surface border border-outline-variant rounded-xl p-0 flex flex-col overflow-hidden h-[400px]">
              <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest/50">
                <h3 className="text-lg font-headline font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                  System Health Overview
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setChartPeriod("24h")}
                    className={`px-3 py-1 text-xs font-semibold rounded-DEFAULT transition-colors cursor-pointer ${chartPeriod === "24h" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-outline-variant"}`}
                  >
                    24h
                  </button>
                  <button
                    onClick={() => setChartPeriod("7d")}
                    className={`px-3 py-1 text-xs font-semibold rounded-DEFAULT transition-colors cursor-pointer ${chartPeriod === "7d" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-outline-variant"}`}
                  >
                    7d
                  </button>
                </div>
              </div>
              <div className="flex-1 p-5 relative w-full h-full bg-gradient-to-b from-surface-container-lowest/20 to-surface">
                <div className="absolute inset-x-5 inset-y-8 flex flex-col justify-between z-0">
                  <div className="w-full border-t border-outline-variant/30 h-px"></div>
                  <div className="w-full border-t border-outline-variant/30 h-px"></div>
                  <div className="w-full border-t border-outline-variant/30 h-px"></div>
                  <div className="w-full border-t border-outline-variant/30 h-px"></div>
                  <div className="w-full border-t border-outline-variant/30 h-px"></div>
                </div>
                <div className="relative z-10 w-full h-full flex items-end justify-around gap-2 px-4 pb-2">
                  {chartData.map((height, i) => (
                    <div
                      key={i}
                      className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant">
                        {height}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-2 inset-x-5 flex justify-between text-[10px] text-on-surface-variant font-mono uppercase">
                  <span>00:00</span>
                  <span>04:00</span>
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span>Now</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Log (List) */}
            <div className="col-span-1 md:col-span-4 lg:col-span-4 bg-surface border border-outline-variant rounded-xl flex flex-col h-[400px]">
              <div className="p-5 border-b border-outline-variant bg-surface-container-lowest/50">
                <h3 className="text-lg font-headline font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">history</span>
                  Recent Activity
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {recentActivity.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-on-surface-variant">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">history</span>
                    <p className="text-sm">No recent activity</p>
                  </div>
                ) : (
                  recentActivity.map((log) => {
                    const dotColor = log.status === "issue-logged" ? "bg-error" : log.status === "in-progress" ? "bg-primary" : log.status === "completed" ? "bg-green-500" : "bg-outline-variant";
                    const borderColor = log.status === "issue-logged" ? "hover:border-error" : log.status === "in-progress" ? "hover:border-primary" : log.status === "completed" ? "hover:border-green-500" : "hover:border-outline-variant";
                    return (
                      <div
                        key={log.id}
                        className={`flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent ${borderColor}`}
                      >
                        <div className={`w-2 h-2 mt-1.5 rounded-full ${dotColor} shrink-0 shadow-[0_0_8px_rgba(255,180,171,0.6)]`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-on-surface truncate">{log.action}</p>
                          <p className="text-xs text-on-surface-variant truncate mt-0.5">{log.equipment}</p>
                        </div>
                        <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">{formatTimeAgo(log.date)}</span>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="p-3 border-t border-outline-variant bg-surface-container-low text-center">
                <button
                  onClick={() => handleNav("logs")}
                  className="text-xs font-semibold text-primary hover:text-primary-fixed transition-colors cursor-pointer"
                >
                  View Full Log →
                </button>
              </div>
            </div>

            {/* Bottom Section: Quick Actions Grid */}
            <div className="col-span-1 md:col-span-4 lg:col-span-12">
              <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-4 pl-1">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => { if (onAction) onAction("new-task"); }}
                  className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-primary focus:outline-none group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[24px]">add_task</span>
                  </div>
                  <span className="text-sm font-medium text-on-surface">Create Task</span>
                </button>
                <button
                  onClick={() => handleNav("equipment")}
                  className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-error focus:outline-none group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center group-hover:bg-error/20 transition-colors relative">
                    <span className="material-symbols-outlined text-error text-[24px]">notification_important</span>
                    {criticalAlerts > 0 && (
                      <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface-container-low"></span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-on-surface">Check Alerts</span>
                </button>
                <button
                  onClick={() => handleNav("equipment")}
                  className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-secondary focus:outline-none group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-[24px]">build</span>
                  </div>
                  <span className="text-sm font-medium text-on-surface">Diagnose Equip</span>
                </button>
                <button
                  onClick={() => handleNav("logs")}
                  className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-tertiary focus:outline-none group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                    <span className="material-symbols-outlined text-tertiary text-[24px]">summarize</span>
                  </div>
                  <span className="text-sm font-medium text-on-surface">Generate Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
