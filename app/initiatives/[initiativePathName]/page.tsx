import type { Metadata, ResolvingMetadata } from 'next'
import getInitiative from '@/lib/getInitiative'
import Link from 'next/link'

type InitiativePageProps = {
  params: {initiativePathName:string}
};

export async function generateMetadata(
    { params }: InitiativePageProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params

    // fetch data
    const initiative = getInitiative(params.initiativePathName)
   
    return {
      title: `${initiative?.title} | Omelora`,
    }
  }

export default function OurInitiativesPage({params}:InitiativePageProps) {

    const initiative = getInitiative(params.initiativePathName)

    return (
        <section className="flex flex-col gap-10">
            <header className='flex flex-col gap-5'>
                <h1 className='ft-cooper'>{initiative?.title}</h1>
                <p className='text-base md:text-lg'>
                    {initiative?.description}
                </p>
            </header>
        </section>
    )
}