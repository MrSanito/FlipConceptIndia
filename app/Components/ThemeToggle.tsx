
"use client"

import React, { useContext, ReactNode } from 'react'
import { CiLight } from "react-icons/ci";
import { ThemeContext } from '../Context/ThemeTogglerContext'; 


const ThemeToggle = ({ children }: { children: ReactNode }) => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('ThemeToggle must be used within ThemeToggler provider');
    }
    
    const {theme, setTheme} = context;
  return (
    <>
      {children}
      <div className='rounded fixed right-10 bottom-6 z-50 p-2'>
          <div className=' bg-blue-600  font-bold text-center flex justify-center items-center text-5xl h-20 w-20 border rounded-full p-3'> 
              <CiLight />
          </div>
      </div>
    </>
  )
}

export default ThemeToggle