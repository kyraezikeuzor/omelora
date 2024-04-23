import Image from "next/image";
import {pillars, initiatives} from '@/data/data'
import Graphic from '@/components/Graphic'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import ImageSwipe from '@/components/ImageSwipe'
import Campaign from "@/components/Campaign";
import ListIcon from '@/components/ListIcon'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col gap-20 justify-between">

        <header className='flex flex-col gap-5 '>
          <div className=' flex flex-col gap-5'>
            <span className='text-2xl font-bold flex flex-row gap-2 items-center'>OUR GOAL IS <Graphic size='sm' src={'/g/modern-bold-asterisk.png'}/></span>
            <h1 className='cooper inline-block'>Aiding <Graphic src={'/g/red-quarter-circle.png'}/> the Divine Wounds of Jesus Christ <Graphic src={'/g/yellow-rounded-star.png'}/>  Orphanage Home located in <Graphic src={'/g/pastel-pink-abstract-flower.png'}/> Enugu, Nigeria</h1>
            <p className='text-lg lg:text-2xl '>
            Omelora is a social good initiative established to give resources and aid to vulnerable children in rural communities in south Nigeria. 
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button path='/about'>
              Learn more
            </Button>
            <Button outline path='/support-our-cause'>
              Get involved
            </Button>
          </div>
        </header>

        <section className='flex flex-col gap-20 items-start'>
          <div className='flex flex-col gap-2 '>
            <h2 className='cooper font-bold'>Making a difference, together</h2>
            <p className='text-lg md:text-xl'>
            We hope to enact environmental, health-focused, social, and educational change through charitable activities that make a lasting impact on the lives of vulnerable children.
            </p>
          </div>
          <section className='flex flex-col md:flex-row items-center gap-10'>
              <div className='w-full flex flex-col gap-5'>
                <h2 className='cooper'>Taking action through change.</h2>
                <div className='flex flex-col gap-5 '>
                  <p className='text-lg md:text-xl'>
                  Through sharing stories, resources, and information, we raise awareness about the critical environmental and health issues affecting our target areas.
                  <br/> <br/> Currently, our initiative is focused on raising funds through local businesses and sponsors for the Divine Wounds of Jesus Christ Orphanage Home in Enugu, Nigeria.
                  <br/> <br/> If you&apos;d like to support our cause, you can follow us on Instagram, where we have partnered with the Houston Climate Strike to create explainers about how our local actions can impact international environmental and health wellbeing.
                  </p>
                </div>
              </div>
              <div className='w-full relative'>
                  <ImageSwipe 
                  images=
                  {['/img/divine-wounds-img-2.jpg',
                  '/img/divine-wounds-img-1.jpg'
                  ]}/>

                  <div className='z-40 absolute left-5 right-5 bottom-5 w-fit flex flex-row gap-3 px-4 py-2 rounded-lg bg-white/75 backdrop-blur shadow-sm'>
                    <Icon icon='Sun' className='fill-pink-500' />
                    <div className="flex-col gap-1 items-center text-[--clr-base-text]">
                      <h3 className="font-bold text-base md:text-lg">
                        Children from the Divine Wounds Orphanage.
                      </h3>
                      <p className='text-sm md:text-base'>
                        The orphanage works to give vulnerable children emotional and educational support.
                      </p>
                    </div>
                  </div>
              </div>
          </section>
        </section>
        <section className='flex flex-col md:grid grid-cols-2 gap-10'>
            {pillars.map((item,index)=>(
              <div className='flex flex-row gap-5'>
                <ListIcon value={<Icon icon={item.icon} className='fill-[--clr-green-base]'/>}/>
                <div key={index} className='flex flex-col gap-2'>
                  <h5>{item.name}</h5>
                  <p className='text-base md:text-lg'>{item.text}</p>
                </div>
              </div>
            ))}
        </section>

        <section className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <h2 className='cooper'>Here&apos;s what we&apos;re working on</h2>
              <p className='text-lg md:text-xl'>
              We are focused on using our resources in Houston to give back to 
              disenfranchised communities in south Nigeria and on raising 
              awareness of environmental and health related issues of the region. 
              </p>
            </div>
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
                measurement={item.measurement}
                details={item.details}
                endDate={item.endDate}
                />
              ))}
            </div>
        </section>
    </section>
  );
}
