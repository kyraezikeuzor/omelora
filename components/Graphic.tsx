
type GraphicProps = {
    src: string;
    size?:'sm'|'lg'
}

export default function Graphic({src, size}:GraphicProps) {

    return (
        <img className={`${size === 'sm' ? 'w-4 lg:w-6' : size === 'lg' ? 'w-12 lg:w-16' : 'w-8 lg:w-10'} h-auto inline-block`} src={src}/>
    )
}