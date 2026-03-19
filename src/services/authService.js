/**
 * Auth service - local/mock authentication (no backend).
 * Uses storageService for persistence.
 * Remember Me: when false, session is in-memory only (lost on refresh).
 */
import { storageService } from './storageService';

// In-memory user when Remember Me is unchecked
let inMemoryUser = null;

export const authService = {
  register({ name, email, password }) {
    const users = storageService.getUsers();
    const key = email.toLowerCase();
    if (users[key]) return { success: false, error: 'email_exists' };
    users[key] = { name, email: key, password };
    storageService.setUsers(users);
    return { success: true };
  },

  login({ email, password, rememberMe = true }) {
    const users = storageService.getUsers();
    const key = email.toLowerCase();
    const userData = users[key];
    if (!userData || userData.password !== password) {
      return { success: false, error: 'invalid_credentials' };
    }
    const user = { name: userData.name, email: userData.email };
    if (rememberMe) {
      storageService.setCurrentUser(user);
      storageService.setRememberMe(true);
      inMemoryUser = null;
    } else {
      storageService.removeCurrentUser();
      storageService.setRememberMe(false);
      inMemoryUser = user;
    }
    return { success: true, user };
  },

  getCurrentUser() {
    if (inMemoryUser) return inMemoryUser;
    const remembered = storageService.getRememberMe();
    if (!remembered) return null;
    return storageService.getCurrentUser();
  },

  logout() {
    inMemoryUser = null;
    storageService.removeCurrentUser();
  },
};
