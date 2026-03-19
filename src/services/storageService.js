/**
 * Storage service - wraps localStorage for persistence.
 * Used for: user session, remember me, language preference.
 */
const KEYS = {
  USERS: 'app_users',
  CURRENT_USER: 'app_current_user',
  REMEMBER_ME: 'app_remember_me',
  LANGUAGE: 'app_language',
};

export const storageService = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Storage full or disabled
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore
    }
  },

  getJSON(key) {
    const raw = this.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setJSON(key, value) {
    this.set(key, JSON.stringify(value));
  },

  // Convenience methods for app keys
  getUsers: () => storageService.getJSON(KEYS.USERS) || {},
  setUsers: (users) => storageService.setJSON(KEYS.USERS, users),
  getCurrentUser: () => storageService.getJSON(KEYS.CURRENT_USER),
  setCurrentUser: (user) => storageService.setJSON(KEYS.CURRENT_USER, user),
  removeCurrentUser: () => storageService.remove(KEYS.CURRENT_USER),
  getRememberMe: () => storageService.get(KEYS.REMEMBER_ME) === 'true',
  setRememberMe: (val) => storageService.set(KEYS.REMEMBER_ME, String(val)),
  getLanguage: () => storageService.get(KEYS.LANGUAGE) || 'ru',
  setLanguage: (lang) => storageService.set(KEYS.LANGUAGE, lang),
};
