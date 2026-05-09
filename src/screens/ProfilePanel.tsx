// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Profile Panel
//
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";
import type { AppState } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface ProfilePanelProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function ProfilePanel(props: ProfilePanelProps = {}) {
  const { onClose, onAction, state } = props;
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences' | 'notifications'>('profile');

  const tabs: { id: typeof activeTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', icon: 'person' },
    { id: 'security', label: 'Security', icon: 'security' },
    { id: 'preferences', label: 'Preferences', icon: 'tune' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications' },
  ];

  const unreadCount = state?.notifications.filter((n) => !n.read).length ?? 0;
  const readCount = state?.notifications.filter((n) => n.read).length ?? 0;

  return (
    <>
      {/* Background Canvas (Simulated Main Content) */}
      <main className="p-8 grid grid-cols-12 gap-6 opacity-30">
        <div className="col-span-12 md:col-span-8 bg-surface-container rounded-lg border border-outline-variant h-96"></div>
        <div className="col-span-12 md:col-span-4 bg-surface-container rounded-lg border border-outline-variant h-96"></div>
      </main>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        role="presentation"
      />
      {/* Navigation Drawer (Shared Component) */}
      <aside className="fixed right-0 top-0 h-full w-80 z-50 bg-surface-container-high border-l border-outline-variant shadow-2xl translate-x-0 transition-transform duration-300 ease-in-out flex flex-col p-4 space-y-2">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-outline-variant/50 pt-2 px-2">
          <div className="flex flex-col gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-highest">
              <img
                alt="Operator Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe89l06JFozwHV-N110hD02dGFFFJij5DEGmHWdLln_dKxLHYilItdD5ATK9hNR0govPEYKf4tQ0-nIsBSz4gEuEemq7Rp_hs3chxg8VMhGmiNxTP6LDfD4Maf9E3gVNG1HgDVjbqKikoBTZ3F_wff8Cp-2A-rb_HZwI-JWpLry6HvZp_xfm04PsLppYNPlYuZVlZR1MEUckQgTCFcQPw1Jth0oWRUqkh-QZvwbeQyVs0BlQ08oV1JXWnajUMrOMg0hi-1zv6iKY6x"
              />
            </div>
            <div>
              <h2 className="text-headline-sm font-bold text-on-surface tracking-tight">Account Settings</h2>
              <p className="text-on-surface-variant text-sm mt-1">Operator ID: GH-882</p>
              <p className="text-on-surface-variant text-sm text-opacity-80">gh-882@ecogrow.ops</p>
            </div>
          </div>
          <button
            aria-label="Close panel"
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high cursor-pointer"
          >
            <span className="material-symbols-outlined block">close</span>
          </button>
        </div>
        {/* Navigation Tabs */}
        <nav className="flex-1 flex flex-col space-y-1 font-body text-body-md text-primary">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 py-3 px-4 mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high text-left cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-primary-container text-on-primary-container font-medium'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={activeTab === tab.id ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Operator Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Name</span>
                    <span className="text-on-surface font-medium">Marcus Johnson</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Role</span>
                    <span className="text-on-surface font-medium">Senior Technician</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Zone</span>
                    <span className="text-on-surface font-medium">Zone B / Sector 4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Shift</span>
                    <span className="text-on-surface font-medium">Day (06:00 - 14:00)</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Activity Summary</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-surface-container-low rounded-lg">
                    <span className="block text-2xl font-bold text-primary">{state?.tasks.filter(t => t.status === 'completed').length ?? 0}</span>
                    <span className="text-xs text-on-surface-variant">Tasks Done</span>
                  </div>
                  <div className="text-center p-2 bg-surface-container-low rounded-lg">
                    <span className="block text-2xl font-bold text-primary">{state?.logs.length ?? 0}</span>
                    <span className="text-xs text-on-surface-variant">Log Entries</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Security Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
                    <span className="text-on-surface">Two-factor authentication enabled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">lock</span>
                    <span className="text-on-surface">Last password change: 15 days ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">devices</span>
                    <span className="text-on-surface">Active sessions: 2 devices</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onAction?.('change-password')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary-container text-on-primary-container rounded-lg transition-colors font-medium text-sm hover:bg-primary-container/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">key</span>
                Change Password
              </button>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-4">
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Display Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">Compact View</span>
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">Show Tooltips</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">Auto-refresh Data</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Language & Region</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Language</label>
                    <select className="w-full bg-surface-container-highest border border-outline-variant text-on-surface text-sm rounded p-2 cursor-pointer">
                      <option>English</option>
                      <option>Turkish</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Time Format</label>
                    <select className="w-full bg-surface-container-highest border border-outline-variant text-on-surface text-sm rounded p-2 cursor-pointer">
                      <option>24-hour</option>
                      <option>12-hour</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/50">
                <h3 className="font-headline font-semibold text-sm text-on-surface mb-3">Notification Summary</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-surface-container-low rounded-lg">
                    <span className="block text-2xl font-bold text-error">{unreadCount}</span>
                    <span className="text-xs text-on-surface-variant">Unread</span>
                  </div>
                  <div className="text-center p-2 bg-surface-container-low rounded-lg">
                    <span className="block text-2xl font-bold text-tertiary">{readCount}</span>
                    <span className="text-xs text-on-surface-variant">Read</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">Critical Alerts</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">Task Reminders</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-on-surface">System Updates</span>
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded cursor-pointer" />
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-6 border-t border-outline-variant/50 px-2 pb-2">
          <button
            onClick={() => onAction?.('logout')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-error bg-error-container/10 border border-error/20 hover:bg-error-container/20 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
