/**
 * Button - reusable styled button with loading state.
 */
import React from 'react';

export function Button({ children, loading, disabled, variant = 'primary', ...props }) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      style={{
        ...styles.base,
        ...(variant === 'danger' ? styles.danger : {}),
        ...(isDisabled ? styles.disabled : {}),
      }}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span style={styles.spinner} aria-label="Loading" />
      ) : (
        children
      )}
    </button>
  );
}

const styles = {
  base: {
    width: '100%',
    padding: '14px 20px',
    fontSize: 16,
    fontWeight: 600,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    background: '#6366f1',
    color: 'white',
  },
  danger: { background: '#ef4444' },
  disabled: { opacity: 0.6, cursor: 'not-allowed' },
  spinner: {
    display: 'inline-block',
    width: 20,
    height: 20,
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: 'white',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
};
