import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
    children?: any;
    path?: string;
    variant?: string;
    fullWidth?: boolean;
}

const Button = ({ children, path, variant, fullWidth }: ButtonProps) => {
    const buttonClassNames = [
        'shadow-sm',
        styles.button,
        fullWidth && 'w-full',
        variant && styles[variant]
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <>
            {path ? 
                <Link href={path} target='_blank' className='cursor-pointer'>
                    <button className={buttonClassNames}>
                        {children}
                    </button>
                </Link>
                :
                <button className={buttonClassNames}>
                    {children}
                </button>
            }
        </>
    );
}

export default Button;
