import Image from "next/image";
import Link from 'next/link'
import {pillars, kits, hcbSiteLink} from '@/data/content'
import Graphic from '@/components/Graphic'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import ImageSwipe from '@/components/ImageSwipe'
import Campaign from "@/components/Campaign";
import ListIcon from '@/components/ListIcon'
import Highlight from '@/components/Highlight'
import Donate from '@/components/Donate'
import getInitiatives from '@/lib/getInitiative'

export default function Home() {

  const KitsHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>kits</span>}>
    <div className='flex flex-col gap-1 font-medium'>
    Our kits are designed to span six age ranges, tailored to ages 6 to 16. 
    Each kit includes items that support learning and creativity.
    </div>
  </Highlight>
//
  const RuralHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>southeast</span>}>
    <div className='flex flex-row gap-3 font-medium items-center'>
      <img className='w-1/4 h-' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Igbo_Community_in_Nigeria_and_Africa.svg/480px-Igbo_Community_in_Nigeria_and_Africa.svg.png'/>
      <p className='w-3/4'>
      Southeastern Nigeria includes states such as Enugu, Anambra, Imo, Abia, and Ebonyi. 
      This region is characterized by its rolling hills, lush rainforests, and rich agricultural land.
      </p>
    </div>
  </Highlight>

  const ChangeHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>change.</span>}>
    <div className='flex flex-col gap-1 font-medium'>
    Southeastern Nigeria includes states such as Enugu, Anambra, Imo, Abia, and Ebonyi. 
    This region is characterized by its rolling hills, lush rainforests, and rich agricultural land.
    </div>
  </Highlight>

  const DonationHighlight = 
  <Highlight toggleElement={<span className='ft-cooper'>donation</span>}>
    <div className='flex flex-col gap-1 font-semibold'>
    Southeastern Nigeria includes states such as Enugu, Anambra, Imo, Abia, and Ebonyi. 
    This region is characterized by its rolling hills, lush rainforests, and rich agricultural land.
    </div>
  </Highlight>

  let currentInitiatives;
  const currentInitiative1 = getInitiatives('2024 Kits for Kids')
  const currentInitiative2 = getInitiatives('2024 Book Drive')
  if (currentInitiative1 && currentInitiative2) {
    currentInitiatives = [currentInitiative1, currentInitiative2]
  }

  return (
    <section className="w-full flex min-h-screen flex-col gap-20 justify-between">

        <header className='relative w-full flex flex-col gap-5'>
          <div className=' flex flex-col gap-3'>
            <span className='text-2xl font-bold flex flex-row gap-2 items-center'>WELCOME TO OMELORA </span>
            <h1 className=' inline-block 2xl:text-[76px]'> 
              <span className='ft-cooper'>We <Graphic src={'/g/yellow-rounded-star.png'}/> are giving 1,000</span> {KitsHighlight} <span className='ft-cooper'>to <br className='hidden 2xl:block'/> kids <Graphic src={'/g/pastel-pink-abstract-flower.png'}/> in </span> {RuralHighlight} <span className='ft-cooper'> Nigeria.</span>
            </h1>
            <p className='text-lg lg:text-xl '>
            Based in Houston, Texas, Omelora hopes to provide support for youth through 
            health and educational kits. Our wellness initiatives aim to 
            enrich lives across West Africa, with a goal of distributing 1,000 kits.
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button path='/about-us'>
              Learn More <Icon icon="ExternalLink" className='fill-white' size="sm"/>
            </Button>
            <Button outline path='/support-us'>
              Support Us <Icon icon="ArrowTopRight" size='sm' className='fill-inherit'/>
            </Button>
          </div>
        </header>

        <section className='relative w-full flex flex-col gap-10 items-start'>

          <section className='flex flex-col lg:flex-row-reverse items-center gap-10'>
              <section className='relative w-full flex flex-col gap-3'>
                <h2 ><span className='ft-cooper'>Inspiring learners everywhere.</span></h2>
                <div className='flex flex-col gap-3'>
                  <p className='text-base md:text-lg'>
                  Omelora takes action guided by the voices of those we aim to support. Our journey began with a desire to help an orphanage in Enugu, driven by the 
                  belief that every child deserves access to essential resources.
                  </p>
                  <p className='text-base md:text-lg'>
                  Expanding our focus to address key areas like health, environment, social good, and education, our initiative 
                  prioritizes listening to the needs and aspirations of young people.
                  </p>
                  <p className='text-base md:text-lg'>
                  Through sharing stories, resources, and information, we raise 
                  awareness about the critical environmental and health issues.
                  </p>
                </div>
              </section>
              <section className='w-full relative flex flex-col '>
                  <ImageSwipe 
                  content=
                  {[
                    {
                      image:'/img/dwo-img1.jpg',
                      alt:'Children at the Divine Wounds Orphanage in Enugu, Nigeria.'
                    },
                    {
                      image:'/img/dwo-img2.jpg',
                      alt:'School Children at the Divine Wounds Orphanage.'
                    },
                    {
                      image:'/img/dwo-img3.jpg',
                      alt:'Group Photo at the Divine Wounds Orphanage.'
                    }
                  ]}/>
              </section>
          </section>
        </section>

        <section className='w-full flex flex-col lg:grid grid-cols-2 gap-10'>
            {pillars.map((item,index)=>(
              <div key={index} className='flex flex-row gap-5'>
                <ListIcon value={<Icon icon={item.icon} size='sm' className='fill-[--clr-green-extradark]'/>}/>
                <div key={index} className='flex flex-col gap-2'>
                  <h5>{item.name}</h5>
                  <p className='text-base md:text-lg'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
        </section>

        <section className='w-full flex flex-col gap-10 items-center justify-center'>
            <section className='flex flex-col gap-3'>
              <h2 className='ft-cooper'>Our work, so far.</h2>
              <p className='text-base md:text-lg'>
              Donate to help us accomplish our mission of helping empower
              children in rural Nigerian communities. Donate to help us accomplish 
              our mission of helping empower children in rural Nigerian communities.
              </p>
            </section>
            <section className='w-full flex flex-col md:flex-row items-center gap-10'>
              <div className='w-full md:w-3/5 flex flex-col md:flex-row gap-5'>
                {currentInitiatives?.map((item,index)=>(
                  <Campaign
                  key={index}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                  goalValue={item.goalValue}
                  currentValue={item.currentValue}
                  startDate={item.startDate}
                  measurement={item.measurement}
                  endDate={item.endDate}
                  orgsSupporting={item.orgsSupporting}
                  image={item.image}
                  />
                ))}
              </div>
              <div className='w-full md:w-2/5 flex flex-col gap-10'>
                  <div className='w-full flex flex-row gap-5'>
                    <div className='flex flex-col gap-2'>
                      <h5>Sharing for Social Good.</h5>
                      <p className='text-base md:text-lg'>
                      Omelora serves as a digital platform for youth involved in health and environment initiatives 
                      in West Africa and the US. Through our platform, we aim to inspire 
                      change on a worldwide scale by creating, explainers, and resources.
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex flex-row gap-5'>
                    <div className='flex flex-col gap-2'>
                      <h5>Giving Aid, Gathering Support.</h5>
                      <p className='text-base md:text-lg'>
                      Omelora&apos;s primary mode of action involves raising funds and gathering resources through donation crowdfunding. 
                      This enables us to acquire the necessary kits and supplies for our initiatives.
                      </p>
                    </div>
                  </div>
              </div>
            </section>
        </section>

        <section className='w-full flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <h2 className='ft-cooper'>What&apos;s in a kit?</h2>
              <p className='text-base md:text-lg'>
              Our kits are packed with tools for creativity, learning, and 
              giving. Each kit includes educational supplies, creative materials, 
              and essential resources to support and inspire young learners.
              </p>
            </div>
            <div className='flex flex-col md:grid grid-cols-3 gap-5'>
                {kits.map((item,index)=>(
                  <div 
                  key={index}
                  className='rounded-xl p-5'
                  style={{borderWidth: '4px', borderColor: `var(--clr-green-light)`, borderStyle:'dotted'}}
                  >
                    <span 
                    className='text-lg font-bold' 
                    style={{color:`var(--clr-${item.kitColor}-base)`}}>
                      {item.ageRange}
                    </span>
                    <ul className='ml-5' >
                      {item.supplies.map((item,index)=>(
                        <li 
                        key={index} 
                        className='list-disc font-medium'>
                          {item.name} {item.link !== '' && <Link href={item.link}><Icon className='inline' icon='Link1' size='sm'/></Link>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
        </section>

        <section className='w-full flex flex-col md:flex-row gap-10 '>
          <div className='w-full md:w-1/2 flex flex-col gap-3 justify-center'>
              <h2 className='ft-cooper'>Support us. Make a donation today.</h2>
              <p className='text-base md:text-lg'>
              All donations are tracked and displayed on our HCB account, ensuring complete transparency. 
              You can see exactly how your contributions are making a difference.
              </p>
              <p className='text-base md:text-lg'>
              Every donation directly funds the creation of our kits and supports our operational 
              processes. Your generosity helps us provide essential resources to those in need.
              </p>
              <p className='text-base md:text-lg'>
              We rely on your support to create and distribute our kits. 
              Your donations are crucial in helping us reach more children and make a lasting impact on their lives.
              </p>
              <br/>
              <Button path={hcbSiteLink}>See Our Transactions <Icon className='inline fill-white' size='sm' icon='ExternalLink'/></Button>
          </div>
          <div className='w-full md:w-1/2'>
            <Donate />
          </div>
        </section>

    </section>
  );
}
