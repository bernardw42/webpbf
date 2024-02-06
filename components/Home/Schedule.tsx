import Image from "next/image"
import banner from "@/public/image/home/bg/yes.jpg"
import sched from "@/public/image/home/bg/sched2.jpg"

export default function Schedule() {
    return(
        <div className="flex flex-col justify-center items-center bg-blueblub w-screen h-[1500px] font-montserrat pt-[100px] pb-[100px]">
            <Image className="absolute w-screen h-[1500px] md:bg-top object-cover bg-center opacity-[20%]" src={sched} alt="servis"></Image>
            <div className="font-montserrat text-[white] z-10">
                <p className="max-w-[1000px] font-semibold text-center text-[35px] px-[5%]">Jadwal Aktivitas di Masa Terdekat</p>
                <p className="font-normal text-center text-[30px] pt-[45px]">Event Terdekat</p>
            </div>
            <Image className="py-[70px] px-4 z-10" src={banner} alt="schedule" width={1000} height={300}></Image>
            <div className=" z-10">
                <a href="https://www.instagram.com/pancabudifoundation/">
                    <button className="bg-[white] hover:bg-[#e2e2e2] font-bold py-[8px] px-[16px] rounded text-[20px] max-md:text-[15px]">
                        Lihat Semua
                    </button>
                </a>
            </div>
        </div>
    )
}  