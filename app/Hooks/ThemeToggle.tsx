
"use client"

import React, { useContext, ReactNode } from 'react'
import { CiLight, CiDark } from "react-icons/ci";
import { ThemeContext } from '../Context/ThemeTogglerContext'; 


const ThemeToggle = ({ children }: { children: ReactNode }) => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('ThemeToggle must be used within ThemeToggler provider');
    }
    
    const {theme, setTheme} = context;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <>
      {children}
      <div className='rounded fixed right-10 bottom-6 z-50 p-2'>
          <button 
            onClick={toggleTheme}
            className='bg-blue-600 font-bold text-center flex justify-center items-center h-14 w-14 border rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200'
            aria-label="Toggle Theme"
          > 
              {theme === 'light' ? <CiDark className="text-3xl text-white" /> : <CiLight className="text-3xl text-white" />}
          </button>
      </div>
    </>
  )
}

export default ThemeToggle