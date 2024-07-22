'use client'
import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon'

type ModalProps = {
  children: React.ReactNode;
  toggleElement: React.ReactNode;
};

export default function Highlight({ children, toggleElement }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [positionLeft, setPositionLeft] = useState<number>();
  const [positionTop, setPositionTop] = useState<number>();
  const toggleRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const screenWidth = window.outerWidth
    let toggleXPosition;
    let toggleYPosition;
    let toggleHeight;
    let modalWidth;

    if (toggleRef.current) {
      toggleXPosition = toggleRef.current.offsetLeft - toggleRef.current.scrollLeft + toggleRef.current.clientLeft
      toggleYPosition = toggleRef.current.offsetTop - toggleRef.current.scrollTop + toggleRef.current.clientTop
      toggleHeight = toggleRef.current?.offsetHeight
    } else {
      toggleXPosition = 0;
      toggleYPosition = 0;
      toggleHeight = 0
    }

    if (modalRef.current) {
      modalWidth = modalRef.current?.offsetWidth
    } else {
      modalWidth =  0
    } 

    console.log(toggleXPosition, 'x corr')
    console.log(modalWidth, 'modal Width')
    console.log(screenWidth, 'screen Width')
    console.log(positionLeft, 'modal position')
  
    setPositionTop(toggleYPosition + toggleHeight)
    setPositionLeft(toggleXPosition)

    if (toggleXPosition + modalWidth > screenWidth) { // Solution for modal overflowing right side of screen
      setPositionLeft(toggleXPosition - (modalWidth * .66))
    } 

    if (screenWidth - modalWidth < toggleXPosition) { // Solution for modal overflowing left side of screenn
      setPositionLeft(screenWidth - modalWidth)
    }

  }, [isOpen, toggleRef.current?.offsetLeft, toggleRef.current?.scrollLeft, toggleRef.current?.clientLeft]);

  return (
    <>
      <span
        className='ease-in relative w-fit inline cursor-pointer td-underline-base'
        onMouseEnter={showModal}
        onMouseLeave={hideModal}
        ref={toggleRef}
      >
        {toggleElement}
        
        {!isOpen && (
        <span
          className='z-40 w-6 h-6 inline whitespace-nowrap w-fit font-bold text-xs absolute left-0 right-0 top-[85%] 
          bg-[--clr-green-base] text-white px-2 py-1 rounded-b-2xl rounded-r-2xl shadow-xl'
        >
          <Icon icon='Sun' size='sm' fillColor='white' />
        </span>
        )}
      </span>
      
      {isOpen && (
        <div ref={modalRef}
          className={`min-w-[300px] max-w-[350px] z-50 absolute ease-in p-4 border-[1px] border-[--clr-base-accent] bg-[--clr-base] rounded-2xl shadow-lg`}
          style={{ top: positionTop, left: positionLeft}}
        >
          <div className="w-full ft-inter tracking-wide flex flex-col text-base font-medium items-start text-left">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
