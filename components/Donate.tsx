'use client'
import React, {useState, useEffect} from 'react'

//w-full md:w-[500px] h-[830px] border-2 border-[--clr-base-accent] rounded-2xl p-2 shadow-lg overflow-y-hidden
//https://hcb.hackclub.com/donations/start/omelora?background=fffefe

function getCSSVariableValue(variableName:string) {
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    return styles.getPropertyValue(variableName).trim();
  }

export default function Donate() {

    const [primaryColor, setPrimaryColor] = useState('');
    const [isDarkMode, setIsDarkMode] = useState<boolean>()

    useEffect(() => {
        // Function to update the dark mode state
        const updateDarkMode = (e:any) => {
          setIsDarkMode(e.matches);
        };
    
        // Create a MediaQueryList object
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
        // Set the initial state
        setIsDarkMode(mediaQuery.matches);
    
        // Add an event listener to respond to changes
        mediaQuery.addEventListener('change', updateDarkMode);
    
        // Clean up the event listener on component unmount
        return () => {
          mediaQuery.removeEventListener('change', updateDarkMode);
        };
      }, []);
    
      useEffect(() => {
        // Extract the CSS variable value on component mount or dark mode change
        const color = getCSSVariableValue('--clr-base');
        const finalColor = color.replace('#', '');
        setPrimaryColor(finalColor);
      }, [isDarkMode]);

    const src = `https://hcb.hackclub.com/donations/start/omelora?background=${primaryColor}`
    
    return (
        <div className='relative h-full flex flex-col'>
            <iframe 
            src={src}
            className='w-full md:w-[500px] h-[860px] md:h-[830px] border-2 
            border-[--clr-base-accent] rounded-2xl p-2 shadow-lg overflow-auto '
            style={{width:'100%'}}
            aria-hidden="false"
            />
            <div 
            className='hidden h-20 w-20 absolute top-4 right-4 rounded-r-2xl pointer-events-none'
            style={{background:`#${primaryColor}`}}
            />
        </div>


    )
}