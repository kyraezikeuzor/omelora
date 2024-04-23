import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex flex-row gap-2'>
            <img className='w-6 h-auto' src='/g/omelora-logo.png'/>
            <span>Omelora</span>
        </Link>
    )
}