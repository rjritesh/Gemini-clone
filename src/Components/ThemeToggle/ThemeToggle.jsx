// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
