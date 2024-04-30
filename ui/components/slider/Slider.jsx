"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function Slide({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (autoSlide) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [autoSlide, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const totalimages = images.length;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slide rounded">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width={800}
        height={400}
        priority
        className="slide__image rounded"
      />

      {/* {totalimages > 1 && (
        <div>
          <div onClick={prevSlide} className="slide__button">
            <IoIosArrowBack className="arrow arrow-left" />
          </div>
          <div onClick={nextSlide} className="slide__button">
            <IoIosArrowForward className="arrow arrow-right" />
          </div>
        </div>
      )} */}

      {totalimages > 1 && (
        <div className="slide__dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot  ${index === currentIndex ? "active text-scondary" : "text-light"}`}
              onClick={() => handleDotClick(index)}
            ><GoDotFill  className=""/></span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Slide;




/*"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Slide({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setCurrentIndex(0)
    }, [images])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    };

    const totalimages = images.length

    return (
        <div className="slide rounded">
            <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width={1000} height={460} priority  className="slide__image rounded" />

            {totalimages > 1 && (
                <div>
                    <div onClick={prevSlide} className="slide__button">
                        <IoIosArrowBack className="arrow arrow-left" />
                    </div>
                    <div onClick={nextSlide} className="slide__button">
                        <IoIosArrowForward className="arrow arrow-right"/>
                    </div>
                </div>
            )}

            <div className="slide__counter">
                {totalimages > 1 && `${currentIndex + 1}/${totalimages}`}
            </div>
        </div>
    );
};


export default Slide;*/
