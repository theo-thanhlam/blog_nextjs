"use client";
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggle: () => {},
});

const getFromLocalStorage = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    try {
      const value = localStorage.getItem('theme');
      return value as 'light' | 'dark' || 'light';
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }
  return 'light';
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getFromLocalStorage());
  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
