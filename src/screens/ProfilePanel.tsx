// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Profile Panel
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

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: unknown;
}

export function ProfilePanel(_props: ProfilePanelProps = {}) {
  return (
    <>
      {/* Background Canvas (Simulated Main Content) */}
      <main className="p-8 grid grid-cols-12 gap-6 opacity-30">
      <div className="col-span-12 md:col-span-8 bg-surface-container rounded-lg border border-outline-variant h-96"></div>
      <div className="col-span-12 md:col-span-4 bg-surface-container rounded-lg border border-outline-variant h-96"></div>
      </main>
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"></div>
      {/* Navigation Drawer (Shared Component) */}
      <aside className="fixed right-0 top-0 h-full w-80 z-50 bg-surface-container-high border-l border-outline-variant shadow-2xl translate-x-0 transition-transform duration-300 ease-in-out flex flex-col p-4 space-y-2">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6 pb-6 border-b border-outline-variant/50 pt-2 px-2">
      <div className="flex flex-col gap-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-highest">
      <img alt="Operator Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a male greenhouse operations manager in a dark, tech-focused setting. The lighting is dramatic and moody, emphasizing a serious, focused expression. The color palette is composed of deep navies and cool slate greys, matching a high-end industrial UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe89l06JFozwHV-N110hD02dGFFFJij5DEGmHWdLln_dKxLHYilItdD5ATK9hNR0govPEYKf4tQ0-nIsBSz4gEuEemq7Rp_hs3chxg8VMhGmiNxTP6LDfD4Maf9E3gVNG1HgDVjbqKikoBTZ3F_wff8Cp-2A-rb_HZwI-JWpLry6HvZp_xfm04PsLppYNPlYuZVlZR1MEUckQgTCFcQPw1Jth0oWRUqkh-QZvwbeQyVs0BlQ08oV1JXWnajUMrOMg0hi-1zv6iKY6x" />
      </div>
      <div>
      <h2 className="text-headline-sm font-bold text-on-surface tracking-tight">Account Settings</h2>
      <p className="text-on-surface-variant text-sm mt-1">Operator ID: GH-882</p>
      <p className="text-on-surface-variant text-sm text-opacity-80">gh-882@ecogrow.ops</p>
      </div>
      </div>
      <button aria-label="Close panel" className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high">
      <span className="material-symbols-outlined block">close</span>
      </button>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 flex flex-col space-y-1 font-body text-body-md text-primary">
      {/* Active Tab: Profile */}
      <a className="flex items-center gap-4 py-3 px-4 bg-primary-container text-on-primary-container rounded-lg mx-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high font-medium" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
                      Profile
                  </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" href="#">
      <span className="material-symbols-outlined">security</span>
                      Security
                  </a>
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" href="#">
      <span className="material-symbols-outlined">tune</span>
                      Preferences
                  </a>
      <a className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high" href="#">
      <span className="material-symbols-outlined">notifications</span>
                      Notifications
                  </a>
      </nav>
      {/* Footer Actions */}
      <div className="mt-auto pt-6 border-t border-outline-variant/50 px-2 pb-2">
      <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-error bg-error-container/10 border border-error/20 hover:bg-error-container/20 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high">
      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Logout
                  </button>
      </div>
      </aside>
    </>
  );
}
