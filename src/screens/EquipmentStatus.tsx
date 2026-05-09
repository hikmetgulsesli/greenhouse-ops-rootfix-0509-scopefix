// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Status
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

export interface EquipmentStatusProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EquipmentStatus(_props: EquipmentStatusProps = {}) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-body text-label-md antialiased h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant flex flex-col h-full overflow-y-auto hidden md:flex z-50">
      {/* Header */}
      <div className="p-6 border-b border-outline-variant/50">
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">EcoGrow Ops</h1>
      <p className="text-sm text-on-surface-variant mt-1">System Console</p>
      </div>
      {/* Main Navigation Tabs */}
      <ul className="flex-1 py-4 space-y-1">
      <li>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined">assignment</span>
                          Task Board
                      </a>
      </li>
      <li>
      <a className="text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
                          Equipment
                      </a>
      </li>
      <li>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined">database</span>
                          Logs
                      </a>
      </li>
      </ul>
      {/* CTA */}
      <div className="p-4">
      <button className="w-full bg-primary text-on-primary font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      New Maintenance Task
                  </button>
      </div>
      {/* Footer Navigation */}
      <ul className="pb-6 space-y-1 border-t border-outline-variant/50 pt-4">
      <li>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined">help</span>
                          Support
                      </a>
      </li>
      <li>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform flex items-center gap-3" href="#">
      <span className="material-symbols-outlined">settings</span>
                          Settings
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[260px] flex flex-col min-h-screen">
      {/* TopAppBar (Shared Component) */}
      <header className="bg-background/95 backdrop-blur-md text-primary font-headline text-headline-sm font-semibold docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Button (Visible only on small screens) */}
      <button className="md:hidden text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 p-2">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <h2 className="hidden md:block">Greenhouse Ops</h2>
      <h2 className="md:hidden text-xl font-bold tracking-tight text-on-surface">EcoGrow Ops</h2>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 p-2">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 p-2">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Content */}
      <div className="p-6 md:p-8 flex-1 overflow-y-auto">
      {/* Header & Filters */}
      <div className="mb-8">
      <h2 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">Equipment Status Dashboard</h2>
      <p className="text-on-surface-variant mb-6">Monitor health and maintenance schedules for all operational units.</p>
      <div className="flex flex-col sm:flex-row gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/50">
      <div className="flex-1">
      <label className="block text-sm font-medium text-on-surface-variant mb-1">Equipment Type</label>
      <select className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5">
      <option>All Equipment</option>
      <option>Sensors</option>
      <option>HVAC Systems</option>
      <option>Irrigation Pumps</option>
      <option>Lighting Arrays</option>
      </select>
      </div>
      <div className="flex-1">
      <label className="block text-sm font-medium text-on-surface-variant mb-1">Health Status</label>
      <select className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5">
      <option>All Statuses</option>
      <option>Critical (&lt; 50%)</option>
      <option>Warning (50-80%)</option>
      <option>Optimal (&gt; 80%)</option>
      </select>
      </div>
      <div className="flex-1">
      <label className="block text-sm font-medium text-on-surface-variant mb-1">Operational State</label>
      <select className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-primary block p-2.5">
      <option>All States</option>
      <option>Online</option>
      <option>Offline</option>
      <option>Maintenance</option>
      </select>
      </div>
      </div>
      </div>
      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Card 1: HVAC (Critical) */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
      <span className="material-symbols-outlined">ac_unit</span>
      </div>
      <div>
      <h3 className="font-bold text-on-surface leading-tight">HVAC Unit Alpha</h3>
      <span className="text-xs text-on-surface-variant">Zone 1 Climate Control</span>
      </div>
      </div>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-error/15 text-error">
                                  Offline
                              </span>
      </div>
      <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
      <span className="text-on-surface-variant">Health</span>
      <span className="font-bold text-error">42%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2">
      <div className="bg-error h-2 rounded-full" style={{width: "42%"}}></div>
      </div>
      </div>
      <div className="text-sm text-on-surface-variant mb-6 space-y-1">
      <div className="flex justify-between">
      <span>Last Service:</span>
      <span className="text-on-surface">12 Oct 2023</span>
      </div>
      <div className="flex justify-between">
      <span>Next Service:</span>
      <span className="text-error font-medium">OVERDUE</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <button className="w-full bg-primary text-on-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]">
                                  Schedule Maintenance
                              </button>
      </div>
      </div>
      {/* Card 2: Sensors (Optimal) */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
      <span className="material-symbols-outlined">sensors</span>
      </div>
      <div>
      <h3 className="font-bold text-on-surface leading-tight">Soil Array 4</h3>
      <span className="text-xs text-on-surface-variant">Zone 3 Moisture/pH</span>
      </div>
      </div>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-500/15 text-green-400">
                                  Online
                              </span>
      </div>
      <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
      <span className="text-on-surface-variant">Health</span>
      <span className="font-bold text-green-400">98%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2">
      <div className="bg-green-400 h-2 rounded-full" style={{width: "98%"}}></div>
      </div>
      </div>
      <div className="text-sm text-on-surface-variant mb-6 space-y-1">
      <div className="flex justify-between">
      <span>Last Service:</span>
      <span className="text-on-surface">05 Nov 2023</span>
      </div>
      <div className="flex justify-between">
      <span>Next Service:</span>
      <span className="text-on-surface">05 May 2024</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <button className="w-full bg-transparent border border-[#334155] text-on-surface font-semibold py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]">
                                  Schedule Maintenance
                              </button>
      </div>
      </div>
      {/* Card 3: Irrigation (Warning) */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
      <span className="material-symbols-outlined">water_drop</span>
      </div>
      <div>
      <h3 className="font-bold text-on-surface leading-tight">Main Pump B</h3>
      <span className="text-xs text-on-surface-variant">Central Reservoir</span>
      </div>
      </div>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-yellow-500/15 text-yellow-400">
                                  Maintenance
                              </span>
      </div>
      <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
      <span className="text-on-surface-variant">Health</span>
      <span className="font-bold text-yellow-400">65%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2">
      <div className="bg-yellow-400 h-2 rounded-full" style={{width: "65%"}}></div>
      </div>
      </div>
      <div className="text-sm text-on-surface-variant mb-6 space-y-1">
      <div className="flex justify-between">
      <span>Last Service:</span>
      <span className="text-on-surface">22 Aug 2023</span>
      </div>
      <div className="flex justify-between">
      <span>Next Service:</span>
      <span className="text-yellow-400 font-medium">In Progress</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <button className="w-full bg-transparent border border-[#334155] text-on-surface font-semibold py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]" disabled={true}>
                                  Maintenance Active
                              </button>
      </div>
      </div>
      {/* Card 4: Lighting (Optimal) */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
      <span className="material-symbols-outlined">lightbulb</span>
      </div>
      <div>
      <h3 className="font-bold text-on-surface leading-tight">LED Array West</h3>
      <span className="text-xs text-on-surface-variant">Zone 2 Canopy</span>
      </div>
      </div>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-500/15 text-green-400">
                                  Online
                              </span>
      </div>
      <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
      <span className="text-on-surface-variant">Health</span>
      <span className="font-bold text-green-400">92%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2">
      <div className="bg-green-400 h-2 rounded-full" style={{width: "92%"}}></div>
      </div>
      </div>
      <div className="text-sm text-on-surface-variant mb-6 space-y-1">
      <div className="flex justify-between">
      <span>Last Service:</span>
      <span className="text-on-surface">10 Sep 2023</span>
      </div>
      <div className="flex justify-between">
      <span>Next Service:</span>
      <span className="text-on-surface">10 Mar 2024</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <button className="w-full bg-transparent border border-[#334155] text-on-surface font-semibold py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]">
                                  Schedule Maintenance
                              </button>
      </div>
      </div>
      {/* Card 5: Sensors (Warning) */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-5 flex flex-col h-full hover:bg-surface-container-high transition-colors">
      <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-secondary-container/30 rounded-lg text-primary">
      <span className="material-symbols-outlined">sensors</span>
      </div>
      <div>
      <h3 className="font-bold text-on-surface leading-tight">CO2 Monitor Unit</h3>
      <span className="text-xs text-on-surface-variant">Zone 1 Air Quality</span>
      </div>
      </div>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-yellow-500/15 text-yellow-400">
                                  Online
                              </span>
      </div>
      <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
      <span className="text-on-surface-variant">Health</span>
      <span className="font-bold text-yellow-400">71%</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2">
      <div className="bg-yellow-400 h-2 rounded-full" style={{width: "71%"}}></div>
      </div>
      </div>
      <div className="text-sm text-on-surface-variant mb-6 space-y-1">
      <div className="flex justify-between">
      <span>Last Service:</span>
      <span className="text-on-surface">15 Jun 2023</span>
      </div>
      <div className="flex justify-between">
      <span>Next Service:</span>
      <span className="text-on-surface">15 Dec 2023</span>
      </div>
      </div>
      <div className="mt-auto pt-4 border-t border-[#334155]">
      <button className="w-full bg-primary text-on-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1E293B]">
                                  Schedule Maintenance
                              </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
