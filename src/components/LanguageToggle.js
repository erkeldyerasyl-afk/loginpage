/**
 * LanguageToggle - RU / KZ segmented button.
 * Updates LanguageContext and persists to localStorage.
 */
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={styles.container}>
      <button
        type="button"
        style={{
          ...styles.btn,
          ...(language === 'ru' ? styles.btnActive : {}),
        }}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
      <button
        type="button"
        style={{
          ...styles.btn,
          ...(language === 'kz' ? styles.btnActive : {}),
        }}
        onClick={() => setLanguage('kz')}
      >
        KZ
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: 0,
    borderRadius: 8,
    overflow: 'hidden',
    border: '1px solid #ddd',
  },
  btn: {
    padding: '6px 14px',
    border: 'none',
    background: '#f5f5f5',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
  },
  btnActive: {
    background: '#6366f1',
    color: 'white',
  },
};
