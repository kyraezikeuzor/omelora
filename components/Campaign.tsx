import ListIcon from './ListIcon'
import {toTimespan, toDate} from '@/data/utils'

type CampaignProps = {
    title:string;
    description:string;
    startDate:string;
    endDate:string;
    goalValue: number
    currentValue: number;
    measurement: string;
    details: string[]
    value:number | string | React.ReactNode
}

function ProgressBar({goalValue, currentValue}: {goalValue:number, currentValue:number}) {

    const percentage = `${(currentValue / goalValue) * 100}%`;

    return (
        <div className='w-full h-3 bg-[--clr-grey-light] rounded-xl'>
            <div 
            className='h-full justify-center bg-[--clr-green-base] rounded-xl ' 
            style={{width: percentage}}
            />
        </div>
    )
}


export default function Campaign({title,description, startDate, endDate, goalValue, currentValue, measurement, details, value}:CampaignProps) {
    return (
        <div className='flex flex-col gap-5 p-5 border-2 border-[--clr-base-accent] bg-[--clr-base] rounded-xl shadow-sm'>
            <ListIcon value={value}/>
            <div className='flex flex-col gap-2'>
                <span className='font-bold text-xl md:text-2xl'>{title}</span>
                <p className='text-base'>{description}</p>
                <div className='flex flex-row justify-between text-sm font-medium'>
                   <span>
                        <span className='text-[--clr-grey-base]'>Starts:</span> {toDate(startDate)}
                    </span>
                   <span>
                        <span className='text-[--clr-grey-base]'>Ends:</span> {toDate(endDate)}
                    </span>
                </div>
                <div className='flex flex-row gap-2 items-center text-sm font-medium'>
                    <ProgressBar goalValue={goalValue} currentValue={currentValue}/>
                    <span className='flex flex-row gap-1 items-center'>
                        <span className='text-[--clr-grey-base]'>{currentValue}</span>
                        <span>/</span>
                        <span className='flex flex-row gap-1 items-center'><span>{measurement === "$" ? "$" : ''}{goalValue}</span> <span>{measurement !== '$' ? `${measurement}` : ''}</span></span>
                    </span>
                </div>
            </div>
        </div>
    )
}