// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Operational Dashboard
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

export interface OperationalDashboardProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function OperationalDashboard(_props: OperationalDashboardProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen w-[260px] fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50">
      {/* Header */}
      <div className="p-6 pb-8">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
      <span className="material-symbols-outlined text-on-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight leading-tight">EcoGrow Ops</h1>
      <p className="text-on-surface-variant text-xs mt-0.5 tracking-wide uppercase opacity-80 font-semibold">System Console</p>
      </div>
      </div>
      </div>
      {/* Main Navigation Tabs */}
      <div className="flex-1 overflow-y-auto font-body text-sm antialiased space-y-1 mt-2">
      {/* Dashboard (Active) */}
      <a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 active:scale-[0.98] transition-transform w-full" href="#">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </a>
      {/* Task Board (Inactive) */}
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98] w-full border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                      Task Board
                  </a>
      {/* Equipment (Inactive) */}
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98] w-full border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                      Equipment
                  </a>
      {/* Logs (Inactive) */}
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high duration-200 active:scale-[0.98] w-full border-l-4 border-transparent" href="#">
      <span className="material-symbols-outlined text-[20px]">database</span>
                      Logs
                  </a>
      </div>
      {/* CTA & Footer Tabs */}
      <div className="p-4 mt-auto border-t border-outline-variant/30 space-y-4">
      <button className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-DEFAULT font-semibold text-sm shadow-md hover:brightness-110 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all active:scale-[0.98] flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      New Maintenance Task
                  </button>
      <div className="space-y-1 font-body text-sm">
      {/* Support */}
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-2 px-4 transition-colors hover:bg-surface-container-high duration-200 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined text-[18px]">help</span>
                          Support
                      </a>
      {/* Settings */}
      <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-2 px-4 transition-colors hover:bg-surface-container-high duration-200 rounded-DEFAULT" href="#">
      <span className="material-symbols-outlined text-[18px]">settings</span>
                          Settings
                      </a>
      </div>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="md:ml-[260px] min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur-md docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6 lg:px-8">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Button (Visible only on mobile) */}
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="font-headline text-lg font-semibold text-primary hidden md:block">Dashboard Overview</span>
      <span className="font-headline text-lg font-semibold text-primary md:hidden">Greenhouse Ops</span>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
      {/* Search (Right aligned as per JSON) */}
      <div className="hidden md:flex relative group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] group-focus-within:text-primary transition-colors">search</span>
      <input className="bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-9 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-64" placeholder="Search systems..." type="text" />
      </div>
      {/* Trailing Actions */}
      <button className="text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded-full transition-colors cursor-pointer active:opacity-80">
      <img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small, circular profile picture of an industrial worker wearing safety gear, integrated into a dark-mode dashboard header. The image is cropped tightly around the face, with low-key lighting and a muted color palette to match the functional navy aesthetic. The resolution is crisp, suggesting a professional headshot used for an internal employee directory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHtIyWdBItPNfdQ1djaUJ5Nf-DI5WR9VDZH-w53ypiW-dDXR9tjlvV_SZwTUQbZIkaqKtXschnFnTxrEElTYZx3DzLr3YJ1JjyxQpDqGY79BR2PiQMbCA7SOYbAGHFUKNsiKleE4ADj5DS2v-yWLdHbGDWgIag5MJN2FPl41ThXMybFlJTFdF2nIEviMxYdfp37NwYSSgQ0Bb7zf1FyEYwCEko3Wdm4qCR5n6is6zBdWNBFS1Dm0xuLL68-SeukD--nMy7vUYXEDYo" />
      </button>
      </div>
      </header>
      {/* Dashboard Canvas */}
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
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-error transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
      <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Critical Alerts</span>
      <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center border border-error/20">
      <span className="material-symbols-outlined text-error text-[18px]">warning</span>
      </div>
      </div>
      <div className="relative z-10">
      <span className="text-4xl font-display font-bold text-error">3</span>
      <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-error">arrow_upward</span>
                                      +2 since last shift
                                  </p>
      </div>
      </div>
      {/* Tasks Due Today */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-primary-container transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
      <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Tasks Due Today</span>
      <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
      <span className="material-symbols-outlined text-primary-container text-[18px]">today</span>
      </div>
      </div>
      <div className="relative z-10">
      <span className="text-4xl font-display font-bold text-on-surface">12</span>
      <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] text-primary">arrow_downward</span>
                                      -4 from yesterday
                                  </p>
      </div>
      </div>
      {/* Active Equipment */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-secondary transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
      <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Active Equip</span>
      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
      <span className="material-symbols-outlined text-secondary text-[18px]">power</span>
      </div>
      </div>
      <div className="relative z-10">
      <span className="text-4xl font-display font-bold text-on-surface">94<span className="text-xl text-on-surface-variant font-normal">%</span></span>
      <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
      <span className="text-secondary font-medium">Nominal operation</span>
      </p>
      </div>
      </div>
      {/* Total Tasks (YTD) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between group hover:border-tertiary transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
      <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Total Tasks</span>
      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
      <span className="material-symbols-outlined text-tertiary text-[18px]">inventory_2</span>
      </div>
      </div>
      <div className="relative z-10">
      <span className="text-4xl font-display font-bold text-on-surface">1,248</span>
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
      <button className="px-3 py-1 text-xs font-semibold bg-primary-container text-on-primary-container rounded-DEFAULT">24h</button>
      <button className="px-3 py-1 text-xs font-semibold bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-DEFAULT transition-colors border border-outline-variant">7d</button>
      </div>
      </div>
      <div className="flex-1 p-5 relative w-full h-full bg-gradient-to-b from-surface-container-lowest/20 to-surface">
      {/* Mock Chart Lines using Tailwind Gradients/Divs for UI structure */}
      <div className="absolute inset-x-5 inset-y-8 flex flex-col justify-between z-0">
      <div className="w-full border-t border-outline-variant/30 h-px"></div>
      <div className="w-full border-t border-outline-variant/30 h-px"></div>
      <div className="w-full border-t border-outline-variant/30 h-px"></div>
      <div className="w-full border-t border-outline-variant/30 h-px"></div>
      <div className="w-full border-t border-outline-variant/30 h-px"></div>
      </div>
      {/* Placeholder for actual chart graphic */}
      <div className="relative z-10 w-full h-full flex items-end justify-around gap-2 px-4 pb-2">
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors relative group" style={{height: "40%"}}>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant">40%</div>
      </div>
      <div className="w-full bg-primary/30 hover:bg-primary/50 rounded-t-sm transition-colors relative group" style={{height: "65%"}}></div>
      <div className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors relative group" style={{height: "50%"}}></div>
      <div className="w-full bg-error/30 hover:bg-error/50 rounded-t-sm transition-colors relative group" style={{height: "85%"}}></div>
      <div className="w-full bg-primary/40 hover:bg-primary/60 rounded-t-sm transition-colors relative group" style={{height: "70%"}}></div>
      <div className="w-full bg-primary/50 hover:bg-primary/70 rounded-t-sm transition-colors relative group" style={{height: "90%"}}></div>
      <div className="w-full bg-primary/30 hover:bg-primary/50 rounded-t-sm transition-colors relative group" style={{height: "60%"}}></div>
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
      {/* Log Item 1 */}
      <div className="flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent hover:border-error">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-error shrink-0 shadow-[0_0_8px_rgba(255,180,171,0.6)]"></div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">Pressure Drop - Pump Alpha</p>
      <p className="text-xs text-on-surface-variant truncate mt-0.5">Sector 7G main irrigation line.</p>
      </div>
      <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">10m ago</span>
      </div>
      {/* Log Item 2 */}
      <div className="flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent hover:border-primary">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0"></div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">Task Completed: Filter Check</p>
      <p className="text-xs text-on-surface-variant truncate mt-0.5">By Operator GH-882</p>
      </div>
      <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">45m ago</span>
      </div>
      {/* Log Item 3 */}
      <div className="flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent hover:border-tertiary">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-tertiary shrink-0"></div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">System Calibrated</p>
      <p className="text-xs text-on-surface-variant truncate mt-0.5">Automated nightly routine.</p>
      </div>
      <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">2h ago</span>
      </div>
      {/* Log Item 4 */}
      <div className="flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent hover:border-outline-variant">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-outline-variant shrink-0"></div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">User Login</p>
      <p className="text-xs text-on-surface-variant truncate mt-0.5">Terminal 4, Sector 2</p>
      </div>
      <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">3h ago</span>
      </div>
      {/* Log Item 5 */}
      <div className="flex items-start gap-3 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-default border-l-2 border-transparent hover:border-primary">
      <div className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0"></div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">Task Created: Valve Replace</p>
      <p className="text-xs text-on-surface-variant truncate mt-0.5">Assigned to Maintenance Team</p>
      </div>
      <span className="text-[10px] text-on-surface-variant whitespace-nowrap mt-0.5 font-mono">4h ago</span>
      </div>
      </div>
      <div className="p-3 border-t border-outline-variant bg-surface-container-low text-center">
      <a className="text-xs font-semibold text-primary hover:text-primary-fixed transition-colors" href="#">View Full Log →</a>
      </div>
      </div>
      {/* Bottom Section: Quick Actions Grid */}
      <div className="col-span-1 md:col-span-4 lg:col-span-12">
      <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-4 pl-1">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Action 1 */}
      <button className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-primary focus:outline-none group">
      <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container/20 transition-colors">
      <span className="material-symbols-outlined text-primary text-[24px]">add_task</span>
      </div>
      <span className="text-sm font-medium text-on-surface">Create Task</span>
      </button>
      {/* Action 2 */}
      <button className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-error focus:outline-none group">
      <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center group-hover:bg-error/20 transition-colors relative">
      <span className="material-symbols-outlined text-error text-[24px]">notification_important</span>
      <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface-container-low"></span>
      </div>
      <span className="text-sm font-medium text-on-surface">Check Alerts</span>
      </button>
      {/* Action 3 */}
      <button className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-secondary focus:outline-none group">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary text-[24px]">build</span>
      </div>
      <span className="text-sm font-medium text-on-surface">Diagnose Equip</span>
      </button>
      {/* Action 4 */}
      <button className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] focus:ring-2 focus:ring-tertiary focus:outline-none group">
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
    </>
  );
}
