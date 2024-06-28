"use client"
import { FaCalendarAlt } from "react-icons/fa";
import ButtonOrange from "./ButtonOrange";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (global?.window && window.innerWidth) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
 }

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const FloatingButton: React.FC = () => {
  const windowDimensions = useWindowDimensions()
  const width = windowDimensions?.width as number
  const isMobile = width <= 768
  return (
    <ButtonOrange
      href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0W9SITQXSJThFdp-tp2cnXP5gTjJm1f0SFHGGigsmOc52UED6cwJDza31WnNn-q8sH78jStiDl?gv=true"
      target="_blank"
      //className="fixed w-auto rounded-none bottom-0 right-0 left-0 md:rounded-md md:bottom-5 md:left-auto md:right-5 z-[60]"
      className="fixed flex items-center justify-center w-auto bottom-0 right-0 left-0 md:rounded-md md:bottom-5 md:left-auto md:right-5 z-[60] bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-bold px-5 py-2.5 text-center ${isMobile ? '' : 'rounded-lg}'"
    >
      <FaCalendarAlt size={30} className="mr-2" />
      {isMobile ? "Agendar no Google Calendar" : "Agendar reunião"}
      

    </ButtonOrange>
  );
};

export default FloatingButton
