import type { AppState } from "../types/domain";

type ScreenCallback = {
  bivarianceHack(...args: unknown[]): void;
}["bivarianceHack"];

export interface StorageErrorStateProps {
  onClose?: () => void;
  onBack?: () => void;
  onNavigate?: ScreenCallback;
  onAction?: ScreenCallback;
  state?: AppState;
}

export function StorageErrorState(props: StorageErrorStateProps = {}) {
  const { onClose, onBack, onNavigate } = props;

  const handleRetry = () => {
    if (onClose) onClose();
    else if (onBack) onBack();
  };

  const handleClearStorage = () => {
    try {
      localStorage.clear();
    } catch {
      // noop
    }
    if (onClose) onClose();
    else if (onBack) onBack();
  };

  const handleNav = (screen: string) => {
    if (onNavigate) onNavigate(undefined, screen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Muted sidebar overlay for context */}
      <nav className="h-screen w-[260px] fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col overflow-y-auto opacity-40 pointer-events-none grayscale-[50%] z-50 hidden md:flex">
        <div className="px-6 py-5 border-b border-outline-variant flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight leading-tight">EcoGrow Ops</h1>
            <span className="text-[11px] font-label text-on-surface-variant uppercase tracking-wider">System Console</span>
          </div>
        </div>
        <div className="p-4">
          <button className="w-full bg-primary-container text-on-primary-container font-label text-sm font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 opacity-50" disabled>
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            New Maintenance Task
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-1 px-3 mt-2">
          <button className="text-on-surface-variant py-3 px-4 font-body text-sm flex items-center gap-3 rounded-lg" onClick={() => handleNav("dashboard")}>
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Dashboard
          </button>
          <button className="text-on-surface-variant py-3 px-4 font-body text-sm flex items-center gap-3 rounded-lg" onClick={() => handleNav("tasks")}>
            <span className="material-symbols-outlined text-[20px]">assignment</span>
            Task Board
          </button>
          <button className="text-on-surface-variant py-3 px-4 font-body text-sm flex items-center gap-3 rounded-lg" onClick={() => handleNav("equipment")}>
            <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
            Equipment
          </button>
          <button className="text-on-surface-variant py-3 px-4 font-body text-sm flex items-center gap-3 rounded-lg" onClick={() => handleNav("logs")}>
            <span className="material-symbols-outlined text-[20px]">database</span>
            Logs
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="md:ml-[260px] flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Muted TopAppBar */}
        <header className="bg-background/95 backdrop-blur-md docked full-width top-0 sticky z-40 border-b border-outline-variant flex justify-between items-center h-16 px-6 opacity-40 pointer-events-none transition-opacity">
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm">search</span>
              <input className="bg-surface-container-high border-none rounded-full py-1.5 pl-9 pr-4 text-sm text-on-surface placeholder-on-surface-variant focus:ring-0 w-48" disabled placeholder="Search..." type="text" />
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant" disabled aria-label="Notifications">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant" disabled aria-label="Profile">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* Error Canvas Container */}
        <div className="flex-1 relative flex flex-col items-center justify-center p-8 bg-background">
          {/* Dramatic Error Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-[600px] h-[600px] bg-error-container/10 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          {/* High-End Glassmorphism Error Card */}
          <div className="relative z-10 w-full max-w-lg bg-surface-container/60 backdrop-blur-xl border border-outline-variant/50 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-10 flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-error-container/30 rounded-full animate-ping opacity-75" />
              <div className="relative w-24 h-24 bg-surface-container-highest border border-error-container rounded-full flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[48px] text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_off</span>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-error-container rounded-full border-[3px] border-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-on-error-container" style={{ fontVariationSettings: "'FILL' 1" }}>sd_storage</span>
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
              <button
                onClick={handleClearStorage}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant rounded-full text-on-surface font-label font-medium hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200 cursor-pointer"
                aria-label="Clear local storage"
              >
                <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                Clear Storage
              </button>
              <button
                onClick={handleRetry}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-full font-label font-bold hover:bg-primary hover:text-on-primary focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background shadow-lg shadow-primary-container/20 transition-colors duration-200 group cursor-pointer"
                aria-label="Retry storage sync"
              >
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500">sync</span>
                Retry Sync
              </button>
            </div>

            {/* Terminal-style error code */}
            <div className="mt-8 pt-4 border-t border-outline-variant/30 w-full text-center">
              <span className="font-mono text-xs text-error/70 bg-error-container/10 px-2 py-1 rounded">ERR_QUOTA_EXCEEDED (0x80040111)</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
