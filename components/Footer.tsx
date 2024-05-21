'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import styles from './Footer.module.css'

import Icon from './Icon'
import EmailForm from './EmailForm'
import {footer} from '@/data/sitemap';

import {toPath} from '@/data/helpers';

function Footer() {

  const pathname = usePathname()
  
  let showFooter = true;
  pathname.includes('/explore') || pathname.includes('/categories') || pathname.includes('/home') ? showFooter = false : showFooter = true;

  return (
    <footer className={`${showFooter == false ? 'hidden' : 'flex'} p-5 md:px-[10vw] py-[8vh] flex-col gap-8
    bg-[--clr-blue-dark] text-[--clr-cream-base]`}>
      
      <section className={styles.section}>
        <div className='flex flex-row gap-10 justify-start'>
          {footer.map((item,index) => (
            <div key={index} className='flex flex-col gap-3'>
              <span className='text-2xl font-bold'>{item.name}</span>
              <ul className='flex flex-col gap-3'>
                {item.pages.map((page,index)=> (
                  <li  key={index}> <Link  href={toPath(page)}>{page}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-self-start'>
          <div className='flex flex-row gap-3'>
            <Link target="_blank" href="http://instagram.com/omeloraorg" > 
                <Icon icon="Instagram" size='lg' className='fill-white'/>
            </Link>
            <Link target="_blank" href="mailto:omelorachildren@gmail.com" > 
                <Icon icon="Mail" size='lg' className='fill-white'/>
            </Link>

            <Link target="_blank" href="d" className='hidden'> 
                <Icon icon="Facebook" size='lg' className=''/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="YouTube" size='lg' className='hidden'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="LinkedIn" size='lg' className='hidden'/>
            </Link>
          </div>
        </div>
        <EmailForm/>
      </section>
      <span className='text-base text-neutral-400 mt-[5vh]'>Omelora is a social good initiative aiming to support children in rural southern Nigeria.</span>
    </footer>
  );
};

export default Footer;