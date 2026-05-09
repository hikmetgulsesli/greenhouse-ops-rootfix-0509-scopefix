const STORAGE_KEY = 'greenhouse-ops-state';

export class StorageError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'StorageError';
  }
}

export function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export function isStorageFull(): boolean {
  try {
    const test = '__storage_full_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return false;
  } catch (e) {
    if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      return true;
    }
    return false;
  }
}

export function loadState<T>(): T | null {
  try {
    if (!isStorageAvailable()) {
      throw new StorageError('localStorage is not available', 'ERR_STORAGE_UNAVAILABLE');
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch (e) {
    if (e instanceof StorageError) throw e;
    throw new StorageError('Failed to load state from storage', 'ERR_PARSE_FAILED');
  }
}

export function saveState<T>(state: T): void {
  try {
    if (!isStorageAvailable()) {
      throw new StorageError('localStorage is not available', 'ERR_STORAGE_UNAVAILABLE');
    }
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (e) {
    if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      throw new StorageError('Storage quota exceeded', 'ERR_QUOTA_EXCEEDED');
    }
    throw new StorageError('Failed to save state to storage', 'ERR_SAVE_FAILED');
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    throw new StorageError('Failed to clear storage', 'ERR_CLEAR_FAILED');
  }
}
