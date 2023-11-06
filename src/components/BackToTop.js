// need to npm install @fortawesome/react-fontawesome 
// need to npm install @fortawesome/free-solid-svg-icons


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import './BackToTop.css';


function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(top > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" style={{ fontWeight: 'bold' }} />
    </div>
  );
}

export { BackToTop };
