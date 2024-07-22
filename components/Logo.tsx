import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex flex-row gap-2'>
            <img className='w-6 h-6 origin-center -rotate-3' src='/logos/logo-1.png'/>
            <span className='font-semibold text-xl tracking-tight'>Omelora</span>
        </Link>
    )
}