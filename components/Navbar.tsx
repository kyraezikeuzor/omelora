'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Logo from './Logo'
import Button from './ui/Button'
import Icon from './Icon'
import Modal from './Modal'
import {navbar} from '@/data/sitemap'
import {toPath} from '@/lib/utils'



export const NavList = () => {
    const pathname = usePathname()

    return (
        <>
        {navbar.map((item,index)=>(
            <Link 
            key={index} 
            href={`/${toPath(item)}`} 
            className={`${pathname === `/${toPath(item)}` ? 'td-underline-base' : ''} hover:underline underline-offset-4 decoration-[--clr-green-base] decoration-2`}>
                <li>{item}</li>
            </Link>
        )) } 
        </>
    )
}
    

export default function Navbar() {

    return (
        <nav className='w-full flex flex-col items-center sticky top-0 z-[100] shadow-sm bg-[--clr-base] backdrop-blur'>
            
            <div className='hidden lg:flex w-full flex-row md:px-[10vw] py-[2vh] justify-center items-center gap-10'>
                <Logo/>
                <ul className='hidden md:flex flex-row items-center gap-3 font-semibold justify-center'>
                    <NavList/>
                    <br/>
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <Button variant='donate' path='https://hcb.hackclub.com/donations/start/omelora'>
                            Donate <Icon icon='HeartFilled' size='sm' fillColor='inherit'/>
                        </Button>
                    </div>
                </ul>
            </div>

            <div className='w-full flex flex-row lg:hidden px-5 py-[1vh] justify-between items-center'>
                <Logo/>
                <Modal
                modalClassName='absolute top-3 right-3 pr-14'
                toggleElement={<Icon icon='HamburgerMenu'/>}
                >
                    <div className='w-full flex flex-col items-start gap-8'>
                        <ul className='flex flex-col items-start gap-5 text-[18px] font-semibold'>
                            <NavList/>
                        </ul>
                        <div className='flex flex-row items-center justify-center'>
                            <Button variant='donate' path='https://hcb.hackclub.com/donations/start/omelora'>
                                Donate <Icon icon='HeartFilled' size='sm' fillColor='inherit'/>
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </nav>
    )
}