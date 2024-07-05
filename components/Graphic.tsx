
type GraphicProps = {
    src: string;
    size?:'sm'|'lg';
    className?:string
}

export default function Graphic({src, size, className}:GraphicProps) {

    return (
        <img className={`${className} ${size === 'sm' ? 'w-4 lg:w-6' : size === 'lg' ? 'w-12 lg:w-24' : 'w-8 lg:w-10'} h-auto inline-block`} src={src}/>
    )
}