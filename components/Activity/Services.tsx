import Image from "next/image"
import darah from "@/public/image/home/activity/blood.png"
import sembako from "@/public/image/home/activity/sembako.png"
import reboisasi from "@/public/image/home/activity/reboisasi.png"
import asuhan from "@/public/image/home/activity/asuhan.png"  
import jompo from "@/public/image/home/activity/jompo.png"
import beasiswa from "@/public/image/home/activity/beasiswa.png"
import bakti from "@/public/image/home/activity/bakti.png"
import bencana from "@/public/image/home/activity/Bencana.png"

export default function Services() {
    return(
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blueblub to-redblub w-screen h-[2200px] font-montserrat text-[white] pt-[100px] pb-[30px]">
            <p className="max-w-[1000px] font-semibold text-center text-[35px] px-[5%]">Semua Aktivitas dan Bantuan</p>
            <div className="flex flex-wrap justify-center gap-x-[70px] max-sm:gap-x-[50px] gap-y-[30px] pt-[70px] font-medium text-[18px] max-md:text-[15px] text-center max-w-[1100px] px-[5%]">
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]" src={darah} alt="blood"></Image>
                        <p>DONOR DARAH</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]"  src={sembako} alt="sembako"></Image>
                        <p>SEMBAKO</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]"  src={reboisasi} alt="reboisasi"></Image>
                        <p>REBOISASI</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]"  src={bakti} alt="bakti"></Image>
                        <p>KERJA BAKTI</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]" src={asuhan} alt="asuhan"></Image>
                        <p>PANTI ASUHAN</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]" src={jompo} alt="jompo"></Image>
                        <p>PANTI JOMPO</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]" src={beasiswa} alt="beasiswa"></Image>
                        <p>BEASISWA</p>
                    </section>
                    <section className="flex flex-col justify-center items-center gap-y-[20px]">
                        <Image className="w-[160px] h-[160px] max-lg:w-[130px] max-lg:h-[130px]" src={bencana} alt="bencana"></Image>
                        <p>BENCANA ALAM</p>
                    </section>
            </div>
        </div>
    )
}