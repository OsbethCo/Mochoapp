import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [isDark, setIsDark] = useState(scheme === 'dark');

  useEffect(() => {
    setIsDark(scheme === 'dark');
  }, [scheme]);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    dark: isDark,
    colors: {
      background: isDark ? '#121212' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#000000',
      primary: isDark ? '#BB86FC' : '#6200EE',
      card: isDark ? '#1E1E1E' : '#F8F8F8',
      border: isDark ? '#555555' : '#DDDDDD',
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);