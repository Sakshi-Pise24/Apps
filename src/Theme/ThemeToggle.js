import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>
        This is a sample text to demonstrate theme switching. Enjoy toggling between light and dark modes!
      </p>
    </div>
  );
}

export default ThemeToggle;
