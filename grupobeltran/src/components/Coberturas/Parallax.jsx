import React, { useEffect } from 'react';

const Parallax = ({ speed, offset, image, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector('.parallax');
      const contentElement = document.querySelector('.content');
      const scrollPosition = window.pageYOffset;

      const translateY = scrollPosition * speed - offset;
      parallaxElement.style.transform = `translateY(${translateY}px)`;
      contentElement.style.transform = `translateY(${-translateY}px)`;
      parallaxElement.style.backgroundImage = `url('${image}')`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, offset, image]);

  return (
    <div className="parallax">
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
}

export default Parallax;
