import Image from "next/image";
import arrowright from "@/public/image/home/slideshow_arrow/arrow.png";
import React, { useState, useEffect } from "react";

import a1 from "@/public/image/gallery/slides/Fixed/1.jpg";
import a2 from "@/public/image/gallery/slides/Fixed/2.jpg";
import a3 from "@/public/image/gallery/slides/Fixed/3.jpg";
import a4 from "@/public/image/gallery/slides/Fixed/4.jpg";
import a5 from "@/public/image/gallery/slides/Fixed/5.jpg";
import a6 from "@/public/image/gallery/slides/Fixed/6.jpg";

const Sliders = () => {
  const pictures = [a1, a2, a3, a4, a5, a6];
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
    <div className="flex flex-col items-center bg-gradient-to-r from-blueblub to-redblub w-screen h-[1000px] font-montserrat text-[white] pt-[100px] pb-[100px] sm:hidden">
      <h1 className="max-w-[1000px] text-center mb-[20px] font-semibold text-[35px] max-lg:px-[5%]">Foto-Foto Event Kami</h1>
      <h1 className="max-w-[1000px] text-center mb-[50px] font-normal text-[25px] max-lg:px-[5%]">Slide Foto</h1>
      <div
        style={{
          backgroundImage: `url(${pictures[currentIndex].src})`,
        }}
        className="relative shadow-2xl w-[350px] h-[200px] bg-cover rounded-2xl bg-top transition-background-image duration-1000"
      >
        <div className="flex top-[45%] justify-around relative group w-full shadow-2xl">
          <Image
            className="w-[12px] h-[20px] z-20 relative left-[71%]"
            onClick={nextSlide}
            src={arrowright}
            alt="Previous"
          ></Image>
          <Image
            className="w-[12px] h-[20px] z-20 relative rotate-180 right-[71%]"
            onClick={prevSlide}
            src={arrowright}
            alt="Next"
          ></Image>
        </div>
      </div>
      <div className="mt-[15px] flex">
        {pictures.map((_, index) => (
          <div key={index} className={`w-[8px] h-[8px] rounded-full mx-1 cursor-pointer 
          ${ currentIndex === index ? "opacity-[50%] bg-[grey]" : "bg-[white]"}`} onClick={() => setCurrentIndex(index)}></div>))}
      </div>
    </div>
  );
};

export default Sliders;
