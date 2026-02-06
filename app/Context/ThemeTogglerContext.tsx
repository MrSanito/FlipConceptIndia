"use client"

import { createContext, useState } from "react";

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeToggler = ({children} : React.PropsWithChildren) => {
    const [theme, setTheme] = useState<'light' | 'dark'>("light")
    //here will be code which will run on each page
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>  
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeToggler