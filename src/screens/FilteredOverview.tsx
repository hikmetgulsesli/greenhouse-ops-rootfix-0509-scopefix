// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Filtered Overview
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

export interface FilteredOverviewProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function FilteredOverview(_props: FilteredOverviewProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-body text-label-md antialiased h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant flex flex-col h-full overflow-y-auto hidden md:flex z-50">
      <div className="p-6">
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">EcoGrow Ops</h1>
      <p className="text-on-surface-variant text-sm mt-1">System Console</p>
      </div>
      <button className="mx-4 mb-6 bg-primary-container text-on-primary-container rounded-lg py-3 px-4 font-semibold hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  New Maintenance Task
              </button>
      <nav className="flex-1 px-2 space-y-1">
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 active:scale-[0.98] transition-transform rounded-r-lg" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
                      Task Board
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">database</span>
                      Logs
                  </a>
      </nav>
      <div className="p-4 mt-auto border-t border-outline-variant/50 space-y-1">
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-2 px-4 transition-colors hover:bg-surface-container-high rounded-lg" href="#">
      <span className="material-symbols-outlined">help</span>
                      Support
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-2 px-4 transition-colors hover:bg-surface-container-high rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      </div>
      </aside>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-[260px] min-h-screen">
      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur-md text-primary font-headline text-headline-sm font-semibold docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6">
      <div className="flex-1">
      {/* Search could go here based on 'search_bar: on_right' logic */}
      </div>
      <div className="flex items-center gap-4">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full bg-surface-container-high border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent" placeholder="Search tasks..." type="text" />
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors p-2 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors p-2 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
      {/* Page Header & Filters */}
      <div className="mb-8 space-y-6">
      <div>
      <h2 className="text-2xl font-bold text-on-surface tracking-tight">Active Tasks</h2>
      <p className="text-on-surface-variant mt-1">Filter and manage ongoing maintenance operations.</p>
      </div>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 items-center">
      <button className="flex items-center gap-2 bg-error-container/20 text-error border border-error/50 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-error-container/30 transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                              Critical Status
                          </button>
      <button className="flex items-center gap-2 bg-surface-container-high text-on-surface border border-outline-variant rounded-full px-4 py-1.5 text-sm font-medium hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">today</span>
                              Due Today
                          </button>
      <button className="flex items-center gap-2 bg-primary-container/20 text-primary border border-primary/50 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-primary-container/30 transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]">person</span>
                              Assigned to Me
                          </button>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <button className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
      <span className="material-symbols-outlined text-[18px]">tune</span>
                              More Filters
                          </button>
      </div>
      <div className="text-sm text-on-surface-variant font-medium">
                          Found 24 results
                      </div>
      </div>
      {/* Task List (Bento Grid Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Task Card 1 (Critical) */}
      <div className="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col gap-4 hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="bg-error-container/20 text-error text-xs font-bold px-2.5 py-1 rounded-DEFAULT border border-error/20 uppercase tracking-wider">Critical</span>
      <span className="text-on-surface-variant text-xs">GH-Zone A</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface p-1 rounded-DEFAULT hover:bg-surface-container-highest">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div>
      <h3 className="text-lg font-semibold text-on-surface mb-1">HVAC Unit 4 Failure</h3>
      <p className="text-sm text-on-surface-variant line-clamp-2">Temperature regulation in Zone A is compromised. Immediate inspection required to prevent crop damage.</p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/50 flex justify-between items-center">
      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">schedule</span>
                                  Due: 14:00 Today
                              </div>
      <button className="bg-primary-container text-on-primary-container text-sm font-medium px-4 py-1.5 rounded-DEFAULT hover:bg-primary-fixed-dim transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
                                  View Details
                              </button>
      </div>
      </div>
      {/* Task Card 2 (Standard) */}
      <div className="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col gap-4 hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary-container">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="bg-surface-container-highest text-on-surface text-xs font-bold px-2.5 py-1 rounded-DEFAULT border border-outline-variant uppercase tracking-wider">Routine</span>
      <span className="text-on-surface-variant text-xs">Irrigation Sys</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface p-1 rounded-DEFAULT hover:bg-surface-container-highest">
      <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
      </div>
      <div>
      <h3 className="text-lg font-semibold text-on-surface mb-1">Filter Replacement</h3>
      <p className="text-sm text-on-surface-variant line-clamp-2">Scheduled replacement of main line water filters for sectors 1 through 4.</p>
      </div>
      <div className="mt-auto pt-4 border-t border-outline-variant/50 flex justify-between items-center">
      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[16px]">schedule</span>
                                  Due: Tomorrow
                              </div>
      <button className="bg-transparent border border-outline-variant text-on-surface text-sm font-medium px-4 py-1.5 rounded-DEFAULT hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
                                  View Details
                              </button>
      </div>
      </div>
      {/* Add more cards as needed following the same structure */}
      </div>
      </main>
      </div>
    </>
  );
}
