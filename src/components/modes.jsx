import { useState, useEffect } from 'react';

function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for the dark mode preference
    return localStorage.getItem('dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
   
  };

  useEffect(() => {
    // Update the document class based on dark mode preference
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true'); // Save preference in local storage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false'); // Save preference in local storage
    }
  }, [isDarkMode]);

  return (
    <div>
      <button id="toggleDark" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Mode;
