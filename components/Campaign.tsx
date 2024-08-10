import Link from 'next/link'
import Icon from './Icon'
import Button from './ui/Button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card"
import {
    toDate, 
    toPath,
    getDaysLeftOrAgo
} from '@/lib/utils' 
import { donateSiteLink } from '@/data/content'


type CampaignProps = {
    title:string;
    description:string;
    startDate:string;
    endDate:string;
    goalValue: number
    currentValue: number;
    measurement: string;
    orgsSupporting: string[]
    location:string;
    image:string;
}


function ProgressBar({goalValue, currentValue}: {goalValue:number, currentValue:number}) {
    
    const percentage = currentValue < goalValue ? `${(currentValue / goalValue) * 100}%`: `${100}%`;

    

    return (
    <div className='w-full h-[8px] bg-[--clr-base-accent] rounded-2xl'>
        <div 
        className='h-full justify-center bg-gradient-to-r from-[--clr-red-base] via-[--clr-red-light] to-[--clr-orange-base] rounded-2xl ' 
        style={{width: percentage}}
        />
    </div>
    )
}

export default function Campaign({title, description, startDate, endDate, goalValue, currentValue, measurement, orgsSupporting, location, image}:CampaignProps) {
    
    
    return (
    <Link href={`/initiatives/${toPath(title)}`}>
        <Card className='w-full lg:w-[278px] p-2 cursor-pointer bg-[--clr-base] border-none shadow-none rounded-xl hover:opacity-75'>
            <div className='w-full px-0'>
                <img src={image} className='w-full object-cover h-48 rounded-2xl'/>
            </div>
            <CardHeader className='px-0 py-4'>
                <div className='flex flex-row justify-between'>
                    <span className='text-[14px] text-[--clr-red-light] font-medium '>
                        <Icon icon='Location' className='mb-[1px]' fillColor='var(--clr-red-light)' inline size='sm'/> {location}
                    </span>
                    <span className='hidden text-[14px] text-[--clr-base-text] font-semibold '>
                        <Icon icon='Compass' className='mb-[1px]' fillColor='var(--clr-base-text)' inline size='sm'/> Enugu, Nigeria
                    </span>
                </div>
                <CardTitle className='text-lg font-medium text-[--clr-base-text] tracking-normal leading-6'>
                    {title}
                </CardTitle>
                <span className='hidden w-full font-semibold text-sm opacity-50 text-left'>
                    <Icon icon='Calendar' className='mb-[1px]' inline size='sm'/> {toDate(startDate)} → {toDate(endDate)}
                </span>
            </CardHeader>
            <CardContent className='px-0 py-2'>
                <div className='flex flex-col gap-2 items-center text-sm '>
                    <ProgressBar goalValue={goalValue} currentValue={currentValue}/>
                    <div className='w-full flex flex-row justify-between'>
                        <span className=' flex flex-row gap-1 self-end items-center font-medium'>
                            <span className='text-[--clr-grey-base]'>{currentValue}</span>
                            <span className='text-[--clr-grey-base]'>/</span>
                            <span className='flex flex-row items-center opacity-75'>
                                {measurement === "$" ?
                                <span>${goalValue}</span> :
                                <span>{goalValue} {measurement}</span>
                                }
                            </span>
                        </span>
                        <span className='text-[--clr-grey-base] font-medium'>
                            {getDaysLeftOrAgo(endDate)}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    </Link>
    )
}

/*
        <div className='relative flex flex-col justify-between border-2 border-[--clr-base-accent] bg-[--clr-base] rounded-xl shadow-md'>

            <img src={image} className='w-full object-cover h-40 rounded-t-xl'/>
            
            <div className='hidden absolute top-3 right-3'>
                <Icon icon='Share' className='fill-white'/>
            </div>

            <div className='w-full flex flex-col gap-4 px-5 py-4'>
                <div className='flex flex-col gap-2'>
                    <Link 
                    target="_blank" 
                    href={`/initiatives/${toPath(title)}`} 
                    className='font-bold text-lg lg:text-xl'>
                        {title} <Icon icon="ExternalLink" className='inline fill-[--clr-grey-base]' size='sm' />
                    </Link>
                    <span className='text-base leading-2 text-[--clr-grey-base]'>
                        <span className=' font-semibold'>{location} • </span> <span>{description}</span>
                    </span>
                    <div className='flex flex-row justify-between text-sm text-[--clr-grey-base]'>
                        <span>
                            <span className="font-medium">Starts:</span> {toDate(startDate)}
                        </span>
                        <span>
                            <span className="font-medium">Ends:</span> {toDate(endDate)}
                        </span>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center text-sm '>
                    <ProgressBar goalValue={goalValue} currentValue={currentValue}/>
                    <span className='flex flex-row gap-1 items-center font-medium'>
                        <span className='text-[--clr-grey-base]'>{currentValue}</span>
                        <span>/</span>
                        <span className='flex flex-row gap-1 items-center'><span>{measurement === "$" ? "$" : ''}{goalValue}</span> <span>{measurement !== '$' ? `${measurement}` : ''}</span></span>
                    </span>
                </div>
            </div>

            <div className='w-full flex flex-row items-center justify-between px-5 pb-5'>
                <Button fullWidth path={donateSiteLink}>
                    Donate <Icon icon='HeartFilled' size='sm' fillColor='inherit'/>
                </Button>
            </div>
            
        </div>
 */