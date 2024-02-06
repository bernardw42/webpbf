import Image from "next/image"
import darah from "@/public/image/home/activity/blood.png"
import sembako from "@/public/image/home/activity/sembako.png"
import reboisasi from "@/public/image/home/activity/reboisasi.png"
import asuhan from "@/public/image/home/activity/asuhan.png"  
import servis from "@/public/image/home/bg/servis.jpg"
import Link from "next/link"

export default function CompanyServices() {
    return (
        <div className="flex flex-col justify-center items-center bg-redblub w-screen h-[1500px] font-montserrat pt-[100px] pb-[100px] z-10" >
            <Image className="absolute w-screen h-[740px] max-[944px]:h-[1600px] lg:bg-top object-cover object-center opacity-[20%]" src={servis} alt="servis"></Image>
            <div className="font-montserrat text-[white] z-20">
                <p className="lg:max-w-[1000px] font-semibold text-center text-[30px] max-lg:px-[5%]">Kami Mengadakan Setidaknya 10 Aktivitas Dalam Setahun</p>
                <p className="font-normal text-center text-[30px] pt-[45px]">Aktivitas Kami</p>
                <div className="flex flex-wrap justify-center gap-x-[70px] max-lg:gap-x-[50px] max-sm:gap-x-[30px] pt-[45px] font-medium text-[18px] text-center gap-y-[30px] max-lg:px-[5%]">
                    <section className="flex flex-col justify-center items-center gap-y-[10px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]" src={darah} alt="blood"></Image>
                        <p>DONOR DARAH</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[10px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]" src={sembako} alt="sembako"></Image>
                        <p>SEMBAKO</p>
                    </section>
                    <div className="flex flex-wrap justify-center gap-y-[30px] gap-x-[70px] max-lg:gap-x-[50px] max-sm:gap-x-[30px]">
                        <section className="flex flex-col justify-center items-center gap-y-[10px]">
                            <Image className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]" src={reboisasi} alt="reboisasi"></Image>
                            <p>REBOISASI</p>
                        </section>
                        <section className="flex flex-col justify-center items-center gap-y-[10px]">
                            <Image className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]" src={asuhan} alt="asuhan"></Image>
                            <p>PANTI ASUHAN</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="pt-[60px] z-10">
                <a href="/activity" className="bg-gradient-to-r from-blueblub to-redblub bg-clip-text text-transparent font-montserrat font-semibold text-[20px]">
                    <button className="bg-[white] hover:bg-[#e2e2e2] font-bold py-2 px-4 rounded pt">Lihat Semua</button>
                </a>
            </div>
        </div>
    )
}