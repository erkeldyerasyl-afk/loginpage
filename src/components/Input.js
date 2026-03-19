/**
 * Input - reusable styled text input with consistent look.
 */
import React from 'react';

export function Input({ label, error, ...props }) {
  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>{label}</label>
      <input style={{ ...styles.input, ...(error ? styles.inputError : {}) }} {...props} />
      {error && <span style={styles.errorText}>{error}</span>}
    </div>
  );
}

const styles = {
  wrapper: { marginBottom: 16 },
  label: {
    display: 'block',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 500,
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: 16,
    border: '1px solid #d1d5db',
    borderRadius: 12,
    boxSizing: 'border-box',
  },
  inputError: { borderColor: '#ef4444' },
  errorText: { fontSize: 13, color: '#ef4444', marginTop: 4, display: 'block' },
};
