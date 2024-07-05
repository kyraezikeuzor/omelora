import Image from "next/image";
import Link from 'next/link'

import {
  pillars, 
  donateSiteLink, 
  socialLinks, 
  faqs
} from '@/data/content'
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
    <section className="w-full flex min-h-screen flex-col gap-24 justify-between py-[10vh]">
        
        <header className='relative w-full flex flex-col gap-8 items-center justify-center text-center'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <span className='text-base 2xl:text-xl font-semibold text-center'>
                WELCOME TO OMELORA
              </span>
              <h1 className='inline-block 2xl:text-[76px] ft-cooper'> 
                Shaping <Graphic src='/g/soft-star.png'/> tomorrow with <br className='hidden lg:inline'/> youth-driven <br className='inline md:hidden'/> social good.
              </h1>
            </div>
            <p className='text-base lg:text-xl font-medium'>
              {OmeloraHighlight} is an initiative dedicated to <span className='txt-gradient'>mobilizing youth</span> to create <br className='hidden lg:inline'/> a 
              <span className='txt-gradient'> brighter future</span> through <span className='txt-gradient'>social good</span> and environmental awareness.
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button variant="outline" path='/about-us'>
              Learn More <Icon inline size="sm" fillColor='inherit' icon='ArrowTopRight'/>
            </Button>
            <Button path='/about-us'>
              Learn More <Icon inline size="sm" fillColor='inherit' icon='ArrowTopRight'/>
            </Button>
          </div>
        </header>

        <section className='w-full flex flex-col lg:flex-row-reverse items-center gap-10'>
            <section className='relative w-full flex flex-col gap-3'>
              <h2 className='ft-cooper'>
                We mobilize young people for positive action.
              </h2>
              <div className='flex flex-col gap-3 font-medium'>
                <p className='text-base lg:text-lg'>
                We are young people working towards <span className='txt-gradient'>creating better futures</span> for other young people in need across the globe. 
                We create informative content that resonates with young people today, to empower those looking to <span className='txt-gradient'>make a difference</span>. 
                <br/><br/>
                With a focus on social good, health initiatives, and the environment, <a >we aim to help chip away at a <span className='txt-gradient'>better future tomorrow, for those in need, today</span>.</a>
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

        <section data-aos="fade-up" className='w-full flex flex-col lg:grid grid-cols-2 gap-10 items-start justify-center'>
            {pillars.map((item,index)=>(
              <div key={index} className='flex flex-col lg:flex-row gap-3'>
                <div>
                  <Graphic src={`/g/${item.icon}.png`} />
                </div>
                <div key={index} className='w-full lg:w-11/12 flex flex-col gap-2'>
                  <h3>
                    {item.name}
                  </h3>
                  <p className='text-base lg:text-lg font-medium'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
        </section>

        <section data-aos="fade-up" className='relative w-full shadow-md rounded-2xl border-4 border-[--clr-orange-light] bg-gradient-to-b from-[--clr-orange-extralight] overflow-y-hidden overflow-x-hidden px-8 py-8 sm:p-10 md:p-14 lg:p-24 flex flex-col items-start justify-start md:items-end md:justify-end gap-3'>
          <h2 className='text-[30px] md:text-4xl font-bold txt-gradient tracking-tight text-left md:text-right'>
            We are giving 100 school supply kits to the Divine Wounds Orphanage in Enugu, Nigeria.
          </h2>
          <p className='text-left md:text-right text-base lg:text-lg text-[--clr-base-text] font-medium'>
            We have the goal of supplying 100 kits to a connected orphanage in Enugu, Nigeria. <br className='hidden lg:inline'/>
            As of June 2024 we&apos;ve raised <span className='txt-gradient'>over one-hundred</span> books and novels <br className='hidden lg:inline'/> in Houston, Texas to send abroad in our kits.
          </p>
          <Button path='/initiatives'>
            Learn About Kits for Kids <Icon icon='ExternalLink' size='sm' fillColor='inherit'/>
          </Button>
          <div className='lg:absolute left-[43%] top-[65%] bg-[#FF694F] px-10 py-3 rounded-2xl text-white font-bold text-center flex flex-col items-center justify-center text-center'>
            <span className='text-xl'>Donate</span>
            <span className='text-5xl'>$5+</span>
          </div>
          <img src='/img/africa-kids-transparent.png' className='-z-10 lg:z-10  w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] absolute left-0 bottom-0'/>
          <Graphic src='/g/sienna-flower.png' className='absolute right-[15%] -top-5'/>
          <Graphic src='/g/sienna-flower.png' className='absolute left-20 -top-5 opacity-50'/>
          <Graphic src='/g/sienna-flower.png' className='absolute -right-5 bottom-0'/>
          <Graphic src='/g/sienna-flower.png' className='absolute right-80 -bottom-5'/>
          <Graphic src='/g/sienna-flower.png' className='absolute -left-5 top-20'/>
          <Graphic src='/g/sienna-flower.png' className='-z-10 absolute left-[35%] top-[50%] opacity-50'/>
          <Graphic src='/g/peach-flower.png' className='absolute -left-5 bottom-0'/>
          <Graphic src='/g/peach-flower.png' className='absolute right-[15%] top-[85%] opacity-50' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-20 top-20' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-80 top-10 opacity-50' size='sm'/>
          <Graphic src='/g/peach-flower.png' className='absolute left-[40%] bottom-5 opacity-50' size='sm'/>
        </section>

        <section data-aos="fade-up" className='flex flex-col items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h2 className='text-center flex flex-col items-center'>
              <span className='ft-cooper'>Sharing news</span> <Graphic className='hidden' src='/logos/logo-1.png' size='sm'/> <span className='tracking-tighter text-3xl lg:text-[44px] font-bold txt-gradient' >@omeloraorg</span>
            </h2>
            <p className='text-base lg:text-lg text-center font-medium'>
              From breaking down political events to covering the <span className='txt-gradient'>intersection of pop culture</span> and the environment,
              <br className='hidden lg:inline'/> 
              we provide easily digestible, <span className='txt-gradient'>accessible</span> content for young people wanting to make a difference.
            </p>
          </div>
          <div className='flex flex-row gap-3 items-center justify-center'>
            {socialLinks.map((item,index)=>(
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
          <section className='w-full'>
            <Container>
              <ContainerTitle triggerLink='https://www.instagram.com/omeloraorg'>
                <h2 className='text-base 2xl:text-2xl tracking-tight font-bold text-center'>
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
          <br/>
          <Button>
            Follow us on Instagram <Icon icon="Instagram" size='sm' fillColor='inherit'/>
          </Button>
        </section>

        <section data-aos="fade-up" className='flex flex-col items-center justify-center gap-5'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <h2 className='ft-cooper text-center'>Our work, so far.</h2>
            <p className='text-base lg:text-lg font-medium text-center'>
            Through <span className='txt-gradient'>community</span> efforts, we&apos;re making education resources <span className='txt-gradient'>accessible</span>
            <br className='hidden lg:inline'/> and impactful for those <span className='txt-gradient'>in need</span>. See some of our ongoing initiatives.
            </p>
          </div>
          <section className='w-full flex flex-col'>
            <Container>
              <ContainerTitle triggerLink='/initiatives'>
                <h2 className='text-base 2xl:text-2xl tracking-tight font-bold text-center'>
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
          <br/>
          <Button path='/initiatives'>
            Support Our Projects <Icon icon='HeartFilled' fillColor='inherit' inline size="sm"/>
          </Button>
        </section>

        <section className='flex flex-col lg:flex-row gap-10 items-center bg-gradient-to-b from-[--clr-red-extralight] border-4 border-[--clr-red-light] px-6 py-8 md:p-14 lg:p-16 rounded-3xl shadow-md'>
            <section data-aos="fade-up" className='w-full lg:w-1/2 flex flex-col items-start gap-5'>
              <span className='text-3xl lg:text-4xl 2xl:text-5xl text-left text-[--clr-red-base] font-bold tracking-tight'>
                Donate <span className='ft-inter txt-gradient font-extrabold'>$5</span> to help us <br className='hidden md:inline'/> create more impact.
              </span>
              <ul className='lg:ml-5 flex flex-col gap-2 font-medium text-base lg:text-lg text-[#434242]'>
                <li className="list-disc">
                  With your donation, we can provide <span className='txt-gradient'>essential</span> resources and opportunities for young people to make a tangible impact, especially for children in West Africa.
                </li>
                <li className="list-disc">
                  Your generosity enables us to offer educational programs, health initiatives, and sustainable practices that promote a brighter, more equitable future.
                </li>
                <li className="list-disc">
                  By donating today, you become a <span className='txt-gradient'>vital</span> part of our efforts to foster social good, environmental stewardship, and the well-being of children across the globe.
                </li>
              </ul>
              <div className='w-full md:w-1/3 lg:w-1/2 flex flex-col '>
                <Button variant='donate' path={donateSiteLink}>
                  Visit Donation Page <Icon icon='ExternalLink' fillColor='inherit' size='sm' inline/>
                </Button>
              </div>
            </section>
            <section data-aos="fade-up" className='w-full lg:w-1/2'>
              <DonateForm/>
            </section>
        </section>

        <section className='hidden px-5 py-[5vh] md:px-[6vw] lg:px-[12vw] bg-[--clr-blue-base] flex flex-col lg:flex-row gap-10 items-center justify-between'>
          <div className='w-full'>
            <h2 className='ft-cooper text-white'>Subscribe to our newsletter coming September 2024.</h2>
          </div>
          <div className='w-full'>
            <EmailForm/>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center gap-10'>
          <span className='text-xl lg:text-2xl  font-bold text-center'>
            Our Supporters
          </span>
          <div className='flex flex-col md:flex-row gap-5 font-extrabold text-xl text-center items-center justify-center opacity-50'>
            <span>Friends of the <br/>Sugar Land Library</span>
            <img className='w-40 h-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUVLa7edJFb1dc_IvKvJZ52meeJxKkAPfdg&s'/>
            <img className='w-40 h-auto' src='https://assets.hackclub.com/flag-standalone.svg'/>
          </div>
          <Button>
            Learn About Sponsoring Us <Icon icon='ExternalLink' size='sm' fillColor='white'/>
          </Button>
        </section>

        <section className='w-full flex flex-col gap-10 items-center justify-center'>
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
