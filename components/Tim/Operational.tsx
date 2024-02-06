import Image from "next/image"
import pandu from "@/public/image/tim/pandu.jpg"
import moses from "@/public/image/tim/moses.jpg"
import opera from "@/public/image/tim/opera.jpg"

export default function CompanyServices() {
    return (
        <div className="flex flex-col justify-center items-center bg-redblub w-screen h-[1500px] font-montserrat pt-[80px] pb-[80px] z-20" >
            <Image className="absolute w-screen md:h-[765px] sm:h-[1300px] h-[1200px] object-cover bg-center opacity-[20%]" src={opera} alt="servis"></Image>
            <div className="font-montserrat text-[white] z-10">
                <p className="max-w-[1000px] font-semibold text-center text-[35px]">Bagian Operasional</p>
                <div className="flex max-md:flex-col justify-around lg:gap-x-[170px] gap-x-[70px] gap-y-[50px] pt-[70px] font-medium text-[25px] text-center">
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={pandu} alt="pandu"></Image>
                        <p className="pt-[10px] font-semibold">Operational Leader</p>
                        <p>Elpandu Aradea</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={moses} alt="moses"></Image>
                        <p className="pt-[10px] font-semibold">Operational & Logistics</p>
                        <p>Moses Mario Karpa Wijaya</p>
                    </div>
                </div>
            </div>
        </div>
    )
}