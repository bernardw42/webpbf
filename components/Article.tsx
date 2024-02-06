import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import blood from '@/public/image/article/1/blood.jpg';
import bakti from '@/public/image/article/2/bakti.jpg';
import mang from '@/public/image/article/4/a.jpg';
import kusus from '@/public/image/article/3/a.jpg';

const articles = [
  { image: blood, title: 'Menyelamatkan Nyawa: Donor Darah Rutin sebagai Inisiatif Tanggung Jawab Sosial Perusahaan', date: 'September 2023', link: '/donor_darah_september' },
  { image: bakti, title: 'Kerja Bakti: Tanggung Jawab Sosial Perusahaan dalam Menjaga Lingkungan bersih', date: 'September 2023', link: '/bakti_september' },
  { image: kusus, title: 'Kunjungan Penuh Makna ke Panti Sosial Berkebutuhan Khusus', date: 'November 2023', link: '/panti_kusus_november' },
  { image: mang, title: 'Kunjungan Penuh Makna ke Panti Sosial Berkebutuhan Khusus', date: 'November 2023', link: '/mangroove_november' },
];

const Article = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [customState, setCustomState] = useState({
    slidesToShow: 3,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: customState.slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the slidesToShow property based on window width
      const newSlidesToShow = window.innerWidth < 900 ? 1 : 3;
      if (sliderRef.current) {
        // Use slickGoTo to move to the first slide when resizing below 900px
        sliderRef.current.slickGoTo(0, true);
        // Update the custom state to trigger a re-render with the new slidesToShow value
        setCustomState({ slidesToShow: newSlidesToShow });
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set the initial state
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sliderRef]);

  return (
      <div className="flex flex-col w-screen bg-greyblub font-montserrat pt-[100px] pb-[100px] justify-center items-center z-20">
        <h1 className="max-w-5xl mx-auto text-center mb-[40px] max-lg:px-[5%] font-semibold text-[35px]">Artikel Terkait Aktivitas Kami</h1>
        <div className="flex items-center justify-center mb-[70px]">
          <div className="bg-redblub w-[100px] h-[20px]"></div>
          <div className="bg-blueblub w-[100px] h-[20px]"></div>
        </div>
        <div className='flex'>
          <button onClick={handlePrev} className="text-[150px] mb-[30px] text-blueblub">&#8249;</button>
          <Slider ref={sliderRef} {...settings} className="max-w-[1000px] max-lg:px-[5%]">
            {articles.map((article, index) => (
              <div key={index} className="flex px-4">
                <div className="flex flex-col font-montserrat max-w-[450px] h-[480px] max-[900px]:mx-auto max-[900px]:px-[5%]">
                  <Image className='max-[900px]:px-[5%]' src={article.image} alt={article.title} width={450} height={450} />
                  <h1 className="font-semibold text-[25px] text-center mt-[20px]">{article.title}</h1>
                  <h2 className="font-semibold text-[15px] text-center mb-[20px]">{article.date}</h2>
                </div>
                <div className="flex justify-center">
                  <a href={article.link}>
                    <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
                      Baca Artikel
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
          <button onClick={handleNext} className="text-[150px] mb-[30px] text-redblub">&#8250;</button>
        </div>
      </div>
  );
};

export default Article;










