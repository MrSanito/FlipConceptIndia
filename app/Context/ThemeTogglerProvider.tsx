"use client";

import React, { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeTogglerContext'

const ThemeTogglerProvider = ({children} : {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{theme, setTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeTogglerProvider