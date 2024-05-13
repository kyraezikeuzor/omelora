import Image from "next/image";
import {pillars, initiatives} from '@/data/data'
import Graphic from '@/components/Graphic'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import ImageSwipe from '@/components/ImageSwipe'
import Campaign from "@/components/Campaign";
import ListIcon from '@/components/ListIcon'
import Highlight from '@/components/Highlight'

export default function Home() {

  const KitsHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>kits</span>}>
    <div className='flex flex-col gap-1 font-semibold'>
      All kits contain basic school supplies including 1 notebook, colored pencils, a book, custom STEM pamphlet, & a pencil pouch.
    </div>
  </Highlight>

  const RuralHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>rural</span>}>
    <div className='flex flex-col gap-1 font-semibold'>
      All kits contain basic school supplies including 1 notebook, colored pencils, a book, custom STEM pamphlet, & a pencil pouch.
    </div>
  </Highlight>


  return (
    <section className="flex min-h-screen flex-col gap-20 justify-between">

        <header className='flex flex-col gap-5 '>
          <div className=' flex flex-col gap-5'>
            <span className='text-2xl font-bold flex flex-row gap-2 items-center'>WELCOME TO OMELORA </span>
            <h1 className=' inline-block 2xl:text-[76px]'> 
              <span className='ft-cooper'>We are giving <Graphic src={'/g/red-quarter-circle.png'}/> 1,000</span> {KitsHighlight} <span className='ft-cooper'>to <br className='hidden 2xl:block'/> youth <Graphic src={'/g/pastel-pink-abstract-flower.png'}/> in </span> {RuralHighlight} <span className='ft-cooper'><Graphic src={'/g/yellow-rounded-star.png'}/> <Graphic src={'/g/modern-bold-asterisk.png'}/> Nigeria.</span>
            </h1>
            <p className='text-lg lg:text-xl '>
              Based in Houston, Texas, Omelora provides health and educational kits to empower rural Nigerian youth through wellness initiatives in West Africa. Our goal is to eventually distribute 1,000 kits.
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button path='/about'>
              Learn More <Icon icon="ArrowTopRight" className='fill-white' size="sm"/>
            </Button>
            <Button outline path='/support-our-cause'>
              Support Us <Icon icon="Location" size='sm'/>
            </Button>
          </div>
        </header>

        <section className='flex flex-col gap-20 items-start'>
          <section className='flex flex-col lg:flex-row-reverse items-center gap-10'>
              <div className='w-full flex flex-col gap-3'>
                <h2 className='ft-cooper'>Taking action through changing stories.</h2>
                <div className='flex flex-col '>
                  <p className='text-lg md:text-xl'>
                  Through sharing stories, resources, and information, we raise awareness about the critical environmental and health issues affecting our target areas.
                  <br/> <br/> Currently, our initiative is focused on raising funds through local businesses and sponsors for the Divine Wounds of Jesus Christ Orphanage Home in Enugu, Nigeria.
                  </p>
                </div>
              </div>
              <div className='w-full relative'>
                  <ImageSwipe 
                  images=
                  {['/img/divine-wounds-img-1.jpg',
                  '/img/divine-wounds-img-2.jpg',
                  ]}/>

                  <div className='z-40 absolute left-5 right-5 bottom-5 w-fit flex flex-row gap-3 px-4 py-2 rounded-lg bg-white/75 backdrop-blur shadow-sm'>
                    <Icon icon='Sun' className='fill-pink-500' size='lg' />
                    <div className="flex-col gap-1 items-center text-black">
                      <h3 className="font-bold text-base md:text-lg">
                        Children from the Divine Wounds Orphanage.
                      </h3>
                      <p className='text-sm md:text-base'>
                        The orphanage is located in Enugu, Nigeria.
                      </p>
                    </div>
                  </div>
              </div>
          </section>
        </section>
        <section className='flex flex-col lg:grid grid-cols-2 gap-10'>
            {pillars.map((item,index)=>(
              <div key={index} className='flex flex-row gap-5'>
                <ListIcon value={<Icon icon={item.icon} className='fill-white'/>}/>
                <div key={index} className='flex flex-col gap-2'>
                  <h5>{item.name}</h5>
                  <p className='text-lg md:text-xl'>{item.text}</p>
                </div>
              </div>
            ))}
        </section>

        <section className='flex flex-col lg:flex-row-reverse gap-10'>
            <section className='w-full lg:w-1/2 flex flex-col gap-5'>
              <div className='flex flex-col gap-3'>
                <h2 className='ft-cooper'>What we&apos;re doing.</h2>
                <p className='text-lg md:text-xl'>
                Donate to help us accomplish our mission of helping empower
                children in rural Nigerian communities.
                </p>
              </div>
              <div className='flex flex-col gap-5'>
                {initiatives.map((item,index)=>(
                  <Campaign
                  value={index+1}
                  key={index}
                  title={item.title}
                  description={item.description}
                  goalValue={item.goalValue}
                  currentValue={item.currentValue}
                  startDate={item.startDate}
                  measurement={item.measurement}
                  details={item.details}
                  endDate={item.endDate}
                  />
                ))}
              </div>
            </section>

            <iframe 
            src="https://hcb.hackclub.com/donations/start/omelora" 
            className='w-full lg:w-1/2 h-[850px] border-2 border-[--clr-base-accent] rounded-xl overflow-hidden'
            aria-hidden="false"/>
        </section>
    </section>
  );
}
