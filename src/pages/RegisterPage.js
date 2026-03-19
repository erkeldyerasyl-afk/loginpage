/**
 * RegisterPage - name, email, password.
 * Validates input, shows multilingual errors.
 */
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { authService } from '../services/authService';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { LanguageToggle } from '../components/LanguageToggle';

const EMAIL_REGEX = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

export function RegisterPage({ onRegister, onNavigateToLogin }) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = t.errorEnterName;
    if (!email.trim()) errs.email = t.errorEnterEmail;
    else if (!EMAIL_REGEX.test(email.trim())) errs.email = t.errorValidEmail;
    if (!password) errs.password = t.errorEnterPassword;
    else if (password.length < 4) errs.password = t.errorPasswordLength;
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!validate()) return;
    setLoading(true);
    const result = authService.register({
      name: name.trim(),
      email: email.trim(),
      password,
    });
    if (result.success) {
      const loginResult = authService.login({
        email: email.trim().toLowerCase(),
        password,
        rememberMe: true,
      });
      setLoading(false);
      if (loginResult.success) onRegister(loginResult.user);
      else setError(t.errorSomethingWrong);
    } else {
      setLoading(false);
      setError(result.error === 'email_exists' ? t.errorEmailExists : t.errorSomethingWrong);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button type="button" style={styles.backBtn} onClick={onNavigateToLogin}>
          ←
        </button>
        <LanguageToggle />
      </div>
      <div style={styles.center}>
        <Card>
          <div style={styles.icon}>👤</div>
          <h1 style={styles.title}>{t.createAccount}</h1>
          <p style={styles.subtitle}>{t.registerToStart}</p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <Input
              label={t.name}
              placeholder={t.enterName}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={fieldErrors.name}
              autoComplete="name"
            />
            <Input
              label={t.email}
              placeholder={t.enterEmail}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={fieldErrors.email}
              autoComplete="email"
            />
            <Input
              label={t.password}
              placeholder={t.enterPassword}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={fieldErrors.password}
              autoComplete="new-password"
            />
            {error && <p style={styles.error}>{error}</p>}
            <Button type="submit" loading={loading} style={styles.btn}>
              {t.register}
            </Button>
            <button
              type="button"
              style={styles.linkBtn}
              onClick={onNavigateToLogin}
              disabled={loading}
            >
              {t.haveAccount}
            </button>
          </form>
        </Card>
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
  backBtn: {
    padding: 8,
    background: 'none',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    minHeight: 'calc(100vh - 60px)',
  },
  icon: { fontSize: 48, textAlign: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 700, textAlign: 'center', margin: '0 0 8px' },
  subtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', margin: '0 0 24px' },
  form: { marginTop: 8 },
  error: { color: '#ef4444', fontSize: 14, marginBottom: 16, textAlign: 'center' },
  btn: { marginTop: 8 },
  linkBtn: {
    width: '100%',
    padding: 12,
    marginTop: 12,
    background: 'none',
    border: 'none',
    color: '#6366f1',
    cursor: 'pointer',
    fontSize: 14,
  },
};
