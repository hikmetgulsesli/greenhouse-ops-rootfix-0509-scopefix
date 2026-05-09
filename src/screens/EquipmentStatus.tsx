import { useState, useMemo } from "react";
import type { AppState, Equipment, EquipmentState, EquipmentType } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

const typeIcons: Record<EquipmentType, string> = {
  sensor: "sensors",
  hvac: "ac_unit",
  irrigation: "water_drop",
  lighting: "lightbulb",
  other: "settings",
};

const stateBadge: Record<EquipmentState, { bg: string; text: string; label: string }> = {
  online: { bg: "bg-green-500/15", text: "text-green-400", label: "Online" },
  offline: { bg: "bg-error/15", text: "text-error", label: "Offline" },
  maintenance: { bg: "bg-yellow-500/15", text: "text-yellow-400", label: "Maintenance" },
};

const healthBarColor = (health: number): string => {
  if (health >= 80) return "bg-green-400";
  if (health >= 50) return "bg-yellow-400";
  return "bg-error";
};

export function EquipmentStatus(props: EquipmentStatusProps = {}) {
  const { state, onNavigate } = props;
  const [typeFilter, setTypeFilter] = useState<EquipmentType | "all">("all");
  const [stateFilter, setStateFilter] = useState<EquipmentState | "all">("all");
  const [healthFilter, setHealthFilter] = useState<"all" | "critical" | "warning" | "optimal">("all");

  const equipment: Equipment[] = state?.equipment ?? [];

  const filteredEquipment = useMemo(() => {
    let result = [...equipment];

    if (typeFilter !== "all") {
      result = result.filter((e) => e.type === typeFilter);
    }

    if (stateFilter !== "all") {
      result = result.filter((e) => e.state === stateFilter);
    }

    if (healthFilter !== "all") {
      if (healthFilter === "critical") result = result.filter((e) => e.health < 50);
      else if (healthFilter === "warning") result = result.filter((e) => e.health >= 50 && e.health < 80);
      else if (healthFilter === "optimal") result = result.filter((e) => e.health >= 80);
    }

    return result;
  }, [equipment, typeFilter, stateFilter, healthFilter]);

  const handleNav = (screen: string) => {
    if (onNavigate) onNavigate(undefined, screen);
  };

  const handleSchedule = (eq: Equipment) => {
    if (onNavigate) onNavigate(undefined, "tasks");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Page Content */}
        <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
          {/* Header & Filters */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-on-surface mb-2 tracking-tight font-headline">Equipment Status Dashboard</h2>
            <p className="text-on-surface-variant mb-6">Monitor health and maintenance schedules for all operational units.</p>
            <div className="flex flex-col sm:flex-row gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/50">
              <div className="flex-1">
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Equipment Type</label>
                <select
                  className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5 cursor-pointer"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as EquipmentType | "all")}
                >
                  <option value="all">All Equipment</option>
                  <option value="sensor">Sensors</option>
                  <option value="hvac">HVAC Systems</option>
                  <option value="irrigation">Irrigation Pumps</option>
                  <option value="lighting">Lighting Arrays</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Health Status</label>
                <select
                  className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5 cursor-pointer"
                  value={healthFilter}
                  onChange={(e) => setHealthFilter(e.target.value as "all" | "critical" | "warning" | "optimal")}
                >
                  <option value="all">All Statuses</option>
                  <option value="critical">Critical (&lt; 50%)</option>
                  <option value="warning">Warning (50-80%)</option>
                  <option value="optimal">Optimal (&gt; 80%)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Operational State</label>
                <select
                  className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5 cursor-pointer"
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value as EquipmentState | "all")}
                >
                  <option value="all">All States</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          {filteredEquipment.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">precision_manufacturing</span>
              <p className="text-lg font-medium">No equipment matches your filters</p>
              <button
                onClick={() => {
                  setTypeFilter("all");
                  setStateFilter("all");
                  setHealthFilter("all");
                }}
                className="mt-4 text-primary hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEquipment.map((eq) => {
                const badge = stateBadge[eq.state];
                const barColor = healthBarColor(eq.health);
                const isOverdue = eq.nextService === "OVERDUE";
                const isInProgress = eq.nextService === "In Progress";

                return (
                  <div
                    key={eq.id}
                    className="bg-surface-container rounded-xl border border-outline-variant p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
                          <span className="material-symbols-outlined">{typeIcons[eq.type]}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-on-surface leading-tight">{eq.name}</h3>
                          <span className="text-xs text-on-surface-variant">{eq.zone}</span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-on-surface-variant">Health</span>
                        <span className={`font-bold ${eq.health < 50 ? "text-error" : eq.health < 80 ? "text-yellow-400" : "text-green-400"}`}>
                          {eq.health}%
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest rounded-full h-2">
                        <div className={`${barColor} h-2 rounded-full transition-all duration-500`} style={{ width: `${eq.health}%` }} />
                      </div>
                    </div>
                    <div className="text-sm text-on-surface-variant mb-6 space-y-1">
                      <div className="flex justify-between">
                        <span>Last Service:</span>
                        <span className="text-on-surface">{eq.lastService}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Service:</span>
                        <span className={`font-medium ${isOverdue ? "text-error" : isInProgress ? "text-yellow-400" : "text-on-surface"}`}>
                          {eq.nextService}
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-outline-variant">
                      {eq.state === "maintenance" ? (
                        <button
                          disabled
                          className="w-full bg-surface-container-highest text-on-surface-variant font-semibold py-2 px-4 rounded-lg cursor-not-allowed opacity-60"
                        >
                          Maintenance Active
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSchedule(eq)}
                          className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer ${
                            eq.health < 50
                              ? "bg-primary text-on-primary hover:brightness-110"
                              : "bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-high"
                          }`}
                        >
                          {eq.health < 50 ? "Schedule Maintenance" : "Schedule Maintenance"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
