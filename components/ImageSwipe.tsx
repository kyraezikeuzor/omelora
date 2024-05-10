'use client'
import React, {useState} from 'react'
import {getNextIndex} from '@/data/utils'

export default function ImageSwipe({images}:{images:any}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const next = getNextIndex(currentIndex, images.length)

    return (
        <div className='relative '>
            <div className='h-full w-full'>
                <button className="z-20 absolute -left-4 top-0 bottom-0 text-4xl text-neutral-300" onClick={prevSlide}>
                    &#10094;
                </button>

                <div className='relative mx-2'>
                    <img className='w-full h-[400px] rounded-lg origin-center -rotate-3 shadow-xl' src={images[next]}/>
                    {images.map((image:any, index:number) => (
                    <div key={index} className='absolute top-0 bottom-0 left-0 right-0'>
                        {index === currentIndex && 
                        <img src={image} alt={`Slide ${index}`} className='w-full h-[400px] shadow-xl rounded-lg object-cover origin-center rotate-3 '/>
                        }
                    </div>
                    ))}
                </div>
                
                <button className="z-20 absolute -right-4 top-0 bottom-0 text-4xl text-neutral-300" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    )
}
