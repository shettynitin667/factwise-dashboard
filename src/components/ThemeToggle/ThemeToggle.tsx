import React, { useCallback } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = useCallback(() => {
    // Add theme-switching class temporarily to disable transitions on elements
    document.documentElement.classList.add('theme-switching');
    
    toggleTheme();
    
    // Remove the class after a short delay to re-enable transitions
    setTimeout(() => {
      document.documentElement.classList.remove('theme-switching');
    }, 50);
  }, [toggleTheme]);

  return (
    <button
      className={styles.themeToggle}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.icon}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      {/* <span className={styles.text}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span> */}
    </button>
  );
};

export default ThemeToggle;
