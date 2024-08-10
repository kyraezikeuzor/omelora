import type { Metadata, ResolvingMetadata } from 'next'
import getInitiative from '@/lib/getInitiative'
import Link from 'next/link'

type InitiativePageProps = {
  params: {projectName:string}
};

export async function generateMetadata(
    { params }: InitiativePageProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params

    // fetch data
    const project = getInitiative(params.projectName)
   
    return {
      title: `${project?.title} | Omelora`,
    }
  }

export default function OurInitiativesPage({params}:InitiativePageProps) {

    const project = getInitiative(params.projectName)

    return (
        <section className="pd-section flex flex-col gap-10">
            <header className='flex flex-col gap-5'>
                <h1 className='ft-editorial'>{project?.title}</h1>
                <p className='text-base md:text-lg'>
                    {project?.description}
                </p>
            </header>
        </section>
    )
}