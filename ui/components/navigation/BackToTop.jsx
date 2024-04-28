"use client"

import { useEffect } from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Affichez ou masquez le bouton en fonction de la position de défilement
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const button = document.getElementById('backToTopButton');

      if (scrollY > 300) {
        button.classList.add('opacity-100');
      } else {
        button.classList.remove('opacity-100');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className="d-none d-sm-block position-fixed bottom-0 end-0  mb-5 pb-5 me-0 me-md-1">
            <span
                id="backToTopButton"
                className="opacity-0 p-3 bg-transparent mb-5 pb-5"
                onClick={scrollToTop}
            >
                <FaAngleDoubleUp className="text-secondary fs-2 cursor-pointer" />
            </span>
        </div>

    );
};

export default BackToTop;
