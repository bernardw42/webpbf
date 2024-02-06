import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowright from "@/public/image/home/slideshow_arrow/arrow.png";
import 'react-slideshow-image/dist/styles.css';

import one from "@/public/image/home/slideshow/Fixed/a.jpg";
import two from "@/public/image/home/slideshow/Fixed/b.jpg";
import three from "@/public/image/home/slideshow/Fixed/c.jpg";
import four from "@/public/image/home/slideshow/Fixed/d.jpg";
import five from "@/public/image/home/slideshow/Fixed//e.jpg";

const SlideshowHome = () => {
  const pictures = [one, two, three, four, five];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const autoSlide = () => {
    const newIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="w-screen h-[820px] relative group">
      <div className="max-lg:hidden">
        <Image
          className="w-[38px] h-[70px] z-20 absolute top-[50%] right-[10%] lg:hidden opacity-50 group-hover:block hover:scale-110 hover:opacity-100 duration-200"
          onClick={prevSlide}
          src={arrowright}
          alt="Previous"
        ></Image>
        <Image
          className="w-[38px] h-[70px] z-20 absolute top-[50%] left-[10%] rotate-180 lg:hidden opacity-50 group-hover:block hover:scale-110 hover:opacity-100 duration-200"
          onClick={nextSlide}
          src={arrowright}
          alt="Next"
        ></Image>
      </div>
      <div
        style={{backgroundImage: `url(${pictures[currentIndex].src})`,}}className="drop-shadow-lg w-screen h-[818px] bg-cover bg-fixed bg-top brightness-[40%] transition-background-image duration-1000"
      ></div>
      <div className="absolute left-[50%] top-[40%] lg:top-[44%] translate-x-[-50%] z-20 font-montserrat text-[white] text-center">
        <h1 className="font-semibold lg:text-[60px] lg:min-w-[800px] text-[45px] min-w-[400px]"> Panca Budi Foundation</h1>
        <h2 className="font-normal lg:text-[38px] text-[23px]">Part of Panca Budi Group</h2>
      </div>
    </div>
  );
};

export default SlideshowHome;