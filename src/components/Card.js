/**
 * Card - centered card container for forms.
 * Responsive, consistent styling.
 */
import React from 'react';

export function Card({ children, style = {} }) {
  return (
    <div style={{ ...styles.card, ...style }}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: 20,
    padding: 32,
    maxWidth: 420,
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
};
