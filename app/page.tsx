import Image from "next/image";
import Link from 'next/link'

import { pillars, donateSiteLink, socials, faqs } from '@/data/content'
import { initiatives } from '@/data/initiatives'
import Graphic from '@/components/Graphic'
import Icon from '@/components/Icon'
import Button from '@/components/ui/Button'
import ImageSwipe from '@/components/ImageSwipe'
import Campaign from "@/components/Campaign";
import Highlight from '@/components/Highlight'
import DonateForm from '@/components/form/DonateForm'
import EmailForm from '@/components/form/EmailForm'
import {
  Container,
  ContainerTitle,
  ContainerContent
} from '@/components/ui/Container'
import {
  Emphasis
} from '@/components/ui/Emphasis'
import {
  HandHelping,
  Info,
  Sprout
} from 'lucide-react'
import FAQSection from '@/components/section/FAQSection'
import DonateSection from '@/components/section/DonateSection'

export default function Home() {


  return (
    <section className="w-full flex min-h-screen flex-col gap-24 justify-between py-[5vh] lg:py-[10vh]">
        
        <header className='relative w-full flex flex-col gap-8 items-center justify-center text-center'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-8'>
              <span className='text-base xl:text-lg font-medium text-center opacity-50'>
                WE ARE OMELORA
              </span>
              <h1 className='inline-block xl:text-8xl tracking-tight ft-editorial'> 
              Giving 1000 kits to kids <br/> in need in southeast Nigeria
              </h1>
            </div>
            <p className='text-base lg:text-xl'>
              Omelora mobilizes youth to <span className='txt-gradient'>create</span> a brighter future
              through <br className='hidden lg:inline'/> social good, health initiatives, and <span className='txt-gradient'>environmental</span> awareness.
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button variant="outline" path='/who-we-are'>
              Learn More
            </Button>
            <Button path='https://www.instagram.com/omeloraorg/'>
              Join Our Community
            </Button>
          </div>
        </header>

        <section className='pd-section w-full flex flex-col lg:flex-row-reverse items-center gap-10'>
            <section className='relative w-full flex flex-col gap-3'>
              <h2 className='ft-editorial'>
                We inspire and engage young people to take positive action
              </h2>
              <div className='flex flex-col gap-3'>
                <p className='text-base lg:text-lg'>
                  We are young people working towards <span className='txt-gradient'>creating</span> better futures for youth in need across the globe. 
                  We create informative content that resonates with young people today, to empower those looking to <span className='txt-gradient'>make a difference</span>. 
                <br/><br/>
                  With a focus on social good, health initiatives, and the environment, we aim to help chip away at a <span className='txt-gradient'>better</span>  future tomorrow, for those in need, today.
                </p>
              </div>
            </section>
            <section className='w-full relative flex flex-col lg:px-0 m-auto'>
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

        <section data-aos="fade-up" className='pd-section bg-[--clr-grey-extralight] w-full flex flex-col lg:grid grid-cols-3 gap-5  items-center justify-center'>
            {pillars.map((item,index)=>(
              <div key={index} className='flex flex-col  gap-3 bg-[--clr-base] border border-[--clr-grey-light] rounded-xl px-6 py-4'>
                <div>
                  {item.icon}
                </div>
                <div key={index} className='w-full lg:w-11/12 flex flex-col gap-1'>
                  <h3 className='text-xl font-medium'>
                    {item.name}
                  </h3>
                  <p className='text-base lg:text-base'>
                    <Emphasis emphasize={[]}>
                      {item.text}
                    </Emphasis>
                  </p>
                </div>
              </div>
            ))}
        </section>

        <section data-aos="fade-up" className='pd-section flex flex-col items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h2 className='ft-editorial text-center'>Our work, so far</h2>
            <p className='text-base lg:text-lg text-center'>
            Through <span className='txt-gradient'>community</span> efforts, we&apos;re making educational resources accessible
            <br className='hidden lg:inline'/> and impactful for those <span className='txt-gradient'>in need</span>. See some of our ongoing initiatives.
            </p>
          </div>
          <section className='w-full flex flex-col mb-5'>
            <Container>
              <ContainerTitle triggerLink='/initiatives'>
                <h2 className='text-base xl:text-lg tracking-tight font-medium text-center'>
                  Our Projects
                </h2>
              </ContainerTitle>
              <ContainerContent>
                {initiatives.map((item,index)=>(
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
              </ContainerContent>
            </Container>
          </section>
        </section>

        <DonateSection/>

        <section data-aos="fade-up" className='pd-section flex flex-col items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h2 className='text-center flex flex-row items-center'>
              <span className='ft-editorial'>Follow us and make an impact today</span>
            </h2>
            <p className='text-base lg:text-base text-center'>
              From breaking down political events to covering the <span className='txt-gradient'>intersection of pop culture</span> and the environment,
              <br className='hidden lg:inline'/> 
              we provide easily digestible, <span className='txt-gradient'>accessible </span> 
              content for young people wanting to make a difference.
            </p>
            <div className='w-full flex flex-row gap-5 items-center justify-between'>
              <div className='w-1/2 flex flex-row gap-3 items-center justify-end'>
                {socials.map((item,index)=>(
                  <Link 
                    key={index}
                    target="_blank"
                    href={item.link !== "" ? item.link : "/"} 
                    className='hover:opacity-75'
                  >
                    <Icon icon={item.name} />
                  </Link>
                ))}
              </div>
              <hr className='h-10 w-[2px] bg-[--clr-grey-light]'/>
              <span className='w-1/2 text-xl ft-editorial font-semibold'>
                <Graphic className='rounded-sm' src='/logos/logo-1.png' size='sm'/> @omeloraorg
              </span>
            </div>
          </div>
          <section className='w-full mb-10'>
            <Container>
              <ContainerTitle triggerLink='https://www.instagram.com/omeloraorg'>
                <h2 className='text-base xl:text-lg tracking-tight font-medium text-center'>
                  Our Posts
                </h2>
              </ContainerTitle>
              <ContainerContent>
                <img src='/posts/2024-flood-post.png' className='rounded-lg origin-center -rotate-2'/>
                <img src='/posts/85-textile-waste-west-africa.png' className='rounded-lg origin-center rotate-2'/>
                <img src='/posts/2024-popular-brands-africa-waste.png' className='rounded-lg origin-center -rotate-2'/>
                <img src='/posts/2024-west-africa-heatwave.png' className='rounded-lg origin-center rotate-2'/>
              </ContainerContent>
            </Container>
          </section>
        </section>
      

        <section className='hidden flex flex-col items-center justify-center gap-10'>
          <span className='text-base uppercase xl:text-lg font-semibold text-center opacity-75'>
            Our Sponsors
          </span>
          <div className='flex flex-col md:flex-row gap-5 font-semibold text-xl text-center items-center justify-center opacity-50'>
            <span>Friends of the <br/>Sugar Land Library</span>
            <img className='w-40 h-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUVLa7edJFb1dc_IvKvJZ52meeJxKkAPfdg&s'/>
            <img className='w-40 h-auto' src='https://assets.hackclub.com/flag-standalone.svg'/>
          </div>
          <Button>
            Become a Sponsor <HandHelping className='text-inherit'/>
          </Button>
        </section>

        <FAQSection/>
        
    </section>
  );
}
