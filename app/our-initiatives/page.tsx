import {initiatives, divineWoundsSiteLink} from '@/data/data'
import Campaign from '@/components/Campaign'

import Link from 'next/link'

export default function OurInitiativesPage() {

    return (
        <section className="flex flex-col gap-10">
            <header className='flex flex-col gap-5'>
                <h1 className='cooper'>Our Initiatives</h1>
                <p className='text-lg md:text-xl'>
                  Our current focus is the children of 
                  the <Link className='font-semibold' href={divineWoundsSiteLink}>Divine Wounds of Jesus Christ Orphanage Home</Link> in Enugu, Nigeria.
                </p>
            </header>

            <div className='flex flex-col md:grid md:grid-cols-3 gap-5'>
              {initiatives.map((item,index)=>(
                <Campaign
                value={index+1}
                key={index}
                title={item.title}
                description={item.description}
                goalValue={item.goalValue}
                currentValue={item.currentValue}
                startDate={item.startDate}
                measurement={'$'}
                details={item.details}
                endDate={item.endDate}
                />
              ))}
            </div>
        </section>
    )
}