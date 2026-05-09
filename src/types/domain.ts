export type TaskStatus = 'todo' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';

export type EquipmentState = 'online' | 'offline' | 'maintenance';
export type EquipmentType = 'sensor' | 'hvac' | 'irrigation' | 'lighting' | 'other';

export type LogStatus = 'completed' | 'in-progress' | 'issue-logged';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string | null;
  zone: string;
  dueDate: string;
  createdAt: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  zone: string;
  health: number;
  state: EquipmentState;
  lastService: string;
  nextService: string;
}

export interface MaintenanceLogEntry {
  id: string;
  date: string;
  equipment: string;
  action: string;
  technician: string;
  status: LogStatus;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  pushAlerts: boolean;
  emailDigests: boolean;
  smsWarnings: boolean;
  sensorRefreshRate: string;
  logSyncInterval: string;
  maxTemperature: number;
  minHumidity: number;
  maxCO2: number;
}

export interface AppState {
  currentScreen: string;
  tasks: Task[];
  equipment: Equipment[];
  logs: MaintenanceLogEntry[];
  settings: AppSettings;
  searchQuery: string;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
  read: boolean;
  timestamp: string;
}
