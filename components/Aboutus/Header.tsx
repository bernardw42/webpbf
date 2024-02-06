import Image from "next/image"
import headline from "@/public/image/aboutus/Fixed/header_a.jpg"

export default function Header() {
    return(
        <div>
            <div className="relative w-screen h-[740px] top-[78px]">
            <div style={{ backgroundImage: `url(${headline.src})` }} className="drop-shadow-lg w-screen h-[740px] bg-cover bg-fixed bg-center brightness-[70%]"></div>
             <div className="absolute top-[38%] max-lg:left-[40%] max-[357px]:top-[34%] max-lg:translate-x-[-50%] lg:pl-[20%] flex flex-col z-10">
                <div className="bg-gradient-to-r from-[#181818] px-3 pt-3 pb-3">
                    <p className=" font-montserrat font-norma text-[35px] max-[878px]:text-[25px] text-[white]">Tentang Kami</p>
                    <p className=" font-montserrat font-semibold text-[45px] max-[878px]:text-[35px] text-[white] drop-shadow">Panca Budi Foundation</p>
                </div>
             </div> 
            </div>
        </div>
    )
}