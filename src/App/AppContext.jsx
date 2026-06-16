import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ config, isMobile, children }) => {
  const supportedThemes = ['dark', 'light'];
  const localStorageTheme = localStorage.getItem('theme');
  const defaultTheme = (localStorageTheme && supportedThemes.includes(localStorageTheme)) 
    ? localStorageTheme 
    : 'dark';

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    config,
    isMobile,
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
