import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/image/navbar/Fixed/pancabudi1.png"
import menu from "@/public/image/home/slideshow_arrow/menu.png"
import close from "@/public/image/home/slideshow_arrow/close.png"
import React, {useState} from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="bg-[white] fixed top-0 z-40 flex w-full font-semibold uppercase justify-center gap-x-[80px] px-2">
          <div className="z-50 max-lg:w-full min-w-[78px] flex items-center justify-between">
            <Link href="/">
                <Image src={Logo} alt="Logo" className="md:cursor-pointer h-[78px] w-[78px]"></Image>
            </Link>
            <div className=" lg:hidden" onClick={() => setNavbar(!navbar)}>
              <button className="p-2 text-gray-700 rounded-md outline-none duration-200" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="logo"/>
                  ) : (
                    <Image
                      src={menu}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
              </button>
            </div>
          </div>
          <div className="lg:flex hidden whitespace-nowrap">
            <ul className="flex items-center gap-x-[20px] font-montserrat">
                <li>
                    <a href="/" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Halaman Utama</a>
                </li>
                <li>
                    <a href="/activity" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Aktivitas</a>
                </li>
                <li>
                    <a href="/aboutus" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tentang Kami</a>
                </li>
                <li>
                    <a href="/team" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Tim Kami</a> 
                </li>
                <li>
                    <a href="/history" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Sejarah</a> 
                </li>
                <li>
                    <a href="/gallery" className="hover:bg-[#f0f0f0] hover:rounded-full px-4 py-2">Galeri</a>
                </li>
            </ul>
            {/* BAHASA
             <a className="lg:flex hidden gap-x-5 items-center font-montserrat font-semibold">
                    <Image src={Bahasa} alt="bahasa" width={30} height={30}></Image>
                    <h2>Bahasa Indonesia</h2>
            </a> */}
            </div>

          {/* Mobile nav */}
          <ul
            className={`lg:hidden bg-[white] fixed w-full top-0 overflow-y-auto bottom-0 z-40 py-24 pl-4 duration-500 ${navbar ? "left-0" : "left-[-100%]"}
          `}>
                <Link href="/" className="py-7 px-3 inline-block">Halaman Utama
                    {/* <a href="/" className="py-7 px-3 inline-block">Halaman Utama</a> */}
                </Link>
                <Link href="/activity" className="py-7 px-3 inline-block">Aktivitas
                    {/* <a href="/activity" className="py-7 px-3 inline-block">Aktivitas</a>  */}
                </Link>
                <Link href="/aboutus" className="py-7 px-3 inline-block">Tentang Kami
                    {/* <a href="/aboutus" className="py-7 px-3 inline-block">Tentang Kami</a> */}
                </Link>
                <Link href="/team" className="py-7 px-3 inline-block">Tim Kami
                    {/* <a href="/team" className="py-7 px-3 inline-block">Tim Kami</a>  */}
                </Link>
                <Link href="/history" className="py-7 px-3 inline-block">Sejarah
                    {/* <a href="/history" className="py-7 px-3 inline-block">Sejarah</a>  */}
                </Link>
                <Link href="/gallery" className="py-7 px-3 inline-block">Galeri
                    {/* <a href="/gallery" className="py-7 px-3 inline-block">Galeri</a> */}
                </Link>
          </ul>
        </nav>
    );
}
