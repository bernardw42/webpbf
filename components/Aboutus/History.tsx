import Image from "next/image"
import bangunan from "@/public/image/aboutus/Fixed/bangunan.jpg"
import Link from "next/link"

export default function History() {
    return(
            <div className="flex max-lg:flex-col items-center text-[white] w-full h-[1200px] font-montserrat">
                    <Image className="object-cover md:bg-top bg-center lg:w-1/2 h-[550px] w-screen max-lg:h-[550px]" src={bangunan} alt="event"></Image>
                    <div className="flex flex-col justify-center max-lg:items-center 2xl:gap-y-[50px] lg:gap-y-[30px] md:gap-y-[50px] gap-y-[30px] bg-gradient-to-b from-blueblub to-redblub lg:w-1/2 lg:h-[550px] md:px-[100px] px-[50px] w-screen h-[620px]">
                        <h2 className="font-semibold lg:text-left text-center text-[35px]">Sejarah Kami</h2>
                        <p className="max-w-[1000px] font-normal xl:text-[20px] lg:text-[16px] sm:text-[20px] text-[18px] lg:text-left text-center pb-[20px]">Didirikan pada tanggal 9 Mei 2009 di Tangerang, Panca Budi Foundation (PBF) adalah sebuah organisasi sosial kemasyarakatan. Organisasi ini dibentuk atas dasar bahwa kita merupakan bagian dari masyarakat, bangsa dan negara oleh CEO Panca Budi Group, Bapak Djonny Taslim. Slogan kami adalah satukan hati dalam berbagi kasih.</p>
                        <div>
                            <a href="/history">
                                <button className="bg-[white] hover:brightness-75 py-2 px-4 rounded bottom-10 text-[18px] max-lg:text-[14px] text-[black] font-semibold">
                                    Pelajari Lebih Lanjut
                                </button>
                            </a>
                        </div>
                    </div>
            </div>
    )
}