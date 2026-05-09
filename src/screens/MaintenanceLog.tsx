import { useState, useMemo } from "react";
import type { AppState, MaintenanceLogEntry, LogStatus } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

const statusBadge: Record<LogStatus, { bg: string; text: string; label: string }> = {
  completed: { bg: "bg-primary/15", text: "text-primary", label: "Completed" },
  "in-progress": { bg: "bg-tertiary/15", text: "text-tertiary", label: "In Progress" },
  "issue-logged": { bg: "bg-error/15", text: "text-error", label: "Issue Logged" },
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportToCSV(logs: MaintenanceLogEntry[]): string {
  const headers = ["Date", "Equipment", "Action", "Technician", "Status"];
  const rows = logs.map((l) => [
    new Date(l.date).toISOString(),
    l.equipment,
    l.action,
    l.technician,
    l.status,
  ]);
  return [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
}

export function MaintenanceLog(props: MaintenanceLogProps = {}) {
  const { state } = props;
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LogStatus | "all">("all");
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: "", end: "" });

  const logs: MaintenanceLogEntry[] = state?.logs ?? [];

  const filteredLogs = useMemo(() => {
    let result = [...logs];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.equipment.toLowerCase().includes(q) ||
          l.action.toLowerCase().includes(q) ||
          l.technician.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((l) => l.status === statusFilter);
    }

    if (dateRange.start) {
      const start = new Date(dateRange.start);
      result = result.filter((l) => new Date(l.date) >= start);
    }
    if (dateRange.end) {
      const end = new Date(dateRange.end);
      end.setHours(23, 59, 59, 999);
      result = result.filter((l) => new Date(l.date) <= end);
    }

    return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [logs, search, statusFilter, dateRange]);

  const handleExport = () => {
    const csv = exportToCSV(filteredLogs);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `maintenance-logs-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            placeholder="Search logs..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-on-surface font-headline tracking-tight">Maintenance Logs</h3>
            <p className="text-sm text-on-surface-variant mt-1">Comprehensive history of all facility operations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Status filter */}
            <select
              className="bg-surface-container border border-outline-variant rounded-lg py-2 px-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as LogStatus | "all")}
            >
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="issue-logged">Issue Logged</option>
            </select>
            {/* Export Button */}
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Export CSV
            </button>
          </div>
        </div>

        {/* Date range filters */}
        <div className="flex flex-wrap gap-3 items-center bg-surface-container-low p-3 rounded-xl border border-outline-variant/50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">calendar_today</span>
            <input
              type="date"
              className="bg-surface border border-outline-variant rounded-lg py-1.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              value={dateRange.start}
              onChange={(e) => setDateRange((prev) => ({ ...prev, start: e.target.value }))}
            />
          </div>
          <span className="text-on-surface-variant text-sm">to</span>
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="bg-surface border border-outline-variant rounded-lg py-1.5 px-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              value={dateRange.end}
              onChange={(e) => setDateRange((prev) => ({ ...prev, end: e.target.value }))}
            />
          </div>
          {(dateRange.start || dateRange.end) && (
            <button
              onClick={() => setDateRange({ start: "", end: "" })}
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
              Clear dates
            </button>
          )}
        </div>

        {/* Data Table Card */}
        <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-label text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4">Date & Time</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Equipment</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Action Taken</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Technician</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/50 text-on-surface">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-4xl mb-2 opacity-50 block">inbox</span>
                      No logs match your filters
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => {
                    const badge = statusBadge[log.status];
                    return (
                      <tr key={log.id} className="hover:bg-surface-container-highest transition-colors">
                        <td className="px-4 md:px-6 py-3 md:py-4 text-on-surface-variant">{formatDate(log.date)}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 font-medium">{log.equipment}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4">{log.action}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-xs text-on-secondary-container font-bold">
                              {initials(log.technician)}
                            </div>
                            <span>{log.technician}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-3 md:py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold ${badge.bg} ${badge.text} border border-current/20`}>
                            {badge.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination Footer */}
          <div className="bg-surface-container-low border-t border-outline-variant px-4 md:px-6 py-3 flex items-center justify-between text-sm text-on-surface-variant">
            <div>Showing {filteredLogs.length} of {logs.length} entries</div>
            <div className="flex gap-2">
              <button className="p-1 hover:text-on-surface disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-1 hover:text-on-surface disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
