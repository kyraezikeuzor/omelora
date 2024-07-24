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
import DonateForm from '@/components/DonateForm'
import EmailForm from '@/components/EmailForm'
import {
  Container,
  ContainerTitle,
  ContainerContent
} from '@/components/ui/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"
import {
  Emphasis
} from '@/components/ui/Emphasis'
import {
  MessageCircleHeart,
  Users,
  PiggyBank,
  HandHelping,
  Info,
  Sprout
} from 'lucide-react'

export default function Home() {

  const OmeloraHighlight = 
  <Highlight toggleElement={<span>Omelora</span>}>
    <div className='w-full flex flex-col md:flex-row gap-3 items-center'>
      <p>
      Omelora means &apos;One who does good for the community&apos; in Igbo, a language spoken in Nigeria.
      </p>
    </div>
  </Highlight>

  const DonateHighlight = 
  <Highlight toggleElement={<span className='font-bold tracking-tight'>Donate</span>}>
    <div className='w-full flex flex-col gap-1 font-medium'>
    You can choose to make one-time or monthly donations to Omelora through the Hack Club Bank website.
    Omelora is sponsored by The Hack Club Bank, created by the Hack Foundation, which is a fiscal sponsorship 
    organization that supports up and coming initiatives.
    </div>
  </Highlight>


  return (
    <section className="w-full flex min-h-screen flex-col gap-24 justify-between py-[5vh] lg:py-[10vh]">
        
        <header className='relative w-full flex flex-col gap-8 items-center justify-center text-center'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
              <span className='text-base xl:text-lg tracking-wide font-medium text-center opacity-75'>
                WE ARE OMELORA <Sprout className='inline mb-2'/>
              </span>
              <h1 className='inline-block xl:text-[74px] ft-cooper'> 
                Shaping <Graphic className='hidden' src='/g/soft-star.png'/> the future with <br className='hidden lg:inline'/> youth-driven <br className='inline md:hidden'/> social good
              </h1>
            </div>
            <p className='text-base lg:text-xl'>
              Omelora <span className='txt-gradient'>mobilizes</span> youth to create a brighter future <br className='hidden lg:inline'/>
              through social good, health initiatives, and <span className='txt-gradient'>environmental</span> awareness.
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button variant="outline" path='/about'>
              Learn More
            </Button>
            <Button path='https://www.instagram.com/omeloraorg/'>
              Join Our Community
            </Button>
          </div>
        </header>

        <section className='w-full flex flex-col lg:flex-row-reverse items-center gap-10'>
            <section className='relative w-full flex flex-col gap-3'>
              <h2 className='ft-cooper'>
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

        <section data-aos="fade-up" className='w-full flex flex-col lg:grid grid-cols-2 gap-10  items-center justify-center my-[3vh]'>
            {pillars.map((item,index)=>(
              <div key={index} className='flex flex-col lg:flex-row gap-3'>
                <div>
                  {item.icon}
                </div>
                <div key={index} className='w-full lg:w-11/12 flex flex-col gap-2'>
                  <h3>
                    {item.name}
                  </h3>
                  <p className='text-base lg:text-lg'>
                    <Emphasis emphasize={['impact','sustainability']}>
                      {item.text}
                    </Emphasis>
                  </p>
                </div>
              </div>
            ))}
        </section>

        <section data-aos="fade-up" className='flex flex-col items-center justify-center gap-5 my-[3vh]'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h2 className='text-center flex flex-row items-center'>
              <span className='ft-cooper'>Helping Gen Zers make an impact</span>
            </h2>
            <p className='text-base lg:text-lg text-center'>
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
              <span className='w-1/2 text-xl ft-cooper font-semibold'>
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
          <Button>
            Follow our Instagram <Icon icon="Instagram" size='sm' fillColor='inherit'/>
          </Button>
        </section>

        <section data-aos="fade-up" className='relative w-full shadow-sm rounded-2xl border-[3px] border-[--clr-orange-light] overflow-y-hidden overflow-x-hidden px-8 py-14 sm:p-10 md:p-14 lg:p-24 flex flex-col items-start justify-start md:items-end md:justify-end gap-5 my-[3vh]'>
          <h2 className='text-[28px] leading-8 md:text-4xl font-semibold txt-gradient tracking-normal lg:tracking-tight text-left md:text-right'>
            We are giving 100 school supply kits to the Divine Wounds Orphanage in Enugu, Nigeria
          </h2>
          <p className='text-left md:text-right text-base lg:text-lg text-[--clr-base-text]'>
            We have the goal of supplying 100 kits to a connected orphanage in Enugu, Nigeria. <br className='hidden xl:inline'/>
            As of June 2024 we&apos;ve raised <span className='txt-gradient'>over one-hundred</span> books and novels <br className='hidden xl:inline'/> in Houston, Texas to send abroad in our kits.
          </p>
          <Button path='/initiatives'>
            Learn About Kits for Kids <Icon icon='ExternalLink' size='sm' fillColor='inherit'/>
          </Button>
          <div className='xl:absolute left-[43%] top-[65%] bg-[#FF694F] px-8 py-3 rounded-2xl text-white font-bold text-center flex flex-col items-center justify-center text-center'>
            <span className='text-xl'>Donate</span>
            <span className='text-5xl'>$5+</span>
          </div>
          <img src='/img/africa-kids-transparent.png' className='hidden md:block -z-10 xl:z-10 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] absolute left-0 bottom-0'/>
          <Graphic src='/g/sienna-flower.png' className='absolute right-[15%] -top-5'/>
          <Graphic src='/g/sienna-flower.png' className='absolute left-20 -top-5' />
          <Graphic src='/g/sienna-flower.png' className='absolute -right-5 bottom-0'/>
          <Graphic src='/g/sienna-flower.png' className='absolute right-80 -bottom-5'/>
          <Graphic src='/g/sienna-flower.png' className='absolute -left-5 top-20'/>
          <Graphic src='/g/peach-flower.png' className='hidden lg:block -z-10 absolute left-[35%] top-[55%]' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute -left-5 bottom-0' />
          <Graphic src='/g/peach-flower.png' className='absolute right-[15%] top-[85%] opacity-50' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-20 top-20' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-80 top-10 opacity-50' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-[40%] bottom-5 opacity-50' size='sm'/>
        </section>

        <section data-aos="fade-up" className='flex flex-col items-center justify-center gap-5 my-[3vh]'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h2 className='ft-cooper text-center'>Our work, so far</h2>
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
          <Button path='/initiatives'>
            Support Our Work <Icon icon="ExternalLink" size='sm' fillColor='inherit'/>
          </Button>
        </section>

        <section className='flex flex-col lg:flex-row gap-10 items-center my-[3vh]'>
            <section data-aos="fade-up" className='w-full lg:w-1/2 flex flex-col items-start gap-5'>
              <h2 className='ft-cooper'>
                Contribute <span className='ft-inter txt-gradient'>$5</span> to make <br className='hidden lg:inline'/> our impact worldwide
              </h2>
              <div className='flex flex-col gap-2 text-base lg:text-lg text-[#434242] mb-5'>
                <span>
                  With your donation, we can provide <span className='txt-gradient'>essential</span> resources and opportunities for young people to make a tangible impact, especially for children in West Africa.
                </span>
                <span>
                  Your generosity enables us to offer educational programs, health initiatives, and sustainable practices that promote a brighter, more equitable future.
                </span>
                <span>
                  By donating today, you become a <span className='txt-gradient'>vital</span> part of our efforts to foster social good, environmental stewardship, and the well-being of children across the globe.
                </span>
              </div>
              <div className='w-full flex flex-col lg:flex-row gap-3 items-start lg:items-center'>
                <Button path={donateSiteLink}>
                  View Donation Page <Icon icon="ExternalLink" size='sm' fillColor='inherit'/>
                </Button>
                <Link href='/sponsorships'>
                  <span className='text-lg'>
                    or <span className='text-[--clr-purple-base] font-medium'>Sponsor us</span>
                  </span>
                </Link>
              </div>
            </section>
            <section data-aos="fade-up" className='w-full lg:w-1/2 flex flex-col gap-2'>
              <DonateForm/>
              <Link target="_blank" href='https://hcb.hackclub.com/omelora' className='underline underline-offset-2 hover:opacity-50'>
                <span className='flex flex-row items-center justify-center gap-1 text-sm opacity-45'><Info className="w-4 h-4"/> We are fiscally sponsored by the Hack Foundation. </span>
              </Link>
            </section>
        </section>

        <section className='p-2 rounded-lg bg-[--clr-red-light] text-white my-[3vh]'>
          <div className='p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border-2 border-[--clr-grey-extralight] rounded-md'>
            <div className='w-full flex flex-col gap-2'>
              <h2 className='text-5xl ft-cooper font-bold tracking-tight '>
                Subscribe <Icon inline fillColor='white' icon="Mail" size='lg'/> to <br/> <i>Impact, Delivered</i> <Sprout className='w-10 h-10 inline'/>
                </h2>
              <p className='text-base lg:text-lg text-white'>
                Our newsletter keeps you updated on what&apos;s going on in the world and provides you with actionable ways to enact change.
                <br/><br/>
                All in under 5 minutes. <Link href='/blog' className='underline underline-offset-2 text-[--clr-red-light] hover:opacity-75'>Learn more here.</Link>
              </p>
            </div>
            <div className='w-full'>
              <EmailForm/>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center gap-10 my-[3vh]'>
          <span className='text-xl lg:text-2xl font-medium text-center'>
            Our Supporters
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

        <section className='w-full flex flex-col gap-10 items-center justify-center my-[3vh]'>
          <span className='w-full flex flex-col gap-5 text-center'>
            <h2 className='ft-cooper'>Frequently Asked Questions</h2>
          </span>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item,index)=>(
              <AccordionItem value={`item-${index+1}`} key={index}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
    </section>
  );
}
