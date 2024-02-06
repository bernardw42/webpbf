import Image from "next/image";
import arrowright from "@/public/image/home/slideshow_arrow/arrow.png";

import a1 from "@/public/image/gallery/slides/Fixed/1.jpg";
import a2 from "@/public/image/gallery/slides/Fixed/2.jpg";
import a3 from "@/public/image/gallery/slides/Fixed/3.jpg";
import a4 from "@/public/image/gallery/slides/Fixed/4.jpg";
import a5 from "@/public/image/gallery/slides/Fixed/5.jpg";
import a6 from "@/public/image/gallery/slides/Fixed/6.jpg";

export default function Slideshow() {
  const pictures = [a1, a2, a3, a4, a5, a6];

  const slideLeft = () => {
    let slider: HTMLElement = document.getElementById("slider")!;
    if (slider.scrollLeft === 0) {
      // If at the beginning, scroll to the end to create the loop effect
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
    } else {
      slider.scrollLeft = slider.scrollLeft - 600;
    }
  };

  const slideRight = () => {
    let slider: HTMLElement = document.getElementById("slider")!;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      // If at the end or beyond, scroll back to the beginning to create the loop effect
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = slider.scrollLeft + 600;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blueblub to-redblub w-screen h-[1000px] font-montserrat text-[white] pt-[100px] pb-[100px] max-sm:hidden">
      <h1 className="max-w-[1000px] text-center mb-[20px] font-semibold text-[35px] max-lg:px-[5%]">Foto-Foto Event Kami</h1>
      <h1 className="max-w-[1000px] text-center mb-[50px] font-normal text-[25px] max-lg:px-[5%]">Slide Foto</h1>
      <div className="flex justify-center items-center gap-x-[30px]">
        <Image
          className="rotate-180 hover:scale-110 duration-200 cursor-pointer max-lg:hidden"
          onClick={slideLeft}
          src={arrowright}
          alt="a"
          height={70}
        ></Image>
        <div id="slider" className="lg:w-[1100px] w-[800px] h-fit overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {pictures.map((item, index) => (
            <Image
              key={index}
              className="inline-block m-3 shadow-md hover:scale-105 duration-200 ease-in-out lg:w-[450px] lg:h-[330px] w-[350px] h-[230px]"
              src={item}
              alt="/"
            ></Image>
          ))}
        </div>
        <Image
          className="hover:scale-110 duration-200 cursor-pointer max-lg:hidden"
          onClick={slideRight}
          src={arrowright}
          alt="a"
          height={70}
        ></Image>
      </div>
    </div>
  );
}
