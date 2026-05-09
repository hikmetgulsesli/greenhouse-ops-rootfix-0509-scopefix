// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Storage Error State
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

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function StorageErrorState(_props: StorageErrorStateProps = {}) {
  return (
    <>
      {/* SideNavBar (Shared Component) - Disabled State */}
      <nav className="h-screen w-[260px] fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant flex flex-col h-full overflow-y-auto opacity-40 pointer-events-none grayscale-[50%] z-50">
      {/* Header */}
      <div className="px-6 py-5 border-b border-outline-variant flex items-center gap-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container text-xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div className="flex flex-col">
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight leading-tight">EcoGrow Ops</h1>
      <span className="text-[11px] font-label text-on-surface-variant uppercase tracking-wider">System Console</span>
      </div>
      </div>
      {/* CTA Area */}
      <div className="p-4">
      <button className="w-full bg-primary-container text-on-primary-container font-label text-sm font-semibold py-2.5 px-4 rounded-DEFAULT flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                      New Maintenance Task
                  </button>
      </div>
      {/* Primary Navigation */}
      <div className="flex-1 flex flex-col gap-1 px-3 mt-2">
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">dashboard</span>
                      Dashboard
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">assignment</span>
                      Task Board
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                      Equipment
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">database</span>
                      Logs
                  </a>
      </div>
      {/* Footer Navigation */}
      <div className="p-3 border-t border-outline-variant flex flex-col gap-1">
      <a className="text-on-surface-variant hover:text-on-surface py-2.5 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">help</span>
                      Support
                  </a>
      <a className="text-on-surface-variant hover:text-on-surface py-2.5 px-4 transition-colors font-body text-label-md antialiased flex items-center gap-3 rounded-lg" href="#">
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-[260px] flex-1 flex flex-col h-screen overflow-hidden relative">
      {/* TopAppBar (Shared Component) - Muted */}
      <header className="bg-background/95 backdrop-blur-md docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6 opacity-40 pointer-events-none transition-opacity">
      {/* Left: Brand (Hidden per JSON, but keeping structure for layout balance if needed, or just leaving empty) */}
      <div className="flex-1"></div>
      {/* Right: Search & Actions */}
      <div className="flex items-center gap-4">
      {/* Search (on_right) */}
      <div className="relative hidden lg:flex items-center">
      <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm">search</span>
      <input className="bg-surface-container-high border-none rounded-full py-1.5 pl-9 pr-4 text-sm text-on-surface placeholder-on-surface-variant focus:ring-0 w-48" disabled={true} placeholder="Search..." type="text" />
      </div>
      {/* Trailing Icons */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Error Canvas Container */}
      <div className="flex-1 relative flex flex-col items-center justify-center p-8 bg-background">
      {/* Dramatic Error Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="w-[600px] h-[600px] bg-error-container/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>
      {/* High-End Glassmorphism Error Card */}
      <div className="relative z-10 w-full max-w-lg bg-surface-container/60 backdrop-blur-xl border border-outline-variant/50 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-10 flex flex-col items-center text-center">
      {/* Icon Container */}
      <div className="relative mb-8">
      {/* Pulsing rings */}
      <div className="absolute inset-0 bg-error-container/30 rounded-full animate-ping opacity-75"></div>
      <div className="relative w-24 h-24 bg-surface-container-highest border border-error-container rounded-full flex items-center justify-center shadow-inner">
      <span className="material-symbols-outlined text-[48px] text-error" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      {/* Secondary sub-icon for storage */}
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-error-container rounded-full border-[3px] border-surface-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px] text-on-error-container" style={{fontVariationSettings: "'FILL' 1"}}>sd_storage</span>
      </div>
      </div>
      </div>
      {/* Typography */}
      <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-3">
                          Data Sync Error
                      </h2>
      <p className="font-body text-base text-on-surface-variant leading-relaxed mb-10 max-w-sm">
                          Local storage is full or unavailable. System metrics and operational logs cannot be persisted to disk.
                      </p>
      {/* Actions Container */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-auto">
      {/* Secondary Action */}
      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant rounded-DEFAULT text-on-surface font-label font-medium hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-all duration-200">
      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                              Clear Storage
                          </button>
      {/* Primary Action */}
      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-DEFAULT font-label font-bold hover:bg-primary hover:text-on-primary focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background shadow-lg shadow-primary-container/20 transition-all duration-200 group">
      <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500">sync</span>
                              Retry Sync
                          </button>
      </div>
      {/* Terminal-style error code (Decorative/Functional Aesthetic) */}
      <div className="mt-8 pt-4 border-t border-outline-variant/30 w-full text-center">
      <span className="font-mono text-xs text-error/70 bg-error-container/10 px-2 py-1 rounded">ERR_QUOTA_EXCEEDED (0x80040111)</span>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
