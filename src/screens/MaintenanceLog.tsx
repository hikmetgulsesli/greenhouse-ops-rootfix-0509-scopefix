// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Log
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

export interface MaintenanceLogProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function MaintenanceLog(_props: MaintenanceLogProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant flex flex-col overflow-y-auto z-50">
      {/* Header */}
      <div className="p-6 border-b border-outline-variant flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <span className="material-symbols-outlined">eco</span>
      </div>
      <div>
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">EcoGrow Ops</h1>
      <p className="text-xs text-on-surface-variant">System Console</p>
      </div>
      </div>
      {/* CTA */}
      <div className="p-4">
      <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-fixed-dim transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-sm">add</span>
                      New Maintenance Task
                  </button>
      </div>
      {/* Primary Navigation */}
      <ul className="flex-1 py-2">
      {/* Dashboard (Inactive) */}
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span>Dashboard</span>
      </a>
      </li>
      {/* Task Board (Inactive) */}
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span>Task Board</span>
      </a>
      </li>
      {/* Equipment (Inactive) */}
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98]" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      </li>
      {/* Logs (Active) */}
      <li>
      <a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined">database</span>
      <span>Logs</span>
      </a>
      </li>
      </ul>
      {/* Footer Navigation */}
      <ul className="border-t border-outline-variant py-2 mt-auto">
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200" href="#">
      <span className="material-symbols-outlined">help</span>
      <span>Support</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span>Settings</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6">
      <h2 className="font-headline text-headline-sm font-semibold text-primary">Greenhouse Ops</h2>
      <div className="flex items-center gap-4">
      {/* Search */}
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
      <input className="bg-surface-container-low border border-outline-variant text-on-surface rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64" placeholder="Search logs..." type="text" />
      </div>
      {/* Trailing Icons */}
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-6 lg:p-8 space-y-6">
      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
      <h3 className="text-2xl font-bold text-on-surface font-headline tracking-tight">Maintenance Logs</h3>
      <p className="text-sm text-on-surface-variant mt-1">Comprehensive history of all facility operations.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
      {/* Date Range Picker Mock */}
      <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg p-1">
      <button className="px-3 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                  Oct 1 - Oct 31, 2023
                              </button>
      </div>
      {/* Export Button */}
      <button className="flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-sm">download</span>
                              Export CSV
                          </button>
      </div>
      </div>
      {/* Data Table Card */}
      <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
      <thead className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-label text-xs uppercase tracking-wider font-semibold">
      <tr>
      <th className="px-6 py-4">Date &amp; Time</th>
      <th className="px-6 py-4">Equipment</th>
      <th className="px-6 py-4">Action Taken</th>
      <th className="px-6 py-4">Technician</th>
      <th className="px-6 py-4">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/50 text-on-surface">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-6 py-4 text-on-surface-variant">Oct 26, 08:30 AM</td>
      <td className="px-6 py-4 font-medium">Zone A - Climate Unit 4</td>
      <td className="px-6 py-4">Replaced HEPA filters</td>
      <td className="px-6 py-4 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-xs text-on-secondary-container">JD</div>
                                          J. Doe
                                      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary/15 text-primary border border-primary/20">
                                              Completed
                                          </span>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-6 py-4 text-on-surface-variant">Oct 25, 14:15 PM</td>
      <td className="px-6 py-4 font-medium">Irrigation Pump P-02</td>
      <td className="px-6 py-4">Quarterly lubrication and seal check</td>
      <td className="px-6 py-4 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-xs text-on-tertiary-container">MS</div>
                                          M. Smith
                                      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary/15 text-primary border border-primary/20">
                                              Completed
                                          </span>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-6 py-4 text-on-surface-variant">Oct 25, 10:00 AM</td>
      <td className="px-6 py-4 font-medium">Sensor Array ZB-1</td>
      <td className="px-6 py-4">Recalibration sequence initiated</td>
      <td className="px-6 py-4 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-xs text-on-secondary-container">JD</div>
                                          J. Doe
                                      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-tertiary/15 text-tertiary border border-tertiary/20">
                                              In Progress
                                          </span>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-6 py-4 text-on-surface-variant">Oct 24, 16:45 PM</td>
      <td className="px-6 py-4 font-medium">Nutrient Doser N-01</td>
      <td className="px-6 py-4">Valve replacement (Emergency)</td>
      <td className="px-6 py-4 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-error-container flex items-center justify-center text-xs text-on-error-container">RK</div>
                                          R. Klein
                                      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-error/15 text-error border border-error/20">
                                              Issue Logged
                                          </span>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-6 py-4 text-on-surface-variant">Oct 23, 09:00 AM</td>
      <td className="px-6 py-4 font-medium">Zone C - Grow Lights</td>
      <td className="px-6 py-4">Routine spectral analysis check</td>
      <td className="px-6 py-4 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-xs text-on-tertiary-container">MS</div>
                                          M. Smith
                                      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary/15 text-primary border border-primary/20">
                                              Completed
                                          </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="bg-surface-container-low border-t border-outline-variant px-6 py-3 flex items-center justify-between text-sm text-on-surface-variant">
      <div>Showing 1 to 5 of 124 entries</div>
      <div className="flex gap-2">
      <button className="p-1 hover:text-on-surface disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>
      <button className="p-1 hover:text-on-surface">
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
