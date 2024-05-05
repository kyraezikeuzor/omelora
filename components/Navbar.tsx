import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Icon from './Icon'
import Modal from './Modal'
import {navbar} from '@/data/sitemap'
import {toPath} from '@/data/utils'

const navList = 
navbar.map((item,index)=>(
    <Link key={index} href={toPath(item)}>
        <li>{item}</li>
    </Link>
))
            

export default function Navbar() {

    return (
        <nav className='w-full flex flex-col items-center sticky top-0 z-50
         shadow-sm bg-[--clr-base]/90 backdrop-blur'>
            
            <div className='hidden md:flex w-full flex-row md:px-[10vw] py-[2vh]
            justify-between items-center font-medium '>
                <Logo/>
                <ul className='hidden md:flex flex-row items-center gap-5 justify-center'>
                    {navList}
                </ul>
            </div>

            <div className='w-full flex flex-row md:hidden px-5 py-[1vh] justify-between items-center'>
                <Logo/>
                <Modal
                modalClassName='absolute top-10 right-2'
                toggleElement={<Icon icon='HamburgerMenu'/>}
                >
                    <ul className='flex flex-col items-start gap-5'>
                        {navList}
                    </ul>
                </Modal>
            </div>
        </nav>
    )
}