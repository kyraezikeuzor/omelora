'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import styles from './Footer.module.css'

import Icon from './Icon'
import EmailForm from './EmailForm'
import Logo from './Logo'

import {footer} from '@/data/sitemap';
import {toPath} from '@/lib/utils';
import {socials} from '@/data/content'

function Footer() {

  const pathname = usePathname()
  
  return (
    <footer className={`p-5 md:px-[10vw] py-[8vh] flex-col gap-20 text-[--clr-cream-base] bg-pattern-dotted`}>
      
      <section className={styles.section}>
        <div className='flex flex-row gap-20 justify-start'>
          {footer.map((item,index) => (
            <div key={index} className='flex flex-col gap-5'>
              <span className='text-xl lg:text-2xl tracking-tight font-extrabold'>{item.name}</span>
              <ul className='flex flex-col gap-3 font-medium'>
                {item.pages.map((page,index)=> (
                  <li key={index} className='hover:opacity-75'> 
                    <Link href={toPath(page)}>{page}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-self-start'>
          <div className='flex flex-row gap-3'>
            {socials.map((item,index)=>(
              <Link 
              key={index}
              target="_blank"
              href={item.link !== "" ? item.link : "/"} 
              className='hover:opacity-75'
              >
                <Icon icon={item.name} fillColor='white' size='lg' />
              </Link>
            ))}
          </div>
        </div>
        <EmailForm/>
      </section>

      <br/>
      <br/>

      <span className='text-base text-white opacity-75'>
        Omelora is fiscally sponsored by the Hack Foundation, a 501(c)(3) nonprofit (EIN: 81-2908499).
      </span>
    </footer>
  );
};

export default Footer;