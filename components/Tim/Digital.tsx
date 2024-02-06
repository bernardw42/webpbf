import Image from "next/image"
import rey from "@/public/image/tim/REY.jpg"
import beru from "@/public/image/tim/Beru.jpg"
import diva from "@/public/image/tim/DIVA.jpg"
import syahrul from "@/public/image/tim/syahrul.jpg"  
import digital from "@/public/image/tim/digital.jpg"  

export default function CompanyServices() {
    return (
        <div className="flex flex-col justify-center items-center bg-blueblub w-screen h-[2320px] font-montserrat pt-[80px] pb-[80px] z-20" >
            <Image className="absolute w-screen md:h-[1320px] sm:h-[2320px] max-sm:h-[2230px] max-[484px]:h-[2280px] object-cover bg-center opacity-[20%]" src={digital} alt="servis"></Image>
            <div className="font-montserrat text-[white] z-10">
                <p className="max-w-[1000px] font-semibold text-center text-[35px] px-4 z-10">Bagian Digital Marketing</p>
                <div className="flex max-md:flex-col justify-around lg:gap-x-[170px] gap-x-[70px] gap-y-[50px] pt-[50px] text-[25px] text-center z-10">
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={diva} alt="diva"></Image>
                        <p className="pt-[10px] font-semibold">Content Manager</p>
                        <p>Divasari Larasati Ulhaq</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={beru} alt="beru"></Image>
                        <p className="pt-[10px] font-semibold">Front End Developer</p>
                        <p>Bernard Wijaya</p>
                    </div>
                </div>
                <div className="flex max-md:flex-col justify-around lg:gap-x-[170px] gap-x-[70px] gap-y-[50px] pt-[50px] text-[25px] text-center z-10">
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={syahrul} alt="syahrul"></Image>
                        <p className="pt-[10px] font-semibold">Supervisor</p>
                        <p>Muhammad Syahrul</p>
                        <p>Agustian</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={rey} alt="rey"></Image>
                        <p className="pt-[10px] font-semibold">Graphic Designer</p>
                        <p>Bradley Aaron</p>
                        <p>Corbishley</p>
                    </div>
                </div>
            </div>
        </div>
    )
}