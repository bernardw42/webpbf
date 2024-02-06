import Image from "next/image"
import venny from "@/public/image/tim/venny.jpg"
import anas from "@/public/image/tim/Agnes.jpg"
import finance from "@/public/image/tim/finance.jpg"

export default function CompanyServices() {
    return (
        <div className="flex flex-col justify-center items-center bg-[white] w-screen h-[1500px] font-montserrat pt-[80px] pb-[80px] z-10" >
            <Image className="absolute w-screen md:h-[770px] h-[1400px] object-cover bg-center opacity-[10%] overflow-hidden" src={finance} alt="servis"></Image>
            <div className="font-montserrat text-[black] z-10">
                <p className="max-w-[1000px] font-semibold text-center text-[35px] px-4">Bagian Finance, Accounting, dan Tax</p>
                <div className="flex max-md:flex-col justify-around lg:gap-x-[170px] gap-x-[70px] gap-y-[50px] pt-[70px] font-medium text-[25px] text-center">
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={venny} alt="venny"></Image>
                        <p className="pt-[10px] font-semibold">Accountant</p>
                        <p>Venny</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image className="sm:w-[320px] sm:h-[400px] w-[280px] h-[350px]" src={anas} alt="anas"></Image>
                        <p className="pt-[10px] font-semibold">Finance</p>
                        <p>Anastasya Simanjuntak</p>
                    </div>
                </div>
            </div>
        </div>
    )
}