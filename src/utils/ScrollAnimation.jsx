import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollAnimation = ({
  children,
  effect = 'fade-up',
  duration = 800,
  delay = 100,
  offset = 100,
  once = true,
  className = '',
  ...rest
}) => {
  // AOS is initialized in the Layout component
  
  return (
    <div 
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-offset={offset}
      data-aos-once={once}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
