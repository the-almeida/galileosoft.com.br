"use client"
import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './carousel.module.css';


interface CarouselProps {
  children: React.ReactElement[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const maxSlides = slides.length
  const slideWidthPercentage = 100 / maxSlides

  const previousSlide = () => {
    const prevSlide = activeSlide - 1
    const lastSlide = slides.length - 1

    if (prevSlide >= 0)
      setActiveSlide(prevSlide)
    else
      setActiveSlide(lastSlide)
  }
  const nextSlide = () => {
    const nextSlide = activeSlide + 1
    const firstSlide = 0

    if (nextSlide < slides.length)
      setActiveSlide(nextSlide)
    else
      setActiveSlide(firstSlide)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.slider} style={{ transform: `translate(-${activeSlide * slideWidthPercentage}%)`, width: `${maxSlides * 100}%` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`${slide.props.className} ${styles.slide}`}>
            {slide.props.children}
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <a
          onClick={previousSlide}
          className={styles.arrowLeft}
        >
          <FaChevronLeft
            size={30}
          />
        </a>

        <a
          onClick={nextSlide}
          className={styles.arrowRight}
        >
          <FaChevronRight
            size={30}
          />
        </a>
      </div>
    </div>
  )
}