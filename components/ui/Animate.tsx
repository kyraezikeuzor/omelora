'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({ children }:{children:React.ReactNode}) => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('load', refreshAOS);
      return () => {
        window.removeEventListener('load', refreshAOS);
      };
    }
  }, []);

  return <>{children}</>;
};

export default Animate;
