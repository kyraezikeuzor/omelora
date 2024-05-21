export default function ListIcon({value}:{value:any}) {
    return (
      <div>
        <div className='bg-[--clr-green-extralight] text-white text-xl h-8 w-8 rounded-full font-medium flex flex-col items-center justify-center text-center'>
          <div className='flex flex-col items-center justify-center'>{value}</div>
        </div>
      </div>
    )
}