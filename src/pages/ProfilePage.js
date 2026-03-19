/**
 * ProfilePage - displays user name and email with logout button.
 */
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { authService } from '../services/authService';
import { Button } from '../components/Button';
import { LanguageToggle } from '../components/LanguageToggle';

export function ProfilePage({ user, onLogout }) {
  const { t } = useLanguage();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    authService.logout();
    onLogout();
  };

  if (!user) return null;

  const initial = user.name ? user.name[0].toUpperCase() : '?';

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.profileTitle}>{t.profile}</h2>
        <LanguageToggle />
      </div>
      <div style={styles.center}>
        <div style={styles.card}>
          <div style={styles.avatar}>{initial}</div>
          <h1 style={styles.name}>{user.name}</h1>
          <p style={styles.email}>{user.email}</p>
          <Button
            variant="danger"
            onClick={handleLogout}
            loading={loggingOut}
            style={styles.logoutBtn}
          >
            {loggingOut ? t.loggingOut : t.logout}
          </Button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f5f5f5 100%)',
  },
  header: {
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTitle: { margin: 0, fontSize: 20, fontWeight: 600 },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    minHeight: 'calc(100vh - 60px)',
  },
  card: {
    background: 'white',
    borderRadius: 20,
    padding: 40,
    maxWidth: 400,
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    background: '#e0e7ff',
    color: '#6366f1',
    fontSize: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  name: { fontSize: 24, fontWeight: 700, margin: '0 0 8px' },
  email: { fontSize: 16, color: '#6b7280', margin: '0 0 32px' },
  logoutBtn: { marginTop: 8 },
};
