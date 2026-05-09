// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Empty State
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

export interface EmptyStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function EmptyState(_props: EmptyStateProps = {}) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="h-screen w-[260px] fixed left-0 top-0 hidden md:flex flex-col overflow-y-auto bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant font-body text-label-md antialiased z-50">
      {/* Header */}
      <div className="p-6 flex items-center space-x-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
      </div>
      <div>
      <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">EcoGrow Ops</h1>
      <p className="text-xs text-on-surface-variant">System Console</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-4 mb-6">
      <button className="w-full bg-primary text-on-primary font-bold py-2.5 px-4 rounded-DEFAULT flex items-center justify-center space-x-2 active:scale-[0.98] transition-transform hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-low">
      <span className="material-symbols-outlined text-sm">add</span>
      <span>New Maintenance Task</span>
      </button>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 flex flex-col gap-1 px-2">
      <a className="flex items-center space-x-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-xl">dashboard</span>
      <span>Dashboard</span>
      </a>
      <a className="flex items-center space-x-3 text-primary border-l-4 border-primary bg-secondary-container/20 font-bold py-3 px-4 rounded-r-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-xl">assignment</span>
      <span>Task Board</span>
      </a>
      <a className="flex items-center space-x-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
      <span>Equipment</span>
      </a>
      <a className="flex items-center space-x-3 text-on-surface-variant hover:text-on-surface py-3 px-4 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-xl">database</span>
      <span>Logs</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="p-4 border-t border-outline-variant/30 flex flex-col gap-1">
      <a className="flex items-center space-x-3 text-on-surface-variant hover:text-on-surface py-2 px-3 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-lg">help</span>
      <span>Support</span>
      </a>
      <a className="flex items-center space-x-3 text-on-surface-variant hover:text-on-surface py-2 px-3 transition-colors hover:bg-surface-container-high transition-all duration-200 rounded-DEFAULT active:scale-[0.98] transition-transform" href="#">
      <span className="material-symbols-outlined text-lg">settings</span>
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-[260px] min-h-screen">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center h-16 px-6">
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <div className="md:hidden flex items-center">
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors p-2 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <span className="ml-4 font-headline text-headline-sm font-semibold text-primary">Greenhouse Ops</span>
      </div>
      {/* Product Name (Desktop) */}
      <div className="hidden md:flex items-center font-headline text-headline-sm font-semibold text-primary">
                          Greenhouse Ops
                      </div>
      {/* Actions */}
      <div className="flex items-center space-x-2">
      {/* Search Bar */}
      <div className="relative hidden sm:block mr-2">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
      <input className="bg-surface-container-high border border-outline-variant text-on-surface text-sm rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-48 transition-all" placeholder="Search..." type="text" />
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors p-2 cursor-pointer active:opacity-80 flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors p-2 cursor-pointer active:opacity-80 flex items-center justify-center relative">
      <span className="material-symbols-outlined">account_circle</span>
      <span className="sr-only">User Profile</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas: Empty State */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Subtle background structural graphic (decorative) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
      <div className="w-[800px] h-[800px] border-[1px] border-outline rounded-full"></div>
      <div className="w-[600px] h-[600px] border-[1px] border-outline rounded-full absolute"></div>
      </div>
      {/* Empty State Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full p-8 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-sm">
      {/* Illustration/Icon */}
      <div className="w-24 h-24 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-6 shadow-sm">
      <span className="material-symbols-outlined text-5xl text-primary opacity-80" style={{fontVariationSettings: "'FILL' 0"}}>assignment</span>
      </div>
      {/* Text Content */}
      <h2 className="font-headline text-2xl font-bold text-on-surface mb-2 tracking-tight">No Tasks Found</h2>
      <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
                          Get started by creating your first maintenance task. Keep your greenhouse operations running smoothly and efficiently.
                      </p>
      {/* Primary Action */}
      <button className="bg-primary text-on-primary font-headline font-bold py-3 px-8 rounded-DEFAULT flex items-center justify-center space-x-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all active:scale-[0.98]">
      <span className="material-symbols-outlined text-lg">add_circle</span>
      <span>Create New Task</span>
      </button>
      </div>
      </main>
      </div>
    </>
  );
}
