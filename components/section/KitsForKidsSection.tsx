import Graphic from '@/components/Graphic'
import Button from '@/components/ui/Button'
import Icon from '@/components/Icon'

export function KitsForKids() {
    return (
    <section data-aos="fade-up" className='relative w-full shadow-s rounded-2xl border-2 border-[--clr-orange-light] overflow-y-hidden overflow-x-hidden px-8 py-14 sm:p-10 md:p-14 lg:p-24 flex flex-col items-start justify-start md:items-end md:justify-end gap-5 my-[3vh]'>
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
    )
}