import Image from "next/image"
import logo from "@/public/image/footer/White Clean Writing.png"
import whats from "@/public/image/footer/WASSAP.png"
import insta from "@/public/image/footer/INSTA.png"
import tik from "@/public/image/footer/TIKTUK.png"
import yutub from "@/public/image/footer/YOUTUB.png"
import Link from "next/link"

export default function Footer() {
    return(
        <div className="flex flex-col justify-center items-center bg-[#3C3C3C] w-full h-[800px] text-[white] font-montserrat pt-[20px] pb-[40px] z-30">
            <div className="flex flex-wrap max-w-[1300px] justify-around gap-x-[50px] mb-[20px] px-[5%]">
                <Image className="items-center" src={logo} alt="logo" width={200} height={120}></Image>
                <div className="flex flex-wrap justify-around gap-x-[50px]">
                <div className="max-w-[320px] pt-[20px]">
                    <p className=" font-semibold text-[30px] max-sm:text-center">
                    Office
                    </p>
                    <p className="text-[15px] pt-[10px] max-sm:text-center">
                    +62 (0543) 65555 - Kota Tangerang, Kawasan Pusat Niaga Terpadu KM. 19.6 Blok D No. 8i, Batu Ceper
                    </p>
                    <p className="text-[15px] pt-[10px] max-sm:text-center">
                    pancabudifoundation@gmail.com
                    </p>
                </div>
                <div className="max-w-[500px] justify-between pt-[20px]">
                    <p className="font-semibold text-[30px] max-sm:text-center max-sm:pt-[20px]">Social Media</p>
                    <div className="flex pt-[10px] text-[15px] ">
                        <div className="pr-[15px] ">
                            <Link href="http://wa.me/6281190078784" className="flex text-[15px] items-center cursor-pointer">
                                <Image className="pr-[5px]" src={whats} alt="wassap" width={25} height={25}></Image>
                                <p>WhatsApp</p>
                            </Link>
                            <Link href="https://www.instagram.com/pancabudifoundation/" className="flex pt-[15px] items-center cursor-pointer">
                                <Image className="pr-[5px]" src={insta} alt="wassap" width={25} height={25}></Image>
                                <p className="">Instagram</p>
                            </Link>
                        </div>
                        <div>
                            <Link href="http://youtube.com/@PancaBudiFoundation" className=" flex items-center cursor-pointer">
                                <Image className="pr-[5px]" src={yutub} alt="wassap" width={25} height={25}></Image>
                                <p className="">YouTube</p>
                            </Link>
                            <Link href="http://tiktok.com/@pancabudifoundation" className="flex pt-[15px] text-[15px] items-center cursor-pointer">
                                <Image className="pr-[5px]" src={tik} alt="wassap" width={25} height={25}></Image>
                                <p className="">TikTok</p>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center text-[10px] bg-[white] w-[1000px] h-[2px] max-sm:mt-[20px]">
                <p className="mt-[15px] px-[5%]">
                Panca Budi Foundation 2023 - All Rights Reserved
                </p>
            </div>
        </div>
    )
}