import { useState, useCallback, useEffect } from 'react';
import type {
  AppState,
  Task,
  Equipment,
  MaintenanceLogEntry,
  AppSettings,
  Notification,
  TaskStatus,
  TaskPriority,
  EquipmentState,
  EquipmentType,
  LogStatus,
} from '../types/domain';
import { loadState, saveState, clearStorage, isStorageAvailable, isStorageFull, StorageError } from '../utils/storage';

const defaultSettings: AppSettings = {
  theme: 'dark',
  pushAlerts: true,
  emailDigests: false,
  smsWarnings: true,
  sensorRefreshRate: 'Standard (5s)',
  logSyncInterval: 'Every 15 mins',
  maxTemperature: 28.5,
  minHumidity: 65,
  maxCO2: 1200,
};

const defaultTasks: Task[] = [
  {
    id: 't-1',
    title: 'Replace faulty flow valve on Zone B irrigation line',
    description: 'Main irrigation valve showing pressure irregularities',
    status: 'todo',
    priority: 'high',
    assignee: 'Marcus Johnson',
    zone: 'Zone B',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-2',
    title: 'Calibrate humidity sensors in Sector 4',
    description: 'Quarterly calibration for Zone 4 sensors',
    status: 'todo',
    priority: 'medium',
    assignee: 'Anna Lee',
    zone: 'Sector 4',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-3',
    title: 'Quarterly inspection of exhaust fans',
    description: 'Routine fan inspection and cleaning',
    status: 'todo',
    priority: 'low',
    assignee: null,
    zone: 'All Zones',
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-4',
    title: 'Patch structural leak in Bay 2 roof paneling',
    description: 'Water ingress detected in Bay 2',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Tom Servo',
    zone: 'Bay 2',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-5',
    title: 'Refill nutrient dosing tanks A & B',
    description: 'Nutrient levels below threshold',
    status: 'completed',
    priority: 'medium',
    assignee: 'M. Smith',
    zone: 'Nutrient Room',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 't-6',
    title: 'Clear debris from main perimeter drainage trench',
    description: 'Drainage trench blocked after storm',
    status: 'completed',
    priority: 'low',
    assignee: 'J. Doe',
    zone: 'Perimeter',
    dueDate: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
];

const defaultEquipment: Equipment[] = [
  {
    id: 'e-1',
    name: 'HVAC Unit Alpha',
    type: 'hvac',
    zone: 'Zone 1 Climate Control',
    health: 42,
    state: 'offline',
    lastService: '2023-10-12',
    nextService: 'OVERDUE',
  },
  {
    id: 'e-2',
    name: 'Soil Array 4',
    type: 'sensor',
    zone: 'Zone 3 Moisture/pH',
    health: 98,
    state: 'online',
    lastService: '2023-11-05',
    nextService: '2024-05-05',
  },
  {
    id: 'e-3',
    name: 'Main Pump B',
    type: 'irrigation',
    zone: 'Central Reservoir',
    health: 65,
    state: 'maintenance',
    lastService: '2023-08-22',
    nextService: 'In Progress',
  },
  {
    id: 'e-4',
    name: 'LED Array West',
    type: 'lighting',
    zone: 'Zone 2 Canopy',
    health: 92,
    state: 'online',
    lastService: '2023-09-10',
    nextService: '2024-03-10',
  },
  {
    id: 'e-5',
    name: 'CO2 Monitor Unit',
    type: 'sensor',
    zone: 'Zone 1 Air Quality',
    health: 71,
    state: 'online',
    lastService: '2023-06-15',
    nextService: '2023-12-15',
  },
];

const defaultLogs: MaintenanceLogEntry[] = [
  {
    id: 'l-1',
    date: '2023-10-26T08:30:00',
    equipment: 'Zone A - Climate Unit 4',
    action: 'Replaced HEPA filters',
    technician: 'J. Doe',
    status: 'completed',
  },
  {
    id: 'l-2',
    date: '2023-10-25T14:15:00',
    equipment: 'Irrigation Pump P-02',
    action: 'Quarterly lubrication and seal check',
    technician: 'M. Smith',
    status: 'completed',
  },
  {
    id: 'l-3',
    date: '2023-10-25T10:00:00',
    equipment: 'Sensor Array ZB-1',
    action: 'Recalibration sequence initiated',
    technician: 'J. Doe',
    status: 'in-progress',
  },
  {
    id: 'l-4',
    date: '2023-10-24T16:45:00',
    equipment: 'Nutrient Doser N-01',
    action: 'Valve replacement (Emergency)',
    technician: 'R. Klein',
    status: 'issue-logged',
  },
  {
    id: 'l-5',
    date: '2023-10-23T09:00:00',
    equipment: 'Zone C - Grow Lights',
    action: 'Routine spectral analysis check',
    technician: 'M. Smith',
    status: 'completed',
  },
];

const defaultNotifications: Notification[] = [
  {
    id: 'n-1',
    title: 'Pressure Drop - Pump Alpha',
    message: 'Sector 7G main irrigation line pressure dropped below threshold',
    type: 'warning',
    read: false,
    timestamp: new Date(Date.now() - 600000).toISOString(),
  },
  {
    id: 'n-2',
    title: 'Task Completed: Filter Check',
    message: 'By Operator GH-882',
    type: 'success',
    read: false,
    timestamp: new Date(Date.now() - 2700000).toISOString(),
  },
  {
    id: 'n-3',
    title: 'System Calibrated',
    message: 'Automated nightly routine completed successfully',
    type: 'info',
    read: true,
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];

function createDefaultState(): AppState {
  return {
    currentScreen: 'dashboard',
    tasks: defaultTasks,
    equipment: defaultEquipment,
    logs: defaultLogs,
    settings: { ...defaultSettings },
    searchQuery: '',
    notifications: defaultNotifications,
  };
}

export interface UseAppStateReturn {
  state: AppState;
  storageError: StorageError | null;
  setScreen: (screen: string) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  addEquipment: (equipment: Omit<Equipment, 'id'>) => void;
  updateEquipment: (id: string, updates: Partial<Equipment>) => void;
  addLog: (log: Omit<MaintenanceLogEntry, 'id'>) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  setSearchQuery: (query: string) => void;
  markNotificationRead: (id: string) => void;
  clearAllNotifications: () => void;
  retryStorage: () => void;
  clearAllStorage: () => void;
}

export function useAppState(): UseAppStateReturn {
  const [state, setState] = useState<AppState>(() => {
    try {
      const storageOk = isStorageAvailable();
      if (!storageOk) {
        return createDefaultState();
      }
      const saved = loadState<AppState>();
      if (saved) {
        return {
          ...createDefaultState(),
          ...saved,
          settings: { ...defaultSettings, ...saved.settings },
        };
      }
      return createDefaultState();
    } catch {
      return createDefaultState();
    }
  });

  const [storageError, setStorageError] = useState<StorageError | null>(null);

  // Expose app state to window for debugging/verification (AC-2)
  useEffect(() => {
    const appApi = {
      get activeScreen() { return state.currentScreen; },
      get selectedItem() {
        return null;
      },
      get storageStatus() {
        return {
          available: isStorageAvailable(),
          full: isStorageFull(),
          error: storageError ? { code: storageError.code, message: storageError.message } : null,
        };
      },
      get lastError() { return storageError ? { code: storageError.code, message: storageError.message } : null; },
      get activePanel() { return state.currentScreen; },
      get itemCount() {
        return {
          tasks: state.tasks.length,
          equipment: state.equipment.length,
          logs: state.logs.length,
          notifications: state.notifications.length,
        };
      },
    };
    (window as unknown as Record<string, unknown>).app = appApi;
    return () => {
      delete (window as unknown as Record<string, unknown>).app;
    };
  }, [state, storageError]);

  const persist = useCallback((next: AppState) => {
    try {
      if (isStorageAvailable()) {
        saveState(next);
        setStorageError(null);
      }
    } catch (e) {
      if (e instanceof StorageError) {
        setStorageError(e);
      }
    }
  }, []);

  useEffect(() => {
    persist(state);
  }, [state, persist]);

  const setScreen = useCallback((screen: string) => {
    setState((prev) => {
      const next = { ...prev, currentScreen: screen };
      return next;
    });
  }, []);

  const addTask = useCallback((task: Omit<Task, 'id' | 'createdAt'>) => {
    setState((prev) => {
      const newTask: Task = {
        ...task,
        id: `t-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      return { ...prev, tasks: [...prev.tasks, newTask] };
    });
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    }));
  }, []);

  const deleteTask = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id),
    }));
  }, []);

  const addEquipment = useCallback((equipment: Omit<Equipment, 'id'>) => {
    setState((prev) => {
      const newEquipment: Equipment = {
        ...equipment,
        id: `e-${Date.now()}`,
      };
      return { ...prev, equipment: [...prev.equipment, newEquipment] };
    });
  }, []);

  const updateEquipment = useCallback((id: string, updates: Partial<Equipment>) => {
    setState((prev) => ({
      ...prev,
      equipment: prev.equipment.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    }));
  }, []);

  const addLog = useCallback((log: Omit<MaintenanceLogEntry, 'id'>) => {
    setState((prev) => {
      const newLog: MaintenanceLogEntry = {
        ...log,
        id: `l-${Date.now()}`,
      };
      return { ...prev, logs: [newLog, ...prev.logs] };
    });
  }, []);

  const updateSettings = useCallback((settings: Partial<AppSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...settings },
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    }));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setState((prev) => ({ ...prev, notifications: [] }));
  }, []);

  const retryStorage = useCallback(() => {
    try {
      setStorageError(null);
      if (isStorageAvailable()) {
        saveState(state);
      } else {
        setStorageError(new StorageError('Storage still unavailable', 'ERR_STORAGE_UNAVAILABLE'));
      }
    } catch (e) {
      if (e instanceof StorageError) {
        setStorageError(e);
      } else {
        setStorageError(new StorageError('Retry failed', 'ERR_RETRY_FAILED'));
      }
    }
  }, [state]);

  const clearAllStorage = useCallback(() => {
    try {
      clearStorage();
      setStorageError(null);
      setState(createDefaultState());
    } catch (e) {
      if (e instanceof StorageError) {
        setStorageError(e);
      }
    }
  }, []);

  return {
    state,
    storageError,
    setScreen,
    addTask,
    updateTask,
    deleteTask,
    addEquipment,
    updateEquipment,
    addLog,
    updateSettings,
    setSearchQuery,
    markNotificationRead,
    clearAllNotifications,
    retryStorage,
    clearAllStorage,
  };
}

export { StorageError, isStorageAvailable, isStorageFull };
export type { TaskStatus, TaskPriority, EquipmentState, EquipmentType, LogStatus };
