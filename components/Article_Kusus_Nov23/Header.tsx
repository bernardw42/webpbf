import headline from "@/public/image/article/3/a.jpg"

export default function Header() {
    return(
        <div id="top">
            <div className="relative w-screen h-[740px] top-[78px]">
            <div style={{ backgroundImage: `url(${headline.src})` }} className="drop-shadow-lg w-screen h-[740px] bg-cover bg-fixed bg-center brightness-[70%]"></div>
             <div className="absolute top-[38%] max-lg:left-[40%] max-[406px]:top-[34%] max-lg:translate-x-[-50%] lg:pl-[20%] flex flex-col z-10">
                <div className="bg-gradient-to-r from-[#181818] px-3 pt-3 pb-3">
                    <p className=" font-montserrat font-norma text-[35px] max-[890px]:text-[25px] text-[white]">Artikel Aktivitas</p>
                    <p className=" font-montserrat font-semibold text-[45px] max-[890px]:text-[35px] text-[white] drop-shadow">November 2023</p>
                </div>
             </div> 
            </div>
        </div>
    )
}