"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./responsiveCarousel.module.css";


interface CarouselProps {
  children: React.ReactElement[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <div className={styles.wrapper}>
      <i 
        className="flex z-50"
        onClick={() => {
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
          );
        }}
      >
        <FaChevronLeft id="left"
          className="text-black mx-auto my-auto"
          size={25}
        />
      </i>
      <ul 
        className={styles.carousel}
      >
        {slides.map((slide, index) => (
          <li 
            key={index} 
            className={`${slide.props.className} ${styles.card}`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {slide.props.children}
          </li>
        ))}
      </ul>
      <i
        className="flex z-50"
        onClick={() => {
          setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
          );
        }}
      >
        <FaChevronRight
          className="text-black mx-auto my-auto"
          size={25}
        />
      </i>
    </div>
  )
}
