// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface SettingsProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function Settings(_props: SettingsProps = {}) {
  return (
    <>
      {/* SideNavBar Shared Component */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant h-screen w-[260px] fixed left-0 top-0 flex flex-col h-full overflow-y-auto z-50">
      <div className="p-6">
      <div className="flex items-center gap-3 mb-8">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">EcoGrow Ops</h1>
      <p className="text-xs text-on-surface-variant font-label">System Console</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-headline font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-tint transition-all duration-200 active:scale-[0.98]">
      <span className="material-symbols-outlined">add</span>
                      New Maintenance Task
                  </button>
      </div>
      <div className="flex-1 px-3 space-y-1">
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high rounded-lg font-body text-label-md antialiased group active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high rounded-lg font-body text-label-md antialiased group active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high rounded-lg font-body text-label-md antialiased group active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high rounded-lg font-body text-label-md antialiased group active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">database</span>
                      Logs
                  </a>
      </div>
      <div className="p-3 border-t border-outline-variant space-y-1">
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high rounded-lg font-body text-label-md antialiased group active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">help</span>
                      Support
                  </a>
      {/* Active State */}
      <a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 rounded-r-lg font-body text-label-md antialiased active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen relative">
      {/* TopAppBar Shared Component */}
      <header className="bg-background/95 backdrop-blur-md border-b border-outline-variant docked full-width top-0 sticky z-40 flex justify-between items-center h-16 px-6">
      <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 text-primary font-bold hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 py-2 px-3 -ml-3">
      <span className="material-symbols-outlined">arrow_back</span>
      <span className="font-headline text-sm tracking-wide uppercase">Back</span>
      </button>
      <div className="hidden text-xl font-headline font-bold text-on-surface tracking-tight">Greenhouse Ops</div>
      </div>
      <div className="flex items-center gap-2">
      <div className="relative group">
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest hover:text-primary rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">search</span>
      </button>
      </div>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest hover:text-primary rounded-full transition-colors cursor-pointer active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest hover:text-primary rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-8">
      <div>
      <h2 className="text-3xl font-headline font-semibold text-on-surface tracking-tight">Settings</h2>
      <p className="text-on-surface-variant mt-1 font-body">Manage global application configurations and user preferences.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column: User Preferences & System Info */}
      <div className="lg:col-span-5 space-y-6">
      {/* User Preferences Card */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden group">
      <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
      <span className="material-symbols-outlined text-primary">person</span>
      <h3 className="font-headline font-semibold text-lg text-on-surface">User Preferences</h3>
      </div>
      <div className="space-y-6">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
      <div>
      <p className="font-medium text-on-surface text-sm">Interface Theme</p>
      <p className="text-xs text-on-surface-variant mt-0.5">Force dark mode for low-light environments.</p>
      </div>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-on-primary-container transition"></span>
      </button>
      </div>
      <div className="h-px bg-outline-variant/50 w-full"></div>
      {/* Notifications */}
      <div>
      <p className="font-medium text-on-surface text-sm mb-3">Notification Channels</p>
      <div className="space-y-3">
      <label className="flex items-center justify-between cursor-pointer group/toggle">
      <span className="text-sm text-on-surface-variant group-hover/toggle:text-on-surface transition-colors">Push Alerts (Critical)</span>
      <input checked={true} className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant rounded focus:ring-primary focus:ring-offset-surface-container" type="checkbox" />
      </label>
      <label className="flex items-center justify-between cursor-pointer group/toggle">
      <span className="text-sm text-on-surface-variant group-hover/toggle:text-on-surface transition-colors">Email Digests (Daily)</span>
      <input className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant rounded focus:ring-primary focus:ring-offset-surface-container" type="checkbox" />
      </label>
      <label className="flex items-center justify-between cursor-pointer group/toggle">
      <span className="text-sm text-on-surface-variant group-hover/toggle:text-on-surface transition-colors">SMS Warnings (Offline)</span>
      <input checked={true} className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant rounded focus:ring-primary focus:ring-offset-surface-container" type="checkbox" />
      </label>
      </div>
      </div>
      </div>
      </div>
      {/* System Info Card */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
      <span className="material-symbols-outlined text-primary">info</span>
      <h3 className="font-headline font-semibold text-lg text-on-surface">System Info</h3>
      </div>
      <div className="space-y-3">
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
      <span className="text-sm text-on-surface-variant">Version</span>
      <span className="text-sm font-mono text-on-surface">v2.4.1-stable</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
      <span className="text-sm text-on-surface-variant">Build ID</span>
      <span className="text-sm font-mono text-on-surface">gh_ops_882a9</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
      <span className="text-sm text-on-surface-variant">Server Uptime</span>
      <span className="text-sm font-mono text-primary">45d 12h 30m</span>
      </div>
      <div className="flex justify-between items-center py-2">
      <span className="text-sm text-on-surface-variant">Network Status</span>
      <span className="flex items-center gap-1 text-sm font-medium text-tertiary">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                              Connected
                                          </span>
      </div>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant">
      <button className="text-sm text-error hover:text-error-container transition-colors font-medium flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                                          Restart System Services
                                      </button>
      </div>
      </div>
      </div>
      {/* Right Column: Operational Config */}
      <div className="lg:col-span-7">
      <div className="bg-surface-container border border-outline-variant rounded-xl p-6 h-full">
      <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
      <span className="material-symbols-outlined text-primary">tune</span>
      <h3 className="font-headline font-semibold text-lg text-on-surface">Operational Config</h3>
      </div>
      <div className="space-y-8">
      {/* Refresh Intervals */}
      <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/50">
      <h4 className="text-sm font-semibold text-on-surface mb-4 uppercase tracking-wider">Data Synchronization</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="block text-xs text-on-surface-variant mb-1 font-medium">Sensor Refresh Rate</label>
      <select className="w-full bg-surface-container-highest border border-outline-variant text-on-surface text-sm rounded focus:ring-primary focus:border-primary block p-2.5">
      <option>Real-time (1s)</option>
      <option selected={true}>Standard (5s)</option>
      <option>Conserve (30s)</option>
      </select>
      </div>
      <div>
      <label className="block text-xs text-on-surface-variant mb-1 font-medium">Log Sync Interval</label>
      <select className="w-full bg-surface-container-highest border border-outline-variant text-on-surface text-sm rounded focus:ring-primary focus:border-primary block p-2.5">
      <option>Every 5 mins</option>
      <option selected={true}>Every 15 mins</option>
      <option>Hourly</option>
      </select>
      </div>
      </div>
      </div>
      {/* Alert Thresholds */}
      <div>
      <h4 className="text-sm font-semibold text-on-surface mb-4 uppercase tracking-wider flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                                              Critical Alert Thresholds
                                          </h4>
      <p className="text-xs text-on-surface-variant mb-4">Define boundaries that trigger automated push notifications and system alarms.</p>
      <div className="space-y-5">
      {/* Temp Threshold */}
      <div className="space-y-2">
      <div className="flex justify-between">
      <label className="text-sm font-medium text-on-surface">Max Temperature Limit</label>
      <span className="text-sm font-mono text-primary">28.5 °C</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="40" min="20" step="0.5" type="range" value="28.5" />
      <div className="flex justify-between text-xs text-on-surface-variant">
      <span>20°C</span>
      <span>40°C</span>
      </div>
      </div>
      {/* Humidity Threshold */}
      <div className="space-y-2">
      <div className="flex justify-between">
      <label className="text-sm font-medium text-on-surface">Min Humidity Limit</label>
      <span className="text-sm font-mono text-primary">65 %</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="90" min="40" type="range" value="65" />
      <div className="flex justify-between text-xs text-on-surface-variant">
      <span>40%</span>
      <span>90%</span>
      </div>
      </div>
      {/* CO2 Threshold */}
      <div className="space-y-2">
      <div className="flex justify-between">
      <label className="text-sm font-medium text-on-surface">Max CO₂ Concentration</label>
      <span className="text-sm font-mono text-primary">1200 ppm</span>
      </div>
      <div className="flex items-center gap-3">
      <input className="bg-surface-container-highest border border-outline-variant text-on-surface text-sm rounded focus:ring-primary focus:border-primary block w-32 p-2" type="number" value="1200" />
      <span className="text-xs text-on-surface-variant">Parts per million</span>
      </div>
      </div>
      </div>
      </div>
      <div className="pt-6 border-t border-outline-variant flex justify-end gap-3">
      <button className="px-4 py-2 rounded border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors font-medium text-sm">Discard Changes</button>
      <button className="px-4 py-2 rounded bg-primary-container text-on-primary-container hover:bg-surface-tint transition-colors font-medium text-sm">Save Configuration</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
