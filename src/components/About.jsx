import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
     const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${theme === "dark" ? "bg-[#0A0A0A]" : "bg-[#f9f9f9]"} flex items-center justify-center pt-40`}>

        <h1 className='text-9xl font-bold'>Aman Sheikh</h1>
      
    </div>
  )
}

export default About
