import Image from "next/image"
import headline from "@/public/image/history/7.jpg"

export default function Header() {
    return(
        <div>
            <div className="relative w-screen h-[740px] top-[78px]">
            <div style={{ backgroundImage: `url(${headline.src})` }} className="drop-shadow-lg w-screen h-[740px] bg-cover bg-fixed bg-center brightness-[50%]"></div>
             <div className="absolute top-[38%] max-lg:left-[40%] max-[1004px]:top-[34%] max-lg:translate-x-[-50%] lg:pl-[20%] flex flex-col z-10">
                <div className="bg-gradient-to-r from-[#181818] px-3 pt-3 pb-3">
                    <p className=" font-montserrat font-norma text-[35px] max-[730px]:text-[25px] text-[white]">Sejarah Kami</p>
                    <p className=" font-montserrat font-semibold text-[45px] max-[730px]:text-[35px] text-[white] drop-shadow">Terbentuknya Panca Budi Foundation</p>
                </div>
            </div>
            </div>
        </div>
    )
}