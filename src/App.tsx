import { useState } from "react";
import type { AppState } from "./types/domain";
import { useAppState } from "./hooks/useAppState";
import { OperationalDashboard } from "./screens/OperationalDashboard";
import { TaskBoard } from "./screens/TaskBoard";
import { EquipmentStatus } from "./screens/EquipmentStatus";
import { MaintenanceLog } from "./screens/MaintenanceLog";
import { FilteredOverview } from "./screens/FilteredOverview";
import { EmptyState } from "./screens/EmptyState";
import { StorageErrorState } from "./screens/StorageErrorState";
import { Settings } from "./screens/Settings";

function AppShell({
  state,
  setScreen,
  onNewTask,
  setSearchQuery,
}: {
  state: AppState;
  setScreen: (s: string) => void;
  onNewTask: () => void;
  setSearchQuery: (q: string) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const unreadCount = state.notifications.filter((n) => !n.read).length;

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "tasks", label: "Task Board", icon: "assignment" },
    { id: "equipment", label: "Equipment", icon: "precision_manufacturing" },
    { id: "logs", label: "Logs", icon: "database" },
  ];

  const isActive = (id: string) => state.currentScreen === id;

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen w-[260px] bg-surface-container-low border-r border-outline-variant z-50 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
              <span
                className="material-symbols-outlined text-on-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
            </div>
            <div>
              <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight leading-tight">
                EcoGrow Ops
              </h1>
              <p className="text-on-surface-variant text-xs mt-0.5 tracking-wide uppercase opacity-80 font-semibold">
                System Console
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={onNewTask}
            className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-lg font-semibold text-sm shadow-md hover:brightness-110 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Maintenance Task
          </button>
        </div>

        <div className="flex-1 overflow-y-auto font-body text-sm antialiased space-y-1 mt-2 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setScreen(item.id);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 transition-colors duration-200 active:scale-[0.98] rounded-lg cursor-pointer ${
                isActive(item.id)
                  ? "text-primary border-l-4 border-primary bg-secondary-container/20 font-bold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border-l-4 border-transparent"
              }`}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={
                  isActive(item.id)
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="p-4 mt-auto border-t border-outline-variant/30 space-y-1">
          <button
            onClick={() => setScreen("settings")}
            className={`flex items-center gap-3 w-full text-left py-2 px-4 transition-colors hover:bg-surface-container-high duration-200 rounded-lg cursor-pointer ${
              isActive("settings") ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
            Settings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="md:ml-[260px] min-h-screen flex flex-col">
        {/* Top App Bar */}
        <header className="bg-background/95 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer active:opacity-80"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-headline text-lg font-semibold text-primary hidden md:block">
              {navItems.find((n) => n.id === state.currentScreen)?.label ||
                state.currentScreen.charAt(0).toUpperCase() +
                  state.currentScreen.slice(1)}
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-9 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors w-64"
                placeholder="Search systems..."
                type="text"
                value={state.searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors cursor-pointer active:opacity-80 relative"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setProfileOpen(true)}
              className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded-full transition-colors cursor-pointer active:opacity-80"
              aria-label="User profile"
            >
              <img
                alt="User Profile"
                className="w-8 h-8 rounded-full border border-outline-variant object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHtIyWdBItPNfdQ1djaUJ5Nf-DI5WR9VDZH-w53ypiW-dDXR9tjlvV_SZwTUQbZIkaqKtXschnFnTxrEElTYZx3DzLr3YJ1JjyxQpDqGY79BR2PiQMbCA7SOYbAGHFUKNsiKleE4ADj5DS2v-yWLdHbGDWgIag5MJN2FPl41ThXMybFlJTFdF2nIEviMxYdfp37NwYSSgQ0Bb7zf1FyEYwCEko3Wdm4qCR5n6is6zBdWNBFS1Dm0xuLL68-SeukD--nMy7vUYXEDYo"
              />
            </button>
          </div>
        </header>

        {/* Screen Content */}
        <main className="flex-1">
          {state.currentScreen === "dashboard" && (
            <OperationalDashboard
              onNavigate={(_, screen) => setScreen(screen as string)}
              onAction={(action) => {
                if (action === "new-task") onNewTask();
              }}
              state={state}
            />
          )}
          {state.currentScreen === "tasks" && (
            <TaskBoard
              onNavigate={(_, screen) => setScreen(screen as string)}
              onAction={(action) => {
                if (action === "new-task") onNewTask();
              }}
              state={state}
            />
          )}
          {state.currentScreen === "equipment" && (
            <EquipmentStatus
              onNavigate={(_, screen) => setScreen(screen as string)}
              state={state}
            />
          )}
          {state.currentScreen === "logs" && (
            <MaintenanceLog
              onNavigate={(_, screen) => setScreen(screen as string)}
              state={state}
            />
          )}
          {state.currentScreen === "settings" && (
            <Settings
              onClose={() => setScreen("dashboard")}
              onBack={() => setScreen("dashboard")}
              state={state}
            />
          )}
          {state.currentScreen === "filtered" && (
            <FilteredOverview
              onNavigate={(_, screen) => setScreen(screen as string)}
              state={state}
            />
          )}
          {state.currentScreen === "empty" && (
            <EmptyState
              onNavigate={(_, screen) => setScreen(screen as string)}
              onAction={(action) => {
                if (action === "new-task") onNewTask();
              }}
              state={state}
            />
          )}
          {state.currentScreen === "storage-error" && (
            <StorageErrorState
              onClose={() => setScreen("dashboard")}
              onBack={() => setScreen("dashboard")}
              state={state}
            />
          )}
        </main>
      </div>

      {/* Profile Panel Overlay */}
      {profileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setProfileOpen(false)}
        />
      )}
      {profileOpen && (
        <aside className="fixed right-0 top-0 h-full w-80 z-50 bg-surface-container-high border-l border-outline-variant shadow-2xl flex flex-col p-4 space-y-2">
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
                <h2 className="text-headline-sm font-bold text-on-surface tracking-tight">
                  Account Settings
                </h2>
                <p className="text-on-surface-variant text-sm mt-1">
                  Operator ID: GH-882
                </p>
                <p className="text-on-surface-variant text-sm text-opacity-80">
                  gh-882@ecogrow.ops
                </p>
              </div>
            </div>
            <button
              aria-label="Close panel"
              onClick={() => setProfileOpen(false)}
              className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high cursor-pointer"
            >
              <span className="material-symbols-outlined block">close</span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col space-y-1 font-body text-body-md text-primary">
            <button className="flex items-center gap-4 py-3 px-4 bg-primary-container text-on-primary-container rounded-lg mx-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high font-medium text-left cursor-pointer">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person
              </span>
              Profile
            </button>
            <button className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high text-left cursor-pointer">
              <span className="material-symbols-outlined">security</span>
              Security
            </button>
            <button className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high text-left cursor-pointer">
              <span className="material-symbols-outlined">tune</span>
              Preferences
            </button>
            <button className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest mx-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high text-left cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </button>
          </nav>
          <div className="mt-auto pt-6 border-t border-outline-variant/50 px-2 pb-2">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-error bg-error-container/10 border border-error/20 hover:bg-error-container/20 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Logout
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default function App() {
  const app = useAppState();

  if (app.storageError) {
    return (
      <StorageErrorState
        onClose={() => app.retryStorage()}
        onBack={() => app.retryStorage()}
        state={app.state}
      />
    );
  }

  return (
    <AppShell
      state={app.state}
      setScreen={app.setScreen}
      onNewTask={() => app.setScreen("tasks")}
      setSearchQuery={app.setSearchQuery}
    />
  );
}
