import Navbar from "@/components/Navbar"
import Header from "@/components/Tim/Header"
import Description from "@/components/Tim/Description"
import Operational from "@/components/Tim/Operational"
import Finance from "@/components/Tim/Finance"
import Digital from "@/components/Tim/Digital"
import Footer from "@/components/Footer"
import Article from "@/components/Article"
import Head from "next/head"

export default function tim() {
    return(
        <div>
            <Head>
                <title>Panca Budi Foundation</title>
            </Head>
            <div className="relative bg-gray-50 flex flex-col items-center h-[100vh]">
                <Navbar></Navbar>
                <Header></Header>
                <Description></Description>
                <Operational></Operational>
                <Article></Article>
                <Footer></Footer>
            </div>
        </div>
    )
}

// import Image from "next/image"
// import Link from "next/link"
// import Logo from "public/image/navbar/Fixed/pancabudi1.png"
// import menu from "@/public/image/home/slideshow_arrow/menu.png"
// import close from "@/public/image/home/slideshow_arrow/close.png"
// import React, {useState} from "react";

// export default function Navbar() {
//     const [navbar, setNavbar] = useState(false);
//     return (
//         <nav className="bg-[white] fixed top-0 z-40 flex w-full font-semibold uppercase justify-center gap-x-[80px] px-2">
//           <div className="z-50 max-lg:w-full min-w-[78px] flex items-center justify-between">
//             <Link href="/">
//                 <Image src={Logo} alt="Logo" className="md:cursor-pointer h-[78px] w-[78px]"></Image>
//             </Link>
//             <div className=" lg:hidden" onClick={() => setNavbar(!navbar)}>
//               <button className="p-2 text-gray-700 rounded-md outline-none duration-200" onClick={() => setNavbar(!navbar)}>
//                   {navbar ? (
//                     <Image src={close} width={30} height={30} alt="logo"/>
//                   ) : (
//                     <Image
//                       src={menu}
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//               </button>
//             </div>
//           </div>
//           <div className="lg:flex hidden whitespace-nowrap">
//             <ul className="flex items-center gap-x-[20px] font-montserrat">
//                 <Link href="/" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Halaman Utama
//                     {/* <a href="/aboutus" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Halaman Utama</a> */}
//                 </Link>
//                 <Link href="/activity" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Aktivitas
//                     {/* <a href="/aboutus" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Aktivitas</a> */}
//                 </Link>
//                 <Link href="/aboutus" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tentang Kami
//                     {/* <a href="/aboutus" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tentang Kami</a> */}
//                 </Link>
//                 <Link href="/team" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tim Kami
//                     {/* <a href="/team" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tim Kami</a>  */}
//                 </Link>
//                 <Link href="/history" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Sejarah
//                     {/* <a href="/history" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Sejarah</a>  */}
//                 </Link>
//                 <Link href="/gallery" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Galeri
//                     {/* <a href="/gallery" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Galeri</a> */}
//                 </Link>
//             </ul>
//             {/* BAHASA
//              <a className="lg:flex hidden gap-x-5 items-center font-montserrat font-semibold">
//                     <Image src={Bahasa} alt="bahasa" width={30} height={30}></Image>
//                     <h2>Bahasa Indonesia</h2>
//             </a> */}
//             </div>

//           {/* Mobile nav */}
//           <ul
//             className={`lg:hidden bg-[white] fixed w-full top-0 overflow-y-auto bottom-0 z-40 py-24 pl-4 duration-500 ${navbar ? "left-0" : "left-[-100%]"}
//           `}>
//                 <Link href="/" className="py-7 px-3 inline-block">Halaman Utama
//                     {/* <a href="/" className="py-7 px-3 inline-block">Halaman Utama</a> */}
//                 </Link>
//                 <Link href="/activity" className="py-7 px-3 inline-block">Aktivitas
//                     {/* <a href="/activity" className="py-7 px-3 inline-block">Aktivitas</a>  */}
//                 </Link>
//                 <Link href="/aboutus" className="py-7 px-3 inline-block">Tentang Kami
//                     {/* <a href="/aboutus" className="py-7 px-3 inline-block">Tentang Kami</a> */}
//                 </Link>
//                 <Link href="/team" className="py-7 px-3 inline-block">Tim Kami
//                     {/* <a href="/team" className="py-7 px-3 inline-block">Tim Kami</a>  */}
//                 </Link>
//                 <Link href="/history" className="py-7 px-3 inline-block">Sejarah
//                     {/* <a href="/history" className="py-7 px-3 inline-block">Sejarah</a>  */}
//                 </Link>
//                 <Link href="/gallery" className="py-7 px-3 inline-block">Galeri
//                     {/* <a href="/gallery" className="py-7 px-3 inline-block">Galeri</a> */}
//                 </Link>
//           </ul>
//         </nav>

// import Image from "next/image"
// import blood from "@/public/image/article/1/blood.jpg"
// import bakti from "@/public/image/article/2/bakti.jpg"
// import mang from "@/public/image/article/4/a.jpg"
// import kusus from "@/public/image/article/3/a.jpg"

// export default function Article()
// {
//     const slideLeft = () => {
//         let slider: HTMLElement = document.getElementById('slider')!
//         slider.scrollLeft = slider.scrollLeft - 600    
//       }
    
//       const slideRight = () => {
//         let slider: HTMLElement = document.getElementById('slider')!
//         slider.scrollLeft = slider.scrollLeft + 600
//       }

//     return(
//         <div className="flex flex-col items-center bg-greyblub w-screen h-[4000px] font-montserrat pt-[100px] pb-[100px] z-20">
//             <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Artikel Terkait Aktivitas Kami</h1>
//             <div className="flex mb-[20px]">
//               <div className="bg-redblub w-[100px] h-[20px]"></div>
//               <div className="bg-blueblub w-[100px] h-[20px]"></div>
//             </div>
//             <div className="flex justify-center max-lg:flex-col mt-[50px]">
//                     {/* <Image className="rotate-180 hover:scale-110 duration-200 cursor-pointer max-lg:hidden" onClick={slideLeft} src={arrowright} alt="a" height={70}></Image>
//                     <div id="slider" className="flex lg:w-[1100px] w-[800px] h-fit overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"> */}
//                     <div id="blood" className="flex flex-col justify-between items-center px-4">
//                             <div className="flex flex-col font-montserrat items-center max-w-[450px] max-lg:px-[5%]">
//                             <Image src={blood} alt="headline" width={450} height={450}></Image>
//                                     <h1 className="font-semibold text-[25px] text-center mt-[20px]">Menyelamatkan Nyawa: Donor Darah Rutin sebagai Inisiatif Tanggung Jawab Sosial Perusahaan</h1>
//                                     <h2 className="font-semibold text-[15px] text-center mb-[20px]">September 2023</h2>
//                             </div>
//                             <div>
//                                     <a href="/donor_darah_september">
//                                         <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
//                                         Baca Artikel  
//                                         </button>
//                                     </a>
//                             </div>
//                     </div>
//                     <div id="envi" className="flex flex-col justify-between items-center px-4 max-lg:mt-[50px]">
//                             <div className="flex flex-col font-montserrat items-center max-w-[450px] max-lg:px-[5%]">
//                             <Image src={bakti} alt="headline" width={450} height={450}></Image>
//                                     <h1 className="font-semibold text-[25px] text-center mt-[20px]">Kerja Bakti: Tanggung Jawab Sosial Perusahaan dalam Menjaga Lingkungan bersih</h1>
//                                     <h2 className="font-semibold text-[15px] text-center mb-[20px]">September 2023</h2>
//                             </div>
//                             <div>
//                                     <a href="/bakti_september">
//                                         <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
//                                         Baca Artikel  
//                                         </button>
//                                     </a>
//                             </div>
//                     </div>
//                     <div id="envi" className="flex flex-col justify-between items-center px-4 max-lg:mt-[50px]">
//                             <div className="flex flex-col font-montserrat items-center max-w-[450px] max-lg:px-[5%]">
//                             <Image src={kusus} alt="headline" width={450} height={450}></Image>
//                                     <h1 className="font-semibold text-[25px] text-center mt-[20px]">Kunjungan Penuh Makna ke Panti Sosial Berkebutuhan Khusus</h1>
//                                     <h2 className="font-semibold text-[15px] text-center mb-[20px]">November 2023</h2>
//                             </div>
//                             <div>
//                                     <a href="/kusus_nov23">
//                                         <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
//                                         Baca Artikel  
//                                         </button>
//                                     </a>
//                             </div>
//                     </div>
//                     <div id="envi" className="flex flex-col justify-between items-center px-4 max-lg:mt-[50px]">
//                             <div className="flex flex-col font-montserrat items-center max-w-[450px] max-lg:px-[5%]">
//                             <Image src={mang} alt="headline" width={450} height={450}></Image>
//                                     <h1 className="font-semibold text-[25px] text-center mt-[20px]">Kunjungan Penuh Makna ke Panti Sosial Berkebutuhan Khusus</h1>
//                                     <h2 className="font-semibold text-[15px] text-center mb-[20px]">November 2023</h2>
//                             </div>
//                             <div>
//                                     <a href="/mangr_nov23">
//                                         <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
//                                         Baca Artikel  
//                                         </button>
//                                     </a>
//                             </div>
//                     </div>
//                     {/* </div>
//                     <Image className="hover:scale-110 duration-200 cursor-pointer max-lg:hidden" onClick={slideRight} src={arrowright} alt="a" height={70}></Image> */}
//                 </div>
//         </div>
//     )
// }
