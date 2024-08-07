'use client'
import React, {useState, useEffect} from 'react'
import Button from '@/components/ui/Button'
//w-full md:w-[500px] h-[830px] border-2 border-[--clr-base-accent] rounded-2xl p-2 shadow-lg overflow-y-hidden
//https://hcb.hackclub.com/donations/start/omelora?background=fffefe

function getCSSVariableValue(variableName:string) {
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    return styles.getPropertyValue(variableName).trim();
  }

export default function DonateSection() {

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
        <div className='py-[10vh] px-5 lg:px-[18vw] bg-[--clr-grey-extralight] relative h-full flex flex-col'>
            <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='text-4xl ft-cooper'>Support the Kids of the Divine Wounds Orphanage in Enugu, Nigeria.</span>
                    <div className='mb-3'>
                        <p className='text-lg'>
                        By donating today, you become a vital part of our efforts to foster social good, environmental stewardship, and the well-being of children.
                        </p>
                    </div>
                    <Button path='https://www.zeffy.com/en-US/peer-to-peer/5505fdf7-4c46-46fc-b92a-825700d447e1'>
                        Donate
                    </Button>
                </div>
                <img className='rounded-lg w-full lg:w-1/2' src='/img/dwa-group-img.jpg'/>
            </div>
        </div>


    )
}