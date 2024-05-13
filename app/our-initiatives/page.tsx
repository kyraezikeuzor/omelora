import {initiatives, divineWoundsSiteLink} from '@/data/data'
import Campaign from '@/components/Campaign'
import Highlight from '@/components/Highlight'

import Link from 'next/link'

export default function OurInitiativesPage() {

  const dwaHoverModal = 
  <Highlight toggleElement={<Link className='font-semibold ' href={divineWoundsSiteLink}>Divine Wounds of Jesus Christ Orphanage Home</Link>}>
    <div className='flex flex-col gap-1 font-medium'>
      All kits contain basic school supplies including 1 notebook, colored pencils, a book, custom STEM pamphlet, & a pencil pouch.
    </div>
  </Highlight>

    return (
        <section className="flex flex-col gap-10">
            <header className='flex flex-col gap-5'>
                <h1 className='ft-cooper'>Our Initiatives</h1>
                <p className='text-lg md:text-xl'>
                  Our current focus is the children of 
                  the {dwaHoverModal} in Enugu, Nigeria.
                  We're extending educational support through charitable endeavors.
                </p>
            </header>

            <div className='flex flex-col lg:grid grid-cols-3 gap-5'>
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