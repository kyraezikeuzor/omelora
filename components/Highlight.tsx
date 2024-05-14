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
  
    setPositionTop(toggleYPosition + toggleHeight)
    setPositionLeft(toggleXPosition)

    if (toggleXPosition + modalWidth > screenWidth) {
      setPositionLeft(toggleXPosition - (modalWidth * .66))
    }

  }, [isOpen, toggleRef.current?.offsetLeft, toggleRef.current?.scrollLeft, toggleRef.current?.clientLeft]);

  //span className='inline-block w-fit relative'

  return (
    <>
        <span
          className='relative w-fit inline cursor-pointer underline 
          underline-offset-2 decoration-[--clr-green-base] decoration-2'
          onMouseEnter={showModal}
          onMouseLeave={hideModal}
          ref={toggleRef}
        >
          {toggleElement}

          {!isOpen && (
          <span
            className='z-40 inline whitespace-nowrap w-fit font-bold text-xs absolute left-0 right-0 top-[85%] 
            bg-[--clr-green-base] text-white px-3 py-1 rounded-b-2xl rounded-r-2xl'
          >
            <Icon icon='Sun' className='fill-white' />
          </span>
        )}
        </span>
        
        {isOpen && (
          <div ref={modalRef}
            className={`z-50 absolute p-3 border-[1px] border-[--clr-base-accent] bg-[--clr-base] rounded-lg shadow-lg`}
            style={{ width: '300px', top: positionTop, left: positionLeft}}
          >
            <div className="flex flex-col text-base">
              {children}
            </div>
            <div className="modal-overlay"></div>
          </div>
        )}
      
    </>
  );
}
