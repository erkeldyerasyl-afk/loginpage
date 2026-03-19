/**
 * App - root component with routing logic.
 * Login → Register, Login → Profile, Profile → Logout → Login.
 * Respects Remember Me: auto-navigates to Profile if user is logged in.
 */
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { authService } from './services/authService';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';

function AppContent() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('login');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setReady(true);
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  if (!ready) {
    return (
      <div style={loadingStyle}>
        <div style={spinnerStyle} />
      </div>
    );
  }

  if (user) {
    return (
      <ProfilePage
        user={user}
        onLogout={handleLogout}
      />
    );
  }

  if (page === 'register') {
    return (
      <RegisterPage
        onRegister={handleLogin}
        onNavigateToLogin={() => setPage('login')}
      />
    );
  }

  return (
    <LoginPage
      onLogin={handleLogin}
      onNavigateToRegister={() => setPage('register')}
    />
  );
}

const loadingStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f5f5f5',
};

const spinnerStyle = {
  width: 40,
  height: 40,
  border: '3px solid #e0e0e0',
  borderTopColor: '#6366f1',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
