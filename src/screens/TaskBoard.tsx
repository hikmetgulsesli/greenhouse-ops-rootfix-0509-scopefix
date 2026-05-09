// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Board
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

export interface TaskBoardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function TaskBoard(_props: TaskBoardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-body text-label-md antialiased h-screen w-[260px] fixed left-0 top-0 border-r border-outline-variant flex flex-col h-full overflow-y-auto z-50">
      <div className="p-6 pb-2">
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight flex items-center gap-2">
      <span className="material-symbols-outlined" data-icon="eco">eco</span>
                      EcoGrow Ops
                  </h1>
      <p className="text-on-surface-variant text-sm mt-1">System Console</p>
      </div>
      <div className="px-4 py-4">
      <button className="w-full bg-primary-container text-on-primary-container rounded flex items-center justify-center gap-2 py-2 px-4 font-semibold hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98]">
      <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                      New Maintenance Task
                  </button>
      </div>
      <ul className="flex-grow space-y-1 mt-4">
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="assignment" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
                          Task Board
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
                          Equipment
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="database">database</span>
                          Logs
                      </a>
      </li>
      </ul>
      <div className="border-t border-outline-variant p-4 space-y-1">
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="help">help</span>
                      Support
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow ml-[260px] flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur-md text-primary font-headline text-headline-sm font-semibold docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6">
      <div className="flex items-center gap-4">
      <h2>Task Board</h2>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
      <input className="bg-surface-container-high border border-outline-variant rounded pl-9 pr-3 py-1.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent w-64 placeholder-on-surface-variant" placeholder="Search tasks..." type="text" />
      </div>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Kanban Board Container */}
      <div className="flex-grow p-6 overflow-x-auto">
      <div className="flex gap-6 min-w-max h-full">
      {/* Column: To Do */}
      <div className="w-80 flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
      <h3 className="font-bold text-on-surface uppercase tracking-wider text-sm flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                                  To Do
                              </h3>
      <span className="bg-surface-container-high text-on-surface-variant text-xs px-2 py-1 rounded font-mono">3</span>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-high border border-outline-variant rounded-lg p-4 flex flex-col gap-3 hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start">
      <span className="bg-error/15 text-error text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide">High Priority</span>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-semibold text-on-surface text-base leading-tight">Replace faulty flow valve on Zone B irrigation line</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
      <div className="w-6 h-6 rounded bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">MJ</div>
      <span className="text-sm text-on-surface-variant truncate">Marcus Johnson</span>
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-high border border-outline-variant rounded-lg p-4 flex flex-col gap-3 hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start">
      <span className="bg-primary/15 text-primary text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide">Medium Priority</span>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-semibold text-on-surface text-base leading-tight">Calibrate humidity sensors in Sector 4</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
      <div className="w-6 h-6 rounded bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">AL</div>
      <span className="text-sm text-on-surface-variant truncate">Anna Lee</span>
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-high border border-outline-variant rounded-lg p-4 flex flex-col gap-3 hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start">
      <span className="bg-surface-variant text-on-surface-variant text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide border border-outline-variant">Low Priority</span>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-semibold text-on-surface text-base leading-tight">Quarterly inspection of exhaust fans</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
      <div className="w-6 h-6 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center text-xs font-bold text-on-surface-variant border-dashed">--</div>
      <span className="text-sm text-on-surface-variant italic">Unassigned</span>
      </div>
      </div>
      </div>
      {/* Column: In Progress */}
      <div className="w-80 flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
      <h3 className="font-bold text-on-surface uppercase tracking-wider text-sm flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                  In Progress
                              </h3>
      <span className="bg-surface-container-high text-on-surface-variant text-xs px-2 py-1 rounded font-mono">1</span>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-high border border-primary-container/50 rounded-lg p-4 flex flex-col gap-3 shadow-[0_0_15px_rgba(37,99,235,0.1)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
      <div className="flex justify-between items-start pl-2">
      <span className="bg-error/15 text-error text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide">High Priority</span>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm" data-icon="more_vert">more_vert</span></button>
      </div>
      <h4 className="font-semibold text-on-surface text-base leading-tight pl-2">Patch structural leak in Bay 2 roof paneling</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant ml-2">
      <div className="w-6 h-6 rounded bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary-container">TS</div>
      <span className="text-sm text-on-surface-variant truncate">Tom Servo</span>
      </div>
      </div>
      </div>
      {/* Column: Completed */}
      <div className="w-80 flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
      <h3 className="font-bold text-on-surface uppercase tracking-wider text-sm flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                                  Completed
                              </h3>
      <span className="bg-surface-container-high text-on-surface-variant text-xs px-2 py-1 rounded font-mono">2</span>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4 flex flex-col gap-3 opacity-75">
      <div className="flex justify-between items-start">
      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide">Medium Priority</span>
      </div>
      <h4 className="font-semibold text-on-surface-variant text-base leading-tight line-through decoration-outline">Refill nutrient dosing tanks A &amp; B</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
      <span className="material-symbols-outlined text-[#10b981] text-sm" data-icon="check_circle">check_circle</span>
      <span className="text-sm text-on-surface-variant truncate">Completed today 08:30</span>
      </div>
      </div>
      {/* Task Card */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4 flex flex-col gap-3 opacity-75">
      <div className="flex justify-between items-start">
      <span className="bg-surface-variant text-on-surface-variant text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wide border border-outline-variant">Low Priority</span>
      </div>
      <h4 className="font-semibold text-on-surface-variant text-base leading-tight line-through decoration-outline">Clear debris from main perimeter drainage trench</h4>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-outline-variant">
      <span className="material-symbols-outlined text-[#10b981] text-sm" data-icon="check_circle">check_circle</span>
      <span className="text-sm text-on-surface-variant truncate">Completed yesterday</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
