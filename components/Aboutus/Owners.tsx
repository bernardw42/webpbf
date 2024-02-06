import Image from "next/image"
import djonny from "@/public/image/aboutus/Fixed/djonny.png"
import rudi from "@/public/image/aboutus/Fixed/rudi.png"
import sal from "@/public/image/aboutus/Fixed/sal.png"
import Link from "next/link"

export default function Owners() {
    return(
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[2200px] font-montserrat pt-[100px] pb-[30px]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px]">Pemimpin Kami</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex flex-wrap justify-around mt-[130px] lg:gap-x-[80px] gap-x-[50px] gap-y-[80px] px-4">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center font-montserrat bg-gradient-to-b from-blueblub to-redblub w-[300px] h-[380px] max-xl:w-[275px] max-xl:h-[355px] transition-all hover:scale-[103%] hover:shadow-lg">
                        <Image className="xl:mb-[85px] mb-[70px] w-[300px] h-[480px] max-xl:w-[275px] max-xl:h-[455px]" src={djonny} alt="a" ></Image>
                    </div>
                        <h1 className="text-[25px] pt-[15px]">CEO</h1>
                        <h2 className="text-[25px] font-semibold">Djonny Taslim</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center font-montserrat bg-gradient-to-b from-blueblub to-redblub w-[300px] h-[380px] max-xl:w-[275px] max-xl:h-[355px] transition-all hover:scale-[103%] hover:shadow-lg">
                        <Image className="xl:mb-[85px] mb-[70px] w-[300px] h-[480px] max-xl:w-[275px] max-xl:h-[455px]" src={rudi} alt="a" ></Image>
                    </div>
                    <h1 className="text-[25px] pt-[15px]">Supervisor</h1>
                    <h2 className="text-[25px] font-semibold">Tjan Rudi Tanamal</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center font-montserrat bg-gradient-to-b from-blueblub to-redblub w-[300px] h-[380px] max-xl:w-[275px] max-xl:h-[355px] transition-all hover:scale-[103%] hover:shadow-lg">
                        <Image className="xl:mb-[85px] mb-[70px] w-[300px] h-[480px] max-xl:w-[275px] max-xl:h-[455px]" src={sal} alt="a"></Image>
                    </div>
                        <h1 className="text-[25px] pt-[15px]">Ketua</h1>
                        <h2 className="text-[25px] font-semibold">Salvia Patriana Taslim</h2>
                    </div>
            </div>
            <div className="pt-[70px]">
                <a href="/team" className="text-[20px]">
                    <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
                        Lihat Tim Kami
                    </button>
                </a>
            </div>
        </div>
    )
}